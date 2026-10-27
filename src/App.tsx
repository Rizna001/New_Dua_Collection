import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  categories, languages, asmaHusna, asmaAnbiya, salawat, burdah, rathib, yaseen, dhikr, adhkar,
  type Category, type Dua, type AsmaHusna, type Prophet
} from './data/duasData';

type Theme = 'light' | 'dark' | 'sepia';
type ArabicSize = 'standard' | 'medium' | 'large' | 'huge';
type View = 'home' | 'category' | 'asma-husna' | 'asma-anbiya' | 'salawat' | 'burdah' | 'rathib' | 'yaseen' | 'dhikr' | 'adhkar' | 'tasbeeh' | 'bookmarks' | 'settings';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [arabicSize, setArabicSize] = useState<ArabicSize>(() => (localStorage.getItem('arabicSize') as ArabicSize) || 'standard');
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDua, setSelectedDua] = useState<Dua | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<string[]>(() => JSON.parse(localStorage.getItem('bookmarks') || '[]'));
  const [counters, setCounters] = useState<Record<string, number>>(() => JSON.parse(localStorage.getItem('counters') || '{}'));
  const [showTasbeeh, setShowTasbeeh] = useState(false);
  const [tasbeehCount, setTasbeehCount] = useState(0);
  const [tasbeehTarget, setTasbeehTarget] = useState(33);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [dailyDua, setDailyDua] = useState<Dua | null>(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('lang', lang);
    localStorage.setItem('arabicSize', arabicSize);
  }, [theme, lang, arabicSize]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // Set daily dua
  useEffect(() => {
    const allDuas: Dua[] = [];
    categories.forEach(cat => allDuas.push(...cat.duas));
    const dayIndex = new Date().getDate() % allDuas.length;
    setDailyDua(allDuas[dayIndex]);
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const incrementCounter = (id: string) => {
    setCounters(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const resetCounter = (id: string) => {
    setCounters(prev => ({ ...prev, [id]: 0 }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const speakArabic = (text: string, id: string) => {
    if (currentAudioId === id && isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentAudioId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.8;
    utterance.onend = () => { setIsPlaying(false); setCurrentAudioId(null); };
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setCurrentAudioId(id);
  };

  const incrementTasbeeh = () => {
    setTasbeehCount(prev => prev + 1);
    if (navigator.vibrate) navigator.vibrate(50);
  };

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

  const themeClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-[#00160D] text-white',
    sepia: 'bg-[#F5E6D3] text-[#3E2723]'
  };

  const cardClasses = {
    light: 'bg-white shadow-md border border-gray-200',
    dark: 'bg-[#003D2B] shadow-lg shadow-black/20 border border-[#005A3C]/30',
    sepia: 'bg-[#FFF8E7] shadow-md border border-[#D4A574]/30'
  };

  const accentColor = theme === 'sepia' ? '#8B4513' : '#D4AF37';

  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      search: { en: 'Search duas...', ar: 'ابحث عن الأدعية...', ta: 'துஆக்களை தேடுங்கள்...', ml: 'ദുആകൾ തിരയുക...', ur: 'دعائیں تلاش کریں...', hi: 'दुआएं खोजें...', id: 'Cari doa...', fr: 'Rechercher des invocations...', tr: 'Dua ara...', bn: 'দোয়া খুঁজুন...' },
      home: { en: 'Home', ar: 'الرئيسية', ta: 'முகப்பு', ml: 'ഹോം', ur: 'ہوم', hi: 'होम', id: 'Beranda', fr: 'Accueil', tr: 'Ana Sayfa', bn: 'হোম' },
      categories: { en: 'Categories', ar: 'الفئات', ta: 'வகைகள்', ml: 'വിഭാഗങ്ങൾ', ur: 'زمرے', hi: 'श्रेणियाँ', id: 'Kategori', fr: 'Catégories', tr: 'Kategoriler', bn: 'বিভাগ' },
      bookmarks: { en: 'Bookmarks', ar: 'المفضلة', ta: 'புத்தகக்குறிகள்', ml: 'ബുക്ക്മാർക്കുകൾ', ur: 'بک مارکس', hi: 'बुकमार्क्स', id: 'Bookmark', fr: 'Favoris', tr: 'Yer İmleri', bn: 'বুকমার্ক' },
      tasbeeh: { en: 'Digital Tasbeeh', ar: 'المسبحة الرقمية', ta: 'டிஜிட்டல் தஸ்பீஹ்', ml: 'ഡിജിറ്റൽ തസ്ബീഹ്', ur: 'ڈیجیٹل تسبیح', hi: 'डिजिटल तस्बीह', id: 'Tasbih Digital', fr: 'Tasbih Numérique', tr: 'Dijital Tesbih', bn: 'ডিজিটাল তাসবীহ' },
      settings: { en: 'Settings', ar: 'الإعدادات', ta: 'அமைப்புகள்', ml: 'ക്രമീകരണങ്ങൾ', ur: 'ترتیبات', hi: 'सेटिंग्स', id: 'Pengaturan', fr: 'Paramètres', tr: 'Ayarlar', bn: 'সেটিংস' },
      asmaHusna: { en: '99 Names of Allah', ar: 'أسماء الله الحسنى', ta: '99 அல்லாஹ்வின் அழகிய பெயர்கள்', ml: 'അല്ലാഹുവിന്റെ 99 നാമങ്ങൾ', ur: 'اسماء الحسنی', hi: 'अस्माउल हुस्ना', id: '99 Nama Allah', fr: '99 Noms d\'Allah', tr: 'Esmaül Hüsna', bn: 'আল্লাহর ৯৯ নাম' },
      asmaAnbiya: { en: '25 Prophets', ar: 'الأنبياء الـ ٢٥', ta: '25 நபிமார்கள்', ml: '25 നബിമാർ', ur: '۲۵ انبیاء', hi: '२५ नबी', id: '25 Nabi', fr: '25 Prophètes', tr: '25 Peygamber', bn: '২৫ নবী' },
      salawat: { en: 'Salawat & Durood', ar: 'الصلوات والسلام', ta: 'ஸலவாத்', ml: 'സ്വലവാത്ത്', ur: 'صلوات و درود', hi: 'सलावात', id: 'Shalawat', fr: 'Salawat', tr: 'Salavat', bn: 'সালাওয়াত' },
      burdah: { en: 'Qasida Burdah', ar: 'قصيدة البردة', ta: 'கஸீதா புர்தா', ml: 'ഖസീദത്തുൽ ബുർദ', ur: 'قصیدہ بردہ', hi: 'क़सीदा बुर्दा', id: 'Qasidah Burdah', fr: 'Qasida Burdah', tr: 'Kaside-i Bürde', bn: 'কাসীদা বুরদা' },
      rathib: { en: 'Rathib', ar: 'الراتب', ta: 'ராதில்', ml: 'റാതിബ്', ur: 'راتب', hi: 'रातिब', id: 'Ratib', fr: 'Rathib', tr: 'Ratib', bn: 'রাতিব' },
      yaseen: { en: 'Surah Yaseen', ar: 'سورة يس', ta: 'யாசீன்', ml: 'യാസീൻ', ur: 'سورہ یٰسین', hi: 'सूरह यासीन', id: 'Surah Yasin', fr: 'Sourate Yasin', tr: 'Yasin Suresi', bn: 'সূরা ইয়াসিন' },
      dhikr: { en: 'Dhikr & Adhkar', ar: 'الذكر والأذكار', ta: 'திக்ர் & அஃஸ்கார்', ml: 'ധിക്റ് & അദ്കാർ', ur: 'ذکر و اذکار', hi: 'ज़िक्र और अज़कार', id: 'Dzikir & Adzkar', fr: 'Dhikr & Adhkar', tr: 'Zikir & Zikirler', bn: 'যিকির ও আযকার' },
      dailyDua: { en: 'Dua of the Day', ar: 'دعاء اليوم', ta: 'இன்றைய துஆ', ml: 'ഇന്നത്തെ ദുആ', ur: 'آج کی دعا', hi: 'आज की दुआ', id: 'Doa Hari Ini', fr: 'Invocation du Jour', tr: 'Günün Duası', bn: 'আজকের দোয়া' },
      repeat: { en: 'times', ar: 'مرات', ta: 'முறைகள்', ml: 'തവണ', ur: 'بار', hi: 'बार', id: 'kali', fr: 'fois', tr: 'kez', bn: 'বার' },
      copied: { en: 'Copied!', ar: 'تم النسخ!', ta: 'நகலெடுக்கப்பட்டது!', ml: 'പകർത്തി!', ur: 'کاپی ہو گیا!', hi: 'कॉपी हो गया!', id: 'Disalin!', fr: 'Copié!', tr: 'Kopyalandı!', bn: 'কপি হয়েছে!' },
      copy: { en: 'Copy', ar: 'نسخ', ta: 'நகல்', ml: 'പകർത്തുക', ur: 'کاپی', hi: 'कॉपी', id: 'Salin', fr: 'Copier', tr: 'Kopyala', bn: 'কপি' },
    };
    return translations[key]?.[lang] || translations[key]?.['en'] || key;
  };

  const filteredCategories = categories.filter(cat => {
    const name = cat.name[lang] || cat.name['en'];
    return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.duas.some(d => {
        const trans = getTranslation(d.translations);
        return trans.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
      });
  });

  const renderDuaCard = (dua: Dua, index: number) => {
    const isBookmarked = bookmarks.includes(dua.id);
    const count = counters[dua.id] || 0;
    const target = dua.repeat || 1;

    return (
      <div key={dua.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4 transition-all duration-300 hover:scale-[1.01]`}>
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
            #{index + 1}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => speakArabic(dua.arabic, dua.id)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Listen"
            >
              {currentAudioId === dua.id && isPlaying ? '⏸️' : '🔊'}
            </button>
            <button
              onClick={() => toggleBookmark(dua.id)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Bookmark"
            >
              {isBookmarked ? '⭐' : '☆'}
            </button>
            <button
              onClick={() => copyToClipboard(dua.arabic + '\n' + dua.transliteration + '\n' + getTranslation(dua.translations), dua.id)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Copy"
            >
              {copiedId === dua.id ? '✅' : '📋'}
            </button>
          </div>
        </div>

        <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-3`} style={{ color: accentColor }} dir="rtl">
          {dua.arabic}
        </p>

        <p className="text-sm italic opacity-70 mb-2 font-medium">{dua.transliteration}</p>

        <p className={`text-sm leading-relaxed mb-3 ${languages.find(l => l.code === lang)?.font || ''}`}>
          {getTranslation(dua.translations)}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          {dua.reference && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 opacity-70">📖 {dua.reference}</span>
          )}
          {dua.benefit && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 opacity-70">💡 {dua.benefit}</span>
          )}
          {dua.repeat && (
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => incrementCounter(dua.id)}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all"
                style={{ backgroundColor: count >= target ? '#4CAF50' : accentColor, color: '#fff' }}
              >
                {count}/{target} {t('repeat')}
              </button>
              {count > 0 && (
                <button
                  onClick={() => resetCounter(dua.id)}
                  className="text-xs opacity-50 hover:opacity-100"
                >
                  ↺
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCategoryGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => { setSelectedCategory(cat); setCurrentView('category'); }}
          className={`${cardClasses[theme]} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          style={{ borderLeft: `4px solid ${cat.color}` }}
        >
          <span className="text-3xl mb-2 block">{cat.icon}</span>
          <span className="text-sm font-semibold leading-tight block" style={{ color: cat.color }}>
            {cat.name[lang] || cat.name['en']}
          </span>
          <span className="text-xs opacity-50 mt-1 block">{cat.duas.length} duas</span>
        </button>
      ))}
    </div>
  );

  const renderHome = () => (
    <div className="space-y-6">
      {/* Daily Dua */}
      {dailyDua && (
        <div className={`${cardClasses[theme]} rounded-2xl p-5 border-l-4`} style={{ borderLeftColor: accentColor }}>
          <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: accentColor }}>
            🌟 {t('dailyDua')}
          </h3>
          <p className={`arabic-font text-xl text-right mb-2`} dir="rtl">{dailyDua.arabic}</p>
          <p className="text-sm opacity-70">{getTranslation(dailyDua.translations)}</p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {[
          { icon: '📿', label: t('tasbeeh'), view: 'tasbeeh' as View },
          { icon: '📖', label: t('asmaHusna'), view: 'asma-husna' as View },
          { icon: '🌙', label: t('asmaAnbiya'), view: 'asma-anbiya' as View },
          { icon: '🤲', label: t('salawat'), view: 'salawat' as View },
          { icon: '📜', label: t('burdah'), view: 'burdah' as View },
          { icon: '🕌', label: t('rathib'), view: 'rathib' as View },
        ].map(item => (
          <button
            key={item.view}
            onClick={() => setCurrentView(item.view)}
            className={`${cardClasses[theme]} rounded-xl p-3 text-center transition-all hover:scale-105`}
          >
            <span className="text-2xl block mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span style={{ color: accentColor }}>📂</span> {t('categories')}
        </h2>
        {renderCategoryGrid()}
      </div>
    </div>
  );

  const renderCategoryView = () => {
    if (!selectedCategory) return null;
    return (
      <div>
        <button
          onClick={() => { setCurrentView('home'); setSelectedCategory(null); }}
          className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
        >
          ← {t('home')}
        </button>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">{selectedCategory.icon}</span>
          <div>
            <h2 className="text-xl font-bold" style={{ color: selectedCategory.color }}>
              {selectedCategory.name[lang] || selectedCategory.name['en']}
            </h2>
            <p className="text-sm opacity-50">{selectedCategory.duas.length} duas</p>
          </div>
        </div>
        {selectedCategory.duas.map((dua, i) => renderDuaCard(dua, i))}
      </div>
    );
  };

  const renderAsmaHusna = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        📖 {t('asmaHusna')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {asmaHusna.map((name) => (
          <div key={name.number} className={`${cardClasses[theme]} rounded-xl p-4 transition-all hover:scale-[1.02]`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
                {name.number}
              </span>
              <button
                onClick={() => toggleBookmark(`asma-${name.number}`)}
                className="text-lg"
              >
                {bookmarks.includes(`asma-${name.number}`) ? '⭐' : '☆'}
              </button>
            </div>
            <p className={`arabic-font text-2xl text-center mb-2`} style={{ color: accentColor }} dir="rtl">{name.arabic}</p>
            <p className="text-sm text-center font-medium mb-1">{name.transliteration}</p>
            <p className={`text-xs text-center opacity-70 ${languages.find(l => l.code === lang)?.font || ''}`}>
              {getTranslation(name.translations)}
            </p>
            {name.benefit && (
              <p className="text-xs text-center mt-2 opacity-50">💡 {name.benefit}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderAsmaAnbiya = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        🌙 {t('asmaAnbiya')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {asmaAnbiya.map((prophet) => (
          <div key={prophet.number} className={`${cardClasses[theme]} rounded-xl p-4 transition-all hover:scale-[1.02]`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
                #{prophet.number}
              </span>
              <span className="text-xs opacity-50">{prophet.quranicMentions} mentions</span>
            </div>
            <p className="arabic-font text-2xl text-center mb-1" style={{ color: accentColor }} dir="rtl">{prophet.arabic}</p>
            <p className="text-center font-bold mb-1">{getTranslation(prophet.name)}</p>
            {prophet.era && <p className="text-xs text-center opacity-50 mb-2">📅 {prophet.era}</p>}
            {prophet.famousDua && (
              <div className="mt-2 p-2 rounded-lg bg-white/5">
                <p className="text-xs opacity-70">🤲 {prophet.famousDua}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSalawat = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        🤲 {t('salawat')}
      </h2>
      {salawat.map((s, i) => (
        <div key={s.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
          <h3 className="text-sm font-bold mb-3" style={{ color: accentColor }}>
            {getTranslation(s.name)}
          </h3>
          <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-3`} dir="rtl">{s.arabic}</p>
          <p className="text-sm italic opacity-70 mb-2">{s.transliteration}</p>
          <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(s.translations)}</p>
          <div className="flex gap-2 mt-3">
            <button onClick={() => speakArabic(s.arabic, s.id)} className="text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
              🔊 Listen
            </button>
            <button onClick={() => copyToClipboard(s.arabic, s.id)} className="text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
              {copiedId === s.id ? '✅' : '📋 Copy'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBurdah = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: accentColor }}>
        📜 {t('burdah')}
      </h2>
      <p className="text-sm opacity-50 mb-6">By Imam al-Busiri</p>
      {burdah.map((stanza) => (
        <div key={stanza.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
          <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-3`} dir="rtl">{stanza.arabic}</p>
          <p className="text-sm italic opacity-70 mb-2">{stanza.transliteration}</p>
          <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(stanza.translations)}</p>
          <p className="text-xs opacity-40 mt-2">{stanza.reference}</p>
        </div>
      ))}
    </div>
  );

  const renderRathib = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: accentColor }}>
        🕌 {t('rathib')}
      </h2>
      <p className="text-sm opacity-50 mb-6">Imam Abdullah al-Haddad</p>
      {rathib.map((r) => (
        <div key={r.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
          <h3 className="text-sm font-bold mb-3" style={{ color: accentColor }}>{getTranslation(r.name)}</h3>
          <p className={`arabic-font ${getArabicFontSize()} text-right leading-loose mb-3`} dir="rtl">{r.arabic}</p>
          <p className="text-sm italic opacity-70 mb-2">{r.transliteration}</p>
          <p className={`text-sm ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(r.translations)}</p>
        </div>
      ))}
    </div>
  );

  const renderYaseen = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <div className={`${cardClasses[theme]} rounded-2xl p-6 text-center mb-6`}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: accentColor }}>
          {getTranslation(yaseen.title)}
        </h2>
        <p className="text-sm opacity-70">{getTranslation(yaseen.description)}</p>
        <p className={`arabic-font text-3xl mt-4`} style={{ color: accentColor }} dir="rtl">{yaseen.arabic}</p>
        <p className="text-sm italic mt-2 opacity-70">{yaseen.transliteration}</p>
        <p className={`text-sm mt-2 ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(yaseen.translations)}</p>
        <p className="text-xs mt-4 opacity-50">💡 {yaseen.benefit}</p>
      </div>
    </div>
  );

  const renderDhikr = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        📿 {t('dhikr')}
      </h2>
      <h3 className="text-lg font-bold mb-4 opacity-80">Dhikr</h3>
      {dhikr.map((d) => (
        <div key={d.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
          <p className={`arabic-font ${getArabicFontSize()} text-center leading-loose mb-3`} style={{ color: accentColor }} dir="rtl">{d.arabic}</p>
          <p className="text-sm italic text-center opacity-70 mb-2">{d.transliteration}</p>
          <p className={`text-sm text-center ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(d.translations)}</p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
              🔄 {d.repeat}x
            </span>
            {d.benefit && <span className="text-xs px-3 py-1 rounded-full bg-white/10">💡 {d.benefit}</span>}
          </div>
        </div>
      ))}
      <h3 className="text-lg font-bold mb-4 mt-8 opacity-80">Adhkar</h3>
      {adhkar.map((d) => (
        <div key={d.id} className={`${cardClasses[theme]} rounded-2xl p-5 mb-4`}>
          <p className={`arabic-font ${getArabicFontSize()} text-center leading-loose mb-3`} style={{ color: accentColor }} dir="rtl">{d.arabic}</p>
          <p className="text-sm italic text-center opacity-70 mb-2">{d.transliteration}</p>
          <p className={`text-sm text-center ${languages.find(l => l.code === lang)?.font || ''}`}>{getTranslation(d.translations)}</p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
              🔄 {d.repeat}x
            </span>
            {d.benefit && <span className="text-xs px-3 py-1 rounded-full bg-white/10">💡 {d.benefit}</span>}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTasbeeh = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <button onClick={() => setCurrentView('home')} className="mb-8 flex items-center gap-2 text-sm opacity-70 hover:opacity-100 self-start">
        ← {t('home')}
      </button>
      <h2 className="text-2xl font-bold mb-8" style={{ color: accentColor }}>📿 {t('tasbeeh')}</h2>

      <div className="flex gap-3 mb-8">
        {[33, 99, 100, 500, 1000].map(target => (
          <button
            key={target}
            onClick={() => { setTasbeehTarget(target); setTasbeehCount(0); }}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              tasbeehTarget === target ? 'scale-110' : 'opacity-50 hover:opacity-80'
            }`}
            style={{ backgroundColor: tasbeehTarget === target ? accentColor : 'transparent', color: tasbeehTarget === target ? '#00160D' : accentColor, border: `1px solid ${accentColor}` }}
          >
            {target}x
          </button>
        ))}
      </div>

      <button
        onClick={incrementTasbeeh}
        className="w-48 h-48 rounded-full flex items-center justify-center text-6xl font-bold transition-all active:scale-95 hover:shadow-2xl"
        style={{
          background: `radial-gradient(circle, ${accentColor}40, ${accentColor}10)`,
          border: `3px solid ${accentColor}`,
          color: accentColor,
          boxShadow: `0 0 40px ${accentColor}30`
        }}
      >
        {tasbeehCount}
      </button>

      <div className="mt-6 text-center">
        <p className="text-sm opacity-50">
          {tasbeehCount >= tasbeehTarget ? '✅ Target reached!' : `${tasbeehTarget - tasbeehCount} remaining`}
        </p>
        <div className="w-64 h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: accentColor + '20' }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.min((tasbeehCount / tasbeehTarget) * 100, 100)}%`, backgroundColor: accentColor }}
          />
        </div>
        <button
          onClick={() => setTasbeehCount(0)}
          className="mt-4 text-sm opacity-50 hover:opacity-100"
        >
          Reset
        </button>
      </div>
    </div>
  );

  const renderBookmarks = () => {
    const bookmarkedDuas: Dua[] = [];
    categories.forEach(cat => {
      cat.duas.forEach(dua => {
        if (bookmarks.includes(dua.id)) bookmarkedDuas.push(dua);
      });
    });

    return (
      <div>
        <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
          ← {t('home')}
        </button>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
          ⭐ {t('bookmarks')} ({bookmarkedDuas.length})
        </h2>
        {bookmarkedDuas.length === 0 ? (
          <div className="text-center py-12 opacity-50">
            <span className="text-4xl block mb-3">⭐</span>
            <p>No bookmarked duas yet</p>
          </div>
        ) : (
          bookmarkedDuas.map((dua, i) => renderDuaCard(dua, i))
        )}
      </div>
    );
  };

  const renderSettings = () => (
    <div>
      <button onClick={() => setCurrentView('home')} className="mb-4 flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
        ← {t('home')}
      </button>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: accentColor }}>
        ⚙️ {t('settings')}
      </h2>

      {/* Theme */}
      <div className={`${cardClasses[theme]} rounded-xl p-4 mb-4`}>
        <h3 className="text-sm font-bold mb-3">🎨 Theme</h3>
        <div className="flex gap-3">
          {(['light', 'dark', 'sepia'] as Theme[]).map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${theme === t ? 'scale-105' : 'opacity-50'}`}
              style={{ backgroundColor: theme === t ? accentColor : 'transparent', color: theme === t ? '#00160D' : 'inherit', border: `1px solid ${accentColor}` }}
            >
              {t === 'light' ? '☀️ Light' : t === 'dark' ? '🌙 Dark' : '📜 Sepia'}
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className={`${cardClasses[theme]} rounded-xl p-4 mb-4`}>
        <h3 className="text-sm font-bold mb-3">🌐 Language</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-3 py-2 rounded-lg text-sm transition-all ${lang === l.code ? 'scale-105 font-bold' : 'opacity-60'}`}
              style={{ backgroundColor: lang === l.code ? accentColor + '30' : 'transparent', color: lang === l.code ? accentColor : 'inherit', border: `1px solid ${lang === l.code ? accentColor : 'transparent'}` }}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* Arabic Font Size */}
      <div className={`${cardClasses[theme]} rounded-xl p-4 mb-4`}>
        <h3 className="text-sm font-bold mb-3">🔤 Arabic Font Size</h3>
        <div className="flex gap-3">
          {(['standard', 'medium', 'large', 'huge'] as ArabicSize[]).map(size => (
            <button
              key={size}
              onClick={() => setArabicSize(size)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${arabicSize === size ? 'scale-105 font-bold' : 'opacity-50'}`}
              style={{ backgroundColor: arabicSize === size ? accentColor : 'transparent', color: arabicSize === size ? '#00160D' : 'inherit', border: `1px solid ${accentColor}` }}
            >
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
      case 'salawat': return renderSalawat();
      case 'burdah': return renderBurdah();
      case 'rathib': return renderRathib();
      case 'yaseen': return renderYaseen();
      case 'dhikr': return renderDhikr();
      case 'tasbeeh': return renderTasbeeh();
      case 'bookmarks': return renderBookmarks();
      case 'settings': return renderSettings();
      default: return renderHome();
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses[theme]} transition-colors duration-500`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: theme === 'dark' ? '#00160Dcc' : theme === 'sepia' ? '#F5E6D3cc' : '#ffffffcc', borderColor: accentColor + '20' }}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕌</span>
              <div>
                <h1 className="text-lg font-bold" style={{ color: accentColor }}>Comprehensive Duas</h1>
                <p className="text-xs opacity-50">All Islamic Supplications</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('bookmarks')}
                className="p-2 rounded-full hover:bg-white/10 transition-colors relative"
              >
                ⭐
                {bookmarks.length > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: accentColor, color: '#00160D' }}>
                    {bookmarks.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentView('settings')}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ⚙️
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={t('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
              style={{
                backgroundColor: theme === 'dark' ? '#003D2B' : theme === 'sepia' ? '#FFF8E7' : '#f3f4f6',
                border: `1px solid ${accentColor}30`,
                color: 'inherit'
              }}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50">🔍</span>
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t" style={{ backgroundColor: theme === 'dark' ? '#00160Df0' : theme === 'sepia' ? '#F5E6D3f0' : '#ffffffe8', borderColor: accentColor + '20' }}>
        <div className="max-w-6xl mx-auto px-2 py-2 flex justify-around">
          {[
            { icon: '🏠', label: t('home'), view: 'home' as View },
            { icon: '📖', label: t('asmaHusna'), view: 'asma-husna' as View },
            { icon: '📿', label: t('tasbeeh'), view: 'tasbeeh' as View },
            { icon: '🤲', label: t('salawat'), view: 'salawat' as View },
            { icon: '⚙️', label: t('settings'), view: 'settings' as View },
          ].map(item => (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${currentView === item.view ? 'scale-110' : 'opacity-50'}`}
              style={{ color: currentView === item.view ? accentColor : 'inherit' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 pb-24">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
