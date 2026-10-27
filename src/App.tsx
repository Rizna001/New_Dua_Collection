import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  categories, languages, asmaHusna, asmaAnbiya, salawat, burdah, rathib, yaseen, dhikr, adhkar,
  type Category, type Dua
} from './data/duasData';

type Theme = 'light' | 'dark' | 'sepia';
type ArabicSize = 'standard' | 'medium' | 'large' | 'huge';
type View = 'home' | 'category' | 'asma-husna' | 'asma-anbiya' | 'salawat' | 'burdah' | 'rathib' | 'yaseen' | 'dhikr' | 'adhkar' | 'tasbeeh' | 'bookmarks' | 'settings' | 'notifications';

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
  const [notifEnabled, setNotifEnabled] = useState(() => localStorage.getItem('notifEnabled') === 'true');
  const [notifTime, setNotifTime] = useState(() => localStorage.getItem('notifTime') || '06:00');
  const [notifFreq, setNotifFreq] = useState(() => localStorage.getItem('notifFreq') || 'daily');
  const [notifPermission, setNotifPermission] = useState<NotificationPermission>('default');
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // All duas flat for search/daily
  const allDuas = useMemo(() => {
    const all: Dua[] = [];
    categories.forEach(cat => all.push(...cat.duas));
    return all;
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
    localStorage.setItem('arabicSize', arabicSize);
    localStorage.setItem('notifEnabled', String(notifEnabled));
    localStorage.setItem('notifTime', notifTime);
    localStorage.setItem('notifFreq', notifFreq);
  }, [theme, lang, arabicSize, notifEnabled, notifTime, notifFreq]);

  useEffect(() => { localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('counters', JSON.stringify(counters)); }, [counters]);

  // Set daily dua
  useEffect(() => {
    const dayIndex = new Date().getDate() % allDuas.length;
    setDailyDua(allDuas[dayIndex]);
  }, [allDuas]);

  // Check notification permission
  useEffect(() => {
    if ('Notification' in window) {
      setNotifPermission(Notification.permission);
    }
  }, []);

  // Schedule notifications
  useEffect(() => {
    if (!notifEnabled || notifPermission !== 'granted') return;
    
    const scheduleNotification = () => {
      const [hours, minutes] = notifTime.split(':').map(Number);
      const now = new Date();
      const target = new Date();
      target.setHours(hours, minutes, 0, 0);
      
      if (target <= now) {
        target.setDate(target.getDate() + 1);
      }
      
      const delay = target.getTime() - now.getTime();
      
      const timeout = setTimeout(() => {
        const randomDua = allDuas[Math.floor(Math.random() * allDuas.length)];
        new Notification('🕌 Daily Dua Reminder', {
          body: randomDua.translations[lang] || randomDua.translations.en,
          icon: '🕌',
          tag: 'daily-dua',
          requireInteraction: true
        });
        // Reschedule
        scheduleNotification();
      }, delay);
      
      return () => clearTimeout(timeout);
    };
    
    scheduleNotification();
  }, [notifEnabled, notifTime, notifFreq, notifPermission, allDuas, lang]);

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
    
    // Use faster rate for better performance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // Try to find Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) utterance.voice = arabicVoice;
    
    utterance.onend = () => { setIsPlaying(false); setCurrentAudioId(null); };
    utterance.onerror = () => { setIsPlaying(false); setCurrentAudioId(null); };
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setCurrentAudioId(id);
  }, [currentAudioId, isPlaying]);

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
      prophetic: { en: 'Prophetic', ar: 'الأنبياء', ta: 'நபி', ml: 'നബി', ur: 'انبیاء', hi: 'नबी', id: 'Nabi', fr: 'Prophètes', tr: 'Peygamber', bn: 'নবী' },
      dailyDua: { en: 'Dua of the Day', ar: 'دعاء اليوم', ta: 'இன்றைய துஆ', ml: 'ഇന്നത്തെ ദുആ', ur: 'آج کی دعا', hi: 'आज की दुआ', id: 'Doa Hari Ini', fr: 'Invocation du Jour', tr: 'Günün Duası', bn: 'আজকের দোয়া' },
      repeat: { en: 'x', ar: '×', ta: '×', ml: '×', ur: '×', hi: '×', id: '×', fr: '×', tr: '×', bn: '×' },
      notifications: { en: 'Notifications', ar: 'الإشعارات', ta: 'அறிவிப்புகள்', ml: 'അറിയിപ്പുകൾ', ur: 'اطلاعات', hi: 'सूचनाएं', id: 'Notifikasi', fr: 'Notifications', tr: 'Bildirimler', bn: 'বিজ্ঞপ্তি' },
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

    return (
      <div key={dua.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3 transition-all duration-200`}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
            #{index + 1}
          </span>
          <div className="flex gap-1">
            <button onClick={() => speakArabic(dua.arabic, dua.id)} className="p-2 rounded-full hover:bg-white/10 text-sm" title="Listen">
              {currentAudioId === dua.id && isPlaying ? '⏸️' : '🔊'}
            </button>
            <button onClick={() => toggleBookmark(dua.id)} className="p-2 rounded-full hover:bg-white/10 text-sm">
              {isBookmarked ? '⭐' : '☆'}
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
                {count}{t('repeat')}{target}
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
      <div>
        <h2 className="text-sm font-bold mb-3 flex items-center gap-2"><span style={{ color: accentColor }}>📂</span> {t('categories')}</h2>
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

  const renderCategoryView = () => {
    if (!selectedCategory) return null;
    return (
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
    );
  };

  const renderAsmaHusna = () => (
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
  );

  const renderAsmaAnbiya = () => (
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
  );

  const renderListSection = (title: string, items: any[], icon: string) => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
      <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>{icon} {title}</h2>
      {items.map((item: any) => (
        <div key={item.id} className={`${cardClasses[theme]} rounded-2xl p-4 mb-3`}>
          {item.name && <h3 className="text-xs font-bold mb-2" style={{ color: accentColor }}>{getTranslation(item.name)}</h3>}
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
  );

  const renderTasbeeh = () => (
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
  );

  const renderBookmarks = () => {
    const bookmarkedDuas = allDuas.filter(d => bookmarks.includes(d.id));
    return (
      <div>
        <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
        <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>⭐ {t('bookmarks')} ({bookmarkedDuas.length})</h2>
        {bookmarkedDuas.length === 0 ? (
          <div className="text-center py-12 opacity-50"><span className="text-3xl block mb-2">⭐</span><p className="text-sm">No bookmarks yet</p></div>
        ) : bookmarkedDuas.map((dua, i) => renderDuaCard(dua, i))}
      </div>
    );
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      setNotifPermission(permission);
      if (permission === 'granted') setNotifEnabled(true);
    }
  };

  const renderNotifications = () => (
    <div>
      <button onClick={() => setCurrentView('settings')} className="mb-3 text-sm opacity-70">← {t('settings')}</button>
      <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>🔔 {t('notifications')}</h2>
      
      <div className={`${cardClasses[theme]} rounded-xl p-4 mb-4`}>
        <h3 className="text-sm font-bold mb-3">📱 Notification Permission</h3>
        <p className="text-xs opacity-60 mb-3">Status: <strong>{notifPermission}</strong></p>
        {notifPermission !== 'granted' ? (
          <button onClick={requestNotificationPermission} className="px-4 py-2 rounded-lg text-sm font-bold" style={{ backgroundColor: accentColor, color: '#00160D' }}>
            Enable Notifications
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Daily Dua</span>
              <button onClick={() => setNotifEnabled(!notifEnabled)} className={`w-12 h-6 rounded-full transition-all ${notifEnabled ? '' : 'opacity-30'}`} style={{ backgroundColor: notifEnabled ? accentColor : '#666' }}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${notifEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            {notifEnabled && (
              <>
                <div>
                  <label className="text-xs opacity-60 block mb-1">Notification Time</label>
                  <input type="time" value={notifTime} onChange={e => setNotifTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none" style={{ backgroundColor: theme === 'dark' ? '#003D2B' : '#f3f4f6', border: `1px solid ${accentColor}30` }} />
                </div>
                <div>
                  <label className="text-xs opacity-60 block mb-1">Frequency</label>
                  <div className="flex gap-2">
                    {[{v:'daily',l:'Daily'},{v:'fajr',l:'After Fajr'},{v:'maghrib',l:'After Maghrib'},{v:'friday',l:'Friday Only'}].map(opt => (
                      <button key={opt.v} onClick={() => setNotifFreq(opt.v)}
                        className={`px-3 py-1.5 rounded-lg text-xs transition-all ${notifFreq === opt.v ? 'font-bold' : 'opacity-50'}`}
                        style={{ backgroundColor: notifFreq === opt.v ? accentColor + '30' : 'transparent', color: notifFreq === opt.v ? accentColor : 'inherit', border: `1px solid ${notifFreq === opt.v ? accentColor : 'transparent'}` }}>
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className={`${cardClasses[theme]} rounded-xl p-4`}>
        <h3 className="text-sm font-bold mb-2">💡 Tips</h3>
        <ul className="text-xs opacity-60 space-y-1">
          <li>• Notifications work best when the app is open</li>
          <li>• Allow browser notifications for best experience</li>
          <li>• You can customize the time and frequency</li>
          <li>• Each notification shows a random dua</li>
        </ul>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
      <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>⚙️ {t('settings')}</h2>
      
      <button onClick={() => setCurrentView('notifications')} className={`${cardClasses[theme]} rounded-xl p-4 mb-3 w-full text-left flex items-center justify-between`}>
        <span className="text-sm font-bold">🔔 {t('notifications')}</span>
        <span className="text-xs opacity-50">→</span>
      </button>

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

      <div className={`${cardClasses[theme]} rounded-xl p-4`}>
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
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'home': return renderHome();
      case 'category': return renderCategoryView();
      case 'asma-husna': return renderAsmaHusna();
      case 'asma-anbiya': return renderAsmaAnbiya();
      case 'salawat': return renderListSection(t('salawat'), salawat, '🤲');
      case 'burdah': return renderListSection(t('burdah'), burdah, '📜');
      case 'rathib': return renderListSection(t('rathib'), rathib, '🕌');
      case 'yaseen': return (
        <div>
          <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
          <div className={`${cardClasses[theme]} rounded-2xl p-5 text-center`}>
            <h2 className="text-xl font-bold mb-1" style={{ color: accentColor }}>{getTranslation(yaseen.title)}</h2>
            <p className="text-xs opacity-60 mb-3">{getTranslation(yaseen.description)}</p>
            <p className="arabic-font text-2xl mb-2" style={{ color: accentColor }} dir="rtl">{yaseen.arabic}</p>
            <p className="text-xs italic opacity-70 mb-1">{yaseen.transliteration}</p>
            <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(yaseen.translations)}</p>
            <p className="text-xs mt-3 opacity-40">💡 {yaseen.benefit}</p>
            <button onClick={() => speakArabic(yaseen.arabic, 'yaseen')} className="mt-3 px-4 py-2 rounded-full text-sm" style={{ backgroundColor: accentColor, color: '#00160D' }}>
              {currentAudioId === 'yaseen' && isPlaying ? '⏸️ Pause' : '🔊 Listen'}
            </button>
          </div>
        </div>
      );
      case 'dhikr': return (
        <div>
          <button onClick={() => setCurrentView('home')} className="mb-3 text-sm opacity-70">← {t('home')}</button>
          <h2 className="text-lg font-bold mb-4" style={{ color: accentColor }}>📿 {t('dhikr')}</h2>
          {[...dhikr, ...adhkar].map((d) => (
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
      );
      case 'tasbeeh': return renderTasbeeh();
      case 'bookmarks': return renderBookmarks();
      case 'settings': return renderSettings();
      case 'notifications': return renderNotifications();
      default: return renderHome();
    }
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
            { icon: '📖', label: t('asmaHusna'), view: 'asma-husna' as View },
            { icon: '📿', label: t('tasbeeh'), view: 'tasbeeh' as View },
            { icon: '🤲', label: t('salawat'), view: 'salawat' as View },
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

      <main className="max-w-6xl mx-auto px-3 py-4 pb-20">{renderContent()}</main>
    </div>
  );
};

export default App;
