import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  categories, languages, asmaHusna, asmaAnbiya, salawat, burdah, rathib, dhikr, adhkar,
  type Category, type Dua
} from './data/duasData';
import { yaseenVerses } from './data/yaseenData';
import { extendedSalawat, extendedDhikr, extendedAdhkar } from './data/extendedData';

interface NotificationSchedule {
  id: string;
  duaId: string;
  duaArabic: string;
  duaTranslation: string;
  times: string[];
  days: number[];
  enabled: boolean;
  repeat: boolean;
}

type Theme = 'light' | 'dark' | 'sepia';
type ArabicSize = 'standard' | 'medium' | 'large' | 'huge';
type View = 'home' | 'category' | 'asma-husna' | 'asma-anbiya' | 'salawat' | 'burdah' | 'rathib' | 'yaseen' | 'dhikr' | 'tasbeeh' | 'bookmarks' | 'settings' | 'schedule-manager' | 'per-dua-notif' | 'streaks';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [arabicSize, setArabicSize] = useState<ArabicSize>(() => (localStorage.getItem('arabicSize') as ArabicSize) || 'standard');
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<string[]>(() => JSON.parse(localStorage.getItem('bookmarks') || '[]'));
  const [counters, setCounters] = useState<Record<string, number>>(() => JSON.parse(localStorage.getItem('counters') || '{}'));
  const [tasbeehCount, setTasbeehCount] = useState(0);
  const [tasbeehTarget, setTasbeehTarget] = useState(33);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const [dailyDua, setDailyDua] = useState<Dua | null>(null);
  const [audioSpeed, setAudioSpeed] = useState(() => parseFloat(localStorage.getItem('audioSpeed') || '0.9'));
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('streak') || '0'));
  const [lastVisit, setLastVisit] = useState(() => localStorage.getItem('lastVisit') || '');
  const [selectedDuaForNotif, setSelectedDuaForNotif] = useState<Dua | null>(null);
  const [notifPermission, setNotifPermission] = useState<NotificationPermission>('default');
  
  // Notification schedules - unlimited per dua
  const [notificationSchedules, setNotificationSchedules] = useState<NotificationSchedule[]>(() => 
    JSON.parse(localStorage.getItem('notificationSchedules') || '[]')
  );
  
  // New schedule form state
  const [newTimes, setNewTimes] = useState<string[]>(['06:00']);
  const [newDays, setNewDays] = useState<number[]>([0,1,2,3,4,5,6]);
  const [newRepeat, setNewRepeat] = useState(true);
  
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const allDuas = useMemo(() => {
    const all: Dua[] = [];
    categories.forEach(cat => all.push(...cat.duas));
    return all;
  }, []);

  // Streak tracking
  useEffect(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastVisit === today) return;
    if (lastVisit === yesterday) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('streak', String(newStreak));
    } else if (lastVisit !== today) {
      setStreak(1);
      localStorage.setItem('streak', '1');
    }
    localStorage.setItem('lastVisit', today);
    setLastVisit(today);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
    localStorage.setItem('arabicSize', arabicSize);
    localStorage.setItem('audioSpeed', String(audioSpeed));
    localStorage.setItem('notificationSchedules', JSON.stringify(notificationSchedules));
  }, [theme, lang, arabicSize, audioSpeed, notificationSchedules]);

  useEffect(() => { localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('counters', JSON.stringify(counters)); }, [counters]);

  useEffect(() => {
    const dayIndex = new Date().getDate() % allDuas.length;
    setDailyDua(allDuas[dayIndex]);
  }, [allDuas]);

  useEffect(() => {
    if ('Notification' in window) setNotifPermission(Notification.permission);
  }, []);

  // Notification scheduler - checks every minute
  useEffect(() => {
    if (notifPermission !== 'granted') return;
    
    const checkNotifications = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const currentDay = now.getDay();
      
      notificationSchedules.forEach(schedule => {
        if (!schedule.enabled) return;
        if (!schedule.days.includes(currentDay)) return;
        if (!schedule.times.includes(currentTime)) return;
        
        // Check if we already notified in this minute (using sessionStorage)
        const key = `notified-${schedule.id}-${currentTime}-${now.toDateString()}`;
        if (sessionStorage.getItem(key)) return;
        sessionStorage.setItem(key, 'true');
        
        new Notification('🕌 Dua Reminder', {
          body: schedule.duaTranslation,
          tag: schedule.id,
          requireInteraction: true
        });
      });
    };
    
    const interval = setInterval(checkNotifications, 60000);
    return () => clearInterval(interval);
  }, [notificationSchedules, notifPermission]);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  }, []);

  const incrementCounter = useCallback((id: string) => {
    setCounters(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const resetCounter = useCallback((id: string) => {
    setCounters(prev => ({ ...prev, [id]: 0 }));
  }, []);

  const copyToClipboard = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const shareDua = useCallback((dua: Dua) => {
    const text = `${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translations[lang] || dua.translations.en}\n\n- Comprehensive Duas App`;
    if (navigator.share) {
      navigator.share({ title: 'Islamic Dua', text });
    } else {
      copyToClipboard(text, dua.id);
    }
  }, [lang, copyToClipboard]);

  const playClickSound = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 800;
      osc.type = 'sine';
      gain.gain.value = 0.1;
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
  }, []);

  const speakArabic = useCallback((text: string, id: string) => {
    if (currentAudioId === id && isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentAudioId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = audioSpeed;
    utterance.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) utterance.voice = arabicVoice;
    utterance.onend = () => { setIsPlaying(false); setCurrentAudioId(null); };
    utterance.onerror = () => { setIsPlaying(false); setCurrentAudioId(null); };
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setCurrentAudioId(id);
  }, [currentAudioId, isPlaying, audioSpeed]);

  const incrementTasbeeh = useCallback(() => {
    setTasbeehCount(prev => prev + 1);
    playClickSound();
    if (navigator.vibrate) navigator.vibrate(30);
  }, [playClickSound]);

  const getArabicFontSize = () => {
    switch (arabicSize) {
      case 'medium': return 'text-2xl';
      case 'large': return 'text-3xl';
      case 'huge': return 'text-4xl';
      default: return 'text-xl';
    }
  };

  const getTranslation = (translations: Record<string, string>) => {
    return translations[lang] || translations['en'] || '';
  };

  const themeClasses = { light: 'bg-gray-50 text-gray-900', dark: 'bg-[#00160D] text-white', sepia: 'bg-[#F5E6D3] text-[#3E2723]' };
  const cardClasses = { light: 'bg-white shadow-md border border-gray-200', dark: 'bg-[#003D2B] shadow-lg shadow-black/20 border border-[#005A3C]/30', sepia: 'bg-[#FFF8E7] shadow-md border border-[#D4A574]/30' };
  const accentColor = theme === 'sepia' ? '#8B4513' : '#D4AF37';

  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      search: { en: 'Search duas...', ar: 'ابحث...', ta: 'தேடுங்கள்...', ml: 'തിരയുക...', ur: 'تلاش...', hi: 'खोजें...', id: 'Cari...', fr: 'Rechercher...', tr: 'Ara...', bn: 'খুঁজুন...' },
      home: { en: 'Home', ar: 'الرئيسية', ta: 'முகப்பு', ml: 'ഹോം', ur: 'ہوم', hi: 'होम', id: 'Beranda', fr: 'Accueil', tr: 'Ana Sayfa', bn: 'হোম' },
      categories: { en: 'Categories', ar: 'الفئات', ta: 'வகைகள்', ml: 'വിഭാഗങ്ങൾ', ur: 'زمرے', hi: 'श्रेणियाँ', id: 'Kategori', fr: 'Catégories', tr: 'Kategoriler', bn: 'বিভাগ' },
      bookmarks: { en: 'Bookmarks', ar: 'المفضلة', ta: 'புத்தகக்குறிகள்', ml: 'ബുക്ക്മാർക്കുകൾ', ur: 'بک مارکس', hi: 'बुकमार्क्स', id: 'Bookmark', fr: 'Favoris', tr: 'Yer İmleri', bn: 'বুকমার্ক' },
      tasbeeh: { en: 'Tasbeeh', ar: 'المسبحة', ta: 'தஸ்பீஹ்', ml: 'തസ്ബീഹ്', ur: 'تسبیح', hi: 'तस्बीह', id: 'Tasbih', fr: 'Tasbih', tr: 'Tesbih', bn: 'তাসবীহ' },
      settings: { en: 'Settings', ar: 'الإعدادات', ta: 'அமைப்புகள்', ml: 'ക്രമീകരണം', ur: 'ترتیبات', hi: 'सेटिंग्स', id: 'Pengaturan', fr: 'Paramètres', tr: 'Ayarlar', bn: 'সেটিংস' },
      asmaHusna: { en: '99 Names', ar: 'أسماء الله', ta: '99 பெயர்கள்', ml: '99 നാമങ്ങൾ', ur: 'اسماء الحسنی', hi: 'अस्माउल हुस्ना', id: '99 Nama', fr: '99 Noms', tr: 'Esmaül Hüsna', bn: '৯৯ নাম' },
      asmaAnbiya: { en: '25 Prophets', ar: 'الأنبياء', ta: '25 நபிகள்', ml: '25 നബി', ur: '۲۵ انبیاء', hi: '२५ नबी', id: '25 Nabi', fr: '25 Prophètes', tr: '25 Peygamber', bn: '২৫ নবী' },
      salawat: { en: 'Salawat', ar: 'الصلوات', ta: 'ஸலவாத்', ml: 'സ്വലവാത്ത്', ur: 'صلوات', hi: 'सलावात', id: 'Shalawat', fr: 'Salawat', tr: 'Salavat', bn: 'সালাওয়াত' },
      burdah: { en: 'Burdah', ar: 'البردة', ta: 'புர்தா', ml: 'ബുർദ', ur: 'بردہ', hi: 'बुर्दा', id: 'Burdah', fr: 'Burdah', tr: 'Bürde', bn: 'বুরদা' },
      rathib: { en: 'Rathib', ar: 'الراتب', ta: 'ராதில்', ml: 'റാതിബ്', ur: 'راتب', hi: 'रातिब', id: 'Ratib', fr: 'Rathib', tr: 'Ratib', bn: 'রাতিব' },
      yaseen: { en: 'Yaseen', ar: 'یس', ta: 'யாசீன்', ml: 'യാസീൻ', ur: 'یٰسین', hi: 'यासीन', id: 'Yasin', fr: 'Yasin', tr: 'Yasin', bn: 'ইয়াসিন' },
      dhikr: { en: 'Dhikr', ar: 'الذكر', ta: 'திக்ர்', ml: 'ധിക്റ്', ur: 'ذکر', hi: 'ज़िक्र', id: 'Dzikir', fr: 'Dhikr', tr: 'Zikir', bn: 'যিকির' },
      dailyDua: { en: 'Dua of the Day', ar: 'دعاء اليوم', ta: 'இன்றைய துஆ', ml: 'ഇന്നത്തെ ദുആ', ur: 'آج کی دعا', hi: 'आज की दुआ', id: 'Doa Hari Ini', fr: 'Invocation du Jour', tr: 'Günün Duası', bn: 'আজকের দোয়া' },
      scheduleManager: { en: 'My Schedules', ar: 'جداولي', ta: 'என் அட்டவணை', ml: 'എന്റെ ഷെഡ്യൂളുകൾ', ur: 'میرے شیڈول', hi: 'मेरे शेड्यूल', id: 'Jadwal Saya', fr: 'Mes Programmes', tr: 'Programlarım', bn: 'আমার সময়সূচী' },
      streak: { en: 'Streak', ar: 'السلسلة', ta: 'தொடர்', ml: 'സ്ട്രീക്ക്', ur: 'سلسلہ', hi: 'स्ट्रीक', id: 'Streak', fr: 'Série', tr: 'Seri', bn: 'স্ট্রিক' },
    };
    return translations[key]?.[lang] || translations[key]?.['en'] || key;
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    const q = searchQuery.toLowerCase();
    return categories.filter(cat => {
      const name = cat.name[lang] || cat.name['en'];
      return name.toLowerCase().includes(q) ||
        cat.duas.some(d => {
          const trans = getTranslation(d.translations);
          return trans.toLowerCase().includes(q) || d.transliteration.toLowerCase().includes(q);
        });
    });
  }, [searchQuery, lang]);

  const renderDuaCard = (dua: Dua, index: number) => {
    const isBookmarked = bookmarks.includes(dua.id);
    const count = counters[dua.id] || 0;
    const target = dua.repeat || 1;
    const hasSchedule = notificationSchedules.some(s => s.duaId === dua.id);

    return (
      <div key={dua.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3 transition-all duration-200`}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
            #{index + 1}
          </span>
          <div className="flex gap-1 flex-wrap justify-end">
            <button onClick={() => speakArabic(dua.arabic, dua.id)} className="p-2 rounded-full hover:bg-white/10 text-sm" title="Listen">
              {currentAudioId === dua.id && isPlaying ? '⏸️' : '🔊'}
            </button>
            <button onClick={() => toggleBookmark(dua.id)} className="p-2 rounded-full hover:bg-white/10 text-sm">
              {isBookmarked ? '⭐' : '☆'}
            </button>
            <button onClick={() => shareDua(dua)} className="p-2 rounded-full hover:bg-white/10 text-sm" title="Share">📤</button>
            <button onClick={() => { setSelectedDuaForNotif(dua); setCurrentView('per-dua-notif'); }} 
              className={`p-2 rounded-full hover:bg-white/10 text-sm relative`} title="Schedule">
              🔔
              {hasSchedule && <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500"></span>}
            </button>
            <button onClick={() => copyToClipboard(dua.arabic + '\n' + dua.transliteration + '\n' + getTranslation(dua.translations), dua.id)} className="p-2 rounded-full hover:bg-white/10 text-sm">
              {copiedId === dua.id ? '✅' : '📋'}
            </button>
          </div>
        </div>
        <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-2`} style={{ color: accentColor }} dir="rtl">{dua.arabic}</p>
        <p className="text-xs italic opacity-70 mb-2">{dua.transliteration}</p>
        <p className={`text-sm leading-relaxed mb-2 ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(dua.translations)}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {dua.reference && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 opacity-60">📖 {dua.reference}</span>}
          {dua.benefit && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 opacity-60">💡 {dua.benefit}</span>}
          {dua.repeat && (
            <div className="flex items-center gap-1 ml-auto">
              <button onClick={() => incrementCounter(dua.id)} className="px-2 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: count >= target ? '#4CAF50' : accentColor, color: '#fff' }}>
                {count}x{target}
              </button>
              {count > 0 && <button onClick={() => resetCounter(dua.id)} className="text-xs opacity-50">↺</button>}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="space-y-4">
      {streak > 0 && (
        <div className={`${cardClasses[theme]} rounded-xl p-3 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-sm font-bold">{streak} Day Streak!</p>
              <p className="text-xs opacity-60">Keep it up!</p>
            </div>
          </div>
          <button onClick={() => setCurrentView('streaks')} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
            Stats
          </button>
        </div>
      )}

      {dailyDua && (
        <div className={`${cardClasses[theme]} rounded-2xl p-4 border-l-4`} style={{ borderLeftColor: accentColor }}>
          <h3 className="text-xs font-bold mb-2" style={{ color: accentColor }}>🌟 {t('dailyDua')}</h3>
          <p className="arabic-font text-lg text-right mb-2" dir="rtl">{dailyDua.arabic}</p>
          <p className="text-sm opacity-70">{getTranslation(dailyDua.translations)}</p>
        </div>
      )}

      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {[
          { icon: '📿', label: t('tasbeeh'), view: 'tasbeeh' as View },
          { icon: '📖', label: t('asmaHusna'), view: 'asma-husna' as View },
          { icon: '🌙', label: t('asmaAnbiya'), view: 'asma-anbiya' as View },
          { icon: '🤲', label: t('salawat'), view: 'salawat' as View },
          { icon: '📜', label: t('burdah'), view: 'burdah' as View },
          { icon: '🕌', label: t('rathib'), view: 'rathib' as View },
          { icon: '📖', label: t('yaseen'), view: 'yaseen' as View },
          { icon: '📿', label: t('dhikr'), view: 'dhikr' as View },
        ].map(item => (
          <button key={item.view} onClick={() => setCurrentView(item.view)} className={`${cardClasses[theme]} rounded-xl p-2 text-center transition-all active:scale-95`}>
            <span className="text-xl block">{item.icon}</span>
            <span className="text-[10px] font-medium block mt-0.5 leading-tight">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => setCurrentView('schedule-manager')} className={`${cardClasses[theme]} rounded-xl p-3 text-center`}>
          <span className="text-2xl block">🔔</span>
          <span className="text-xs font-medium">{t('scheduleManager')}</span>
          {notificationSchedules.length > 0 && (
            <span className="text-[10px] opacity-60">{notificationSchedules.length} active</span>
          )}
        </button>
        <button onClick={() => setCurrentView('streaks')} className={`${cardClasses[theme]} rounded-xl p-3 text-center`}>
          <span className="text-2xl block">🔥</span>
          <span className="text-xs font-medium">{t('streak')} & Stats</span>
        </button>
      </div>

      <div>
        <h2 className="text-sm font-bold mb-3 flex items-center gap-2"><span style={{ color: accentColor }}>📂</span> {t('categories')} ({categories.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredCategories.map((cat) => (
            <button key={cat.id} onClick={() => { setSelectedCategory(cat); setCurrentView('category'); }}
              className={`${cardClasses[theme]} rounded-xl p-3 text-center transition-all active:scale-95`} style={{ borderLeft: `3px solid ${cat.color}` }}>
              <span className="text-2xl block">{cat.icon}</span>
              <span className="text-xs font-semibold block mt-1" style={{ color: cat.color }}>{cat.name[lang] || cat.name['en']}</span>
              <span className="text-[10px] opacity-40">{cat.duas.length} duas</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerDuaNotif = () => {
    if (!selectedDuaForNotif) return null;
    const existingSchedules = notificationSchedules.filter(s => s.duaId === selectedDuaForNotif.id);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const addNewSchedule = () => {
      if (notifPermission !== 'granted') {
        if ('Notification' in window) {
          Notification.requestPermission().then(p => {
            setNotifPermission(p);
            if (p !== 'granted') {
              alert('Please allow notifications to set reminders');
              return;
            }
          });
        }
        return;
      }
      
      const newSchedule: NotificationSchedule = {
        id: `notif-${Date.now()}`,
        duaId: selectedDuaForNotif.id,
        duaArabic: selectedDuaForNotif.arabic,
        duaTranslation: getTranslation(selectedDuaForNotif.translations),
        times: [...newTimes],
        days: [...newDays],
        enabled: true,
        repeat: newRepeat,
      };
      setNotificationSchedules(prev => [...prev, newSchedule]);
      setNewTimes(['06:00']);
      setNewDays([0,1,2,3,4,5,6]);
      alert('✅ Reminder scheduled successfully!');
    };
    
    const deleteSchedule = (id: string) => {
      setNotificationSchedules(prev => prev.filter(s => s.id !== id));
    };
    
    const toggleSchedule = (id: string) => {
      setNotificationSchedules(prev => prev.map(s => s.id === id ? {...s, enabled: !s.enabled} : s));
    };
    
    const addTime = () => {
      const lastTime = newTimes[newTimes.length - 1] || '06:00';
      setNewTimes([...newTimes, lastTime]);
    };
    
    const removeTime = (index: number) => {
      if (newTimes.length > 1) {
        setNewTimes(newTimes.filter((_, i) => i !== index));
      }
    };
    
    const updateTime = (index: number, value: string) => {
      const updated = [...newTimes];
      updated[index] = value;
      setNewTimes(updated);
    };
    
    const toggleDay = (day: number) => {
      if (newDays.includes(day)) {
        setNewDays(newDays.filter(d => d !== day));
      } else {
        setNewDays([...newDays, day].sort());
      }
    };

    return (
      <div>
        <button onClick={() => { setCurrentView('home'); setSelectedDuaForNotif(null); }} className="mb-3 text-sm opacity-70">← Back</button>
        <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🔔 Schedule Reminders</h2>
        
        <div className={`${cardClasses[theme]} rounded-xl p-4 mb-4`}>
          <p className="arabic-font text-base text-right mb-2" dir="rtl">{selectedDuaForNotif.arabic}</p>
          <p className="text-xs opacity-70">{getTranslation(selectedDuaForNotif.translations)}</p>
        </div>
        
        {/* Existing Schedules */}
        {existingSchedules.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">Active Reminders ({existingSchedules.length})</h3>
            {existingSchedules.map(schedule => (
              <div key={schedule.id} className={`${cardClasses[theme]} rounded-xl p-3 mb-2 ${!schedule.enabled ? 'opacity-50' : ''}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1 mb-1">
                      {schedule.times.map(time => (
                        <span key={time} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: accentColor + '30', color: accentColor }}>
                          🕐 {time}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {schedule.days.map(day => (
                        <span key={day} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10">
                          {dayNames[day]}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] opacity-50 mt-1">
                      {schedule.repeat ? '🔁 Repeats' : '⏰ One-time'}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button onClick={() => toggleSchedule(schedule.id)} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: schedule.enabled ? '#4CAF50' : '#666', color: '#fff' }}>
                      {schedule.enabled ? 'ON' : 'OFF'}
                    </button>
                    <button onClick={() => deleteSchedule(schedule.id)} className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-500">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* New Schedule Form */}
        <div className={`${cardClasses[theme]} rounded-xl p-4`}>
          <h3 className="text-sm font-bold mb-3">➕ Add New Reminder</h3>
          
          <div className="mb-3">
            <label className="text-xs opacity-60 block mb-1">Times (add multiple)</label>
            {newTimes.map((time, i) => (
              <div key={i} className="flex gap-2 mb-1">
                <input type="time" value={time} onChange={e => updateTime(i, e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg text-sm outline-none" 
                  style={{ backgroundColor: theme === 'dark' ? '#003D2B' : '#f3f4f6', border: `1px solid ${accentColor}30` }} />
                {newTimes.length > 1 && (
                  <button onClick={() => removeTime(i)} className="px-2 text-red-500">×</button>
                )}
              </div>
            ))}
            <button onClick={addTime} className="text-xs px-3 py-1 rounded-full mt-1" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
              + Add Time
            </button>
          </div>
          
          <div className="mb-3">
            <label className="text-xs opacity-60 block mb-1">Days</label>
            <div className="flex flex-wrap gap-1">
              {dayNames.map((name, i) => (
                <button key={i} onClick={() => toggleDay(i)}
                  className={`px-2 py-1 rounded text-xs transition-all ${newDays.includes(i) ? 'font-bold' : 'opacity-40'}`}
                  style={{ backgroundColor: newDays.includes(i) ? accentColor : 'transparent', color: newDays.includes(i) ? '#00160D' : 'inherit' }}>
                  {name}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setNewDays([0,1,2,3,4,5,6])} className="text-xs px-2 py-1 rounded bg-white/10">All Days</button>
              <button onClick={() => setNewDays([1,2,3,4,5])} className="text-xs px-2 py-1 rounded bg-white/10">Weekdays</button>
              <button onClick={() => setNewDays([0,6])} className="text-xs px-2 py-1 rounded bg-white/10">Weekends</button>
            </div>
          </div>
          
          <div className="mb-3">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={newRepeat} onChange={e => setNewRepeat(e.target.checked)} />
              <span>Repeat weekly</span>
            </label>
          </div>
          
          <button onClick={addNewSchedule} 
            className="w-full py-2 rounded-lg font-bold text-sm" 
            style={{ backgroundColor: accentColor, color: '#00160D' }}>
            ✅ Schedule Reminder
          </button>
          
          {notifPermission !== 'granted' && (
            <p className="text-xs text-center mt-2 opacity-60">
              ⚠️ Please allow notifications in browser settings
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderScheduleManager = () => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div>
        <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
        <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🔔 {t('scheduleManager')}</h2>
        
        {notificationSchedules.length === 0 ? (
          <div className={`${cardClasses[theme]} rounded-xl p-8 text-center`}>
            <span className="text-4xl block mb-3">🔔</span>
            <p className="text-sm opacity-60">No reminders scheduled yet</p>
            <p className="text-xs opacity-40 mt-1">Go to any dua and tap 🔔 to schedule</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notificationSchedules.map(schedule => {
              const dua = allDuas.find(d => d.id === schedule.duaId);
              return (
                <div key={schedule.id} className={`${cardClasses[theme]} rounded-xl p-3 ${!schedule.enabled ? 'opacity-50' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="arabic-font text-sm text-right mb-1" dir="rtl">{schedule.duaArabic.substring(0, 80)}...</p>
                      <div className="flex flex-wrap gap-1 mb-1">
                        {schedule.times.map(time => (
                          <span key={time} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: accentColor + '30', color: accentColor }}>
                            🕐 {time}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {schedule.days.map(day => (
                          <span key={day} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10">
                            {dayNames[day]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button onClick={() => setNotificationSchedules(prev => prev.map(s => s.id === schedule.id ? {...s, enabled: !s.enabled} : s))} 
                        className="text-xs px-2 py-1 rounded" style={{ backgroundColor: schedule.enabled ? '#4CAF50' : '#666', color: '#fff' }}>
                        {schedule.enabled ? 'ON' : 'OFF'}
                      </button>
                      <button onClick={() => {
                        if (dua) { setSelectedDuaForNotif(dua); setCurrentView('per-dua-notif'); }
                      }} className="text-xs px-2 py-1 rounded bg-white/10">
                        ✏️
                      </button>
                      <button onClick={() => setNotificationSchedules(prev => prev.filter(s => s.id !== schedule.id))} 
                        className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-500">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderYaseen = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
      <div className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
        <h2 className="text-xl font-bold text-center mb-2" style={{ color: accentColor }}>سورة يس</h2>
        <p className="text-center text-sm opacity-70 mb-4">Surah Yaseen - The Heart of the Quran</p>
        <div className="space-y-3">
          {yaseenVerses.map((verse) => (
            <div key={verse.v} className="border-b border-white/10 pb-3 last:border-0">
              <div className="flex items-start gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
                  {verse.v}
                </span>
                <p className={`arabic-font ${getArabicFontSize()} text-right flex-1`} dir="rtl">{verse.ar}</p>
              </div>
              <p className="text-xs italic opacity-60 ml-8">{verse.tr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStreaks = () => {
    const totalDuas = Object.values(counters).reduce((a, b) => a + b, 0);
    return (
      <div>
        <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
        <h2 className="text-xl font-bold mb-6" style={{ color: accentColor }}>🔥 Stats & Achievements</h2>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`${cardClasses[theme]} rounded-xl p-4 text-center`}>
            <span className="text-3xl block mb-2">🔥</span>
            <p className="text-2xl font-bold" style={{ color: accentColor }}>{streak}</p>
            <p className="text-xs opacity-60">Day Streak</p>
          </div>
          <div className={`${cardClasses[theme]} rounded-xl p-4 text-center`}>
            <span className="text-3xl block mb-2">📿</span>
            <p className="text-2xl font-bold" style={{ color: accentColor }}>{totalDuas}</p>
            <p className="text-xs opacity-60">Recitations</p>
          </div>
          <div className={`${cardClasses[theme]} rounded-xl p-4 text-center`}>
            <span className="text-3xl block mb-2">⭐</span>
            <p className="text-2xl font-bold" style={{ color: accentColor }}>{bookmarks.length}</p>
            <p className="text-xs opacity-60">Bookmarks</p>
          </div>
          <div className={`${cardClasses[theme]} rounded-xl p-4 text-center`}>
            <span className="text-3xl block mb-2">🔔</span>
            <p className="text-2xl font-bold" style={{ color: accentColor }}>{notificationSchedules.length}</p>
            <p className="text-xs opacity-60">Reminders</p>
          </div>
        </div>
        <div className={`${cardClasses[theme]} rounded-xl p-4`}>
          <h3 className="text-sm font-bold mb-3">Achievements</h3>
          <div className="space-y-2">
            {[
              { name: 'First Dua', icon: '🌟', unlocked: totalDuas >= 1 },
              { name: '10 Recitations', icon: '📿', unlocked: totalDuas >= 10 },
              { name: '100 Recitations', icon: '💯', unlocked: totalDuas >= 100 },
              { name: '7 Day Streak', icon: '🔥', unlocked: streak >= 7 },
              { name: '30 Day Streak', icon: '🏆', unlocked: streak >= 30 },
              { name: 'First Reminder', icon: '🔔', unlocked: notificationSchedules.length >= 1 },
            ].map((ach, i) => (
              <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${ach.unlocked ? '' : 'opacity-30'}`} style={{ backgroundColor: ach.unlocked ? accentColor + '20' : 'transparent' }}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{ach.icon}</span>
                  <span className="text-sm font-medium">{ach.name}</span>
                </div>
                {ach.unlocked && <span className="text-xs" style={{ color: accentColor }}>✓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${themeClasses[theme]} transition-colors duration-300`}>
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: theme === 'dark' ? '#00160De6' : theme === 'sepia' ? '#F5E6D3e6' : '#ffffffe6', borderColor: accentColor + '20' }}>
        <div className="max-w-6xl mx-auto px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🕌</span>
              <div>
                <h1 className="text-sm font-bold" style={{ color: accentColor }}>Comprehensive Duas</h1>
                <p className="text-[10px] opacity-40">{allDuas.length}+ duas • 10 languages</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {streak > 0 && <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>🔥 {streak}</span>}
              <button onClick={() => setCurrentView('bookmarks')} className="p-1.5 rounded-full hover:bg-white/10 relative">
                <span className="text-sm">⭐</span>
                {bookmarks.length > 0 && <span className="absolute -top-0.5 -right-0.5 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ backgroundColor: accentColor, color: '#00160D' }}>{bookmarks.length}</span>}
              </button>
              <button onClick={() => setCurrentView('settings')} className="p-1.5 rounded-full hover:bg-white/10"><span className="text-sm">⚙️</span></button>
            </div>
          </div>
          <div className="relative">
            <input type="text" placeholder={t('search')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs outline-none" style={{ backgroundColor: theme === 'dark' ? '#003D2B' : theme === 'sepia' ? '#FFF8E7' : '#f3f4f6', border: `1px solid ${accentColor}30` }} />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 opacity-40 text-xs">🔍</span>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t" style={{ backgroundColor: theme === 'dark' ? '#00160Df0' : theme === 'sepia' ? '#F5E6D3f0' : '#ffffffe8', borderColor: accentColor + '20' }}>
        <div className="max-w-6xl mx-auto px-1 py-1.5 flex justify-around">
          {[
            { icon: '🏠', label: t('home'), view: 'home' as View },
            { icon: '📖', label: t('yaseen'), view: 'yaseen' as View },
            { icon: '📿', label: t('tasbeeh'), view: 'tasbeeh' as View },
            { icon: '🔔', label: t('scheduleManager'), view: 'schedule-manager' as View },
            { icon: '⚙️', label: t('settings'), view: 'settings' as View },
          ].map(item => (
            <button key={item.view} onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center py-0.5 px-2 rounded-lg transition-all ${currentView === item.view ? 'scale-105' : 'opacity-40'}`}
              style={{ color: currentView === item.view ? accentColor : 'inherit' }}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-[9px] mt-0.5 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-3 py-4 pb-20">
        {currentView === 'home' && renderHome()}
        {currentView === 'category' && selectedCategory && (
          <div>
            <button onClick={() => { setCurrentView('home'); setSelectedCategory(null); }} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedCategory.icon}</span>
              <div>
                <h2 className="text-lg font-bold" style={{ color: selectedCategory.color }}>{selectedCategory.name[lang] || selectedCategory.name['en']}</h2>
                <p className="text-xs opacity-50">{selectedCategory.duas.length} duas</p>
              </div>
            </div>
            {selectedCategory.duas.map((dua, i) => renderDuaCard(dua, i))}
          </div>
        )}
        {currentView === 'asma-husna' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>📖 {t('asmaHusna')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {asmaHusna.map((name) => (
                <div key={name.number} className={`${cardClasses[theme]} rounded-xl p-3`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: accentColor + '20', color: accentColor }}>{name.number}</span>
                    <button onClick={() => toggleBookmark(`asma-${name.number}`)} className="text-sm">{bookmarks.includes(`asma-${name.number}`) ? '⭐' : '☆'}</button>
                  </div>
                  <p className="arabic-font text-xl text-center mb-1" style={{ color: accentColor }} dir="rtl">{name.arabic}</p>
                  <p className="text-xs text-center font-medium">{name.transliteration}</p>
                  <p className={`text-[10px] text-center opacity-60 ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(name.translations)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentView === 'asma-anbiya' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🌙 {t('asmaAnbiya')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {asmaAnbiya.map((prophet) => (
                <div key={prophet.number} className={`${cardClasses[theme]} rounded-xl p-3`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: accentColor + '20', color: accentColor }}>#{prophet.number}</span>
                    {prophet.quranicMentions && <span className="text-[10px] opacity-40">{prophet.quranicMentions}x</span>}
                  </div>
                  <p className="arabic-font text-xl text-center mb-1" style={{ color: accentColor }} dir="rtl">{prophet.arabic}</p>
                  <p className="text-center text-sm font-bold">{getTranslation(prophet.name)}</p>
                  {prophet.era && <p className="text-[10px] text-center opacity-40">📅 {prophet.era}</p>}
                  {prophet.famousDua && <p className="text-xs text-center mt-1 opacity-60 arabic-font" dir="rtl">🤲 {prophet.famousDua}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {currentView === 'salawat' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🤲 {t('salawat')} ({salawat.length + extendedSalawat.length})</h2>
            {[...salawat, ...extendedSalawat].map((item: any) => (
              <div key={item.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
                {item.name && <h3 className="text-xs font-bold mb-2" style={{ color: accentColor }}>{item.name}</h3>}
                <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-2`} dir="rtl">{item.arabic}</p>
                <p className="text-xs italic opacity-70 mb-1">{item.transliteration}</p>
                <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(item.translations)}</p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => speakArabic(item.arabic, item.id)} className="text-xs px-2 py-1 rounded-full bg-white/10">🔊</button>
                  <button onClick={() => copyToClipboard(item.arabic, item.id)} className="text-xs px-2 py-1 rounded-full bg-white/10">{copiedId === item.id ? '✅' : '📋'}</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {currentView === 'burdah' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>📜 {t('burdah')}</h2>
            {burdah.map((item: any) => (
              <div key={item.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
                <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-2`} dir="rtl">{item.arabic}</p>
                <p className="text-xs italic opacity-70 mb-1">{item.transliteration}</p>
                <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(item.translations)}</p>
              </div>
            ))}
          </div>
        )}
        {currentView === 'rathib' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🕌 {t('rathib')}</h2>
            {rathib.map((item: any) => (
              <div key={item.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
                {item.name && <h3 className="text-xs font-bold mb-2" style={{ color: accentColor }}>{getTranslation(item.name)}</h3>}
                <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-2`} dir="rtl">{item.arabic}</p>
                <p className="text-xs italic opacity-70 mb-1">{item.transliteration}</p>
                <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(item.translations)}</p>
              </div>
            ))}
          </div>
        )}
        {currentView === 'dhikr' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>📿 {t('dhikr')} ({dhikr.length + extendedDhikr.length + adhkar.length + extendedAdhkar.length})</h2>
            <h3 className="text-sm font-bold mb-2 opacity-80">Dhikr</h3>
            {[...dhikr, ...extendedDhikr].map((d: any) => (
              <div key={d.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
                <p className={`arabic-font ${getArabicFontSize()} text-center leading-loose mb-2`} style={{ color: accentColor }} dir="rtl">{d.arabic}</p>
                <p className="text-xs italic text-center opacity-70 mb-1">{d.transliteration}</p>
                <p className={`text-sm text-center ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(d.translations)}</p>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>🔄 {d.repeat}x</span>
                  {d.benefit && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">💡 {d.benefit}</span>}
                </div>
              </div>
            ))}
            <h3 className="text-sm font-bold mb-2 mt-6 opacity-80">Adhkar</h3>
            {[...adhkar, ...extendedAdhkar].map((d: any) => (
              <div key={d.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
                <p className={`arabic-font ${getArabicFontSize()} text-center leading-loose mb-2`} style={{ color: accentColor }} dir="rtl">{d.arabic}</p>
                <p className="text-xs italic text-center opacity-70 mb-1">{d.transliteration}</p>
                <p className={`text-sm text-center ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(d.translations)}</p>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>🔄 {d.repeat}x</span>
                  {d.benefit && <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">💡 {d.benefit}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
        {currentView === 'tasbeeh' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <button onClick={() => setCurrentView('home')} className="mb-6 text-sm opacity-70 self-start">← {t('home')}</button>
            <h2 className="text-xl font-bold mb-6" style={{ color: accentColor }}>📿 {t('tasbeeh')}</h2>
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              {[33, 99, 100, 500, 1000].map(target => (
                <button key={target} onClick={() => { setTasbeehTarget(target); setTasbeehCount(0); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${tasbeehTarget === target ? 'scale-105' : 'opacity-50'}`}
                  style={{ backgroundColor: tasbeehTarget === target ? accentColor : 'transparent', color: tasbeehTarget === target ? '#00160D' : accentColor, border: `1px solid ${accentColor}` }}>
                  {target}x
                </button>
              ))}
            </div>
            <button onClick={incrementTasbeeh}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-5xl font-bold transition-all active:scale-90"
              style={{ background: `radial-gradient(circle, ${accentColor}40, ${accentColor}10)`, border: `3px solid ${accentColor}`, color: accentColor, boxShadow: `0 0 30px ${accentColor}30` }}>
              {tasbeehCount}
            </button>
            <div className="mt-4 text-center">
              <p className="text-xs opacity-50">{tasbeehCount >= tasbeehTarget ? '✅ Complete!' : `${tasbeehTarget - tasbeehCount} left`}</p>
              <div className="w-48 h-1.5 rounded-full mt-2 overflow-hidden" style={{ backgroundColor: accentColor + '20' }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${Math.min((tasbeehCount / tasbeehTarget) * 100, 100)}%`, backgroundColor: accentColor }} />
              </div>
              <button onClick={() => setTasbeehCount(0)} className="mt-3 text-xs opacity-50">Reset</button>
            </div>
          </div>
        )}
        {currentView === 'bookmarks' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>⭐ {t('bookmarks')} ({bookmarks.length})</h2>
            {bookmarks.length === 0 ? (
              <div className="text-center py-12 opacity-50"><span className="text-3xl block mb-2">⭐</span><p className="text-sm">No bookmarks yet</p></div>
            ) : allDuas.filter(d => bookmarks.includes(d.id)).map((dua, i) => renderDuaCard(dua, i))}
          </div>
        )}
        {currentView === 'settings' && (
          <div>
            <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
            <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>⚙️ {t('settings')}</h2>
            
            <div className={`${cardClasses[theme]} rounded-xl p-4 mb-3`}>
              <h3 className="text-sm font-bold mb-2">🎨 Theme</h3>
              <div className="flex gap-2">
                {(['light', 'dark', 'sepia'] as Theme[]).map(t => (
                  <button key={t} onClick={() => setTheme(t)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${theme === t ? 'font-bold scale-105' : 'opacity-50'}`}
                    style={{ backgroundColor: theme === t ? accentColor : 'transparent', color: theme === t ? '#00160D' : 'inherit', border: `1px solid ${accentColor}` }}>
                    {t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '📜'} {t}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${cardClasses[theme]} rounded-xl p-4 mb-3`}>
              <h3 className="text-sm font-bold mb-2">🌐 Language</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5">
                {languages.map(l => (
                  <button key={l.code} onClick={() => setLang(l.code)} className={`px-2 py-1.5 rounded-lg text-xs transition-all ${lang === l.code ? 'font-bold' : 'opacity-50'}`}
                    style={{ backgroundColor: lang === l.code ? accentColor + '30' : 'transparent', color: lang === l.code ? accentColor : 'inherit', border: `1px solid ${lang === l.code ? accentColor : 'transparent'}` }}>
                    {l.name}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${cardClasses[theme]} rounded-xl p-4 mb-3`}>
              <h3 className="text-sm font-bold mb-2">🔤 Arabic Size</h3>
              <div className="flex gap-2">
                {(['standard', 'medium', 'large', 'huge'] as ArabicSize[]).map(size => (
                  <button key={size} onClick={() => setArabicSize(size)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${arabicSize === size ? 'font-bold' : 'opacity-50'}`}
                    style={{ backgroundColor: arabicSize === size ? accentColor : 'transparent', color: arabicSize === size ? '#00160D' : 'inherit', border: `1px solid ${accentColor}` }}>
                    {size === 'standard' ? 'S' : size === 'medium' ? 'M' : size === 'large' ? 'L' : 'XL'}
                  </button>
                ))}
              </div>
            </div>

            <div className={`${cardClasses[theme]} rounded-xl p-4`}>
              <h3 className="text-sm font-bold mb-2">🔊 Audio Speed</h3>
              <div className="flex gap-2">
                {[0.5, 0.75, 1.0, 1.25, 1.5].map(speed => (
                  <button key={speed} onClick={() => setAudioSpeed(speed)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${audioSpeed === speed ? 'font-bold' : 'opacity-50'}`}
                    style={{ backgroundColor: audioSpeed === speed ? accentColor : 'transparent', color: audioSpeed === speed ? '#00160D' : 'inherit', border: `1px solid ${accentColor}` }}>
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {currentView === 'yaseen' && renderYaseen()}
        {currentView === 'schedule-manager' && renderScheduleManager()}
        {currentView === 'per-dua-notif' && renderPerDuaNotif()}
        {currentView === 'streaks' && renderStreaks()}
      </main>
    </div>
  );
};

export default App;
