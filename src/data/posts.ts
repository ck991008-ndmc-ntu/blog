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
        title: "癌症篩檢的新里程碑：解析 14 萬人 Galleri 試驗的震撼數據",
        summary: "深度解析世界上規模最大的多癌血液篩檢 NHS-Galleri 試驗的首輪結果，探討其對晚期診斷減少與「階段移轉」效應的重大臨床價值。",
        date: "2026/03/29",
        category: "流行病學與預防醫學",
        readTime: "7 min read",
        slug: "2026-03-29-galleri-trial",
        tags: ["Galleri", "多癌早期篩檢", "階段移轉", "頭頸部癌", "癌症預防"],
    },
    {
        title: "工程師必讀：鼻塞、過敏與下鼻甲肥厚完全解碼",
        summary: "針對高壓工程師族群，解析鼻塞、下鼻甲肥厚及鼻中膈彎曲的診斷流程、藥物噴劑（含血管收縮劑風險與類固醇噴劑正確用法）及局部麻醉微創手術總整理。",
        date: "2026/03/22",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-03-22-nasal-congestion-engineers",
        tags: ["鼻塞", "鼻過敏", "下鼻甲肥厚", "微創手術", "過敏性鼻炎"],
    },
    {
        title: "工程師必讀：睡眠呼吸中止症的藥物與手術治療指引初解",
        summary: "整合 AASM 2025、ERS 最新指引，為台灣辛苦的工程師族群解析阻塞性睡眠呼吸中止症 (OSA) 的診斷流程、藥物治療選項（含台灣可用藥物）及手術治療策略。",
        date: "2026/03/15",
        category: "耳鼻喉專科",
        readTime: "10 min read",
        slug: "2026-03-15-osa-treatment",
        tags: ["睡眠呼吸中止症", "OSA", "CPAP", "手術治療", "藥物治療", "工程師健康"],
    },
    {
        title: "常常覺得累？從抽血數值看甲狀腺低下與慢性疲勞症候群",
        summary: "明明睡很久卻還是極度疲勞？不要只驗肝功能。本文帶您看懂 TSH 與 Free T4 抽血報告，秒懂「亞臨床甲狀腺低下」與「臨床甲狀腺低下」的差異與治療時機。",
        date: "2026/03/08",
        category: "內科疑難雜症",
        readTime: "6 min read",
        slug: "2026-03-08-hypothyroidism",
        tags: ["甲狀腺低下", "慢性疲勞", "抽血檢查", "內科", "家醫"],
    },
    {
        title: "精準醫療時代：2026 最新指引解構——生物製劑在慢性鼻竇炎與鼻息肉的應用策略",
        summary: "慢性鼻竇炎合併鼻息肉（CRSwNP）常因極高的復發率讓患者苦不堪言。隨著 ARIA-Italy 最新共識指引的發布，第二型發炎反應的「標靶治療」正全面顛覆傳統的處置邏輯，為難治型患者帶來新契機。",
        date: "2026/03/06",
        category: "耳鼻喉專科",
        readTime: "8 min read",
        slug: "2026-03-06-biologics-crswnp",
        tags: ["鼻竇炎", "生物製劑"],
    },
    {
        title: "頭頸部超音波導引穿刺：非侵入性診斷的新標準",
        summary: "詳解甲狀腺、成人淋巴結、唾液腺的超音波導引穿刺(FNA/CNB)流程，並探討小兒頸部腫塊與淋巴結腫大的臨床處置指引。",
        date: "2026/03/05",
        category: "耳鼻喉專科",
        readTime: "7 min read",
        slug: "2026-03-05-neck-ultrasound",
        tags: ["頭頸部超音波", "甲狀腺結節", "頸部腫塊", "甲狀腺超音波", "小兒頸部腫塊", "蛤蟆腫"],
    },
    {
        title: "從數據看偏鄉醫療：那些隱藏在城鄉差距下的生命故事",
        summary: "回顧東北角與瑞芳的義診經驗，探討科技輔助遠距醫療的價值。走入偏鄉才知道，結合內外科邏輯的全面性腹部與頭頸部超音波評估有多麼無可替代。",
        date: "2026/03/04",
        category: "流行病學與預防醫學",
        readTime: "6 min read",
        slug: "2026-03-04-rural-medicine",
        tags: ["偏鄉醫療", "頭頸部超音波", "腹部超音波", "內科", "健康檢查", "家醫"],
    },
    {
        title: "慢性咳嗽的診斷邏輯：不是所有的咳都來自肺部",
        summary: "整合最新 ACCP 與 ERS 指引，三步拆解慢性咳嗽的可能原因：從上呼吸道咳嗽症候群(UACS/鼻涕倒流)、胃食道逆流(GERD)到咳嗽變異性氣喘(CVA)的標準鑑別診斷。",
        date: "2026/03/03",
        category: "內科疑難雜症",
        readTime: "6 min read",
        slug: "2026-03-03-chronic-cough",
        tags: ["慢性咳嗽", "胃食道逆流", "鼻竇炎", "內科", "家醫", "咳嗽"],
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
