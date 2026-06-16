export interface Post {
    title: string;
    summary: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
    tags: string[];
}

export const posts: Post[] = [
    {
        title: "孩子每天早上狂打噴嚏？聊聊兒童過敏性鼻炎的居家照護與那些容易踩的坑",
        summary: "從環境控制、鼻腔清洗到藥物選擇，耳鼻喉科陳醫師分享兒童過敏性鼻炎的居家管理實務經驗、門診治療決策流程，以及那些家長最常問的問題。",
        date: "2026/06/16",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-06-16-child-allergic-rhinitis",
        tags: ["鼻塞", "打噴嚏", "流鼻水", "過敏", "兒童"],
    },
    {
        title: "天旋地轉、噁心想吐？聊聊常被誤會的「耳石異位症」與眩暈退化復健指南",
        summary: "起床或翻身時突然覺得天旋地轉，甚至噁心嘔吐？這不一定是中風。本文從耳鼻喉科的臨床視角，解析良性陣發性姿勢性眩暈（俗稱耳石異位症）的病理機轉，並結合最新 AAO-HNS 臨床指引，提供 Dix-Hallpike 與 Epley 復位術的決策流程，以及在家即可自主訓練的前庭復健運動指南。",
        date: "2026/06/07",
        category: "耳鼻喉專科",
        readTime: "9 min read",
        slug: "2026-06-07-vertigo-bppv-rehab",
        tags: ["眩暈", "耳石症", "頭暈", "前庭復健", "平衡訓練"],
    },
    {
        title: "每次頭痛都只看神經科？也許問題出在你的鼻子——聊聊那些被忽略的鼻源性頭痛",
        summary: "頭痛六年，看遍神經科，吃過各種偏頭痛藥物卻時好時壞？問題也許不在腦，而在鼻子。本文從耳鼻喉科的獨特視角，結合 ICHD-3 國際頭痛分類與最新系統性回顧，解析鼻中膈骨刺、泡狀中鼻甲等鼻腔結構異常如何透過三叉神經引發頭痛，並提供門診鑑別診斷流程與治療選擇指南。",
        date: "2026/05/31",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-05-31-rhinogenic-contact-point-headache",
        tags: ["頭痛", "鼻塞", "臉部脹痛", "偏頭痛"],
    },
    {
        title: "男生也要打？保護自己與另一半：聊聊 HPV 疫苗防範子宮頸癌、口咽癌與那些你所不知道的預防科學",
        summary: "HPV 疫苗常被俗稱為子宮頸癌疫苗，但它其實是男女皆需的防癌防護盾。本文結合最新 JAMA Oncology、NEJM 與 Lancet 等世界權威期刊實證，為您拆解 HPV 疫苗對女性生殖道癌症，以及男女兩性口腔癌與口咽癌的強大保護效果，並提供門診決策與疫苗選擇指南。",
        date: "2026/05/24",
        category: "流行病學與預防醫學",
        readTime: "8 min read",
        slug: "2026-05-24-hpv-vaccine-cancer-prevention",
        tags: ["HPV疫苗", "子宮頸癌", "口咽癌", "口腔癌", "預防醫學", "頭頸部癌症"],
    },
    {
        title: "常見耳鼻喉科急診三部曲：流鼻血、魚刺卡喉嚨、耳朵異物怎麼辦？",
        summary: "半夜流鼻血不止、魚刺卡喉嚨、耳朵跑進蟲怎麼辦？本篇為耳鼻喉科急診三大常見問題的總覽懶人包，幫你快速掌握正確急救知識、避開危險偏方與判斷就醫時機。",
        date: "2026/05/18",
        category: "耳鼻喉專科",
        readTime: "3 min read",
        slug: "2026-05-17-ent-emergency-trilogy-overview",
        tags: ["耳鼻喉科急診", "流鼻血處理", "魚刺卡喉嚨", "耳朵異物", "耳鼻喉急診懶人包"],
    },
    {
        title: "耳朵跑進蟲或異物怎麼辦？別再用棉花棒越推越深",
        summary: "遇到耳道異物或昆蟲，絕對不能用棉花棒或耳扒自行掏挖，以免將異物推向深處損傷耳膜。若是活體昆蟲，最安全的做法是盡速就醫讓醫師使其停止活動後再取出。出現耳痛、出血、聽力下降或流膿，應立刻前往耳鼻喉科檢查。",
        date: "2026/05/17",
        category: "耳鼻喉專科",
        readTime: "7 min read",
        slug: "2026-05-17-ear-canal-foreign-body-insect",
        tags: ["耳朵跑進蟲", "耳道異物", "耳朵有蟲怎麼辦", "小孩耳朵塞東西", "耳鼻喉科夾耳屎蟲"],
    },
    {
        title: "魚刺卡喉嚨可以吞飯團嗎？耳鼻喉科醫師提醒：這些情況不要硬撐",
        summary: "吞飯團、喝醋等偏方會讓魚刺越扎越深，甚至引起食道穿孔、深頸部感染等嚴重併發症。只要有持續單側吞嚥刺痛感，就應尋求耳鼻喉科醫師透過內視鏡檢查。若出現呼吸困難、發燒、頸部腫痛或胸痛，代表可能已有深部感染，必須立刻至急診。",
        date: "2026/05/17",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-05-17-fish-bone-impaction-throat",
        tags: ["魚刺卡喉嚨", "吞飯團魚刺", "喝醋化魚刺", "魚刺急診", "耳鼻喉科夾魚刺"],
    },
    {
        title: "半夜流鼻血怎麼辦？耳鼻喉科醫師教你正確止血與就醫時機",
        summary: "仰頭、塞衛生紙過深是常見錯誤，正確方式是前傾並捏住鼻翼柔軟處連續加壓 10-15 分鐘。若反覆單側流鼻血，或合併高血壓、服用抗凝血劑且無法止血，應盡速就醫。耳鼻喉科醫師會透過內視鏡尋找局部出血點，並給予局部燒灼或填塞止血。",
        date: "2026/05/17",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-05-17-epistaxis-first-aid-ent",
        tags: ["流鼻血怎麼辦", "鼻血不止", "止血姿勢", "鼻血急診", "高血壓鼻血", "鼻血處理"],
    },
    {
        title: "吞口水的時候，喉嚨總覺得有東西卡住？聊聊喉球症與咽喉逆流那些說不清的不舒服",
        summary: "喉嚨卡卡、有異物感卻吞不下也咳不出？這可能不是感冒，而是喉球症 (Globus pharyngeus)。本文從耳鼻喉科與消化內科的雙重視角，解析喉球症與咽喉逆流 (LPR) 的關聯、門診鑑別診斷流程，以及最新歐洲臨床治療指引的實務建議。",
        date: "2026/05/10",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-05-10-globus-lpr",
        tags: ["喉嚨卡卡", "喉嚨異物感", "咽喉逆流", "慢性咳嗽"],
    },
    {
        title: "枕邊人說你打呼很大聲？小心，這不只是噪音——聊聊睡眠呼吸中止症背後的心血管隱形炸彈",
        summary: "打破「打呼等於睡得香」的迷思。從耳鼻喉科的氣道結構、內科的間歇性缺氧病理機轉，到預防醫學的篩檢策略，全面解析 OSA 與難治型高血壓、心房顫動及中風之間的隱形危機。",
        date: "2026/05/03",
        category: "流行病學與預防醫學",
        readTime: "9 min read",
        slug: "2026-05-03-osa-cardiovascular",
        tags: ["打呼", "白天嗜睡", "高血壓", "心悸"],
    },
    {
        title: "連吞口水都像吞玻璃？聊聊大人也會得的腸病毒與疱疹性咽峽炎",
        summary: "解答成人罹患腸病毒的迷思，簡單科普咽喉解剖構造。並解析重度喉嚨痛的門診評估流程、皰疹性咽峽炎的常見症狀與各項支持性治療策略，以及陳醫師對於緩解吞嚥疼痛的實務經驗。",
        date: "2026/04/26",
        category: "流行病學與預防醫學",
        readTime: "7 min read",
        slug: "2026-04-26-herpangina-pharyngitis",
        tags: ["喉嚨痛", "發燒", "腸病毒", "吞嚥困難"],
    },
    {
        title: "你是不是每次感冒最後都變成黃鼻涕？聊聊鼻竇炎的用藥與復發，以及微創手術的時機",
        summary: "解答為何慢性鼻竇炎單吃抗生素無法斷根，並分享門診決策流程、各項治療方案（洗鼻、藥物、微創手術與生物製劑）優缺點比較，以及陳醫師對於術後防復發的實務觀察。",
        date: "2026/04/19",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-04-19-sinusitis-treatment",
        tags: ["鼻塞", "黃鼻涕", "嗅覺異常", "臉部脹痛"],
    },
    {
        title: "你也常因為反覆喉嚨痛請假嗎？聊聊切除扁桃腺前，那些讓你猶豫的免疫力迷思",
        summary: "解答切除扁桃腺是否會降低免疫力的迷思，並解析門診決策流程、常見適應症（含睡眠呼吸中止症 OSA），以及術後面臨的出血與疼痛風險和飲食照顧指南。",
        date: "2026/04/12",
        category: "耳鼻喉專科",
        readTime: "6 min read",
        slug: "2026-04-12-tonsillectomy-myths",
        tags: ["喉嚨卡卡", "打呼", "睡眠中斷"],
    },
    {
        title: "法官、律師、教師等高用聲族群必讀：依據美國耳鼻喉科治療指引解析慢性聲帶炎與咽喉逆流",
        summary: "針對法官、律師等每日大量使用嗓音的高壓專業人士，解析聲音沙啞、喉嚨「卡卡的」真正原因。一次看懂慢性聲帶炎與咽喉逆流的常見問題，以及最新 AAO-HNS 臨床治療指引。",
        date: "2026/04/03",
        category: "耳鼻喉專科",
        readTime: "7 min read",
        slug: "2026-04-03-chronic-corditis",
        tags: ["聲音沙啞", "喉嚨卡卡", "咽喉逆流", "聲帶結節"],
    },
    {
        title: "癌症篩檢的新里程碑：解析 14 萬人 Galleri 試驗的震撼數據",
        summary: "深度解析世界上規模最大的多癌血液篩檢 NHS-Galleri 試驗的首輪結果，探討其對晚期診斷減少與「階段移轉」效應的重大臨床價值。",
        date: "2026/03/29",
        category: "流行病學與預防醫學",
        readTime: "7 min read",
        slug: "2026-03-29-galleri-trial",
        tags: ["無症狀", "預防醫學", "健康檢查"],
    },
    {
        title: "工程師必讀：鼻塞、過敏與下鼻甲肥厚完全解碼",
        summary: "針對高壓工程師族群，解析鼻塞、下鼻甲肥厚及鼻中膈彎曲的診斷流程、藥物噴劑（含血管收縮劑風險與類固醇噴劑正確用法）及局部麻醉微創手術總整理。",
        date: "2026/03/22",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-03-22-nasal-congestion-engineers",
        tags: ["鼻塞", "流鼻水", "打噴嚏", "呼吸不順"],
    },
    {
        title: "工程師必讀：睡眠呼吸中止症的藥物與手術治療指引初解",
        summary: "整合 AASM 2025、ERS 最新指引，為台灣辛苦的工程師族群解析阻塞性睡眠呼吸中止症 (OSA) 的診斷流程、藥物治療選項（含台灣可用藥物）及手術治療策略。",
        date: "2026/03/15",
        category: "耳鼻喉專科",
        readTime: "10 min read",
        slug: "2026-03-15-osa-treatment",
        tags: ["打呼", "白天嗜睡", "睡眠中斷", "越睡越累"],
    },
    {
        title: "常常覺得累？從抽血數值看甲狀腺低下與慢性疲勞症候群",
        summary: "明明睡很久卻還是極度疲勞？不要只驗肝功能。本文帶您看懂 TSH 與 Free T4 抽血報告，秒懂「亞臨床甲狀腺低下」與「臨床甲狀腺低下」的差異與治療時機。",
        date: "2026/03/08",
        category: "內科疑難雜症",
        readTime: "6 min read",
        slug: "2026-03-08-hypothyroidism",
        tags: ["慢性疲勞", "總是睡不飽", "無力", "精神不濟"],
    },
    {
        title: "精準醫療時代：2026 最新指引解構——生物製劑在慢性鼻竇炎與鼻息肉的應用策略",
        summary: "慢性鼻竇炎合併鼻息肉（CRSwNP）常因極高的復發率讓患者苦不堪言。隨著 ARIA-Italy 最新共識指引的發布，第二型發炎反應的「標靶治療」正全面顛覆傳統的處置邏輯，為難治型患者帶來新契機。",
        date: "2026/03/06",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-03-06-biologics-crswnp",
        tags: ["鼻塞", "黃鼻涕", "嗅覺異常", "臉部脹痛"],
    },
    {
        title: "頭頸部超音波導引穿刺：非侵入性診斷的新標準",
        summary: "詳解甲狀腺、成人淋巴結、唾液腺的超音波導引穿刺(FNA/CNB)流程，並探討小兒頸部腫塊與淋巴結腫大的臨床處置指引。",
        date: "2026/03/05",
        category: "耳鼻喉專科",
        readTime: "7 min read",
        slug: "2026-03-05-neck-ultrasound",
        tags: ["頸部腫塊", "脖子有硬塊", "吞嚥卡卡"],
    },
    {
        title: "從數據看偏鄉醫療：那些隱藏在城鄉差距下的生命故事",
        summary: "回顧東北角與瑞芳的義診經驗，探討科技輔助遠距醫療的價值。走入偏鄉才知道，結合內外科邏輯的全面性腹部與頭頸部超音波評估有多麼無可替代。",
        date: "2026/03/04",
        category: "流行病學與預防醫學",
        readTime: "6 min read",
        slug: "2026-03-04-rural-medicine",
        tags: ["無症狀", "腹部不適", "全身健檢"],
    },
    {
        title: "慢性咳嗽的診斷邏輯：不是所有的咳都來自肺部",
        summary: "整合最新 ACCP 與 ERS 指引，三步拆解慢性咳嗽的可能原因：從上呼吸道咳嗽症候群(UACS/鼻涕倒流)、胃食道逆流(GERD)到咳嗽變異性氣喘(CVA)的標準鑑別診斷。",
        date: "2026/03/03",
        category: "內科疑難雜症",
        readTime: "6 min read",
        slug: "2026-03-03-chronic-cough",
        tags: ["慢性咳嗽", "久咳不癒", "喉嚨卡卡", "喉嚨異物感"],
    }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllTags(): { tag: string; count: number }[] {
    const tagCount: Record<string, number> = {};
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
    });

    return Object.entries(tagCount)
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count); // sort by count descending
}

export function getPostsByTag(tag: string): Post[] {
    const decodedTag = decodeURIComponent(tag);
    return posts.filter((post) => post.tags.includes(decodedTag));
}

export function getAllCategories(): { name: string; count: number }[] {
    const categoryCount: Record<string, number> = {};
    posts.forEach((post) => {
        categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    });

    return Object.entries(categoryCount)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(category: string): Post[] {
    const decodedCategory = decodeURIComponent(category);
    return posts.filter((post) => post.category === decodedCategory);
}
