import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "早上醒來，右耳突然聽不見？聊聊被稱為「耳中風」的突發性耳聾，以及那段和時間賽跑的黃金治療期",
    description: "一覺醒來單側耳朵突然聽不到，還伴隨耳鳴與悶脹感？這不是耳屎塞住，而是耳鼻喉科的急症。本文從最新 AAO-HNS 臨床指引出發，解析突發性感音神經性聽力損失的診斷流程、類固醇與高壓氧的治療策略比較，以及把握黃金治療期的關鍵。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-06-28-sudden-hearing-loss");

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <ArticleJsonLd post={currentPost} />
            <div className="flex-1 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        ← 回到首頁
                    </Link>

                    <header className="mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 flex-wrap">
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold shadow-sm">{currentPost?.category}</span>
                            {currentPost?.tags.map((tag) => (
                                <Link key={tag} href={`/tags/${tag}`} className="bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors px-3 py-1 rounded-full font-bold shadow-sm cursor-pointer">
                                    #{tag}
                                </Link>
                            ))}
                            <time>{currentPost?.date}</time>
                            <span>· {currentPost?.readTime}</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-[#1A2B3C] mb-4 leading-tight">
                            {currentPost?.title}
                        </h1>

                        {/* ========== EBM 置頂 ========== */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.1177/0194599819859885" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Chandrasekhar SS, et al. (2019). Clinical Practice Guideline: Sudden Hearing Loss (Update). <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1001/jama.2011.679" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Rauch SD, et al. (2011). Oral vs Intratympanic Corticosteroid Therapy for Idiopathic Sudden Sensorineural Hearing Loss: A Randomized Trial. <em>JAMA.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1177/0194599812436449" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Stachler RJ, et al. (2012). Clinical Practice Guideline: Sudden Hearing Loss. <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1002/14651858.CD004739.pub4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Bennett MH, et al. (2012). Hyperbaric oxygen for idiopathic sudden sensorineural hearing loss and tinnitus. <em>Cochrane Database of Systematic Reviews.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            家住新北市、今年 45 歲的軟體工程師林先生，某個週一早晨被鬧鐘叫醒後，伸手拿起手機準備滑訊息。就在他把手機靠近右耳想確認語音訊息的那一刻，他突然愣住了——右耳幾乎什麼聲音都聽不到，彷彿整個世界的右半邊被人按下了靜音鍵。取而代之的，是一陣持續不斷的高頻「嗡嗡嗡」耳鳴聲，還有一種很深的悶脹感，像是有人用手掌緊緊摀住了他的右耳。林先生以為是前一晚趕專案熬夜到凌晨三點，太累導致耳朵暫時塞住了。他試著用棉花棒掏了掏、吞了幾次口水、捏著鼻子用力鼓氣，但那種悶悶的、聽不見的感覺完全沒有改善。直到中午開會時，他發現自己必須把整個身體轉向左邊、用左耳才能勉強聽清楚同事在說什麼。他這才慌了，趕緊掛了下午的耳鼻喉科門診。
                        </p>

                        {/* ========== 醫病問答 ========== */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h4 className="font-bold text-[#1A2B3C] text-lg mb-3">患者常見的疑惑與提問</h4>
                            <p className="leading-relaxed mb-3 font-medium">
                                林先生走進診間時顯得有些焦慮，他問：「陳醫師，我右耳從今天早上開始就突然聽不太到了，是不是耳屎塞住了？還是最近壓力太大的關係？我同事說可能過幾天自己就會好了，真的嗎？」
                            </p>
                            <p className="leading-relaxed font-bold text-blue-900">
                                我幫林先生看完耳鏡後告訴他：「林先生，我剛才用耳鏡仔細檢查過了，你的外耳道很乾淨，耳膜也完整，所以不是耳屎的問題。不過我很擔心的是，你剛剛做的純音聽力檢查結果顯示，右耳在中高頻的部分有接近 55 分貝的感音神經性聽力損失。這個情況叫做『突發性感音神經性聽力損失』，坊間有人叫它『耳中風』。老實說，這是我們耳鼻喉科的急症，不能等它自己好。越早開始治療，聽力恢復的機會就越大。我們今天就來好好聊聊，接下來該怎麼做。」
                            </p>
                        </div>

                        {/* ========== 什麼是突發性耳聾 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">什麼是突發性耳聾？為什麼有人叫它「耳中風」？</h2>
                        <p className="leading-relaxed mb-6">
                            突發性感音神經性聽力損失 (Sudden Sensorineural Hearing Loss, SSNHL)，在醫學上的定義是：<strong>在 72 小時以內，至少三個連續頻率的聽力下降超過 30 分貝 (dB)</strong>。聽起來很拗口，白話來說就是「耳朵在很短的時間內突然聽不清楚了，而且問題出在內耳或聽神經，不是外耳道被東西塞住」。
                        </p>
                        <p className="leading-relaxed mb-6">
                            為什麼有人叫它「耳中風」？因為它的發作方式跟腦中風有幾分神似——都是毫無預警、突然發生的。而且在病因上，內耳微血管的循環障礙確實被認為是其中一個重要的致病假說。不過嚴格來說，「耳中風」只是一個通俗的說法，實際上突發性耳聾的原因遠不止血管問題。
                        </p>
                        <p className="leading-relaxed mb-6">
                            根據流行病學資料，突發性耳聾的發生率大約是每年每十萬人中有 5 至 27 例，好發於 40 到 60 歲之間的成年人，男女比例大致相當。大多數是單側發生，雙側同時發病的情況非常少見。在門診我們常看到的典型三重奏就是：<strong>突然的單側聽力下降、持續性耳鳴、以及耳朵悶脹感</strong>，有大約三到四成的患者還會伴隨不同程度的眩暈。
                        </p>

                        {/* ========== 感音神經性聽力損失示意圖 ========== */}
                        <div className="my-8 flex flex-col items-center">
                            <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                                    <Image
                                        src="/images/SNHL.png"
                                        alt="感音神經性聽力損失示意圖：展示內耳耳蝸結構、前庭神經與耳蝸神經的解剖位置，以及健康毛細胞與受損毛細胞的對比"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-4">
                                    感音神經性聽力損失 (SNHL) 示意圖：耳蝸內的毛細胞負責將聲波振動轉換為神經訊號。當毛細胞因缺氧、發炎或病毒感染而受損時，對應頻率的聽力就會下降甚至喪失。
                                </p>
                            </div>
                        </div>

                        {/* ========== 常見病因 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">到底是什麼原因造成的？——老實說，九成找不到確切原因</h2>
                        <p className="leading-relaxed mb-6">
                            這大概是門診中患者最想知道答案、但我們醫師最難給出確切答案的問題。根據最新的 AAO-HNS 指引，突發性感音神經性聽力損失中有大約 90% 是「特發性」(Idiopathic)，也就是找不到明確的單一病因。但目前被提出的可能致病機轉包括：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-blue-800 mb-2">病毒感染假說</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    部分病毒（如單純疱疹病毒、巨細胞病毒、流感病毒等）可能侵犯內耳的耳蝸或聽神經，引發急性發炎與水腫。不過在最新指引中，常規使用抗病毒藥物並<strong>不被建議</strong>，因為臨床證據不足。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-blue-800 mb-2">內耳血管循環障礙</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    內耳的血液供應來自終末動脈 (End artery)，沒有側支循環。一旦發生血管痙攣、微血栓或出血，耳蝸內的毛細胞 (Hair cells) 就可能因缺氧而受損甚至壞死。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-blue-800 mb-2">自體免疫反應</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    部分患者的免疫系統可能錯誤地攻擊自身的內耳組織，造成發炎與聽力損傷。這類患者有時對類固醇治療反應特別好，但也容易復發。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-red-700 mb-2">需排除：聽神經瘤</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    雖然比例不高（約 1-3%），但突然聽力下降有時是聽神經瘤 (Vestibular Schwannoma) 的表現。因此指引建議，對於治療反應不佳的患者，應安排 MRI 核磁共振檢查來排除。
                                </p>
                            </div>
                        </div>

                        {/* ========== 門診評估與診斷決策流程 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">門診評估與診斷決策流程</h2>
                        <p className="leading-relaxed mb-6">
                            在門診面對一位「突然聽不到」的患者時，我們的首要任務其實不是馬上開藥，而是要釐清一個最關鍵的問題：這到底是「傳導性」還是「感音神經性」的聽力損失？因為這兩者的病因、嚴重度與處理方式完全不同。以下是我在診間進行評估的標準流程：
                        </p>

                        <div className="my-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">突發性聽力損失：門診評估與處置決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                {/* Step 1 */}
                                <div className="w-full max-w-md bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟一：病史詢問與耳鏡檢查</div>
                                    <div className="text-sm mt-2 text-left px-2">確認發作時間（是否在 72 小時內）、單側或雙側、有無耳鳴/眩暈/耳悶。耳鏡排除外耳道異物、耳垢栓塞、中耳積液或鼓膜穿孔。</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2 */}
                                <div className="w-full max-w-md bg-gray-50 border-2 border-gray-200 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟二：音叉測試與純音聽力檢查</div>
                                    <div className="text-sm mt-2 text-left px-2">Weber 測試：音叉放頭頂，觀察聲音偏向哪側。Rinne 測試：比較氣導與骨導。純音聽力檢查 (PTA) 確認受損頻率與程度。</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2.5 - Branch */}
                                <div className="w-full max-w-lg flex justify-between mt-0">
                                    <div className="w-1/2 flex flex-col items-center pl-2 pr-4">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-amber-700 font-bold bg-white px-1 -mt-4 z-10">傳導性聽損</span>
                                        <div className="w-full bg-amber-50 border-2 border-amber-200 text-amber-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span className="font-bold">非感音神經性問題</span>
                                            <span className="text-xs mt-1 block">如中耳炎、耳垢栓塞、耳硬化症等，另行處置</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center pl-4 pr-2">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-green-600 font-bold bg-white px-1 -mt-4 z-10">感音神經性聽損</span>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span className="font-bold">確認為 SSNHL</span>
                                            <span className="text-xs mt-1 block">符合定義：72 小時內、≥30 dB、≥3 連續頻率</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-8 w-0.5 bg-gray-300"></div>

                                {/* Step 3 */}
                                <div className="w-full max-w-md bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟三：立即啟動治療</div>
                                    <div className="text-sm mt-2 text-left px-2">
                                        1. 確認無類固醇禁忌症後，開始口服或靜脈注射全身性類固醇治療。<br />
                                        2. 評估是否合併高壓氧治療（發病 2 週內效果最佳）。<br />
                                        3. 告知患者黃金治療期的重要性，強調不要觀望等待。
                                    </div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 4 */}
                                <div className="w-full max-w-md bg-gray-50 border-2 border-gray-200 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟四：追蹤與進階評估</div>
                                    <div className="text-sm mt-2 text-left px-2">治療結束後安排追蹤聽力檢查。若恢復不佳，考慮鼓室內注射類固醇作為補救治療，並安排 MRI 排除聽神經瘤等潛在病因。</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 5 - Final */}
                                <div className="w-full max-w-md bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟五：長期聽力復健評估</div>
                                    <div className="text-sm mt-2 text-left px-2">聽力未完全恢復者，評估助聽器 (Hearing Aid) 或人工電子耳 (Cochlear Implant) 等聽覺輔助與復健方案，持續追蹤聽力變化。</div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 黃金治療期 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">和時間賽跑——為什麼「黃金治療期」這麼重要？</h2>
                        <p className="leading-relaxed mb-6">
                            在門診我們常跟患者強調的一句話就是：「耳朵的事，拖不得。」根據目前的臨床實證與 AAO-HNS 指引的建議，突發性耳聾的治療越早開始、效果越好。一般認為發病後的 <strong>7 到 14 天</strong>是黃金治療期。超過 2 到 4 週才開始治療的患者，聽力恢復的機率會明顯下降。
                        </p>
                        <p className="leading-relaxed mb-6">
                            為什麼時間這麼關鍵？因為內耳的耳蝸毛細胞 (Cochlear hair cells) 不像皮膚或肝臟細胞，受損後是<strong>無法再生</strong>的。一旦毛細胞因為缺氧、發炎或水腫而壞死，那段頻率的聽力就可能永久喪失。類固醇的作用就是盡快壓制內耳的發炎反應，為那些「瀕死但還沒有完全壞死」的毛細胞爭取存活的機會。所以真的是在跟時間賽跑。
                        </p>

                        <div className="bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-xl border border-red-100 my-8">
                            <h3 className="text-lg font-bold text-red-900 mb-4">影響預後的關鍵因素</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>就醫速度</strong>：發病後 7 天內就醫並開始治療者，恢復率最高。拖超過一個月，改善幅度通常非常有限。
                                </li>
                                <li>
                                    <strong>初始聽損嚴重度</strong>：聽力損失越嚴重（如超過 70 分貝的重度聽損），完全恢復的機率越低。
                                </li>
                                <li>
                                    <strong>有無伴隨眩暈</strong>：合併眩暈的患者，通常代表前庭系統也受到波及，預後相對較差。
                                </li>
                                <li>
                                    <strong>年齡與共病</strong>：年輕患者的恢復率通常優於高齡患者。合併糖尿病、高血壓等心血管危險因子者，也可能影響治療效果。
                                </li>
                            </ul>
                        </div>

                        {/* ========== 治療選項比較表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">治療方式比較：目前有哪些武器可以用？</h2>
                        <p className="leading-relaxed mb-6">
                            說實話，突發性耳聾的治療選擇並不像感冒那麼多元，目前真正有較強實證支持的治療仍以類固醇為核心。但根據不同情境，我們可以靈活搭配不同的治療策略。以下是我將常見的治療選項整理成表格，方便大家一目了然：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">治療方式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用時機</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優點</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">限制與潛在風險</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">口服全身性類固醇<br/><span className="text-xs font-normal text-gray-500">(Oral Corticosteroids)</span></td>
                                        <td className="px-4 py-4 font-medium">第一線標準治療。確診後應儘速開始，發病 2 週內效果最佳</td>
                                        <td className="px-4 py-4 text-green-700">目前最有實證支持的治療方式。全身性抗發炎與免疫調節效果，方便取得，門診即可開立。常用藥物如普賴鬆 (Prednisolone) 或地塞松 (Dexamethasone)。</td>
                                        <td className="px-4 py-4 text-gray-600">短期使用可能出現血糖升高、胃部不適、失眠、情緒波動。糖尿病患者需密切監測血糖，消化性潰瘍患者需搭配胃藥保護。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">鼓室內注射類固醇<br/><span className="text-xs font-normal text-gray-500">(Intratympanic Steroid Injection)</span></td>
                                        <td className="px-4 py-4 font-medium">口服類固醇效果不佳的補救治療 (Salvage therapy)；或因全身性疾病無法使用口服類固醇者</td>
                                        <td className="px-4 py-4 text-green-700">藥物直接注入中耳腔、經圓窗膜滲透至內耳，局部濃度高。全身性副作用極低，適合糖尿病或免疫功能低下的患者。</td>
                                        <td className="px-4 py-4 text-gray-600">需在門診由醫師執行，通常需要 3 到 4 次注射。注射時可能有短暫疼痛感與眩暈。極少數情況下可能造成持續性鼓膜穿孔。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">高壓氧治療<br/><span className="text-xs font-normal text-gray-500">(Hyperbaric Oxygen Therapy, HBOT)</span></td>
                                        <td className="px-4 py-4 font-medium">發病 2 週內的輔助治療。可與類固醇併用</td>
                                        <td className="px-4 py-4 text-green-700">透過高壓艙呼吸純氧，提高血液與內耳組織的氧分壓，改善耳蝸缺氧狀態、促進受損毛細胞修復。部分研究顯示合併使用可提升聽力恢復率。</td>
                                        <td className="px-4 py-4 text-gray-600">療程較長，通常需每日至高壓氧中心接受 10 到 20 次治療。可能出現耳壓不適、幽閉恐懼感。並非所有醫療院所皆有此設備。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">聽覺輔助與復健<br/><span className="text-xs font-normal text-gray-500">(Hearing Aid / Cochlear Implant)</span></td>
                                        <td className="px-4 py-4 font-medium">治療後聽力未完全恢復、影響日常溝通與生活品質者</td>
                                        <td className="px-4 py-4 text-green-700">助聽器能放大殘餘聽力，改善對話理解。對於極重度聽損且助聽器效果有限者，人工電子耳 (Cochlear Implant) 可提供另一條聽覺重建的路徑。</td>
                                        <td className="px-4 py-4 text-gray-600">需要配戴適應期。助聽器需定期調校與保養。人工電子耳需手術植入，術後需長期的聽覺復健訓練，費用也是重要的考量因素。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 鼓室內注射示意圖 ========== */}
                        <div className="my-8 flex flex-col items-center">
                            <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                                    <Image
                                        src="/images/ITSI.png"
                                        alt="鼓室內類固醇注射示意圖：醫師透過針頭穿過鼓膜，將類固醇藥物直接注入中耳腔內，藥物經圓窗膜滲透至內耳"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-4">
                                    鼓室內類固醇注射 (Intratympanic Steroid Injection) 示意圖：醫師在門診以細針穿過鼓膜，將高濃度類固醇藥物直接注入中耳腔。藥物會經由圓窗膜滲透進入內耳，達到局部治療的效果。
                                </p>
                            </div>
                        </div>

                        <p className="leading-relaxed mb-6">
                            另外特別補充一點，在最新的 AAO-HNS 指引中，明確<strong>不建議</strong>常規使用抗病毒藥物 (Antivirals)、血栓溶解劑 (Thrombolytics) 或血管擴張劑 (Vasodilators) 來治療突發性耳聾，因為目前的臨床證據不足以支持它們的療效。這也提醒我們，治療不是「藥開越多越好」，而是要依據實證，把資源集中在真正有幫助的治療上。
                        </p>

                        {/* ========== 生活中的警訊 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">突然聽不到，有時也是身體給你的警訊</h2>
                        <p className="leading-relaxed mb-6">
                            在門診中我們偶爾會碰到一些案例，突發性耳聾只是冰山一角。有些患者在後續的抽血檢查中，才意外發現自己有未被診斷的高血糖、高血脂或凝血功能異常。也有少數患者在 MRI 檢查後，被發現有小型的聽神經瘤。
                        </p>
                        <p className="leading-relaxed mb-6">
                            所以我常跟患者說，突然聽不到當然很令人焦慮，但換個角度想，這也許是身體在用一種很極端的方式提醒你：「嘿，該停下來好好檢查一下了。」特別是那些長期高壓、作息不規律、有三高問題卻沒有好好控制的朋友們，突發性耳聾有時候就像是一個警報器，提醒你重新審視自己的生活型態與健康管理。
                        </p>

                        {/* ========== 陳醫師的實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我常遇到這樣的患者：耳朵突然聽不到了，但因為「不痛不癢」，就先觀望了幾天，想說可能過陣子會自己好。等到拖了一兩週，發現完全沒有改善才急忙來看診。老實說，每次遇到這種情況，我心裡都覺得很可惜，因為黃金治療期已經流失了一大半。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我想，突發性耳聾最殘酷也最真實的一面就是：它的預後其實是「三三三法則」——大約三分之一的患者聽力可以完全恢復，三分之一會部分恢復，還有三分之一恢復有限或幾乎沒有改善。這不是魔法，即使在黃金期內積極治療，也不能保證每個人都能恢復到原本的狀態。但反過來說，越早治療、恢復的機率確實越高，這是有充分臨床數據支撐的。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            另外，我也想提醒大家，即使聽力最終沒有完全恢復，也不代表就沒有辦法了。現在的助聽器技術已經非常成熟，外型也越來越小巧美觀。對於極重度聽損的患者，人工電子耳更是一個改變生活品質的選項。重點是，不要因為覺得「聽力回不來了就算了」而放棄後續的聽覺復健，那才是最可惜的。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>單側突然聽力下降、耳鳴、耳悶脹感是耳鼻喉科急症的警訊。不要以為是耳屎塞住或壓力大就會自己好，應在 72 小時內盡速就醫進行聽力檢查。</li>
                                <li>突發性感音神經性聽力損失的黃金治療期是發病後 7 到 14 天。越早開始治療（特別是類固醇治療），聽力恢復的機會越大。拖延是最大的敵人。</li>
                                <li>口服類固醇是目前最有實證支持的第一線治療。對於口服效果不佳或有禁忌症者，鼓室內注射類固醇是有效的補救方案。高壓氧治療可作為發病早期的輔助手段。</li>
                                <li>即使聽力未能完全恢復，助聽器或人工電子耳等聽覺復健方案，仍能大幅改善溝通能力與生活品質，切勿輕言放棄。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「林先生，耳朵願意給你一次機會，我們一定要把握住。回去好好休息、按時吃藥，這段時間少熬夜、少戴耳機。兩週後回來追蹤聽力，我們一起看看恢復的狀況。有任何不對勁，隨時回來，不要等。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-06-28-sudden-hearing-loss" />
            </div>

            <Sidebar />
        </div>
    );
}
