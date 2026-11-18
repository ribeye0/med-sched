/* 本人已確認品名及每次一顆，並表示服法已與藥師確認。藥物與分類資料。 */
window.MEDICATION_GROUPS = [
  { id: 'once', label: '一日一次', icon: '◷', description: '每日服用一次，每次一顆' },
  { id: 'three', label: '一日三次', icon: '◴', description: '每日服用三次，每次一顆' },
  { id: 'morning-evening', label: '早晚服用', icon: '☀', description: '早、晚各服用一次，每次一顆' },
  { id: 'bedtime', label: '睡前服用', icon: '☾', description: '睡前服用一次，每次一顆' }
];
window.MEDICATIONS = [
  { id: 'arizole', photo: './assets/medications/arizole', english: 'Arizole', dose: '5mg', chinese: '羅亞達錠', ingredient: 'Aripiprazole', group: 'once', purpose: '治療躁症、穩定情緒。', frequency: '一日一次', source: 'https://reg.802.mnd.gov.tw/Med/PharmaBooks/index/?atccode=N05AX12', sourceName: '國軍高雄總醫院藥品資料' },
  { id: 'risperidone', photo: './assets/medications/risperidone', english: 'Risperidone F.C. “CYH”', dose: '2mg', chinese: '瑞波膜衣錠', ingredient: 'Risperidone', group: 'once', purpose: '治療躁症、躁動及思覺失調相關症狀。', frequency: '一日一次', source: 'https://www-ws.gov.taipei/001/Upload/446/relfile/40522/7414991/76ec0aee-0339-4cd4-82ac-80443c74a756.pdf', sourceName: '瑞波藥品仿單' },
  { id: 'cardolol', photo: './assets/medications/cardolol', english: 'CARDOLOL', dose: '10mg', chinese: '心康樂錠', ingredient: 'Propranolol', group: 'morning-evening', purpose: '緩解焦慮性心悸、手抖。', frequency: '早、晚各一次', source: 'https://www.cth.org.tw/?aid=606&iid=1333&page_name=detail&pid=0', sourceName: '耕莘醫院成分資料（頁面規格為40mg）' },
  { id: 'rafax', photo: './assets/medications/rafax', english: 'Rafax XR', dose: '75mg', chinese: '蘿菲思持續性藥效膠囊', ingredient: 'Venlafaxine', group: 'three', purpose: '抗憂鬱，治療焦慮及恐慌。', frequency: '一日三次', note: '每日共225mg。', source: 'https://www.ccpp.com.tw/upfiles/ADUpload/tw_product328390410.pdf', sourceName: '中國化學製藥原廠仿單' },
  { id: 'clonopam05', photo: './assets/medications/clonopam05', english: 'CLONOPAM', dose: '0.5mg', chinese: '克癇平錠', ingredient: 'Clonazepam', group: 'three', purpose: '治療恐慌、鎮靜。', frequency: '一日三次', note: '與睡前的2mg為同一成分、不同規格。兩項合計每日3.5mg。', source: 'https://ksph.kcg.gov.tw/7/dfiles/Clonopam%200.5.htm', sourceName: '高雄市立凱旋醫院藥品資料' },
  { id: 'clonopam2', photo: './assets/medications/clonopam2', english: 'CLONOPAM', dose: '2mg', chinese: '克癇平錠', ingredient: 'Clonazepam', group: 'bedtime', purpose: '治療恐慌、鎮靜。', frequency: '睡前一次', note: '此項為2mg規格，睡前服用。', source: 'https://ksph.kcg.gov.tw/7/dfiles/Clonopam_2.htm', sourceName: '高雄市立凱旋醫院藥品資料' },
  { id: 'divalproex', photo: './assets/medications/divalproex', english: 'Apo-Divalproex', dose: '500mg', chinese: '安保癲安腸溶膜衣錠', ingredient: 'Divalproex sodium', group: 'bedtime', purpose: '穩定情緒、治療躁症。', frequency: '睡前一次', source: 'https://www.typc.mohw.gov.tw/public/news/2a730fb174b01853a3d5af600804cda5.pdf', sourceName: '衛福部桃園療養院藥品通知' }
];
