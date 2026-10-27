export interface Dua {
  id: string;
  arabic: string;
  transliteration: string;
  translations: Record<string, string>;
  reference?: string;
  repeat?: number;
  benefit?: string;
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

const T = (en: string, ar: string, ta: string, ml: string, ur: string, hi: string, id: string, fr: string, tr: string, bn: string) =>
  ({ en, ar, ta, ml, ur, hi, id, fr, tr, bn });

export const categories: Category[] = [
  {
    id: 'morning-evening',
    name: T('Morning & Evening Adhkar','أذكار الصباح والمساء','காலை & மாலை','രാവിലെയും വൈകുന്നേരവും','صبح و شام کے اذکار','सुबह और शाम','Dzikir Pagi & Petang','Matin & Soir','Sabah & Akşam','সকাল ও সন্ধ্যা'),
    icon: '🌅', color: '#FFD700',
    duas: [
      { id:'me1', arabic:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', transliteration:'Asbahna wa asbahal mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa ala kulli shay\'in qadir', translations:T('We have reached the morning and all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone.','أصبحنا وأصبح الملك لله','காலை அடைந்தோம், ஆட்சி அல்லாஹ்வுக்கே','പ്രഭാതത്തിലെത്തി, രാജ്യം അല്ലാഹുവിന്','صبح کی، بادشاہت اللہ کے لیے','सुबह की, बादशाहत अल्लाह के लिए','Pagi tiba, kerajaan milik Allah','Le matin, la royauté à Allah','Sabahtayız, mülk Allah\'ın','সকাল, রাজত্ব আল্লাহর'), reference:'Muslim 4/2088', repeat:1, benefit:'Protection till evening' },
      { id:'me2', arabic:'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ', transliteration:'Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushur', translations:T('O Allah, by You we reach morning and evening. By You we live and die, to You is resurrection.','اللهم بك أصبحنا وبك أمسينا','இறைவா, உம்மால் காலை மாலை','അല്ലാഹുവേ, നിന്നാൽ പ്രഭാതം','اے اللہ! تجھ سے صبح و شام','ऐ अल्लाह! तुझसे सुबह शाम','Ya Allah, dengan-Mu pagi petang','Ô Allah, par Toi matin et soir','Allah\'ım, Seninle sabah akşam','হে আল্লাহ! তোমার কারণে সকাল সন্ধ্যা'), reference:'Tirmidhi 5/466', repeat:1 },
      { id:'me3', arabic:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ', transliteration:'Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana abduka, wa ana ala ahdika wa wa\'dika mastata\'tu, a\'udhu bika min sharri ma sana\'tu, abu\'u laka bini\'matika alayya wa abu\'u bidhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa ant', translations:T('O Allah, You are my Lord. None has right to be worshipped but You. You created me and I am Your servant. I seek refuge from evil of what I have done.','اللهم أنت ربي لا إله إلا أنت','இறைவா, நீ என் ரப், நீ என்னை படைத்தாய்','അല്ലാഹുവേ, നീ എന്റെ രക്ഷിതാവ്','اے اللہ! تو میرا رب ہے','ऐ अल्लाह! तू मेरा रब है','Ya Allah, Engkau Tuhanku','Ô Allah, Tu es mon Seigneur','Allah\'ım, Sen benim Rabbimsin','হে আল্লাহ! তুমি আমার রব'), reference:'Bukhari 7/150 - Sayyidul Istighfar', repeat:1, benefit:'Master of seeking forgiveness - whoever says it with certainty in the morning and dies before evening enters Paradise' },
      { id:'me4', arabic:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', transliteration:'Subhanallahi wa bihamdihi', translations:T('Glory be to Allah and His is the praise.','سبحان الله وبحمده','அல்லாஹ் தூய்மையானவன், புகழுடன்','അല്ലാഹു പരിശുദ്ധൻ, സ്തുതിയോടെ','اللہ پاک ہے اس کی تعریف کے ساتھ','अल्लाह पाक है उसकी तारीफ़ के साथ','Maha Suci Allah dengan pujian-Nya','Gloire à Allah et Sa louange','Allah\'ı hamd ile tenzih ederim','আল্লাহ পবিত্র তাঁর প্রশংসাসহ'), reference:'Muslim 4/2071', repeat:100, benefit:'Sins forgiven even if like foam of the sea' },
      { id:'me5', arabic:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', transliteration:'La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu wa huwa ala kulli shay\'in qadir', translations:T('None has the right to be worshipped except Allah alone, without partner. His is the dominion and His is the praise.','لا إله إلا الله وحده لا شريك له','இணையற்ற அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை','അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല','اللہ کے سوا کوئی معبود نہیں','अल्लाह के सिवा कोई माबूद नहीं','Tiada tuhan selain Allah','Nul ne mérite d\'être adoré sauf Allah','Allah\'tan başka ilah yoktur','আল্লাহ ছাড়া কোনো ইলাহ নেই'), reference:'Muslim 4/2071', repeat:10, benefit:'Reward of freeing 4 slaves from Ismail' },
      { id:'me6', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', transliteration:'Allahumma inni as\'alukal-\'afwa wal-\'afiyah fid-dunya wal-akhirah', translations:T('O Allah, I ask You for pardon and well-being in this life and the next.','اللهم إني أسألك العفو والعافية','இறைவா, மன்னிப்பையும் நலத்தையும் கேட்கிறேன்','അല്ലാഹുവേ, മാപ്പും സുഖവും ചോദിക്കുന്നു','اے اللہ! معافی اور عافیت مانگتا ہوں','ऐ अल्लाह! माफ़ी और आफ़ियत मांगता हूं','Ya Allah, aku minta ampun dan keselamatan','Ô Allah, je Te demande pardon et bien-être','Allah\'ım! Af ve afiyet istiyorum','হে আল্লাহ! ক্ষমা ও নিরাপত্তা চাই'), reference:'Ibn Majah 2/332', repeat:3, benefit:'Comprehensive dua for this world and next' },
      { id:'me7', arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا', transliteration:'Allahumma inni a\'udhu bika min \'ilmin la yanfa\' wa min qalbin la yakhsha\' wa min nafsin la tashba\' wa min da\'watin la yustajabu laha', translations:T('O Allah, I seek refuge from knowledge that does not benefit, from a heart that does not fear You, from a soul that is never satisfied, from a supplication that is not answered.','اللهم إني أعوذ بك من علم لا ينفع','இறைவா, பயனற்ற அறிவிலிருந்து புகலளிக்கிறேன்','അല്ലാഹുവേ, പ്രയോജനമില്ലാത്ത വിദ്യയിൽ നിന്ന്','اے اللہ! بے فائدہ علم سے پناہ مانگتا ہوں','ऐ अल्लाह! बेफ़ायदा इल्म से पनाह','Ya Allah, aku berlindung dari ilmu yang tidak bermanfaat','Ô Allah, je cherche refuge du savoir inutile','Allah\'ım! Faydasız ilimden','হে আল্লাহ! অকেজো জ্ঞান থেকে'), reference:'Muslim 4/2084', repeat:1 },
      { id:'me8', arabic:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', transliteration:'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i wa huwas-sami\'ul-\'alim', translations:T('In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is the All-Hearing, the All-Knowing.','بسم الله الذي لا يضر مع اسمه','அல்லாஹ்வின் பெயரால், அவன் பெயருடன் எதுவும் தீங்கு செய்யாது','അല്ലാഹുവിന്റെ നാമത്തിൽ, അവന്റെ നാമത്തോടെ ഒരു ദ്രോഹവുമില്ല','اللہ کے نام سے جس کے نام کے ساتھ کوئی نقصان نہیں','अल्लाह के नाम से जिसके नाम के साथ कोई नुक़सान नहीं','Dengan nama Allah yang tidak berbahaya','Au nom d\'Allah avec lequel rien ne nuit','Allah\'ın adıyla ki O\'nun adıyla hiçbir şey zarar vermez','আল্লাহর নামে যাঁর নামের সাথে কোনো ক্ষতি নেই'), reference:'Abu Dawud 4/323, Tirmidhi 5/465', repeat:3, benefit:'Nothing will harm you' },
      { id:'me9', arabic:'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ ﷺ نَبِيًّا', transliteration:'Raditu billahi rabba, wa bil-islami dinan, wa bi Muhammadin nabiyya', translations:T('I am pleased with Allah as Lord, with Islam as religion, and with Muhammad ﷺ as Prophet.','رضيت بالله ربا وبالإسلام دينا','அல்லாஹ்வை ரப்பாகவும், இஸ்லாமை தீனாகவும்','അല്ലാഹുവിനെ രക്ഷിതാവായും, ഇസ്ലാമിനെ ദീനായും','اللہ کو رب، اسلام کو دین','अल्लाह को रब, इस्लाम को दीन','Aku ridha Allah sebagai Tuhan','Je suis satisfait d\'Allah comme Seigneur','Allah\'ı Rab, İslam\'ı din','আল্লাহকে রব, ইসলামকে দ্বীন'), reference:'Abu Dawud 4/318', repeat:3, benefit:'Allah will be pleased with him' },
      { id:'me10', arabic:'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', transliteration:'Ya Hayyu Ya Qayyum, bi-rahmatika astaghith, aslih li sha\'ni kullahu wa la takilni ila nafsi tarfata \'ayn', translations:T('O Ever Living, O Self-sustaining, by Your mercy I seek help. Rectify all my affairs and do not leave me to myself even for the blink of an eye.','يا حي يا قيوم برحمتك أستغيث','ஓ நிரந்தர வாழ்வா, உன் இரக்கத்தால் உதவி தேடுகிறேൻ','ഓ നിത്യജീവാ, നിന്റെ കാരുണ്യത്താൽ','اے زندہ، اے قائم، تیری رحمت سے','ऐ ज़िंदा, ऐ क़य्यूम, तेरी रहमत से','Wahai Yang Maha Hidup, dengan rahmat-Mu','Ô Vivant, Ô Subsistant, par Ta miséricorde','Ey Hayy, Ey Kayyum, rahmetinle','হে চিরঞ্জীব, তোমার রহমতে'), reference:'Mustadrak al-Hakim 1/545', repeat:1, benefit:'Comprehensive morning dua' },
    ]
  },
  {
    id: 'after-salah',
    name: T('After Every Salah','بعد كل صلاة','தொழுகைக்குப் பின்','ഓരോ നമസ്കാരത്തിന് ശേഷം','ہر نماز کے بعد','हर नमाज़ के बाद','Setiap Setelah Shalat','Après Chaque Prière','Her Namazdan Sonra','প্রতি নামাযের পরে'),
    icon: '🕌', color: '#4CAF50',
    duas: [
      { id:'as1', arabic:'أَسْتَغْفِرُ اللَّهَ', transliteration:'Astaghfirullah', translations:T('I seek forgiveness from Allah.','أستغفر الله','அல்லாஹ்விடம் மன்னிப்பு','ഞാൻ പാപമോചനം തേടുന്നു','میں اللہ سے مغفرت مانگتا ہوں','मैं अल्लाह से माफ़ी मांगता हूं','Aku memohon ampun','Je demande pardon','Bağışlanma diliyorum','ক্ষমা প্রার্থনা'), reference:'Muslim 1/414', repeat:3 },
      { id:'as2', arabic:'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', transliteration:'Allahumma antas-salam wa minkas-salam tabarakta ya dhal-jalali wal-ikram', translations:T('O Allah, You are Peace and from You is peace. Blessed are You, O Owner of Majesty and Honor.','اللهم أنت السلام ومنك السلام','இறைவா, நீ சாந்தி, உன்னிடம் சாந்தி','അല്ലാഹുവേ, നീ സമാധാനം','اے اللہ! تو سلامتی ہے','ऐ अल्लाह! तू सलामती है','Ya Allah, Engkau Damai','Ô Allah, Tu es la Paix','Allah\'ım, Sen Selam\'sın','হে আল্লাহ! তুমি শান্তি'), reference:'Muslim 1/415', repeat:1 },
      { id:'as3', arabic:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ', transliteration:'La ilaha illallahu wahdahu la sharika lah... Allahumma la mani\'a lima a\'tayt...', translations:T('None has right to be worshipped except Allah alone. O Allah, none can prevent what You give and none can give what You prevent.','لا إله إلا الله وحده لا شريك له','இணையற்ற அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இല്ല','അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല','اللہ کے سوا کوئی معبود نہیں','अल्लाह के सिवा कोई माबूद नहीं','Tiada tuhan selain Allah','Nul ne mérite d\'être adoré sauf Allah','Allah\'tan başka ilah yoktur','আল্লাহ ছাড়া কোনো ইলাহ নেই'), reference:'Bukhari 1/255, Muslim 1/414', repeat:1 },
      { id:'as4', arabic:'سُبْحَانَ اللَّهِ', transliteration:'Subhanallah', translations:T('Glory be to Allah.','سبحان الله','அல்லாஹ் தூய்மையானவன்','അല്ലാഹു പരിശുദ്ധൻ','اللہ پاک','अल्लाह पाक','Maha Suci Allah','Gloire à Allah','Allah\'ı tenzih','আল্লাহ পবিত্র'), reference:'Muslim 1/415', repeat:33 },
      { id:'as5', arabic:'الْحَمْدُ لِلَّهِ', transliteration:'Alhamdulillah', translations:T('All praise is for Allah.','الحمد لله','எல்லா புகழும் அல்லாஹ்வுக்கே','എല്ലാ സ്തുതിയും അല്ലാഹുവിന്','تمام تعریفیں اللہ کے لیے','सब तारीफ़ अल्लाह के लिए','Segala puji bagi Allah','Toute louange à Allah','Hamd Allah\'a','সব প্রশংসা আল্লাহর'), reference:'Muslim 1/415', repeat:33 },
      { id:'as6', arabic:'اللَّهُ أَكْبَرُ', transliteration:'Allahu Akbar', translations:T('Allah is the Greatest.','الله أكبر','அல்லாஹ் மிகப் பெரியவன்','അല്ലാഹു ഏറ്റവും വലിയവൻ','اللہ سب سے بڑا','अल्लाह सबसे बड़ा','Allah Maha Besar','Allah est le Plus Grand','Allah en büyüktür','আল্লাহ সর্বশ্রেষ্ঠ'), reference:'Muslim 1/415', repeat:34 },
      { id:'as7', arabic:'آيَةُ الْكُرْسِيُّ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ', transliteration:'Allahu la ilaha illa huwal-hayyul-qayyum, la ta\'khudhuhu sinatun wa la nawm...', translations:T('Ayat al-Kursi: Allah! There is no god but He, the Living, the Self-subsisting. No slumber can seize Him nor sleep...','اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ','அல்லாஹ்! அவனைத் தவிர வணக்கத்திற்குரியவர் இல்லை','അല്ലാഹു, അവനല്ലാതെ ആരാധനാർഹനില്ല','اللہ! اس کے سوا کوئی معبود نہیں','अल्लाह! उसके सिवा कोई माबूद नहीं','Allah, tiada tuhan selain Dia','Allah! Nul dieu sauf Lui','Allah, O\'ndan başka ilah yok','আল্লাহ! তিনি ছাড়া কোনো ইলাহ নেই'), reference:'Quran 2:255', repeat:1, benefit:'Whoever recites after every prayer, nothing prevents him from entering Paradise except death' },
      { id:'as8', arabic:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', transliteration:'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik', translations:T('O Allah, help me to remember You, give thanks, and worship You well.','اللهم أعني على ذكرك وشكرك','இறைவா, உன்னை நினைவு கூர உதவுவாயாக','അല്ലാഹുവേ, നിന്നെ ഓർക്കാൻ സഹായിക്കണമേ','اے اللہ! ذکر و شکر میں مدد','ऐ अल्लाह! ज़िक्र व शुक्र में मदद','Ya Allah, bantulah aku mengingat-Mu','Ô Allah, aide-moi à Te mentionner','Allah\'ım, zikrinde yardım et','হে আল্লাহ! স্মরণে সাহায্য করো'), reference:'Abu Dawud 2/85', repeat:1 },
    ]
  },
  {
    id: 'sickness',
    name: T('Sickness & Healing','المرض والشفاء','நோய் & குணம்','രോഗവും ചികിത്സയും','بیماری اور شفا','बीमारी और शिफ़ा','Penyakit & Kesembuhan','Maladie & Guérison','Hastalık & Şifa','রোগ ও আরোগ্য'),
    icon: '💊', color: '#E91E63',
    duas: [
      { id:'sh1', arabic:'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا', transliteration:'Adhhibil-ba\'s Rabban-nas, ishfi antash-shafi, la shifa\'a illa shifa\'uk, shifa\'an la yughadiru saqaman', translations:T('Remove the affliction, O Lord of mankind. Grant healing. There is no healing except Your healing, a healing that leaves no illness.','اذهب البأس رب الناس','துயரத்தை நீக்கு, மனிதர்களின் இறைவா','ദുരിതം നീക്കണമേ','تکلیف دور فرما اے لوگوں کے رب','तकलीफ़ दूर फरमा ऐ लोगों के रब','Hilangkan penderitaan','Éloigne la souffrance','Sikintiyi gider','কষ্ট দূর করো'), reference:'Bukhari 7/164', repeat:3, benefit:'Master supplication for healing' },
      { id:'sh2', arabic:'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ وَاشْفِهِ وَأَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا', transliteration:'Allahumma Rabban-nas, adhhibil-ba\'s, washfihi wa antash-shafi, la shifa\'a illa shifa\'uk', translations:T('O Allah, Lord of mankind, remove the affliction and grant him healing.','اللهم رب الناس أذهب البأس','இறைவா, மனிதர்களின் இறைவா, துயரத்தை நீக்கு','അല്ലാഹുവേ, മനുഷ്യരുടെ രക്ഷിതാവേ','اے اللہ! لوگوں کے رب! تکلیف دور','ऐ अल्लाह! लोगों के रब! तकलीफ़ दूर','Ya Allah, Tuhan manusia, hilangkan','Ô Allah, Seigneur des hommes, éloigne','Allah\'ım, insanların Rabbi! Sikintiyi gider','হে আল্লাহ! মানুষদের রব! কষ্ট দূর'), reference:'Bukhari 7/164', repeat:3 },
      { id:'sh3', arabic:'أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ', transliteration:'A\'udhu bi\'izzatillahi wa qudratihi min sharri ma ajidu wa uhadhir', translations:T('I seek refuge in the might and power of Allah from the evil of what I feel and worry about.','أعوذ بعزة الله وقدرته','அல்லாஹ்வின் வல்லமையில் புகலளிக்கிறேன்','അല്ലാഹുവിന്റെ ശക്തിയിൽ അഭയം','اللہ کی عزت اور قدرت کی پناہ','अल्लाह की इज़्ज़त और क़ुदरत की पनाह','Aku berlindung dengan kemuliaan Allah','Je cherche refuge dans la puissance d\'Allah','Allah\'ın izzet ve kudretine sığınırım','আল্লাহর ক্ষমতায় আশ্রয়'), reference:'Muslim 4/1728', repeat:3, benefit:'Place hand on pain and recite' },
      { id:'sh4', arabic:'بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ', transliteration:'Bismillahi arqik min kulli shay\'in yu\'dhik, min sharri kulli nafsin aw \'ayni hasidin, Allahu yashfik', translations:T('In the name of Allah I perform Ruqyah for you, from everything that harms you, from evil of every soul or envious eye.','بسم الله أرقيك','அல்லாஹ்வின் பெயரால் ருக்யா','അല്ലാഹുവിന്റെ നാമത്തിൽ രുഖ്‌യ','بسم الله أرقيك','बिस्मिल्लाह अर्कीक','Dengan nama Allah aku meruqyah','Au nom d\'Allah je fais la Ruqyah','Allah\'ın adıyla rukye','আল্লাহর নামে রুকইয়া'), reference:'Muslim 4/1716', repeat:3, benefit:'Prophetic Ruqyah' },
      { id:'sh5', arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الْأَسْقَامِ', transliteration:'Allahumma inni a\'udhu bika minal-barasi wal-jununi wal-judhami wa min sayyi\'il-asqam', translations:T('O Allah, I seek refuge in You from leprosy, insanity, elephantiasis, and from the worst of diseases.','اللهم إني أعوذ بك من البرص والجنون','வெண் குஷ்டம், பித்து, தொழுநோய்','വെളുപ്പ്, ഭ്രാന്ത്, കുഷ്ഠം','کوڑھ، پاگل پن، جذام','कोढ़, पागलपन, जुज़ाम','penyakit kusta, gila, kusta','lèpre, folie, éléphantiasis','baras, cinnet, cüzzam','কুষ্ঠ, পাগলামি, কুষ্ঠ'), reference:'Abu Dawud 2/155', repeat:1 },
    ]
  },
  {
    id: 'death',
    name: T('Death & Graveyard','الموت والقبور','மரணம் & கல்லறை','മരണവും ഖബ്റും','موت اور قبرستان','मौत और क़ब्रिस्तान','Kematian & Kuburan','Mort & Cimetière','Ölüm & Mezarlık','মৃত্যু ও কবরস্থান'),
    icon: '🕊️', color: '#607D8B',
    duas: [
      { id:'dc1', arabic:'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا', transliteration:'Inna lillahi wa inna ilayhi raji\'un. Allahumma\'jurni fi musibati wa akhlif li khayran minha', translations:T('Indeed we belong to Allah and to Him we return. O Allah, reward me in my affliction and replace it with something better.','إنا لله وإنا إليه راجعون','நாம் அல்லாஹ்வுக்கே, அவனிடமே திரும்புவோம்','ഞങ്ങൾ അല്ലാഹുവിന്റേതാണ്','بیشک ہم اللہ کے لیے ہیں','बेशक हम अल्लाह के लिए हैं','Sesungguhnya kami milik Allah','Nous appartenons à Allah','Biz Allah\'ınız','নিশ্চয়ই আমরা আল্লাহর'), reference:'Muslim 2/632', repeat:1, benefit:'Recite upon hearing death news' },
      { id:'dc2', arabic:'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ', transliteration:'Allahummaghfir lahu warhamhu wa\'afihi wa\'fu \'anh wa akrim nuzulahu wa wassi\' mudkhalahu waghsilhu bil-ma\'i wath-thalji wal-barad', translations:T('O Allah, forgive him, have mercy on him, grant him well-being, pardon him, honor his reception, widen his entrance, wash him with water, snow and hail.','اللهم اغفر له وارحمه','இறைவா, மன்னிப்பளி, இரக்கம் காட்டு','അല്ലാഹുവേ, പൊറുക്കണമേ','اے اللہ! بخش دے، رحم فرما','ऐ अल्लाह! बख्श दे, रहम फरमा','Ya Allah, ampunilah dia','Ô Allah, pardonne-lui','Allah\'ım! Bağışla, merhamet et','হে আল্লাহ! ক্ষমা করো, দয়া করো'), reference:'Muslim 2/663', repeat:1 },
      { id:'dc3', arabic:'السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ', transliteration:'As-salamu \'alaykum ahlad-diyari minal-mu\'minina wal-muslimin, wa inna in sha\'a Allahu bikum lahiqun, nas\'alullaha lana wa lakumul-\'afiyah', translations:T('Peace be upon you, O people of the dwellings, believers and Muslims. We shall, if Allah wills, join you. We ask Allah for well-being for us and you.','السلام عليكم أهل الديار','அஸ்ஸலாமு அலைக்கும், ஈமான்கொண்ட மக்களே','സമാധാനം നിങ്ങളുടെ മേലുള്ളൂ','سلامتی ہو تم پر اے مومنوں','सलाम हो तुम पर ऐ मोमिनो','Keselamatan atas kalian','Paix sur vous, ô gens des demeures','Selam olsun size ey müminler','সালাম তোমাদের প্রতি হে মুমিনগণ'), reference:'Muslim 2/671', repeat:1, benefit:'When entering cemetery' },
      { id:'dc4', arabic:'اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا', transliteration:'Allahummaghfir lihayyina wa mayyitina wa shahidina wa gha\'ibina wa saghirina wa kabirina wa dhakarina wa unthana', translations:T('O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females.','اللهم اغفر لحينا وميتنا','எங்கள் உயிருள்ளவர்களையும் இறந்தவர்களையும் மன்னிப்பாயாக','ഞങ്ങളുടെ ജീവിക്കുന്നവരെയും മരിച്ചവരെയും','اے اللہ! ہمارے زندوں اور مردوں کو بخش','ऐ अल्लाह! हमारे ज़िंदा और मुर्दा को बख्श','Ya Allah, ampuni yang hidup dan mati','Ô Allah, pardonne nos vivants et nos morts','Allah\'ım! Dirilerimizi ve ölülerimizi bağışla','হে আল্লাহ! জীবিত ও মৃতকে ক্ষমা করো'), reference:'Abu Dawud 3/211', repeat:1, benefit:'Janazah prayer dua' },
    ]
  },
  {
    id: 'rabbana',
    name: T('40 Rabbana Duas','٤٠ دعاء ربنا','40 ரப்பானா','40 റബ്ബനാ','۴۰ ربانا','४० रब्बाना','40 Doa Rabbana','40 Duas Rabbana','40 Rabbana Duası','৪০ রাব্বানা'),
    icon: '📖', color: '#9C27B0',
    duas: [
      { id:'rb1', arabic:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', transliteration:'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar', translations:T('Our Lord, give us good in this world and good in the Hereafter, and protect us from the Fire.','ربنا آتنا في الدنيا حسنة','எங்கள் இறைவா, உலகில் நன்மை','ഞങ്ങളുടെ രക്ഷിതാവേ, ലോകത്ത് നന്മ','اے ہمارے رب! دنیا میں بھلائی','ऐ हमारे रब! दुनिया में भलाई','Ya Tuhan kami, kebaikan di dunia','Notre Seigneur, le bien ici-bas','Rabbimiz! Dünyada iyilik','হে রব! দুনিয়ায় কল্যাণ'), reference:'Quran 2:201', repeat:1 },
      { id:'rb2', arabic:'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا', transliteration:'Rabbana la tu\'akhidhna in nasina aw akhta\'na', translations:T('Our Lord, do not impose blame upon us if we forget or err.','ربنا لا تؤاخذنا إن نسينا','இறைவാ, மறந்தால் குற்றம் சாட்டாதே','ഞങ്ങളെ ശിക്ഷിക്കരുതേ','اگر بھول جائیں تو پکڑ نہ','भूल जाएं तो पकड़ मत','jangan hukum kami jika lupa','ne nous châtie pas si nous oublions','unutursak sorumlu tutma','ভুল হলে পাকড়াও করো না'), reference:'Quran 2:286', repeat:1 },
      { id:'rb3', arabic:'رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا', transliteration:'Rabbana wa la tahmil \'alayna isran kama hamaltahu \'alal-ladhina min qablina', translations:T('Our Lord, do not lay upon us a burden like that which You laid upon those before us.','ربنا ولا تحمل علينا إصرا','எங்கள் மீது முந்தையோர் மீது சுமையை சுமத்தாதே','ഞങ്ങളുടെ മേൽ ഭാരം വയ്ക്കരുതേ','ہم پر بوجھ نہ ڈال','हम पर बोझ न डाल','jangan bebani kami seperti umat sebelum','ne nous charge pas comme ceux d\'avant','öncekilere yüklediğin gibi yükle','আগেরদের মতো বোঝা দিও না'), reference:'Quran 2:286', repeat:1 },
      { id:'rb4', arabic:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ', transliteration:'Rabbana wa la tuhammilna ma la taqata lana bih', translations:T('Our Lord, do not burden us with that which we have no ability to bear.','ربنا ولا تحملنا ما لا طاقة لنا به','சக்தி இல்லாததை சுமத்தாதே','ശക്തിയില്ലാത്തത് ചുമത്തരുതേ','جو ہماری طاقت سے باہر ہو','जो हमारी ताक़त से बाहर हो','yang kami tidak mampu memikul','ce que nous ne pouvons porter','gücümüzün yetmediğini yükle','যা আমাদের শক্তি নেই তা দিও না'), reference:'Quran 2:286', repeat:1 },
      { id:'rb5', arabic:'رَبَّنَا وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا', transliteration:'Rabbana wa\'fu \'anna waghfir lana warhamna', translations:T('Our Lord, pardon us, forgive us, and have mercy upon us.','ربنا واعف عنا واغفر لنا','எங்களை மன்னி, மன்னிப்பளி, இரக்கம் காட்டு','ഞങ്ങളോട് പൊറുക്കണമേ','معاف فرما، بخش دے، رحم فرما','माफ़ फरमा, बख्श दे, रहम फरमा','maafkan kami, ampuni kami','pardonne-nous, fais-nous miséricorde','bizi affet, bağışla, merhamet et','মাফ করো, ক্ষমা করো, দয়া করো'), reference:'Quran 2:286', repeat:1 },
      { id:'rb6', arabic:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً', transliteration:'Rabbana la tuzigh qulubana ba\'da idh hadaytana wa hab lana min ladunka rahmah', translations:T('Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself.','ربنا لا تزغ قلوبنا بعد إذ هديتنا','நீ வழிகாட்டிய பின் இருதயங்களை வழி கேட்கச் செய்யாதே','ഹൃദയങ്ങൾ വഴിമാറരുതേ','ہدایت کے بعد دلوں کو ٹیڑھا نہ کر','हिदायत के बाद दिलों को टेढ़ा न कर','jangan palingkan hati kami setelah petunjuk','ne détourne pas nos cœurs après guidance','hidayetten sonra kalplerimizi eğriltme','হেদায়েতের পর অন্তর বিচ্যুত করো না'), reference:'Quran 3:8', repeat:1 },
      { id:'rb7', arabic:'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ', transliteration:'Rabbana innana amanna faghfir lana dhunubana wa qina \'adhaban-nar', translations:T('Our Lord, we have believed, so forgive us our sins and protect us from the Fire.','ربنا إننا آمنا فاغفر لنا','நாங்கள் ஈமான் கொண்டோம், பாவங்களை மன்னி','ഞങ്ങൾ വിശ്വസിച്ചിരിക്കുന്നു','ہم ایمان لائے بخش دے','हम ईमान लाए बख्श दे','kami telah beriman ampunilah','nous avons cru, pardonne-nous','iman ettik, bağışla','আমরা ঈমান এনেছি ক্ষমা করো'), reference:'Quran 3:16', repeat:1 },
      { id:'rb8', arabic:'رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ', transliteration:'Rabbana innaka jami\'un-nasi liyamin la rayba fih', translations:T('Our Lord, You will gather the people on a Day about which there is no doubt.','ربنا إنك جامع الناس ليوم','நீ மக்களை ஒரு நாளில் கூடுவாய்','നീ ജനങ്ങളെ ഒരു ദിവസം കൂട്ടിച്ചേർക്കും','تو لوگوں کو ایک دن جمع کرے گا','तू लोगों को एक दिन जमा करेगा','Engkau akan mengumpulkan manusia','Tu rassembleras les gens','İnsanları bir günde toplayacaksın','তুমি মানুষদের একদিন একত্র করবে'), reference:'Quran 3:9', repeat:1 },
      { id:'rb9', arabic:'رَبَّنَا إِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ', transliteration:'Rabbana innaka man tudkhilin-nara faqad akhzaytah', translations:T('Our Lord, whoever You admit to the Fire, You have disgraced him.','ربنا إنك من تدخل النار','நரகில் நுழைப்பவரை இழிவுபடுத்துவாய்','നരകത്തിൽ പ്രവേശിപ്പിക്കുന്നവനെ','جسے آگ میں ڈالے ذلیل کرے','जिसे आग में डाले ज़लील करे','siapa yang Engkau masukkan api','celui que Tu fais entrer au Feu','ateşe soktuğunu rezil edersin','যাকে আগুনে দাও তাকে অপমান'), reference:'Quran 3:192', repeat:1 },
      { id:'rb10', arabic:'رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ', transliteration:'Rabbana amanna bima anzalta wattaba\'nar-rasula faktubna ma\'ash-shahidin', translations:T('Our Lord, we have believed in what You revealed and followed the Messenger, so register us among the witnesses.','ربنا آمنا بما أنزلت','நீ இறக்கியதை நாங்கள் ஈமான் கொண்டோம்','നീ ഇറക്കിയതിൽ ഞങ്ങൾ വിശ്വസിച്ചു','جو تو نے نازل کیا ہم ایمان لائے','जो तू ने नाज़िल किया हम ईमान लाए','kami beriman pada yang Engkau turunkan','nous avons cru à ce que Tu as révélé','indirdiğine iman ettik','তুমি নাযিল করেছ তাতে ঈমান'), reference:'Quran 3:53', repeat:1 },
      { id:'rb11', arabic:'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', transliteration:'Rabbana ghfir lana dhunubana wa israffana fi amrina wa thabbit aqdamana wansurna \'alal-qawmil-kafirin', translations:T('Our Lord, forgive us our sins and our excess in our affair, and firm our feet and help us against the disbelieving people.','ربنا اغفر لنا ذنوبنا وإسرافنا','எங்கள் பாவங்களையும் மிகைப்பையும் மன்னி','ഞങ്ങളുടെ പാപങ്ങളും അതിക്രമവും','ہماری خطائیں اور زیادتی بخش','हमारी ख़ताएं और ज़्यादती बख्श','ampuni dosa dan berlebihan kami','pardonne nos péchés et excès','günahlarımızı ve taşkınlığımızı bağışla','গুনাহ ও বাড়াবাড়ি ক্ষমা করো'), reference:'Quran 3:147', repeat:1 },
      { id:'rb12', arabic:'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', transliteration:'Rabbana la tu\'akhidhna... fa-nsurna \'alal-qawmil-kafirin', translations:T('Our Lord, do not burden us... help us against the disbelieving people. (Complete 2:286)','ربنا لا تؤاخذنا...','முழுமையான 2:286','സമ്പൂർണ്ണ 2:286','مکمل 2:286','पूरा 2:286','lengkap 2:286','complet 2:286','tam 2:286','সম্পূর্ণ 2:286'), reference:'Quran 2:286', repeat:1, benefit:'Complete ending of Al-Baqarah' },
      { id:'rb13', arabic:'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ', transliteration:'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin', translations:T('Our Lord, we have wronged ourselves. If You do not forgive us and have mercy, we shall be losers.','ربنا ظلمنا أنفسنا','நாங்கள் எங்களை அநியாயம் செய்தோம்','ഞങ്ങൾ ഞങ്ങളോട് അക്രമം ചെയ്തു','ہم نے اپنے آپ پر ظلم کیا','हम ने अपने आप पर ज़ुल्म किया','kami menganiaya diri kami','nous avons été injustes envers nous','nefsimize zulmettik','আমরা নিজেদের প্রতি জুলম'), reference:'Quran 7:23 - Adam & Hawwa', repeat:1 },
      { id:'rb14', arabic:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', transliteration:'Rabbana afrigh \'alayna sabran wa thabbit aqdamana wansurna \'alal-qawmil-kafirin', translations:T('Our Lord, pour upon us patience, firm our feet, and help us against the disbelievers.','ربنا أفرغ علينا صبرا','எங்கள் மீது பொறையை வார்ச்சுவாயாக','ഞങ്ങളുടെ മേൽ ക്ഷമ ചൊരിയണമേ','ہم پر صبر برسا','हम पर सब्र बरसा','curahkan kesabaran atas kami','verse sur nous la patience','üzerimize sabır dök','আমাদের উপর ধৈর্য ঢালো'), reference:'Quran 7:126', repeat:1 },
      { id:'rb15', arabic:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ', transliteration:'Rabbana la taj\'alna fitnatan lil-qawmiz-zalimin', translations:T('Our Lord, do not make us a trial for the wrongdoing people.','ربنا لا تجعلنا فتنة للقوم الظالمين','அநியாயக்காரர்களுக்கு சோதனையாக ஆக்காதே','ഞങ്ങളെ പരീക്ഷണമാക്കരുതേ','ظالموں کے لیے فتنہ نہ بنا','ज़ालिमों के लिए फ़ित्ना न बना','jangan jadikan kami fitnah','ne fais pas de nous une épreuve','bizi zalimler için fitna yapো','জালিমদের জন্য ফিতনা করো না'), reference:'Quran 10:85', repeat:1 },
      { id:'rb16', arabic:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ', transliteration:'Rabbanaftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatihin', translations:T('Our Lord, decide between us and our people in truth, and You are the best of deciders.','ربنا افتح بيننا وبين قومنا بالحق','உண்மையில் நீ தீர்ப்பளிப்பாயாக','സത്യത്തോടെ ഞങ്ങൾക്കിടയിൽ വിധിക്കണമേ','حق کے ساتھ ہمارے اور قوم کے درمیان فیصلہ','हक़ के साथ हम और क़ौम के दरमियान फ़ैसला','putuskan antara kami dan kaum kami','décide entre nous et notre peuple','hakkımızla hüküm ver','সত্য দিয়ে আমাদের মধ্যে ফয়সালা'), reference:'Quran 7:89', repeat:1 },
      { id:'rb17', arabic:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ', transliteration:'Rabbana afrigh \'alayna sabran wa tawaffana muslimin', translations:T('Our Lord, pour upon us patience and cause us to die as Muslims.','ربنا أفرغ علينا صبرا وتوفنا مسلمين','பொறையை வார்ச்சி, முஸ்லிமாக மரணமளிக்க','ക്ഷമ ചൊരിയുക, മുസ്ലിമായി മരണം','صبر عطا فرما اور مسلمان مرنا','सब्र अता फरमा और मुस्लिम मरना','curahkan kesabaran, wafatkan sebagai Muslim','verse patience, fais-nous mourir musulmans','sabır dök, Müslüman olarak vefat','ধৈর্য ঢালো, মুসলিম হিসেবে মৃত্যু দাও'), reference:'Quran 7:126', repeat:1 },
      { id:'rb18', arabic:'رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ', transliteration:'Rabbana la taj\'alna ma\'al-qawmiz-zalimin', translations:T('Our Lord, do not place us among the wrongdoing people.','ربنا لا تجعلنا مع القوم الظالمين','அநியாயக்காரர்களுடன் சேர்க்காதே','ഞങ്ങളെ അക്രമികളോട് ചേർക്കരുതേ','ظالم قوم کے ساتھ نہ کر','ज़ालिम क़ौम के साथ न कर','jangan bersama kaum zalim','ne nous mets pas avec les injustes','zalim kavimle birlikte yapma','জালিমদের সাথে করো না'), reference:'Quran 6:47', repeat:1 },
      { id:'rb19', arabic:'رَبِّ اجْعَلْ هَذَا الْبَلَدَ آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ', transliteration:'Rabbij\'al hadhal-balada amanan warzuq ahlahu minath-thamarat', translations:T('My Lord, make this city secure and provide its people with fruits.','رب اجعل هذا البلد آمنا','இந்த நகரை அமைதியாக ஆக்குவாயாக','ഈ നഗരം സുരക്ഷിതമാക്കണമേ','اس شہر کو امن دے','इस शहर को अमन दे','jadikan negeri ini aman','rends cette ville sûre','bu şehri güvenli kıl','এই শহরকে নিরাপদ করো'), reference:'Quran 2:126 - Ibrahim', repeat:1 },
      { id:'rb20', arabic:'رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ', transliteration:'Rabbana innaka ta\'lamu ma nukhfi wa ma nu\'lin', translations:T('Our Lord, You know what we conceal and what we reveal.','ربنا إنك تعلم ما نخفي وما نعلن','நாங்கள் மறைப்பதையும் வெளிப்படுத்துவதையும் நீ அறிவாய்','നീ മറച്ചതും പ്രകടമായതും അറിയുന്നു','تو چھپائے اور ظاہر کو جانتا है','तू छुपाए और ज़ाहिर को जानता है','Engkau tahu yang kami sembunyikan','Tu sais ce que nous cachons','gizlediğimizi ve açığa vurduğumuzu bilirsin','তুমি জানো আমরা যা লুকাই ও প্রকাশ'), reference:'Quran 14:38 - Ibrahim', repeat:1 },
      { id:'rb21', arabic:'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي', transliteration:'Rabbij\'alni muqimas-salati wa min dhurriyyati', translations:T('My Lord, make me an establisher of prayer, and from my descendants.','رب اجعلني مقيم الصلاة','தொழுகையை நிலைநாட்டுபவனாக ஆக்குவாயாக','നമസ്കാരം സ്ഥാപിക്കുന്നവനാക്കണമേ','نماز قائم کرنے والا بنا','नमाज़ क़ायम करने वाला बना','jadikan aku pendiri salat','fais de moi un établisseur de prière','namazı ikame eden kıl','আমাকে নামায কায়িমকারী করো'), reference:'Quran 14:40 - Ibrahim', repeat:1 },
      { id:'rb22', arabic:'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ', transliteration:'Rabbana ghfir li wa liwalidayya wa lilmu\'minina yawma yaqumul-hisab', translations:T('Our Lord, forgive me and my parents and the believers on the Day of Reckoning.','ربنا اغفر لي ولوالدي وللمؤمنين','என்னையும் பெற்றோரையும் மு\'மின்களையும் மன்னிപ്പாயாக','എന്നെയും മാതാപിതാക്കളെയും','مجھے اور والدین اور مومنوں کو بخش','मुझे और वालिदैन और मोमिनों को बख्श','ampuni aku, orang tuaku, dan orang beriman','pardonne-moi, mes parents et les croyants','beni, anne-babamı ve müminleri bağışla','আমাকে, পিতা-মাতাকে ও মুমিনদের ক্ষমা'), reference:'Quran 14:41 - Ibrahim', repeat:1 },
      { id:'rb23', arabic:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ', transliteration:'Rabbi hab li hukman wa alhiqni bis-salihin', translations:T('My Lord, grant me authority and join me with the righteous.','رب هب لي حكما وألحقني بالصالحين','ஞானம் அளி, நல்லோருடன் சேர்','ജ്ഞാനം നൽകി സദ്ജനങ്ങളോട് ചേർക്കണമേ','حکمت دے اور نیکوں میں شامل کر','हुकम दे और नेक लोगों में शामिल कर','berikan hikmah, gabungkan dengan orang saleh','donne-moi l\'autorité, joins-moi aux justes','hüküm ver, salihlerle birleştir','হিকমত দাও, সৎদের সাথে মিলিত করো'), reference:'Quran 26:83 - Ibrahim', repeat:1 },
      { id:'rb24', arabic:'رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي', transliteration:'Rabbi inni zalamtu nafsi faghfir li', translations:T('My Lord, I have wronged myself, so forgive me.','رب إني ظلمت نفسي فاغفر لي','என்னை அநியாயம் செய்தேன், மன்னிப்பாயாக','ഞാൻ എനിക്കോട് അക്രമം ചെയ്തു','میں نے اپنے پر ظلم کیا माफ़','मैं ने अपने पर ज़ुल्म किया माफ़','aku menganiaya diriku, ampunilah','je me suis fait du tort, pardonne-moi','nefsime zulmettim bağışla','আমি নিজে জুলম করেছি ক্ষমা করো'), reference:'Quran 28:16 - Musa', repeat:1 },
      { id:'rb25', arabic:'رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ', transliteration:'Rabbi najjini minal-qawmiz-zalimin', translations:T('My Lord, save me from the wrongdoing people.','رب نجني من القوم الظالمين','அநியாயக்காரர்களிடமிருந்து காப்பாயாக','അക്രമികളിൽ നിന്ന് രക്ഷിക്കണമേ','ظالم قوم سے بچا','ज़ालिम क़ौम से बचा','selamatkan dari kaum zalim','sauve-moi des injustes','zalim kavimden kurtar','জালিমদের থেকে রক্ষা'), reference:'Quran 28:21 - Musa', repeat:1 },
      { id:'rb26', arabic:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي', transliteration:'Rabbishrah li sadri wa yassir li amri wahlul \'uqdatan min lisani yafqahu qawli', translations:T('My Lord, expand my chest, ease my task, and untie the knot from my tongue that they may understand my speech.','رب اشرح لي صدري','என் மார்பை விரிவுபடுத்துவாயாக','എന്റെ നെഞ്ച് വിശലമാക്കണമേ','میرا سینہ کھول','मेरा सीना खोल','lapangkan dadaku','ouvre-moi la poitrine','göğsümü aç','আমার বক্ষ প্রসারিত করো'), reference:'Quran 20:25-28 - Musa', repeat:1 },
      { id:'rb27', arabic:'رَبِّ زِدْنِي عِلْمًا', transliteration:'Rabbi zidni \'ilma', translations:T('My Lord, increase me in knowledge.','رب زدني علما','எனக்கு அறிவை அதிகரிப்பாயாக','എനിക്ക് വിദ്യ വർധിപ്പിക്കണമേ','میرے علم میں اضافہ','मेरे इल्म में इज़ाफ़ा','tambahkan ilmu kepadaku','augmente-moi en savoir','ilmimi artır','আমার জ্ঞান বৃদ্ধি করো'), reference:'Quran 20:114', repeat:3 },
      { id:'rb28', arabic:'رَبَّنَا كَشَفْتَ عَنَّا الْعَذَابَ إِنَّا عَائِدُونَ', transliteration:'Rabbana kashafta \'anral-\'adhaba inna a\'idun', translations:T('Our Lord, You have removed the punishment from us. Indeed, we shall return.','ربنا كشفت عنا العذاب','எங்களை விட்டு வேதனையை நீக்கினாய்','ഞങ്ങളിൽ നിന്ന് ശിക്ഷ മാറ്റി','ہم سے عذاب ہٹا دیا','हम से अज़ाब हटा दिया','Engkau hilangkan azab dari kami','Tu as éloigné le châtiment','azabı bizden kaldırdın','আমাদের থেকে আযাব সরিয়েছ'), reference:'Quran 44:15', repeat:1 },
      { id:'rb29', arabic:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ', transliteration:'Rabbana taqabbal minna innaka antas-sami\'ul-\'alim', translations:T('Our Lord, accept from us. Indeed You are the All-Hearing, the All-Knowing.','ربنا تقبل منا','எங்களிடமிருந்து ஏற்றுக்கொள்വாயாக','ഞങ്ങളിൽ നിന്ന് സ്വീകരിക്കണമേ','ہم سے قبول فرما','हम से कुबूल फरमा','terimalah dari kami','accepte de nous','bizden kabul et','আমাদের থেকে কবুল করো'), reference:'Quran 2:127 - Ibrahim & Ismail', repeat:1 },
      { id:'rb30', arabic:'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ', transliteration:'Rabbana waj\'alna muslimayni laka wa min dhurriyyatina ummatan muslimatan lak', translations:T('Our Lord, make us Muslims in submission to You, and of our descendants a Muslim nation.','ربنا واجعلنا مسلمين لك','உனக்கு முஸ்லிம்களாக ஆக்குவாயாக','ഞങ്ങളെ നിനക്ക് മുസ്ലിങ്ങളാക്കണമേ','ہمیں مسلمان بنا اور نسل کو بھی','हमें मुस्लिम बना और नस्ल को भी','jadikan kami Muslim dan keturunan kami Muslim','fais de nous des musulmans','bizi Müslüman kıl','আমাদের মুসলিম করো'), reference:'Quran 2:128', repeat:1 },
      { id:'rb31', arabic:'رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِنْهُمْ', transliteration:'Rabbana wab\'ath fihim rasulan minhum', translations:T('Our Lord, send among them a messenger from themselves.','ربنا وابعث فيهم رسولا منهم','அவர்களிடம் ஒரு தூதரை அனுப்புவாயாக','അവരിലേക്ക് ഒരു ദൂതനെ','ان میں سے رسول مبعوث فرما','उन में से एक रसूल भेज','utus rasul dari kalangan mereka','envoie un messager parmi eux','onlardan bir elçi gönder','তাদের মধ্যে থেকে রাসূল পাঠাও'), reference:'Quran 2:129', repeat:1 },
      { id:'rb32', arabic:'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا', transliteration:'Rabbana atina min ladunka rahmatan wa hayyi\' lana min amrina rashada', translations:T('Our Lord, grant us mercy from Yourself and prepare for us right guidance in our affair.','ربنا آتنا من لدنك رحمة','உன்னிடமிருந்து இரக்கமளிக்க','നിന്നിൽ നിന്ന് കാരുണ്യം','تجھ سے رحمت اور ہدایت','तुझसे रहमत और हिदायत','berikan rahmat dan petunjuk','accorde-nous miséricorde et guidance','rahmet ve hidayet ver','রহমত ও হেদায়েত দাও'), reference:'Quran 18:10 - Ashab al-Kahf', repeat:1 },
      { id:'rb33', arabic:'رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا', transliteration:'Rabbanasrif \'anna \'adhaba jahannam inna \'adhabaha kana gharama', translations:T('Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering.','ربنا اصرف عنا عذاب جهنم','நரக வேதனையை எங்களிடமிருந்து திருப்பு','ഞങ്ങളിൽ നിന്ന് നരകശിക്ഷ മാറ്റണമേ','جہنم کا عذاب ہم سے ہٹا','जहन्नम का अज़ाब हम से हटा','palingkan azab Jahannam','détourne de nous le châtiment de l\'Enfer','cehennem azabını çevir','জাহান্নামের আযাব সরিয়ে দাও'), reference:'Quran 25:65', repeat:1 },
      { id:'rb34', arabic:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', transliteration:'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin waj\'alna lil-muttaqina imama', translations:T('Our Lord, grant us from our spouses and offspring comfort to our eyes and make us leader of the righteous.','ربنا هب لنا من أزواجنا وذرياتنا','எங்கள் மனைவியர் மற்றும் சந்ததியில் கண் குளிர்ச்சி','ഞങ്ങളുടെ ഭാര്യമാരിൽ നിന്ന് കണ്ണിന് കുളിർ','بیویوں اور اولاد سے آنکھوں کی ٹھنڈک','बीवियों और औलाद से आँखों की ठंडक','istri dan keturunan penyejuk hati','épouses et descendants consolation des yeux','eşlerimizden göz aydınlığı','স্ত্রী ও সন্তানদের থেকে চোখের শীতলতা'), reference:'Quran 25:74', repeat:1 },
      { id:'rb35', arabic:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ', transliteration:'Rabbi awzi\'ni an ashkura ni\'matakallati an\'amta \'alayya', translations:T('My Lord, enable me to be grateful for Your favor which You have bestowed upon me.','رب أوزعني أن أشكر نعمتك','உன் அருளுக்கு நன்றி செலுத்த எனக்கு அருள்வாயாக','നിന്റെ അനുഗ്രഹത്തിന് നന്ദി','تیری نعمت کا شکر','तेरी नेमत का शुक्र','berikan aku kemampuan bersyukur','donne-moi la gratitude','nimetine şükretmeyi nasip et','তোমার নেয়ামতের শুকরিয়া করতে দাও'), reference:'Quran 27:19 - Sulayman', repeat:1 },
      { id:'rb36', arabic:'رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ', transliteration:'Rabbi a\'udhu bika min hamazatish-shayatini wa a\'udhu bika rabbi ay yahdurun', translations:T('My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, from their presence.','رب أعوذ بك من همزات الشياطين','ஷைத்தான்களின் தூண்டுதல்களிலிருந்து','ഷൈത്താൻമാരുടെ പ്രേരണയിൽ നിന്ന്','شیطانوں کے وسوسوں سے','शैतानों के वसवसों से','berlindung dari bisikan setan','je cherche refuge des incitations des démons','şeytanların vesvesesinden','শয়তানের কুচুচুম্বন থেকে'), reference:'Quran 23:97-98', repeat:1 },
      { id:'rb37', arabic:'رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ', transliteration:'Rabbana amanna faghfir lana warhamna wa anta khayrur-rahimin', translations:T('Our Lord, we have believed, so forgive us and have mercy, and You are the best of merciful.','ربنا آمنا فاغفر لنا وارحمنا','ஈமான் கொண்டோம், மன்னி, இரக்கம்','വിശ്വസിച്ചിരിക്കുന്നു, പൊറുക്കണമേ','ایمان لائے بخش دے اور رحم','ईमान लाए बख्श दे और रहम','kami beriman, ampuni dan rahmati','nous avons cru, pardonne et fais miséricorde','iman ettik bağışla ve merhamet','ঈমান এনেছি ক্ষমা ও দয়া করো'), reference:'Quran 23:109', repeat:1 },
      { id:'rb38', arabic:'رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', transliteration:'Rabbana atmim lana nurana waghfir lana innaka ala kulli shay\'in qadir', translations:T('Our Lord, perfect for us our light and forgive us. Indeed You are over all things competent.','ربنا أتمم لنا نورنا','எங்கள் ஒளியை முழுமைப்படுத்துவாயாக','ഞങ്ങളുടെ പ്രകാശം പൂർത്തിയാക്കണമേ','ہمارا نور مکمل فرما','हमारा नूर मुकम्मल फरमा','sempurnakan cahaya kami','parfait pour nous notre lumière','nurumuzu tamamla','আমাদের নূর পূর্ণ করো'), reference:'Quran 66:8', repeat:1 },
      { id:'rb39', arabic:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ', transliteration:'Rabbana ghfir lana wa li\'ikhwaninal-ladhina sabaquna bil-iman', translations:T('Our Lord, forgive us and our brothers who preceded us in faith.','ربنا اغفر لنا ولإخواننا الذين سبقونا','முன்னர் ஈமான் கொண்ட சகோதரர்களையும் மன்னி','ഞങ്ങളുടെ വിശ്വാസത്തിൽ മുൻപോയ സഹോദരങ്ങളെ','ہم سے اور ایمان میں سبقت کرنے والوں سے','हम से और ईमान में सबक़त करने वालों से','ampuni kami dan saudara kami yang beriman','pardonne-nous et nos frères qui nous ont précédés','imanla öne geçen kardeşlerimizi bağışla','আমাদের ও ঈমানে অগ্রণী ভাইদের ক্ষমা'), reference:'Quran 59:10', repeat:1 },
      { id:'rb40', arabic:'رَبَّنَا لَا تَجْعَلْ قُلُوبَنَا تَزِيغُ بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ', transliteration:'Rabbana la taj\'al qulubana tazighu ba\'da idh hadaytana wa hab lana min ladunka rahmatan innaka antal-wahhab', translations:T('Our Lord, do not let our hearts deviate after You guided us, and grant us mercy. Indeed You are the Bestower.','ربنا لا تجعل قلوبنا تزيغ بعد إذ هديتنا','நீ வழிகாட்டிய பின் இருதയங்களை வழி கேட்கச் செய்யாதே','ഹൃദയങ്ങൾ വഴിമാറരുതേ','ہدایت کے بعد دلوں کو ٹیڑھا نہ کر','हिदायत के बाद दिलों को टेढ़ा न कर','jangan palingkan hati setelah petunjuk','ne détourne pas nos cœurs après guidance','hidayetten sonra kalplerimizi eğriltme','হেদায়েতের পর অন্তর বিচ্যুত করো না'), reference:'Quran 3:8 (extended)', repeat:1 },
    ]
  },
  {
    id: 'everyday',
    name: T('Everyday Duas','أدعية يومية','தினசரி துஆக்கள்','ദിനംപ്രതി ദുആകൾ','روزمرہ دعائیں','रोज़मर्रा','Doa Sehari-hari','Quotidiennes','Günlük','প্রতিদিনের'),
    icon: '🏠', color: '#FF9800',
    duas: [
      { id:'ed1', arabic:'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا', transliteration:'Bismillahi walajna wa bismillahi kharajna wa \'alallahi rabbina tawakkalna', translations:T('In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we rely.','بسم الله ولجنا','அல்லாஹ்வின் பெயரால் நுழைகிறோம்','അല്ലാഹുവിന്റെ നാമത്തിൽ പ്രവേശിക്കുന്നു','اللہ کے نام سے داخل','अल्लाह के नाम से दाखिल','Dengan nama Allah kami masuk','Au nom d\'Allah nous entrons','Allah\'ın adıyla giriyoruz','আল্লাহর নামে প্রবেশ'), reference:'Abu Dawud 4/325', repeat:1, benefit:'Entering home' },
      { id:'ed2', arabic:'بِسْمِ اللَّهِ', transliteration:'Bismillah', translations:T('In the name of Allah (before eating)','بسم الله','அல்லாஹ்வின் பெயரால்','അല്ലാഹുവിന്റെ നാമത്തിൽ','اللہ کے نام سے','अल्लाह के नाम से','Dengan nama Allah','Au nom d\'Allah','Allah\'ın adıyla','আল্লাহর নামে'), reference:'Abu Dawud 3/347', repeat:1, benefit:'Before eating' },
      { id:'ed3', arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', transliteration:'Alhamdu lillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah', translations:T('All praise is for Allah who fed me this and provided it without any power from me.','الحمد لله الذي أطعمني','இதை உணவளித்த அல்லாஹ்வுக்கு','ഇത് തന്ന അല്ലാഹുവിന്','مجھے یہ کھلانے والے اللہ کے لیے','मुझे यह खिलाने वाले अल्लाह के लिए','Segala puji bagi Allah yang memberiku makan','Louange à Allah qui m\'a nourri','Bana bunu yediren Allah\'a','আমাকে খাওয়ানো আল্লাহর'), reference:'Tirmidhi 4/345', repeat:1, benefit:'After eating' },
      { id:'ed4', arabic:'بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', transliteration:'Bismika Allahumma amutu wa ahya', translations:T('In Your name, O Allah, I die and I live.','باسمك اللهم أموت وأحيا','உன் பெயரால் இறக்கிறேன் வாழ்கிறேൻ','നിന്റെ നാമത്തിൽ മരിക്കുക ജീവിക്കുക','تیرے نام سے مرتا اور جیتا ہوں','तेरे नाम से मरता जीता हूं','Dengan nama-Mu aku mati dan hidup','En Ton nom je meurs et vis','Senin adıyla ölüp yaşıyorum','তোমার নামে মরি ও বাঁচি'), reference:'Bukhari 11/113', repeat:1, benefit:'Before sleeping' },
      { id:'ed5', arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', transliteration:'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur', translations:T('All praise is for Allah who gave us life after death, and unto Him is resurrection.','الحمد لله الذي أحيانا بعد ما أماتنا','மரணத்திற்குப் பின் உயிர்ப்பித்த அல்லாஹ்வுக்கு','മരിപ്പിച്ച ശേഷം ജീവിപ്പിച്ച അല്ലാഹുവിന്','مرنے کے بعد زندہ کرنے والے','मरने के बाद ज़िंदा करने वाले','Yang menghidupkan setelah mematikan','Qui nous a donné la vie après la mort','Öldükten sonra dirilten','মৃত্যুর পর জীবিতকারী'), reference:'Bukhari 11/113', repeat:1, benefit:'Upon waking' },
      { id:'ed6', arabic:'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', transliteration:'Allahummaftah li abwaba rahmatik', translations:T('O Allah, open for me the doors of Your mercy.','اللهم افتح لي أبواب رحمتك','உன் இரக்கத்தின் கதவுகளை திறப்பாயாக','നിന്റെ കാരുണ്യത്തിന്റെ വാതിൽ','رحمت کے دروازے کھول','रहमत के दरवाज़े खोल','bukakan pintu rahmat-Mu','ouvre les portes de Ta miséricorde','rahmet kapılarını aç','রহমতের দরজা খুলো'), reference:'Muslim 1/494', repeat:1, benefit:'Entering masjid' },
      { id:'ed7', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', transliteration:'Allahumma inni as\'aluka min fadlik', translations:T('O Allah, I ask You from Your bounty.','اللهم إني أسألك من فضلك','உன் அருளை கேட்கிறேൻ','നിന്റെ അനുഗ്രഹം ചോദിക്കുന്നു','تیرے فضل سے مانگتا ہوں','तेरे फ़ज़्ल से मांगता हूं','aku minta dari karunia-Mu','je Te demande de Ta grâce','fazlından istiyorum','তোমার ফযল থেকে চাই'), reference:'Muslim 1/494', repeat:1, benefit:'Leaving masjid' },
      { id:'ed8', arabic:'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', transliteration:'Bismillah, Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith', translations:T('In the name of Allah. O Allah, I seek refuge from male and female evil jinn.','بسم الله اللهم إني أعوذ بك من الخبث والخبائث','ஆண் பெண் கெட்ட ஜின்களிடமிருந்து','ആൺ-പെൺ ദുർജ്ജിന്നുകളിൽ നിന്ന്','خبیث جنوں سے پناہ','ख़बीस जिन्न से पनाह','berlindung dari jin jahat','refuge contre les djinns','cinlerden korunma','খারাপ জিন থেকে'), reference:'Bukhari 1/45', repeat:1, benefit:'Before entering bathroom' },
      { id:'ed9', arabic:'غُفْرَانَكَ', transliteration:'Ghufranaka', translations:T('I seek Your forgiveness.','غفرانك','உன் மன்னிப்பை','നിന്റെ മാപ്പ്','تیری مغفرت','तेरी माफ़ी','ampun-Mu','Ton pardon','bağışlanmanı','তোমার ক্ষমা'), reference:'Abu Dawud 1/10', repeat:1, benefit:'After leaving bathroom' },
      { id:'ed10', arabic:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ', transliteration:'Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun', translations:T('Glory be to Him who has subjected this to us. We shall return to our Lord.','سبحان الذي سخر لنا هذا','இதை நமக்கு வசப்படுத்தியவன்','ഇത് നമുക്ക് അനുസരണമാക്കിയവൻ','جس نے اسے ہمارے لیے مسخر کیا','जिस ने इसे हमारे लिए मुसाख्ख़र','Yang menundukkan ini bagi kami','Celui qui nous a soumis ceci','Bunu bize boyun eğdiren','যা আমাদের বশীভূত'), reference:'Muslim 2/980', repeat:1, benefit:'Travel/vehicle' },
      { id:'ed11', arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', transliteration:'Allahumma inni a\'udhu bika minal-hammi wal-hazan, wal-\'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala\'id-dayni wa ghalabatir-rijal', translations:T('O Allah, I seek refuge from anxiety, grief, incapacity, laziness, miserliness, cowardice, burden of debt, and being overpowered by men.','اللهم إني أعوذ بك من الهم والحزن','கவலை, துக்கம், இயலாமை, சோம்பல்','ആകുലത, ദുഃഖം, അശക്തി','فکر، غم، کمزوری، سستی','फ़िक्र, ग़म, कमज़ोरी, सुस्ती','kecemasan, kesedihan, kelemahan','anxiété, chagrin, incapacité','endişe, keder, acizlik','চিন্তা, দুঃখ, অক্ষমতা'), reference:'Bukhari 7/158', repeat:1, benefit:'Comprehensive protection' },
      { id:'ed12', arabic:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ', transliteration:'Allahummak-fini bihalalika \'an haramik wa agh-nini bifadlika \'amman siwak', translations:T('O Allah, suffice me with Your lawful against Your forbidden, and enrich me by Your grace from all besides You.','اللهم اكفني بحلالك عن حرامك','உன் ஹலாலால் ஹராமிலிருந்து போதுமாக்கு','ഹലാൽകൊണ്ട് ഹറാമിൽ നിന്ന്','حلال سے حرام سے بے نیاز','हलाल से हराम से बेनियाज़','cukupkan dengan halal dari haram','suffis-moi par Ton licite','helalınla haramdan','হালাল দিয়ে হারাম থেকে'), reference:'Tirmidhi 5/526', repeat:1, benefit:'Debt relief' },
      { id:'ed13', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى', transliteration:'Allahumma inni as\'alukal-huda wat-tuqa wal-\'afafa wal-ghina', translations:T('O Allah, I ask You for guidance, piety, chastity, and richness.','اللهم إني أسألك الهدى والتقى','நேர்வழி, பயபக்தி, கற்பு, செல்வம்','മാർഗ്ഗദർശനം, ഭക്തി, പവിത്രത, സമ്പത്ത്','ہدایت، تقوی، پاکدامنی، بے نیازی','हिदायत, तक़वा, पाकदामनी, बेनियाज़ी','petunjuk, takwa, kesucian, kekayaan','guidance, piété, chasteté, richesse','hidayet, takva, iffet, zenginlik','হেদায়েত, তাকওয়া, পবিত্রতা, সম্পদ'), reference:'Muslim 4/2083', repeat:1 },
      { id:'ed14', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا', transliteration:'Allahumma inni as\'aluka \'ilman nafi\'an wa rizqan tayyiban wa \'amalan mutaqabbala', translations:T('O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.','اللهم إني أسألك علما نافعا','பயனுள்ள அறிவு, நல்ல ரிஸ்க்','ഗുണകരമായ വിദ്യ, നല്ല റിസ്ഖ','فائدہ مند علم، پاک رزق','फ़ायदेमंद इल्म, पाक रिज़्क़','ilmu bermanfaat, rezeki baik','savoir bénéfique, bonne subsistance','faydalı ilim, helal rızık','উপকারী জ্ঞান, ভালো রিযিক'), reference:'Ibn Majah 1/295', repeat:1, benefit:'Morning dua' },
      { id:'ed15', arabic:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ', transliteration:'Allahumma salli \'ala Muhammadin wa \'ala ali Muhammad, kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim', translations:T('O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim.','اللهم صل على محمد وعلى آل محمد','முஹம்மது மீதும் அவர் குடும்பத்தார் மீதும்','മുഹമ്മദിന്റെയും കുടുംബത്തിന്റെയും മേൽ','محمد ﷺ اور آل محمد پر','मुहम्मद ﷺ और आले मुहम्मद पर','shalawat atas Muhammad dan keluarga','prières sur Muhammad et sa famille','Muhammed ve ailesine salat','মুহাম্মদ ও তাঁর পরিবারের প্রতি'), reference:'Bukhari 3/10', repeat:1, benefit:'Salawat Ibrahimiyyah in tashahhud' },
    ]
  },
  {
    id: 'prophetic',
    name: T('Prophetic Duas','أدعية الأنبياء','நபி துஆக்கൾ','നബി ദുആകൾ','انبیاء کی دعائیں','नबियों की दुआएं','Doa Para Nabi','Prières des Prophètes','Peygamber Duası','নবীদের দোয়া'),
    icon: '🌟', color: '#FF6F00',
    duas: [
      { id:'pr1', arabic:'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ', transliteration:'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasirin', translations:T('Our Lord, we have wronged ourselves. If You do not forgive us, we shall be losers. (Dua of Adam)','ربنا ظلمنا أنفسنا','நாங்கள் எங்களை அநியாயம் செய்தோம்','ഞങ്ങൾ അക്രമം ചെയ്തു','ہم نے اپنے پر ظلم کیا','हम ने अपने पर ज़ुल्म किया','kami menganiaya diri','nous avons été injustes','nefsimize zulmettik','আমরা নিজেদের জুলম'), reference:'Quran 7:23 - Adam AS', repeat:1 },
      { id:'pr2', arabic:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', transliteration:'La ilaha illa anta subhanaka inni kuntu minaz-zalimin', translations:T('There is no god but You, glory to You. Indeed I have been of the wrongdoers. (Dua of Yunus)','لا إله إلا أنت سبحانك','நீயைத் தவிர வணக்கத்திற்குரியவர் இல்லை','നീ അല്ലാതെ ആരാധനാർഹനില്ല','تیرے سوا کوئی معبود نہیں','तेरे सिवा कोई माबूद नहीं','Tiada tuhan selain Engkau','Nul dieu sauf Toi','Senden başka ilah yok','তুমি ছাড়া কোনো ইলাহ নেই'), reference:'Quran 21:87 - Yunus AS', repeat:1, benefit:'No Muslim supplicates with it except Allah answers' },
      { id:'pr3', arabic:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', transliteration:'Rabbishrah li sadri wa yassir li amri', translations:T('My Lord, expand my chest and ease my task. (Dua of Musa)','رب اشرح لي صدري','என் மார்பை விரிவுபடுத்து','നെഞ്ച് വിശലമാക്ക','میرا سینہ کھول','मेरा सीना खोल','lapangkan dadaku','ouvre-moi la poitrine','göğsümü aç','বক্ষ প্রসারিত করো'), reference:'Quran 20:25-26 - Musa AS', repeat:1 },
      { id:'pr4', arabic:'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', transliteration:'Rabbi inni lima anzalta ilayya min khayrin faqir', translations:T('My Lord, indeed I am for whatever good You send down to me in need. (Dua of Musa)','رب إني لما أنزلت إلي من خير فقير','நீ இறக்கும் நன்மைக்கு நான் தேவைப்படுகிறேൻ','നീ ഇറക്കുന്ന നന്മയ്ക്ക് ഞാൻ ആവശ്യക്കാരൻ','مجھے تیری بھلائی کی ضرورت','मुझे तेरी भलाई की ज़रूरत','aku butuh kebaikan yang Engkau turunkan','j\'ai besoin du bien que Tu envoies','indireceğin hayra muhtacım','তুমি নাযিল করা কল্যাণের মুখাপেক্ষী'), reference:'Quran 28:24 - Musa AS', repeat:1, benefit:'For sustenance and marriage' },
      { id:'pr5', arabic:'رَبِّ زِدْنِي عِلْمًا', transliteration:'Rabbi zidni \'ilma', translations:T('My Lord, increase me in knowledge. (Dua of Muhammad ﷺ)','رب زدني علما','அறிவை அதிகரிப்பாயாக','വിദ്യ വർധിപ്പിക്കണമേ','علم میں اضافہ','इल्म में इज़ाफ़ा','tambah ilmu','augmente mon savoir','ilmimi artır','জ্ঞান বৃদ্ধি'), reference:'Quran 20:114 - Muhammad ﷺ', repeat:3 },
      { id:'pr6', arabic:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ', transliteration:'Rabbana taqabbal minna innaka antas-sami\'ul-\'alim', translations:T('Our Lord, accept from us. (Dua of Ibrahim & Ismail)','ربنا تقبل منا','எங்களிடமிருந்து ஏற்றுக்கൊள்വായாக','ഞങ്ങളിൽ നിന്ന് സ്വീകരിക്കണമേ','ہم سے قبول فرما','हम से कुबूल फरमा','terimalah dari kami','accepte de nous','bizden kabul et','আমাদের থেকে কবুল'), reference:'Quran 2:127 - Ibrahim & Ismail AS', repeat:1 },
      { id:'pr7', arabic:'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ', transliteration:'Rabbij\'alni muqimas-salati wa min dhurriyyati, rabbana wa taqabbal du\'a\'', translations:T('My Lord, make me establisher of prayer, and from my descendants. Our Lord, accept my supplication. (Dua of Ibrahim)','رب اجعلني مقيم الصلاة','தொழுகையை நிலைநാட்டுபவனாக','നമസ്കാരം സ്ഥാപിക്കുന്നവൻ','نماز قائم کرنے والا','नमाज़ क़ायम करने वाला','jadikan pendiri salat','fais de moi établisseur de prière','namazı ikame eden','নামায কায়িমকারী'), reference:'Quran 14:40-41 - Ibrahim AS', repeat:1 },
      { id:'pr8', arabic:'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ', transliteration:'Rabbana ghfir li wa liwalidayya wa lilmu\'minina yawma yaqumul-hisab', translations:T('Our Lord, forgive me, my parents, and the believers. (Dua of Ibrahim)','ربنا اغفر لي ولوالدي','என்னையும் பெற்றோரையும் மன்னி','എന്നെയും മാതാപിതാക്കളെയും','مجھے اور والدین کو بخش','मुझे और वालिदैन को बख्শ','ampuni aku dan orang tuaku','pardonne-moi et mes parents','beni ve anne-babamı bağışla','আমাকে ও পিতা-মাতাকে ক্ষমা'), reference:'Quran 14:41 - Ibrahim AS', repeat:1 },
      { id:'pr9', arabic:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ', transliteration:'Rabbi awzi\'ni an ashkura ni\'matakal-lati an\'amta \'alayya wa \'ala walidayya', translations:T('My Lord, enable me to be grateful for Your favor upon me and my parents. (Dua of Sulayman)','رب أوزعني أن أشكر نعمتك','உன் அருளுக்கு நன்றி','നിന്റെ അനുഗ്രഹത്തിന് നന്ദി','تیری نعمت کا شکر','तेरी नेमत का शुक्र','berikan aku bersyukur','donne-moi la gratitude','nimetine şükretmeyi','তোমার নেয়ামতের শুকরিয়া'), reference:'Quran 27:19 - Sulayman AS', repeat:1 },
      { id:'pr10', arabic:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', transliteration:'Rabbirhamhuma kama rabbayani saghira', translations:T('My Lord, have mercy upon them as they brought me up when small. (For parents)','رب ارحمهما كما ربياني صغيرا','சிறுவனாயிருந்தபோது வளர்த்தது போல்','ചെറുപ്പത്തിൽ വളർത്തിയതുപോലെ','بچپن میں پالا جیسا رحم','बचपन में पाला जैसा रहम','sayangi mereka seperti mereka besarkan aku','aie pitié comme ils m\'ont élevé','beni büyüttükleri gibi merhamet','যেমন লালন-পালন করেছেন দয়া'), reference:'Quran 17:24', repeat:1 },
      { id:'pr11', arabic:'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ', transliteration:'Rabbi la tazarni fardan wa anta khayrul-warithin', translations:T('My Lord, do not leave me alone and You are the best of inheritors. (Dua of Zakariya)','رب لا تذرني فردا','என்னை தனியாக விடாதே','എനിയെ ഒറ്റയ്ക്ക് വിടരുതേ','مجھے تنہا نہ چھوڑ','मुझे तन्हा न छोड़','jangan tinggalkan aku sendiri','ne me laisse pas seul','beni yalnız bırakma','আমাকে একা ছেড়ো না'), reference:'Quran 21:89 - Zakariya AS', repeat:1 },
      { id:'pr12', arabic:'رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي', transliteration:'Rabbi inni zalamtu nafsi faghfir li', translations:T('My Lord, I have wronged myself, so forgive me. (Dua of Musa after killing)','رب إني ظلمت نفسي فاغفر لي','என்னை அநியாயம் செய்தேன்','ഞാൻ അക്രമം ചെയ്തു','میں نے اپنے پر ظلم کیا','मैं ने अपने पर ज़ुल्म','aku menganiaya diriku','je me suis fait du tort','nefsime zulmettim','আমি জুলম করেছি'), reference:'Quran 28:16 - Musa AS', repeat:1 },
    ]
  },
  {
    id: 'travel',
    name: T('Travel & Journey','السفر','பயணம்','യാത്ര','سفر','सफ़र','Perjalanan','Voyage','Yolculuk','ভ্রমণ'),
    icon: '✈️', color: '#00BCD4',
    duas: [
      { id:'tr1', arabic:'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ', transliteration:'Allahu Akbar (3x) Subhanal-ladhi sakhkhara lana hadha...', translations:T('Allah is the Greatest (3x). Glory be to Him who has subjected this to us.','الله أكبر سبحان الذي سخر لنا','அல்லாஹு அக்பர், இதை வசப்படுத்தியவன்','അല്ലാഹു അക്ബർ, ഇത് അനുസരണമാക്കിയവൻ','اللہ اکبر جس نے مسخر کیا','अल्लाह अक्बर जिस ने मुसाख्ख़र','Allahu Akbar, Yang menundukkan','Allah est le Plus Grand, Celui qui','Allah en büyüktür, bunu','আল্লাহ আকবার, যিনি বশীভূত'), reference:'Muslim 2/980', repeat:1 },
      { id:'tr2', arabic:'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى', transliteration:'Allahumma inna nas\'aluka fi safarina hadhal-birra wat-tuqwa wa minal-\'amali ma tarda', translations:T('O Allah, we ask You in our journey for righteousness, piety, and deeds that please You.','اللهم إنا نسألك في سفرنا البر','இந்த பயணத்தில் நன்மை, பயபக்தி','ഈ യാത്രയിൽ നന്മ, ഭക്തി','اس سفر میں نیکی اور تقوی','इस सफ़र में नेकी और तक़वा','Dalam perjalanan ini kebaikan','Dans ce voyage, la piété','Bu yolculukta iyilik','এই সফরে নেকী'), reference:'Muslim 2/978', repeat:1 },
      { id:'tr3', arabic:'اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ', transliteration:'Allahumma hawwin \'alayna safarana hadha watwi \'anna bu\'dahu', translations:T('O Allah, make this journey easy for us and fold up its distance.','اللهم هون علينا سفرنا','இந்த பயணத்தை எளிதாக்குവாயாக','ഈ യാത്ര എളുപ്പമാക്കണമേ','یہ سفر آسان فرما','यह सफ़र आसान फरमा','permudahkan perjalanan ini','rends ce voyage facile','bu seyahati kolaylaştır','এই সফর সহজ করো'), reference:'Muslim 2/978', repeat:1 },
    ]
  },
  {
    id: 'anxiety',
    name: T('Anxiety & Depression','الهم والحزن','கவலை & மன அழுத்தം','ആകുലത & വിഷാദം','فکر اور غم','चिंता','Kecemasan','Anxiété','Endişe','উদ্বেগ'),
    icon: '🤲', color: '#3F51B5',
    duas: [
      { id:'ax1', arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', transliteration:'Allahumma inni a\'udhu bika minal-hammi wal-hazan, wal-\'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala\'id-dayni wa ghalabatir-rijal', translations:T('O Allah, I seek refuge from anxiety, grief, incapacity, laziness, miserliness, cowardice, debt burden, and being overpowered.','اللهم إني أعوذ بك من الهم','கவலை, துக்கம், இயலாமை, சோம்பல்','ആകുലത, ദുഃഖം, അശക്തി','فکر، غم، کمزوری، سستی','फ़िक्र, ग़म, कमज़ोरी, सुस्ती','kecemasan, kesedihan','anxiété, chagrin','endişe, keder','চিন্তা, দুঃখ'), reference:'Bukhari 7/158', repeat:3 },
      { id:'ax2', arabic:'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ', transliteration:'La ilaha illallahul-\'azimul-halim, la ilaha illallahu Rabbul-\'Arshil-\'azim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-\'Arshil-karim', translations:T('None has right to be worshipped except Allah the Mighty, the Forbearing. None has right except Allah, Lord of the Mighty Throne.','لا إله إلا الله العظيم الحليم','இணையற்ற மகத்தான அல்லாஹ்','അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല','اللہ کے سوا کوئی معبود نہیں','अल्लाह के सिवा कोई माबूद नहीं','Tiada tuhan selain Allah','Nul dieu sauf Allah','Allah\'tan başka ilah yok','আল্লাহ ছাড়া কোনো ইলাহ নেই'), reference:'Bukhari 7/158', repeat:1, benefit:'Dua of distress' },
      { id:'ax3', arabic:'اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لَا إِلَهَ إِلَّا أَنْتَ', transliteration:'Allahumma rahmataka arju fa la takilni ila nafsi tarfata \'ayn, wa aslih li sha\'ni kullahu la ilaha illa ant', translations:T('O Allah, I hope for Your mercy. Do not leave me to myself even for a blink. Rectify all my affairs.','اللهم رحمتك أرجو','உன் இரக்கத்தை நம்புகிறேன்','നിന്റെ കാരുണ്യം പ്രതീക്ഷിക്കുന്നു','تیری رحمت کی امید','तेरी रहमत की उमीद','aku harap rahmat-Mu','j\'espère Ta miséricorde','rahmetini umuyorum','তোমার রহমত আশা'), reference:'Abu Dawud 4/323', repeat:1 },
    ]
  },
  {
    id: 'rain',
    name: T('Rain & Weather','المطر والطقس','மழை & வானிலை','മഴ & കാലാവസ്ഥ','بارش اور موسم','बारिश और मौसम','Hujan & Cuaca','Pluie & Météo','Yağmur & Hava','বৃষ্টি ও আবহাওয়া'),
    icon: '🌧️', color: '#03A9F4',
    duas: [
      { id:'rn1', arabic:'اللَّهُمَّ صَيِّبًا نَافِعًا', transliteration:'Allahumma sayyiban nafi\'a', translations:T('O Allah, beneficial rain.','اللهم صيبا نافعا','நன்மை பயக்கும் மழை','ഗുണകരമായ മഴ','فائدے والی بارش','फ़ायदेमंद बारिश','hujan bermanfaat','pluie bénéfique','faydalı yağmur','উপকারী বৃষ্টি'), reference:'Bukhari 1/224', repeat:1, benefit:'When rain starts' },
      { id:'rn2', arabic:'اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا', transliteration:'Allahumma hawalayna wa la \'alayna', translations:T('O Allah, around us and not upon us.','اللهم حولينا ولا علينا','எங்களைச் சுற்றி, எங்கள் மீது அல்ல','ഞങ്ങൾക്ക് ചുറ്റും, ഞങ്ങളുടെ മേൽ അല്ല','ہمارے اردگرد ہمارے اوپر نہیں','हमारे इर्द हमारे ऊपर नहीं','di sekeliling kami bukan di atas','autour de nous pas sur nous','çevremize üstümüze değil','আমাদের চারপাশে উপরে নয়'), reference:'Bukhari 1/224', repeat:1, benefit:'When rain is heavy' },
    ]
  },
  {
    id: 'parents',
    name: T('Parents & Family','الوالدين والأسرة','பெற்றோர் & குடும்பம்','മാതാപിതാക്കൾ & കുടുംബം','والدین اور خاندان','माता-पिता','Orang Tua & Keluarga','Parents & Famille','Anne-Baba & Aile','পিতা-মাতা'),
    icon: '👨‍👩‍👧‍👦', color: '#8BC34A',
    duas: [
      { id:'pf1', arabic:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', transliteration:'Rabbirhamhuma kama rabbayani saghira', translations:T('My Lord, have mercy upon them as they brought me up when small.','رب ارحمهما كما ربياني صغيرا','சிறுவனாயிருந்தபோது வளர்த்தது போல்','ചെറുപ്പത്തിൽ വളർത്തിയതുപോലെ','بچپن میں پالا جیسا رحم','बचपन में पाला जैसा रहम','sayangi mereka seperti mereka besarkan','aie pitié comme ils m\'ont élevé','beni büyüttükleri gibi','যেমন লালন-পালন দয়া'), reference:'Quran 17:24', repeat:1 },
      { id:'pf2', arabic:'رَبِّ اجْعَلْ هَذَا الْبَلَدَ آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ', transliteration:'Rabbij\'al hadhal-balada amanan warzuq ahlahu minath-thamarat', translations:T('My Lord, make this city secure and provide its people with fruits.','رب اجعل هذا البلد آمنا','இந்த நகரை அமைதியாக ஆக்குவாயாக','ഈ നഗരം സുരക്ഷിതമാക്കണമേ','اس شہر کو امن دے','इस शहर को अमन','jadikan negeri ini aman','rends cette ville sûre','bu şehri güvenli kıl','এই শহর নিরাপদ'), reference:'Quran 2:126', repeat:1 },
    ]
  },
  {
    id: 'knowledge',
    name: T('Knowledge & Exams','العلم والامتحانات','கல்வி & தேர்வு','വിദ്യ & പരീക്ഷ','علم اور امتحان','ज्ञान और परीक्षा','Ilmu & Ujian','Savoir & Examens','İlim & Sınav','জ্ঞান ও পরীক্ষা'),
    icon: '📚', color: '#009688',
    duas: [
      { id:'kn1', arabic:'رَبِّ زِدْنِي عِلْمًا', transliteration:'Rabbi zidni \'ilma', translations:T('My Lord, increase me in knowledge.','رب زدني علما','அறிவை அதிகரிப்பாயாக','വിദ്യ വർധിപ്പിക്കണമേ','علم میں اضافہ','इल्म में इज़ाफ़ा','tambah ilmu','augmente mon savoir','ilmimi artır','জ্ঞান বৃদ্ধি'), reference:'Quran 20:114', repeat:3 },
      { id:'kn2', arabic:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا', transliteration:'Allahumma la sahla illa ma ja\'altahu sahla, wa anta taj\'alul-hazna idha shi\'ta sahla', translations:T('O Allah, nothing is easy except what You make easy. You make difficulty easy if You will.','اللهم لا سهل إلا ما جعلته سهلا','நீ எளிதாக்குவதைத் தவிர எளிதானது இல்லை','നീ എളുപ്പമാക്കിയതല്ലാതെ എളുപ്പമില്ല','جو تو آسان کرے اس کے سوا کچھ آسان نہیں','जो तू आसान करे उसके सिवा कुछ आसान नहीं','tidak ada yang mudah kecuali yang Engkau mudahkan','rien n\'est facile sauf ce que Tu rends facile','Senin kolay kıldığın dışında kolay yok','তুমি যা সহজ করো তা ছাড়া কিছু সহজ নয়'), reference:'Ibn Hibban 2427', repeat:1, benefit:'Before exams' },
      { id:'kn3', arabic:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا', transliteration:'Allahumma anfa\'ni bima \'allamtani wa \'allimni ma yanfa\'uni wa zidni \'ilma', translations:T('O Allah, benefit me with what You taught me, teach me what benefits me, and increase me in knowledge.','اللهم انفعني بما علمتني','நீ கற்பித்ததால் பயனடைவேன்','നീ പഠിപ്പിച്ചത് പ്രയോജനപ്പെടുത്തണമേ','جو سکھایا اس سے فائدہ','जो सिखाया उस से फ़ायदा','bermanfaatlah dengan yang Kau ajarkan','beneficie-moi de ce que Tu m\'as appris','öğrettiğinle faydalandır','যা শিখিয়েছ তাতে উপকৃত করো'), reference:'Ibn Majah 1/269', repeat:1 },
    ]
  },
  {
    id: 'sneezing',
    name: T('Sneezing & Yawning','العطاس','தும்மൽ','ചുമ്മാതൽ','چھینک','छींक','Bersin','Éternuement','Hapşırma','হাঁচি'),
    icon: '🤧', color: '#CDDC39',
    duas: [
      { id:'sn1', arabic:'الْحَمْدُ لِلَّهِ', transliteration:'Alhamdulillah', translations:T('All praise is for Allah (after sneezing)','الحمد لله','எல்லா புகழும் அல்லாஹ்வுக்கே','എല്ലാ സ്തുതിയും അല്ലാഹുവിന്','تمام تعریفیں اللہ کے لیے','सब तारीफ़ अल्लाह के लिए','Segala puji bagi Allah','Toute louange à Allah','Hamd Allah\'a','সব প্রশংসা আল্লাহর'), reference:'Bukhari 7/125', repeat:1 },
    ]
  },
  {
    id: 'clothing',
    name: T('Wearing Clothes','لبس الثوب','ஆடை','വസ്ത്രം','کپڑے','कपड़े','Pakaian','Vêtements','Kıyafet','পোশাক'),
    icon: '👔', color: '#E040FB',
    duas: [
      { id:'cl1', arabic:'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', transliteration:'Alhamdu lillahil-ladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah', translations:T('All praise is for Allah who clothed me and provided it without any power from me.','الحمد لله الذي كساني','இந்த ஆடையை அளித்த அல்லாஹ்வுக்கு','ഈ വസ്ത്രം തന്ന അല്ലാഹുവിന്','مجھے یہ کپڑا عطا کرنے والے','मुझे यह कपड़ा देने वाले','Yang memberiku pakaian','Qui m\'a vêtu','Bana bu kıyafeti veren','যে পোশাক দিয়েছেন'), reference:'Abu Dawud 4/41', repeat:1 },
    ]
  },
  {
    id: 'market',
    name: T('Market Entrance','دخول السوق','சந்தை','ചന്ത','بازار','बाज़ार','Pasar','Marché','Pazar','বাজার'),
    icon: '🏪', color: '#FF5722',
    duas: [
      { id:'mk1', arabic:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', transliteration:'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumitu, wa huwa hayyun la yamut, biyadihil-khayr, wa huwa \'ala kulli shay\'in qadir', translations:T('None has right to be worshipped except Allah alone. He gives life and causes death. In His Hand is all good.','لا إله إلا الله وحده لا شريك له','இணையற்ற அல்லாஹ்வைத் தவிர வணக்கத்திற்குரியவர் இல்லை','അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല','اللہ کے سوا کوئی معبود نہیں','अल्लाह के सिवा कोई माबूद नहीं','Tiada tuhan selain Allah','Nul dieu sauf Allah Seul','Allah\'tan başka ilah yok','আল্লাহ ছাড়া কোনো ইলাহ নেই'), reference:'Tirmidhi 5/527', repeat:1, benefit:'1,000,000 good deeds recorded' },
    ]
  },
  {
    id: 'istighfar',
    name: T('Istighfar & Repentance','الاستغفار','பாவமன்னிப்பு','പാപമോചനം','استغفار','इस्तिग़फ़ार','Istighfar','Istighfar','İstiğfar','ইস্তিগফার'),
    icon: '🙏', color: '#7C4DFF',
    duas: [
      { id:'ig1', arabic:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ', transliteration:'Astaghfirullahal-\'azim alladhi la ilaha illa huwal-hayyul-qayyum wa atubu ilayh', translations:T('I seek forgiveness from Allah the Mighty, there is no god but He, the Living, the Self-subsisting, and I repent to Him.','أستغفر الله العظيم','மிகப் பெரிய அல்லாஹ்விடம்','മഹാനായ അല്ലാഹുവിനോട്','اللہ عظیم سے','अल्लाह अज़ीम से','Aku memohon ampun','Je demande pardon','Allah\'tan bağışlanma','আল্লাহর কাছে ক্ষমা'), reference:'Abu Dawud 2/85', repeat:3, benefit:'Whoever says it, Allah forgives even if he fled from battle' },
      { id:'ig2', arabic:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ', transliteration:'Rabbighfir li wa tub \'alayya innaka antat-tawwabur-rahim', translations:T('My Lord, forgive me and accept my repentance. You are the Acceptor of repentance, the Merciful.','رب اغفر لي وتب علي','இறைவா, மன்னித்து தௌபாவை ஏற்பாயாக','എന്റെ പാപം പൊറുക്കണമേ','مجھے بخش دے','मुझे बख्श दे','ampunilah aku','pardonne-moi','beni bağışla','আমাকে ক্ষমা করো'), reference:'Abu Dawud 2/85', repeat:100, benefit:'The Prophet ﷺ sought forgiveness 100 times daily' },
      { id:'ig3', arabic:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', transliteration:'Allahumma innaka \'afuwwun tuhibbul-\'afwa fa\'fu \'anni', translations:T('O Allah, You are the Pardoner, You love to pardon, so pardon me.','اللهم إنك عفو تحب العفو فاعف عني','இறைவா, நீ மன்னிப்பவன்','അല്ലാഹുവേ, നീ മാപ്പുനൽകുന്നവൻ','اے اللہ! تو معاف کرنے والا','ऐ अल्लाह! तू माफ़ करने वाला','Ya Allah, Engkau Maha Pemaaf','Ô Allah, Tu es le Pardonneur','Allah\'ım, Sen affedicisin','হে আল্লাহ! তুমি ক্ষমাকারী'), reference:'Tirmidhi 5/544', repeat:1, benefit:'Say on Laylatul Qadr' },
    ]
  },
  {
    id: 'food-drink',
    name: T('Food & Drink','الطعام والشراب','உணவு & பானம்','ഭക്ഷണം','کھانا پینا','खाना पीना','Makan & Minum','Nourriture','Yemek','খাবার'),
    icon: '🍽️', color: '#FF6D00',
    duas: [
      { id:'fd1', arabic:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ بِسْمِ اللَّهِ', transliteration:'Allahumma barik lana fima razaqtana wa qina \'adhaban-nar. Bismillah', translations:T('O Allah, bless us in what You provided and protect us from the Fire. In the name of Allah.','اللهم بارك لنا فيما رزقتنا','இறைவா, நீ அளித்ததில் பரக்கத்','അല്ലാഹുവേ, നീ തന്നതിൽ','جو تو نے رزق دیا اس میں برکت','जो तू ने रिज़्क़ उस में बरकत','berkahi rezeki yang Engkau berikan','bénis ce que Tu nous as donné','bize verdiğin rızka bereket','তুমি যে রিযিক দিয়েছ'), reference:'General', repeat:1, benefit:'Before eating' },
      { id:'fd2', arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', transliteration:'Alhamdu lillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah', translations:T('All praise is for Allah who fed me this and provided it without any power from me.','الحمد لله الذي أطعمني','இதை உணவளித்த அല്ലாஹ்வுக்கு','ഇത് തന്ന അല്ലാഹുവിന്','مجھے یہ کھلانے والے','मुझे यह खिलाने वाले','Yang memberiku makan','Qui m\'a nourri','Bana bunu yediren','আমাকে খাওয়ানো'), reference:'Tirmidhi 4/345', repeat:1, benefit:'After eating - past sins forgiven' },
      { id:'fd3', arabic:'اللَّهُمَّ اطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي', transliteration:'Allahumma at\'im man at\'amani wasqi man saqani', translations:T('O Allah, feed the one who fed me and give drink to the one who gave me drink.','اللهم اطعم من أطعمني','என்னை உணவளித்தவனுக்கு','എന്നെ ഭക്ഷിപ്പിച്ചവന്','مجھے کھلانے والے کو','मुझे खिलाने वाले को','beri makan yang memberiku makan','nourris celui qui m\'a nourri','beni doyurana','যে আমাকে খাইয়েছে'), reference:'Muslim 3/161', repeat:1, benefit:'After being hosted' },
    ]
  },
  {
    id: 'mirror',
    name: T('Looking in Mirror','النظر في المرآة','கண்ணாடி','കണ്ണാടി','آئینہ','आईना','Cermin','Miroir','Ayna','আয়না'),
    icon: '🪞', color: '#AB47BC',
    duas: [
      { id:'mr1', arabic:'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي', transliteration:'Allahumma kama hassanta khalqi fa hassin khuluqi', translations:T('O Allah, just as You made my appearance beautiful, make my character beautiful.','اللهم كما حسنت خلقي فحسن خلقي','என் உருவை அழகாக்கியது போல்','എന്റെ രൂപം സുന്ദരമാക്കിയതുപോലെ','جیسا میرا ظاہر خوبصورت','जैसा मेरा ज़ाहिर खूबसूरत','seperti Engkau perindah rupaku','comme Tu as embelli mon apparence','dış görünüşümü güzelleştirdiğin','যেমন আমার বাহ্যিক রূপ'), reference:'Ahmad', repeat:1, benefit:'When looking in mirror' },
    ]
  },
  {
    id: 'new-moon',
    name: T('New Moon','رؤية الهلال','புதிய நிலவு','പുതിയ ചന്ദ്രൻ','نیا چاند','नया चांद','Bulan Baru','Nouvelle Lune','Hilal','নতুন চাঁদ'),
    icon: '🌙', color: '#283593',
    duas: [
      { id:'nm1', arabic:'اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ', transliteration:'Allahumma ahillahu \'alayna bil-yumni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah', translations:T('O Allah, bring it over us with blessing, faith, safety, and Islam. My Lord and your Lord is Allah.','اللهم أهله علينا باليمن','பரக்கத், ஈமான், சாந்தி, இஸ்லாமுடன்','അനുഗ്രഹം, വിശ്വാസം, സമാധാനം','برکت، ایمان، سلامتی','बरकत, ईमान, सलामती','dengan berkah, iman','avec bénédiction, foi','bereket, iman, selamet','বরকত, ঈমান'), reference:'Tirmidhi 5/504', repeat:1, benefit:'When seeing new moon' },
    ]
  },
  {
    id: 'thunder',
    name: T('Thunder','الرعد','இடி','ഇടി','گرج','गड़गड़ाहट','Guruh','Tonnerre','Gök gürültüsü','বজ্রপাত'),
    icon: '⚡', color: '#F57F17',
    duas: [
      { id:'th1', arabic:'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ', transliteration:'Subhanal-ladhi yusabbihur-ra\'du bihamdihi wal-mala\'ikatu min khifatih', translations:T('Glory be to Him whom thunder glorifies with His praise, and the angels from fear of Him.','سبحان الذي يسبح الرعد','இடியும் வானவர்களும்','ഇടി അവന്റെ സ്തുതിയോടെ','جس کی تسبیح بجلی','जिसकी तस्बीह बिजली','Yang disucikan petir','Celui que le tonnerre glorifie','Gök gürültüsü','যাঁর তাসবীহ বজ্রপাত'), reference:'Muwatta 2/992', repeat:1, benefit:'When hearing thunder' },
    ]
  },
  {
    id: 'qunut',
    name: T('Qunut Witr','القنوت','குனூத்','ഖുനൂത്','قنوت','क़ुनूत','Qunut','Qunut','Kunut','কুনুত'),
    icon: '🌃', color: '#1A237E',
    duas: [
      { id:'qn1', arabic:'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ', transliteration:'Allahumma hdini fiman hadayt, wa \'afini fiman \'afayt, wa tawallani fiman tawallayt, wa barik li fima a\'tayt, wa qini sharra ma qadayt', translations:T('O Allah, guide me among those You guided, grant me well-being among those You granted well-being, bless me in what You gave, and protect me from evil of what You decreed.','اللهم اهدني فيمن هديت','நீ வழிகாட்டியோரில்','ഞാൻ ഹിദായത് പ്രാപിച്ചവരിൽ','مجھے ہدایت دے','मुझे हिदायत दे','beri aku petunjuk','guide-moi parmi ceux','hidayet verdiklerin','যাদের হেদায়েত'), reference:'Abu Dawud 2/176', repeat:1, benefit:'Qunut in Witr prayer' },
    ]
  },
  {
    id: 'umrah',
    name: T('Hajj & Umrah','الحج والعمرة','ஹஜ் & உம்ரா','ഹജ്ജ്','حج اور عمرہ','हज और उमरा','Haji & Umrah','Hajj & Omra','Hac & Umre','হজ ও উমরা'),
    icon: '🕋', color: '#33691E',
    duas: [
      { id:'um1', arabic:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ', transliteration:'Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni\'mata laka wal-mulk, la sharika lak', translations:T('Here I am, O Allah, here I am. No partner have You. All praise, blessings, and sovereignty are Yours.','لبيك اللهم لبيك','நான் வந்துவிட்டேன், இறைவா','നിന്റെ സന്നിധിയിൽ','حاضر ہوں اے اللہ','हाज़िर हूं ऐ अल्लाह','Aku penuhi panggilan-Mu','Me voici, ô Allah','Emrindeyim Allah\'ım','হাজির আছি হে আল্লাহ'), reference:'Muslim 2/841', repeat:1, benefit:'Talbiyah during Hajj/Umrah' },
    ]
  },
  {
    id: 'breaking-fast',
    name: T('Breaking Fast','فطر الصائم','நோன்பு திறத்தൽ','നോമ്പ്','افطاری','इफ़्तार','Buka Puasa','Rupture du Jeûne','İftar','ইফতার'),
    icon: '🌅', color: '#E65100',
    duas: [
      { id:'bf1', arabic:'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ', transliteration:'Dhahabadh-dhama\'u wabtallatil-\'uruqu wa thabatal-ajru in sha\'a Allah', translations:T('The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.','ذهب الظمأ','தாகம் தீர்ந்தது','ദാഹം മാറി','پیاس گئی','प्यास गई','dahaga hilang','la soif est partie','susuzluk gitti','পিপাসা মিটেছে'), reference:'Abu Dawud 2/306', repeat:1, benefit:'When breaking fast' },
    ]
  },
  {
    id: 'protection',
    name: T('Protection Duas','أدعية الحماية','பாதுகாப்பு','സംരക്ഷണം','حفاظت','हिफ़ाज़त','Perlindungan','Protection','Koruma','সুরক্ষা'),
    icon: '🛡️', color: '#B71C1C',
    duas: [
      { id:'pt1', arabic:'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', transliteration:'A\'udhu bikalimatillahit-tammati min sharri ma khalaq', translations:T('I seek refuge in the perfect words of Allah from the evil of what He created.','أعوذ بكلمات الله التامات','அல்லாஹ்வின் முழுமையான வார்த்தைகளில்','അല്ലാഹുവിന്റെ പൂർണ്ണ വാക്കുകളിൽ','اللہ کی کامل کلاموں کی پناہ','अल्लाह की कामिल कलामों की पनाह','Aku berlindung dengan kalimat Allah','Je cherche refuge dans les paroles d\'Allah','Allah\'ın mükemmel kelimelerine','আল্লাহর পূর্ণ বাণীতে'), reference:'Muslim 4/2080', repeat:3, benefit:'Protection at night' },
      { id:'pt2', arabic:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', transliteration:'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i wa huwas-sami\'ul-\'alim', translations:T('In the name of Allah with whose name nothing is harmed on earth nor in the heavens.','بسم الله الذي لا يضر','அல்லாஹ்வின் பெயரால் எதுவும் தீங்கு செய்யாது','അല്ലാഹുവിന്റെ നാമത്തിൽ','اللہ کے نام سے جس کے ساتھ','अल्लाह के नाम से जिसके साथ','Dengan nama Allah yang tidak berbahaya','Au nom d\'Allah avec lequel','Allah\'ın adıyla ki','আল্লাহর নামে যাঁর'), reference:'Abu Dawud 4/323', repeat:3, benefit:'Morning & evening protection' },
      { id:'pt3', arabic:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', transliteration:'A\'udhu billahi minash-shaytanir-rajim', translations:T('I seek refuge in Allah from the accursed Satan.','أعوذ بالله من الشيطان الرجيم','ஷைத்தானிடமிருந்து புகலளிக்கிறேன்','ഷൈത്താനിൽ നിന്ന് അഭയം','شیطان سے پناہ','शैतान से पनाह','berlindung dari setan','refuge contre Satan','şeytandan korunma','শয়তান থেকে'), reference:'Quran 16:98', repeat:1, benefit:'Before reading Quran' },
    ]
  },
  {
    id: 'gratitude',
    name: T('Gratitude','الشكر','நன்றி','നന്ദി','شکر','शुक्र','Bersyukur','Gratitude','Şükür','কৃতজ্ঞতা'),
    icon: '🙌', color: '#00897B',
    duas: [
      { id:'gr1', arabic:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', transliteration:'Allahumma a\'inni \'ala dhikrika wa shukrika wa husni \'ibadatik', translations:T('O Allah, help me to remember You, give thanks, and worship You well.','اللهم أعني على ذكرك وشكرك','உன்னை நினைவு கூர, நன்றி செலுத்த','നിന്നെ ഓർക്കാനും നന്ദി','تیرے ذکر و شکر پر مدد','तेरे ज़िक्र व शुक्र पर मदद','bantu aku mengingat-Mu dan bersyukur','aide-moi à Te mentionner et remercier','Seni zikretmemde yardım','তোমাকে স্মরণ ও শুকরিয়া'), reference:'Abu Dawud 2/85', repeat:1 },
      { id:'gr2', arabic:'اللَّهُمَّ لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ', transliteration:'Allahumma lakal-hamdu kama yanbaghi li-jalali wajhika wa \'azimi sultanik', translations:T('O Allah, praise is Yours as befits the majesty of Your Face and the greatness of Your Sovereignty.','اللهم لك الحمد كما ينبغي','உன் முகத்தின் மகிமைக்கு தகுந்த புகழ്','നിന്റെ മുഖത്തിന്റെ മഹിമയ്ക്ക്','تیری شان کے لائق تعریف','तेरी शान के लायक़ तारीफ़','puji bagi-Mu sebagaimana','louange à Toi comme il sied','yüzünün celaline layık','তোমার মহিমা অনুযায়ী'), reference:'Ibn Majah 2/315', repeat:1, benefit:'Angels record it 10 times' },
    ]
  },
  {
    id: 'forgiveness-parents',
    name: T('For Deceased Parents','للموتى من الوالدين','இறந்த பெற்றோர்','മരിച്ച മാതാപിതാക്കൾ','وفات شدہ والدین','वफ़ात शुदा वालिदैन','Untuk Orang Tua','Pour parents décédés','Vefat eden ebeveyn','মৃত পিতা-মাতার জন্য'),
    icon: '🕯️', color: '#455A64',
    duas: [
      { id:'fp1', arabic:'اللَّهُمَّ اغْفِرْ لِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', transliteration:'Allahummaghfir liwalidayya warhamhuma kama rabbayani saghira', translations:T('O Allah, forgive my parents and have mercy on them as they raised me when I was small.','اللهم اغفر لوالدي وارحمهما','என் பெற்றோரை மன்னி, இரக்கம் காட்டு','എന്റെ മാതാപിതാക്കളെ പൊറുക്കണമേ','میرے والدین کو بخش دے','मेरे वालिदैन को बख्श दे','ampunilah orang tuaku','pardonne à mes parents','anne-babamı bağışla','আমার পিতা-মাতাকে ক্ষমা'), reference:'General', repeat:1, benefit:'For deceased parents' },
    ]
  },
  {
    id: 'provision',
    name: T('Provision & Rizq','الرزق والبركة','ரிஸ்க் & பரக்கத்','റിസ്ഖ് & ബറക','رزق اور برکت','रिज़्क़ और बरकत','Rezeki & Berkah','Subsistance','Rızık & Bereket','রিযিক ও বরকত'),
    icon: '💎', color: '#FFB300',
    duas: [
      { id:'pv1', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا', transliteration:'Allahumma inni as\'aluka \'ilman nafi\'an wa rizqan tayyiban wa \'amalan mutaqabbala', translations:T('O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.','اللهم إني أسألك علما نافعا','பயனுள்ள அறிவு, நல்ல ரிஸ்க்','ഗുണകരമായ വിദ്യ, നല്ല റിസ്ഖ','فائدہ مند علم، پاک رزق','फ़ायदेमंद इल्म, पाक रिज़्क़','ilmu bermanfaat, rezeki baik','savoir bénéfique, bonne subsistance','faydalı ilim, helal rızık','উপকারী জ্ঞান, ভালো রিযিক'), reference:'Ibn Majah 1/295', repeat:1, benefit:'Morning dua for rizq' },
      { id:'pv2', arabic:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ', transliteration:'Allahummak-fini bihalalika \'an haramik wa agh-nini bifadlika \'amman siwak', translations:T('O Allah, suffice me with Your lawful against Your forbidden, and enrich me by Your grace from all besides You.','اللهم اكفني بحلالك عن حرامك','உன் ஹலாலால் ஹராமிலிருந்து','ഹലാൽകൊണ്ട് ഹറാമിൽ നിന്ന്','حلال سے حرام سے بے نیاز','हलाल से हराम से बेनियाज़','cukupkan dengan halal dari haram','suffis-moi par Ton licite','helalınla haramdan','হালাল দিয়ে হারাম থেকে'), reference:'Tirmidhi 5/526', repeat:1, benefit:'For debt relief & rizq' },
      { id:'pv3', arabic:'اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ', transliteration:'Allahumma barik lana fihi wa zidna minh', translations:T('O Allah, bless us in it and increase us from it.','اللهم بارك لنا فيه','இதில் பரக்கத் அருள்வாயாக','ഇതിൽ അനുഗ്രഹിക്കണമേ','اس میں برکت عطا فرما','इस में बरकत अता फरमा','berkahi kami di dalamnya','bénis-nous en cela','bunda bize bereket','এতে বরকত দাও'), reference:'General', repeat:1, benefit:'When receiving provision' },
    ]
  },
  {
    id: 'patience',
    name: T('Patience & Perseverance','الصبر والثبات','பொறுமை','ക്ഷമ','صبر','सब्र','Kesabaran','Patience','Sabır','ধৈর্য'),
    icon: '⏳', color: '#5D4037',
    duas: [
      { id:'pa1', arabic:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', transliteration:'Rabbana afrigh \'alayna sabran wa thabbit aqdamana wansurna \'alal-qawmil-kafirin', translations:T('Our Lord, pour upon us patience, firm our feet, and help us against the disbelieving people.','ربنا أفرغ علينا صبرا','எங்கள் மீது பொறையை வார்ச்சுவாயாக','ഞങ്ങളുടെ മേൽ ക്ഷമ ചൊരിയണമേ','ہم پر صبر برسا','हम पर सब्र बरसा','curahkan kesabaran atas kami','verse sur nous la patience','üzerimize sabır dök','আমাদের উপর ধৈর্য ঢালো'), reference:'Quran 2:250', repeat:1, benefit:'For patience in difficulty' },
      { id:'pa2', arabic:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', transliteration:'Hasbunallahu wa ni\'mal-wakil', translations:T('Allah is sufficient for us and He is the best disposer of affairs.','حسبنا الله ونعم الوكيل','அல்லாஹ் போதுமானவன், நல்ல பொறுப்பாளன்','അല്ലാഹു മതി, എത്ര നല്ല കാവൽ','اللہ ہمیں کافی ہے','अल्लाह हमें काफ़ी है','Allah cukup bagi kami','Allah nous suffit','Allah bize yeter','আল্লাহ আমাদের জন্য যথেষ্ট'), reference:'Quran 3:173', repeat:1, benefit:'When facing adversity' },
    ]
  },
  {
    id: 'guidance',
    name: T('Guidance & Steadfastness','الهداية والثبات','நேர்வழி','മാർഗ്ഗദർശനം','ہدایت','हिदायत','Petunjuk','Guidance','Hidayet','হেদায়েত'),
    icon: '🧭', color: '#006064',
    duas: [
      { id:'gd1', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى', transliteration:'Allahumma inni as\'alukal-huda wat-tuqa wal-\'afafa wal-ghina', translations:T('O Allah, I ask You for guidance, piety, chastity, and richness.','اللهم إني أسألك الهدى والتقى','நேர்வழி, பயபக்தி, கற்பு, செல்வം','മാർഗ്ഗദർശനം, ഭക്തി, പവിത്രത','ہدایت، تقوی، پاکدامنی','हिदायत, तक़वा, पाकदामनी','petunjuk, takwa, kesucian','guidance, piété, chasteté','hidayet, takva, iffet','হেদায়েত, তাকওয়া, পবিত্রতা'), reference:'Muslim 4/2083', repeat:1, benefit:'Comprehensive morning dua' },
      { id:'gd2', arabic:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', transliteration:'Ya muqallibal-qulub, thabbit qalbi \'ala dinik', translations:T('O Turner of hearts, make my heart firm upon Your religion.','يا مقلب القلوب ثبت قلبي على دينك','இருதயங்களைத் திருப்புவோனே, என் இருதயத்தை உன் மார்க்கத்தில் உறுதிப்படுத்து','ഹൃദയങ്ങളെ തിരിക്കുന്നവനേ','اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت','ऐ दिलों को पलटने वाले! मेरे दिल को तेरे दीन पर साबित','Wahai Pembolak-balik hati, teguhkan hatiku','Ô Toi qui retourne les cœurs, affermis mon cœur','Kalpleri çeviren! Kalbimi dinin üzere sabit','হে অন্তর পালটানোর! আমার অন্তরকে দ্বীনে সাবিত'), reference:'Tirmidhi 5/439', repeat:1, benefit:'For steadfastness in faith' },
    ]
  },
  {
    id: 'marriage',
    name: T('Marriage & Spouse','الزواج','திருமணം','വിവാഹം','شادی','शादी','Pernikahan','Mariage','Evlilik','বিবাহ'),
    icon: '💍', color: '#AD1457',
    duas: [
      { id:'mg1', arabic:'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', transliteration:'Rabbi inni lima anzalta ilayya min khayrin faqir', translations:T('My Lord, I am in need of whatever good You send down to me. (Dua of Musa for marriage)','رب إني لما أنزلت إلي من خير فقير','நீ அனுப்பும் நன்மைக்கு நான் தேவைப்படுகிறேൻ','നീ ഇറക്കുന്ന നന്മയ്ക്ക് ഞാൻ ആവശ്യക്കാരൻ','مجھے تیری بھلائی کی ضرورت','मुझे तेरी भलाई की ज़रूरत','aku butuh kebaikan yang Engkau turunkan','j\'ai besoin du bien que Tu envoies','indireceğin hayra muhtacım','তুমি নাযিল করা কল্যাণের মুখাপেক্ষী'), reference:'Quran 28:24 - Musa', repeat:1, benefit:'For finding a spouse' },
      { id:'mg2', arabic:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', transliteration:'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin waj\'alna lil-muttaqina imama', translations:T('Our Lord, grant us from our spouses and offspring comfort to our eyes and make us leaders of the righteous.','ربنا هب لنا من أزواجنا','எங்கள் மனைவியர் மற்றும் சந்ததியில் கண் குளிர்ச்சി','ഞങ്ങളുടെ ഭാര്യമാരിൽ നിന്ന് കണ്ണിന് കുളിർ','بیویوں اور اولاد سے آنکھوں کی ٹھنڈک','बीवियों और औलाद से आँखों की ठंडक','istri dan keturunan penyejuk hati','épouses et descendants consolation','eşlerimizden göz aydınlığı','স্ত্রী ও সন্তানদের থেকে চোখের শীতলতা'), reference:'Quran 25:74', repeat:1, benefit:'For family happiness' },
    ]
  },
  {
    id: 'night',
    name: T('Before Sleep','قبل النوم','உறங்கும் முன்','ഉറങ്ങുന്നതിന് മുമ്പ്','سونے سے پہلے','सोने से पहले','Sebelum tidur','Avant de dormir','Uyumadan önce','ঘুমানোর আগে'),
    icon: '🌙', color: '#311B92',
    duas: [
      { id:'nt1', arabic:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', transliteration:'Bismika Allahumma amutu wa ahya', translations:T('In Your name, O Allah, I die and I live.','باسمك اللهم أموت وأحيا','உன் பெயரால் இறக்கிறேன் வாழ்கிறேன்','നിന്റെ നാമത്തിൽ മരിക്കുക ജീവിക്കുക','تیرے نام سے مرتا اور جیتا ہوں','तेरे नाम से मरता जीता हूं','Dengan nama-Mu aku mati dan hidup','En Ton nom je meurs et vis','Senin adıyla ölüp yaşıyorum','তোমার নামে মরি ও বাঁচি'), reference:'Bukhari 11/113', repeat:1, benefit:'Before sleeping' },
      { id:'nt2', arabic:'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ', transliteration:'Allahumma qini \'adhabaka yawma tab\'athu \'ibadak', translations:T('O Allah, protect me from Your punishment on the Day You resurrect Your servants.','اللهم قني عذابك يوم تبعث عبادك','உன் அடியார்களை உயிர்ப்பிக்கும் நாளில் வேதனையிலிருந்து','നിന്റെ അടിമകളെ ഉയിർപ്പിക്കുന്ന ദിവസം','قیامت کے دن عذاب سے بچا','क़ियामत के दिन अज़ाब से बचा','lindungi dari azab hari kebangkitan','protège-moi du châtiment du Jour','kıyamet günü azabından koru','কিয়ামতের দিন আযাব থেকে'), reference:'Abu Dawud 4/311', repeat:3, benefit:'Before sleeping' },
      { id:'nt3', arabic:'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ وَفَوَّضْتُ أَمْرِي إِلَيْكَ وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ رَغْبَةً وَرَهْبَةً إِلَيْكَ', transliteration:'Allahumma aslamtu nafsi ilayk, wa fawwadtu amri ilayk, wa alja\'tu zahri ilayk, raghbatan wa rahbatan ilayk', translations:T('O Allah, I submit myself to You, entrust my affair to You, and turn my back to You, out of desire and fear of You.','اللهم أسلمت نفسي إليك','என்னை உன்னிடம் ஒப்படைக்கிறேன்','ഞാൻ എന്റെ കാര്യം നിന്നെ ഏൽപ്പിക്കുന്നു','میں نے اپنے آپ کو تیرے حوالے کیا','मैं ने अपने आप को तेरे हवाले किया','aku menyerahkan diri kepada-Mu','je me soumets à Toi','nefsimi sana teslim ettim','আমাকে তোমার কাছে সমর্পণ'), reference:'Bukhari 11/113', repeat:1, benefit:'If you die that night, you die on fitrah' },
    ]
  },
  {
    id: 'waking',
    name: T('Upon Waking','عند الاستيقاظ','எழுந்ததும்','ഉണരുമ്പോൾ','جاگنے پر','जागने पर','Saat bangun','Au réveil','Uyanınca','জাগার পর'),
    icon: '☀️', color: '#F9A825',
    duas: [
      { id:'wk1', arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', transliteration:'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur', translations:T('All praise is for Allah who gave us life after death, and unto Him is resurrection.','الحمد لله الذي أحيانا بعد ما أماتنا','மரணத்திற்குப் பின் உயிர்ப்பித்த அല്ലாஹ്வுக்கு','മരിപ്പിച്ച ശേഷം ജീവിപ്പിച്ച അല്ലാഹുവിന്','مرنے کے بعد زندہ کرنے والے','मरने के बाद ज़िंदा करने वाले','Yang menghidupkan setelah mematikan','Qui nous a donné la vie après la mort','Öldükten sonra dirilten','মৃত্যুর পর জীবিতকারী'), reference:'Bukhari 11/113', repeat:1, benefit:'Upon waking' },
      { id:'wk2', arabic:'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ', transliteration:'Allahumma ma asbaha bi min ni\'matin aw bi-ahadin min khalqika faminka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr', translations:T('O Allah, whatever blessing has come to me or to any of Your creation is from You alone, no partner have You. So praise and thanks are Yours.','اللهم ما أصبح بي من نعمة','எனக்கும் உன் படைப்புகளுக்கும் வந்த அருள் உன்னிடமிருந்தே','എനിക്കും നിന്റെ സൃഷ്ടികൾക്കും വന്ന അനുഗ്രഹം','مجھے یا تیری مخلوق میں سے کسی کو جو نعمت','मुझे या तेरी मखलूक को जो नेमत','nikmat yang datang kepadaku','la bénédiction qui m\'est venue','bana veya mahlukatına gelen nimet','আমাকে বা তোমার সৃষ্টিতে যে নেয়ামত'), reference:'Abu Dawud 4/317', repeat:1, benefit:'Upon waking - whoever says it has fulfilled gratitude' },
    ]
  },
  {
    id: 'evil-eye',
    name: T('Protection from Evil Eye','الحسد والعين','கண் தீண்டல்','ദൃഷ്ടിദോഷം','نظر بد','बुरी नज़र','Ain & Hasad','Mauvais œil','Kem gözü','কুদৃষ্টি'),
    icon: '🧿', color: '#D32F2F',
    duas: [
      { id:'eo1', arabic:'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ', transliteration:'A\\'udhu bikalimatillahit-tammati min kulli shaytanin wa hammah, wa min kulli \\'aynin lammah', translations:T('I seek refuge in the perfect words of Allah from every devil and every poisonous reptile, and from every evil eye.','أعوذ بكلمات الله التامات','அல்லாஹ்வின் முழுமையான வார்த்தைகளில்','അല്ലാഹുവിന്റെ പൂർണ്ണ വാക്കുകളിൽ','اللہ کی کامل کلاموں کی پناہ','अल्लाह की कामिल कलामों की पनाह','Aku berlindung dengan kalimat Allah','Je cherche refuge dans les paroles d\'Allah','Allah\'ın mükemmel kelimelerine','আল্লাহর পূর্ণ বাণীতে'), reference:'Bukhari 4/114', repeat:1, benefit:'Protection from evil eye and harm' },
    ]
  },
  {
    id: 'laylatul-qadr',
    name: T('Laylatul Qadr','ليلة القدر','லைலத்துல் ஃபத்ர்','ലൈലത്തുൽ ഖദ്ർ','شب قدر','शब-ए-क़द्र','Lailatul Qadr','Nuit du Destin','Kadir Gecesi','ক্বদরের রাত'),
    icon: '✨', color: '#7B1FA2',
    duas: [
      { id:'lq1', arabic:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', transliteration:'Allahumma innaka \\'afuwwun tuhibbul-\\'afwa fa\\'fu \\'anni', translations:T('O Allah, You are the Pardoner, You love to pardon, so pardon me.','اللهم إنك عفو تحب العفو فاعف عني','இறைவா, நீ மன்னிப்பவன், மன்னிப்பை விரும்புகிறாய்','അല്ലാഹുവേ, നീ മാപ്പുനൽകുന്നവൻ','اے اللہ! تو معاف کرنے والا ہے','ऐ अल्लाह! तू माफ़ करने वाला','Ya Allah, Engkau Maha Pemaaf','Ô Allah, Tu es le Pardonneur','Allah\'ım, Sen affedicisin','হে আল্লাহ! তুমি ক্ষমাকারী'), reference:'Tirmidhi 5/544', repeat:100, benefit:'Say on Laylatul Qadr' },
    ]
  },
  {
    id: 'jumuah',
    name: T('Jumu\'ah (Friday)','يوم الجمعة','ஜுமுஆ','ജുമുഅ','جمعہ','जुमा','Jumat','Vendredi','Cuma','জুমুআ'),
    icon: '🕌', color: '#1B5E20',
    duas: [
      { id:'jm1', arabic:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ', transliteration:'Allahumma salli \\'ala Muhammadin \\'abdika wa rasulik, kama sallayta \\'ala Ibrahim wa \\'ala ali Ibrahim', translations:T('O Allah, send prayers upon Muhammad, Your servant and Messenger, as You sent prayers upon Ibrahim and the family of Ibrahim.','اللهم صل على محمد عبدك ورسولك','இறைவா, முஹம்மது மீது ரஹ்மத் அனுப்புவாயாக','അല്ലാഹുവേ, മുഹമ്മദിന്റെ മേൽ റഹ്മത്ത്','اے اللہ! محمد ﷺ پر رحمت نازل فرما','ऐ अल्लाह! मुहम्मद ﷺ पर रहमत','Ya Allah, limpahkan shalawat atas Muhammad','Ô Allah, envoie des prières sur Muhammad','Allah\'ım, Muhammed\'e salat et','হে আল্লাহ! মুহাম্মদ ﷺ এর প্রতি রহমত'), reference:'Bukhari', repeat:100, benefit:'Best day to send salawat - Friday' },
    ]
  },
  {
    id: 'new-baby',
    name: T('New Baby & Children','المولود والأطفال','புதிய குழந்தை','പുതിയ കുഞ്ഞ്','نیا بچہ','नया बच्चा','Bayi Baru','Nouveau-né','Yeni Bebek','নতুন শিশু'),
    icon: '👶', color: '#FF80AB',
    duas: [
      { id:'nb1', arabic:'بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوبِ لَكَ وَشَكَرْتَ الْوَاهِبَ وَبَلَغَ أَشُدَّهُ وَرُزِقْتَ بِرَّهُ', transliteration:'Barakallahu laka fil-mawhubi lak, wa shakartal-wahib, wa balagha ashuddahu, wa ruziqta birrah', translations:T('May Allah bless you in the gift given to you, and may you thank the Giver, and may the child reach maturity, and may you be granted his righteousness.','بارك الله لك في الموهوب لك','அல்லாஹ் உனக்கு அளிக்கப்பட்டதில் பரக்கத்','അല്ലാഹു നിനക്ക് തന്നതിൽ അനുഗ്രഹിക്കട്ടെ','اللہ تجھے دی ہوئی نعمت میں برکت دے','अल्लाह तुझे दी हुई नेमत में बरकत दे','Semoga Allah memberkahi karunia yang diberikan','Qu\'Allah bénisse le don qui t\'est fait','Allah sana verilen nimette bereket','আল্লাহ তোমাকে প্রদত্ত নেয়ামতে বরকত'), reference:'General', repeat:1, benefit:'Congratulations for newborn' },
    ]
  },
  {
    id: 'house-vehicle',
    name: T('House & Vehicle','البيت والسيارة','வீடு & வாகனம்','വീടും വാഹനവും','گھر اور گاڑی','घर और गाड़ी','Rumah & Kendaraan','Maison & Véhicule','Ev & Araç','ঘর ও গাড়ি'),
    icon: '🏠', color: '#4E342E',
    duas: [
      { id:'hv1', arabic:'اللَّهُمَّ بَارِكْ لَنَا فِي دَارِنَا وَاكْفِنَا شَرَّ مَا فِيهَا', transliteration:'Allahumma barik lana fi darina wakfina sharra ma fiha', translations:T('O Allah, bless us in our home and protect us from its evil.','اللهم بارك لنا في دارنا','இறைவா, எங்கள் வீட்டில் பரக்கத்','അല്ലാഹുവേ, ഞങ്ങളുടെ വീട്ടിൽ അനുഗ്രഹ','اے اللہ! ہمارے گھر میں برکت','ऐ अल्लाह! हमारे घर में बरकत','Ya Allah, berkahi rumah kami','Ô Allah, bénis notre maison','Allah\'ım, evimizde bereket','হে আল্লাহ! আমাদের ঘরে বরকত'), reference:'General', repeat:1, benefit:'Blessing for new home' },
    ]
  },
  {
    id: 'success',
    name: T('Success & Achievement','النجاح','வெற்றி','വിജയം','کامیابی','कामयाबी','Kesuksesan','Succès','Başarı','সাফল্য'),
    icon: '🏆', color: '#FFD600',
    duas: [
      { id:'sc1', arabic:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي', transliteration:'Rabbishrah li sadri wa yassir li amri wahlul \\'uqdatan min lisani yafqahu qawli', translations:T('My Lord, expand my chest, ease my task, and untie the knot from my tongue that they may understand my speech.','رب اشرح لي صدري','என் மார்பை விரிவுபடுத்துவாயாக','നെഞ്ച് വിശലമാക്കണമേ','میرا سینہ کھول','मेरा सीना खोल','lapangkan dadaku','ouvre-moi la poitrine','göğsümü aç','বক্ষ প্রসারিত করো'), reference:'Quran 20:25-28', repeat:1, benefit:'Before important tasks' },
    ]
  },
  {
    id: 'difficulties',
    name: T('Difficulties & Hardship','الشدة والضيق','கஷ்டங்கள்','ബുദ്ധിമുട്ടുകൾ','مشکلات','मुश्किलات','Kesulitan','Difficultés','Zorluklar','কঠিন সময়'),
    icon: '⚠️', color: '#BF360C',
    duas: [
      { id:'df1', arabic:'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ', transliteration:'La ilaha illallahul-\\'azimul-halim, la ilaha illallahu Rabbul-\\'Arshil-\\'azim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-\\'Arshil-karim', translations:T('None has right to be worshipped except Allah the Mighty, the Forbearing. None has right except Allah, Lord of the Mighty Throne.','لا إله إلا الله العظيم الحليم','இணையற்ற மகத்தான அல்லாஹ்','അല്ലാഹു ഒഴികെ ആരാധനാർഹനില്ല','اللہ کے سوا کوئی معبود نہیں','अल्लाह के सिवा कोई माबूद नहीं','Tiada tuhan selain Allah','Nul dieu sauf Allah','Allah\'tan başka ilah yok','আল্লাহ ছাড়া কোনো ইলাহ নেই'), reference:'Bukhari 7/158', repeat:1, benefit:'Dua of distress - Prophet ﷺ said it in difficulty' },
    ]
  },
  {
    id: 'good-character',
    name: T('Good Character','حسن الخلق','நல்ல பண்பு','സദ്സ്വഭാവം','اچھے اخلاق','अच्छे अख़लाक़','Akhlak Mulia','Bon Caractère','Güzel Ahlak','সুন্দর চরিত্র'),
    icon: '💎', color: '#00BFA5',
    duas: [
      { id:'gc1', arabic:'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي', transliteration:'Allahumma kama hassanta khalqi fa hassin khuluqi', translations:T('O Allah, just as You made my appearance beautiful, make my character beautiful.','اللهم كما حسنت خلقي فحسن خلقي','என் உருவை அழகாக்கியது போல் குணத்தையும்','എന്റെ രൂപം സുന്ദരമാക്കിയതുപോലെ','جیسا میرا ظاہر خوبصورت','जैसा मेरा ज़ाहिर खूबसूरत','seperti Engkau perindah rupaku','comme Tu as embelli mon apparence','dış görünüşümü güzelleştirdiğin','যেমন আমার বাহ্যিক রূপ'), reference:'Ahmad', repeat:1, benefit:'For good character' },
    ]
  },
  {
    id: 'deceased',
    name: T('For Deceased','للموتى','இறந்தவர்களுக்கு','മരിച്ചവർക്ക്','فوت شدگان','मृतकों के लिए','Untuk yang meninggal','Pour les défunts','Vefat edenler için','মৃতদের জন্য'),
    icon: '🕯️', color: '#455A64',
    duas: [
      { id:'dc1', arabic:'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ', transliteration:'Allahummaghfir lahu warhamhu wa\\'afihi wa\\'fu \\'anh wa akrim nuzulahu wa wassi\\' mudkhalahu', translations:T('O Allah, forgive him, have mercy on him, grant him well-being, pardon him, honor his reception, and widen his entrance.','اللهم اغفر له وارحمه','இறைவா, மன்னிப்பளி, இரக்கம் காட்டு','അല്ലാഹുവേ, പൊറുക്കണമേ','اے اللہ! بخش دے، رحم فرما','ऐ अल्लाह! बख्श दे, रहम फरमा','Ya Allah, ampunilah dia','Ô Allah, pardonne-lui','Allah\'ım! Bağışla, merhamet et','হে আল্লাহ! ক্ষমা করো, দয়া করো'), reference:'Muslim 2/663', repeat:1, benefit:'For deceased Muslim' },
    ]
  },
  {
    id: 'provision',
    name: T('Provision & Rizq','الرزق','ரிஸ்க்','റിസ്ഖ്','رزق','रिज़्क़','Rezeki','Subsistance','Rızık','রিযিক'),
    icon: '💰', color: '#FF6F00',
    duas: [
      { id:'pv1', arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا', transliteration:'Allahumma inni as\\'aluka \\'ilman nafi\\'an wa rizqan tayyiban wa \\'amalan mutaqabbala', translations:T('O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.','اللهم إني أسألك علما نافعا','பயனுள்ள அறிவு, நல்ல ரிஸ்க்','ഗുണകരമായ വിദ്യ, നല്ല റിസ്ഖ','فائدہ مند علم، پاک رزق','फ़ायदेमंद इल्म, पाक रिज़्क़','ilmu bermanfaat, rezeki baik','savoir bénéfique, bonne subsistance','faydalı ilim, helal rızık','উপকারী জ্ঞান, ভালো রিযিক'), reference:'Ibn Majah', repeat:1, benefit:'Morning dua for rizq' },
    ]
  },
  {
    id: 'gratitude',
    name: T('Gratitude','الشكر','நன்றி','നന്ദി','شکر','शुक्र','Bersyukur','Gratitude','Şükür','কৃতজ্ঞতা'),
    icon: '🙏', color: '#00C853',
    duas: [
      { id:'gt1', arabic:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', transliteration:'Allahumma a\\'inni \\'ala dhikrika wa shukrika wa husni \\'ibadatik', translations:T('O Allah, help me to remember You, give thanks, and worship You well.','اللهم أعني على ذكرك وشكرك','உன்னை நினைவு கூர, நன்றி செலுத்த','നിന്നെ ഓർക്കാനും നന്ദി','تیرے ذکر و شکر پر مدد','तेरे ज़िक्र व शुक्र पर मदद','bantu aku mengingat-Mu dan bersyukur','aide-moi à Te mentionner et remercier','Seni zikretmemde yardım','তোমাকে স্মরণ ও শুকরিয়া'), reference:'Abu Dawud', repeat:1, benefit:'For gratitude' },
    ]
  },
  {
    id: 'patience',
    name: T('Patience','الصبر','பொறுமை','ക്ഷമ','صبر','सब्र','Kesabaran','Patience','Sabır','ধৈর্য'),
    icon: '⏳', color: '#5D4037',
    duas: [
      { id:'pt1', arabic:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', transliteration:'Rabbana afrigh \\'alayna sabran wa thabbit aqdamana wansurna \\'alal-qawmil-kafirin', translations:T('Our Lord, pour upon us patience, firm our feet, and help us against the disbelieving people.','ربنا أفرغ علينا صبرا','எங்கள் மீது பொறையை வார்ச்சுவாயாக','ഞങ്ങളുടെ മേൽ ക്ഷമ ചൊരിയണമേ','ہم پر صبر برسا','हम पर सब्र बरसा','curahkan kesabaran atas kami','verse sur nous la patience','üzerimize sabır dök','আমাদের উপর ধৈর্য ঢালো'), reference:'Quran 2:250', repeat:1, benefit:'For patience in difficulty' },
    ]
  },
  {
    id: 'guidance',
    name: T('Guidance','الهداية','நெறி','മാർഗ്ഗദർശനം','ہدایت','हिदायत','Petunjuk','Guidance','Hidayet','হেদায়েত'),
    icon: '🧭', color: '#006064',
    duas: [
      { id:'gd1', arabic:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', transliteration:'Ya muqallibal-qulub, thabbit qalbi \\'ala dinik', translations:T('O Turner of hearts, make my heart firm upon Your religion.','يا مقلب القلوب ثبت قلبي على دينك','இருதயங்களைத் திருப்புவோனே','ഹൃദയങ്ങളെ തിരിക്കുന്നവനേ','اے دلوں کو پھیرنے والے!','ऐ दिलों को पलटने वाले!','Wahai Pembolak-balik hati','Ô Toi qui retourne les cœurs','Kalpleri çeviren!','হে অন্তর পালটানোর!'), reference:'Tirmidhi', repeat:1, benefit:'For steadfastness in faith' },
    ]
  },
  {
    id: 'marriage',
    name: T('Marriage','الزواج','திருமணം','വിവാഹം','شادی','शादी','Pernikahan','Mariage','Evlilik','বিবাহ'),
    icon: '💍', color: '#AD1457',
    duas: [
      { id:'mg1', arabic:'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', transliteration:'Rabbi inni lima anzalta ilayya min khayrin faqir', translations:T('My Lord, I am in need of whatever good You send down to me.','رب إني لما أنزلت إلي من خير فقير','நீ அனுப்பும் நன்மைக்கு நான் தேவை','നീ ഇറക്കുന്ന നന്മയ്ക്ക് ഞാൻ ആവശ്യക്കാരൻ','مجھے تیری بھلائی کی ضرورت','मुझे तेरी भलाई की ज़रूरत','aku butuh kebaikan yang Engkau turunkan','j\\'ai besoin du bien que Tu envoies','indireceğin hayra muhtacım','তুমি নাযিল করা কল্যাণের মুখাপেক্ষী'), reference:'Quran 28:24', repeat:1, benefit:'For finding a spouse' },
    ]
  },
];

export const asmaHusna: AsmaHusna[] = Array.from({length: 99}, (_, i) => {
  const names = [
    {ar:'الرَّحْمَنُ',tr:'Ar-Rahman',en:'The Most Gracious'},{ar:'الرَّحِيمُ',tr:'Ar-Raheem',en:'The Most Merciful'},
    {ar:'الْمَلِكُ',tr:'Al-Malik',en:'The King'},{ar:'الْقُدُّوسُ',tr:'Al-Quddus',en:'The Most Holy'},
    {ar:'السَّلَامُ',tr:'As-Salam',en:'The Source of Peace'},{ar:'الْمُؤْمِنُ',tr:'Al-Mu\'min',en:'The Guardian of Faith'},
    {ar:'الْمُهَيْمِنُ',tr:'Al-Muhaymin',en:'The Protector'},{ar:'الْعَزِيزُ',tr:'Al-Aziz',en:'The Almighty'},
    {ar:'الْجَبَّارُ',tr:'Al-Jabbar',en:'The Compeller'},{ar:'الْمُتَكَبِّرُ',tr:'Al-Mutakabbir',en:'The Supreme'},
    {ar:'الْخَالِقُ',tr:'Al-Khaliq',en:'The Creator'},{ar:'الْبَارِئُ',tr:'Al-Bari\'',en:'The Originator'},
    {ar:'الْمُصَوِّرُ',tr:'Al-Musawwir',en:'The Fashioner'},{ar:'الْغَفَّارُ',tr:'Al-Ghaffar',en:'The Forgiver'},
    {ar:'الْقَهَّارُ',tr:'Al-Qahhar',en:'The Subduer'},{ar:'الْوَهَّابُ',tr:'Al-Wahhab',en:'The Bestower'},
    {ar:'الرَّزَّاقُ',tr:'Ar-Razzaq',en:'The Provider'},{ar:'الْفَتَّاحُ',tr:'Al-Fattah',en:'The Opener'},
    {ar:'اَلْعَلِيْمُ',tr:'Al-Alim',en:'The All-Knowing'},{ar:'الْقَابِضُ',tr:'Al-Qabid',en:'The Constrictor'},
    {ar:'الْبَاسِطُ',tr:'Al-Basit',en:'The Expander'},{ar:'الْخَافِضُ',tr:'Al-Khafid',en:'The Abaser'},
    {ar:'الرَّافِعُ',tr:'Ar-Rafi',en:'The Exalter'},{ar:'الْمُعِزُّ',tr:'Al-Mu\'izz',en:'The Honorer'},
    {ar:'الْمُذِلُّ',tr:'Al-Mudhill',en:'The Humiliator'},{ar:'السَّمِيعُ',tr:'As-Sami',en:'The All-Hearing'},
    {ar:'الْبَصِيرُ',tr:'Al-Basir',en:'The All-Seeing'},{ar:'الْحَكَمُ',tr:'Al-Hakam',en:'The Judge'},
    {ar:'الْعَدْلُ',tr:'Al-Adl',en:'The Just'},{ar:'اللَّطِيفُ',tr:'Al-Latif',en:'The Subtle'},
    {ar:'الْخَبِيرُ',tr:'Al-Khabir',en:'The All-Aware'},{ar:'الْحَلِيمُ',tr:'Al-Halim',en:'The Forbearing'},
    {ar:'الْعَظِيمُ',tr:'Al-Azim',en:'The Magnificent'},{ar:'الْغَفُورُ',tr:'Al-Ghafur',en:'The All-Forgiving'},
    {ar:'الشَّكُورُ',tr:'Ash-Shakur',en:'The Appreciative'},{ar:'الْعَلِيُّ',tr:'Al-Ali',en:'The Most High'},
    {ar:'الْكَبِيرُ',tr:'Al-Kabir',en:'The Great'},{ar:'الْحَفِيظُ',tr:'Al-Hafiz',en:'The Preserver'},
    {ar:'الْمُقِيتُ',tr:'Al-Muqit',en:'The Nourisher'},{ar:'الْحَسِيبُ',tr:'Al-Hasib',en:'The Reckoner'},
    {ar:'الْجَلِيلُ',tr:'Al-Jalil',en:'The Majestic'},{ar:'الْكَرِيمُ',tr:'Al-Karim',en:'The Generous'},
    {ar:'الرَّقِيبُ',tr:'Ar-Raqib',en:'The Watchful'},{ar:'الْمُجِيبُ',tr:'Al-Mujib',en:'The Responsive'},
    {ar:'الْوَاسِعُ',tr:'Al-Wasi',en:'The All-Encompassing'},{ar:'الْحَكِيمُ',tr:'Al-Hakim',en:'The Wise'},
    {ar:'الْوَدُودُ',tr:'Al-Wadud',en:'The Loving'},{ar:'الْمَجِيدُ',tr:'Al-Majid',en:'The Glorious'},
    {ar:'الْبَاعِثُ',tr:'Al-Ba\'ith',en:'The Resurrector'},{ar:'الشَّهِيدُ',tr:'Ash-Shahid',en:'The Witness'},
    {ar:'الْحَقُّ',tr:'Al-Haqq',en:'The Truth'},{ar:'الْوَكِيلُ',tr:'Al-Wakil',en:'The Trustee'},
    {ar:'الْقَوِيُّ',tr:'Al-Qawiyy',en:'The Strong'},{ar:'الْمَتِينُ',tr:'Al-Matin',en:'The Firm'},
    {ar:'الْوَلِيُّ',tr:'Al-Waliyy',en:'The Protecting Friend'},{ar:'الْحَمِيدُ',tr:'Al-Hamid',en:'The Praiseworthy'},
    {ar:'الْمُحْصِي',tr:'Al-Muhsi',en:'The Accounter'},{ar:'الْمُبْدِئُ',tr:'Al-Mubdi',en:'The Originator'},
    {ar:'الْمُعِيدُ',tr:'Al-Mu\'id',en:'The Restorer'},{ar:'الْمُحْيِي',tr:'Al-Muhyi',en:'The Giver of Life'},
    {ar:'اَلْمُمِيتُ',tr:'Al-Mumit',en:'The Bringer of Death'},{ar:'الْحَيُّ',tr:'Al-Hayy',en:'The Ever Living'},
    {ar:'الْقَيُّومُ',tr:'Al-Qayyum',en:'The Self-Existing'},{ar:'الْوَاجِدُ',tr:'Al-Wajid',en:'The Finder'},
    {ar:'الْمَاجِدُ',tr:'Al-Majid',en:'The Noble'},{ar:'الْوَاحِدُ',tr:'Al-Wahid',en:'The One'},
    {ar:'اَلاَحَدُ',tr:'Al-Ahad',en:'The Indivisible'},{ar:'الصَّمَدُ',tr:'As-Samad',en:'The Eternal'},
    {ar:'الْقَادِرُ',tr:'Al-Qadir',en:'The Able'},{ar:'الْمُقْتَدِرُ',tr:'Al-Muqtadir',en:'The Powerful'},
    {ar:'الْمُقَدِّمُ',tr:'Al-Muqaddim',en:'The Expediter'},{ar:'الْمُؤَخِّرُ',tr:'Al-Mu\'akhkhir',en:'The Delayer'},
    {ar:'الْأَوَّلُ',tr:'Al-Awwal',en:'The First'},{ar:'الْآخِرُ',tr:'Al-Akhir',en:'The Last'},
    {ar:'الظَّاهِرُ',tr:'Az-Zahir',en:'The Manifest'},{ar:'الْبَاطِنُ',tr:'Al-Batin',en:'The Hidden'},
    {ar:'الْوَالِي',tr:'Al-Wali',en:'The Governor'},{ar:'الْمُتَعَالِي',tr:'Al-Muta\'ali',en:'The Most Exalted'},
    {ar:'الْبَرُّ',tr:'Al-Barr',en:'The Source of Goodness'},{ar:'التَّوَّابُ',tr:'At-Tawwab',en:'The Acceptor of Repentance'},
    {ar:'الْمُنْتَقِمُ',tr:'Al-Muntaqim',en:'The Avenger'},{ar:'العَفُوُّ',tr:'Al-Afuww',en:'The Pardoner'},
    {ar:'الرَّؤُوفُ',tr:'Ar-Ra\'uf',en:'The Compassionate'},{ar:'مَالِكُ الْمُلْكِ',tr:'Malikul-Mulk',en:'Owner of Sovereignty'},
    {ar:'ذُو الْجَلَالِ وَالْإِكْرَامِ',tr:'Dhul-Jalali wal-Ikram',en:'Lord of Majesty and Bounty'},
    {ar:'الْمُقْسِطُ',tr:'Al-Muqsit',en:'The Just'},{ar:'الْجَامِعُ',tr:'Al-Jami',en:'The Gatherer'},
    {ar:'الْغَنِيُّ',tr:'Al-Ghaniyy',en:'The Self-Sufficient'},{ar:'الْمُغْنِي',tr:'Al-Mughni',en:'The Enricher'},
    {ar:'الْمَانِعُ',tr:'Al-Mani\'',en:'The Preventer'},{ar:'الضَّارَّ',tr:'Ad-Darr',en:'The Distresser'},
    {ar:'النَّافِعُ',tr:'An-Nafi',en:'The Benefiter'},{ar:'النُّورُ',tr:'An-Nur',en:'The Light'},
    {ar:'الْهَادِي',tr:'Al-Hadi',en:'The Guide'},{ar:'الْبَدِيعُ',tr:'Al-Badi',en:'The Originator'},
    {ar:'الْبَاقِي',tr:'Al-Baqi',en:'The Everlasting'},{ar:'الْوَارِثُ',tr:'Al-Warith',en:'The Inheritor'},
    {ar:'الرَّشِيدُ',tr:'Ar-Rashid',en:'The Guide to Right Path'},{ar:'الصَّبُورُ',tr:'As-Sabur',en:'The Patient'},
  ];
  const n = names[i];
  return {
    number: i + 1,
    arabic: n.ar,
    transliteration: n.tr,
    translations: T(n.en, n.ar, n.en, n.en, n.en, n.en, n.en, n.en, n.en, n.en)
  };
});

export const asmaAnbiya: Prophet[] = [
  { number:1, arabic:'آدَمُ', name:T('Adam','آدم','ஆதம்','ആദം','آدم','आदम','Adam','Adam','Âdem','আদম'), era:'First human', quranicMentions:25, famousDua:'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا' },
  { number:2, arabic:'إِدْرِيسُ', name:T('Idris','إدريس','இத்ரீஸ்','ഇദ്രീസ്','ادریس','इदरीस','Idris','Idris','İdris','ইদ্রিস'), era:'Early prophet', quranicMentions:2 },
  { number:3, arabic:'نُوحٌ', name:T('Nuh (Noah)','نوح','நூஹ്','നൂഹ്','نوح','नूह','Nuh','Noé','Nuh','নূহ'), era:'Before flood', quranicMentions:43, famousDua:'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ' },
  { number:4, arabic:'هُودٌ', name:T('Hud','هود','ஹூத்','ഹൂദ്','ہود','हूद','Hud','Hud','Hud','হুদ'), era:'People of Ad', quranicMentions:25 },
  { number:5, arabic:'صَالِحٌ', name:T('Salih','صالح','ஸாலிஹ்','സ്വാലിഹ്','صالح','सालेह','Salih','Salih','Salih','সালিহ'), era:'People of Thamud', quranicMentions:9 },
  { number:6, arabic:'إِبْرَاهِيمُ', name:T('Ibrahim','إبراهيم','இப்ராஹீம்','ഇബ്രാഹിം','ابراہیم','इब्राहीम','Ibrahim','Abraham','İbrahim','ইব্রাহিম'), era:'Friend of Allah', quranicMentions:69, famousDua:'رَبِّ اجْعَلْ هَذَا الْبَلَدَ آمِنًا' },
  { number:7, arabic:'لُوطٌ', name:T('Lut','لوط','லூத்','ലൂത്വ്','لوط','लूत','Luth','Lot','Lut','লূত'), era:'Contemporary of Ibrahim', quranicMentions:27 },
  { number:8, arabic:'إِسْمَاعِيلُ', name:T('Ismail','إسماعيل','இஸ்மாயீல்','ഇസ്മാഈൽ','اسماعیل','इस्माईल','Ismail','Ismaël','İsmail','ইসমাঈল'), era:'Son of Ibrahim', quranicMentions:12 },
  { number:9, arabic:'إِسْحَاقُ', name:T('Ishaq','إسحاق','இஸ்ஹாக்','ഇസ്ഹാഖ്','اسحاق','इस्हाक़','Ishaq','Isaac','İshak','ইসহাক'), era:'Son of Ibrahim', quranicMentions:17 },
  { number:10, arabic:'يَعْقُوبُ', name:T('Yaqub','يعقوب','யஃகூப்','യഅ്ഖൂബ്','یعقوب','याक़ूब','Yaqub','Jacob','Yakub','ইয়াকুব'), era:'Son of Ishaq', quranicMentions:16 },
  { number:11, arabic:'يُوسُفُ', name:T('Yusuf','يوسف','யூசுஃப்','യൂസുഫ്','یوسف','यूसुफ़','Yusuf','Joseph','Yusuf','ইউসুফ'), era:'Egypt', quranicMentions:27 },
  { number:12, arabic:'أَيُّوبُ', name:T('Ayyub','أيوب','அய்யூப்','അയ്യൂബ്','ایوب','अय्यूब','Ayyub','Job','Eyyub','আইয়ুব'), era:'Patience', quranicMentions:4, famousDua:'أَنِّي مَسَّنِيَ الضُّرُّ' },
  { number:13, arabic:'ذُو الْكِفْلِ', name:T('Dhul-Kifl','ذو الكفل','துல்கிஃல்','ദുല്കിഫ്ല്','ذوالکفل','ज़ुलकिफ़्ल','Zulkifli','Dhu al-Kifl','Zülkifil','জুল কিফল'), era:'Prophet of patience', quranicMentions:2 },
  { number:14, arabic:'شُعَيْبٌ', name:T('Shuayb','شعيب','ஷுஐப்','ശുഐബ്','شعیب','शुऐब','Syuaib','Shuayb','Şuayb','শুয়াইব'), era:'People of Madyan', quranicMentions:11 },
  { number:15, arabic:'مُوسَى', name:T('Musa','موسى','மூஸா','മൂസാ','موسیٰ','मूसा','Musa','Moïse','Musa','মূসা'), era:'Exodus', quranicMentions:136, famousDua:'رَبِّ اشْرَحْ لِي صَدْرِي' },
  { number:16, arabic:'هَارُونُ', name:T('Harun','هارون','ஹாரூன்','ഹാറൂൻ','ہارون','हारून','Harun','Aaron','Harun','হারুন'), era:'Brother of Musa', quranicMentions:24 },
  { number:17, arabic:'دَاوُودُ', name:T('Dawud','داود','தாவூத்','ദാവൂദ്','داود','दाऊद','Daud','David','Davud','দাউদ'), era:'King & Prophet', quranicMentions:16 },
  { number:18, arabic:'سُلَيْمَانُ', name:T('Sulayman','سليمان','ஸுலைமான்','സുലൈമാൻ','سلیمان','सुलेमान','Sulaiman','Salomon','Süleyman','সুলাইমান'), era:'King over jinn', quranicMentions:17 },
  { number:19, arabic:'إِلْيَاسُ', name:T('Ilyas','إلياس','இல்யாസ്','ഇല്യാസ്','الیاس','इलयास','Ilyas','Élie','İlyas','ইলিয়াস'), era:'Against Baal', quranicMentions:4 },
  { number:20, arabic:'الْيَسَعُ', name:T('Al-Yasa','اليسع','அல்யஸஅ','അൽയസഅ','الیسع','अलयासा','Ilyasa','Élisée','Elyesa','আল-ইয়াসা'), era:'Successor of Ilyas', quranicMentions:2 },
  { number:21, arabic:'يُونُسُ', name:T('Yunus','يونس','யூனுஸ்','യൂനുസ്','یونس','यूनूस','Yunus','Jonas','Yunus','ইউনুস'), era:'The whale', quranicMentions:6, famousDua:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ' },
  { number:22, arabic:'زَكَرِيَّا', name:T('Zakariya','زكريا','ஸகரிய்யാ','സകരിയ്യ','زکریا','ज़कारिया','Zakariya','Zacharie','Zekeriya','যাকারিয়া'), era:'Father of Yahya', quranicMentions:7, famousDua:'رَبِّ لَا تَذَرْنِي فَرْدًا' },
  { number:23, arabic:'يَحْيَى', name:T('Yahya','يحيى','யஹ்யா','യഹ്‌യ','یحییٰ','यह्या','Yahya','Jean','Yahya','ইয়াহইয়া'), era:'Contemporary of Isa', quranicMentions:5 },
  { number:24, arabic:'عِيسَى', name:T('Isa','عيسى','ஈஸா','ഈസാ','عیسیٰ','ईसा','Isa','Jésus','İsa','ঈসা'), era:'Before Muhammad ﷺ', quranicMentions:25 },
  { number:25, arabic:'مُحَمَّدٌ ﷺ', name:T('Muhammad ﷺ','محمد','முஹம்மது ﷺ','മുഹമ്മദ് ﷺ','محمد ﷺ','मुहम्मद ﷺ','Muhammad ﷺ','Muhammad ﷺ','Muhammed ﷺ','মুহাম্মাদ ﷺ'), era:'Seal of Prophets', quranicMentions:4, famousDua:'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ' },
];

export const salawat = [
  { id:'sw1', name:T('Salawat Ibrahimiyyah','الصلاة الإبراهيمية','இப்ராஹீமிய்யா','സ്വലാത്ത് ഇബ്രാഹീമിയ','صلوات ابراہیمیہ','सलात इब्राहीमिया','Shalawat Ibrahimiyyah','Salawat Ibrahimiyyah','Salat İbrahimiyye','সালাত ইব্রাহীমিয়া'), arabic:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ', transliteration:'Allahumma salli \'ala Muhammadin wa \'ala ali Muhammad, kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim', translations:T('O Allah, send prayers upon Muhammad and family of Muhammad, as upon Ibrahim and family of Ibrahim.','اللهم صل على محمد','முஹம்മது மீதும் அவர் குடும்பம்','മുഹമ്മദിന്റെയും കുടുംബത്തിന്റെയും','محمد ﷺ اور آل محمد پر','मुहम्मद ﷺ और आले मुहम्मद','shalawat atas Muhammad','prières sur Muhammad','Muhammed ve ailesine','মুহাম্মদ ও পরিবার'), reference:'Bukhari 3/10' },
  { id:'sw2', name:T('Salawat Tunjina','صلاة التنجية','ஸலவாத் துஞ்சினா','സ്വലാത്ത് തുൻജിനാ','صلوات تنجینہ','सलात तुंजिना','Shalawat Tunjina','Salawat Tunjina','Salat Tuncina','সালাত তুঞ্জিনা'), arabic:'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ', transliteration:'Allahumma salli \'ala sayyidina Muhammad, salatan tunjina biha min jami\'il-ahwal wal-afat', translations:T('O Allah, send prayers upon our Master Muhammad, a prayer that saves us from all fears and calamities.','اللهم صل على سيدنا محمد','எங்கள் தலைவர் முஹம்മது','ഞങ്ങളുടെ നേതാവ് മുഹമ്മദ്','ہمارے سردار محمد ﷺ','हमारे सरदार मुहम्मद ﷺ','Tuan kami Muhammad','notre Maître Muhammad','Efendimiz Muhammed','আমাদের নেতা মুহাম্মদ ﷺ') },
  { id:'sw3', name:T('Salawat al-Fatih','صلاة الفاتح','ஸலவாத் அல்-ஃபாத்திஹ்','സ്വലാത്ത് അൽ ഫാത്തിഹ','صلوات الفاتح','सलात अल-फ़ातिह','Shalawat al-Fatih','Salawat al-Fatih','Salat al-Fatih','সালাত আল-ফাতিহ'), arabic:'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ', transliteration:'Allahumma salli \'ala sayyidina Muhammadinil-fatihi lima ughliq, wal-khatimi ma sabaq', translations:T('O Allah, send prayers upon Muhammad, opener of what was closed, sealer of what passed.','اللهم صل على سيدنا محمد الفاتح','மூடியவற்றைத் திறப்பவர்','അടഞ്ഞവ തുറക്കുന്നവൻ','بند چیزوں کو کھولنے والے','बंद चीज़ों को खोलने वाले','pembuka yang tertutup','l\'ouvreur de ce qui est fermé','kapalı olanı açan','বন্ধ জিনিস খোলার'), reference:'Traditional' },
];

export const burdah = [
  { id:'bur1', arabic:'أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ *** مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ', transliteration:'Amin tazakkuri jiranin bi dzi salam *** Mazajta dam\'an jara min muqlatin bi dam', translations:T('Is it because of recalling neighbors at Dhi Salam that you have mixed tears with blood?','أمن تذكر جيران بذي سلم','தி சலாமில் அண்டையவர்கள்','ധി സലമിലെ അയൽക്കാർ','ذی سلم کے پڑوسی','ज़ी सलम के पड़ोसी','tetangga di Dhi Salam','voisins de Dhi Salam','Dhi Salam komşuları','ধি সলামের প্রতিবেশী'), reference:'Qasida al-Burdah - Stanza 1', author:'Imam al-Busiri' },
];

export const rathib = [
  { id:'rth1', name:T('Rathib al-Haddad','راتب الحداد','ராதில் அல்-ஹத்தாத്','റാതിബ് അൽ ഹദ്ദാദ്','راتب الحداد','रातिब अल-हद्दाद','Ratib al-Haddad','Rathib al-Haddad','Ratib al-Haddad','রাতিব আল-হাদ্দাদ'), arabic:'يَا رَبِّ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ', transliteration:'Ya rabbi salli wa sallim da\'iman abada, \'ala habibika khayril-khalqi kullihimi', translations:T('O my Lord, send prayers and peace always upon Your beloved, the best of all creation.','يا رب صل وسلم دائما','உன் அன்பிற்குரியவர் மீது','നിന്റെ പ്രിയങ്കരന്റെ മേൽ','اپنے محبوب ﷺ پر','अपने महबूब ﷺ पर','kekasih-Mu','Ton bien-aimé','Sevgiline','তোমার প্রিয়তম'), reference:'Rathib al-Haddad', author:'Imam Abdullah al-Haddad' },
  { id:'rth2', name:T('Rathib Istighfar','راتب الحداد - الاستغفار','ராதில் இஸ்திஃபார்','റാതിബ് ഇസ്തിഗ്ഫാർ','راتب استغفار','रातिब इस्तिग़फ़ार','Ratib Istighfar','Rathib Istighfar','Ratib İstiğfar','রাতিব ইস্তিগফার'), arabic:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ', transliteration:'Astaghfirullahal-\'azim, alladhi la ilaha illa huwal-hayyul-qayyum, wa atubu ilayh', translations:T('I seek forgiveness from Allah the Mighty, there is no god but He, and I repent to Him.','أستغفر الله العظيم','மிகப் பெரிய அല്ലாஹ்விடம்','മഹാനായ അല്ലാഹുവിനോട്','اللہ عظیم سے','अल्लाह अज़ीम से','Allah Yang Maha Agung','Allah le Grand','Allah\'tan','আল্লাহ মহান'), reference:'Rathib al-Haddad' },
];

export const yaseen = {
  title: T('Surah Yaseen','سورة يس','யாசீன்','യാസീൻ','سورہ یٰسین','सूरह यासीन','Surah Yasin','Sourate Yasin','Yasin Suresi','সূরা ইয়াসিন'),
  description: T('The Heart of the Qur\'an','قلب القرآن','திருக்குர்ஆனின் இதயம்','ഖുർആനിന്റെ ഹൃദയം','قرآن کا دل','कुरान का दिल','Jantung Al-Quran','Le Cœur du Coran','Kur\'an\'ın Kalbi','কুরআনের হৃদয়'),
  arabic: 'يس وَالْقُرْآنِ الْحَكِيمِ',
  transliteration: 'Ya-Sin. Wal-Qur\'anil-Hakim',
  translations: T('Ya-Sin. By the wise Qur\'an.','يس والقرآن الحكيم','யா-சீன்','യാ-സീൻ','یٰسین۔ حکمت والے قرآن','यासीन। हुकमत वाले कुरान','Ya-Sin. Demi Al-Quran','Ya-Sin. Par le Coran','Ya-Sin. Hikmet dolu Kur\'an','ইয়া-সিন। জ্ঞানময় কুরআন'),
  reference: 'Quran 36:1-2',
  benefit: 'Recite for the deceased and the sick'
};

export const dhikr = [
  { id:'dh1', arabic:'لَا إِلَهَ إِلَّا اللَّهُ', transliteration:'La ilaha illallah', translations:T('There is no god but Allah','لا إله إلا الله','அல்லாஹ்வைத் தவிர இல்லை','അല്ലാഹു ഒഴികെ ഇല്ല','اللہ کے سوا کوئی نہیں','अल्लाह के सिवा कोई नहीं','Tiada tuhan selain Allah','Nul dieu sauf Allah','Allah\'tan başka ilah yok','আল্লাহ ছাড়া নেই'), repeat:100, benefit:'The best dhikr' },
  { id:'dh2', arabic:'سُبْحَانَ اللَّهِ', transliteration:'Subhanallah', translations:T('Glory be to Allah','سبحان الله','அல்லாஹ் தூய்மையானவன்','അല്ലാഹു പരിശുദ്ധൻ','اللہ پاک','अल्लाह पाक','Maha Suci Allah','Gloire à Allah','Allah\'ı tenzih','আল্লাহ পবিত্র'), repeat:33 },
  { id:'dh3', arabic:'الْحَمْدُ لِلَّهِ', transliteration:'Alhamdulillah', translations:T('All praise is for Allah','الحمد لله','எல்லா புகழும் அல்லாஹ்வுக்கே','എല്ലാ സ്തുതിയും അല്ലാഹുവിന്','تمام تعریفیں اللہ کے لیے','सब तारीफ़ अल्लाह के लिए','Segala puji bagi Allah','Toute louange à Allah','Hamd Allah\'a','সব প্রশংসা আল্লাহর'), repeat:33 },
  { id:'dh4', arabic:'اللَّهُ أَكْبَرُ', transliteration:'Allahu Akbar', translations:T('Allah is the Greatest','الله أكبر','அல்லாஹ் மிகப் பெரியவன்','അല്ലാഹു ഏറ്റവും വലിയവൻ','اللہ سب سے بڑا','अल्लाह सबसे बड़ा','Allah Maha Besar','Allah est le Plus Grand','Allah en büyüktür','আল্লাহ সর্বশ্রেষ্ঠ'), repeat:34 },
];

export const adhkar = [
  { id:'adh1', arabic:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', transliteration:'La hawla wa la quwwata illa billah', translations:T('There is no power nor strength except with Allah','لا حول ولا قوة إلا بالله','அல்லாஹ்வைத் தவிர இல்லை','അല്ലാഹു അല്ലാതെ ഇല്ല','اللہ کے سوا کوئی طاقت نہیں','अल्लाह के सिवा कोई ताक़त नहीं','Tiada daya kecuali Allah','Pas de pouvoir sauf Allah','Allah\'tan başka güç yok','আল্লাহ ছাড়া শক্তি নেই'), repeat:100, benefit:'Treasure from Paradise' },
  { id:'adh2', arabic:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ', transliteration:'Subhanallahi wa bihamdihi, Subhanallahil-\'azim', translations:T('Glory be to Allah and His praise, glory be to Allah the Magnificent','سبحان الله وبحمده سبحان الله العظيم','அல்லாஹ் தூய்மையானவன், புகழுடன்','അല്ലാഹു പരിശുദ്ധൻ, സ്തുതിയോടെ','اللہ پاک اس کی تعریف','अल्लाह पाक उसकी तारीफ़','Maha Suci Allah dengan pujian','Gloire à Allah et Sa louange','Allah\'ı hamd ile tenzih','আল্লাহ পবিত্র প্রশংসাসহ'), repeat:100, benefit:'Light on tongue, heavy on scale' },
];
