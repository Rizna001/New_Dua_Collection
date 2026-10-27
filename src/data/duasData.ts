export interface Dua {
  id: string;
  arabic: string;
  transliteration: string;
  translations: Record<string, string>;
  reference?: string;
  repeat?: number;
  benefit?: string;
  audioUrl?: string;
}

export interface Category {
  id: string;
  name: Record<string, string>;
  icon: string;
  color: string;
  duas: Dua[];
}

export interface AsmaHusna {
  number: number;
  arabic: string;
  transliteration: string;
  translations: Record<string, string>;
  benefit?: string;
}

export interface Prophet {
  number: number;
  arabic: string;
  name: Record<string, string>;
  era?: string;
  quranicMentions?: number;
  famousDua?: string;
}

export const languages = [
  { code: 'en', name: 'English', font: '' },
  { code: 'ar', name: 'العربية', font: 'arabic-font' },
  { code: 'ta', name: 'தமிழ்', font: 'tamil-font' },
  { code: 'ml', name: 'മലയാളം', font: 'malayalam-font' },
  { code: 'ur', name: 'اردو', font: 'arabic-font' },
  { code: 'hi', name: 'हिंदी', font: 'hindi-font' },
  { code: 'id', name: 'Bahasa Indonesia', font: '' },
  { code: 'fr', name: 'Français', font: '' },
  { code: 'tr', name: 'Türkçe', font: '' },
  { code: 'bn', name: 'বাংলা', font: 'bengali-font' },
];

