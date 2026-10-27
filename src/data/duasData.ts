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

export const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
];

export const categories: Category[] = [
  {
    id: 'morning-evening',
    name: {
      en: 'Morning & Evening Adhkar',
      ar: 'أذكار الصباح والمساء',
      ta: 'காலை & மாலை அட்கார்',
      ml: 'രാവിലെയും വൈകുന്നേരവും അദ്കാർ',
      ur: 'صبح و شام کے اذکار',
      hi: 'सुबह और शाम के अज़कार',
      id: 'Dzikir Pagi & Petang',
      fr: 'Invocations du Matin & du Soir',
      tr: 'Sabah & Akşam Zikirleri',
      bn: 'সকাল ও সন্ধ্যার আযকার'
    },
    icon: '☀️',
    color: '#F59E0B',
    duas: [
      {
        id: 'me-1',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ',
        transliteration: 'Asbahnaa wa asbahal mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa shareeka lah',
        translations: {
          en: 'We have reached the morning and at this very time the whole kingdom belongs to Allah. All praise is due to Allah. None has the right to be worshipped except Allah alone, without partner.',
          ar: 'أصبحنا وأصبح الملك لله والحمد لله لا إله إلا الله وحده لا شريك له',
          ta: 'நாங்கள் காலையை அடைந்தோம், அரசாங்கம் அல்லாஹ்வுக்கே. புகழ் அனைத்தும் அல்லாஹ்வுக்கே. அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் எவருமில்லை.',
          ml: 'ഞങ്ങൾ പ്രഭാതത്തെ എത്തിച്ചേർന്നു, സർവ്വാധിപത്യവും അല്ലാഹുവിനാണ്. സ്തുതി അല്ലാഹുവിനാണ്. അല്ലാഹു അല്ലാതെ ആരാധ്യനില്ല.',
          ur: 'ہم نے صبح کی اور تمام بادشاہت اللہ کے لیے ہے۔ تمام تعریف اللہ کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں۔',
          hi: 'हमने सुबह की और सारी बादशाहत अल्लाह के लिए है। सारी तारीफ अल्लाह के लिए है। अल्लाह के सिवा कोई माबूद नहीं।',
          id: 'Kami telah memasuki waktu pagi dan kerajaan milik Allah, segala puji bagi Allah. Tiada Tuhan selain Allah Yang Maha Esa.',
          fr: 'Nous avons atteint le matin et la royauté appartient à Allah. Louange à Allah. Il n\'y a de dieu qu\'Allah Seul.',
          tr: 'Sabaha ulaştık ve tüm mülk Allah\'ındır. Hamd Allah\'adır. Allah\'tan başka ilah yoktur.',
          bn: 'আমরা সকালে পৌঁছেছি এবং সমস্ত রাজত্ব আল্লাহর। সমস্ত প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই।'
        },
        reference: 'Muslim 4/2088',
        repeat: 1,
        benefit: 'Protection throughout the day'
      },
      {
        id: 'me-2',
        arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
        transliteration: 'Allaahumma bika asbahnaa wa bika amsaynaa wa bika nahyaa wa bika namootu wa ilaykan-nushoor',
        translations: {
          en: 'O Allah, by You we have reached the morning and by You we have reached the evening, by You we live and by You we die, and to You is the resurrection.',
          ar: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور',
          ta: 'இறைவா! உன்னால் நாங்கள் காலையை அடைந்தோம், உன்னால் மாலையை அடைந்தோம், உன்னால் வாழ்கிறோம், உன்னால் இறக்கிறோம், உன்னிடமே மறுமலர்ச்சி.',
          ml: 'അല്ലാഹുവേ, നിന്നാലാണ് ഞങ്ങൾ പ്രഭാതം പ്രാപിച്ചത്. നിന്നാലാണ് സന്ധ്യ. നിന്നാലാണ് ജീവൻ. നിന്നാലാണ് മരണം. നിങ്കലേക്കാണ് ഉയിർത്തെഴുന്നേൽപ്പ്.',
          ur: 'اے اللہ! تجھ سے ہم نے صبح کی اور تجھ سے شام کی اور تجھ سے جیتے ہیں اور تجھ سے مرتے ہیں اور تیری طرف اٹھنا ہے۔',
          hi: 'ऐ अल्लाह! तुझसे हमने सुबह की और तुझसे शाम की और तुझसे जीते हैं और तुझसे मरते हैं और तेरी तरफ उठना है।',
          id: 'Ya Allah, dengan-Mu kami memasuki pagi, dengan-Mu kami memasuki petang, dengan-Mu kami hidup dan mati, kepada-Mu kebangkitan.',
          fr: 'Ô Allah, par Toi nous atteignons le matin, par Toi le soir, par Toi nous vivons et mourons, et vers Toi est la résurrection.',
          tr: 'Allah\'ım! Seninle sabaha ulaştık, seninle akşama ulaştık, seninle yaşıyor ve ölüyoruz, dönüş sanadır.',
          bn: 'হে আল্লাহ! তোমার কারণে আমরা সকাল পেয়েছি, তোমার কারণে সন্ধ্যা পেয়েছি, তোমার কারণে বাঁচি ও মরি, তোমার দিকেই প্রত্যাবর্তন।'
        },
        reference: 'At-Tirmidhi 5/466',
        repeat: 1,
        benefit: 'Gratitude and remembrance of Allah'
      },
      {
        id: 'me-3',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
        transliteration: 'Subhaanallaahi wa bihamdihi, \'adada khalqihi wa ridhaa nafsihi wa zinata \'arshihi wa midaada kalimaatihi',
        translations: {
          en: 'Glory be to Allah and praise Him, according to the number of His creation, according to His Pleasure, according to the weight of His Throne, and according to the extent of His Words.',
          ar: 'سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته',
          ta: 'அல்லாஹ் பரிசுத்தம்! அவனது படைப்புகளின் எண்ணிக்கைக்கும், அவனது திருப்திக்கும், அவனது அறையின் எடைக்கும், அவனது வார்த்தைகளின் அளவுக்கும் புகழ் உரித்தாகுக.',
          ml: 'അല്ലാഹു പരിശുദ്ധൻ. അവന്റെ സൃഷ്ടികളുടെ എണ്ണത്തിനും അവന്റെ തൃപ്തിക്കും അവന്റെ സിംഹാസനത്തിന്റെ ഭാരത്തിനും അവന്റെ വാക്കുകളുടെ അളവിനും സ്തുതി.',
          ur: 'اللہ پاک ہے اور اس کی حمد ہے اس کی مخلوق کی تعداد کے برابر، اس کی رضا کے برابر، اس کے عرش کے وزن کے برابر، اور اس کے کلمات کی سیاہی کے برابر۔',
          hi: 'अल्लाह पाक है और उसकी हम्द है उसकी मखलूक की तादाद के बराबर, उसकी रिज़ा के बराबर, उसके अर्श के वज़न के बराबर।',
          id: 'Maha Suci Allah dan segala puji bagi-Nya, sebanyak bilangan ciptaan-Nya, keridhaan-Nya, timbangan Arasy-Nya, dan tinta kalimat-Nya.',
          fr: 'Gloire à Allah et louange à Lui, autant que le nombre de Sa création, selon Son Agrément, selon le poids de Son Trône.',
          tr: 'Allah\'ı tesbih eder ve hamd ederim, yaratıklarının sayısı kadar, rızası kadar, Arş\'ının ağırlığı kadar.',
          bn: 'আল্লাহ পবিত্র এবং তাঁর প্রশংসা, তাঁর সৃষ্টির সংখ্যার সমান, তাঁর সন্তুষ্টির সমান, তাঁর আরশের ওজনের সমান।'
        },
        reference: 'Muslim 4/2090',
        repeat: 3,
        benefit: 'Immense reward equivalent to all creation'
      },
      {
        id: 'me-4',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ',
        transliteration: 'Allaahumma inni as\'alukal-\'afwa wal-\'aafiyata fid-dunyaa wal-aakhirah',
        translations: {
          en: 'O Allah, I ask You for pardon and well-being in this life and the next.',
          ar: 'اللهم إني أسألك العفو والعافية في الدنيا والآخرة',
          ta: 'இறைவா! இந்த உலகிலும் மறுமையிலும் மன்னிப்பையும் நல்வாழ்வையும் உன்னிடம் கேட்கிறேன்.',
          ml: 'അല്ലാഹുവേ, ഈ ലോകത്തും പരലോകത്തും മാപ്പും സുഖവും ഞാൻ ചോദിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے دنیا و آخرت میں عفو و عافیت مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे दुनिया और आखिरत में अफ्व व आफियत मांगता हूं।',
          id: 'Ya Allah, aku memohon ampun dan kesejahteraan di dunia dan akhirat.',
          fr: 'Ô Allah, je Te demande le pardon et le bien-être ici-bas et dans l\'au-delà.',
          tr: 'Allah\'ım! Senden dünya ve ahirette af ve selamet istiyorum.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে দুনিয়া ও আখিরাতে ক্ষমা ও নিরাপত্তা চাই।'
        },
        reference: 'Ibn Majah 2/332',
        repeat: 3,
        benefit: 'Comprehensive well-being in both worlds'
      }
    ]
  },
  {
    id: 'after-salah',
    name: {
      en: 'After Every Salah',
      ar: 'بعد كل صلاة',
      ta: 'தொழுகைக்குப் பின்',
      ml: 'ഓരോ നിസ്കാരത്തിന് ശേഷം',
      ur: 'ہر نماز کے بعد',
      hi: 'हर नमाज़ के बाद',
      id: 'Setiap Setelah Shalat',
      fr: 'Après Chaque Prière',
      tr: 'Her Namazdan Sonra',
      bn: 'প্রতি নামাযের পরে'
    },
    icon: '🕌',
    color: '#10B981',
    duas: [
      {
        id: 'as-1',
        arabic: 'أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ',
        transliteration: 'Astaghfirullaah (3 times). Allaahumma Antas-Salaamu wa minkas-salaamu tabaarakta yaa thal-jalaali wal-ikraam.',
        translations: {
          en: 'I seek the forgiveness of Allah (3 times). O Allah, You are Peace and from You is peace. Blessed are You, O Owner of Majesty and Honour.',
          ar: 'أستغفر الله (ثلاثاً) اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام',
          ta: 'அல்லாஹ்விடம் மன்னிப்பு கேட்கிறேன் (3 முறை). இறைவா! நீயே சாந்தி, உன்னிடமிருந்தே சாந்தி. நீ மகிமைமிக்கவன்.',
          ml: 'ഞാൻ അല്ലാഹുവിനോട് മാപ്പ് ചോദിക്കുന്നു (3 തവണ). അല്ലാഹുവേ, നീയാണ് സമാധാനം, നിന്നിൽ നിന്നാണ് സമാധാനം.',
          ur: 'میں اللہ سے مغفرت مانگتا ہوں (3 بار)۔ اے اللہ! تو سلامتی ہے اور تجھ سے سلامتی ہے۔ تو بابرکت ہے اے جلال و اکرم والے۔',
          hi: 'मैं अल्लाह से माफी मांगता हूं (3 बार)। ऐ अल्लाह! तू सलामती है और तुझसे सलामती है। तू बरकत वाला है।',
          id: 'Aku memohon ampun Allah (3 kali). Ya Allah, Engkaulah As-Salam dan dari-Mu salam. Maha Suci Engkau wahai Dzat yang memiliki keagungan.',
          fr: 'Je demande le pardon d\'Allah (3 fois). Ô Allah, Tu es la Paix et de Toi vient la paix. Béni sois-Tu, Ô Détenteur de Majesté.',
          tr: 'Allah\'tan bağışlanma dilerim (3 kez). Allah\'ım! Sen Selam\'sın ve selamet Senden\'dir. Tebarekta ya Zelcelali vel ikram.',
          bn: 'আমি আল্লাহর কাছে ক্ষমা চাই (৩ বার)। হে আল্লাহ! তুমিই শান্তি এবং তোমার কাছ থেকে শান্তি। তুমি বরকতময়।'
        },
        reference: 'Muslim 1/415',
        repeat: 1,
        benefit: 'Seeking peace and forgiveness after prayer'
      },
      {
        id: 'as-2',
        arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        transliteration: 'Allaahumma a\'inni \'alaa thikrika wa shukrika wa husni \'ibaadatik.',
        translations: {
          en: 'O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner.',
          ar: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك',
          ta: 'இறைவா! உன்னை நினைவு கூரவும், நன்றி செலுத்தவும், உன்னை அழகாக வணங்கவும் எனக்கு உதவுவாயாக.',
          ml: 'അല്ലാഹുവേ, നിന്നെ ഓർക്കാനും നന്ദി പറയാനും സുന്ദരമായ ആരാധനക്കും എന്നെ സഹായിക്കണേ.',
          ur: 'اے اللہ! مجھے تیرا ذکر، تیری شکرگزاری اور تیری بہترین عبادت کی توفیق عطا فرما۔',
          hi: 'ऐ अल्लाह! मुझे तेरा जिक्र, तेरी शुक्रगुज़ारी और तेरी बेहतरीन इबादत की तौफीक अता फरमा।',
          id: 'Ya Allah, bantulah aku untuk mengingat-Mu, bersyukur kepada-Mu, dan beribadah dengan baik.',
          fr: 'Ô Allah, aide-moi à Te mentionner, à Te remercier et à T\'adorer de la meilleure manière.',
          tr: 'Allah\'ım! Seni zikretmemde, şükretmemde ve güzel ibadet etmemde bana yardım et.',
          bn: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও সুন্দর ইবাদতে সাহায্য করো।'
        },
        reference: 'Abu Dawud 2/86',
        repeat: 1,
        benefit: 'Divine assistance in worship'
      },
      {
        id: 'as-3',
        arabic: 'آيَةُ الْكُرْسِيِّ: اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ',
        transliteration: 'Allahu laa ilaaha illaa huwal-hayyul-qayyoom, laa ta\'khuthahu sinatun wa laa nawm.',
        translations: {
          en: 'Ayat al-Kursi: Allah! There is no god but He, the Living, the Self-Subsisting, the Eternal. No slumber can seize Him, nor sleep.',
          ar: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
          ta: 'அல்லாஹ்! அவனைத் தவிர வணக்கத்திற்குரியவர் இல்லை. அவன் என்றும் வாழ்பவன், நிலைத்திருப்பவன். தூக்கமோ உறக்கமோ அவனைப் பீடிக்காது.',
          ml: 'അല്ലാഹു, അവനല്ലാതെ ആരാധ്യനില്ല. ജീവനുള്ളവൻ, നിലനിൽപ്പുള്ളവൻ. ഉറക്കമോ തൂക്കമോ അവനെ ബാധിക്കില്ല.',
          ur: 'اللہ! اس کے سوا کوئی معبود نہیں، زندہ ہے، قائم رہنے والا ہے۔ نہ اونگھ اسے آتی ہے نہ نیند۔',
          hi: 'अल्लाह! उसके सिवा कोई माबूद नहीं, ज़िंदा है, क़ाइम रहने वाला है। न ऊंघ उसे आती है न नींद।',
          id: 'Allah, tiada Tuhan selain Dia Yang Maha Hidup lagi Maha Berdiri Sendiri. Tidak mengantuk dan tidak tidur.',
          fr: 'Allah! Pas de dieu à part Lui, le Vivant, l\'Immuable. Ni somnolence ni sommeil ne Le saisissent.',
          tr: 'Allah! O\'ndan başka ilah yoktur. Diridir, kayyum dur. Ne uyuklama ne uyku O\'nu yakalayamaz.',
          bn: 'আল্লাহ! তিনি ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, চিরস্থায়ী। তন্দ্রা বা নিদ্রা তাঁকে স্পর্শ করে না।'
        },
        reference: 'Quran 2:255',
        repeat: 1,
        benefit: 'Protection from Satan until next prayer'
      },
      {
        id: 'as-4',
        arabic: 'سُبْحَانَ اللَّهِ (33) الْحَمْدُ لِلَّهِ (33) اللَّهُ أَكْبَرُ (34)',
        transliteration: 'Subhaanallaah (33 times). Alhamdu lillaah (33 times). Allaahu Akbar (34 times).',
        translations: {
          en: 'Glory be to Allah (33 times). Praise be to Allah (33 times). Allah is the Greatest (34 times).',
          ar: 'سبحان الله (٣٣) الحمد لله (٣٣) الله أكبر (٣٤)',
          ta: 'அல்லாஹ் பரிசுத்தம் (33 முறை). அல்லாஹ்வுக்கே புகழ் (33 முறை). அல்லாஹ் மிகப் பெரியவன் (34 முறை).',
          ml: 'അല്ലാഹു പരിശുദ്ധൻ (33). സ്തുതി അല്ലാഹുവിന് (33). അല്ലാഹു ഏറ്റവും വലിയവൻ (34).',
          ur: 'اللہ پاک ہے (33 بار)۔ تمام تعریف اللہ کے لیے ہے (33 بار)۔ اللہ سب سے بڑا ہے (34 بار)۔',
          hi: 'अल्लाह पाक है (33 बार)। सारी तारीफ अल्लाह के लिए है (33 बार)। अल्लाह सबसे बड़ा है (34 बार)।',
          id: 'Maha Suci Allah (33 kali). Segala puji bagi Allah (33 kali). Allah Maha Besar (34 kali).',
          fr: 'Gloire à Allah (33 fois). Louange à Allah (33 fois). Allah est le Plus Grand (34 fois).',
          tr: 'Allah\'ı tesbih ederim (33 kez). Hamd Allah\'adır (33 kez). Allah en büyüktür (34 kez).',
          bn: 'আল্লাহ পবিত্র (৩৩ বার)। প্রশংসা আল্লাহর (৩৩ বার)। আল্লাহ মহান (৩৪ বার)।'
        },
        reference: 'Muslim 1/415 (Tasbeeh Fatimah)',
        repeat: 1,
        benefit: 'Forgiveness of sins even if like foam of the sea'
      }
    ]
  },
  {
    id: 'sickness-healing',
    name: {
      en: 'Sickness, Healing & Shifa',
      ar: 'المرض والشفاء',
      ta: 'நோய் & குணமடைதல்',
      ml: 'രോഗവും ചികിത്സയും',
      ur: 'بیماری اور شفا',
      hi: 'बीमारी और शिफा',
      id: 'Penyakit & Kesembuhan',
      fr: 'Maladie & Guérison',
      tr: 'Hastalık & Şifa',
      bn: 'অসুস্থতা ও সুস্থতা'
    },
    icon: '🏥',
    color: '#EF4444',
    duas: [
      {
        id: 'sh-1',
        arabic: 'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ الشَّافِي لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ شِفَاءً لاَ يُغَادِرُ سَقَمًا',
        transliteration: 'Adhhibil-ba\'sa Rabban-naasi, wa\'shfi antash-Shaafee, laa shifaa\'a illaa shifaa\'uka, shifaa\'an laa yughaadiru saqamaan.',
        translations: {
          en: 'Remove the harm, O Lord of mankind, and grant healing, for You are the Healer. There is no healing but Your healing, a healing that leaves no illness behind.',
          ar: 'أذهب البأس رب الناس واشف أنت الشافي لا شفاء إلا شفاؤك شفاء لا يغادر سقما',
          ta: 'மனிதர்களின் இறைவா! தீமையை நீக்கு, குணமளிப்பவனே! குணமளிப்பாய்! உன் குணமன்றி வேறு குணமில்லை. அது எந்த நோயையும் விடாது குணமாக்கும்.',
          ml: 'മനുഷ്യരുടെ രക്ഷിതാവേ, ദോഷം നീക്കം ചെയ്യുക. നീയാണ് ചികിത്സകൻ. നിന്റെ ചികിത്സയല്ലാതെ ചികിത്സയില്ല.',
          ur: 'اے لوگوں کے رب! تکلیف دور فرما اور شفا عطا فرما۔ تو ہی شفا دینے والا ہے۔ تیری شفا کے سوا کوئی شفا نہیں جو بیماری کو بالکل ختم کر دے۔',
          hi: 'ऐ लोगों के रब! तकलीफ दूर फरमा और शिफा अता फरमा। तू ही शिफा देने वाला है। तेरी शिफा के सिवा कोई शिफा नहीं।',
          id: 'Hilangkanlah penderitaan, wahai Tuhan manusia, dan sembuhkanlah. Engkaulah Penyembuh, tiada kesembuhan selain kesembuhan-Mu.',
          fr: 'Éloigne le mal, Ô Seigneur des gens, et guéris. Tu es le Guérisseur. Il n\'y a de guérison que Ta guérison.',
          tr: 'Ey insanların Rabbi! Zararı gider ve şifa ver. Şifa verici Sensin. Senin şifandan başka şifa yoktur.',
          bn: 'হে মানুষের রব! কষ্ট দূর করো এবং আরোগ্য দাও। তুমিই আরোগ্যদাতা। তোমার আরোগ্য ছাড়া কোনো আরোগ্য নেই।'
        },
        reference: 'Bukhari 7/164, Muslim 4/1717',
        repeat: 3,
        benefit: 'Complete healing from all ailments'
      },
      {
        id: 'sh-2',
        arabic: 'بِسْمِ اللَّهِ (ثلاثاً) أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ',
        transliteration: 'Bismillaah (3 times). A\'oothu billaahi wa qudratihi min sharri maa ajidu wa uhaathiru.',
        translations: {
          en: 'In the name of Allah (3 times). I seek refuge in Allah and in His Power from the evil of what I feel and worry about.',
          ar: 'بسم الله (ثلاثاً) أعوذ بالله وقدرته من شر ما أجد وأحاذر',
          ta: 'அல்லாஹ்வின் பெயரால் (3 முறை). நான் உணர்கிற, அஞ்சுகிற தீமையிலிருந்து அல்லாஹ்வின் திருப்பெயராலும் அவனது ஆற்றலாலும் புகல் தேடுகிறேன்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ (3 തവണ). ഞാൻ അനുഭവിക്കുന്നതിന്റെയും ഭയപ്പെടുന്നതിന്റെയും ദോഷത്തിൽ നിന്ന് അല്ലാഹുവിനെയും അവന്റെ ശക്തിയെയും ആശ്രയിക്കുന്നു.',
          ur: 'اللہ کے نام سے (3 بار)۔ میں جو محسوس کرتا ہوں اور جس سے ڈرتا ہوں اس کے شر سے اللہ اور اس کی قدرت کی پناہ مانگتا ہوں۔',
          hi: 'अल्लाह के नाम से (3 बार)। जो मैं महसूस करता हूं और जिससे डरता हूं उसके शर से अल्लाह और उसकी क़ुदरत की पनाह मांगता हूं।',
          id: 'Dengan nama Allah (3 kali). Aku berlindung kepada Allah dan kekuasaan-Nya dari kejahatan yang aku rasakan dan aku khawatirkan.',
          fr: 'Au nom d\'Allah (3 fois). Je cherche refuge en Allah et en Son pouvoir contre le mal que je ressens.',
          tr: 'Allah\'ın adıyla (3 kez). Hissettiğim ve korktuğum şeyin şerrinden Allah\'a ve kudretine sığınırım.',
          bn: 'আল্লাহর নামে (৩ বার)। আমি যা অনুভব করি ও ভয় পাই তার অনিষ্ট থেকে আল্লাহর ও তাঁর ক্ষমতার আশ্রয় চাই।'
        },
        reference: 'Muslim 4/1728',
        repeat: 3,
        benefit: 'Prophetic method of placing hand on painful area'
      },
      {
        id: 'sh-3',
        arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِهِ وَأَنْتَ شَافِيهِ لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ',
        transliteration: 'Allaahumma Rabban-naasi, adhhibil-ba\'sa, ishfihi wa anta shaafihi, laa shifaa\'a illaa shifaa\'uka.',
        translations: {
          en: 'O Allah, Lord of mankind, remove the harm. Heal him, for You are the Healer. There is no healing but Your healing.',
          ar: 'اللهم رب الناس أذهب البأس اشفه وأنت شافيه لا شفاء إلا شفاؤك',
          ta: 'இறைவா! மனிதர்களின் இறைவா! தீமையை நீக்கு. அவருக்கு குணமளிப்பாய்! நீயே குணமளிப்பவன்.',
          ml: 'അല്ലാഹുവേ, മനുഷ്യരുടെ രക്ഷിതാവേ, ദോഷം നീക്കം ചെയ്യുക. അവനെ സുഖപ്പെടുത്തുക. നീയാണ് സുഖപ്പെടുത്തുന്നത്.',
          ur: 'اے اللہ! اے لوگوں کے رب! تکلیف دور فرما۔ انہیں شفا عطا فرما۔ تو ہی شفا دینے والا ہے۔',
          hi: 'ऐ अल्लाह! ऐ लोगों के रब! तकलीफ दूर फरमा। उन्हें शिफा अता फरमा। तू ही शिफा देने वाला है।',
          id: 'Ya Allah, Tuhan manusia, hilangkanlah penderitaan. Sembuhkanlah dia, Engkaulah Penyembuh.',
          fr: 'Ô Allah, Seigneur des gens, éloigne le mal. Guéris-le, Tu es le Guérisseur.',
          tr: 'Allah\'ım! Ey insanların Rabbi! Zararı gider. Onu şifa ver, Şifa veren Sensin.',
          bn: 'হে আল্লাহ! হে মানুষের রব! কষ্ট দূর করো। তাকে আরোগ্য দাও। তুমিই আরোগ্যদাতা।'
        },
        reference: 'Bukhari 7/162',
        repeat: 3,
        benefit: 'Recited by Prophet ﷺ for the sick'
      }
    ]
  },
  {
    id: 'death-condolence',
    name: {
      en: 'Death, Condolence & Graveyard',
      ar: 'الموت والعزاء والمقبرة',
      ta: 'மரணம் & அனுதாபம்',
      ml: 'മരണവും അനുശോചനയും',
      ur: 'موت اور تعزیت',
      hi: 'मौत और ताज़ियत',
      id: 'Kematian & Kondolensi',
      fr: 'Mort & Condoléances',
      tr: 'Ölüm & Taziye',
      bn: 'মৃত্যু ও সান্ত্বনা'
    },
    icon: '🕊️',
    color: '#6B7280',
    duas: [
      {
        id: 'dc-1',
        arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
        transliteration: 'Innaa lillaahi wa innaa ilayhi raaji\'oon. Allaahumma ajurni fee museebati wa akhlif li khayran minhaa.',
        translations: {
          en: 'Indeed we belong to Allah, and indeed to Him we will return. O Allah, reward me in my affliction and replace it with something better.',
          ar: 'إنا لله وإنا إليه راجعون اللهم أجرني في مصيبتي وأخلف لي خيرا منها',
          ta: 'நிச்சயமாக நாங்கள் அல்லாஹ்வுக்கே சொந்தம், நிச்சயமாக அவனிடமே திரும்புவோம். இறைவா! என் சோதனையில் எனக்கு கூலி தந்து, அதைவிட நன்மையானதை எனக்கு மாற்றாகத் தருவாயாக.',
          ml: 'ഞങ്ങൾ അല്ലാഹുവിനുള്ളവരാണ്, അവങ്കലേക്ക് മടങ്ങുന്നവരുമാണ്. അല്ലാഹുവേ, എന്റെ ദുരിതത്തിൽ പ്രതിഫലം തരുക, അതിനേക്കാൾ നല്ലത് പകരം തരുക.',
          ur: 'بیشک ہم اللہ کے لیے ہیں اور بیشک ہمیں اسی کی طرف لوٹنا ہے۔ اے اللہ! میری مصیبت میں مجھے اجر عطا فرما اور اس کا بہتر بدلہ عطا فرما۔',
          hi: 'बेशक हम अल्लाह के लिए हैं और बेशक हमें उसी की तरफ लौटना है। ऐ अल्लाह! मेरी मुसीबत में मुझे अज्र अता फरमा और उसका बेहतर बदला अता फरमा।',
          id: 'Sesungguhnya kami milik Allah dan kepada-Nya kami kembali. Ya Allah, berilah aku pahala dalam musibahku dan gantilah dengan yang lebih baik.',
          fr: 'Nous appartenons à Allah et c\'est vers Lui que nous retournerons. Ô Allah, récompense-moi dans mon épreuve et remplace-la par mieux.',
          tr: 'Şüphesiz biz Allah\'ınız ve O\'na döneceğiz. Allah\'ım! Musibetimde bana mükafat ver ve onun yerine daha hayırlısını ver.',
          bn: 'নিশ্চয় আমরা আল্লাহর জন্য এবং নিশ্চয় আমরা তাঁর দিকে প্রত্যাবর্তনকারী। হে আল্লাহ! আমার বিপদে আমাকে প্রতিদান দাও এবং তার চেয়ে উত্তম বিনিময় দাও।'
        },
        reference: 'Muslim 2/632',
        repeat: 1,
        benefit: 'Allah replaces loss with something better'
      },
      {
        id: 'dc-2',
        arabic: 'السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ',
        transliteration: 'As-salaamu \'alaykum ahlad-diyaari minal-mu\'miniina wal-muslimeen, wa innaa in shaa\' Allaahu bikum laahiqoon.',
        translations: {
          en: 'Peace be upon you, O people of the dwellings, believers and Muslims. We, if Allah wills, shall join you.',
          ar: 'السلام عليكم أهل الديار من المؤمنين والمسلمين وإنا إن شاء الله بكم لاحقون',
          ta: 'முஃமின்களின் வீட்டாரே! உங்கள் மீது சாந்தி உண்டாகட்டும். நாங்களும் அல்லாஹ் நாடினால் உங்களைச் சேர்வோம்.',
          ml: 'വിശ്വാസികളുടെ വാസസ്ഥലക്കാരേ, നിങ്ങൾക്ക് സമാധാനമുണ്ടാകട്ടെ. അല്ലാഹു ഇച്ഛിച്ചാൽ ഞങ്ങളും നിങ്ങളെ ചേരും.',
          ur: 'اے مومنوں اور مسلمانوں کے گھروالو! تم پر سلامتی ہو۔ اور ان شاء اللہ ہم بھی تم سے آملیں گے۔',
          hi: 'ऐ मोमिनों और मुसलमानों के घर वालो! तुम पर सलामती हो। और इनशाअल्लाह हम भी तुमसे आ मिलेंगे।',
          id: 'Keselamatan atas kalian, wahai penghuni negeri dari kalangan mukminin dan muslimin. Dan kami, insya Allah, akan menyusul kalian.',
          fr: 'Paix sur vous, ô gens des demeures, croyants et musulmans. Et nous, si Allah veut, vous rejoindrons.',
          tr: 'Ey müminlerin ve müslümanların yurt sakinleri! Selam sizin üzerine. İnşaallah biz de size katılacağız.',
          bn: 'হে মুমিন ও মুসলিমদের আবাসবাসী! তোমাদের উপর শান্তি। ইনশাআল্লাহ আমরাও তোমাদের সাথে মিলিত হব।'
        },
        reference: 'Muslim 2/671',
        repeat: 1,
        benefit: 'Greeting when entering the cemetery'
      },
      {
        id: 'dc-3',
        arabic: 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ',
        transliteration: 'Allaahummaghfir lahu warhamhu wa \'aafihi wa\'fu \'anhu wa akrim nuzulahu.',
        translations: {
          en: 'O Allah, forgive him, have mercy on him, grant him well-being, pardon him, and honor his reception.',
          ar: 'اللهم اغفر له وارحمه وعافه واعف عنه وأكرم نزله',
          ta: 'இறைவா! அவருக்கு மன்னித்தருள், அவர் மீது கருணை காட்டு, அவருக்கு நல்வாழ்வளித்து, அவரை மன்னித்து, அவரது வருகையை கௌரவப்படுத்து.',
          ml: 'അല്ലാഹുവേ, അവനെ മാപ്പുനൽകുക, അവനോട് കരുണ കാണിക്കുക, അവന് സുഖം നൽകുക, അവനെ പൊറുക്കുക.',
          ur: 'اے اللہ! اسے بخش دے، اس پر رحم فرما، اسے عافیت دے، اسے معاف فرما اور اس کی مہمان نوازی کو عزت عطا فرما۔',
          hi: 'ऐ अल्लाह! इसे बख्श दे, इस पर रहम फरमा, इसे आफियत दे, इसे माफ फरमा।',
          id: 'Ya Allah, ampunilah dia, rahmatilah dia, sehatkan dia, maafkan dia, dan muliakan kedatangannya.',
          fr: 'Ô Allah, pardonne-lui, aie pitié de lui, accorde-lui le bien-être, absous-le.',
          tr: 'Allah\'ım! Onu bağışla, ona rahmet et, ona afiyet ver, onu affet.',
          bn: 'হে আল্লাহ! তাকে ক্ষমা করো, তার প্রতি দয়া করো, তাকে নিরাপত্তা দাও, তাকে মাফ করো।'
        },
        reference: 'Muslim 2/663',
        repeat: 1,
        benefit: 'Dua for deceased Muslim at Janazah'
      }
    ]
  },
  {
    id: 'rabbana-duas',
    name: {
      en: '40 Rabbana Duas (Quran)',
      ar: '٤٠ دعاء ربنا',
      ta: '40 ரப்பனா துஆக்கள்',
      ml: '40 റബ്ബനാ ദുആകൾ',
      ur: '۴۰ ربنا دعائیں',
      hi: '४० रब्बना दुआएं',
      id: '40 Doa Rabbana',
      fr: '40 Duas Rabbana',
      tr: '40 Rabbana Duası',
      bn: '৪০ রব্বানা দোয়া'
    },
    icon: '📖',
    color: '#8B5CF6',
    duas: [
      {
        id: 'rb-1',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa \'adhaaban-naar.',
        translations: {
          en: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.',
          ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
          ta: 'எங்கள் இறைவா! இந்த உலகில் நன்மையையும், மறுமையில் நன்மையையும் தந்தருள். நரக வேதனையிலிருந்து காத்தருள்.',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ഈ ലോകത്ത് നന്മയും പരലോകത്ത് നന്മയും തരുക. നരകശിക്ഷയിൽ നിന്ന് ഞങ്ങളെ രക്ഷിക്കുക.',
          ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آزارِ جہنم سے بچا۔',
          hi: 'ऐ हमारे रब! हमें दुनिया में भी भलाई अता फरमा और आखिरत में भी भलाई अता फरमा और हमें आज़ाब-ए-जहन्नम से बचा।',
          id: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.',
          fr: 'Notre Seigneur, accorde-nous le bien ici-bas et le bien dans l\'au-delà, et protège-nous du châtiment du Feu.',
          tr: 'Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru.',
          bn: 'হে আমাদের রব! দুনিয়াতেও ভালো দাও এবং আখিরাতেও ভালো দাও এবং জাহান্নামের আযাব থেকে রক্ষা করো।'
        },
        reference: 'Quran 2:201',
        repeat: 1,
        benefit: 'Most comprehensive dua for all good'
      },
      {
        id: 'rb-2',
        arabic: 'رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا',
        transliteration: 'Rabbanaa laa tu-aakhithnaa in naseenaa aw akhta\'naa.',
        translations: {
          en: 'Our Lord, do not impose blame upon us if we have forgotten or erred.',
          ar: 'ربنا لا تؤاخذنا إن نسينا أو أخطأنا',
          ta: 'எங்கள் இறைவா! நாங்கள் மறந்துவிட்டாலோ பிழைத்துவிட்டாலோ எங்களைக் குற்றவாளிகளாக்காதே.',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾ മറന്നാലും പിഴച്ചാലും ഞങ്ങളെ ശിക്ഷിക്കരുതേ.',
          ur: 'اے ہمارے رب! اگر ہم بھول جائیں یا غلطی کریں تو ہمیں پکڑ نہ فرما۔',
          hi: 'ऐ हमारे रब! अगर हम भूल जाएं या गलती करें तो हमें पकड़ न फरमा।',
          id: 'Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami salah.',
          fr: 'Notre Seigneur, ne nous châtie pas si nous oublions ou commettons une erreur.',
          tr: 'Rabbimiz! Unutursak veya hata yaparsak bizi sorumlu tutma.',
          bn: 'হে আমাদের রব! আমরা ভুলে গেলে বা ভুল করলে আমাদের পাকড়াও করো না।'
        },
        reference: 'Quran 2:286',
        repeat: 1,
        benefit: 'Allah accepted this dua for the Ummah'
      },
      {
        id: 'rb-3',
        arabic: 'رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
        transliteration: 'Rabbanaa laa tuzigh quloobanaa ba\'da ith hadaytanaa wa hab lanaa min ladunka rahmah.',
        translations: {
          en: 'Our Lord, let not our hearts deviate after You have guided us, and grant us mercy from Yourself.',
          ar: 'ربنا لا تزغ قلوبنا بعد إذ هديتنا وهب لنا من لدنك رحمة',
          ta: 'எங்கள் இறைவா! நீ எங்களை நேர்வழிப்படுத்திய பின் எங்கள் உள்ளங்களை வழிதடம் புறச் செய்யாதே. உன்னிடமிருந்து கிருபை தந்தருள்.',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, നീ ഞങ്ങളെ നേർവഴി നടത്തിയ ശേഷം ഞങ്ങളുടെ ഹൃദയങ്ങളെ വഴിതെറ്റിക്കരുതേ.',
          ur: 'اے ہمارے رب! جب تو نے ہمیں ہدایت دی تو ہمارے دلوں کو ٹیڑھا نہ کر اور اپنے پاس سے ہم پر رحمت نازل فرما۔',
          hi: 'ऐ हमारे रब! जब तू ने हमें हिदायत दी तो हमारे दिलों को टेढ़ा न कर और अपने पास से हम पर रहमत नाज़िल फरमा।',
          id: 'Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan setelah Engkau beri petunjuk.',
          fr: 'Notre Seigneur, ne laisse pas nos cœurs dévier après que Tu nous aies guidés.',
          tr: 'Rabbimiz! Bizi hidayete erdirdikten sonra kalplerimizi eğriltme.',
          bn: 'হে আমাদের রব! তুমি আমাদের হেদায়েত দেওয়ার পর আমাদের অন্তরকে পথভ্রষ্ট করো না।'
        },
        reference: 'Quran 3:8',
        repeat: 1,
        benefit: 'Protection from deviation after guidance'
      },
      {
        id: 'rb-4',
        arabic: 'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbanaa innanaa aamannaa faghfir lanaa thunoobanaa wa qinaa \'adhaaban-naar.',
        translations: {
          en: 'Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire.',
          ar: 'ربنا إننا آمنا فاغفر لنا ذنوبنا وقنا عذاب النار',
          ta: 'எங்கள் இறைவா! நிச்சயமாக நாங்கள் நம்பிக்கை கொண்டோம். எனவே எங்கள் பாவங்களை மன்னித்து நரக வேதனையிலிருந்து காத்தருள்.',
          ml: 'ഞങ്ങളുടെ രക്ഷിതാവേ, ഞങ്ങൾ വിശ്വസിച്ചിരിക്കുന്നു. ഞങ്ങളുടെ പാപങ്ങൾ മാപ്പുനൽകുക, നരകശിക്ഷയിൽ നിന്ന് രക്ഷിക്കുക.',
          ur: 'اے ہمارے رب! ہم ایمان لائے ہیں تو ہمارے گناہ بخش دے اور ہمیں آگ کے عذاب سے بچا۔',
          hi: 'ऐ हमारे रब! हम ईमान लाए हैं तो हमारे गुनाह बख्श दे और हमें आग के अज़ाब से बचा।',
          id: 'Ya Tuhan kami, sesungguhnya kami telah beriman, maka ampunilah dosa-dosa kami dan lindungilah kami dari siksa neraka.',
          fr: 'Notre Seigneur, nous avons cru, pardonne-nous nos péchés et protège-nous du châtiment du Feu.',
          tr: 'Rabbimiz! Biz iman ettik, günahlarımızı bağışla ve bizi ateş azabından koru.',
          bn: 'হে আমাদের রব! আমরা ঈমান এনেছি, আমাদের গুনাহ মাফ করো এবং জাহান্নামের আযাব থেকে রক্ষা করো।'
        },
        reference: 'Quran 3:16',
        repeat: 1,
        benefit: 'Dua of the believers for forgiveness'
      }
    ]
  },
  {
    id: 'asmaul-husna',
    name: {
      en: '99 Names of Allah (Asmaul Husna)',
      ar: 'أسماء الله الحسنى',
      ta: 'அல்லாஹ்வின் 99 பெயர்கள்',
      ml: 'അല്ലാഹുവിന്റെ 99 നാമങ്ങൾ',
      ur: 'اللہ کے ۹۹ نام',
      hi: 'अल्लाह के ९९ नाम',
      id: '99 Nama Allah',
      fr: '99 Noms d\'Allah',
      tr: 'Allah\'ın 99 İsmi',
      bn: 'আল্লাহর ৯৯ নাম'
    },
    icon: '✨',
    color: '#D4AF37',
    duas: [
      { id: 'ah-1', arabic: 'اللَّهُ', transliteration: 'Allah', translations: { en: 'Allah - The One and Only God', ar: 'الله - الإله الواحد', ta: 'அல்லாஹ் - ஒரே இறைவன்', ml: 'അല്ലാഹു - ഏക ദൈവം', ur: 'اللہ - واحد و یکتا خدا', hi: 'अल्लाह - एकमात्र खुदा', id: 'Allah - Tuhan Yang Maha Esa', fr: 'Allah - Le Dieu Unique', tr: 'Allah - Tek ve Bir İlah', bn: 'আল্লাহ - একমাত্র ইলাহ' }, reference: 'The Supreme Name', repeat: 1, benefit: 'The greatest name of Allah' },
      { id: 'ah-2', arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', translations: { en: 'The Most Gracious', ar: 'الرحمن', ta: 'மிகவும் கருணையுள்ளவன்', ml: 'അതികാരുണികൻ', ur: 'بہت مہربان', hi: 'बहुत मेहरबान', id: 'Yang Maha Pengasih', fr: 'Le Tout Miséricordieux', tr: 'Rahman - Çok Merhametli', bn: 'পরম করুণাময়' }, reference: 'Quran 1:3', repeat: 1, benefit: 'Recite for mercy' },
      { id: 'ah-3', arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', translations: { en: 'The Most Merciful', ar: 'الرحيم', ta: 'மிகவும் இரக்கமுள்ளவன்', ml: 'അതിദയാലു', ur: 'بہت رحم کرنے والا', hi: 'बहुत रहम करने वाला', id: 'Yang Maha Penyayang', fr: 'Le Très Miséricordieux', tr: 'Rahim - Çok Merhamet Eden', bn: 'অতি দয়ালু' }, reference: 'Quran 1:3', repeat: 1, benefit: 'Recite for compassion' },
      { id: 'ah-4', arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', translations: { en: 'The King', ar: 'الملك', ta: 'அரசன்', ml: 'രാജാവ്', ur: 'بادشاہ', hi: 'बादशाह', id: 'Yang Maha Merajai', fr: 'Le Roi', tr: 'Melik - Hükümdar', bn: 'বাদশাহ' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for honor and dignity' },
      { id: 'ah-5', arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', translations: { en: 'The Most Holy', ar: 'القدوس', ta: 'பரிசுத்தமானவன்', ml: 'പരിശുദ്ധൻ', ur: 'پاک', hi: 'पाक', id: 'Yang Maha Suci', fr: 'Le Très Saint', tr: 'Kuddus - Çok Kutsal', bn: 'পবিত্রতম' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for purity of heart' },
      { id: 'ah-6', arabic: 'السَّلاَمُ', transliteration: 'As-Salam', translations: { en: 'The Source of Peace', ar: 'السلام', ta: 'சாந்தியளிப்பவன்', ml: 'സമാധാനത്തിന്റെ ഉറവിടം', ur: 'سلامتی والا', hi: 'सलामती वाला', id: 'Yang Maha Memberi Kesejahteraan', fr: 'La Source de Paix', tr: 'Selam - Barış Kaynağı', bn: 'শান্তিদাতা' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for peace' },
      { id: 'ah-7', arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', translations: { en: 'The Guardian of Faith', ar: 'المؤمن', ta: 'நம்பிக்கை காப்பவன்', ml: 'വിശ്വാസ സംരക്ഷകൻ', ur: 'ایمان دینے والا', hi: 'ईमान देने वाला', id: 'Yang Maha Memberi Keamanan', fr: 'Le Gardien de la Foi', tr: 'Mü\'min - Güven Veren', bn: 'বিশ্বাস রক্ষাকারী' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for faith and security' },
      { id: 'ah-8', arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', translations: { en: 'The Protector', ar: 'المهيمن', ta: 'பாதுகாப்பவன்', ml: 'സംരക്ഷകൻ', ur: 'نگران', hi: 'निगरान', id: 'Yang Maha Memelihara', fr: 'Le Protecteur', tr: 'Müheymin - Koruyucu', bn: 'রক্ষাকর্তা' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for protection' },
      { id: 'ah-9', arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', translations: { en: 'The Almighty', ar: 'العزيز', ta: 'வல்லமை மிகுந்தவன்', ml: 'സർവ്വശക്തൻ', ur: 'زبردست', hi: 'ज़बरदस्त', id: 'Yang Maha Perkasa', fr: 'Le Tout Puissant', tr: 'Aziz - Üstün Güçlü', bn: 'পরাক্রমশালী' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for strength and honor' },
      { id: 'ah-10', arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', translations: { en: 'The Compeller', ar: 'الجبار', ta: 'வலுமை மிகுத்தவன்', ml: 'നിർബന്ധകൻ', ur: 'زبردست کرنے والا', hi: 'जबरदस्त करने वाला', id: 'Yang Maha Memaksa', fr: 'Le Contraignant', tr: 'Cebbar - Mutlak Güç', bn: 'প্রবল' }, reference: 'Quran 59:23', repeat: 1, benefit: 'Recite for mending broken hearts' }
    ]
  },
  {
    id: 'asmaul-anbiya',
    name: {
      en: '25 Prophets (Asmaul Anbiya)',
      ar: '٢٥ نبيًا',
      ta: '25 நபிமார்கள்',
      ml: '25 നബിമാർ',
      ur: '۲۵ انبیاء',
      hi: '२५ नबी',
      id: '25 Nabi',
      fr: '25 Prophètes',
      tr: '25 Peygamber',
      bn: '২৫ নবী'
    },
    icon: '🌙',
    color: '#0EA5E9',
    duas: [
      { id: 'an-1', arabic: 'آدَمُ عَلَيْهِ السَّلاَمُ', transliteration: 'Adam (Alayhis Salam)', translations: { en: 'Adam (AS) - First Prophet, Father of Humanity', ar: 'آدم عليه السلام - أول نبي وأبو البشرية', ta: 'ஆதம் (அலை) - முதல் நபி, மனிதகுலத்தின் தந்தை', ml: 'ആദം (അ) - ആദ്യ നബി, മനുഷ്യരാശിയുടെ പിതാവ്', ur: 'آدم علیہ السلام - پہلے نبی، انسانیت کے والد', hi: 'आदम (अ.स.) - पहले नबी, इंसानियत के वालिद', id: 'Adam AS - Nabi Pertama, Bapak Umat Manusia', fr: 'Adam (psl) - Premier Prophète, Père de l\'humanité', tr: 'Âdem (as) - İlk Peygamber, İnsanlığın Babası', bn: 'আদম (আ.) - প্রথম নবী, মানবজাতির পিতা' }, reference: 'Quran 2:31-39', repeat: 1, benefit: 'First of all prophets' },
      { id: 'an-2', arabic: 'نُوحٌ عَلَيْهِ السَّلاَمُ', transliteration: 'Nuh (Alayhis Salam)', translations: { en: 'Noah (AS) - Preached for 950 years', ar: 'نوح عليه السلام - دعا ٩٥٠ سنة', ta: 'நூஹ் (அலை) - 950 ஆண்டுகள் பிரச்சாரம் செய்தார்', ml: 'നൂഹ് (അ) - 950 വർഷം പ്രചരിപ്പിച്ചു', ur: 'نوح علیہ السلام - ۹۵۰ سال دعوت دی', hi: 'नूह (अ.स.) - ९५० साल दावत दी', id: 'Nuh AS - Berdakwah 950 tahun', fr: 'Noé (psl) - A prêché pendant 950 ans', tr: 'Nuh (as) - 950 yıl davet etti', bn: 'নূহ (আ.) - ৯৫০ বছর দাওয়াত দিয়েছিলেন' }, reference: 'Quran 71:1-28', repeat: 1, benefit: 'Example of patience' },
      { id: 'an-3', arabic: 'إِبْرَاهِيمُ عَلَيْهِ السَّلاَمُ', transliteration: 'Ibrahim (Alayhis Salam)', translations: { en: 'Abraham (AS) - Friend of Allah (Khalilullah)', ar: 'إبراهيم عليه السلام - خليل الله', ta: 'இப்ராஹீம் (அலை) - அல்லாஹ்வின் நண்பர்', ml: 'ഇബ്രാഹീം (അ) - അല്ലാഹുവിന്റെ സുഹൃത്ത്', ur: 'ابراہیم علیہ السلام - خلیل اللہ', hi: 'इब्राहीम (अ.स.) - खलीलुल्लाह', id: 'Ibrahim AS - Kekasih Allah', fr: 'Abraham (psl) - L\'Ami d\'Allah', tr: 'İbrahim (as) - Halilullah', bn: 'ইব্রাহীম (আ.) - খলীলুল্লাহ' }, reference: 'Quran 2:124-141', repeat: 1, benefit: 'Father of Prophets' },
      { id: 'an-4', arabic: 'مُوسَى عَلَيْهِ السَّلاَمُ', transliteration: 'Musa (Alayhis Salam)', translations: { en: 'Moses (AS) - Spoke directly to Allah', ar: 'موسى عليه السلام - كلم الله', ta: 'மூஸா (அலை) - அல்லாஹ்வுடன் நேரடியாக பேசினார்', ml: 'മൂസാ (അ) - അല്ലാഹുവോട് നേരിട്ട് സംസാരിച്ചു', ur: 'موسی علیہ السلام - کلیم اللہ', hi: 'मूसा (अ.स.) - कलीमुल्लाह', id: 'Musa AS - Yang Bicara Langsung dengan Allah', fr: 'Moïse (psl) - A parlé directement à Allah', tr: 'Musa (as) - Kelimullah', bn: 'মূসা (আ.) - কলীমুল্লাহ' }, reference: 'Quran 7:103-171', repeat: 1, benefit: 'Most mentioned prophet in Quran' },
      { id: 'an-5', arabic: 'عِيسَى عَلَيْهِ السَّلاَمُ', transliteration: 'Isa (Alayhis Salam)', translations: { en: 'Jesus (AS) - Spirit of Allah, born miraculously', ar: 'عيسى عليه السلام - روح الله', ta: 'ஈஸா (அலை) - அல்லாஹ்வின் ஆவி', ml: 'ഈസാ (അ) - അല്ലാഹുവിന്റെ ആത്മാവ്', ur: 'عیسی علیہ السلام - روح اللہ', hi: 'ईसा (अ.स.) - रूहुल्लाह', id: 'Isa AS - Ruh Allah', fr: 'Jésus (psl) - Esprit d\'Allah', tr: 'İsa (as) - Ruhullah', bn: 'ঈসা (আ.) - রূহুল্লাহ' }, reference: 'Quran 3:45-59', repeat: 1, benefit: 'Will return before Day of Judgment' },
      { id: 'an-6', arabic: 'مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ', transliteration: 'Muhammad (Sallallahu Alayhi Wasallam)', translations: { en: 'Muhammad ﷺ - The Final Messenger, Seal of Prophets', ar: 'محمد صلى الله عليه وسلم - خاتم الأنبياء', ta: 'முஹம்மது ﷺ - கடைசி தூதர்', ml: 'മുഹമ്മദ് ﷺ - അവസാന ദൂതൻ', ur: 'محمد صلی اللہ علیہ وسلم - خاتم النبیین', hi: 'मुहम्मद ﷺ - आखरी रसूल', id: 'Muhammad ﷺ - Utusan Terakhir', fr: 'Muhammad ﷺ - Le Dernier Messager', tr: 'Muhammed ﷺ - Son Peygamber', bn: 'মুহাম্মদ ﷺ - শেষ রাসূল' }, reference: 'Quran 33:40', repeat: 1, benefit: 'Mercy for all worlds' }
    ]
  },
  {
    id: 'salawat',
    name: {
      en: 'All Types of Salawat',
      ar: 'جميع الصلوات',
      ta: 'அனைத்து சலவாத்கள்',
      ml: 'എല്ലാ സലവാത്തുകളും',
      ur: 'تمام صلوات',
      hi: 'सभी सलवात',
      id: 'Semua Shalawat',
      fr: 'Toutes les Salawat',
      tr: 'Tüm Salavatlar',
      bn: 'সকল সালাওয়াত'
    },
    icon: '💚',
    color: '#059669',
    duas: [
      {
        id: 'sw-1',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliteration: 'Allaahumma salli \'alaa Muhammadin wa \'alaa aali Muhammad, kamaa sallayta \'alaa Ibraaheema wa \'alaa aali Ibraaheem, innaka hameedun majeed.',
        translations: {
          en: 'O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. You are Praiseworthy and Glorious.',
          ar: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد',
          ta: 'இறைவா! முஹம்மது மீதும் முஹம்மது குடும்பத்தார் மீதும் அருள் புரிவாயாக! இப்ராஹீம் மீதும் இப்ராஹீம் குடும்பத்தார் மீதும் அருள் புரிந்தது போல.',
          ml: 'അല്ലാഹുവേ, മുഹമ്മദിന്റെയും മുഹമ്മദിന്റെ കുടുംബത്തിന്റെയും മേൽ അനുഗ്രഹം ചൊരിയുക.',
          ur: 'اے اللہ! محمد ﷺ اور آلِ محمد پر رحمت نازل فرما جیسے تو نے ابراہیم اور آلِ ابراہیم پر رحمت نازل فرمائی۔',
          hi: 'ऐ अल्लाह! मुहम्मद ﷺ और आले मुहम्मद पर रहमत नाज़िल फरमा जैसे तू ने इब्राहीम और आले इब्राहीम पर रहमत नाज़िल फरमाई।',
          id: 'Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad sebagaimana Engkau limpahkan kepada Ibrahim dan keluarga Ibrahim.',
          fr: 'Ô Allah, envoie Tes bénédictions sur Muhammad et la famille de Muhammad, comme Tu les as envoyées sur Ibrahim et la famille d\'Ibrahim.',
          tr: 'Allah\'ım! Muhammed\'e ve Muhammed ailesine rahmet et, İbrahim\'e ve İbrahim ailesine rahmet ettiğin gibi.',
          bn: 'হে আল্লাহ! মুহাম্মদ ﷺ ও আল-ই মুহাম্মদের উপর রহমত নাযিল করো যেমন তুমি ইব্রাহীম ও আল-ই ইব্রাহীমের উপর নাযিল করেছিলে।'
        },
        reference: 'Bukhari - Salawat Ibrahimiyyah',
        repeat: 1,
        benefit: 'The most complete form of Salawat, recited in every prayer'
      },
      {
        id: 'sw-2',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الأَهْوَالِ وَالآفَاتِ',
        transliteration: 'Allaahumma salli \'alaa sayyidinaa Muhammadin salaatun tunjeenaa bihaa min jamee\'il-ahwaali wal-aafaat.',
        translations: {
          en: 'O Allah, send blessings upon our Master Muhammad, a blessing that saves us from all fears and calamities.',
          ar: 'اللهم صل على سيدنا محمد صلاة تنجينا بها من جميع الأهوال والآفات',
          ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது மீது அருள் புரிவாயாக! அந்த அருள் எங்களை அனைத்து அச்சங்களிலிருந்தும் ஆபத்துகளிலிருந்தும் காப்பாற்றட்டும்.',
          ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നായകൻ മുഹമ്മദിന്റെ മേൽ അനുഗ്രഹം ചൊരിയുക. അത് ഞങ്ങളെ എല്ലാ ഭയങ്ങളിൽ നിന്നും ആപത്തുകളിൽ നിന്നും രക്ഷിക്കട്ടെ.',
          ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر ایسی رحمت نازل فرما جس سے ہم تمام خوفوں اور آفات سے نجات پائیں۔',
          hi: 'ऐ अल्लाह! हमारे आका मुहम्मद ﷺ पर ऐसी रहमत नाज़िल फरमा जिससे हम सभी खौफ़ों और आफ़तों से निजात पाएं।',
          id: 'Ya Allah, limpahkanlah shalawat kepada Tuan kami Muhammad, shalawat yang menyelamatkan kami dari segala ketakutan dan bencana.',
          fr: 'Ô Allah, envoie des bénédictions sur notre Maître Muhammad, une bénédiction qui nous sauve de toutes les peurs et calamités.',
          tr: 'Allah\'ım! Efendimiz Muhammed\'e öyle bir salat kıl ki, onunla tüm korkulardan ve afetlerden kurtulalım.',
          bn: 'হে আল্লাহ! আমাদের প্রভু মুহাম্মদের ﷺ উপর এমন সালাওয়াত নাযিল করো যা আমাদের সকল ভয় ও বিপদ থেকে রক্ষা করবে।'
        },
        reference: 'Salawat al-Tunjina/Munjiyah',
        repeat: 1,
        benefit: 'Salawat of deliverance from all calamities'
      },
      {
        id: 'sw-3',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَدَدَ نِعَمِ اللَّهِ وَفَضْلِهِ وَكَرَمِهِ',
        transliteration: 'Allaahumma salli \'alaa sayyidinaa Muhammadin \'adada ni\'amillaahi wa fadlihi wa karamihi.',
        translations: {
          en: 'O Allah, send blessings upon our Master Muhammad, as many as the blessings, grace, and generosity of Allah.',
          ar: 'اللهم صل على سيدنا محمد عدد نعم الله وفضله وكرمه',
          ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது மீது அல்லாஹ்வின் அருட்கொடைகளின் எண்ணிக்கைக்கு சமமாக அருள் புரிவாயாக.',
          ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നായകൻ മുഹമ്മദിന്റെ മേൽ അല്ലാഹുവിന്റെ അനുഗ്രഹങ്ങളുടെ എണ്ണത്തിൽ അനുഗ്രഹം ചൊരിയുക.',
          ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر اللہ کی نعمتوں، فضل اور کرم کی تعداد کے برابر رحمت نازل فرما۔',
          hi: 'ऐ अल्लाह! हमारे आका मुहम्मद ﷺ पर अल्लाह की नेमतों, फज़्ल और करम की तादाद के बराबर रहमत नाज़िल फरमा।',
          id: 'Ya Allah, limpahkanlah shalawat kepada Tuan kami Muhammad sebanyak nikmat, karunia, dan kemurahan Allah.',
          fr: 'Ô Allah, envoie des bénédictions sur notre Maître Muhammad, autant que les bénédictions, la grâce et la générosité d\'Allah.',
          tr: 'Allah\'ım! Efendimiz Muhammed\'e Allah\'ın nimetleri, fazlı ve keremi sayısı kadar salat kıl.',
          bn: 'হে আল্লাহ! আমাদের প্রভু মুহাম্মদের ﷺ উপর আল্লাহর নেয়ামত, ফযল ও করমের সংখ্যার সমান সালাওয়াত নাযিল করো।'
        },
        reference: 'Salawat al-Nariyyah',
        repeat: 1,
        benefit: 'Salawat of infinite reward'
      },
      {
        id: 'sw-4',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا',
        transliteration: 'Allaahumma salli \'alaa sayyidinaa Muhammadin tibbul-quloobi wa dawaa-ihaa.',
        translations: {
          en: 'O Allah, send blessings upon our Master Muhammad, the medicine of hearts and their cure.',
          ar: 'اللهم صل على سيدنا محمد طب القلوب ودوائها',
          ta: 'இறைவா! எங்கள் தலைவர் முஹம்மது மீது அருள் புரிவாயாக! அவர் இருதயங்களின் மருந்து மற்றும் குணப்படுத்துபவர்.',
          ml: 'അല്ലാഹുവേ, ഞങ്ങളുടെ നായകൻ മുഹമ്മദിന്റെ മേൽ അനുഗ്രഹം ചൊരിയുക. അദ്ദേഹം ഹൃദയങ്ങളുടെ ഔഷധമാണ്.',
          ur: 'اے اللہ! ہمارے آقا محمد ﷺ پر رحمت نازل فرما جو دلوں کی دوا اور شفا ہیں۔',
          hi: 'ऐ अल्लाह! हमारे आका मुहम्मद ﷺ पर रहमत नाज़िल फरमा जो दिलों की दवा और शिफा हैं।',
          id: 'Ya Allah, limpahkanlah shalawat kepada Tuan kami Muhammad, obat hati dan penyembuhnya.',
          fr: 'Ô Allah, envoie des bénédictions sur notre Maître Muhammad, le remède des cœurs et leur guérison.',
          tr: 'Allah\'ım! Efendimiz Muhammed\'e salat kıl, O kalplerin ilacı ve şifasıdır.',
          bn: 'হে আল্লাহ! আমাদের প্রভু মুহাম্মদের ﷺ উপর সালাওয়াত নাযিল করো, তিনি অন্তরের ঔষধ ও আরোগ্য।'
        },
        reference: 'Salawat Tibb al-Quloob',
        repeat: 1,
        benefit: 'Healing of the heart and spiritual diseases'
      }
    ]
  },
  {
    id: 'burdah',
    name: {
      en: 'Qasida al-Burdah',
      ar: 'قصيدة البردة',
      ta: 'கஸீதா புர்தா',
      ml: 'ഖസീദതുൽ ബുർദ',
      ur: 'قصیدہ بردہ',
      hi: 'क़सीदा बुर्दा',
      id: 'Qasidah Burdah',
      fr: 'Qasida al-Burdah',
      tr: 'Kaside-i Bürde',
      bn: 'কাসীদা বুরদা'
    },
    icon: '🧣',
    color: '#7C3AED',
    duas: [
      {
        id: 'br-1',
        arabic: 'أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ *** مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ',
        transliteration: 'A min tazakkuri jeeranin bi thi salam *** mazajta dam\'an jara min muqlatin bi dami',
        translations: {
          en: 'Is it from the remembrance of neighbors at Dhi Salam that you have mixed tears flowing from an eye with blood?',
          ar: 'أمن تذكر جيران بذي سلم مزجت دمعا جرى من مقلة بدم',
          ta: 'தி ஸலமில் அண்டை வீட்டாரை நினைவதால் உங்கள் கண்ணீர் இரத்தத்துடன் கலந்ததா?',
          ml: 'ധി സലമിലെ അയൽക്കാരുടെ ഓർമ്മയാൽ നിങ്ങളുടെ കണ്ണുനീർ രക്തവുമായി കലർന്നോ?',
          ur: 'کیا ذی سلم کے پڑوسیوں کی یاد سے آپ نے آنکھ سے آنسو بہائے جو خون سے مل گئے؟',
          hi: 'क्या ज़ी सलम के पड़ोसियों की याद से आपने आंख से आंसू बहाए जो खून से मिल गए?',
          id: 'Apakah karena mengingat tetangga di Dhi Salam engkau mencampur air mata yang mengalir dari mata dengan darah?',
          fr: 'Est-ce du souvenir des voisins à Dhi Salam que tu as mêlé des larmes coulant d\'un œil avec du sang?',
          tr: 'Dhi Selam\'daki komşuları hatırlamaktan dolayı gözünden akan gözyaşını kanla mı karıştırdın?',
          bn: 'ধি সালামের প্রতিবেশীদের স্মরণ থেকে কি তুমি চোখ থেকে অশ্রু প্রবাহিত করেছ যা রক্তের সাথে মিশেছে?'
        },
        reference: 'Imam al-Busiri - Verse 1',
        repeat: 1,
        benefit: 'Opening of the famous Qasida praising Prophet ﷺ'
      },
      {
        id: 'br-2',
        arabic: 'مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ *** وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ',
        transliteration: 'Muhammadun sayyidul-kawnayni wath-thaqalayni *** wal-fareeqayni min \'urbin wa min \'ajami',
        translations: {
          en: 'Muhammad is the Master of both worlds and of the two creations, and of the two groups, Arabs and non-Arabs.',
          ar: 'محمد سيد الكونين والثقلين والفريقين من عرب ومن عجم',
          ta: 'முஹம்மது ﷺ இரு உலகங்களின் தலைவர், இரு படைப்புகளின் தலைவர், அரபு மற்றும் அரபு அல்லாதோரின் தலைவர்.',
          ml: 'മുഹമ്മദ് ﷺ രണ്ട് ലോകങ്ങളുടെയും നേതാവാണ്.',
          ur: 'محمد ﷺ دونوں جہانوں کے سردار ہیں، عرب و عجم کے سردار ہیں۔',
          hi: 'मुहम्मद ﷺ दोनों जहानों के सरदार हैं, अरब व अजम के सरदार हैं।',
          id: 'Muhammad ﷺ adalah pemimpin dua dunia dan dua makhluk, Arab dan non-Arab.',
          fr: 'Muhammad ﷺ est le Maître des deux mondes, des Arabes et des non-Arabes.',
          tr: 'Muhammed ﷺ iki dünyanın, Arap ve Arap olmayanların efendisidir.',
          bn: 'মুহাম্মদ ﷺ দুই জাহানের, আরব ও অনারবের নেতা।'
        },
        reference: 'Imam al-Busiri - Verse on the Prophet\'s supremacy',
        repeat: 1,
        benefit: 'Praising the supreme status of Prophet ﷺ'
      }
    ]
  },
  {
    id: 'rathib',
    name: {
      en: 'Rathib al-Haddad & al-Attas',
      ar: 'الرتيب الحداد والعتاس',
      ta: 'ராதீப் அல்-ஹத்தாத் & அல்-அத்தாஸ்',
      ml: 'റാതിബുൽ ഹദ്ദാദ് & അൽ അത്താസ്',
      ur: 'رتیب الحداد و العتاس',
      hi: 'रतीब अल-हद्दाद व अल-अत्तास',
      id: 'Ratib al-Haddad & al-Attas',
      fr: 'Rathib al-Haddad & al-Attas',
      tr: 'Ratib el-Haddad & el-Attas',
      bn: 'রাতিব আল-হাদ্দাদ ও আল-আত্তাস'
    },
    icon: '🛡️',
    color: '#DC2626',
    duas: [
      {
        id: 'rt-1',
        arabic: 'يَا رَبِّ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
        transliteration: 'Yaa Rabbi salli wa sallim daa\'iman abadan \'alaa habeebika khayril-khalqi kullihim.',
        translations: {
          en: 'O my Lord, send blessings and peace always and forever upon Your beloved, the best of all creation.',
          ar: 'يا رب صل وسلم دائما ابدا على حبيبك خير الخلق كلهم',
          ta: 'இறைவா! உமது நேசர் மீதும், படைப்புகளில் சிறந்தவர் மீதும் என்றென்றும் அருளும் சாந்தியும் பொழிவாயாக!',
          ml: 'രക്ഷിതാവേ, നിന്റെ പ്രിയങ്കരന്റെ മേൽ എന്നെന്നേക്കും അനുഗ്രഹവും സമാധാനവും ചൊരിയുക.',
          ur: 'اے میرے رب! اپنے محبوب ﷺ پر جو تمام مخلوق سے بہتر ہیں، ہمیشہ درود و سلام نازل فرما۔',
          hi: 'ऐ मेरे रब! अपने महबूब ﷺ पर जो सभी मखलूक से बेहतर हैं, हमेशा दरूद व सलाम नाज़िल फरमा।',
          id: 'Ya Tuhanku, limpahkanlah shalawat dan salam selamanya atas kekasih-Mu, sebaik-baik makhluk.',
          fr: 'Ô mon Seigneur, envoie des bénédictions et la paix toujours et à jamais sur Ton bien-aimé, le meilleur de toute la création.',
          tr: 'Ya Rabbi! Habibin\'e, tüm yaratıkların en hayırlısına daima ve ebeden salat ve selam kıl.',
          bn: 'হে আমার রব! তোমার প্রিয়তম ﷺ-এর উপর, সমস্ত সৃষ্টির সর্বোত্তমের উপর চিরকাল সালাওয়াত ও সালাম নাযিল করো।'
        },
        reference: 'Rathib al-Haddad - Opening',
        repeat: 3,
        benefit: 'Opening of Rathib al-Haddad, fortress of daily remembrance'
      },
      {
        id: 'rt-2',
        arabic: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
        transliteration: 'Hasbiyallaahu laa ilaaha illaa huwa \'alayhi tawakkaltu wa huwa Rabbul-\'arshil-\'atheem.',
        translations: {
          en: 'Allah is sufficient for me. There is no god but Him. Upon Him I rely, and He is the Lord of the Mighty Throne.',
          ar: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم',
          ta: 'அல்லாஹ்வே எனக்குப் போதுமானவர். அவனைத் தவிர வணக்கத்திற்குரியவர் இல்லை. அவனையே நான் நம்புகிறேன். அவன் மகத்தான அறையின் இறைவன்.',
          ml: 'അല്ലാഹു എനിക്ക് മതി. അവനല്ലാതെ ആരാധ്യനില്ല. അവനെയാണ് ഞാൻ ആശ്രയിക്കുന്നത്. അവൻ മഹത്തായ സിംഹാസനത്തിന്റെ രക്ഷിതാവ്.',
          ur: 'اللہ میرے لیے کافی ہے۔ اس کے سوا کوئی معبود نہیں۔ میں اسی پر بھروسہ کرتا ہوں اور وہ عرش عظیم کا رب ہے۔',
          hi: 'अल्लाह मेरे लिए काफी है। उसके सिवा कोई माबूद नहीं। मैं उसी पर भरोसा करता हूं और वह अर्श-ए-अज़ीम का रब है।',
          id: 'Cukuplah Allah bagiku. Tiada Tuhan selain Dia. Kepada-Nya aku bertawakkal, Dia Tuhan Arsy yang agung.',
          fr: 'Allah me suffit. Il n\'y a de dieu que Lui. Je me fie à Lui, Il est le Seigneur du Trône immense.',
          tr: 'Allah bana yeter. O\'ndan başka ilah yoktur. O\'na tevekkül ettim. O büyük Arş\'ın Rabbidir.',
          bn: 'আল্লাহ আমার জন্য যথেষ্ট। তিনি ছাড়া কোনো ইলাহ নেই। আমি তাঁর উপর ভরসা করি। তিনি মহান আরশের রব।'
        },
        reference: 'Quran 9:129, Rathib al-Haddad',
        repeat: 7,
        benefit: 'Divine sufficiency and protection'
      }
    ]
  },
  {
    id: 'yaseen',
    name: {
      en: 'Surah Yaseen & Dua',
      ar: 'سورة يس والدعاء',
      ta: 'ஸூரா யாசீன் & துஆ',
      ml: 'സൂറത്ത് യാസീൻ & ദുആ',
      ur: 'سورہ یسین اور دعا',
      hi: 'सूरह यासीन और दुआ',
      id: 'Surah Yasin & Doa',
      fr: 'Sourate Yasin & Dua',
      tr: 'Yasin Suresi & Dua',
      bn: 'সূরা ইয়াসীন ও দোয়া'
    },
    icon: '📗',
    color: '#16A34A',
    duas: [
      {
        id: 'ys-1',
        arabic: 'يس * وَالْقُرْآنِ الْحَكِيمِ * إِنَّكَ لَمِنَ الْمُرْسَلِينَ * عَلَى صِرَاطٍ مُسْتَقِيمٍ',
        transliteration: 'Yaa Seen. Wal-Qur-aanil-Hakeem. Innaka laminal-mursaleen. \'Alaa siraatim-mustaqeem.',
        translations: {
          en: 'Ya-Sin. By the Wise Quran. Indeed you are one of the messengers. Upon a straight path.',
          ar: 'يس والقرآن الحكيم إنك لمن المرسلين على صراط مستقيم',
          ta: 'யாசீன். ஞானமிக்க குர்ஆனைக் கொண்டு சத்தியமாக! நிச்சயமாக நீர் தூதர்களில் ஒருவர். நேர்வழியில் இருக்கிறீர்.',
          ml: 'യാസീൻ. ജ്ഞാനമുറുള്ള ഖുർആൻ ആണ. തീർച്ചയായും നീ ദൂതന്മാരിൽ ഒരാളാണ്. നേർവഴിയിൽ.',
          ur: 'یٰس۔ حکمت والے قرآن کی قسم! بے شک آپ رسولوں میں سے ہیں۔ سیدھے راستے پر۔',
          hi: 'यासीन। हिक्मत वाले कुरआन की कसम! बेशक आप रसूलों में से हैं। सीधे रास्ते पर।',
          id: 'Yaasin. Demi Al-Quran yang penuh hikmah. Sesungguhnya engkau termasuk salah seorang rasul. Di atas jalan yang lurus.',
          fr: 'Ya-Sin. Par le Quran sage. Tu es certes du nombre des messagers. Sur un chemin droit.',
          tr: 'Ya-Sin. Hikmetli Kur\'an\'a yemin olsun. Şüphesiz sen gönderilmiş peygamberlerdensin. Dosdoğru bir yol üzerinde.',
          bn: 'ইয়াসীন। প্রজ্ঞাময় কুরআনের কসম। নিশ্চয় তুমি রাসূলগণের একজন। সরল পথে।'
        },
        reference: 'Quran 36:1-4',
        repeat: 1,
        benefit: 'The Heart of the Quran - recite for the sick and deceased'
      }
    ]
  },
  {
    id: 'everyday-duas',
    name: {
      en: 'Everyday Duas',
      ar: 'أدعية يومية',
      ta: 'தினசரி துஆக்கள்',
      ml: 'ദൈനംദിന ദുആകൾ',
      ur: 'روزمرہ دعائیں',
      hi: 'रोज़मर्रा की दुआएं',
      id: 'Doa Sehari-hari',
      fr: 'Duas Quotidiennes',
      tr: 'Günlük Dualar',
      bn: 'প্রতিদিনের দোয়া'
    },
    icon: '🏠',
    color: '#F97316',
    duas: [
      {
        id: 'ed-1',
        arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
        transliteration: 'Bismillaahi walajnaa wa bismillaahi kharajnaa wa \'alallaahi Rabbinaa tawakkalnaa.',
        translations: {
          en: 'In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we rely.',
          ar: 'بسم الله ولجنا وبسم الله خرجنا وعلى الله ربنا توكلنا',
          ta: 'அல்லாஹ்வின் பெயரால் நுழைகிறோம், அல்லாஹ்வின் பெயரால் வெளியேறுகிறோம், அல்லாஹ்வின் மீதே நம்பிக்கை வைக்கிறோம்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ ഞങ്ങൾ പ്രവേശിക്കുന്നു, അല്ലാഹുവിന്റെ നാമത്തിൽ പുറപ്പെടുന്നു, അല്ലാഹുവിന്റെ മേൽ ആശ്രയിക്കുന്നു.',
          ur: 'اللہ کے نام سے ہم داخل ہوتے ہیں، اللہ کے نام سے خارج ہوتے ہیں، اور اللہ پر بھروسہ کرتے ہیں۔',
          hi: 'अल्लाह के नाम से हम दाखिल होते हैं, अल्लाह के नाम से खारिज होते हैं, और अल्लाह पर भरोसा करते हैं।',
          id: 'Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah Tuhan kami bertawakkal.',
          fr: 'Au nom d\'Allah nous entrons, au nom d\'Allah nous sortons, et sur Allah notre Seigneur nous nous fions.',
          tr: 'Allah\'ın adıyla gireriz, Allah\'ın adıyla çıkarız ve Allah\'a tevekkül ederiz.',
          bn: 'আল্লাহর নামে আমরা প্রবেশ করি, আল্লাহর নামে আমরা বের হই এবং আল্লাহর উপর ভরসা করি।'
        },
        reference: 'Abu Dawud 4/326',
        repeat: 1,
        benefit: 'Entering and leaving the home'
      },
      {
        id: 'ed-2',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ',
        transliteration: 'Allaahumma inni as\'aluka khayral-mawliji wa khayral-makhraji.',
        translations: {
          en: 'O Allah, I ask You for the best of entering and the best of leaving.',
          ar: 'اللهم إني أسألك خير المدخل وخير المخرج',
          ta: 'இறைவா! நுழைவதில் நன்மையையும், வெளியேறுவதில் நன்மையையும் உன்னிடம் கேட்கிறேன்.',
          ml: 'അല്ലാഹുവേ, പ്രവേശനത്തിന്റെയും നിർഗമനത്തിന്റെയും നന്മ ഞാൻ ചോദിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے داخل ہونے اور نکلنے کی بھلائی مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे दाखिल होने और निकलने की भलाई मांगता हूं।',
          id: 'Ya Allah, aku memohon kebaikan masuk dan kebaikan keluar.',
          fr: 'Ô Allah, je Te demande le meilleur en entrant et le meilleur en sortant.',
          tr: 'Allah\'ım! Senden girişin ve çıkışın hayırlısını istiyorum.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে প্রবেশ ও প্রস্থানের উত্তম চাই।'
        },
        reference: 'Abu Dawud 4/326',
        repeat: 1,
        benefit: 'Leaving the home'
      },
      {
        id: 'ed-3',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَطَهِّرْ قَلْبِي وَحَصِّنْ فَرْجِي',
        transliteration: 'Allaahummaghfir lii thambi wa tahhir qalbi wa hassein farji.',
        translations: {
          en: 'O Allah, forgive my sin, purify my heart, and guard my chastity.',
          ar: 'اللهم اغفر لي ذنبي وطهر قلبي وحصن فرجي',
          ta: 'இறைவா! என் பாவத்தை மன்னித்து, என் இருதயத்தை தூய்மைப்படுத்தி, என் கற்பை காத்தருள்.',
          ml: 'അല്ലാഹുവേ, എന്റെ പാപം മാപ്പുനൽകുക, എന്റെ ഹൃദയം ശുദ്ധീകരിക്കുക.',
          ur: 'اے اللہ! میرے گناہ بخش دے، میرے دل کو پاک کر اور میری شرمگاہ کی حفاظت فرما۔',
          hi: 'ऐ अल्लाह! मेरे गुनाह बख्श दे, मेरे दिल को पाक कर और मेरी शर्मगाह की हिफाज़त फरमा।',
          id: 'Ya Allah, ampunilah dosaku, sucikan hatiku, dan jagalah kemaluanku.',
          fr: 'Ô Allah, pardonne mon péché, purifie mon cœur et protège ma chasteté.',
          tr: 'Allah\'ım! Günahımı bağışla, kalbimi temizle ve iffetimi koru.',
          bn: 'হে আল্লাহ! আমার গুনাহ মাফ করো, আমার অন্তর পবিত্র করো এবং আমার লজ্জাস্থান রক্ষা করো।'
        },
        reference: 'At-Tirmidhi 5/480',
        repeat: 1,
        benefit: 'Entering the bathroom/restroom'
      },
      {
        id: 'ed-4',
        arabic: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillaahil-lathee laa yadurru ma\'as-mihi shay\'un fil-ardi wa laa fis-samaa\'i wa huwas-Samee\'ul-\'Aleem.',
        translations: {
          en: 'In the name of Allah, with whose name nothing can harm on earth nor in the heaven, and He is the All-Hearing, the All-Knowing.',
          ar: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم',
          ta: 'பூமியிலும் வானத்திலும் எதுவும் தீங்கு விளைவிக்க முடியாத அல்லாஹ்வின் பெயரால். அவனே செவியேற்பவன், அறிபவன்.',
          ml: 'അല്ലാഹുവിന്റെ നാമത്തിൽ, അവന്റെ നാമത്തോടുകൂടി ഭൂമിയിലും ആകാശത്തും ഒരു ദോഷവും ഉണ്ടാകില്ല.',
          ur: 'اللہ کے نام سے جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں دے سکتی۔ وہ سننے والا جاننے والا ہے۔',
          hi: 'अल्लाह के नाम से जिसके नाम के साथ ज़मीन और आसमान में कोई चीज़ नुकसान नहीं दे सकती। वह सुनने वाला जानने वाला है।',
          id: 'Dengan nama Allah yang bersama nama-Nya tidak ada sesuatu pun yang membahayakan di bumi dan di langit.',
          fr: 'Au nom d\'Allah, avec le nom duquel rien ne peut nuire sur terre ni dans le ciel.',
          tr: 'Allah\'ın adıyla ki, O\'nun adıyla birlikte yer ve gökte hiçbir şey zarar veremez.',
          bn: 'আল্লাহর নামে যাঁর নামের সাথে পৃথিবী ও আকাশে কিছুই ক্ষতি করতে পারে না।'
        },
        reference: 'Abu Dawud 4/323',
        repeat: 3,
        benefit: 'Protection from all harm - morning and evening'
      },
      {
        id: 'ed-5',
        arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ بِسْمِ اللَّهِ',
        transliteration: 'Allaahumma baarik lanaa feemaa razaqtanaa wa qinaa \'adhaaban-naar. Bismillaah.',
        translations: {
          en: 'O Allah, bless us in what You have provided us and protect us from the punishment of the Fire. In the name of Allah.',
          ar: 'اللهم بارك لنا فيما رزقتنا وقنا عذاب النار بسم الله',
          ta: 'இறைவா! நீ எங்களுக்கு அளித்த உணவில் அருள் புரிவாயாக! நரக வேதனையிலிருந்து காத்தருள்!',
          ml: 'അല്ലാഹുവേ, നീ ഞങ്ങൾക്ക് നൽകിയതിൽ അനുഗ്രഹിക്കുക. നരകശിക്ഷയിൽ നിന്ന് രക്ഷിക്കുക.',
          ur: 'اے اللہ! جو تو نے ہمیں رزق دیا ہے اس میں برکت عطا فرما اور آگ کے عذاب سے بچا۔',
          hi: 'ऐ अल्लाह! जो तू ने हमें रिज़्क दिया है उसमें बरकत अता फरमा और आग के अज़ाब से बचा।',
          id: 'Ya Allah, berkahilah kami dalam rezeki yang Engkau berikan dan lindungilah kami dari siksa neraka.',
          fr: 'Ô Allah, bénis-nous dans ce que Tu nous as fourni et protège-nous du châtiment du Feu.',
          tr: 'Allah\'ım! Bize verdiğin rızıkta bereket ver ve bizi ateş azabından koru.',
          bn: 'হে আল্লাহ! তুমি আমাদের যে রিযিক দিয়েছ তাতে বরকত দাও এবং জাহান্নামের আযাব থেকে রক্ষা করো।'
        },
        reference: 'Before eating food',
        repeat: 1,
        benefit: 'Blessing in food and sustenance'
      },
      {
        id: 'ed-6',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ',
        transliteration: 'Allaahumma inni a\'oothu bika minal-hammi wal-hazani wal-\'ajzi wal-kasali.',
        translations: {
          en: 'O Allah, I seek refuge in You from anxiety, grief, weakness, and laziness.',
          ar: 'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل',
          ta: 'இறைவா! கவலை, துக்கம், பலவீனம், சோம்பல் ஆகியவற்றிலிருந்து உன்னிடம் புகல் தேடுகிறேன்.',
          ml: 'അല്ലാഹുവേ, വ്യാകുലത, ദുഃഖം, ദൗർബല്യം, മടിയും എന്നിവയിൽ നിന്ന് ഞാൻ നിന്നെ ആശ്രയിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے فکر، غم، کمزوری اور سستی کی پناہ مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे फिक्र, गम, कमज़ोरी और सुस्ती की पनाह मांगता हूं।',
          id: 'Ya Allah, aku berlindung kepada-Mu dari kecemasan, kesedihan, kelemahan, dan kemalasan.',
          fr: 'Ô Allah, je cherche refuge en Toi contre l\'anxiété, le chagrin, la faiblesse et la paresse.',
          tr: 'Allah\'ım! Endişe, keder, acizlik ve tembellikten Sana sığınırım.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে চিন্তা, দুঃখ, দুর্বলতা ও অলসতা থেকে আশ্রয় চাই।'
        },
        reference: 'Bukhari 7/158',
        repeat: 1,
        benefit: 'Relief from anxiety and depression'
      },
      {
        id: 'ed-7',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ',
        transliteration: 'Allaahumma inni a\'oothu bika minal-ma\'thami wal-maghrami.',
        translations: {
          en: 'O Allah, I seek refuge in You from sin and from debt.',
          ar: 'اللهم إني أعوذ بك من المأثم والمغرم',
          ta: 'இறைவா! பாவத்திலிருந்தும் கடனிலிருந்தும் உன்னிடம் புகல் தேடுகிறேன்.',
          ml: 'അല്ലാഹുവേ, പാപത്തിൽ നിന്നും കടത്തിൽ നിന്നും ഞാൻ നിന്നെ ആശ്രയിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے گناہ اور قرض کی پناہ مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे गुनाह और कर्ज़ की पनाह मांगता हूं।',
          id: 'Ya Allah, aku berlindung kepada-Mu dari dosa dan hutang.',
          fr: 'Ô Allah, je cherche refuge en Toi contre le péché et la dette.',
          tr: 'Allah\'ım! Günah ve borçtan Sana sığınırım.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে গুনাহ ও ঋণ থেকে আশ্রয় চাই।'
        },
        reference: 'Bukhari 1/202',
        repeat: 1,
        benefit: 'Freedom from debts and financial burden'
      },
      {
        id: 'ed-8',
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
        transliteration: 'Rabbish-rah lii sadri wa yassir lii amri.',
        translations: {
          en: 'My Lord, expand my chest and ease my task for me.',
          ar: 'رب اشرح لي صدري ويسر لي أمري',
          ta: 'இறைவா! என் மார்பை விரிவாக்குவாயாக! என் காரியத்தை எளிதாக்குவாயாக!',
          ml: 'രക്ഷിതാവേ, എന്റെ ഹൃദയം വികസിപ്പിക്കുക, എന്റെ കാര്യം എളുപ്പമാക്കുക.',
          ur: 'اے میرے رب! میرا سینہ کھول دے اور میرا کام آسان کر دے۔',
          hi: 'ऐ मेरे रब! मेरा सीना खोल दे और मेरा काम आसान कर दे।',
          id: 'Ya Tuhanku, lapangkanlah dadaku dan mudahkanlah urusanku.',
          fr: 'Mon Seigneur, ouvre-moi la poitrine et facilite ma tâche.',
          tr: 'Rabbim! Göğsümü genişlet ve işimi kolaylaştır.',
          bn: 'হে আমার রব! আমার বক্ষ প্রশস্ত করো এবং আমার কাজ সহজ করো।'
        },
        reference: 'Quran 20:25-26 (Dua of Musa AS)',
        repeat: 1,
        benefit: 'For exams, knowledge, and confidence'
      }
    ]
  },
  {
    id: 'travel',
    name: {
      en: 'Travel (Safar) Duas',
      ar: 'أدعية السفر',
      ta: 'பயண துஆக்கள்',
      ml: 'യാത്രാ ദുആകൾ',
      ur: 'سفر کی دعائیں',
      hi: 'सफर की दुआएं',
      id: 'Doa Perjalanan',
      fr: 'Duas de Voyage',
      tr: 'Seyahat Duaları',
      bn: 'সফরের দোয়া'
    },
    icon: '✈️',
    color: '#0891B2',
    duas: [
      {
        id: 'tr-1',
        arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
        transliteration: 'Subhaanal-lathee sakh-khara lanaa haadhaa wa maa kunnaa lahu muqrineen, wa innaa ilaa Rabbinaa lamunqaliboon.',
        translations: {
          en: 'Glory be to Him Who has subjected this to us, and we could never have it by our efforts. And verily, to our Lord we indeed must return.',
          ar: 'سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون',
          ta: 'இதை நமக்கு வசப்படுத்தியவன் பரிசுத்தம்! இல்லாவிட்டால் நம்மால் இதை அடைய முடியாது. நிச்சயமாக நாம் நம் இறைவனிடமே திரும்புவோம்.',
          ml: 'ഇത് ഞങ്ങൾക്ക് വശത്താക്കിയവൻ പരിശുദ്ധൻ. ഞങ്ങൾ ഞങ്ങളുടെ രക്ഷിതാവിങ്കലേക്ക് മടങ്ങുന്നവരാണ്.',
          ur: 'پاک ہے وہ جس نے اسے ہمارے مسخر کر دیا ورنہ ہم اس کے قابو نہ تھے۔ اور بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں۔',
          hi: 'पाक है जिसने इसे हमारे मुसख्खर कर दिया। बेशक हम अपने रब की तरफ लौटने वाले हैं।',
          id: 'Maha Suci Dzat yang telah menundukkan ini untuk kami, dan sesungguhnya kami akan kembali kepada Tuhan kami.',
          fr: 'Gloire à Celui qui nous a soumis cela, et c\'est vers notre Seigneur que nous retournerons.',
          tr: 'Bunu bize musahhar kılanı tesbih ederim. Şüphesiz Rabbimize döneceğiz.',
          bn: 'পবিত্র তিনি যিনি এটাকে আমাদের বশীভূত করেছেন। নিশ্চয় আমরা আমাদের রবের দিকে ফিরে যাব।'
        },
        reference: 'Muslim 2/998',
        repeat: 1,
        benefit: 'Dua when boarding a vehicle'
      }
    ]
  },
  {
    id: 'parents-family',
    name: {
      en: 'Parents & Family',
      ar: 'الوالدان والعائلة',
      ta: 'பெற்றோர் & குடும்பம்',
      ml: 'മാതാപിതാക്കൾ & കുടുംബം',
      ur: 'والدین اور خاندان',
      hi: 'वालिदैन और खानदान',
      id: 'Orang Tua & Keluarga',
      fr: 'Parents & Famille',
      tr: 'Anne Baba & Aile',
      bn: 'পিতা-মাতা ও পরিবার'
    },
    icon: '👨‍👩‍👧‍👦',
    color: '#E11D48',
    duas: [
      {
        id: 'pf-1',
        arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        transliteration: 'Rabbirhamhuma kamaa rabbayaan sagheeraa.',
        translations: {
          en: 'My Lord, have mercy upon them as they brought me up when I was small.',
          ar: 'رب ارحمهما كما ربياني صغيرا',
          ta: 'இறைவா! நான் சிறுவனாக இருந்தபோது என்னை வளர்த்த அவர்கள் மீது கருணை காத்தருள்.',
          ml: 'രക്ഷിതാവേ, ഞാൻ ചെറുപ്പമായിരിക്കെ എന്നെ വളർത്തിയ അവരോട് കരുണ കാണിക്കണേ.',
          ur: 'اے میرے رب! ان دونوں پر رحم فرما جیسے انہوں نے مجھے بچپن میں پالا۔',
          hi: 'ऐ मेरे रब! उन दोनों पर रहम फरमा जैसे उन्होंने मुझे बचपन में पाला।',
          id: 'Ya Tuhanku, sayangilah keduanya sebagaimana mereka telah mendidikku waktu kecil.',
          fr: 'Mon Seigneur, aie pitié d\'eux comme ils m\'ont élevé quand j\'étais petit.',
          tr: 'Rabbim! Küçüklüğümde beni yetiştirdikleri gibi onlara rahmet et.',
          bn: 'হে আমার রব! তাদের প্রতি দয়া করো যেমন তারা আমাকে ছোটবেলায় লালন-পালন করেছে।'
        },
        reference: 'Quran 17:24',
        repeat: 1,
        benefit: 'Dua for parents - immense reward'
      }
    ]
  },
  {
    id: 'rain-thunder',
    name: {
      en: 'Rain & Thunder',
      ar: 'المطر والرعد',
      ta: 'மழை & இடி',
      ml: 'മഴയും ഇടിയും',
      ur: 'بارش اور گرج',
      hi: 'बारिश और गरज',
      id: 'Hujan & Petir',
      fr: 'Pluie & Tonnerre',
      tr: 'Yağmur & Gök Gürültüsü',
      bn: 'বৃষ্টি ও বজ্রপাত'
    },
    icon: '🌧️',
    color: '#2563EB',
    duas: [
      {
        id: 'ra-1',
        arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
        transliteration: 'Allaahumma sayyiban naafi\'aa.',
        translations: {
          en: 'O Allah, (send) beneficial rain.',
          ar: 'اللهم صيبا نافعا',
          ta: 'இறைவா! பயனுள்ள மழையைத் தந்தருள்.',
          ml: 'അല്ലാഹുവേ, ഗുണകരമായ മഴ തരണമേ.',
          ur: 'اے اللہ! فائدے والی بارش نازل فرما۔',
          hi: 'ऐ अल्लाह! फायदे वाली बारिश नाज़िल फरमा।',
          id: 'Ya Allah, turunkanlah hujan yang bermanfaat.',
          fr: 'Ô Allah, (envoie) une pluie bénéfique.',
          tr: 'Allah\'ım! Faydalı yağmur indir.',
          bn: 'হে আল্লাহ! উপকারী বৃষ্টি দাও।'
        },
        reference: 'Bukhari 1/224',
        repeat: 1,
        benefit: 'When it starts raining'
      },
      {
        id: 'ra-2',
        arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكَةُ مِنْ خِيفَتِهِ',
        transliteration: 'Subhaanal-lathee yusabbihur-ra\'du bihamdihi wal-malaa\'ikatu min khee fatihi.',
        translations: {
          en: 'Glory be to Him Whom thunder glorifies with His praise, and the angels too, out of fear of Him.',
          ar: 'سبحان الذي يسبح الرعد بحمده والملائكة من خيفته',
          ta: 'இடி முழக்கம் அவனது புகழை ஓதிப் பரிசுத்தமாக்குகிறது. வானவர்களும் அவனுக்கு அஞ்சி பரிசுத்தமாக்குகிறார்கள்.',
          ml: 'ഇടിമുഴക്കം അവന്റെ സ്തുതിയോടെ പരിശുദ്ധമാക്കുന്നവൻ പരിശുദ്ധൻ. ഭയത്താൽ മാലാഖമാരും.',
          ur: 'پاک ہے وہ جس کی تسبیح بجلی کرتی ہے اس کی حمد کے ساتھ اور فرشتے بھی اس کے خوف سے۔',
          hi: 'पाक है जिसकी तसबीह बिजली करती है उसकी हम्द के साथ और फरिश्ते भी उसके खौफ से।',
          id: 'Maha Suci Dzat yang guruh bertasbih dengan memuji-Nya, dan para malaikat juga karena takut kepada-Nya.',
          fr: 'Gloire à Celui que le tonnerre glorifie par Sa louange, et les anges aussi par crainte de Lui.',
          tr: 'Gök gürültüsü O\'nu hamd ile tesbih eder, melekler de korkularından. O\'nu tesbih ederiz.',
          bn: 'পবিত্র তিনি যাকে বজ্রধ্বনি তাঁর প্রশংসাসহ তাসবীহ করে এবং ফেরেশতাগণও তাঁর ভয়ে।'
        },
        reference: 'Muwatta Malik 2/992',
        repeat: 1,
        benefit: 'When hearing thunder'
      }
    ]
  },
  {
    id: 'anxiety-depression',
    name: {
      en: 'Anxiety & Depression Relief',
      ar: 'القلق والاكتئاب',
      ta: 'கவலை & மனச்சோர்வு',
      ml: 'ആകുലത & വിഷാദം',
      ur: 'ذہنی دباؤ اور پریشانی',
      hi: 'चिंता और अवसाद',
      id: 'Kecemasan & Depresi',
      fr: 'Anxiété & Dépression',
      tr: 'Kaygı & Depresyon',
      bn: 'উদ্বেগ ও বিষণ্নতা'
    },
    icon: '🧘',
    color: '#7C3AED',
    duas: [
      {
        id: 'ad-1',
        arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ الْعَظِيمُ الْحَلِيمُ لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لاَ إِلَهَ إِلاَّ اللَّهُ رَبُّ السَّمَوَاتِ وَرَبُّ الأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
        transliteration: 'Laa ilaaha illallaahul-\'Atheemul-Haleem. Laa ilaaha illallaahu Rabbul-\'Arshil-\'Atheem. Laa ilaaha illallaahu Rabbus-samaawaati wa Rabbul-ardi wa Rabbul-\'Arshil-Kareem.',
        translations: {
          en: 'There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the Mighty Throne. There is no god but Allah, Lord of the heavens and Lord of the earth, and Lord of the Noble Throne.',
          ar: 'لا إله إلا الله العظيم الحليم لا إله إلا الله رب العرش العظيم لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم',
          ta: 'அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை, மகத்தானவன், பொறுமையுள்ளவன். அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை, மகத்தான அறையின் இறைவன்.',
          ml: 'അല്ലാഹു അല്ലാതെ ആരാധ്യനില്ല, മഹാനും സഹനശീലനുമായവൻ. അല്ലാഹു അല്ലാതെ ആരാധ്യനില്ല, മഹത്തായ സിംഹാസനത്തിന്റെ രക്ഷിതാവ്.',
          ur: 'اللہ کے سوا کوئی معبود نہیں، بڑا اور حلم والا۔ اللہ کے سوا کوئی معبود نہیں، عرش عظیم کا رب۔',
          hi: 'अल्लाह के सिवा कोई माबूद नहीं, बड़ा और हलीम। अल्लाह के सिवा कोई माबूद नहीं, अर्श-ए-अज़ीम का रब।',
          id: 'Tiada Tuhan selain Allah Yang Maha Agung dan Maha Penyantun. Tiada Tuhan selain Allah, Tuhan Arsy yang agung.',
          fr: 'Il n\'y a de dieu qu\'Allah, le Grand, le Clément. Il n\'y a de dieu qu\'Allah, Seigneur du Trône immense.',
          tr: 'Allah\'tan başka ilah yoktur, Ulvi ve Halim. Allah\'tan başka ilah yoktur, Büyük Arş\'ın Rabbi.',
          bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, মহান ও সহনশীল। আল্লাহ ছাড়া কোনো ইলাহ নেই, মহান আরশের রব।'
        },
        reference: 'Bukhari 7/154',
        repeat: 1,
        benefit: 'The Prophet\'s ﷺ dua for distress and anxiety'
      },
      {
        id: 'ad-2',
        arabic: 'اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ',
        transliteration: 'Allaahumma inni \'abduka, ibnu \'abdika, ibnu amatika, naasiyati biyadika, maadin fiyya hukmuka, \'adlun fiyya qadaa\'uka.',
        translations: {
          en: 'O Allah, I am Your slave, son of Your slave, son of Your maidservant. My forelock is in Your hand. Your command is effective upon me, Your decree upon me is just.',
          ar: 'اللهم إني عبدك ابن عبدك ابن أمتك ناصيتي بيدك ماض في حكمك عدل في قضاؤك',
          ta: 'இறைவா! நான் உமது அடிமை, உமது அடிமையின் மகன், உமது அடிமையின் மகளின் மகன். என் முன்னழகு உமது கையில். உமது கட்டளை என் மீது நிறைவேறும்.',
          ml: 'അല്ലാഹുവേ, ഞാൻ നിന്റെ ദാസൻ, നിന്റെ ദാസന്റെ മകൻ. എന്റെ മുൻഭാഗം നിന്റെ കൈയിലാണ്.',
          ur: 'اے اللہ! میں تیرا بندہ ہوں، تیرے بندے کا بیٹا، تیری بندی کا بیٹا۔ میری پیشانی تیرے ہاتھ میں ہے۔',
          hi: 'ऐ अल्लाह! मैं तेरा बंदा हूं, तेरे बंदे का बेटा, तेरी बांदी का बेटा। मेरी पेशानी तेरे हाथ में है।',
          id: 'Ya Allah, sesungguhnya aku hamba-Mu, anak hamba-Mu, anak hamba sahayamu. Ubun-ubunku di tangan-Mu.',
          fr: 'Ô Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Mon front est dans Ta main.',
          tr: 'Allah\'ım! Ben Senin kulunum, kulunun oğlu, cariyenin oğlu. Perçemim elindedir.',
          bn: 'হে আল্লাহ! আমি তোমার বান্দা, তোমার বান্দার ছেলে, তোমার বাঁদীর ছেলে। আমার কপাল তোমার হাতে।'
        },
        reference: 'Ahmad 3/199 (Sayyid al-Istighfar)',
        repeat: 1,
        benefit: 'The master of seeking forgiveness - Sayyid al-Istighfar'
      }
    ]
  },
  {
    id: 'market',
    name: {
      en: 'Market & Shopping',
      ar: 'السوق والتسوق',
      ta: 'சந்தை & வாங்குதல்',
      ml: 'ചന്ത & ഷോപ്പിംഗ്',
      ur: 'بازار اور خریداری',
      hi: 'बाज़ार और खरीदारी',
      id: 'Pasar & Belanja',
      fr: 'Marché & Shopping',
      tr: 'Pazar & Alışveriş',
      bn: 'বাজার ও কেনাকাটা'
    },
    icon: '🛒',
    color: '#CA8A04',
    duas: [
      {
        id: 'mk-1',
        arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamd, yuhyee wa yumeetu wa huwa hayyun laa yamoot, biyadihil-khayr wa huwa \'alaa kulli shay\'in qadeer.',
        translations: {
          en: 'There is no god but Allah alone, without partner. To Him belongs the kingdom and all praise. He gives life and causes death. He is Living and does not die. In His hand is all good, and He is over all things omnipotent.',
          ar: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو حي لا يموت بيده الخير وهو على كل شيء قدير',
          ta: 'அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை, அவனுக்கே அரசு, அவனுக்கே புகழ். அவன் உயிரளிக்கிறான், மரணமளிக்கிறான். அவன் என்றும் வாழ்பவன்.',
          ml: 'അല്ലാഹു അല്ലാതെ ആരാധ്യനില്ല. രാജ്യം അവനുടേതാണ്, സ്തുതി അവനുടേതാണ്. അവൻ ജീവൻ നൽകുന്നു, മരണം നൽകുന്നു.',
          ur: 'اللہ کے سوا کوئی معبود نہیں، بادشاہت اسی کی ہے، حمد اسی کے لیے ہے۔ وہ زندہ کرتا ہے اور مارتا ہے۔',
          hi: 'अल्लाह के सिवा कोई माबूद नहीं, बादशाहत उसी की है, हम्द उसी के लिए है। वह ज़िंदा करता है और मारता है।',
          id: 'Tiada Tuhan selain Allah Yang Maha Esa. Kerajaan milik-Nya, puji-pujian milik-Nya. Dia menghidupkan dan mematikan.',
          fr: 'Il n\'y a de dieu qu\'Allah Seul, sans partenaire. À Lui la royauté et la louange. Il donne la vie et la mort.',
          tr: 'Allah\'tan başka ilah yoktur, tek ve ortağı yoktur. Mülk O\'nundur, hamd O\'na mahsustur. O diriltir ve öldürür.',
          bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, একক, শরীক নেই। রাজত্ব তাঁর, প্রশংসা তাঁর। তিনি জীবিত করেন ও মৃত্যু দেন।'
        },
        reference: 'At-Tirmidhi 5/515',
        repeat: 1,
        benefit: 'Reciting in the market - 1,000,000 good deeds recorded'
      }
    ]
  },
  {
    id: 'sneezing',
    name: {
      en: 'Sneezing & Yawning',
      ar: 'العطاس والتثاؤب',
      ta: 'தும்மல் & கொட்டாவி',
      ml: 'ചുമമലും കൊട്ടാവും',
      ur: 'چھینک اور جمائی',
      hi: 'छींक और जम्हाई',
      id: 'Bersin & Menguap',
      fr: 'Éternuement & Bâillement',
      tr: 'Hapşırma & Esneme',
      bn: 'হাঁচি ও হাই'
    },
    icon: '🤧',
    color: '#0D9488',
    duas: [
      {
        id: 'sn-1',
        arabic: 'الْحَمْدُ لِلَّهِ',
        transliteration: 'Alhamdu lillaah.',
        translations: {
          en: 'All praise is due to Allah.',
          ar: 'الحمد لله',
          ta: 'அனைத்து புகழும் அல்லாஹ்வுக்கே.',
          ml: 'എല്ലാ സ്തുതിയും അല്ലാഹുവിന്.',
          ur: 'تمام تعریف اللہ کے لیے ہے۔',
          hi: 'सारी तारीफ अल्लाह के लिए है।',
          id: 'Segala puji bagi Allah.',
          fr: 'Louange à Allah.',
          tr: 'Hamd Allah\'adır.',
          bn: 'সকল প্রশংসা আল্লাহর।'
        },
        reference: 'Bukhari 10/602',
        repeat: 1,
        benefit: 'Said by the one who sneezes'
      }
    ]
  },
  {
    id: 'sleep-wake',
    name: {
      en: 'Sleeping & Waking',
      ar: 'النوم والاستيقاظ',
      ta: 'தூங்குதல் & எழுதல்',
      ml: 'ഉറക്കവും ഉണർന്നെഴുന്നേൽപ്പും',
      ur: 'سونے اور جاگنے کی دعائیں',
      hi: 'सोने और जागने की दुआएं',
      id: 'Tidur & Bangun',
      fr: 'Dormir & Se Réveiller',
      tr: 'Uyku & Uyanma',
      bn: 'ঘুম ও জাগরণ'
    },
    icon: '🌙',
    color: '#4338CA',
    duas: [
      {
        id: 'sl-1',
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismikallaahumma amootu wa ahyaa.',
        translations: {
          en: 'In Your name, O Allah, I die and I live.',
          ar: 'باسمك اللهم أموت وأحيا',
          ta: 'இறைவா! உமது பெயரால் நான் இறக்கிறேன், உயிர் வாழ்கிறேன்.',
          ml: 'നിന്റെ നാമത്തിൽ, അല്ലാഹുവേ, ഞാൻ മരിക്കുകയും ജീവിക്കുകയും ചെയ്യുന്നു.',
          ur: 'اے اللہ! تیرے نام سے میں مرتا ہوں اور جیتا ہوں۔',
          hi: 'ऐ अल्लाह! तेरे नाम से मैं मरता हूं और जीता हूं।',
          id: 'Dengan nama-Mu, Ya Allah, aku mati dan hidup.',
          fr: 'En Ton nom, Ô Allah, je meurs et je vis.',
          tr: 'Adınla Allah\'ım, ölüyorum ve yaşıyorum.',
          bn: 'তোমার নামে, হে আল্লাহ, আমি মরি ও বাঁচি।'
        },
        reference: 'Bukhari 11/113',
        repeat: 1,
        benefit: 'Before sleeping'
      },
      {
        id: 'sl-2',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        transliteration: 'Alhamdu lillaahil-lathee ahyaanaa ba\'da maa amaatanaa wa ilayhin-nushoor.',
        translations: {
          en: 'All praise is due to Allah who gave us life after He caused us to die, and to Him is the resurrection.',
          ar: 'الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور',
          ta: 'நம்மை இறக்கச் செய்த பின் உயிரளித்த அல்லாஹ்வுக்கே புகழ். அவனிடமே மறுமலர்ச்சி.',
          ml: 'ഞങ്ങളെ മരിപ്പിച്ച ശേഷം ജീവിപ്പിച്ച അല്ലാഹുവിന് സ്തുതി. അവങ്കലേക്കാണ് ഉയിർത്തെഴുന്നേൽപ്പ്.',
          ur: 'تمام تعریف اللہ کے لیے ہے جس نے ہمیں مرنے کے بعد زندہ کیا اور اسی کی طرف لوٹنا ہے۔',
          hi: 'सारी तारीफ अल्लाह के लिए है जिसने हमें मारने के बाद ज़िंदा किया और उसी की तरफ लौटना है।',
          id: 'Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kebangkitan.',
          fr: 'Louange à Allah qui nous a donné la vie après nous avoir fait mourir, et vers Lui est la résurrection.',
          tr: 'Bizi öldükten sonra dirilten Allah\'a hamd olsun. Dönüş O\'nadır.',
          bn: 'আল্লাহর প্রশংসা যিনি আমাদের মৃত্যুর পর জীবিত করেছেন এবং তাঁর দিকেই প্রত্যাবর্তন।'
        },
        reference: 'Bukhari 11/113',
        repeat: 1,
        benefit: 'Upon waking up'
      }
    ]
  },
  {
    id: 'clothes',
    name: {
      en: 'Wearing Clothes',
      ar: 'لبس الملابس',
      ta: 'ஆடை அணிதல்',
      ml: 'വസ്ത്രം ധരിക്കുമ്പോൾ',
      ur: 'کپڑے پہننے کی دعا',
      hi: 'कपड़े पहनने की दुआ',
      id: 'Mengenakan Pakaian',
      fr: 'Port de Vêtements',
      tr: 'Kıyafet Giyme',
      bn: 'পোশাক পরা'
    },
    icon: '👔',
    color: '#B91C1C',
    duas: [
      {
        id: 'cl-1',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ',
        transliteration: 'Alhamdu lillaahil-lathee kasaanee haadhaa wa razaqaneehi min ghayri hawlim-minni wa laa quwwah.',
        translations: {
          en: 'All praise is due to Allah who clothed me with this and provided it for me without any power or might on my part.',
          ar: 'الحمد لله الذي كساني هذا ورزقنيه من حول مني ولا قوة',
          ta: 'இதை எனக்கு உடுத்தியும், என் சக்தியின்றி எனக்கு அளித்தும் அல்லாஹ்வுக்கே புகழ்.',
          ml: 'ഇത് എന്നെ ധരിപ്പിക്കുകയും എന്റെ ശക്തി കൂടാതെ നൽകുകയും ചെയ്ത അല്ലാഹുവിന് സ്തുതി.',
          ur: 'تمام تعریف اللہ کے لیے ہے جس نے مجھے یہ کپڑا پہنایا اور میری کسی طاقت کے بغیر عطا کیا۔',
          hi: 'सारी तारीफ अल्लाह के लिए है जिसने मुझे यह कपड़ा पहनाया और मेरी किसी ताकत के बिना अता किया।',
          id: 'Segala puji bagi Allah yang memakaikan aku pakaian ini dan memberikannya tanpa daya dan kekuatan dariku.',
          fr: 'Louange à Allah qui m\'a vêtu de ceci et me l\'a fourni sans aucun pouvoir de ma part.',
          tr: 'Bana bunu giydiren ve benim hiçbir gücüm olmadan bana veren Allah\'a hamd olsun.',
          bn: 'আল্লাহর প্রশংসা যিনি আমাকে এটি পরিয়েছেন এবং আমার কোনো শক্তি ছাড়াই দিয়েছেন।'
        },
        reference: 'Abu Dawud 4/41',
        repeat: 1,
        benefit: 'When wearing new clothes'
      }
    ]
  },
  {
    id: 'masjid',
    name: {
      en: 'Entering & Leaving Masjid',
      ar: 'دخول وخروج المسجد',
      ta: 'மஸ்ஜித் நுழைதல் & வெளியேறுதல்',
      ml: 'മസ്ജിദിൽ പ്രവേശിക്കുമ്പോൾ',
      ur: 'مسجد میں داخلہ و خروج',
      hi: 'मस्जिद में दाखिल व खारिज',
      id: 'Masuk & Keluar Masjid',
      fr: 'Entrée & Sortie de la Mosquée',
      tr: 'Camiye Giriş & Çıkış',
      bn: 'মসজিদে প্রবেশ ও প্রস্থান'
    },
    icon: '🕌',
    color: '#15803D',
    duas: [
      {
        id: 'ms-1',
        arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        transliteration: 'Allaahummaftah lii abwaaba rahmatik.',
        translations: {
          en: 'O Allah, open the gates of Your mercy for me.',
          ar: 'اللهم افتح لي أبواب رحمتك',
          ta: 'இறைவா! உமது இரக்கத்தின் கதவுகளை எனக்குத் திறந்தருள்.',
          ml: 'അല്ലാഹുവേ, നിന്റെ കാരുണ്യത്തിന്റെ കവാടങ്ങൾ എനിക്ക് തുറന്നുതരണമേ.',
          ur: 'اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔',
          hi: 'ऐ अल्लाह! मेरे लिए अपनी रहमत के दरवाज़े खोल दे।',
          id: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
          fr: 'Ô Allah, ouvre-moi les portes de Ta miséricorde.',
          tr: 'Allah\'ım! Bana rahmet kapılarını aç.',
          bn: 'হে আল্লাহ! আমার জন্য তোমার রহমতের দরজা খুলে দাও।'
        },
        reference: 'Muslim 1/494',
        repeat: 1,
        benefit: 'Entering the mosque - right foot first'
      },
      {
        id: 'ms-2',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
        transliteration: 'Allaahumma inni as\'aluka min fadlik.',
        translations: {
          en: 'O Allah, I ask You from Your bounty.',
          ar: 'اللهم إني أسألك من فضلك',
          ta: 'இறைவா! உமது அருளை உன்னிடம் கேட்கிறேன்.',
          ml: 'അല്ലാഹുവേ, നിന്റെ അനുഗ്രഹം ഞാൻ ചോദിക്കുന്നു.',
          ur: 'اے اللہ! میں تجھ سے تیرا فضل مانگتا ہوں۔',
          hi: 'ऐ अल्लाह! मैं तुझसे तेरा फज़्ल मांगता हूं।',
          id: 'Ya Allah, aku memohon karunia-Mu.',
          fr: 'Ô Allah, je Te demande de Ta grâce.',
          tr: 'Allah\'ım! Senden fazlını istiyorum.',
          bn: 'হে আল্লাহ! আমি তোমার কাছে তোমার ফযল চাই।'
        },
        reference: 'Muslim 1/494',
        repeat: 1,
        benefit: 'Leaving the mosque - left foot first'
      }
    ]
  },
  {
    id: 'dhikr',
    name: {
      en: 'Dhikr & Adhkar',
      ar: 'الذكر والأذكار',
      ta: 'திக்ர் & அட்கார்',
      ml: 'ദിക്ർ & അദ്കാർ',
      ur: 'ذکر و اذکار',
      hi: 'ज़िक्र व अज़कार',
      id: 'Dzikir & Adzkar',
      fr: 'Dhikr & Adhkar',
      tr: 'Zikir & Zikirler',
      bn: 'যিকির ও আযকার'
    },
    icon: '📿',
    color: '#92400E',
    duas: [
      {
        id: 'dh-1',
        arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamd, wa huwa \'alaa kulli shay\'in qadeer.',
        translations: {
          en: 'There is no god but Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
          ar: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
          ta: 'அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை. அவனுக்கே அரசு, புகழ். அவன் எல்லாவற்றின் மீதும் வல்லவன்.',
          ml: 'അല്ലാഹു അല്ലാതെ ആരാധ്യനില്ല. രാജ്യം അവനുടേതാണ്, സ്തുതി അവനുടേതാണ്.',
          ur: 'اللہ کے سوا کوئی معبود نہیں، بادشاہت اسی کی ہے، حمد اسی کے لیے ہے۔',
          hi: 'अल्लाह के सिवा कोई माबूद नहीं, बादशाहत उसी की है, हम्द उसी के लिए है।',
          id: 'Tiada Tuhan selain Allah Yang Maha Esa. Kerajaan milik-Nya, puji-pujian milik-Nya.',
          fr: 'Il n\'y a de dieu qu\'Allah Seul, sans partenaire. À Lui la royauté et la louange.',
          tr: 'Allah\'tan başka ilah yoktur, tek ve ortağı yoktur. Mülk O\'nundur, hamd O\'na mahsustur.',
          bn: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, একক, শরীক নেই। রাজত্ব তাঁর, প্রশংসা তাঁর।'
        },
        reference: 'Bukhari 4/95',
        repeat: 100,
        benefit: '100 times daily = freedom of 10 slaves, 1000 good deeds, 1000 sins erased'
      },
      {
        id: 'dh-2',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
        transliteration: 'Subhaanallaahi wa bihamdihi, Subhaanallaahil-\'Atheem.',
        translations: {
          en: 'Glory be to Allah and His praise. Glory be to Allah, the Magnificent.',
          ar: 'سبحان الله وبحمده سبحان الله العظيم',
          ta: 'அல்லாஹ் பரிசுத்தம்! அவனுடைய புகழுடன். அல்லாஹ் பரிசுத்தம்! மகத்தானவன்.',
          ml: 'അല്ലാഹു പരിശുദ്ധൻ, സ്തുതിയോടെ. അല്ലാഹു പരിശുദ്ധൻ, മഹാനും.',
          ur: 'اللہ پاک ہے اس کی حمد کے ساتھ۔ اللہ پاک ہے، عظیم۔',
          hi: 'अल्लाह पाक है उसकी हम्द के साथ। अल्लाह पाक है, अज़ीम।',
          id: 'Maha Suci Allah dengan pujian-Nya. Maha Suci Allah Yang Agung.',
          fr: 'Gloire à Allah et louange à Lui. Gloire à Allah le Magnifique.',
          tr: 'Allah\'ı hamdiyle tesbih ederim. Allah\'ı tesbih ederim, Ulvi.',
          bn: 'আল্লাহ পবিত্র তাঁর প্রশংসাসহ। আল্লাহ পবিত্র, মহান।'
        },
        reference: 'Bukhari 7/168',
        repeat: 100,
        benefit: 'Two words light on the tongue, heavy on the scales, beloved to the Most Merciful'
      }
    ]
  }
];

// Complete Asmaul Husna (99 Names) - abbreviated for space, full list in component
export const asmaulHusnaComplete = [
  { num: 1, arabic: 'اللَّهُ', transliteration: 'Allah', meaning: { en: 'Allah - The One and Only God', ta: 'அல்லாஹ்', ml: 'അല്ലാഹു', ur: 'اللہ', hi: 'अल्लाह' }},
  { num: 2, arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', meaning: { en: 'The Most Gracious', ta: 'மிகக் கருணையுள்ளவன்', ml: 'അതികാരുണികൻ', ur: 'بہت مہربان', hi: 'बहुत मेहरबान' }},
  { num: 3, arabic: 'الرَّحِيمُ', transliteration: 'Ar-Raheem', meaning: { en: 'The Most Merciful', ta: 'மிக இரக்கமுள்ளவன்', ml: 'അതിദയാലു', ur: 'بہت رحم کرنے والا', hi: 'बहुत रहम करने वाला' }},
  { num: 4, arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaning: { en: 'The King', ta: 'அரசன்', ml: 'രാജാവ്', ur: 'بادشاہ', hi: 'बादशाह' }},
  { num: 5, arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaning: { en: 'The Most Holy', ta: 'பரிசுத்தமானவன்', ml: 'പരിശുദ്ധൻ', ur: 'پاک', hi: 'पाक' }},
  { num: 6, arabic: 'السَّلاَمُ', transliteration: 'As-Salam', meaning: { en: 'The Source of Peace', ta: 'சாந்தியளிப்பவன்', ml: 'സമാധാനത്തിന്റെ ഉറവിടം', ur: 'سلامتی والا', hi: 'सलामती वाला' }},
  { num: 7, arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mu\'min', meaning: { en: 'The Guardian of Faith', ta: 'நம்பிக்கை காப்பவன்', ml: 'വിശ്വാസ സംരക്ഷകൻ', ur: 'ایمان دینے والا', hi: 'ईमान देने वाला' }},
  { num: 8, arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaning: { en: 'The Protector', ta: 'பாதுகாப்பவன்', ml: 'സംരക്ഷകൻ', ur: 'نگران', hi: 'निगरान' }},
  { num: 9, arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaning: { en: 'The Almighty', ta: 'வல்லமை மிகுந்தவன்', ml: 'സർവ്വശക്തൻ', ur: 'زبردست', hi: 'ज़बरदस्त' }},
  { num: 10, arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaning: { en: 'The Compeller', ta: 'வலுமை மிகுத்தவன்', ml: 'നിർബന്ധകൻ', ur: 'زبردست کرنے والا', hi: 'जबरदस्त करने वाला' }},
  { num: 11, arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaning: { en: 'The Supreme', ta: 'பெருமை மிகுந்தவன்', ml: 'മഹത്വമുള്ളവൻ', ur: 'بڑائی والا', hi: 'बड़ाई वाला' }},
  { num: 12, arabic: 'الْخَالِقُ', transliteration: 'Al-Khaliq', meaning: { en: 'The Creator', ta: 'படைப்பவன்', ml: 'സ്രഷ്ടാവ്', ur: 'پیدا کرنے والا', hi: 'पैदा करने वाला' }},
  { num: 13, arabic: 'الْبَارِئُ', transliteration: 'Al-Bari\'', meaning: { en: 'The Maker', ta: 'உருவாக்குபவன்', ml: 'നിർമ്മാതാവ്', ur: 'بنانے والا', hi: 'बनाने वाला' }},
  { num: 14, arabic: 'الْمُصَوِّرُ', transliteration: 'Al-Musawwir', meaning: { en: 'The Fashioner', ta: 'வடிவமைப்பவன்', ml: 'രൂപം നൽകുന്നവൻ', ur: 'صورت بنانے والا', hi: 'सूरत बनाने वाला' }},
  { num: 15, arabic: 'الْغَفَّارُ', transliteration: 'Al-Ghaffar', meaning: { en: 'The Repeatedly Forgiving', ta: 'மீண்டும் மீண்டும் மன்னிப்பவன்', ml: 'ക്ഷമിക്കുന്നവൻ', ur: 'بار بار معاف کرنے والا', hi: 'बार बार माफ करने वाला' }},
  { num: 16, arabic: 'الْقَهَّارُ', transliteration: 'Al-Qahhar', meaning: { en: 'The Subduer', ta: 'ஆதிக்கம் செலுத்துபவன்', ml: 'അടക്കിയാൾുന്നവൻ', ur: 'غالب', hi: 'ग़ालिब' }},
  { num: 17, arabic: 'الْوَهَّابُ', transliteration: 'Al-Wahhab', meaning: { en: 'The Bestower', ta: 'வாரி வழங்குபவன்', ml: 'ദാനം ചെയ്യുന്നവൻ', ur: 'عطا کرنے والا', hi: 'अता करने वाला' }},
  { num: 18, arabic: 'الرَّزَّاقُ', transliteration: 'Ar-Razzaq', meaning: { en: 'The Provider', ta: 'உணவளிப்பவன்', ml: 'ആഹാരം നൽകുന്നവൻ', ur: 'رزق دینے والا', hi: 'रिज़्क देने वाला' }},
  { num: 19, arabic: 'الْفَتَّاحُ', transliteration: 'Al-Fattah', meaning: { en: 'The Opener', ta: 'திறப்பவன்', ml: 'തുറക്കുന്നവൻ', ur: 'کھولنے والا', hi: 'खोलने वाला' }},
  { num: 20, arabic: 'الْعَلِيمُ', transliteration: 'Al-Aleem', meaning: { en: 'The All-Knowing', ta: 'எல்லாம் அறிபவன்', ml: 'സർവ്വജ്ഞൻ', ur: 'جاننے والا', hi: 'जानने वाला' }},
  { num: 21, arabic: 'الْقَابِضُ', transliteration: 'Al-Qabid', meaning: { en: 'The Constrictor', ta: 'சுருக்குபவன்', ml: 'ചുരുക്കുന്നവൻ', ur: 'قبض کرنے والا', hi: 'कब्ज़ करने वाला' }},
  { num: 22, arabic: 'الْبَاسِطُ', transliteration: 'Al-Basit', meaning: { en: 'The Expander', ta: 'விரிவுபடுத்துபவன்', ml: 'വികസിപ്പിക്കുന്നവൻ', ur: 'پھیلانے والا', hi: 'फैलाने वाला' }},
  { num: 23, arabic: 'الْخَافِضُ', transliteration: 'Al-Khafid', meaning: { en: 'The Abaser', ta: 'தாழ்த்துபவன்', ml: 'താഴ്ത്തുന്നവൻ', ur: 'نیچا کرنے والا', hi: 'नीचा करने वाला' }},
  { num: 24, arabic: 'الرَّافِعُ', transliteration: 'Ar-Rafi\'', meaning: { en: 'The Exalter', ta: 'உயர்த்துபவன்', ml: 'ഉയർത്തുന്നവൻ', ur: 'اونچا کرنے والا', hi: 'ऊंचा करने वाला' }},
  { num: 25, arabic: 'الْمُعِزُّ', transliteration: 'Al-Mu\'izz', meaning: { en: 'The Honorer', ta: 'கௌரவிப்பவன்', ml: 'ആദരിക്കുന്നവൻ', ur: 'عزت دینے والا', hi: 'इज़्ज़त देने वाला' }},
  { num: 26, arabic: 'المُذِلُّ', transliteration: 'Al-Muthill', meaning: { en: 'The Humiliator', ta: 'இழிவுபடுத்துபவன்', ml: 'അപമാനിക്കുന്നവൻ', ur: 'ذلیل کرنے والا', hi: 'ज़लील करने वाला' }},
  { num: 27, arabic: 'السَّمِيعُ', transliteration: 'As-Samee\'', meaning: { en: 'The All-Hearing', ta: 'எல்லாம் கேட்பவன்', ml: 'സർവ്വശ്രോതാവ്', ur: 'سننے والا', hi: 'सुनने वाला' }},
  { num: 28, arabic: 'الْبَصِيرُ', transliteration: 'Al-Baseer', meaning: { en: 'The All-Seeing', ta: 'எல்லாம் காண்பவன்', ml: 'സർവ്വദർശി', ur: 'دیکھنے والا', hi: 'देखने वाला' }},
  { num: 29, arabic: 'الْحَكَمُ', transliteration: 'Al-Hakam', meaning: { en: 'The Judge', ta: 'நடுவர்', ml: 'വിധികർത്താവ്', ur: 'فیصلہ کرنے والا', hi: 'फैसला करने वाला' }},
  { num: 30, arabic: 'الْعَدْلُ', transliteration: 'Al-Adl', meaning: { en: 'The Just', ta: 'நீதியுள்ளவன்', ml: 'നീതിമാൻ', ur: 'عادل', hi: 'आदिल' }},
  { num: 31, arabic: 'اللَّطِيفُ', transliteration: 'Al-Lateef', meaning: { en: 'The Subtle One', ta: 'நுட்பமானவன்', ml: 'സൂക്ഷ്മൻ', ur: 'نوازش کرنے والا', hi: 'लतीफ' }},
  { num: 32, arabic: 'الْخَبِيرُ', transliteration: 'Al-Khabeer', meaning: { en: 'The All-Aware', ta: 'எல்லாம் அறிந்தவன்', ml: 'സർവ്വബോധി', ur: 'باخبر', hi: 'बाख़बर' }},
  { num: 33, arabic: 'الْحَلِيمُ', transliteration: 'Al-Haleem', meaning: { en: 'The Forbearing', ta: 'பொறுமையுள்ளவன்', ml: 'സഹനശീലൻ', ur: 'حلیم', hi: 'हलीम' }},
  { num: 34, arabic: 'الْعَظِيمُ', transliteration: 'Al-Atheem', meaning: { en: 'The Magnificent', ta: 'மகத்தானவன்', ml: 'മഹാനും', ur: 'عظیم', hi: 'अज़ीम' }},
  { num: 35, arabic: 'الْغَفُورُ', transliteration: 'Al-Ghafoor', meaning: { en: 'The All-Forgiving', ta: 'மன்னிப்பவன்', ml: 'ക്ഷമിക്കുന്നവൻ', ur: 'بخشنے والا', hi: 'बख्शने वाला' }},
  { num: 36, arabic: 'الشَّكُورُ', transliteration: 'Ash-Shakoor', meaning: { en: 'The Appreciative', ta: 'நன்றியுள்ளவன்', ml: 'നന്ദിയുള്ളവൻ', ur: 'شکر گزار', hi: 'शुक्र गुज़ार' }},
  { num: 37, arabic: 'الْعَلِيُّ', transliteration: 'Al-Aliyy', meaning: { en: 'The Most High', ta: 'மிக உயர்ந்தவன்', ml: 'ഉന്നതൻ', ur: 'بلند', hi: 'बुलंद' }},
  { num: 38, arabic: 'الْكَبِيرُ', transliteration: 'Al-Kabeer', meaning: { en: 'The Most Great', ta: 'மிகப் பெரியவன்', ml: 'വലിയവൻ', ur: 'بڑا', hi: 'बड़ा' }},
  { num: 39, arabic: 'الْحَفِيظُ', transliteration: 'Al-Hafeeth', meaning: { en: 'The Preserver', ta: 'காப்பவன்', ml: 'സംരക്ഷകൻ', ur: 'حفاظت کرنے والا', hi: 'हिफाज़त करने वाला' }},
  { num: 40, arabic: 'الْمُقِيتُ', transliteration: 'Al-Muqeet', meaning: { en: 'The Sustainer', ta: 'உணவளிப்பவன்', ml: 'പോഷകൻ', ur: 'کھلانے والا', hi: 'खिलाने वाला' }},
  { num: 41, arabic: 'الْحَسِيبُ', transliteration: 'Al-Hasib', meaning: { en: 'The Reckoner', ta: 'கணக்கிடுபவன்', ml: 'കണക്കെടുക്കുന്നവൻ', ur: 'حساب لینے والا', hi: 'हिसाब लेने वाला' }},
  { num: 42, arabic: 'الْجَلِيلُ', transliteration: 'Al-Jaleel', meaning: { en: 'The Majestic', ta: 'மகிமை மிகுந்தவன்', ml: 'മഹിമയുള്ളവൻ', ur: 'جلال والا', hi: 'जलाल वाला' }},
  { num: 43, arabic: 'الْكَرِيمُ', transliteration: 'Al-Kareem', meaning: { en: 'The Most Generous', ta: 'மிகக் கொடையுள்ளவன்', ml: 'ദയാലു', ur: 'کریم', hi: 'करीम' }},
  { num: 44, arabic: 'الرَّقِيبُ', transliteration: 'Ar-Raqeeb', meaning: { en: 'The Watchful', ta: 'கண்காணிப்பவன்', ml: 'നിരീക്ഷകൻ', ur: 'نگران', hi: 'निगरान' }},
  { num: 45, arabic: 'الْمُجِيبُ', transliteration: 'Al-Mujeeb', meaning: { en: 'The Responsive', ta: 'பதிலளிப்பவன்', ml: 'പ്രതികരിക്കുന്നവൻ', ur: 'جواب دینے والا', hi: 'जवाब देने वाला' }},
  { num: 46, arabic: 'الْوَاسِعُ', transliteration: 'Al-Waasi\'', meaning: { en: 'The All-Encompassing', ta: 'எல்லாம் வல்லவன்', ml: 'സർവ്വവ്യാപി', ur: 'وسیع', hi: 'वसीअ' }},
  { num: 47, arabic: 'الْحَكِيمُ', transliteration: 'Al-Hakeem', meaning: { en: 'The Most Wise', ta: 'மிக ஞானமுள்ளவன்', ml: 'ജ്ഞാനി', ur: 'حکیم', hi: 'हकीम' }},
  { num: 48, arabic: 'الْوَدُودُ', transliteration: 'Al-Wadood', meaning: { en: 'The Most Loving', ta: 'மிக அன்புள்ளவன்', ml: 'സ്നേഹി', ur: 'محبت کرنے والا', hi: 'मुहब्बत करने वाला' }},
  { num: 49, arabic: 'الْمَجِيدُ', transliteration: 'Al-Majeed', meaning: { en: 'The Most Glorious', ta: 'மகிமை மிகுந்தவன்', ml: 'മഹിമയുള്ളവൻ', ur: 'مجید', hi: 'मजीद' }},
  { num: 50, arabic: 'الْبَاعِثُ', transliteration: 'Al-Ba\'ith', meaning: { en: 'The Resurrector', ta: 'உயிர்ப்பிப்பவன்', ml: 'ഉയിർപ്പിക്കുന്നവൻ', ur: 'उठाने वाला', hi: 'उठाने वाला' }},
  { num: 51, arabic: 'الشَّهِيدُ', transliteration: 'Ash-Shaheed', meaning: { en: 'The Witness', ta: 'சாட்சியாளன்', ml: 'സാക്ഷി', ur: 'گواہ', hi: 'गवाह' }},
  { num: 52, arabic: 'الْحَقُّ', transliteration: 'Al-Haqq', meaning: { en: 'The Truth', ta: 'சத்தியம்', ml: 'സത്യം', ur: 'حق', hi: 'हक़' }},
  { num: 53, arabic: 'الْوَكِيلُ', transliteration: 'Al-Wakeel', meaning: { en: 'The Trustee', ta: 'நம்பிக்கையாளன்', ml: 'കർത്താവ്', ur: 'وکیل', hi: 'वकील' }},
  { num: 54, arabic: 'الْقَوِيُّ', transliteration: 'Al-Qawiyy', meaning: { en: 'The Most Strong', ta: 'மிக வலிமையுள்ளவன்', ml: 'ശക്തൻ', ur: 'طاقتور', hi: 'ताकतवर' }},
  { num: 55, arabic: 'الْمَتِينُ', transliteration: 'Al-Mateen', meaning: { en: 'The Firm', ta: 'உறுதியுள்ளவன்', ml: 'ദൃഢൻ', ur: 'مضبوط', hi: 'मज़बूत' }},
  { num: 56, arabic: 'الْوَلِيُّ', transliteration: 'Al-Waliyy', meaning: { en: 'The Protecting Friend', ta: 'பாதுகாவலன்', ml: 'സഹായി', ur: 'دوست', hi: 'दोस्त' }},
  { num: 57, arabic: 'الْحَمِيدُ', transliteration: 'Al-Hameed', meaning: { en: 'The Praiseworthy', ta: 'புகழப்படத்தக்கவன்', ml: 'സ്തുത്യൻ', ur: 'قابل تعریف', hi: 'काबिले तारीफ' }},
  { num: 58, arabic: 'الْمُحْصِي', transliteration: 'Al-Muhsi', meaning: { en: 'The Counter', ta: 'எண்ணுபவன்', ml: 'എണ്ണുന്നവൻ', ur: 'گننے والا', hi: 'गिनने वाला' }},
  { num: 59, arabic: 'الْمُبْدِئُ', transliteration: 'Al-Mubdi\'', meaning: { en: 'The Originator', ta: 'தொடங்குபவன்', ml: 'ആരംഭിക്കുന്നവൻ', ur: 'شروع کرنے والا', hi: 'शुरू करने वाला' }},
  { num: 60, arabic: 'الْمُعِيدُ', transliteration: 'Al-Mu\'eed', meaning: { en: 'The Restorer', ta: 'மீண்டும் உருவாக்குபவன்', ml: 'പുനഃസ്രഷ്ടാവ്', ur: 'دوبारा بنانے والا', hi: 'दोबारा बनाने वाला' }},
  { num: 61, arabic: 'الْمُحْيِي', transliteration: 'Al-Muhyi', meaning: { en: 'The Giver of Life', ta: 'உயிரளிப்பவன்', ml: 'ജീവൻ നൽകുന്നവൻ', ur: 'زندہ کرنے والا', hi: 'ज़िंदा करने वाला' }},
  { num: 62, arabic: 'الْمُمِيتُ', transliteration: 'Al-Mumeet', meaning: { en: 'The Bringer of Death', ta: 'மரணமளிப்பவன்', ml: 'മരണം നൽകുന്നവൻ', ur: 'مارنے والا', hi: 'मारने वाला' }},
  { num: 63, arabic: 'الْحَيُّ', transliteration: 'Al-Hayy', meaning: { en: 'The Ever Living', ta: 'என்றும் வாழ்பவன்', ml: 'ചിരഞ്ജീവി', ur: 'زندہ', hi: 'ज़िंदा' }},
  { num: 64, arabic: 'الْقَيُّومُ', transliteration: 'Al-Qayyoom', meaning: { en: 'The Self-Existing', ta: 'தானே நிலைத்திருப்பவன்', ml: 'നിലനിൽക്കുന്നവൻ', ur: 'قائم رہنے والا', hi: 'क़ाइम रहने वाला' }},
  { num: 65, arabic: 'الْوَاجِدُ', transliteration: 'Al-Waajid', meaning: { en: 'The Finder', ta: 'கண்டுபிடிப்பவன்', ml: 'കണ്ടെത്തുന്നവൻ', ur: 'پانے والا', hi: 'पाने वाला' }},
  { num: 66, arabic: 'الْمَاجِدُ', transliteration: 'Al-Maajid', meaning: { en: 'The Noble', ta: 'கௌரவமுள்ளவன்', ml: 'മഹിമാന്വിതൻ', ur: 'ماجید', hi: 'माजिद' }},
  { num: 67, arabic: 'الْوَاحِدُ', transliteration: 'Al-Waahid', meaning: { en: 'The One', ta: 'ஒன்றானவன்', ml: 'ഏകൻ', ur: 'ایک', hi: 'एक' }},
  { num: 68, arabic: 'الصَّمَدُ', transliteration: 'As-Samad', meaning: { en: 'The Eternal', ta: 'நிலையானவன்', ml: 'ശാശ്വതൻ', ur: 'ہمیشہ رہنے والا', hi: 'हमेशा रहने वाला' }},
  { num: 69, arabic: 'الْقَادِرُ', transliteration: 'Al-Qaadir', meaning: { en: 'The Able', ta: 'செய்யவல்லவன்', ml: 'ശക്തൻ', ur: 'قادر', hi: 'कादिर' }},
  { num: 70, arabic: 'الْمُقْتَدِرُ', transliteration: 'Al-Muqtadir', meaning: { en: 'The Powerful', ta: 'ஆற்றல் மிகுந்தவன்', ml: 'ശക്തിമാൻ', ur: 'مقتدر', hi: 'मुक़्तदिर' }},
  { num: 71, arabic: 'الْمُقَدِّمُ', transliteration: 'Al-Muqaddim', meaning: { en: 'The Expediter', ta: 'முன்னிலைப்படுத்துபவன்', ml: 'മുന്നോട്ട് വയ്ക്കുന്നവൻ', ur: 'آگے بڑھانے والا', hi: 'आगे बढ़ाने वाला' }},
  { num: 72, arabic: 'الْمُؤَخِّرُ', transliteration: 'Al-Mu\'akhkhir', meaning: { en: 'The Delayer', ta: 'தாமதப்படுத்துபவன்', ml: 'താമസിപ്പിക്കുന്നവൻ', ur: 'پیچھے کرنے والا', hi: 'पीछे करने वाला' }},
  { num: 73, arabic: 'الْأَوَّلُ', transliteration: 'Al-Awwal', meaning: { en: 'The First', ta: 'முதலானவன்', ml: 'ആദ്യം', ur: 'پہلا', hi: 'पहला' }},
  { num: 74, arabic: 'الْآخِرُ', transliteration: 'Al-Aakhir', meaning: { en: 'The Last', ta: 'கடையானவன்', ml: 'അവസാനം', ur: 'آخری', hi: 'आखरी' }},
  { num: 75, arabic: 'الظَّاهِرُ', transliteration: 'Az-Zaahir', meaning: { en: 'The Manifest', ta: 'வெளிப்படையானவன்', ml: 'പ്രകടൻ', ur: 'ظاہر', hi: 'ज़ाहिर' }},
  { num: 76, arabic: 'الْبَاطِنُ', transliteration: 'Al-Baatin', meaning: { en: 'The Hidden', ta: 'மறைந்திருப்பவன்', ml: 'അദൃശ്യൻ', ur: 'باطن', hi: 'बातिन' }},
  { num: 77, arabic: 'الْوَالِي', transliteration: 'Al-Waali', meaning: { en: 'The Governor', ta: 'ஆளுபவன்', ml: 'ഭരണാധികാരി', ur: 'حاکم', hi: 'हाकिम' }},
  { num: 78, arabic: 'الْمُتَعَالِي', transliteration: 'Al-Muta\'ali', meaning: { en: 'The Most Exalted', ta: 'மிக உயர்ந்தவன்', ml: 'പരമോന്നതൻ', ur: 'بلند مرتبہ', hi: 'बुलंद मरतबा' }},
  { num: 79, arabic: 'الْبَرُّ', transliteration: 'Al-Barr', meaning: { en: 'The Source of Goodness', ta: 'நன்மையின் மூலம்', ml: 'നന്മയുടെ ഉറവിടം', ur: 'نیکی کرنے والا', hi: 'नेकी करने वाला' }},
  { num: 80, arabic: 'التَّوَّابُ', transliteration: 'At-Tawwaab', meaning: { en: 'The Acceptor of Repentance', ta: 'பாவமன்னிப்பு ஏற்பவன்', ml: 'പശ്ചാത്താപം സ്വീകരിക്കുന്നവൻ', ur: 'توبہ قبول کرنے والا', hi: 'तौबा क़बूल करने वाला' }},
  { num: 81, arabic: 'الْمُنْتَقِمُ', transliteration: 'Al-Muntaqim', meaning: { en: 'The Avenger', ta: 'பழிவாங்குபவன்', ml: 'പ്രതികാരം ചെയ്യുന്നവൻ', ur: 'انتقام لینے والا', hi: 'इंतेकाम लेने वाला' }},
  { num: 82, arabic: 'العَفُوُّ', transliteration: 'Al-Afuww', meaning: { en: 'The Pardoner', ta: 'மன்னிப்பவன்', ml: 'മാപ്പുനൽകുന്നവൻ', ur: 'معاف کرنے والا', hi: 'माफ करने वाला' }},
  { num: 83, arabic: 'الرَّؤُوفُ', transliteration: 'Ar-Ra\'oof', meaning: { en: 'The Most Kind', ta: 'மிக இரக்கமுள்ளவன்', ml: 'അതിദയാലു', ur: 'بہت مہربان', hi: 'बहुत मेहरबान' }},
  { num: 84, arabic: 'مَالِكُ الْمُلْكِ', transliteration: 'Maalik-ul-Mulk', meaning: { en: 'Owner of Sovereignty', ta: 'ஆட்சியின் உரிமையாளன்', ml: 'അധികാരത്തിന്റെ ഉടമ', ur: 'بادشاہت کا مالک', hi: 'बादशाहत का मालिक' }},
  { num: 85, arabic: 'ذُو الْجَلاَلِ وَالإِكْرَامِ', transliteration: 'Thul-Jalaali wal-Ikraam', meaning: { en: 'Lord of Majesty and Bounty', ta: 'மகிமை & கௌரவத்தின் உடையவன்', ml: 'മഹിമയുടെയും ആദരവിന്റെയും ഉടമ', ur: 'جلال و اکرم والا', hi: 'जलाल व इकराम वाला' }},
  { num: 86, arabic: 'الْمُقْسِطُ', transliteration: 'Al-Muqsit', meaning: { en: 'The Equitable', ta: 'நீதியுள்ளவன்', ml: 'നീതിമാൻ', ur: 'انصاف کرنے والا', hi: 'इंसाफ करने वाला' }},
  { num: 87, arabic: 'الْجَامِعُ', transliteration: 'Al-Jaami\'', meaning: { en: 'The Gatherer', ta: 'ஒன்றுசேர்ப்பவன்', ml: 'ഒന്നിപ്പിക്കുന്നവൻ', ur: 'جمع کرنے والا', hi: 'जमा करने वाला' }},
  { num: 88, arabic: 'الْغَنِيُّ', transliteration: 'Al-Ghaniyy', meaning: { en: 'The Self-Sufficient', ta: 'தானே போதுமானவன்', ml: 'ധനവാൻ', ur: 'بے نیاز', hi: 'बेनियाज़' }},
  { num: 89, arabic: 'الْمُغْنِي', transliteration: 'Al-Mughni', meaning: { en: 'The Enricher', ta: 'செல்வமாக்குபவன்', ml: 'സമ്പന്നനാക്കുന്നവൻ', ur: 'امیر کرنے والا', hi: 'अमीर करने वाला' }},
  { num: 90, arabic: 'الْمَانِعُ', transliteration: 'Al-Maani\'', meaning: { en: 'The Preventer', ta: 'தடுப்பவன்', ml: 'തടയുന്നവൻ', ur: 'روکنے والا', hi: 'रोकने वाला' }},
  { num: 91, arabic: 'الضَّارُّ', transliteration: 'Ad-Daarr', meaning: { en: 'The Distresser', ta: 'தீங்கு விளைவிப்பவன்', ml: 'ദ്രോഹിക്കുന്നവൻ', ur: 'نقصان پہنچانے والا', hi: 'नुकसान पहुंचाने वाला' }},
  { num: 92, arabic: 'النَّافِعُ', transliteration: 'An-Naafi\'', meaning: { en: 'The Benefiter', ta: 'நன்மை செய்பவன்', ml: 'ഗുണം ചെയ്യുന്നവൻ', ur: 'فائدہ پہنچانے والا', hi: 'फायदा पहुंचाने वाला' }},
  { num: 93, arabic: 'النُّورُ', transliteration: 'An-Noor', meaning: { en: 'The Light', ta: 'ஒளி', ml: 'പ്രകാശം', ur: 'نور', hi: 'नूर' }},
  { num: 94, arabic: 'الْهَادِي', transliteration: 'Al-Haadi', meaning: { en: 'The Guide', ta: 'வழிகாட்டுபவன்', ml: 'മാർഗ്ഗദർശി', ur: 'ہدایت دینے والا', hi: 'हिदायत देने वाला' }},
  { num: 95, arabic: 'الْبَدِيعُ', transliteration: 'Al-Badee\'', meaning: { en: 'The Originator', ta: 'புதியதாக படைப்பவன்', ml: 'നവീന സ്രഷ്ടാവ്', ur: 'نئی تخلیق کرنے والا', hi: 'नई तख्लीक करने वाला' }},
  { num: 96, arabic: 'الْبَاقِي', transliteration: 'Al-Baaqi', meaning: { en: 'The Everlasting', ta: 'நிலைத்திருப்பவன்', ml: 'നിലനിൽക്കുന്നവൻ', ur: 'باقی رہنے والا', hi: 'बाकी रहने वाला' }},
  { num: 97, arabic: 'الْوَارِثُ', transliteration: 'Al-Waarith', meaning: { en: 'The Inheritor', ta: 'உரிமை கொள்பவன்', ml: 'അവകാശി', ur: 'وارث', hi: 'वारिस' }},
  { num: 98, arabic: 'الرَّشِيدُ', transliteration: 'Ar-Rasheed', meaning: { en: 'The Guide to the Right Path', ta: 'நேர்வழி காட்டுபவன்', ml: 'നേർവഴി കാട്ടുന്നവൻ', ur: 'راہ دکھانے والا', hi: 'राह दिखाने वाला' }},
  { num: 99, arabic: 'الصَّبُورُ', transliteration: 'As-Saboor', meaning: { en: 'The Most Patient', ta: 'மிகப் பொறுமையுள்ளவன்', ml: 'സഹനശീലൻ', ur: 'صبر کرنے والا', hi: 'सबर करने वाला' }},
];

export const asmaulAnbiyaComplete = [
  { num: 1, name: 'آدَمُ', transliteration: 'Adam (AS)', era: 'Beginning of Humanity', quranic: 'Surah Al-Baqarah 2:30-39', dua: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا' },
  { num: 2, name: 'نُوحٌ', transliteration: 'Nuh (AS)', era: 'Before the Flood', quranic: 'Surah Nuh 71:1-28', dua: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ' },
  { num: 3, name: 'إِدْرِيسُ', transliteration: 'Idris (AS)', era: 'Ancient Times', quranic: 'Surah Maryam 19:56-57', dua: 'Known for wisdom' },
  { num: 4, name: 'هُودٌ', transliteration: 'Hud (AS)', era: 'People of Aad', quranic: 'Surah Hud 11:50-60', dua: 'إِنْ أَنَا إِلَّا نَذِيرٌ' },
  { num: 5, name: 'صَالِحٌ', transliteration: 'Salih (AS)', era: 'People of Thamud', quranic: 'Surah Hud 11:61-68', dua: 'Sign of the She-Camel' },
  { num: 6, name: 'إِبْرَاهِيمُ', transliteration: 'Ibrahim (AS)', era: 'Friend of Allah', quranic: 'Surah Ibrahim 14:35-41', dua: 'رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا' },
  { num: 7, name: 'لُوطٌ', transliteration: 'Lut (AS)', era: 'People of Sodom', quranic: 'Surah Al-Araf 7:80-84', dua: 'رَبِّ انصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ' },
  { num: 8, name: 'إِسْمَاعِيلُ', transliteration: 'Ismail (AS)', era: 'Son of Ibrahim', quranic: 'Surah Maryam 19:54-55', dua: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ' },
  { num: 9, name: 'إِسْحَاقُ', transliteration: 'Ishaq (AS)', era: 'Son of Ibrahim', quranic: 'Surah Hud 11:71-73', dua: 'Blessed progeny' },
  { num: 10, name: 'يَعْقُوبُ', transliteration: 'Yaqub (AS)', era: 'Father of 12 Tribes', quranic: 'Surah Yusuf 12:38', dua: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ' },
  { num: 11, name: 'يُوسُفُ', transliteration: 'Yusuf (AS)', era: 'Egypt - Story of Patience', quranic: 'Surah Yusuf (Full Surah)', dua: 'رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ' },
  { num: 12, name: 'شُعَيْبٌ', transliteration: 'Shuayb (AS)', era: 'People of Madyan', quranic: 'Surah Hud 11:84-95', dua: 'وَعِظَةُ اللَّهِ' },
  { num: 13, name: 'أَيُّوبُ', transliteration: 'Ayyub (AS)', era: 'Example of Patience', quranic: 'Surah Al-Anbiya 21:83-84', dua: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ' },
  { num: 14, name: 'ذُو الْكِفْلِ', transliteration: 'Dhul-Kifl (AS)', era: 'Known for patience', quranic: 'Surah Al-Anbiya 21:85-86', dua: 'Steadfast servant' },
  { num: 15, name: 'مُوسَى', transliteration: 'Musa (AS)', era: 'Exodus from Egypt', quranic: 'Surah Al-Qasas 28:1-88', dua: 'رَبِّ اشْرَحْ لِي صَدْرِي' },
  { num: 16, name: 'هَارُونُ', transliteration: 'Harun (AS)', era: 'Brother of Musa', quranic: 'Surah Ta-Ha 20:29-36', dua: 'Supporter of Musa' },
  { num: 17, name: 'دَاوُودُ', transliteration: 'Dawud (AS)', era: 'King & Prophet', quranic: 'Surah Sad 38:17-26', dua: 'Psalms (Zabur) revealed' },
  { num: 18, name: 'سُلَيْمَانُ', transliteration: 'Sulaiman (AS)', era: 'King of all creation', quranic: 'Surah An-Naml 27:15-44', dua: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ' },
  { num: 19, name: 'إِلْيَاسُ', transliteration: 'Ilyas (AS)', era: 'People of Baalbek', quranic: 'Surah As-Saffat 37:123-132', dua: 'Called to Allah' },
  { num: 20, name: 'الْيَسَعُ', transliteration: 'Al-Yasa (AS)', era: 'Successor of Ilyas', quranic: 'Surah Al-Anam 6:86', dua: 'Among the righteous' },
  { num: 21, name: 'يُونُسُ', transliteration: 'Yunus (AS)', era: 'The Whale', quranic: 'Surah Yunus 10:98', dua: 'لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ' },
  { num: 22, name: 'زَكَرِيَّا', transliteration: 'Zakariyya (AS)', era: 'Father of Yahya', quranic: 'Surah Maryam 19:3-15', dua: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ' },
  { num: 23, name: 'يَحْيَى', transliteration: 'Yahya (AS)', era: 'Contemporary of Isa', quranic: 'Surah Maryam 19:7-15', dua: 'Given wisdom as a child' },
  { num: 24, name: 'عِيسَى', transliteration: 'Isa (AS)', era: 'Before Muhammad ﷺ', quranic: 'Surah Al-Maidah 5:110-120', dua: 'اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً' },
  { num: 25, name: 'مُحَمَّدٌ ﷺ', transliteration: 'Muhammad ﷺ', era: 'Final Messenger', quranic: 'Surah Al-Ahzab 33:40', dua: 'رَبِّ زِدْنِي عِلْمًا' },
];