export const categories: Category[] = [
  {
    id: 'morning-evening',
    name: {
      en: 'Morning & Evening Adhkar',
      ar: 'أذكار الصباح والمساء',
      ta: 'காலை & மாலை அஃஸ்கார்',
      ml: 'രാവിലെയും വൈകുന്നേരവും അദ്കാർ',
      ur: 'صبح و شام کے اذکار',
      hi: 'सुबह और शाम के अज़कार',
      id: 'Dzikir Pagi & Petang',
      fr: 'Invocations du Matin & du Soir',
      tr: 'Sabah & Akşam Zikirleri',
      bn: 'সকাল ও সন্ধ্যার আযকার'
    },
    icon: '🌅',
    color: '#FFD700',
    duas: [
      {
        id: 'me-1',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        transliteration: 'Asbahna wa asbahal mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah',
        translations: {
          en: 'We have reached the morning and all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone, without partner.',
          ar: 'أصبحنا وأصبح الملك لله والحمد لله لا إله إلا الله وحده لا شريك له',
          ta: 'நாங்கள் காலை அடைந்தோம், அனைத்து ஆட்சியும் அல்லாஹ்வுக்கே. எல்லா புகழும் அல்லாஹ்வுக்கே. இணையற்ற அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை.',
          ml: 'ഞങ്ങൾ പ്രഭാതത്തിലെത്തി, സർവ്വാധികാരവും അല്ലാഹുവിനാണ്. എല്ലാ സ്തുതിയും അല്ലാഹുവിനാണ്. അല്ലാഹു ഒഴികെ ആരാധനയർഹനായ ആരുമില്ല.',
          ur: 'ہم نے صبح کی اور تمام بادشاہت اللہ کے لیے ہے۔ سب تعریفیں اللہ کے لیے ہیں۔ اللہ کے سوا کوئی معبود نہیں۔',
          hi: 'हमने सुबह की और सभी बादशाहत अल्लाह के लिए है। सभी तारीफ़ अल्लाह के लिए है। अल्लाह के सिवा कोई माबूद नहीं।',
          id: 'Kami telah memasuki waktu pagi dan kerajaan milik Allah, segala puji bagi Allah. Tiada tuhan selain Allah Yang Maha Esa.',
          fr: 'Nous avons atteint le matin et toute souveraineté appartient à Allah. Toute louange est pour Allah. Nul ne mérite d\'être adoré sauf Allah Seul.',
          tr: 'Sabaha kavuştuk ve tüm mülk Allah\'ındır. Hamd Allah\'adır. Allah\'tan başka ilah yoktur.',
          bn: 'আমরা সকালবেলায় উপনীত হয়েছি এবং সমস্ত রাজত্ব আল্লাহর জন্য। সমস্ত প্রশংসা আল্লাহর জন্য। আল্লাহ ছাড়া কোনো ইলাহ নেই।'
        },
        reference: 'Muslim 4/2088',
        repeat: 1,
        benefit: 'Protection from Shaytan until evening'
      },
      {
        id: 'me-2',
        arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
        transliteration: 'Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur',
        translations: {
          en: 'O Allah, by You we have reached the morning and by You we have reached the evening. By You we live and by You we die, and to You is the resurrection.',
          ar: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور',
          ta: 'இறைவா! உம்மால் நாங்கள் காலை அடைந்தோம், உம்மால் மாலை அடைந்தோம். உம்மாலேயே வாழ்கிறோம், உம்மாலேயே இறக்கிறோம். உன்னிடமே மறுமையெழுச்சி.',
          ml: 'അല്ലാഹുവേ, നിന്നാലാണ് ഞങ്ങൾ പ്രഭാതത്തിലെത്തിയത്. നിന്നാലാണ് ഞങ്ങൾ സന്ധ്യയിലെത്തിയത്. നിന്നാലാണ് ഞങ്ങൾ ജീവിക്കുന്നതും മരിക്കുന്നതും.',
          ur: 'اے اللہ! تجھ سے ہم نے صبح کی اور تجھ سے شام کی۔ تجھ سے ہم جیتے ہیں اور تجھ پر مرتے ہیں اور تیری طرف لوٹنا ہے۔',
          hi: 'ऐ अल्लाह! तुझसे हमने सुबह की और तुझसे शाम की। तुझसे हम जीते हैं और तुझ पर मरते हैं और तेरी तरफ लौटना है।',
          id: 'Ya Allah, dengan-Mu kami memasuki pagi dan dengan-Mu kami memasuki petang. Dengan-Mu kami hidup dan dengan-Mu kami mati.',
          fr: 'Ô Allah, par Toi nous avons atteint le matin et par Toi le soir. Par Toi nous vivons et par Toi nous mourons.',
          tr: 'Allah\'ım, Seninle sabaha kavuştuk, Seninle akşama ulaştık. Seninle yaşıyor ve Seninle ölüyoruz.',
          bn: 'হে আল্লাহ! তোমার কারণে আমরা সকালবেলায় পৌঁছেছি এবং তোমার কারণে সন্ধ্যায় পৌঁছেছি।'
        },
        reference: 'Tirmidhi 5/466',
        repeat: 1
      },
      {
        id: 'me-3',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
        transliteration: 'Subhanallahi wa bihamdihi, \'adada khalqihi, wa ridha nafsihi, wa zinata \'arshihi, wa midada kalimatihi',
        translations: {
          en: 'Glory be to Allah and His is the praise, as many as His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.',
          ar: 'سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته',
          ta: 'அல்லாஹ் தூய்மையானவன், அவனுக்கு புகழ். அவன் படைப்புகளின் எண்ணிக்கைக்கு சமமாக, அவன் திருப்திக்கு சமமாக, அவன் அர்ஷின் எடைக்கு சமமாக.',
          ml: 'അല്ലാഹു പരിശുദ്ധൻ, അവന് സ്തുതി. അവന്റെ സൃഷ്ടികളുടെ എണ്ണത്തിനനുസരിച്ച്, അവന്റെ തൃപ്തിക്കനുസരിച്ച്.',
          ur: 'اللہ پاک ہے اور اس کی تعریف ہے، اس کی مخلوق کے عدد کے برابر، اس کی رضا کے برابر، اس کے عرش کے وزن کے برابر۔',
          hi: 'अल्लाह पाक है और उसकी तारीफ है, उसकी मखलूक के अदद के बराबर, उसकी रिज़ा के बराबर।',
          id: 'Maha Suci Allah dan segala puji bagi-Nya, sebanyak ciptaan-Nya, sebanyak keridhaan-Nya, seberat timbangan Arsy-Nya.',
          fr: 'Gloire à Allah et louange à Lui, autant que Sa création, autant que Son agrément, autant que le poids de Son Trône.',
          tr: 'Allah\'ı tenzih ederim ve O\'na hamd ederim, yaratıklarının sayısı kadar, rızası kadar, Arş\'ının ağırlığı kadar.',
          bn: 'আল্লাহ পবিত্র এবং তাঁর প্রশংসা, তাঁর সৃষ্টির সংখ্যার সমান, তাঁর সন্তুষ্টির সমান।'
        },
        reference: 'Muslim 4/2090',
        repeat: 3,
        benefit: 'One of the heaviest deeds on the Scale'
      }
    ]
  },
  {
    id: 'after-salah',
    name: {
      en: 'After Every Salah',
      ar: 'بعد كل صلاة',
      ta: 'ஒவ்வொரு தொழுகைக்குப் பின்',
      ml: 'ഓരോ നമസ്കാരത്തിന് ശേഷവും',
      ur: 'ہر نماز کے بعد',
      hi: 'हर नमाज़ के बाद',
      id: 'Setiap Setelah Shalat',
      fr: 'Après Chaque Prière',
      tr: 'Her Namazdan Sonra',
      bn: 'প্রতি নামাযের পরে'
    },
    icon: '🕌',
    color: '#4CAF50',
    duas: [
      {
        id: 'as-1',
        arabic: 'أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ أَسْتَغْفِرُ اللَّهَ',
        transliteration: 'Astaghfirullah, Astaghfirullah, Astaghfirullah',
        translations: {
          en: 'I seek forgiveness from Allah (3 times)',
          ar: 'أستغفر الله',
          ta: 'அல்லாஹ்விடம் மன்னிப்பு தேடுகிறேன்',
          ml: 'ഞാൻ അല്ലാഹുവിനോട് പാപമോചനം തേടുന്നു',
          ur: 'میں اللہ سے مغفرت مانگتا ہوں',
          hi: 'मैं अल्लाह से माफ़ी मांगता हूं',
          id: 'Aku memohon ampun kepada Allah',
          fr: 'Je demande pardon à Allah',
          tr: 'Allah\'tan bağışlanma diliyorum',
          bn: 'আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করছি'
        },
        reference: 'Muslim 1/414',
        repeat: 3
      },
      {
        id: 'as-2',
        arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
        transliteration: 'Allahumma antas-salam, wa minkas-salam, tabarakta ya dhal-jalali wal-ikram',
        translations: {
          en: 'O Allah, You are Peace and from You is peace. Blessed are You, O Owner of Majesty and Honor.',
          ar: 'اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام',
          ta: 'இறைவா! நீயே சாந்தி, உன்னிடமிருந்தே சாந்தி. நீ மகத்தானவன், மகிமை மற்றும் கௌரவத்தின் உரிமையாளனே!',
          ml: 'അല്ലാഹുവേ, നീ തന്നെ സമാധാനം, നിന്നിൽ നിന്നാണ് സമാധാനം. മഹത്വത്തിന്റെയും ബഹുമാനത്തിന്റെയും ഉടമയേ, നീ അനുഗ്രഹീതൻ.',
          ur: 'اے اللہ! تو سلامتی ہے اور تجھ سے سلامتی ہے۔ تُو بابرکت ہے اے جلال اور اکرام والا۔',
          hi: 'ऐ अल्लाह! तू सलामती है और तुझसे सलामती है। तू बरकत वाला है, ऐ जलाल और इकराम वाला।',
          id: 'Ya Allah, Engkau Maha Damai dan dari-Mu kedamaian. Maha Berkah Engkau, Wahai Pemilik Keagungan dan Kemuliaan.',
          fr: 'Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, ô Détenteur de Majesté et d\'Honneur.',
          tr: 'Allah\'ım, Sen Selam\'sın ve Senden\'dir selamet. Mübareksin ey Celal ve İkram Sahibi.',
          bn: 'হে আল্লাহ! তুমিই শান্তি এবং তোমার কাছ থেকেই শান্তি। তুমি বরকতময়, হে মহিমা ও সম্মানের অধিকারী।'
        },
        reference: 'Muslim 1/415',
        repeat: 1
      },
      {
        id: 'as-3',
        arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        transliteration: 'Allahumma a\'inni \'ala dhikrika, wa shukrika, wa husni \'ibadatik',
        translations: {
          en: 'O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner.',
          ar: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
          ta: 'இறைவா! உன்னை நினைவு கூரவும், நன்றி செலுத்தவும், உன் வணக்கத்தை சிறப்பாக செய்யவும் எனக்கு உதவுவாயாக!',
          ml: 'അല്ലാഹുവേ, നിന്നെ ഓർക്കാനും നന്ദി കാണിക്കാനും നിന്റെ ആരാധന ഉത്തമമായി ചെയ്യാനും എന്നെ സഹായിക്കണമേ.',
          ur: 'اے اللہ! میری مدد فرما تیرے ذکر پر، تیری شکر گزاری پر اور تیری بہترین عبادت پر۔',
          hi: 'ऐ अल्लाह! मेरी मदद फरमा तेरे ज़िक्र पर, तेरी शुक्र गुज़ारी पर और तेरी बेहतरीन इबादत पर।',
          id: 'Ya Allah, bantulah aku untuk mengingat-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan sebaik-baiknya.',
          fr: 'Ô Allah, aide-moi à Te mentionner, à Te remercier et à T\'adorer de la meilleure manière.',
          tr: 'Allah\'ım, Seni zikretmemde, şükretmemde ve en güzel şekilde ibadet etmemde bana yardım et.',
          bn: 'হে আল্লাহ! তোমাকে স্মরণ করতে, তোমার শুকরিয়া আদায় করতে এবং তোমার ইবাদত উত্তমরূপে আদায় করতে আমাকে সাহায্য করো।'
        },
        reference: 'Abu Dawud 2/85',
        repeat: 1
      },
      {
        id: 'as-4',
        arabic: 'آيَةُ الْكُرْسِيُّ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
        transliteration: 'Allahu la ilaha illa huwal-hayyul-qayyum, la ta\'khudhuhu sinatun wa la nawm...',
        translations: {
          en: 'Ayat al-Kursi: Allah! There is no god but He, the Living, the Self-subsisting, Eternal. No slumber can seize Him nor sleep...',
          ar: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
          ta: 'அல்லாஹ்! அவனைத் தவிர வணக்கத்திற்குரியவர் இல்லை. அவன் நிரந்தர வாழ்வான், அனைத்தையும் தாங்குபவன். தூக்கமோ உறக்கமோ அவனைப் பீடிக்காது.',
          ml: 'അല്ലാഹു, അവനല്ലാതെ ആരാധനാർഹനില്ല. അവൻ നിത്യജീവനുള്ളവൻ, സർവ്വവും നിലനിർത്തുന്നവൻ. ഉറക്കമോ നിദ്രയോ അവനെ ബാധിക്കില്ല.',
          ur: 'اللہ! اس کے سوا کوئی معبود نہیں۔ وہ زندہ ہے، سب کا قائم رکھنے والا ہے۔ نہ اسے اونگھ آتی ہے نہ نیند۔',
          hi: 'अल्लाह! उसके सिवा कोई माबूद नहीं। वह ज़िंदा है, सबको क़ायम रखने वाला है। न उसे ऊंघ आती है न नींद।',
          id: 'Allah, tidak ada tuhan selain Dia Yang Maha Hidup, Yang terus-menerus mengurus makhluk-Nya. Tidak mengantuk dan tidak tidur.',
          fr: 'Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent.',
          tr: 'Allah, O\'ndan başka ilah yoktur. O, Hayy ve Kayyum\'dur. O\'nu ne uyuklama ne de uyku tutmaz.',
          bn: 'আল্লাহ! তিনি ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তন্দ্রা বা নিদ্রা তাঁকে স্পর্শ করে না।'
        },
        reference: 'Quran 2:255',
        repeat: 1,
        benefit: 'Protection from Shaytan until morning'
      }
    ]
  },
  {
    id: 'sickness-healing',
    name: {
      en: 'Sickness, Healing & Shifa',
      ar: 'المرض والشفاء',
      ta: 'நோய் & குணப்படுத்துதல்',
      ml: 'രോഗവും ചികിത്സയും',
      ur: 'بیماری اور شفا',
      hi: 'बीमारी और शिफा',
      id: 'Penyakit & Kesembuhan',
      fr: 'Maladie & Guérison',
      tr: 'Hastalık & Şifa',
      bn: 'অসুস্থতা ও আরোগ্য'
    },
    icon: '💊',
    color: '#E91E63',
    duas: [
      {
        id: 'sh-1',
        arabic: 'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
        transliteration: 'Adhhibil-ba\'s, Rabban-nas, ishfi antash-shafi, la shifa\'a illa shifa\'uk, shifa\'an la yughadiru saqaman',
        translations: {
          en: 'Remove the affliction, O Lord of mankind. Grant healing, for You are the Healer. There is no healing except Your healing, a healing that leaves no illness behind.',
          ar: 'اذهب البأس رب الناس اشف أنت الشافي لا شفاء إلا شفاؤك شفاء لا يغادر سقما',
          ta: 'துயரத்தை நீக்குவாயாக, மனிதர்களின் இறைவா! குணப்படுத்துவாயாக, நீயே குணப்படுத்துபவன். உன் குணப்படுத்துதலைத் தவிர வேறு குணப்படுத்துதல் இல்லை.',
          ml: 'ദുരിതം നീക്കണമേ, മനുഷ്യരുടെ രക്ഷിതാവേ. സൗഖ്യം നൽകണമേ, നീ തന്നെയാണ് രോഗശാന്തി നൽകുന്നത്.',
          ur: 'تکلیف دور فرما، اے لوگوں کے رب! شفا عطا فرما، تو ہی شفا دینے والا ہے۔ تیری شفا کے سوا کوئی شفا نہیں۔',
          hi: 'तकलीफ़ दूर फरमा, ऐ लोगों के रब! शिफा अता फरमा, तू ही शिफा देने वाला है। तेरी शिफा के सिवा कोई शिफा नहीं।',
          id: 'Hilangkan penderitaan, wahai Tuhan manusia. Berikan kesembuhan, Engkaulah Yang Menyembuhkan. Tiada kesembuhan kecuali kesembuhan-Mu.',
          fr: 'Éloigne la souffrance, ô Seigneur des hommes. Accorde la guérison, Tu es le Guérisseur. Il n\'y a de guérison que Ta guérison.',
          tr: 'Sikintiyi gider, ey insanların Rabbi! Şifa ver, şifa veren Sensin. Senin şifandan başka şifa yoktur.',
          bn: 'কষ্ট দূর করো, হে মানুষদের রব! আরোগ্য দান করো, তুমিই আরোগ্যদাতা। তোমার আরোগ্য ছাড়া কোনো আরোগ্য নেই।'
        },
        reference: 'Bukhari 7/164, Muslim 4/1717',
        repeat: 3,
        benefit: 'The master supplication for healing'
      },
      {
        id: 'sh-2',
        arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ وَاشْفِ وَأَنْتَ شَافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ',
        transliteration: 'Allahumma Rabban-nas, adhhibil-ba\'s, washfi wa antash-shafi, la shifa\'a illa shifa\'uk',
        translations: {
          en: 'O Allah, Lord of mankind, remove the affliction and grant healing. You are the Healer, there is no healing except Your healing.',
          ar: 'اللهم رب الناس أذهب البأس واشف وأنت الشافي لا شفاء إلا شفاؤك',
          ta: 'இறைவா, மனிதர்களின் இறைவா! துயரத்தை நீக்கு, குணப்படுத்து. நீயே குணப்படுத்துபவன்.',
          ml: 'അല്ലാഹുവേ, മനുഷ്യരുടെ രക്ഷിതാവേ, ദുരിതം നീക്കി സൗഖ്യം നൽകണമേ.',
          ur: 'اے اللہ! لوگوں کے رب! تکلیف دور فرما اور شفا عطا فرما۔ تو ہی شفا دینے والا ہے۔',
          hi: 'ऐ अल्लाह! लोगों के रब! तकलीफ़ दूर फरमा और शिफा अता फरमा।',
          id: 'Ya Allah, Tuhan manusia, hilangkan penderitaan dan berikan kesembuhan. Engkaulah Yang Menyembuhkan.',
          fr: 'Ô Allah, Seigneur des hommes, éloigne la souffrance et accorde la guérison. Tu es le Guérisseur.',
          tr: 'Allah\'ım, insanların Rabbi! Sikintiyi gider ve şifa ver. Şifa veren Sensin.',
          bn: 'হে আল্লাহ! মানুষদের রব! কষ্ট দূর করো এবং আরোগ্য দান করো। তুমিই আরোগ্যদাতা।'
        },
        reference: 'Bukhari 7/164',
        repeat: 3
      },
      {
        id: 'sh-3',
        arabic: 'بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ',
        transliteration: 'Bismillahi arqik, min kulli shay\'in yu\'dhik, min sharri kulli nafsin aw \'ayni hasidin, Allahu yashfik',
        translations: {
          en: 'In the name of Allah I perform Ruqyah for you, from everything that harms you, from the evil of every soul or envious eye. May Allah heal you.',
          ar: 'بسم الله أرقيك من كل شيء يؤذيك من شر كل نفس أو عين حاسد الله يشفيك',
          ta: 'அல்லாஹ்வின் பெயரால் உனக்கு ருக்யா செய்கிறேன், உன்னைத் தீங்கு செய்யும் எல்லாவற்றிலிருந்தும், பொறாமைக் கண்ணின் தீமையிலிருந்தும். அல்லாஹ் உனக்கு குணமளிக்கட்டும்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ ഞാൻ നിനക്ക് രുഖ്‌യ ചെയ്യുന്നു, നിനക്ക് ദ്രോഹിക്കുന്ന എല്ലാറ്റിൽ നിന്നും.',
          ur: 'اللہ کے نام سے میں تمہارے لیے رقیہ پڑھتا ہوں، ہر چیز سے جو تمہیں تکلیف دے، ہر نفس کے شر سے اور حسد کی نظر سے۔ اللہ تمہیں شفا دے۔',
          hi: 'अल्लाह के नाम से मैं तुम्हारे लिए रुक़्या पढ़ता हूं, हर चीज़ से जो तुम्हें तकलीफ़ दे, हर नफ़्स के शर से।',
          id: 'Dengan nama Allah aku meruqyahmu, dari segala sesuatu yang menyakitimu, dari kejahatan setiap jiwa atau mata yang dengki.',
          fr: 'Au nom d\'Allah, je fais la Ruqyah pour toi, de tout ce qui te nuit, du mal de toute âme ou d\'un œil envieux.',
          tr: 'Allah\'ın adıyla sana rukye yapıyorum, sana zarar veren her şeyden, her nefsin şerrinden ve haset gözden.',
          bn: 'আল্লাহর নামে আমি তোমার জন্য রুকইয়া করছি, তোমাকে কষ্ট দেয় এমন সব কিছু থেকে।'
        },
        reference: 'Muslim 4/1716',
        repeat: 3,
        benefit: 'Prophetic Ruqyah for the sick'
      }
    ]
  },
  {
    id: 'death-condolence',
    name: {
      en: 'Death, Condolence & Graveyard',
      ar: 'الموت والعزاء والقبور',
      ta: 'மரணம் & இரங்கல்',
      ml: 'മരണവും അനുശോചനയും',
      ur: 'موت اور تعزیت',
      hi: 'मौत और ताज़ियत',
      id: 'Kematian & Belasungkawa',
      fr: 'Mort & Condoléances',
      tr: 'Ölüm & Taziye',
      bn: 'মৃত্যু ও শোক'
    },
    icon: '🕊️',
    color: '#607D8B',
    duas: [
      {
        id: 'dc-1',
        arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
        transliteration: 'Inna lillahi wa inna ilayhi raji\'un',
        translations: {
          en: 'Indeed we belong to Allah, and indeed to Him we will return.',
          ar: 'إنا لله وإنا إليه راجعون',
          ta: 'நிச்சயமாக நாம் அல்லாஹ்வுக்கே சொந்தம், நிச்சயமாக நாம் அவனிடமே திரும்புவோம்.',
          ml: 'തീർച്ചയായും ഞങ്ങൾ അല്ലാഹുവിന്റേതാണ്, തീർച്ചയായും ഞങ്ങൾ അവങ്കലേക്ക് മടങ്ങുന്നവരാണ്.',
          ur: 'بیشک ہم اللہ ہی کے لیے ہیں اور بیشک ہم اسی کی طرف لوٹنے والے ہیں۔',
          hi: 'बेशक हम अल्लाह ही के लिए हैं और बेशक हम उसी की तरफ लौटने वाले हैं।',
          id: 'Sesungguhnya kami milik Allah dan sesungguhnya kepada-Nya kami akan kembali.',
          fr: 'Nous appartenons à Allah et c\'est à Lui que nous retournerons.',
          tr: 'Şüphesiz biz Allah\'ınız ve şüphesiz O\'na döneceğiz.',
          bn: 'নিশ্চয়ই আমরা আল্লাহর জন্য এবং নিশ্চয়ই আমরা তাঁর দিকে ফিরে যাব।'
        },
        reference: 'Quran 2:156',
        repeat: 1,
        benefit: 'Recite upon hearing news of death'
      },
      {
        id: 'dc-2',
        arabic: 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ',
        transliteration: 'Allahummaghfir lahu warhamhu, wa \'afihi wa\'fu \'anh, wa akrim nuzulahu',
        translations: {
          en: 'O Allah, forgive him, have mercy on him, grant him well-being, pardon him, and honor his reception.',
          ar: 'اللهم اغفر له وارحمه وعافه واعف عنه وأكرم نزله',
          ta: 'இறைவா! அவருக்கு மன்னிப்பளிப்பாயாக, அவர் மீது இரக்கம் காட்டுவாயாக, அவருக்கு நலமளிப்பாயாக.',
          ml: 'അല്ലാഹുവേ, അവനോട് പൊറുക്കണമേ, അവനോട് ദയ കാണിക്കണമേ, അവന് സുഖം നൽകണമേ.',
          ur: 'اے اللہ! اسے بخش دے، اس پر رحم فرما، اسے عافیت دے اور اسے معاف فرما۔',
          hi: 'ऐ अल्लाह! इसे बख्श दे, इस पर रहम फरमा, इसे आफ़ियत दे और इसे माफ़ फरमा।',
          id: 'Ya Allah, ampunilah dia, rahmatilah dia, berikan keselamatan kepadanya.',
          fr: 'Ô Allah, pardonne-lui, aie pitié de lui, accorde-lui le bien-être.',
          tr: 'Allah\'ım! Onu bağışla, ona merhamet et, ona afiyet ver.',
          bn: 'হে আল্লাহ! তাকে ক্ষমা করো, তার প্রতি দয়া করো, তাকে নিরাপত্তা দাও।'
        },
        reference: 'Muslim 2/663',
        repeat: 1,
        benefit: 'Dua for deceased Muslim'
      },
      {
        id: 'dc-3',
        arabic: 'السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ',
        transliteration: 'As-salamu \'alaykum ahlad-diyari, minal-mu\'minina wal-muslimin, wa inna in sha\'a Allahu bikum lahiqun',
        translations: {
          en: 'Peace be upon you, O people of the dwellings, believers and Muslims. We shall, if Allah wills, join you.',
          ar: 'السلام عليكم أهل الديار من المؤمنين والمسلمين وإنا إن شاء الله بكم لاحقون',
          ta: 'அஸ்ஸலாமு அலைக்கும், ஈமான்கொண்ட மக்களே! மு\'மின்களே! முஸ்லிம்களே! நாங்களும் இன்ஷாஅல்லாஹ் உங்களோடு சேருவோம்.',
          ml: 'സമാധാനം നിങ്ങളുടെ മേലുള്ളൂ, വിശ്വാസികളായ വീട്ടുകാരേ. ഇൻശാഅള്ളാഹ് ഞങ്ങളും നിങ്ങളോട് ചേരും.',
          ur: 'سلامتی ہو تم پر، اے مومن اور مسلم گھر والو! ان شاء اللہ ہم بھی تم سے آ ملیں گے۔',
          hi: 'सलामती हो तुम पर, ऐ मोमिन और मुस्लिम घर वालो! इंशाअल्लाह हम भी तुमसे आ मिलेंगे।',
          id: 'Keselamatan atas kalian, wahai penghuni kubur dari kalangan mukminin dan muslimin. Kami insya Allah akan menyusul kalian.',
          fr: 'Paix sur vous, ô gens de ces demeures, croyants et musulmans. Nous vous rejoindrons, si Allah le veut.',
          tr: 'Selam olsun size, ey mümin ve Müslüman diyar ehli! İnşaallah biz de size katılacağız.',
          bn: 'সালাম তোমাদের প্রতি, হে মুমিন ও মুসলিম বাসিন্দাগণ! ইনশাআল্লাহ আমরাও তোমাদের সাথে মিলিত হব।'
        },
        reference: 'Muslim 2/671',
        repeat: 1,
        benefit: 'When entering a cemetery'
      }
    ]
  },
  {
    id: 'rabbana',
    name: {
      en: '40 Rabbana Duas (Qur\'an)',
      ar: '٤٠ دعاء ربنا من القرآن',
      ta: '40 ரப்பானா துஆக்கள்',
      ml: '40 റബ്ബനാ ദുആകൾ',
      ur: '۴۰ ربانا دعائیں',
      hi: '40 रब्बाना दुआएं',
      id: '40 Doa Rabbana',
      fr: '40 Duas Rabbana',
      tr: '40 Rabbana Duası',
      bn: '৪০ রাব্বানা দোয়া'
    },
    icon: '📖',
    color: '#9C27B0',
    duas: [
      {
        id: 'rb-1',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar',
        translations: {
          en: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.',
          ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
          ta: 'எங்கள் இறைவா! இந்த உலகில் நன்மையையும், மறுமையில் நன்மையையும் அருள்வாயாக! நரக வேதனையிலிருந்து காப்பாற்றுவாயாக!',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ലോകത്ത് നന്മയും പരലോകത്ത് നന്മയും നൽകണമേ. നരകശിക്ഷയിൽ നിന്ന് ഞങ്ങളെ രക്ഷിക്കണമേ.',
          ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی دے اور آخرت میں بھی بھلائی دے اور آگ کے عذاب سے بچا۔',
          hi: 'ऐ हमारे रब! हमें दुनिया में भी भलाई दे और आख़िरत में भी भलाई दे और आग के अज़ाब से बचा।',
          id: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.',
          fr: 'Notre Seigneur, accorde-nous le bien dans ce monde et le bien dans l\'au-delà, et protège-nous du châtiment du Feu.',
          tr: 'Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.',
          bn: 'হে আমাদের রব! আমাদের দুনিয়াতেও কল্যাণ দাও এবং আখিরাতেও কল্যাণ দাও এবং জাহান্নামের আযাব থেকে রক্ষা করো।'
        },
        reference: 'Quran 2:201',
        repeat: 1,
        benefit: 'Most comprehensive Quranic dua'
      },
      {
        id: 'rb-2',
        arabic: 'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا',
        transliteration: 'Rabbana la tu\'akhidhna in nasina aw akhta\'na',
        translations: {
          en: 'Our Lord, do not impose blame upon us if we have forgotten or erred.',
          ar: 'ربنا لا تؤاخذنا إن نسينا أو أخطأنا',
          ta: 'எங்கள் இறைவா! நாங்கள் மறந்துவிட்டால் அல்லது பிழை செய்தால் எங்களைக் குற்றம் சாட்டாதே!',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾ മറന്നാലും തെറ്റു ചെയ്താലും ഞങ്ങളെ ശിക്ഷിക്കരുതേ.',
          ur: 'اے ہمارے رب! اگر ہم بھول جائیں یا غلطی کریں تو ہمیں پکڑ نہ۔',
          hi: 'ऐ हमारे रब! अगर हम भूल जाएं या गलती करें तो हमें पकड़ मत।',
          id: 'Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami salah.',
          fr: 'Notre Seigneur, ne nous châtie pas si nous oublions ou commettons une erreur.',
          tr: 'Rabbimiz! Eğer unutursak veya hata yaparsak bizi sorumlu tutma.',
          bn: 'হে আমাদের রব! যদি আমরা ভুলে যাই বা ভুল করি তবে আমাদের পাকড়াও করো না।'
        },
        reference: 'Quran 2:286',
        repeat: 1
      },
      {
        id: 'rb-3',
        arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',
        transliteration: 'Rabbana la tuzigh qulubana ba\'da idh hadaytana',
        translations: {
          en: 'Our Lord, do not let our hearts deviate after You have guided us.',
          ar: 'ربنا لا تزغ قلوبنا بعد إذ هديتنا',
          ta: 'எங்கள் இறைவா! நீ எங்களை நேர்வழிப்படுத்திய பின் எங்கள் இருதயங்களை வழி கேட்கச் செய்யாதே!',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, നീ ഞങ്ങളെ നേർവഴി കാണിച്ച ശേഷം ഞങ്ങളുടെ ഹൃദയങ്ങൾ വഴിമാറരുതേ.',
          ur: 'اے ہمارے رب! جب تو نے ہمیں ہدایت دی تو ہمارے دلوں کو ٹیڑھا نہ کر۔',
          hi: 'ऐ हमारे रब! जब तू ने हमें हिदायत दी तो हमारे दिलों को टेढ़ा न कर।',
          id: 'Ya Tuhan kami, janganlah Engkau palingkan hati kami setelah Engkau beri petunjuk.',
          fr: 'Notre Seigneur, ne détourne pas nos cœurs après que Tu nous aies guidés.',
          tr: 'Rabbimiz! Bizi hidayete erdirdikten sonra kalplerimizi eğriltme.',
          bn: 'হে আমাদের রব! তুমি আমাদের হেদায়েত দেওয়ার পর আমাদের অন্তরকে বিচ্যুত করো না।'
        },
        reference: 'Quran 3:8',
        repeat: 1
      },
      {
        id: 'rb-4',
        arabic: 'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana innana amanna faghfir lana dhunubana wa qina \'adhaban-nar',
        translations: {
          en: 'Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire.',
          ar: 'ربنا إننا آمنا فاغفر لنا ذنوبنا وقنا عذاب النار',
          ta: 'எங்கள் இறைவா! நிச்சயமாக நாங்கள் ஈமான் கொண்டோம், எனவே எங்கள் பாவங்களை மன்னிப்பாயாக!',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾ വിശ്വസിച്ചിരിക്കുന്നു. ഞങ്ങളുടെ പാപങ്ങൾ പൊറുക്കണമേ.',
          ur: 'اے ہمارے رب! ہم ایمان لائے ہیں، ہماری خطائیں بخش دے اور آگ کے عذاب سے بچا۔',
          hi: 'ऐ हमारे रब! हम ईमान लाए हैं, हमारी खताएं बख्श दे और आग के अज़ाब से बचा।',
          id: 'Ya Tuhan kami, sesungguhnya kami telah beriman, maka ampunilah dosa-dosa kami.',
          fr: 'Notre Seigneur, nous avons cru, pardonne-nous nos péchés.',
          tr: 'Rabbimiz! Biz iman ettik, günahlarımızı bağışla.',
          bn: 'হে আমাদের রব! আমরা ঈমান এনেছি, আমাদের গুনাহ মাফ করো।'
        },
        reference: 'Quran 3:16',
        repeat: 1
      }
    ]
  },
  {
    id: 'everyday',
    name: {
      en: 'Everyday Duas',
      ar: 'أدعية يومية',
      ta: 'தினசரி துஆக்கள்',
      ml: 'ദിനംപ്രതി ദുആകൾ',
      ur: 'روزمرہ دعائیں',
      hi: 'रोज़मर्रा की दुआएं',
      id: 'Doa Sehari-hari',
      fr: 'Invocations Quotidiennes',
      tr: 'Günlük Dualar',
      bn: 'প্রতিদিনের দোয়া'
    },
    icon: '🏠',
    color: '#FF9800',
    duas: [
      {
        id: 'ed-1',
        arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
        transliteration: 'Bismillahi walajna, wa bismillahi kharajna, wa \'alallahi rabbina tawakkalna',
        translations: {
          en: 'In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we rely.',
          ar: 'بسم الله ولجنا وبسم الله خرجنا وعلى الله ربنا توكلنا',
          ta: 'அல்லாஹ்வின் பெயரால் நுழைகிறோம், அல்லாஹ்வின் பெயரால் வெளியேறுகிறோம், எங்கள் இறைவனாகிய அல்லாஹ்வின் மீதே நாங்கள் நம்பிக்கை வைக்கிறோம்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ പ്രവേശിക്കുന്നു, അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ പുറപ്പെടുന്നു.',
          ur: 'اللہ کے نام سے ہم داخل ہوتے ہیں اور اللہ کے نام سے خارج ہوتے ہیں اور اللہ پر بھروسہ کرتے ہیں۔',
          hi: 'अल्लाह के नाम से हम दाखिल होते हैं और अल्लाह के नाम से खारिज होते हैं और अल्लाह पर भरोसा करते हैं।',
          id: 'Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah Tuhan kami kami bertawakkal.',
          fr: 'Au nom d\'Allah nous entrons, au nom d\'Allah nous sortons, et sur Allah notre Seigneur nous nous remettons.',
          tr: 'Allah\'ın adıyla giriyoruz, Allah\'ın adıyla çıkıyoruz ve Allah\'a tevekkül ediyoruz.',
          bn: 'আল্লাহর নামে আমরা প্রবেশ করি এবং আল্লাহর নামে আমরা বের হই এবং আল্লাহর উপর ভরসা করি।'
        },
        reference: 'Abu Dawud 4/325',
        repeat: 1,
        benefit: 'Entering/leaving home'
      },
      {
        id: 'ed-2',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ',
        transliteration: 'Allahumma inni as\'aluka khayral-mawliji wa khayral-makhraji',
        translations: {
          en: 'O Allah, I ask You for the best of entering and the best of leaving.',
          ar: 'اللهم إني أسألك خير المدخل وخير المخرج',
          ta: 'இறைவா! சிறந்த நுழைவையும் சிறந்த வெளியேற்றத்தையும் உன்னிடம் கேட்கிறேன்.',
          ml: 'അല്ലാഹുവേ, ഏറ്റവും നല്ല പ്രവേശനവും ഏറ്റവും നല്ല പുറപ്പാടും ഞാൻ നിന്നോട് ചോദിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے بہترین داخلے اور بہترین خروج مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे बेहतरीन दाखिले और बेहतरीन खारिज की दुआ मांगता हूं।',
          id: 'Ya Allah, aku memohon kepada-Mu kebaikan masuk dan kebaikan keluar.',
          fr: 'Ô Allah, je Te demande le meilleur des entrées et le meilleur des sorties.',
          tr: 'Allah\'ım! Senden en hayırlı giriş ve en hayırlı çıkışı istiyorum.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে উত্তম প্রবেশ ও উত্তম নির্গমন প্রার্থনা করছি।'
        },
        reference: 'Abu Dawud 4/325',
        repeat: 1
      },
      {
        id: 'ed-3',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        translations: {
          en: 'In the name of Allah (before eating)',
          ar: 'بسم الله',
          ta: 'அல்லாஹ்வின் பெயரால் (உணவிற்கு முன்)',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ (ഭക്ഷണത്തിന് മുമ്പ്)',
          ur: 'اللہ کے نام سے (کھانے سے پہلے)',
          hi: 'अल्लाह के नाम से (खाने से पहले)',
          id: 'Dengan nama Allah (sebelum makan)',
          fr: 'Au nom d\'Allah (avant de manger)',
          tr: 'Allah\'ın adıyla (yemekten önce)',
          bn: 'আল্লাহর নামে (খাওয়ার আগে)'
        },
        reference: 'Abu Dawud 3/347',
        repeat: 1,
        benefit: 'Before eating'
      },
      {
        id: 'ed-4',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: 'Alhamdu lillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah',
        translations: {
          en: 'All praise is for Allah who fed me this and provided it without any power or might from me.',
          ar: 'الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني ولا قوة',
          ta: 'எனக்கு இதை உணவளித்தும், என் சக்தி இல்லாமல் எனக்கு அருளியும் அல்லாஹ்வுக்கே எல்லா புகழும்.',
          ml: 'എനിക്ക് ഇത് ഭക്ഷിപ്പിക്കുകയും എന്റെ ശക്തിയില്ലാതെ നൽകുകയും ചെയ്ത അല്ലാഹുവിന് സ്തുതി.',
          ur: 'تمام تعریفیں اللہ کے لیے ہیں جس نے مجھے یہ کھلایا اور میری طاقت کے بغیر روزی دی۔',
          hi: 'सब तारीफ़ अल्लाह के लिए है जिसने मुझे यह खिलाया और मेरी ताक़त के बिना रोज़ी दी।',
          id: 'Segala puji bagi Allah yang telah memberiku makan ini dan memberikannya rezeki tanpa daya dan kekuatan dariku.',
          fr: 'Louange à Allah qui m\'a nourri de ceci et m\'en a pourvu sans aucune force ni puissance de ma part.',
          tr: 'Bana bunu yediren ve benim gücüm olmadan bana rızık veren Allah\'a hamdolsun.',
          bn: 'সমস্ত প্রশংসা আল্লাহর যিনি আমাকে এটি খাওয়িয়েছেন এবং আমার শক্তি ছাড়াই আমাকে রিযিক দিয়েছেন।'
        },
        reference: 'Tirmidhi 4/345',
        repeat: 1,
        benefit: 'After eating'
      }
    ]
  },
  {
    id: 'travel',
    name: {
      en: 'Travel & Journey',
      ar: 'السفر والرحلة',
      ta: 'பயணம்',
      ml: 'യാത്ര',
      ur: 'سفر',
      hi: 'सफ़र',
      id: 'Perjalanan',
      fr: 'Voyage',
      tr: 'Yolculuk',
      bn: 'ভ্রমণ'
    },
    icon: '✈️',
    color: '#00BCD4',
    duas: [
      {
        id: 'tr-1',
        arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
        transliteration: 'Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun',
        translations: {
          en: 'Glory be to Him who has subjected this to us, and we could never have it by our efforts. And we shall return to our Lord.',
          ar: 'سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون',
          ta: 'இதை நமக்கு வசப்படுத்தியவன் எவ்வளவு மகத்துவமானவன்! நாம் நம் இறைவனிடமே திரும்புவோம்.',
          ml: 'ഇത് നമുക്ക് അനുസരണമാക്കിയവൻ എത്ര മഹാനാണ്. നമ്മുടെ രക്ഷിതാവിങ്കലേക്ക് നാം മടങ്ങുന്നവരാണ്.',
          ur: 'پاک ہے وہ جس نے اسے ہمارے لیے مسخر کر دیا اور ہم اس کے قابو نہ تھے اور ہم اپنے رب کی طرف لوٹنے والے ہیں۔',
          hi: 'पाक है वह जिसने इसे हमारे लिए मुसाख्ख़र कर दिया और हम इसके काबू न थे और हम अपने रब की तरफ लौटने वाले हैं।',
          id: 'Maha Suci Allah yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya.',
          fr: 'Gloire à Celui qui nous a soumis ceci, car nous n\'en étions pas capables. Et c\'est vers notre Seigneur que nous retournerons.',
          tr: 'Bunu bize boyun eğdiren Allah ne kadar yücedir. Biz buna güç yetiremezdik ve Rabbimize döneceğiz.',
          bn: 'পবিত্র তিনি যিনি এটিকে আমাদের জন্য বশীভূত করেছেন এবং আমরা এর ক্ষমতা রাখতাম না।'
        },
        reference: 'Muslim 2/980',
        repeat: 1,
        benefit: 'Dua for travel/vehicle'
      }
    ]
  },
  {
    id: 'anxiety-depression',
    name: {
      en: 'Anxiety & Depression Relief',
      ar: 'الهم والحزن',
      ta: 'கவலை & மன அழுத்தம்',
      ml: 'ആകുലത & വിഷാദം',
      ur: 'فکر اور غم',
      hi: 'चिंता और अवसाद',
      id: 'Kecemasan & Depresi',
      fr: 'Anxiété & Dépression',
      tr: 'Endişe & Depresyon',
      bn: 'উদ্বেগ ও বিষণ্নতা'
    },
    icon: '🤲',
    color: '#3F51B5',
    duas: [
      {
        id: 'ad-1',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ',
        transliteration: 'Allahumma inni a\'udhu bika minal-hammi wal-hazan, wal-\'ajzi wal-kasal, wal-bukhli wal-jubn',
        translations: {
          en: 'O Allah, I seek refuge in You from anxiety and grief, from incapacity and laziness, from miserliness and cowardice.',
          ar: 'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل والبخل والجبن',
          ta: 'இறைவா! கவலை, துக்கம், இயலாமை, சோம்பல், கஞ்சத்தனம், கோழைத்தனம் ஆகியவற்றிலிருந்து உன்னிடம் புகலளிக்கிறேன்.',
          ml: 'അല്ലാഹുവേ, ആകുലതയിൽ നിന്നും ദുഃഖത്തിൽ നിന്നും അശക്തിയിൽ നിന്നും മടിയരിൽ നിന്നും ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
          ur: 'اے اللہ! فکر، غم، کمزوری، سستی، کنجوسی اور بزدلی سے میں تیری پناہ مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! फ़िक्र, ग़म, कमज़ोरी, सुस्ती, कंजूसी और बज़दिली से मैं तेरी पनाह मांगता हूं।',
          id: 'Ya Allah, aku berlindung kepada-Mu dari kecemasan dan kesedihan, dari kelemahan dan kemalasan.',
          fr: 'Ô Allah, je cherche refuge auprès de Toi contre l\'anxiété et le chagrin, l\'incapacité et la paresse.',
          tr: 'Allah\'ım! Endişe ve kederden, acizlik ve tembellikten Senin sığınağına sığınırım.',
          bn: 'হে আল্লাহ! চিন্তা, দুঃখ, অক্ষমতা, অলসতা, কৃপণতা ও কাপুরুষতা থেকে আমি তোমার আশ্রয় চাই।'
        },
        reference: 'Bukhari 7/158',
        repeat: 3,
        benefit: 'Prophetic protection from anxiety'
      }
    ]
  },
  {
    id: 'debts-rizq',
    name: {
      en: 'Debts & Financial Ease',
      ar: 'الديون وسعة الرزق',
      ta: 'கடன் & ரிஸ்க்',
      ml: 'കടം & റിസ്ഖ്',
      ur: 'قرض اور رزق',
      hi: 'कर्ज़ और रिज़्क़',
      id: 'Hutang & Kelapangan Rezeki',
      fr: 'Dettes & Subsistance',
      tr: 'Borç & Rızık',
      bn: 'ঋণ ও রিযিক'
    },
    icon: '💰',
    color: '#FFC107',
    duas: [
      {
        id: 'dr-1',
        arabic: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
        transliteration: 'Allahummak-fini bihalalika \'an haramik, wa agh-nini bifadlika \'amman siwak',
        translations: {
          en: 'O Allah, suffice me with Your lawful against Your forbidden, and make me independent of all others besides You by Your grace.',
          ar: 'اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك',
          ta: 'இறைவா! உன் அனுமதிக்கப்பட்டவற்றால் உன் தடுக்கப்பட்டவற்றிலிருந்து எனக்குப் போதுமாக்குவாயாக!',
          ml: 'അല്ലാഹുവേ, നിന്റെ ഹലാലുകൊണ്ട് നിന്റെ ഹറാമിൽ നിന്ന് എന്നെ മതിയാക്കണമേ.',
          ur: 'اے اللہ! اپنی حلال چیزوں سے مجھے اپنی حرام چیزوں سے بے نیاز کر دے اور اپنے فضل سے اپنے سوا سب سے بے نیاز کر دے۔',
          hi: 'ऐ अल्लाह! अपनी हलाल चीज़ों से मुझे अपनी हराम चीज़ों से बेनियाज़ कर दे।',
          id: 'Ya Allah, cukupilah aku dengan kehalalan-Mu dari keharaman-Mu, dan kayakanlah aku dengan karunia-Mu dari selain-Mu.',
          fr: 'Ô Allah, suffis-moi par Ton licite contre Ton interdit, et rends-moi indépendant de tous sauf Toi par Ta grâce.',
          tr: 'Allah\'ım! Helalınla haramından beni koru ve lütfunla Senden başkasına muhtaç etme.',
          bn: 'হে আল্লাহ! তোমার হালাল দিয়ে তোমার হারাম থেকে আমাকে যথেষ্ট করো।'
        },
        reference: 'Tirmidhi 5/526',
        repeat: 3,
        benefit: 'For debt relief and rizq'
      }
    ]
  },
  {
    id: 'parents-family',
    name: {
      en: 'Parents & Family',
      ar: 'الوالدين والأسرة',
      ta: 'பெற்றோர் & குடும்பம்',
      ml: 'മാതാപിതാക്കൾ & കുടുംബം',
      ur: 'والدین اور خاندان',
      hi: 'माता-पिता और परिवार',
      id: 'Orang Tua & Keluarga',
      fr: 'Parents & Famille',
      tr: 'Anne-Baba & Aile',
      bn: 'পিতা-মাতা ও পরিবার'
    },
    icon: '👨‍👩‍👧‍👦',
    color: '#8BC34A',
    duas: [
      {
        id: 'pf-1',
        arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        transliteration: 'Rabbirhamhuma kama rabbayani saghira',
        translations: {
          en: 'My Lord, have mercy upon them as they brought me up when I was small.',
          ar: 'رب ارحمهما كما ربياني صغيرا',
          ta: 'இறைவா! நான் சிறுவனாயிருந்தபோது என்னை வளர்த்தது போல் அவர்களுக்கு இரக்கம் காட்டுவாயாக!',
          ml: 'രക്ഷിതാവേ, ഞാൻ ചെറുപ്പമായിരിക്കെ എന്നെ വളർത്തിയതുപോലെ അവരോട് ദയ കാണിക്കണമേ.',
          ur: 'اے میرے رب! ان دونوں پر رحم فرما جیسے انہوں نے مجھے بچپن میں پالا۔',
          hi: 'ऐ मेरे रब! उन दोनों पर रहम फरमा जैसे उन्होंने मुझे बचपन में पाला।',
          id: 'Ya Tuhanku, sayangilah keduanya sebagaimana keduanya telah mendidikku waktu kecil.',
          fr: 'Mon Seigneur, fais-leur miséricorde comme ils m\'ont élevé lorsque j\'étais petit.',
          tr: 'Rabbim! Onlara merhamet et, tıpkı beni küçükken yetiştirdikleri gibi.',
          bn: 'হে আমার রব! তাদের প্রতি দয়া করো যেমন তারা আমাকে ছোটবেলায় লালন-পালন করেছেন।'
        },
        reference: 'Quran 17:24',
        repeat: 1,
        benefit: 'For parents'
      }
    ]
  },
  {
    id: 'knowledge-exams',
    name: {
      en: 'Knowledge & Exams',
      ar: 'العلم والامتحانات',
      ta: 'கல்வி & தேர்வுகள்',
      ml: 'വിദ്യ & പരീക്ഷകൾ',
      ur: 'علم اور امتحان',
      hi: 'ज्ञान और परीक्षा',
      id: 'Ilmu & Ujian',
      fr: 'Savoir & Examens',
      tr: 'İlim & Sınavlar',
      bn: 'জ্ঞান ও পরীক্ষা'
    },
    icon: '📚',
    color: '#009688',
    duas: [
      {
        id: 'ke-1',
        arabic: 'رَبِّ زِدْنِي عِلْمًا',
        transliteration: 'Rabbi zidni \'ilma',
        translations: {
          en: 'My Lord, increase me in knowledge.',
          ar: 'رب زدني علما',
          ta: 'இறைவா! எனக்கு அறிவை அதிகரிப்பாயாக!',
          ml: 'രക്ഷിതാവേ, എനിക്ക് വിദ്യ വർധിപ്പിക്കണമേ.',
          ur: 'اے میرے رب! میرے علم میں اضافہ فرما۔',
          hi: 'ऐ मेरे रब! मेरे इल्म में इज़ाफ़ा फरमा।',
          id: 'Ya Tuhanku, tambahkanlah ilmu kepadaku.',
          fr: 'Mon Seigneur, augmente-moi en savoir.',
          tr: 'Rabbim! İlmimi artır.',
          bn: 'হে আমার রব! আমার জ্ঞান বৃদ্ধি করো।'
        },
        reference: 'Quran 20:114',
        repeat: 3,
        benefit: 'For increase in knowledge'
      },
      {
        id: 'ke-2',
        arabic: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
        transliteration: 'Allahumma la sahla illa ma ja\'altahu sahla, wa anta taj\'alul-hazna idha shi\'ta sahla',
        translations: {
          en: 'O Allah, nothing is easy except what You make easy. And You make difficulty easy if You will.',
          ar: 'اللهم لا سهل إلا ما جعلته سهلا وأنت تجعل الحزن إذا شئت سهلا',
          ta: 'இறைவா! நீ எளிதாக்குவதைத் தவிர எளிதானது இல்லை. நீ நாடினால் கடினமானதை எளிதாக்குவாய்.',
          ml: 'അല്ലാഹുവേ, നീ എളുപ്പമാക്കിയതല്ലാതെ എളുപ്പമില്ല. നീ ഉദ്ദേശിച്ചാൽ നീ പ്രയാസത്തെ എളുപ്പമാക്കും.',
          ur: 'اے اللہ! جو تو آسان کر دے اس کے سوا کچھ آسان نہیں اور تو جب چاہے مشکل کو آسان کر دیتا ہے۔',
          hi: 'ऐ अल्लाह! जो तू आसान कर दे उसके सिवा कुछ आसान नहीं और तू जब चाहे मुश्किल को आसान कर देता है।',
          id: 'Ya Allah, tidak ada yang mudah kecuali apa yang Engkau jadikan mudah. Dan Engkau menjadikan kesulitan itu mudah jika Engkau kehendaki.',
          fr: 'Ô Allah, rien n\'est facile sauf ce que Tu rends facile. Et Tu rends la difficulté facile si Tu le veux.',
          tr: 'Allah\'ım! Senin kolay kıldığın dışında kolay olan hiçbir şey yoktur. Dilersen zorluğu kolay kılarsın.',
          bn: 'হে আল্লাহ! তুমি যা সহজ করো তার বাইরে কিছুই সহজ নয়। তুমি চাইলে কষ্টকে সহজ করে দাও।'
        },
        reference: 'Ibn Hibban 2427',
        repeat: 1,
        benefit: 'Before exams or difficult tasks'
      }
    ]
  },
  {
    id: 'rain-thunder',
    name: {
      en: 'Rain & Thunder',
      ar: 'المطر والرعد',
      ta: 'மழை & இடி',
      ml: 'മഴ & ഇടി',
      ur: 'بارش اور بجلی',
      hi: 'बारिश और बिजली',
      id: 'Hujan & Petir',
      fr: 'Pluie & Tonnerre',
      tr: 'Yağmur & Yıldırım',
      bn: 'বৃষ্টি ও বজ্রপাত'
    },
    icon: '🌧️',
    color: '#03A9F4',
    duas: [
      {
        id: 'rt-1',
        arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
        transliteration: 'Allahumma sayyiban nafi\'a',
        translations: {
          en: 'O Allah, (bring) beneficial rain.',
          ar: 'اللهم صيبا نافعا',
          ta: 'இறைவா! நன்மை பயக்கும் மழையை அருள்வாயாக!',
          ml: 'അല്ലാഹുവേ, ഗുണകരമായ മഴ നൽകണമേ.',
          ur: 'اے اللہ! فائدے والی بارش نازل فرما۔',
          hi: 'ऐ अल्लाह! फायदेमंद बारिश नाज़िल फरमा।',
          id: 'Ya Allah, turunkanlah hujan yang bermanfaat.',
          fr: 'Ô Allah, (fais tomber) une pluie bénéfique.',
          tr: 'Allah\'ım! Faydalı yağmur indir.',
          bn: 'হে আল্লাহ! উপকারী বৃষ্টি দাও।'
        },
        reference: 'Bukhari 1/224',
        repeat: 1,
        benefit: 'When rain begins'
      }
    ]
  },
  {
    id: 'sneezing',
    name: {
      en: 'Sneezing & Yawning',
      ar: 'العطاس والتثاؤب',
      ta: 'தும்மல்',
      ml: 'ചുമ്മാതൽ',
      ur: 'چھینک',
      hi: 'छींक',
      id: 'Bersin',
      fr: 'Éternuement',
      tr: 'Hapşırma',
      bn: 'হাঁচি'
    },
    icon: '🤧',
    color: '#CDDC39',
    duas: [
      {
        id: 'sn-1',
        arabic: 'الْحَمْدُ لِلَّهِ',
        transliteration: 'Alhamdulillah',
        translations: {
          en: 'All praise is for Allah (after sneezing)',
          ar: 'الحمد لله',
          ta: 'எல்லா புகழும் அல்லாஹ்வுக்கே (தும்மலுக்குப் பின்)',
          ml: 'എല്ലാ സ്തുതിയും അല്ലാഹുവിന് (ചുമ്മാതലിന് ശേഷം)',
          ur: 'تمام تعریفیں اللہ کے لیے ہیں (چھینک کے بعد)',
          hi: 'सब तारीफ़ अल्लाह के लिए हैं (छींक के बाद)',
          id: 'Segala puji bagi Allah (setelah bersin)',
          fr: 'Toute louange est pour Allah (après avoir éternué)',
          tr: 'Hamd Allah\'adır (hapşırdıktan sonra)',
          bn: 'সমস্ত প্রশংসা আল্লাহর (হাঁচির পরে)'
        },
        reference: 'Bukhari 7/125',
        repeat: 1,
        benefit: 'After sneezing'
      }
    ]
  },
  {
    id: 'waking-sleeping',
    name: {
      en: 'Waking & Sleeping',
      ar: 'الاستيقاظ والنوم',
      ta: 'தூக்கம் & எழுப்பு',
      ml: 'ഉറക്കവും ഉണർവ്വും',
      ur: 'سونے اور جاگنے',
      hi: 'सोने और जागने',
      id: 'Tidur & Bangun',
      fr: 'Sommeil & Réveil',
      tr: 'Uyku & Uyanma',
      bn: 'ঘুম ও জাগরণ'
    },
    icon: '🌙',
    color: '#673AB7',
    duas: [
      {
        id: 'ws-1',
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismika Allahumma amutu wa ahya',
        translations: {
          en: 'In Your name, O Allah, I die and I live.',
          ar: 'باسمك اللهم أموت وأحيا',
          ta: 'உன் பெயரால், இறைவா! நான் இறக்கிறேன், நான் வாழ்கிறேன்.',
          ml: 'നിന്റെ നാമത്തിൽ, അല്ലാഹുവേ, ഞാൻ മരിക്കുകയും ജീവിക്കുകയും ചെയ്യുന്നു.',
          ur: 'تیرے نام سے اے اللہ! میں مرتا ہوں اور جیتا ہوں۔',
          hi: 'तेरे नाम से ऐ अल्लाह! मैं मरता हूं और जीता हूं।',
          id: 'Dengan nama-Mu, ya Allah, aku mati dan aku hidup.',
          fr: 'En Ton nom, ô Allah, je meurs et je vis.',
          tr: 'Senin adınla Allah\'ım! Ölüyorum ve yaşıyorum.',
          bn: 'তোমার নামে হে আল্লাহ! আমি মরি এবং বাঁচি।'
        },
        reference: 'Bukhari 11/113',
        repeat: 1,
        benefit: 'Before sleeping'
      },
      {
        id: 'ws-2',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        transliteration: 'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur',
        translations: {
          en: 'All praise is for Allah who gave us life after having caused us to die, and unto Him is the resurrection.',
          ar: 'الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور',
          ta: 'நம்மை மரணமடையச் செய்த பின் உயிர்ப்பித்த அல்லாஹ்வுக்கே எல்லா புகழும்.',
          ml: 'ഞങ്ങളെ മരിപ്പിച്ച ശേഷം ജീവിപ്പിച്ച അല്ലാഹുവിന് സ്തുതി.',
          ur: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مرنے کے بعد زندہ کیا اور اسی کی طرف لوٹنا ہے۔',
          hi: 'सब तारीफ़ अल्लाह के लिए हैं जिसने हमें मरने के बाद ज़िंदा किया और उसी की तरफ लौटना है।',
          id: 'Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami dan kepada-Nya kebangkitan.',
          fr: 'Louange à Allah qui nous a donné la vie après nous avoir fait mourir, et vers Lui est la résurrection.',
          tr: 'Bizi öldükten sonra dirilten Allah\'a hamdolsun ve dönüş O\'nadır.',
          bn: 'সমস্ত প্রশংসা আল্লাহর যিনি আমাদের মৃত্যুর পর জীবিত করেছেন এবং তাঁর দিকেই প্রত্যাবর্তন।'
        },
        reference: 'Bukhari 11/113',
        repeat: 1,
        benefit: 'Upon waking up'
      }
    ]
  },
  {
    id: 'masjid',
    name: {
      en: 'Entering & Leaving Masjid',
      ar: 'دخول وخروج المسجد',
      ta: 'மஸ்ஜித் நுழைவு & வெளியேற்றம்',
      ml: 'മസ്ജിദിൽ പ്രവേശനവും പുറപ്പാടും',
      ur: 'مسجد میں داخلہ اور خروج',
      hi: 'मस्जिद में दाख़िला और ख़ारिज',
      id: 'Masuk & Keluar Masjid',
      fr: 'Entrée & Sortie de la Mosquée',
      tr: 'Camiye Giriş & Çıkış',
      bn: 'মসজিদে প্রবেশ ও নির্গমন'
    },
    icon: '🕌',
    color: '#004D40',
    duas: [
      {
        id: 'mj-1',
        arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        transliteration: 'Allahummaftah li abwaba rahmatik',
        translations: {
          en: 'O Allah, open for me the doors of Your mercy.',
          ar: 'اللهم افتح لي أبواب رحمتك',
          ta: 'இறைவா! உன் இரக்கத்தின் கதவுகளை எனக்காகத் திறப்பாயாக!',
          ml: 'അല്ലാഹുവേ, നിന്റെ കാരുണ്യത്തിന്റെ വാതിലുകൾ എനിക്ക് തുറന്നു തരണമേ.',
          ur: 'اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔',
          hi: 'ऐ अल्लाह! मेरे लिए अपनी रहमत के दरवाज़े खोल दे।',
          id: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
          fr: 'Ô Allah, ouvre-moi les portes de Ta miséricorde.',
          tr: 'Allah\'ım! Bana rahmet kapılarını aç.',
          bn: 'হে আল্লাহ! আমার জন্য তোমার রহমতের দরজা খুলে দাও।'
        },
        reference: 'Muslim 1/494',
        repeat: 1,
        benefit: 'Entering the masjid'
      }
    ]
  },
  {
    id: 'bathroom',
    name: {
      en: 'Bathroom & Restroom',
      ar: 'دخول الخلاء',
      ta: 'கழிவறை',
      ml: 'ശൗചാലയം',
      ur: 'بیت الخلا',
      hi: 'बाथरूम',
      id: 'Toilet',
      fr: 'Toilettes',
      tr: 'Tuvalet',
      bn: 'বাথরুম'
    },
    icon: '🚻',
    color: '#795548',
    duas: [
      {
        id: 'br-1',
        arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        transliteration: 'Bismillah, Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith',
        translations: {
          en: 'In the name of Allah. O Allah, I seek refuge in You from the male and female evil jinn.',
          ar: 'بسم الله اللهم إني أعوذ بك من الخبث والخبائث',
          ta: 'அல்லாஹ்வின் பெயரால். இறைவா! ஆண் மற்றும் பெண் கெட்ட ஜின்களிடமிருந்து உன்னிடம் புகலளிக்கிறேன்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ. അല്ലാഹുവേ, ആൺ-പെൺ ദുർജ്ജിന്നുക്കളിൽ നിന്ന് ഞാൻ നിന്നോട് അഭയം തേടുന്നു.',
          ur: 'اللہ کے نام سے۔ اے اللہ! میں خبیث اور خبائث جنوں سے تیری پناہ مانگتا ہوں۔',
          hi: 'अल्लाह के नाम से। ऐ अल्लाह! मैं ख़बीस और ख़बाइस जिन्नातों से तेरी पनाह मांगता हूं।',
          id: 'Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari jin laki-laki dan perempuan.',
          fr: 'Au nom d\'Allah. Ô Allah, je cherche refuge auprès de Toi contre les djinns maléfiques mâles et femelles.',
          tr: 'Allah\'ın adıyla. Allah\'ım! Kötü cinlerden Senin sığınağına sığınırım.',
          bn: 'আল্লাহর নামে। হে আল্লাহ! আমি পুরুষ ও নারী জিনদের শর থেকে তোমার আশ্রয় চাই।'
        },
        reference: 'Bukhari 1/45',
        repeat: 1,
        benefit: 'Before entering bathroom'
      }
    ]
  },
  {
    id: 'clothing',
    name: {
      en: 'Wearing Clothes',
      ar: 'لبس الثوب',
      ta: 'ஆடை அணிதல்',
      ml: 'വസ്ത്രം ധരിക്കൽ',
      ur: 'کپڑے پہننا',
      hi: 'कपड़े पहनना',
      id: 'Mengenakan Pakaian',
      fr: 'Mettre des Vêtements',
      tr: 'Kıyafet Giyme',
      bn: 'পোশাক পরা'
    },
    icon: '👔',
    color: '#E040FB',
    duas: [
      {
        id: 'cl-1',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: 'Alhamdu lillahil-ladhi kasani hadhath-thawb, wa razaqanihi min ghayri hawlin minni wa la quwwah',
        translations: {
          en: 'All praise is for Allah who clothed me with this garment and provided it for me without any power or might from me.',
          ar: 'الحمد لله الذي كساني هذا الثوب ورزقنيه من غير حول مني ولا قوة',
          ta: 'இந்த ஆடையை எனக்கு அளித்த அல்லாஹ்வுக்கே எல்லா புகழும்.',
          ml: 'ഈ വസ്ത്രം എനിക്ക് നൽകിയ അല്ലാഹുവിന് സ്തുതി.',
          ur: 'تمام تعریفیں اللہ کے لیے ہیں جس نے مجھے یہ کپڑا عطا کیا۔',
          hi: 'सब तारीफ़ अल्लाह के लिए हैं जिसने मुझे यह कपड़ा अता किया।',
          id: 'Segala puji bagi Allah yang telah memberiku pakaian ini.',
          fr: 'Louange à Allah qui m\'a vêtu de ce vêtement.',
          tr: 'Bana bu kıyafeti veren Allah\'a hamdolsun.',
          bn: 'সমস্ত প্রশংসা আল্লাহর যিনি আমাকে এই পোশাক দিয়েছেন।'
        },
        reference: 'Abu Dawud 4/41',
        repeat: 1,
        benefit: 'When wearing new clothes'
      }
    ]
  },
  {
    id: 'market',
    name: {
      en: 'Market Entrance',
      ar: 'دخول السوق',
      ta: 'சந்தை நுழைவு',
      ml: 'ചന്തയിൽ പ്രവേശനം',
      ur: 'بازار میں داخلہ',
      hi: 'बाज़ार में दाख़िला',
      id: 'Masuk Pasar',
      fr: 'Entrée au Marché',
      tr: 'Pazara Giriş',
      bn: 'বাজারে প্রবেশ'
    },
    icon: '🏪',
    color: '#FF5722',
    duas: [
      {
        id: 'mk-1',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumitu, wa huwa hayyun la yamut, biyadihil-khayr, wa huwa \'ala kulli shay\'in qadir',
        translations: {
          en: 'There is no god but Allah alone, no partner has He. His is the dominion and His is the praise. He gives life and causes death, and He is Alive and does not die. In His Hand is all good, and He is over all things omnipotent.',
          ar: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو حي لا يموت بيده الخير وهو على كل شيء قدير',
          ta: 'இணையற்ற அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை. ஆட்சி அவனுடையது, புகழ் அவனுடையது. அவன் உயிர்ப்பிக்கிறான், மரணமளிக்கிறான்.',
          ml: 'അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല. രാജ്യം അവന്റേതാണ്, സ്തുതി അവന്റേതാണ്.',
          ur: 'اللہ کے سوا کوئی معبود نہیں۔ بادشاہت اسی کی ہے، تعریف اسی کے لیے ہے۔ وہ زندہ کرتا ہے اور مارتا ہے۔',
          hi: 'अल्लाह के सिवा कोई माबूद नहीं। बादशाहत उसी की है, तारीफ़ उसी के लिए है। वह ज़िंदा करता है और मारता है।',
          id: 'Tiada tuhan selain Allah Yang Maha Esa. Kepunyaan-Nya kerajaan dan pujian. Dia menghidupkan dan mematikan.',
          fr: 'Nul ne mérite d\'être adoré sauf Allah Seul. À Lui la royauté et à Lui la louange. Il donne la vie et la mort.',
          tr: 'Allah\'tan başka ilah yoktur. Mülk O\'nundur, hamd O\'nundur. O diriltir ve öldürür.',
          bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই। রাজত্ব তাঁর, প্রশংসা তাঁর। তিনি জীবিত করেন ও মৃত্যু দেন।'
        },
        reference: 'Tirmidhi 5/527',
        repeat: 1,
        benefit: '1,000,000 good deeds recorded'
      }
    ]
  }
];

export const asmaHusna: AsmaHusna[] = [
  { number: 1, arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', translations: { en: 'The Most Gracious', ar: 'الرحمن', ta: 'மிகவும் கருணையுள்ளவன்', ml: 'അതികാരുണികൻ', ur: 'بہت مہربان', hi: 'बहुत मेहरबान', id: 'Yang Maha Pengasih', fr: 'Le Tout Miséricordieux', tr: 'Rahman', bn: 'পরম দয়ালু' }, benefit: 'Recite for mercy' },
  { number: 2, arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', translations: { en: 'The Most Merciful', ar: 'الرحيم', ta: 'மிகவும் இரக்கமுள்ளவன்', ml: 'അതിദയാലു', ur: 'بہت رحم کرنے والا', hi: 'बहुत रहम करने वाला', id: 'Yang Maha Penyayang', fr: 'Le Très Miséricordieux', tr: 'Rahim', bn: 'পরম দয়ালু' }, benefit: 'Recite for compassion' },
  { number: 3, arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', translations: { en: 'The King', ar: 'الملك', ta: 'மன்னவன்', ml: 'രാജാവ്', ur: 'بادشاہ', hi: 'बादशाह', id: 'Yang Maha Merajai', fr: 'Le Roi', tr: 'Melik', bn: 'বাদশাহ' }, benefit: 'Recite for leadership' },
  { number: 4, arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', translations: { en: 'The Most Holy', ar: 'القدوس', ta: 'மிகவும் தூய்மையானவன்', ml: 'പരിശുദ്ധൻ', ur: 'بہت پاک', hi: 'बहुत पाक', id: 'Yang Maha Suci', fr: 'Le Très Saint', tr: 'Kuddus', bn: 'পরম পবিত্র' }, benefit: 'Recite for purity' },
  { number: 5, arabic: 'السَّلَامُ', transliteration: 'As-Salam', translations: { en: 'The Source of Peace', ar: 'السلام', ta: 'சாந்தியின் மூலம்', ml: 'സമാധാനത്തിന്റെ ഉറവിടം', ur: 'سلامتی کا ماخذ', hi: 'सलामती का ज़रिया', id: 'Yang Maha Memberi Kesejahteraan', fr: 'La Source de la Paix', tr: 'Selam', bn: 'শান্তির উৎস' }, benefit: 'Recite for peace' },
  { number: 6, arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', translations: { en: 'The Guardian of Faith', ar: 'المؤمن', ta: 'நம்பிக்கையின் பாதுகாவலன்', ml: 'വിശ്വാസത്തിന്റെ കാവൽക്കാരൻ', ur: 'ایمان کا محافظ', hi: 'ईमान का महफूज़', id: 'Yang Maha Memberi Keamanan', fr: 'Le Gardien de la Foi', tr: 'Mümin', bn: 'ঈমানের রক্ষক' }, benefit: 'Recite for security' },
  { number: 7, arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', translations: { en: 'The Protector', ar: 'المهيمن', ta: 'பாதுகாவலன்', ml: 'സംരക്ഷകൻ', ur: 'نگران', hi: 'निगरान', id: 'Yang Maha Memelihara', fr: 'Le Protecteur', tr: 'Müheymin', bn: 'রক্ষক' }, benefit: 'Recite for protection' },
  { number: 8, arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', translations: { en: 'The Almighty', ar: 'العزيز', ta: 'வல்லமையுள்ளவன்', ml: 'സർവ്വശക്തൻ', ur: 'عزت والا', hi: 'इज़्ज़त वाला', id: 'Yang Maha Perkasa', fr: 'Le Tout Puissant', tr: 'Aziz', bn: 'পরাক্রমশালী' }, benefit: 'Recite for strength' },
  { number: 9, arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', translations: { en: 'The Compeller', ar: 'الجبار', ta: 'கட்டாயப்படுத்துபவன்', ml: 'നിർബന്ധകൻ', ur: 'جبروت والا', hi: 'जब्रत वाला', id: 'Yang Maha Memaksa', fr: 'Le Contraignant', tr: 'Cebbar', bn: 'জবরদস্ত' }, benefit: 'Recite for mending broken hearts' },
  { number: 10, arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', translations: { en: 'The Supreme', ar: 'المتكبر', ta: 'மிகப் பெரியவன்', ml: 'മഹത്വമുള്ളവൻ', ur: 'بڑائی والا', hi: 'बड़ाई वाला', id: 'Yang Maha Megah', fr: 'Le Suprême', tr: 'Mütekebbir', bn: 'মহিমান্বিত' }, benefit: 'Recite for humility' },
  { number: 11, arabic: 'الْخَالِقُ', transliteration: 'Al-Khaliq', translations: { en: 'The Creator', ar: 'الخالق', ta: 'படைப்பாளன்', ml: 'സ്രഷ്ടാവ്', ur: 'پیدا کرنے والا', hi: 'पैदा करने वाला', id: 'Yang Maha Menciptakan', fr: 'Le Créateur', tr: 'Halık', bn: 'স্রষ্টা' }, benefit: 'Recite for creativity' },
  { number: 12, arabic: 'الْبَارِئُ', transliteration: 'Al-Bari\'', translations: { en: 'The Originator', ar: 'البارئ', ta: 'தோற்றுவிப்பவன்', ml: 'ഉത്പാദകൻ', ur: 'بنانے والا', hi: 'बनाने वाला', id: 'Yang Maha Mengadakan', fr: 'L\'Originateur', tr: 'Bari', bn: 'উদ্ভাবক' }, benefit: 'Recite for new beginnings' },
  { number: 13, arabic: 'الْمُصَوِّرُ', transliteration: 'Al-Musawwir', translations: { en: 'The Fashioner', ar: 'المصور', ta: 'வடிவமைப்பவன்', ml: 'രൂപകൽപ്പന ചെയ്യുന്നവൻ', ur: 'صورت بنانے والا', hi: 'शक्ल देने वाला', id: 'Yang Maha Membentuk', fr: 'Le Modeleur', tr: 'Musavvir', bn: 'রূপদানকারী' }, benefit: 'Recite for beauty' },
  { number: 14, arabic: 'الْغَفَّارُ', transliteration: 'Al-Ghaffar', translations: { en: 'The Forgiver', ar: 'الغفار', ta: 'மன்னிப்பவன்', ml: 'പൊറുക്കുന്നവൻ', ur: 'بخشنے والا', hi: 'बख्शने वाला', id: 'Yang Maha Pengampun', fr: 'Le Pardonneur', tr: 'Gaffar', bn: 'ক্ষমাকারী' }, benefit: 'Recite for forgiveness' },
  { number: 15, arabic: 'الْقَهَّارُ', transliteration: 'Al-Qahhar', translations: { en: 'The Subduer', ar: 'القهار', ta: 'அடக்குபவன்', ml: 'അടക്കിയാൾവുന്നവൻ', ur: 'غالب', hi: 'ग़ालिब', id: 'Yang Maha Menundukkan', fr: 'Le Dominateur', tr: 'Kahhar', bn: 'প্রবল' }, benefit: 'Recite against oppression' },
  { number: 16, arabic: 'الْوَهَّابُ', transliteration: 'Al-Wahhab', translations: { en: 'The Bestower', ar: 'الوهاب', ta: 'வாரி வழங்குபவன்', ml: 'ദാനം ചെയ്യുന്നവൻ', ur: 'عطا کرنے والا', hi: 'अता करने वाला', id: 'Yang Maha Pemberi', fr: 'Le Donateur', tr: 'Vehhab', bn: 'দাতা' }, benefit: 'Recite for sustenance' },
  { number: 17, arabic: 'الرَّزَّاقُ', transliteration: 'Ar-Razzaq', translations: { en: 'The Provider', ar: 'الرزاق', ta: 'உணவளிப்பவன்', ml: 'ആഹാരം നൽകുന്നവൻ', ur: 'رزق دینے والا', hi: 'रिज़्क़ देने वाला', id: 'Yang Maha Pemberi Rezeki', fr: 'Le Pourvoyeur', tr: 'Rezzak', bn: 'রিযিকদাতা' }, benefit: 'Recite for rizq' },
  { number: 18, arabic: 'الْفَتَّاحُ', transliteration: 'Al-Fattah', translations: { en: 'The Opener', ar: 'الفتاح', ta: 'திறப்பவன்', ml: 'തുറക്കുന്നവൻ', ur: 'کھولنے والا', hi: 'खोलने वाला', id: 'Yang Maha Pembuka', fr: 'L\'ouvreur', tr: 'Fettah', bn: 'উন্মোচক' }, benefit: 'Recite for opening doors of opportunity' },
  { number: 19, arabic: 'اَلْعَلِيْمُ', transliteration: 'Al-Alim', translations: { en: 'The All-Knowing', ar: 'العليم', ta: 'எல்லாம் அறிபவன்', ml: 'സർവ്വജ്ഞൻ', ur: 'عالم', hi: 'आलिम', id: 'Yang Maha Mengetahui', fr: 'L\'Omniscient', tr: 'Alim', bn: 'সর্বজ্ঞ' }, benefit: 'Recite for knowledge' },
  { number: 20, arabic: 'الْقَابِضُ', transliteration: 'Al-Qabid', translations: { en: 'The Constrictor', ar: 'القابض', ta: 'சுருக்குபவன்', ml: 'ചുരുക്കുന്നവൻ', ur: 'قبض کرنے والا', hi: 'क़ब्ज़ करने वाला', id: 'Yang Maha Menyempitkan', fr: 'Le Constrictor', tr: 'Kabız', bn: 'সংকোচনকারী' }, benefit: 'Recite for patience' },
  { number: 21, arabic: 'الْبَاسِطُ', transliteration: 'Al-Basit', translations: { en: 'The Expander', ar: 'الباسط', ta: 'விரிவுபடுத்துபவன்', ml: 'വികസിപ്പിക്കുന്നവൻ', ur: 'پھیلانے والا', hi: 'फैलाने वाला', id: 'Yang Maha Melapangkan', fr: 'L\'Extenseur', tr: 'Basıt', bn: 'প্রসারণকারী' }, benefit: 'Recite for expansion of sustenance' },
  { number: 22, arabic: 'الْخَافِضُ', transliteration: 'Al-Khafid', translations: { en: 'The Abaser', ar: 'الخافض', ta: 'தாழ்த்துபவன்', ml: 'താഴ്ത്തുന്നവൻ', ur: 'نیچا کرنے والا', hi: 'नीचा करने वाला', id: 'Yang Maha Merendahkan', fr: 'L\'Avilissant', tr: 'Hafız', bn: 'নতকারী' }, benefit: 'Recite for humility' },
  { number: 23, arabic: 'الرَّافِعُ', transliteration: 'Ar-Rafi', translations: { en: 'The Exalter', ar: 'الرافع', ta: 'உயர்த்துபவன்', ml: 'ഉയർത്തുന്നവൻ', ur: 'بلند کرنے والا', hi: 'बुलंद करने वाला', id: 'Yang Maha Meninggikan', fr: 'L\'Élévateur', tr: 'Rafi', bn: 'উন্নীতকারী' }, benefit: 'Recite for elevation' },
  { number: 24, arabic: 'الْمُعِزُّ', transliteration: 'Al-Mu\'izz', translations: { en: 'The Honorer', ar: 'المعز', ta: 'கௌரவிப்பவன்', ml: 'ബഹുമാനിക്കുന്നവൻ', ur: 'عزت دینے والا', hi: 'इज़्ज़त देने वाला', id: 'Yang Maha Memuliakan', fr: 'L\'Honorent', tr: 'Muizz', bn: 'সম্মানদাতা' }, benefit: 'Recite for honor' },
  { number: 25, arabic: 'الْمُذِلُّ', transliteration: 'Al-Mudhill', translations: { en: 'The Humiliator', ar: 'المذل', ta: 'இழிவுபடுத்துபவன்', ml: 'അപമാനിക്കുന്നവൻ', ur: 'ذلیل کرنے والا', hi: 'ज़लील करने वाला', id: 'Yang Maha Menghinakan', fr: 'L\'Humiliant', tr: 'Müzill', bn: 'অপমানকারী' }, benefit: 'Recite for protection from arrogance' },
  { number: 26, arabic: 'السَّمِيعُ', transliteration: 'As-Sami', translations: { en: 'The All-Hearing', ar: 'السميع', ta: 'எல்லாம் கேட்பவன்', ml: 'സർവ്വശ്രോതാവ്', ur: 'سننے والا', hi: 'सुनने वाला', id: 'Yang Maha Mendengar', fr: 'L\'Audient', tr: 'Semi', bn: 'সর্বশ্রোতা' }, benefit: 'Recite for acceptance of dua' },
  { number: 27, arabic: 'الْبَصِيرُ', transliteration: 'Al-Basir', translations: { en: 'The All-Seeing', ar: 'البصير', ta: 'எல்லாம் காண்பவன்', ml: 'സർവ്വദ്രഷ്ടാവ്', ur: 'دیکھنے والا', hi: 'देखने वाला', id: 'Yang Maha Melihat', fr: 'Le Voyant', tr: 'Basir', bn: 'সর্বদ্রষ্টা' }, benefit: 'Recite for awareness' },
  { number: 28, arabic: 'الْحَكَمُ', transliteration: 'Al-Hakam', translations: { en: 'The Judge', ar: 'الحكم', ta: 'நடுவர்', ml: 'വിധികർത്താവ്', ur: 'فیصلہ کرنے والا', hi: 'फ़ैसला करने वाला', id: 'Yang Maha Memutuskan', fr: 'Le Juge', tr: 'Hakem', bn: 'বিচারক' }, benefit: 'Recite for justice' },
  { number: 29, arabic: 'الْعَدْلُ', transliteration: 'Al-Adl', translations: { en: 'The Just', ar: 'العدل', ta: 'நீதியுள்ளவன்', ml: 'നീതിമാൻ', ur: 'عادل', hi: 'आदिल', id: 'Yang Maha Adil', fr: 'Le Juste', tr: 'Adl', bn: 'ন্যায়পরায়ণ' }, benefit: 'Recite for justice' },
  { number: 30, arabic: 'اللَّطِيفُ', transliteration: 'Al-Latif', translations: { en: 'The Subtle', ar: 'اللطيف', ta: 'நுட்பமானவன்', ml: 'സൂക്ഷ്മൻ', ur: 'نوازिश کرنے والا', hi: 'लतीफ़', id: 'Yang Maha Lembut', fr: 'Le Subtil', tr: 'Latif', bn: 'সূক্ষ্ম' }, benefit: 'Recite for gentle guidance' },
  { number: 31, arabic: 'الْخَبِيرُ', transliteration: 'Al-Khabir', translations: { en: 'The All-Aware', ar: 'الخبير', ta: 'எல்லாம் அறிந்தவன்', ml: 'സർവ്വജ്ഞൻ', ur: 'باخبر', hi: 'बाख़बर', id: 'Yang Maha Mengenal', fr: 'L\'Informé', tr: 'Habir', bn: 'সবিশেষ জ্ঞাত' }, benefit: 'Recite for awareness' },
  { number: 32, arabic: 'الْحَلِيمُ', transliteration: 'Al-Halim', translations: { en: 'The Forbearing', ar: 'الحليم', ta: 'பொறுமையுள்ளவன்', ml: 'ക്ഷമാശീലൻ', ur: 'بردبار', hi: 'बर्द्बार', id: 'Yang Maha Penyantun', fr: 'Le Clément', tr: 'Halim', bn: 'সহনশীল' }, benefit: 'Recite for patience' },
  { number: 33, arabic: 'الْعَظِيمُ', transliteration: 'Al-Azim', translations: { en: 'The Magnificent', ar: 'العظيم', ta: 'மகத்தானவன்', ml: 'മഹാന', ur: 'عظیم', hi: 'अज़ीम', id: 'Yang Maha Agung', fr: 'Le Magnifique', tr: 'Azim', bn: 'মহান' }, benefit: 'Recite for greatness' },
  { number: 34, arabic: 'الْغَفُورُ', transliteration: 'Al-Ghafur', translations: { en: 'The All-Forgiving', ar: 'الغفور', ta: 'மன்னிப்பவன்', ml: 'ഏറ്റവും പൊറുക്കുന്നവൻ', ur: 'بخشنے والا', hi: 'ग़फ़ूर', id: 'Yang Maha Pengampun', fr: 'Le Pardonneur', tr: 'Gafur', bn: 'ক্ষমাশীল' }, benefit: 'Recite for forgiveness' },
  { number: 35, arabic: 'الشَّكُورُ', transliteration: 'Ash-Shakur', translations: { en: 'The Appreciative', ar: 'الشكور', ta: 'நன்றியுள்ளவன்', ml: 'നന്ദിയുള്ളവൻ', ur: 'شکر قبول کرنے والا', hi: 'शुक्र कुबूल करने वाला', id: 'Yang Maha Mensyukuri', fr: 'Le Reconnaissant', tr: 'Şekur', bn: 'কৃতজ্ঞ' }, benefit: 'Recite for gratitude' },
  { number: 36, arabic: 'الْعَلِيُّ', transliteration: 'Al-Ali', translations: { en: 'The Most High', ar: 'العلي', ta: 'மிக உயர்ந்தவன்', ml: 'ഉന്നതൻ', ur: 'بلند', hi: 'आली', id: 'Yang Maha Tinggi', fr: 'Le Très Haut', tr: 'Ali', bn: 'সুউচ্চ' }, benefit: 'Recite for elevation' },
  { number: 37, arabic: 'الْكَبِيرُ', transliteration: 'Al-Kabir', translations: { en: 'The Great', ar: 'الكبير', ta: 'பெரியவன்', ml: 'വലിയവൻ', ur: 'بڑا', hi: 'कबीर', id: 'Yang Maha Besar', fr: 'Le Grand', tr: 'Kebir', bn: 'মহান' }, benefit: 'Recite for greatness' },
  { number: 38, arabic: 'الْحَفِيظُ', transliteration: 'Al-Hafiz', translations: { en: 'The Preserver', ar: 'الحفيظ', ta: 'காப்பவன்', ml: 'സംരക്ഷകൻ', ur: 'حفاظت کرنے والا', hi: 'हिफ़ाज़त करने वाला', id: 'Yang Maha Memelihara', fr: 'Le Gardien', tr: 'Hafiz', bn: 'রক্ষক' }, benefit: 'Recite for protection' },
  { number: 39, arabic: 'الْمُقِيتُ', transliteration: 'Al-Muqit', translations: { en: 'The Nourisher', ar: 'المقيت', ta: 'போஷிப்பவன்', ml: 'പോഷകൻ', ur: 'خوراک دینے والا', hi: 'खुराक देने वाला', id: 'Yang Maha Pemberi Kecukupan', fr: 'Le Nourricier', tr: 'Mukit', bn: 'পোষণকারী' }, benefit: 'Recite for sustenance' },
  { number: 40, arabic: 'الْحَسِيبُ', transliteration: 'Al-Hasib', translations: { en: 'The Reckoner', ar: 'الحسيب', ta: 'கணக்கிடுபவன்', ml: 'കണക്കാക്കുന്നവൻ', ur: 'حساب لینے والا', hi: 'हिसाब लेने वाला', id: 'Yang Maha Menghitung', fr: 'Le Comptable', tr: 'Hasib', bn: 'হিসাবকারী' }, benefit: 'Recite for accountability' },
  { number: 41, arabic: 'الْجَلِيلُ', transliteration: 'Al-Jalil', translations: { en: 'The Majestic', ar: 'الجليل', ta: 'மகிமையுள்ளவன்', ml: 'മഹിമാന്വിതൻ', ur: 'جلال والا', hi: 'जलील', id: 'Yang Maha Mulia', fr: 'Le Majestueux', tr: 'Celil', bn: 'মহিমান্বিত' }, benefit: 'Recite for majesty' },
  { number: 42, arabic: 'الْكَرِيمُ', transliteration: 'Al-Karim', translations: { en: 'The Generous', ar: 'الكريم', ta: 'கொடையாளி', ml: 'ദയാലു', ur: 'کریم', hi: 'करीम', id: 'Yang Maha Mulia', fr: 'Le Généreux', tr: 'Kerim', bn: 'দয়ালু' }, benefit: 'Recite for generosity' },
  { number: 43, arabic: 'الرَّقِيبُ', transliteration: 'Ar-Raqib', translations: { en: 'The Watchful', ar: 'الرقيب', ta: 'கண்காணிப்பவன்', ml: 'നിരീക്ഷകൻ', ur: 'نگران', hi: 'नज़र रखने वाला', id: 'Yang Maha Mengawasi', fr: 'L\'Observateur', tr: 'Rakib', bn: 'তত্ত্বাবধায়ক' }, benefit: 'Recite for awareness' },
  { number: 44, arabic: 'الْمُجِيبُ', transliteration: 'Al-Mujib', translations: { en: 'The Responsive', ar: 'المجيب', ta: 'பதிலளிப்பவன்', ml: 'ഉത്തരം നൽകുന്നവൻ', ur: 'قبول کرنے والا', hi: 'क़ुबूल करने वाला', id: 'Yang Maha Mengabulkan', fr: 'Le Répondant', tr: 'Mucib', bn: 'সাড়া দাতা' }, benefit: 'Recite for acceptance of dua' },
  { number: 45, arabic: 'الْوَاسِعُ', transliteration: 'Al-Wasi', translations: { en: 'The All-Encompassing', ar: 'الواسع', ta: 'விரிவானவன்', ml: 'വിശാലൻ', ur: 'وسعت والا', hi: 'वासेअ', id: 'Yang Maha Luas', fr: 'L\'Immense', tr: 'Vasi', bn: 'বিশাল' }, benefit: 'Recite for expansion' },
  { number: 46, arabic: 'الْحَكِيمُ', transliteration: 'Al-Hakim', translations: { en: 'The Wise', ar: 'الحكيم', ta: 'ஞானமுள்ளவன்', ml: 'ജ്ഞാനി', ur: 'حکمت والا', hi: 'हकीम', id: 'Yang Maha Bijaksana', fr: 'Le Sage', tr: 'Hakim', bn: 'প্রজ্ঞাময়' }, benefit: 'Recite for wisdom' },
  { number: 47, arabic: 'الْوَدُودُ', transliteration: 'Al-Wadud', translations: { en: 'The Loving', ar: 'الودود', ta: 'அன்புள்ளவன்', ml: 'സ്നേഹനിധി', ur: 'محبت کرنے والا', hi: 'मोहब्बत करने वाला', id: 'Yang Maha Mencintai', fr: 'L\'Aimant', tr: 'Vedud', bn: 'প্রেমময়' }, benefit: 'Recite for love' },
  { number: 48, arabic: 'الْمَجِيدُ', transliteration: 'Al-Majid', translations: { en: 'The Glorious', ar: 'المجيد', ta: 'மகிமைமிக்கவன்', ml: 'മഹിമാന്വിതൻ', ur: 'مجید', hi: 'मजीद', id: 'Yang Maha Mulia', fr: 'Le Glorieux', tr: 'Mecid', bn: 'মহিমান্বিত' }, benefit: 'Recite for glory' },
  { number: 49, arabic: 'الْبَاعِثُ', transliteration: 'Al-Ba\'ith', translations: { en: 'The Resurrector', ar: 'الباعث', ta: 'உயிர்ப்பிப்பவன்', ml: 'ഉയിർപ്പിക്കുന്നവൻ', ur: 'اٹھانے والا', hi: 'उठाने वाला', id: 'Yang Maha Membangkitkan', fr: 'Le Résurrecteur', tr: 'Ba\'is', bn: 'উত্থাপক' }, benefit: 'Recite for resurrection' },
  { number: 50, arabic: 'الشَّهِيدُ', transliteration: 'Ash-Shahid', translations: { en: 'The Witness', ar: 'الشهيد', ta: 'சாட்சியாளர்', ml: 'സാക്ഷി', ur: 'گواہ', hi: 'गवाह', id: 'Yang Maha Menyaksikan', fr: 'Le Témoin', tr: 'Şahid', bn: 'সাক্ষী' }, benefit: 'Recite for truthfulness' },
  { number: 51, arabic: 'الْحَقُّ', transliteration: 'Al-Haqq', translations: { en: 'The Truth', ar: 'الحق', ta: 'உண்மை', ml: 'സത്യം', ur: 'سچ', hi: 'हक़', id: 'Yang Maha Benar', fr: 'La Vérité', tr: 'Hakk', bn: 'সত্য' }, benefit: 'Recite for truth' },
  { number: 52, arabic: 'الْوَكِيلُ', transliteration: 'Al-Wakil', translations: { en: 'The Trustee', ar: 'الوكيل', ta: 'பொறுப்பாளர்', ml: 'കർത്താവ്', ur: 'ذمہ دار', hi: 'वकील', id: 'Yang Maha Memelihara', fr: 'Le Gardien', tr: 'Vekil', bn: 'ভরসাস্থল' }, benefit: 'Recite for tawakkul' },
  { number: 53, arabic: 'الْقَوِيُّ', transliteration: 'Al-Qawiyy', translations: { en: 'The Strong', ar: 'القوي', ta: 'வலிமையுள்ளவன்', ml: 'ശക്തൻ', ur: 'قوی', hi: 'क़वी', id: 'Yang Maha Kuat', fr: 'Le Fort', tr: 'Kavi', bn: 'শক্তিশালী' }, benefit: 'Recite for strength' },
  { number: 54, arabic: 'الْمَتِينُ', transliteration: 'Al-Matin', translations: { en: 'The Firm', ar: 'المتين', ta: 'உறுதியுள்ளவன்', ml: 'ദൃഢൻ', ur: 'مضبوط', hi: 'मतीन', id: 'Yang Maha Kokoh', fr: 'Le Ferme', tr: 'Metin', bn: 'দৃঢ়' }, benefit: 'Recite for firmness' },
  { number: 55, arabic: 'الْوَلِيُّ', transliteration: 'Al-Waliyy', translations: { en: 'The Protecting Friend', ar: 'الولي', ta: 'பாதுகாவல நண்பன்', ml: 'സംരക്ഷകൻ', ur: 'دوست', hi: 'वली', id: 'Yang Maha Melindungi', fr: 'Le Protecteur', tr: 'Veli', bn: 'অভিভাবক' }, benefit: 'Recite for friendship' },
  { number: 56, arabic: 'الْحَمِيدُ', transliteration: 'Al-Hamid', translations: { en: 'The Praiseworthy', ar: 'الحمد', ta: 'புகழத்தக்கவன்', ml: 'സ്തുത്യർഹൻ', ur: 'تعریف کے لائق', hi: 'हमीद', id: 'Yang Maha Terpuji', fr: 'Le Louable', tr: 'Hamid', bn: 'প্রশংসনীয়' }, benefit: 'Recite for praise' },
  { number: 57, arabic: 'الْمُحْصِي', transliteration: 'Al-Muhsi', translations: { en: 'The Accounter', ar: 'المحصي', ta: 'எண்ணுபவன்', ml: 'എണ്ണുന്നവൻ', ur: 'شمارنے والا', hi: 'शुमार करने वाला', id: 'Yang Maha Menghitung', fr: 'Le Compteur', tr: 'Muhsi', bn: 'গণনাকারী' } },
  { number: 58, arabic: 'الْمُبْدِئُ', transliteration: 'Al-Mubdi', translations: { en: 'The Originator', ar: 'المبدئ', ta: 'தொடங்குபவன்', ml: 'ആരംഭിക്കുന്നവൻ', ur: 'ابتدا کرنے والا', hi: 'इबतिदा करने वाला', id: 'Yang Maha Memulai', fr: 'L\'Initiateur', tr: 'Mubdi', bn: 'আরম্ভকারী' } },
  { number: 59, arabic: 'الْمُعِيدُ', transliteration: 'Al-Mu\'id', translations: { en: 'The Restorer', ar: 'المعيد', ta: 'மீண்டும் உருவாக்குபவன்', ml: 'തിരികെ കൊണ്ടുവരുന്നവൻ', ur: 'واپس لانے والا', hi: 'वापस लाने वाला', id: 'Yang Maha Mengembalikan', fr: 'Le Restaurateur', tr: 'Muid', bn: 'পুনরুদ্ধারকারী' } },
  { number: 60, arabic: 'الْمُحْيِي', transliteration: 'Al-Muhyi', translations: { en: 'The Giver of Life', ar: 'المحيي', ta: 'உயிர்ப்பிப்பவன்', ml: 'ജീവൻ നൽകുന്നവൻ', ur: 'زندہ کرنے والا', hi: 'ज़िंदा करने वाला', id: 'Yang Maha Menghidupkan', fr: 'Le Vivificateur', tr: 'Muhyi', bn: 'জীবনদাতা' } },
  { number: 61, arabic: 'اَلْمُمِيتُ', transliteration: 'Al-Mumit', translations: { en: 'The Bringer of Death', ar: 'المميت', ta: 'மரணமளிக்கிறவன்', ml: 'മരണം നൽകുന്നവൻ', ur: 'مارنے والا', hi: 'मारने वाला', id: 'Yang Mematikan', fr: 'Le Giveur de Mort', tr: 'Mumit', bn: 'মৃত্যুদাতা' } },
  { number: 62, arabic: 'الْحَيُّ', transliteration: 'Al-Hayy', translations: { en: 'The Ever Living', ar: 'الحي', ta: 'நிரந்தர வாழ்வான்', ml: 'നിത്യജീവൻ', ur: 'زندہ', hi: 'हय्य', id: 'Yang Maha Hidup', fr: 'Le Vivant', tr: 'Hayy', bn: 'চিরঞ্জীব' } },
  { number: 63, arabic: 'الْقَيُّومُ', transliteration: 'Al-Qayyum', translations: { en: 'The Self-Existing', ar: 'القيوم', ta: 'தானே நிலைத்திருப்பவன்', ml: 'സ്വയം നിലനിൽക്കുന്നവൻ', ur: 'قائم رہنے والا', hi: 'क़य्यूम', id: 'Yang Mandiri', fr: 'L\'Auto-Subsistant', tr: 'Kayyum', bn: 'আত্মপ্রতিষ্ঠিত' } },
  { number: 64, arabic: 'الْوَاجِدُ', transliteration: 'Al-Wajid', translations: { en: 'The Finder', ar: 'الواجد', ta: 'கண்டுபிடிப்பவன்', ml: 'കണ്ടെത്തുന്നവൻ', ur: 'پانے والا', hi: 'पाने वाला', id: 'Yang Maha Penemu', fr: 'Le Trouveur', tr: 'Vacid', bn: 'প্রাপক' } },
  { number: 65, arabic: 'الْمَاجِدُ', transliteration: 'Al-Majid', translations: { en: 'The Noble', ar: 'الماجد', ta: 'கௌரவமுள்ளவன்', ml: 'മഹാന', ur: 'باوقار', hi: 'माजिद', id: 'Yang Maha Mulia', fr: 'Le Noble', tr: 'Macid', bn: 'মর্যাদাবান' } },
  { number: 66, arabic: 'الْوَاحِدُ', transliteration: 'Al-Wahid', translations: { en: 'The One', ar: 'الواحد', ta: 'ஒன்றே', ml: 'ഏകൻ', ur: 'ایک', hi: 'वाहिद', id: 'Yang Maha Esa', fr: 'L\'Unique', tr: 'Vahid', bn: 'এক' } },
  { number: 67, arabic: 'اَلاَحَدُ', transliteration: 'Al-Ahad', translations: { en: 'The Indivisible', ar: 'الأحد', ta: 'ஒப்பற்றவன்', ml: 'അദ്വിതീയൻ', ur: 'اکیلا', hi: 'अहद', id: 'Yang Maha Tunggal', fr: 'L\'Indivisible', tr: 'Ehad', bn: 'অদ্বিতীয়' } },
  { number: 68, arabic: 'الصَّمَدُ', transliteration: 'As-Samad', translations: { en: 'The Eternal', ar: 'الصمد', ta: 'நிரந்தரமானவன்', ml: 'നിത്യൻ', ur: 'ہمیشہ رہنے والا', hi: 'समद', id: 'Yang Maha Dibutuhkan', fr: 'L\'Éternel', tr: 'Samed', bn: 'চিরস্থায়ী' } },
  { number: 69, arabic: 'الْقَادِرُ', transliteration: 'Al-Qadir', translations: { en: 'The Able', ar: 'القادر', ta: 'சக்தியுள்ளவன்', ml: 'ശക്തൻ', ur: 'قادر', hi: 'क़adir', id: 'Yang Maha Kuasa', fr: 'Le Capable', tr: 'Kadir', bn: 'সক্ষম' } },
  { number: 70, arabic: 'الْمُقْتَدِرُ', transliteration: 'Al-Muqtadir', translations: { en: 'The Powerful', ar: 'المقتدر', ta: 'ஆற்றலுள்ளவன்', ml: 'ശക്തിമാൻ', ur: 'مقتدر', hi: 'मुक़्तदिर', id: 'Yang Maha Berkuasa', fr: 'Le Puissant', tr: 'Muktedir', bn: 'ক্ষমতাবান' } },
  { number: 71, arabic: 'الْمُقَدِّمُ', transliteration: 'Al-Muqaddim', translations: { en: 'The Expediter', ar: 'المقدم', ta: 'முன்னிலைப்படுத்துபவன்', ml: 'മുന്നോട്ട് വയ്ക്കുന്നവൻ', ur: 'آگے کرنے والا', hi: 'आगे करने वाला', id: 'Yang Maha Mendahulukan', fr: 'L\'Avanceur', tr: 'Mukaddim', bn: 'অগ্রবর্তীকারী' } },
  { number: 72, arabic: 'الْمُؤَخِّرُ', transliteration: 'Al-Mu\'akhkhir', translations: { en: 'The Delayer', ar: 'المؤخر', ta: 'பின்னிலைப்படுத்துபவன்', ml: 'പിന്നോട്ട് വയ്ക്കുന്നവൻ', ur: 'پیچھے کرنے والا', hi: 'पीछे करने वाला', id: 'Yang Maha Mengakhirkan', fr: 'L\'Ajournant', tr: 'Muahhir', bn: 'পশ্চাৎকারী' } },
  { number: 73, arabic: 'الْأَوَّلُ', transliteration: 'Al-Awwal', translations: { en: 'The First', ar: 'الأول', ta: 'முதலாவன', ml: 'ആദ്യം', ur: 'پہلا', hi: 'अव्वल', id: 'Yang Maha Awal', fr: 'Le Premier', tr: 'Evvel', bn: 'প্রথম' } },
  { number: 74, arabic: 'الْآخِرُ', transliteration: 'Al-Akhir', translations: { en: 'The Last', ar: 'الآخر', ta: 'கடைசியானவன்', ml: 'അവസാനം', ur: 'آخری', hi: 'आख़िर', id: 'Yang Maha Akhir', fr: 'Le Dernier', tr: 'Ahir', bn: 'শেষ' } },
  { number: 75, arabic: 'الظَّاهِرُ', transliteration: 'Az-Zahir', translations: { en: 'The Manifest', ar: 'الظاهر', ta: 'வெளிப்படையானவன்', ml: 'പ്രകടൻ', ur: 'ظاہر', hi: 'ज़ाहिर', id: 'Yang Maha Nyata', fr: 'Le Manifeste', tr: 'Zahir', bn: 'প্রকাশ্য' } },
  { number: 76, arabic: 'الْبَاطِنُ', transliteration: 'Al-Batin', translations: { en: 'The Hidden', ar: 'الباطن', ta: 'மறைந்தவன்', ml: 'ഗൂഢൻ', ur: 'باطن', hi: 'बातिन', id: 'Yang Maha Tersembunyi', fr: 'Le Caché', tr: 'Batın', bn: 'গোপন' } },
  { number: 77, arabic: 'الْوَالِي', transliteration: 'Al-Wali', translations: { en: 'The Governor', ar: 'الوالي', ta: 'ஆளுபவன்', ml: 'ഭരണാധികാരി', ur: 'حاکم', hi: 'वाली', id: 'Yang Maha Memerintah', fr: 'Le Gouverneur', tr: 'Vali', bn: 'শাসক' } },
  { number: 78, arabic: 'الْمُتَعَالِي', transliteration: 'Al-Muta\'ali', translations: { en: 'The Most Exalted', ar: 'المتعالي', ta: 'மிக உயர்ந்தவன்', ml: 'അത്യുന്നതൻ', ur: 'بہت بلند', hi: 'बुलंद', id: 'Yang Maha Tinggi', fr: 'Le Très Exalté', tr: 'Müteali', bn: 'সুউচ্চ' } },
  { number: 79, arabic: 'الْبَرُّ', transliteration: 'Al-Barr', translations: { en: 'The Source of Goodness', ar: 'البر', ta: 'நன்மையின் மூலம்', ml: 'നന്മയുടെ ഉറവിടം', ur: 'نیکی کا ماخذ', hi: 'बर्र', id: 'Yang Maha Penderma', fr: 'La Source de Bonté', tr: 'Berr', bn: 'সৎকর্মশীল' } },
  { number: 80, arabic: 'التَّوَّابُ', transliteration: 'At-Tawwab', translations: { en: 'The Acceptor of Repentance', ar: 'التواب', ta: 'தௌபாவை ஏற்பவன்', ml: 'പശ്ചാത്താപം സ്വീകരിക്കുന്നവൻ', ur: 'توبہ قبول کرنے والا', hi: 'तौबा कुबूल करने वाला', id: 'Yang Maha Penerima Taubat', fr: 'L\'Accepteur du Repentir', tr: 'Tevvab', bn: 'তওবা কবूलকারী' } },
  { number: 81, arabic: 'الْمُنْتَقِمُ', transliteration: 'Al-Muntaqim', translations: { en: 'The Avenger', ar: 'المنتقم', ta: 'பழிவாங்குபவன்', ml: 'പ്രതികാരം ചെയ്യുന്നവൻ', ur: 'بدلہ لینے والا', hi: 'बदला लेने वाला', id: 'Yang Maha Penuntut', fr: 'Le Vengeur', tr: 'Müntakim', bn: 'প্রতিশোধকারী' } },
  { number: 82, arabic: 'العَفُوُّ', transliteration: 'Al-Afuww', translations: { en: 'The Pardoner', ar: 'العفو', ta: 'மன்னிப்பவன்', ml: 'മാപ്പുനൽകുന്നവൻ', ur: 'معاف کرنے والا', hi: 'माफ़ करने वाला', id: 'Yang Maha Pemaaf', fr: 'Le Pardonneur', tr: 'Afuww', bn: 'মার্জনাকারী' } },
  { number: 83, arabic: 'الرَّؤُوفُ', transliteration: 'Ar-Ra\'uf', translations: { en: 'The Compassionate', ar: 'الرؤوف', ta: 'இரக்கமுள்ளவன்', ml: 'കാരുണികൻ', ur: 'شفیق', hi: 'रऊफ़', id: 'Yang Maha Pengasih', fr: 'Le Compatissant', tr: 'Rauf', bn: 'কোমল হৃদয়' } },
  { number: 84, arabic: 'مَالِكُ الْمُلْكِ', transliteration: 'Malikul-Mulk', translations: { en: 'Owner of Sovereignty', ar: 'مالك الملك', ta: 'ஆட்சியின் உரிமையாளன்', ml: 'രാജ്യത്തിന്റെ ഉടമ', ur: 'بادشاہت کا مالک', hi: 'बादशाहत का मालिक', id: 'Pemilik Kerajaan', fr: 'Possesseur de la Royauté', tr: 'Mülkün Sahibi', bn: 'রাজত্বের মালিক' } },
  { number: 85, arabic: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', transliteration: 'Dhul-Jalali wal-Ikram', translations: { en: 'Lord of Majesty and Bounty', ar: 'ذو الجلال والإكرام', ta: 'மகிமை மற்றும் கௌரவத்தின் உரிமையாளன்', ml: 'മഹത്വത്തിന്റെയും ബഹുമാനത്തിന്റെയും ഉടമ', ur: 'جلال اور اکرام والا', hi: 'जलाल और इकराम वाला', id: 'Pemilik Keagungan dan Kemuliaan', fr: 'Possesseur de Majesté et de Générosité', tr: 'Celal ve İkram Sahibi', bn: 'মহিমা ও সম্মানের অধিকারী' } },
  { number: 86, arabic: 'الْمُقْسِطُ', transliteration: 'Al-Muqsit', translations: { en: 'The Just', ar: 'المقسط', ta: 'நீதியுள்ளவன்', ml: 'നീതിമാൻ', ur: 'انصاف کرنے والا', hi: 'इंसाफ़ करने वाला', id: 'Yang Maha Adil', fr: 'Le Juste', tr: 'Müksit', bn: 'ন্যায়বিচারক' } },
  { number: 87, arabic: 'الْجَامِعُ', transliteration: 'Al-Jami', translations: { en: 'The Gatherer', ar: 'الجامع', ta: 'ஒன்று சேர்ப்பவன்', ml: 'ഒന്നിപ്പിക്കുന്നവൻ', ur: 'جمع کرنے والا', hi: 'जमा करने वाला', id: 'Yang Maha Mengumpulkan', fr: 'Le Rassembleur', tr: 'Cami', bn: 'একত্রকারী' } },
  { number: 88, arabic: 'الْغَنِيُّ', transliteration: 'Al-Ghaniyy', translations: { en: 'The Self-Sufficient', ar: 'الغني', ta: 'தேவையற்றவன்', ml: 'ആവശ്യമില്ലാത്തവൻ', ur: 'بے نیاز', hi: 'ग़नी', id: 'Yang Maha Kaya', fr: 'Le Riche', tr: 'Gani', bn: 'অমুখাপেক্ষী' } },
  { number: 89, arabic: 'الْمُغْنِي', transliteration: 'Al-Mughni', translations: { en: 'The Enricher', ar: 'المغني', ta: 'செல்வமாக்குபவன்', ml: 'സമ്പന്നനാക്കുന്നവൻ', ur: 'غنی کرنے والا', hi: 'गनी करने वाला', id: 'Yang Maha Mencukupkan', fr: 'L\'Enrichisseur', tr: 'Muğni', bn: 'সমৃদ্ধকারী' } },
  { number: 90, arabic: 'الْمَانِعُ', transliteration: 'Al-Mani\'', translations: { en: 'The Preventer', ar: 'المانع', ta: 'தடுப்பவன்', ml: 'തടയുന്നവൻ', ur: 'روکنے والا', hi: 'रोकने वाला', id: 'Yang Maha Mencegah', fr: 'Le Préventeur', tr: 'Mani', bn: 'প্রতিরোধকারী' } },
  { number: 91, arabic: 'الضَّارَّ', transliteration: 'Ad-Darr', translations: { en: 'The Distresser', ar: 'الضار', ta: 'தீங்கு செய்பவன்', ml: 'ദ്രോഹിക്കുന്നവൻ', ur: 'ضرر پہنچانے والا', hi: 'नुक़सान पहुंचाने वाला', id: 'Yang Maha Memberi Mudarat', fr: 'Le Nuisible', tr: 'Darr', bn: 'ক্ষতিকারক' } },
  { number: 92, arabic: 'النَّافِعُ', transliteration: 'An-Nafi', translations: { en: 'The Benefiter', ar: 'النافع', ta: 'நன்மை செய்பவன்', ml: 'ഗുണം ചെയ്യുന്നവൻ', ur: 'فائدہ پہنچانے والا', hi: 'फ़ायदा पहुंचाने वाला', id: 'Yang Maha Memberi Manfaat', fr: 'Le Bénéfique', tr: 'Nafi', bn: 'উপকারকারী' } },
  { number: 93, arabic: 'النُّورُ', transliteration: 'An-Nur', translations: { en: 'The Light', ar: 'النور', ta: 'ஒளி', ml: 'പ്രകാശം', ur: 'نور', hi: 'नूर', id: 'Yang Maha Cahaya', fr: 'La Lumière', tr: 'Nur', bn: 'আলো' } },
  { number: 94, arabic: 'الْهَادِي', transliteration: 'Al-Hadi', translations: { en: 'The Guide', ar: 'الهادي', ta: 'நெறிப்படுத்துபவன்', ml: 'മാർഗ്ഗദർശകൻ', ur: 'ہدایت دینے والا', hi: 'हिदायत देने वाला', id: 'Yang Maha Memberi Petunjuk', fr: 'Le Guide', tr: 'Hadi', bn: 'পথপ্রদর্শক' } },
  { number: 95, arabic: 'الْبَدِيعُ', transliteration: 'Al-Badi', translations: { en: 'The Originator', ar: 'البديع', ta: 'புதியவனாகப் படைப்பவன்', ml: 'അത്ഭുതകരമായ സ്രഷ്ടാവ്', ur: 'بے مثال بنانے والا', hi: 'बदी', id: 'Yang Maha Pencipta Keindahan', fr: 'L\'Innovateur', tr: 'Bedi', bn: 'অভিনব স্রষ্টা' } },
  { number: 96, arabic: 'الْبَاقِي', transliteration: 'Al-Baqi', translations: { en: 'The Everlasting', ar: 'الباقي', ta: 'நிலைத்திருப்பவன்', ml: 'നിലനിൽക്കുന്നവൻ', ur: 'باقی رہنے والا', hi: 'बाक़ी', id: 'Yang Maha Kekal', fr: 'L\'Éternel', tr: 'Baki', bn: 'চিরস্থায়ী' } },
  { number: 97, arabic: 'الْوَارِثُ', transliteration: 'Al-Warith', translations: { en: 'The Inheritor', ar: 'الوارث', ta: 'உரிமை கொள்பவன்', ml: 'അവകാശി', ur: 'وارث', hi: 'वारिस', id: 'Yang Maha Pewaris', fr: 'L\'Héritier', tr: 'Varis', bn: 'উত্তরাধিকারী' } },
  { number: 98, arabic: 'الرَّشِيدُ', transliteration: 'Ar-Rashid', translations: { en: 'The Guide to the Right Path', ar: 'الرشيد', ta: 'நேர்வழி காட்டுபவன்', ml: 'നേർവഴി കാണിക്കുന്നവൻ', ur: 'راہ دکھانے والا', hi: 'राशिद', id: 'Yang Maha Cerdas', fr: 'Le Guide', tr: 'Reşid', bn: 'সঠিক পথপ্রদর্শক' } },
  { number: 99, arabic: 'الصَّبُورُ', transliteration: 'As-Sabur', translations: { en: 'The Patient', ar: 'الصبور', ta: 'பொறுமையுள்ளவன்', ml: 'ക്ഷമാശീലൻ', ur: 'صبر کرنے والا', hi: 'सबूर', id: 'Yang Maha Sabar', fr: 'Le Patient', tr: 'Sabur', bn: 'ধৈর্যশীল' } },
];

export const asmaAnbiya: Prophet[] = [
  { number: 1, arabic: 'آدَمُ', name: { en: 'Adam', ar: 'آدم', ta: 'ஆதம்', ml: 'ആദം', ur: 'آدم', hi: 'आदम', id: 'Adam', fr: 'Adam', tr: 'Âdem', bn: 'আদম' }, era: 'First human', quranicMentions: 25, famousDua: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا (Our Lord, we have wronged ourselves)' },
  { number: 2, arabic: 'إِدْرِيسُ', name: { en: 'Idris', ar: 'إدريس', ta: 'இத்ரீஸ்', ml: 'ഇദ്രീസ്', ur: 'ادریس', hi: 'इदरीस', id: 'Idris', fr: 'Idris', tr: 'İdris', bn: 'ইদ্রিস' }, era: 'Early prophet', quranicMentions: 2, famousDua: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ (There is no god but You, glory to You)' },
  { number: 3, arabic: 'نُوحٌ', name: { en: 'Nuh (Noah)', ar: 'نوح', ta: 'நூஹ்', ml: 'നൂഹ്', ur: 'نوح', hi: 'नूह', id: 'Nuh', fr: 'Noé', tr: 'Nuh', bn: 'নূহ' }, era: 'Before the flood', quranicMentions: 43, famousDua: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ (My Lord, forgive me and my parents)' },
  { number: 4, arabic: 'هُودٌ', name: { en: 'Hud', ar: 'هود', ta: 'ஹூத்', ml: 'ഹൂദ്', ur: 'ہود', hi: 'हूद', id: 'Hud', fr: 'Hud', tr: 'Hud', bn: 'হুদ' }, era: 'People of Ad', quranicMentions: 25, famousDua: 'إِنْ أَعُوذُ بِاللَّهِ (I seek refuge in Allah)' },
  { number: 5, arabic: 'صَالِحٌ', name: { en: 'Salih', ar: 'صالح', ta: 'ஸாலிஹ்', ml: 'സ്വാലിഹ്', ur: 'صالح', hi: 'सालेह', id: 'Salih', fr: 'Salih', tr: 'Salih', bn: 'সালিহ' }, era: 'People of Thamud', quranicMentions: 9, famousDua: 'دعاء لقوم ثمود (Supplication for the people of Thamud)' },
  { number: 6, arabic: 'إِبْرَاهِيمُ', name: { en: 'Ibrahim (Abraham)', ar: 'إبراهيم', ta: 'இப்ராஹீம்', ml: 'ഇബ്രാഹിം', ur: 'ابراہیم', hi: 'इब्राहीम', id: 'Ibrahim', fr: 'Abraham', tr: 'İbrahim', bn: 'ইব্রাহিম' }, era: 'Friend of Allah', quranicMentions: 69, famousDua: 'رَبِّ اجْعَلْ هَذَا الْبَلَدَ آمِنًا (My Lord, make this city safe)' },
  { number: 7, arabic: 'لُوطٌ', name: { en: 'Lut (Lot)', ar: 'لوط', ta: 'லூத்', ml: 'ലൂത്വ്', ur: 'لوط', hi: 'लूत', id: 'Luth', fr: 'Lot', tr: 'Lut', bn: 'লূত' }, era: 'Contemporary of Ibrahim', quranicMentions: 27, famousDua: 'رَبِّ نَجِّنِي وَأَهْلِي (My Lord, save me and my family)' },
  { number: 8, arabic: 'إِسْمَاعِيلُ', name: { en: 'Ismail (Ishmael)', ar: 'إسماعيل', ta: 'இஸ்மாயீல்', ml: 'ഇസ്മാഈൽ', ur: 'اسماعیل', hi: 'इस्माईल', id: 'Ismail', fr: 'Ismaël', tr: 'İsmail', bn: 'ইসমাঈল' }, era: 'Son of Ibrahim', quranicMentions: 12, famousDua: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ (My Lord, make me establisher of prayer)' },
  { number: 9, arabic: 'إِسْحَاقُ', name: { en: 'Ishaq (Isaac)', ar: 'إسحاق', ta: 'இஸ்ஹாக்', ml: 'ഇസ്ഹാഖ്', ur: 'اسحاق', hi: 'इस्हाक़', id: 'Ishaq', fr: 'Isaac', tr: 'İshak', bn: 'ইসহাক' }, era: 'Son of Ibrahim', quranicMentions: 17, famousDua: 'بُشِّرْنَا (We were given good news)' },
  { number: 10, arabic: 'يَعْقُوبُ', name: { en: 'Yaqub (Jacob)', ar: 'يعقوب', ta: 'யஃகூப்', ml: 'യഅ്ഖൂബ്', ur: 'یعقوب', hi: 'याक़ूब', id: 'Yaqub', fr: 'Jacob', tr: 'Yakub', bn: 'ইয়াকুব' }, era: 'Son of Ishaq', quranicMentions: 16, famousDua: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ (I complain of my suffering to Allah)' },
  { number: 11, arabic: 'يُوسُفُ', name: { en: 'Yusuf (Joseph)', ar: 'يوسف', ta: 'யூசுஃப்', ml: 'യൂസുഫ്', ur: 'یوسف', hi: 'यूसुफ़', id: 'Yusuf', fr: 'Joseph', tr: 'Yusuf', bn: 'ইউসুফ' }, era: 'Egypt', quranicMentions: 27, famousDua: 'رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ (My Lord, You have given me sovereignty)' },
  { number: 12, arabic: 'أَيُّوبُ', name: { en: 'Ayyub (Job)', ar: 'أيوب', ta: 'அய்யூப்', ml: 'അയ്യൂബ്', ur: 'ایوب', hi: 'अय्यूब', id: 'Ayyub', fr: 'Job', tr: 'Eyyub', bn: 'আইয়ুব' }, era: 'Time of patience', quranicMentions: 4, famousDua: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ (Adversity has touched me, You are Most Merciful)' },
  { number: 13, arabic: 'ذُو الْكِفْلِ', name: { en: 'Dhul-Kifl', ar: 'ذو الكفل', ta: 'துல்கிஃல்', ml: 'ദുല്കിഫ്ല്', ur: 'ذوالکفل', hi: 'ज़ुलकिफ़्ल', id: 'Zulkifli', fr: 'Dhu al-Kifl', tr: 'Zülkifil', bn: 'জুল কিফল' }, era: 'Prophet of patience', quranicMentions: 2, famousDua: 'Prayer for patience and steadfastness' },
  { number: 14, arabic: 'شُعَيْبٌ', name: { en: 'Shuayb (Jethro)', ar: 'شعيب', ta: 'ஷுஐப்', ml: 'ശുഐബ്', ur: 'شعیب', hi: 'शुऐब', id: 'Syuaib', fr: 'Shuayb', tr: 'Şuayb', bn: 'শুয়াইব' }, era: 'People of Madyan', quranicMentions: 11, famousDua: 'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا (Our Lord, judge between us and our people)' },
  { number: 15, arabic: 'مُوسَى', name: { en: 'Musa (Moses)', ar: 'موسى', ta: 'மூஸா', ml: 'മൂസാ', ur: 'موسیٰ', hi: 'मूसा', id: 'Musa', fr: 'Moïse', tr: 'Musa', bn: 'মূসা' }, era: 'Exodus from Egypt', quranicMentions: 136, famousDua: 'رَبِّ اشْرَحْ لِي صَدْرِي (My Lord, expand my chest)' },
  { number: 16, arabic: 'هَارُونُ', name: { en: 'Harun (Aaron)', ar: 'هارون', ta: 'ஹாரூன்', ml: 'ഹാറൂൻ', ur: 'ہارون', hi: 'हारून', id: 'Harun', fr: 'Aaron', tr: 'Harun', bn: 'হারুন' }, era: 'Brother of Musa', quranicMentions: 24, famousDua: 'رَبِّ اجْعَلْنِي وَزِيرًا (My Lord, make me a vizier)' },
  { number: 17, arabic: 'دَاوُودُ', name: { en: 'Dawud (David)', ar: 'داود', ta: 'தாவூத்', ml: 'ദാവൂദ്', ur: 'داود', hi: 'दाऊद', id: 'Daud', fr: 'David', tr: 'Davud', bn: 'দাউদ' }, era: 'King and Prophet', quranicMentions: 16, famousDua: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ (My Lord, enable me to be grateful)' },
  { number: 18, arabic: 'سُلَيْمَانُ', name: { en: 'Sulayman (Solomon)', ar: 'سليمان', ta: 'ஸுலைமான்', ml: 'സുലൈമാൻ', ur: 'سلیمان', hi: 'सुलेमान', id: 'Sulaiman', fr: 'Salomon', tr: 'Süleyman', bn: 'সুলাইমান' }, era: 'King with power over jinn', quranicMentions: 17, famousDua: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ (My Lord, enable me to be grateful)' },
  { number: 19, arabic: 'إِلْيَاسُ', name: { en: 'Ilyas (Elijah)', ar: 'إلياس', ta: 'இல்யாஸ்', ml: 'ഇല്യാസ്', ur: 'الیاس', hi: 'इलयास', id: 'Ilyas', fr: 'Élie', tr: 'İlyas', bn: 'ইলিয়াস' }, era: 'Prophet to Baal worshippers', quranicMentions: 4, famousDua: 'دعاء ضد عبدة البعل (Prayer against Baal worshippers)' },
  { number: 20, arabic: 'الْيَسَعُ', name: { en: 'Al-Yasa (Elisha)', ar: 'اليسع', ta: 'அல்யஸஅ', ml: 'അൽയസഅ', ur: 'الیسع', hi: 'अलयासा', id: 'Ilyasa', fr: 'Élisée', tr: 'Elyesa', bn: 'আল-ইয়াসা' }, era: 'Successor of Ilyas', quranicMentions: 2, famousDua: 'Prayer for guidance' },
  { number: 21, arabic: 'يُونُسُ', name: { en: 'Yunus (Jonah)', ar: 'يونس', ta: 'யூனுஸ்', ml: 'യൂനുസ്', ur: 'یونس', hi: 'यूनूस', id: 'Yunus', fr: 'Jonas', tr: 'Yunus', bn: 'ইউনুস' }, era: 'The whale', quranicMentions: 6, famousDua: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ (There is no god but You, glory to You, I was among the wrongdoers)' },
  { number: 22, arabic: 'زَكَرِيَّا', name: { en: 'Zakariya (Zechariah)', ar: 'زكريا', ta: 'ஸகரிய்யா', ml: 'സകരിയ്യ', ur: 'زکریا', hi: 'ज़कारिया', id: 'Zakariya', fr: 'Zacharie', tr: 'Zekeriya', bn: 'যাকারিয়া' }, era: 'Father of Yahya', quranicMentions: 7, famousDua: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ (My Lord, do not leave me alone)' },
  { number: 23, arabic: 'يَحْيَى', name: { en: 'Yahya (John)', ar: 'يحيى', ta: 'யஹ்யா', ml: 'യഹ്‌യ', ur: 'یحییٰ', hi: 'यह्या', id: 'Yahya', fr: 'Jean', tr: 'Yahya', bn: 'ইয়াহইয়া' }, era: 'Contemporary of Isa', quranicMentions: 5, famousDua: 'Prayer for wisdom in youth' },
  { number: 24, arabic: 'عِيسَى', name: { en: 'Isa (Jesus)', ar: 'عيسى', ta: 'ஈஸா', ml: 'ഈസാ', ur: 'عیسیٰ', hi: 'ईसा', id: 'Isa', fr: 'Jésus', tr: 'İsa', bn: 'ঈসা' }, era: 'Before Muhammad ﷺ', quranicMentions: 25, famousDua: 'اللَّهُمَّ رَبَّنَا أَنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ (O Allah, send down a table from heaven)' },
  { number: 25, arabic: 'مُحَمَّدٌ ﷺ', name: { en: 'Muhammad ﷺ', ar: 'محمد', ta: 'முஹம்மது ﷺ', ml: 'മുഹമ്മദ് ﷺ', ur: 'محمد ﷺ', hi: 'मुहम्मद ﷺ', id: 'Muhammad ﷺ', fr: 'Muhammad ﷺ', tr: 'Muhammed ﷺ', bn: 'মুহাম্মাদ ﷺ' }, era: 'Seal of Prophets', quranicMentions: 4, famousDua: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ (My Lord, forgive me, my parents, and the believers)' },
];

export const salawat = [
  {
    id: 'sw-1',
    name: { en: 'Salawat Ibrahimiyyah', ar: 'الصلاة الإبراهيمية' },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala ali Muhammad, kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim, innaka hamidun majid',
    translations: {
      en: 'O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. You are indeed Praiseworthy, Glorious.',
      ar: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد',
      ta: 'இறைவா! முஹம்மது மீதும் முஹம்மது குடும்பத்தார் மீதும் நீர் ரஹ்மத் அனுப்புவாயாக!',
      ml: 'അല്ലാഹുവേ, മുഹമ്മദിന്റെയും മുഹമ്മദിന്റെ കുടുംബത്തിന്റെയും മേൽ നീ നിന്റെ റഹ്മത്ത് ഇറക്കണമേ.',
      ur: 'اے اللہ! محمد ﷺ پر اور آل محمد پر رحمت نازل فرما۔',
      hi: 'ऐ अल्लाह! मुहम्मद ﷺ पर और आले मुहम्मद पर रहमत नाज़िल फरमा।',
      id: 'Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad.',
      fr: 'Ô Allah, envoie Tes prières sur Muhammad et sur la famille de Muhammad.',
      tr: 'Allah\'ım! Muhammed\'e ve Muhammed\'in ailesine salat et.',
      bn: 'হে আল্লাহ! মুহাম্মদ ﷺ এবং তাঁর পরিবারের প্রতি রহমত নাযিল করো।'
    },
    reference: 'Bukhari 3/10',
    repeat: 1
  },
  {
    id: 'sw-2',
    name: { en: 'Salawat al-Tunjina/Munjiyah', ar: 'صلاة التنجية' },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ',
    transliteration: 'Allahumma salli \'ala sayyidina Muhammad, salatan tunjina biha min jami\'il-ahwal wal-afat',
    translations: {
      en: 'O Allah, send prayers upon our Master Muhammad, a prayer that saves us from all fears and calamities.',
      ar: 'اللهم صل على سيدنا محمد صلاة تنجينا بها من جميع الأهوال والآفات',
      ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது மீது ரஹ்மத் அனுப்புவாயாக!',
      ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ റഹ്മത്ത് ഇറക്കണമേ.',
      ur: 'اے اللہ! ہمارے سردار محمد ﷺ پر رحمت نازل فرما۔',
      hi: 'ऐ अल्लाह! हमारे सरदार मुहम्मद ﷺ पर रहमत नाज़िल फरमा।',
      id: 'Ya Allah, limpahkanlah shalawat kepada Tuan kami Muhammad.',
      fr: 'Ô Allah, envoie Tes prières sur notre Maître Muhammad.',
      tr: 'Allah\'ım! Efendimiz Muhammed\'e salat et.',
      bn: 'হে আল্লাহ! আমাদের নেতা মুহাম্মদ ﷺ এর প্রতি রহমত নাযিল করো।'
    },
    reference: 'Traditional',
    repeat: 1
  },
  {
    id: 'sw-3',
    name: { en: 'Salawat al-Fatih', ar: 'صلاة الفاتح' },
    arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ',
    transliteration: 'Allahumma salli \'ala sayyidina Muhammadinil-fatihi lima ughliq, wal-khatimi ma sabaq',
    translations: {
      en: 'O Allah, send prayers upon our Master Muhammad, the opener of what was closed and the sealer of what has passed.',
      ar: 'اللهم صل على سيدنا محمد الفاتح لما أغلق والخاتم لما سبق',
      ta: 'இறைவா! மூடியவற்றைத் திறப்பவரும் முந்தையவற்றை முடிப்பவருமான நம் தலைவர் முஹம்மது மீது ரஹ்மத் அனுப்புவாயாக!',
      ml: 'അല്ലാഹുവേ, അടഞ്ഞവ തുറക്കുന്നവനും മുൻകാലങ്ങൾക്ക് മുദ്ര വയ്ക്കുന്നവനുമായ നമ്മുടെ നേതാവ് മുഹമ്മദിന്റെ മേൽ റഹ്മത്ത്.',
      ur: 'اے اللہ! ہمارے سردار محمد ﷺ پر رحمت نازل فرما جو بند چیزوں کو کھولنے والے ہیں۔',
      hi: 'ऐ अल्लाह! हमारे सरदार मुहम्मद ﷺ पर रहमत नाज़िल फरमा जो बंद चीज़ों को खोलने वाले हैं।',
      id: 'Ya Allah, limpahkanlah shalawat kepada Muhammad, pembuka yang tertutup.',
      fr: 'Ô Allah, envoie Tes prières sur Muhammad, l\'ouvreur de ce qui est fermé.',
      tr: 'Allah\'ım! Kapalı olanı açan Efendimiz Muhammed\'e salat et.',
      bn: 'হে আল্লাহ! বন্ধ জিনিস খোলার নেতা মুহাম্মদ ﷺ এর প্রতি রহমত নাযিল করো।'
    },
    reference: 'Traditional',
    repeat: 1
  }
];

export const burdah = [
  {
    id: 'bur-1',
    arabic: 'أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ *** مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ',
    transliteration: 'Amin tazakkuri jiranin bi dzi salam *** Mazajta dam\'an jara min muqlatin bi dam',
    translations: {
      en: 'Is it because of recalling neighbors at Dhi Salam that you have mixed tears with blood flowing from your eyes?',
      ar: 'أمن تذكر جيران بذي سلم مزجت دمعا جرى من مقلة بدم',
      ta: 'தி சலாமில் உள்ள அண்டையவர்களை நினைத்ததால் உங்கள் கண்களில் இருந்து ரத்தம் கலந்த கண்ணீர் வருகிறதா?',
      ml: 'ധി സലമിലെ അയൽക്കാരെ ഓർത്താണോ നിങ്ങളുടെ കണ്ണുകളിൽ നിന്ന് രക്തം കലർന്ന കണ്ണീർ ഒഴുകുന്നത്?',
      ur: 'کیا ذی سلم کے پڑوسیوں کو یاد کر کے آپ نے آنکھوں سے خون ملا آنسو بہائے؟',
      hi: 'क्या ज़ी सलम के पड़ोसियों को याद कर के आप ने आँखों से ख़ून मिला आंसू बहाए?',
      id: 'Apakah karena mengingat tetangga di Dhi Salam engkau mencampur air mata dengan darah?',
      fr: 'Est-ce en te rappelant les voisins de Dhi Salam que tu as mêlé des larmes de sang?',
      tr: 'Dhi Salam\'daki komşuları hatırlayarak gözlerinden kan karışık yaş mı akıttın?',
      bn: 'ধি সলামের প্রতিবেশীদের স্মরণ করে কি আপনি চোখ থেকে রক্ত মিশ্রিত অশ্রু ফেলেছেন?'
    },
    reference: 'Qasida al-Burdah - Stanza 1',
    author: 'Imam al-Busiri'
  },
  {
    id: 'bur-2',
    arabic: 'أَوَ مِنْ تَجَاوُرِ عُمَّارٍ بِذِي سَلَمِ *** أَرَقْتَ عَيْنَكَ فِي إِطْرَاقٍ وَنَعَمِ',
    transliteration: 'Awa min tajawuri \'ummarin bi dzi salam *** Araqta \'aynaka fi itrāqin wa na\'ami',
    translations: {
      en: 'Or is it from the remembrance of those who dwelt at Dhi Salam that you have spent the night in sleeplessness and tears?',
      ar: 'أو من تجاور عمار بذي سلم أرقت عينك في إطراق ونعم',
      ta: 'தி சலாமில் வாழ்ந்தவர்களை நினைத்ததால் நீங்கள் தூக்கமின்றி இரவைக் கழித்தீர்களா?',
      ml: 'ധി സലമിൽ താമസിച്ചവരെ ഓർത്ത് നിങ്ങൾ ഉറക്കമില്ലാതെ രാത്രി ചെലവഴിച്ചോ?',
      ur: 'یا ذی سلم میں رہنے والوں کو یاد کر کے آپ نے رات بیداری میں گزار دی؟',
      hi: 'या ज़ी सलम में रहने वालों को याद कर के आप ने रात बेख़وابी में गुज़ार दी?',
      id: 'Atau karena mengingat penghuni Dhi Salam engkau begadang semalaman?',
      fr: 'Ou est-ce en te rappelant les habitants de Dhi Salam que tu as passé la nuit sans sommeil?',
      tr: 'Dhi Salam sakinlerini hatırlayarak uykusuz bir gece mi geçirdin?',
      bn: 'অথবা ধি সলামের অধিবাসীদের স্মরণ করে কি আপনি নিদ্রাহীন রাত কাটিয়েছেন?'
    },
    reference: 'Qasida al-Burdah - Stanza 2',
    author: 'Imam al-Busiri'
  }
];

export const rathib = [
  {
    id: 'rth-1',
    name: { en: 'Rathib al-Haddad - Opening', ar: 'راتب الحداد' },
    arabic: 'يَا رَبِّ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
    transliteration: 'Ya rabbi salli wa sallim da\'iman abada, \'ala habibika khayril-khalqi kullihimi',
    translations: {
      en: 'O my Lord, send prayers and peace always and eternally upon Your beloved, the best of all creation.',
      ar: 'يا رب صل وسلم دائما أبدا على حبيبك خير الخلق كلهم',
      ta: 'இறைவா! உன் அன்பிற்குரியவரின் மீதும், படைப்புகளில் சிறந்தவரின் மீதும் என்றென்றும் ரஹ்மத்தையும் சலாமத்தையும் அனுப்புவாயாக!',
      ml: 'രക്ഷിതാവേ, നിന്റെ പ്രിയങ്കരനുടെയും സൃഷ്ടികളിൽ ഏറ്റവും ഉത്തമന്റെയും മേൽ നിത്യവും റഹ്മത്തും സലാമും ഇറക്കണമേ.',
      ur: 'اے میرے رب! اپنے محبوب ﷺ پر ہمیشہ ہمیشہ رحمت اور سلامتی نازل فرما۔',
      hi: 'ऐ मेरे रब! अपने महबूब ﷺ पर हमेशा हमेशा रहमत और सलामत नाज़िल फरमा।',
      id: 'Ya Tuhanku, limpahkanlah shalawat dan salam selamanya kepada kekasih-Mu.',
      fr: 'Ô mon Seigneur, envoie prières et paix éternellement sur Ton bien-aimé.',
      tr: 'Rabbim! Sevgiline sürekli salat ve selam gönder.',
      bn: 'হে আমার রব! তোমার প্রিয়তম ﷺ এর প্রতি চিরকাল রহমত ও সালাম নাযিল করো।'
    },
    reference: 'Rathib al-Haddad',
    author: 'Imam Abdullah al-Haddad'
  },
  {
    id: 'rth-2',
    name: { en: 'Rathib al-Haddad - Istighfar', ar: 'راتب الحداد - الاستغفار' },
    arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullahal-\'azim, alladhi la ilaha illa huwal-hayyul-qayyum, wa atubu ilayh',
    translations: {
      en: 'I seek forgiveness from Allah the Mighty, there is no god but He, the Living, the Self-subsisting, and I repent to Him.',
      ar: 'أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه',
      ta: 'மிகப் பெரிய அல்லாஹ்விடம் மன்னிப்பு தேடுகிறேன். அவனைத் தவிர வணக்கத்திற்குரியவர் இல்லை. நான் அவனிடம் தௌபா செய்கிறேன்.',
      ml: 'മഹാനായ അല്ലാഹുവിനോട് പാപമോചനം തേടുന്നു. അവനല്ലാതെ ആരാധനാർഹനില്ല. ഞാൻ അവങ്കലേക്ക് പശ്ചാത്തപിക്കുന്നു.',
      ur: 'میں اللہ عظیم سے مغفرت مانگتا ہوں جس کے سوا کوئی معبود نہیں اور میں اس کی طرف توبہ کرتا ہوں۔',
      hi: 'मैं अल्लाह अज़ीम से माफ़ी मांगता हूं जिसके सिवा कोई माबूद नहीं और मैं उसकी तरफ तौबा करता हूं।',
      id: 'Aku memohon ampun kepada Allah Yang Maha Agung, tiada tuhan selain Dia, dan aku bertaubat kepada-Nya.',
      fr: 'Je demande pardon à Allah le Grand, il n\'y a de dieu que Lui, et je me repens à Lui.',
      tr: 'Allah\'tan bağışlanma diliyorum, O\'ndan başka ilah yoktur ve O\'na tövbe ederim.',
      bn: 'আমি আল্লাহ মহান থেকে ক্ষমা প্রার্থনা করছি, তিনি ছাড়া কোনো ইলাহ নেই এবং আমি তাঁর কাছে তওবা করছি।'
    },
    reference: 'Rathib al-Haddad',
    author: 'Imam Abdullah al-Haddad'
  }
];

export const yaseen = {
  title: { en: 'Surah Yaseen', ar: 'سورة يس', ta: 'யாசீன்', ml: 'യാസീൻ', ur: 'سورہ یٰسین', hi: 'सूरह यासीन', id: 'Surah Yasin', fr: 'Sourate Yasin', tr: 'Yasin Suresi', bn: 'সূরা ইয়াসিন' },
  description: { en: 'The Heart of the Qur\'an', ar: 'قلب القرآن', ta: 'திருக்குர்ஆனின் இதயம்', ml: 'ഖുർആനിന്റെ ഹൃദയം', ur: 'قرآن کا دل', hi: 'कुरान का दिल', id: 'Jantung Al-Quran', fr: 'Le Cœur du Coran', tr: 'Kur\'an\'ın Kalbi', bn: 'কুরআনের হৃদয়' },
  arabic: 'يس وَالْقُرْآنِ الْحَكِيمِ',
  transliteration: 'Ya-Sin. Wal-Qur\'anil-Hakim',
  translations: {
    en: 'Ya-Sin. By the wise Qur\'an.',
    ar: 'يس والقرآن الحكيم',
    ta: 'யா-சீன். ஞானமிக்க குர்ஆன் மீது ஆணையாக.',
    ml: 'യാ-സീൻ. ജ്ഞാനമയ ഖുർആൻ ആണ.',
    ur: 'یٰسین۔ حکمت والے قرآن کی قسم۔',
    hi: 'यासीन। हुकमत वाले कुरान की क़सम।',
    id: 'Ya-Sin. Demi Al-Quran yang penuh hikmah.',
    fr: 'Ya-Sin. Par le Coran plein de sagesse.',
    tr: 'Ya-Sin. Hikmet dolu Kur\'an adına.',
    bn: 'ইয়া-সিন। জ্ঞানময় কুরআনের কসম।'
  },
  reference: 'Quran 36:1-2',
  benefit: 'Recite for the deceased and the sick'
};

export const dhikr = [
  {
    id: 'dh-1',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ',
    transliteration: 'La ilaha illallah',
    translations: { en: 'There is no god but Allah', ar: 'لا إله إلا الله', ta: 'அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை', ml: 'അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല', ur: 'اللہ کے سوا کوئی معبود نہیں', hi: 'अल्लाह के सिवा कोई माबूद नहीं', id: 'Tiada tuhan selain Allah', fr: 'Nul ne mérite d\'être adoré sauf Allah', tr: 'Allah\'tan başka ilah yoktur', bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই' },
    repeat: 100,
    benefit: 'The best dhikr'
  },
  {
    id: 'dh-2',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'Subhanallah',
    translations: { en: 'Glory be to Allah', ar: 'سبحان الله', ta: 'அல்லாஹ் தூய்மையானவன்', ml: 'അല്ലാഹു പരിശുദ്ധൻ', ur: 'اللہ پاک ہے', hi: 'अल्लाह पाक है', id: 'Maha Suci Allah', fr: 'Gloire à Allah', tr: 'Allah\'ı tenzih ederim', bn: 'আল্লাহ পবিত্র' },
    repeat: 33,
    benefit: 'Half the scale with good deeds'
  },
  {
    id: 'dh-3',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    translations: { en: 'All praise is for Allah', ar: 'الحمد لله', ta: 'எல்லா புகழும் அல்லாஹ்வுக்கே', ml: 'എല്ലാ സ്തുതിയും അല്ലാഹുവിന്', ur: 'تمام تعریفیں اللہ کے لیے', hi: 'सब तारीफ़ अल्लाह के लिए', id: 'Segala puji bagi Allah', fr: 'Toute louange est pour Allah', tr: 'Hamd Allah\'adır', bn: 'সমস্ত প্রশংসা আল্লাহর' },
    repeat: 33,
    benefit: 'Fills the scale'
  },
  {
    id: 'dh-4',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translations: { en: 'Allah is the Greatest', ar: 'الله أكبر', ta: 'அல்லாஹ் மிகப் பெரியவன்', ml: 'അല്ലാഹു ഏറ്റവും വലിയവൻ', ur: 'اللہ سب سے بڑا ہے', hi: 'अल्लाह सबसे बड़ा है', id: 'Allah Maha Besar', fr: 'Allah est le Plus Grand', tr: 'Allah en büyüktür', bn: 'আল্লাহ সর্বশ্রেষ্ঠ' },
    repeat: 34,
    benefit: 'Fills the space between heaven and earth'
  }
];

export const adhkar = [
  {
    id: 'adh-1',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: 'La hawla wa la quwwata illa billah',
    translations: { en: 'There is no power nor strength except with Allah', ar: 'لا حول ولا قوة إلا بالله', ta: 'அல்லாஹ்வைத் தவிர சக்தியும் வலிமையும் இல்லை', ml: 'അല്ലാഹു അല്ലാതെ ശക്തിയുമില്ല ബലവുമില്ല', ur: 'اللہ کے سوا کوئی طاقت اور قوت نہیں', hi: 'अल्लाह के सिवा कोई ताक़त और क़ुव्वत नहीं', id: 'Tiada daya dan kekuatan kecuali dengan Allah', fr: 'Il n\'y a de pouvoir ni de force qu\'en Allah', tr: 'Allah\'tan başka güç ve kuvvet yoktur', bn: 'আল্লাহ ছাড়া কোনো শক্তি ও ক্ষমতা নেই' },
    repeat: 100,
    benefit: 'A treasure from the treasures of Paradise'
  },
  {
    id: 'adh-2',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
    transliteration: 'Subhanallahi wa bihamdihi, Subhanallahil-\'azim',
    translations: { en: 'Glory be to Allah and His praise, glory be to Allah the Magnificent', ar: 'سبحان الله وبحمده سبحان الله العظيم', ta: 'அல்லாஹ் தூய்மையானவன், புகழுடன். மகத்தான அல்லாஹ் தூய்மையானவன்', ml: 'അല്ലാഹു പരിശുദ്ധൻ, സ്തുതിയോടെ. മഹാനായ അല്ലാഹു പരിശുദ്ധൻ', ur: 'اللہ پاک ہے اس کی تعریف کے ساتھ، اللہ عظیم پاک ہے', hi: 'अल्लाह पाक है उसकी तारीफ़ के साथ, अल्लाह अज़ीम पाक है', id: 'Maha Suci Allah dengan pujian-Nya, Maha Suci Allah Yang Agung', fr: 'Gloire à Allah et Sa louange, Gloire à Allah le Magnifique', tr: 'Allah\'ı hamd ile tenzih ederim, Allah\'ı tenzih ederim', bn: 'আল্লাহ পবিত্র তাঁর প্রশংসাসহ, আল্লাহ মহান পবিত্র' },
    repeat: 100,
    benefit: 'Two words light on the tongue, heavy on the scale'
  }
];