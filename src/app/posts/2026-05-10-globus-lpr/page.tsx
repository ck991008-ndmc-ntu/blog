import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "吞口水的時候，喉嚨總覺得有東西卡住？聊聊喉球症與咽喉逆流那些說不清的不舒服",
    description: "喉嚨卡卡、有異物感卻吞不下也咳不出？這可能不是感冒，而是喉球症 (Globus pharyngeus)。本文從耳鼻喉科與消化內科的雙重視角，解析喉球症與咽喉逆流 (LPR) 的關聯、門診鑑別診斷流程，以及最新歐洲臨床治療指引的實務建議。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-10-globus-lpr");

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

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.1007/s00405-024-09181-z" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Lechien JR, et al. (2025). European clinical practice guideline: managing and treating laryngopharyngeal reflux disease. <em>European Archives of Oto-Rhino-Laryngology.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1016/S0892-1997(02)00097-8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Belafsky PC, et al. (2002). Validity and Reliability of the Reflux Symptom Index (RSI). <em>Journal of Voice.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            上週二的下午，42歲、住在台中市西屯區的林小姐（化名）走進了診間。林小姐是一位國中老師，平時工作需要大量說話，壓力也不小。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我的喉嚨真的很不舒服，」林小姐眉頭深鎖地指著脖子正中央，「最近這兩個月，我總覺得喉嚨裡有一顆貢丸卡著，吞口水的時候特別明顯。可是很奇怪，吃飯吃東西的時候反而又覺得還好。我有時候會刻意去咳它，想把它咳出來，但咳半天除了幾口白色的黏痰，什麼都沒有。這會不會是喉嚨長了什麼壞東西？」
                        </p>
                        <p className="leading-relaxed mb-6">
                            林小姐焦慮地問：「我上網查了很久，有人說這是喉癌的前兆，也有人說這是自律神經失調。我去了其他診所吃了一堆感冒藥和消炎藥，可是完全沒有好轉。醫師，我到底怎麼了？」我一邊安撫她，一邊回答：「林老師，妳先別擔心。這種『吞口水有異物感，吃東西反而沒事』的症狀，在醫學上有個專有名詞叫做『喉球症』。這通常不是長腫瘤，更常是因為胃酸跑到不該去的地方所引起的發炎反應。」
                        </p>

                        {/* ========== 耳鼻喉科視角 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">耳鼻喉科視角：什麼是「喉球症」？</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                在耳鼻喉科的門診中，大約有 3% 到 5% 的初診患者是因為「喉嚨有異物感」來求診的。這種沒有伴隨吞嚥疼痛（Odynophagia）或真實的食物吞嚥困難（Dysphagia），單純覺得喉嚨卡卡的症狀，我們稱之為<strong>喉球症（Globus pharyngeus）</strong>。
                            </p>
                            <p className="leading-relaxed mb-4">
                                過去，醫學界曾認為這是一種純粹的心理焦慮症狀，甚至稱之為「歇斯底里球（Globus hystericus）」。但隨著內視鏡技術的進步與醫學研究的發展，我們發現大部分的患者其實都有明確的生理性原因。其中最常見的兩大元凶是：
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>咽喉逆流（LPR）：</strong>胃酸與胃蛋白酶向上逆流，越過上食道括約肌，直接刺激脆弱的喉部黏膜。</li>
                                <li><strong>咽喉肌肉緊繃：</strong>由於長期發聲不當、壓力大或頻繁清喉嚨，導致上食道括約肌周邊肌肉無法正常放鬆。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                雖然喉球症通常是良性的，但在門診的第一步，我們還是必須安排「軟式鼻咽喉內視鏡」檢查。這個動作的目的是為了「排除紅旗警訊（Red flags）」，例如聲帶長腫瘤、咽喉部有實質的結構異常或黏膜病變。確認沒有長壞東西，不只是醫學上的必要程序，更是安定患者心情最有效的方法。
                            </p>
                        </div>

                        {/* ========== 消化內科視角：咽喉逆流 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">內科視角：胃酸與咽喉逆流 (LPR) 的無聲攻擊</h2>
                        <p className="leading-relaxed mb-6">
                            當我們確認喉部沒有長腫瘤後，接下來最大的嫌疑犯就是<strong>咽喉逆流（Laryngopharyngeal Reflux, LPR）</strong>。老實說，許多患者聽到這個診斷時都會充滿疑惑：「可是我沒有覺得胸口灼熱，也沒有胃酸湧上來的感覺啊？」
                        </p>
                        <p className="leading-relaxed mb-6">
                            這就是 LPR 與傳統胃食道逆流（GERD）最大的不同。食道的黏膜對胃酸有一定的耐受力，所以通常需要大量的胃酸在食道停留較長時間，才會產生「火燒心」的症狀。但是，我們的咽喉與聲帶黏膜非常脆弱，只要極少量的胃酸（甚至是被霧化的胃酸氣體）輕輕掃過，就足以引發嚴重的慢性發炎、水腫與異物感。這也是為什麼 LPR 常被稱為「無聲的逆流」。
                        </p>

                        <div className="my-8 flex justify-center">
                            <div className="text-center w-full max-w-3xl">
                                <Image
                                    src="/images/LPR anatomy.png"
                                    alt="咽喉逆流 (LPR) 解剖機制圖"
                                    width={800}
                                    height={600}
                                    className="rounded-xl shadow-sm border border-gray-100 w-full"
                                />
                                <p className="text-sm text-gray-500 mt-3 font-medium">胃酸越過上食道括約肌，直接刺激咽喉與聲帶黏膜，引發喉球症狀</p>
                            </div>
                        </div>

                        {/* 診斷評估表 */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-10">
                            <h3 className="text-xl font-bold text-[#1A2B3C] mb-4">臨床評估工具：RSI 與 RFS</h3>
                            <p className="text-gray-700 mb-4">在臨床上，我們會使用國際通用的兩大量表來評估逆流的嚴重度：</p>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-bold text-blue-800 mb-2">1. 逆流症狀指數 (Reflux Symptom Index, RSI)</h4>
                                    <p className="text-sm text-gray-600">這是一份由患者自評的問卷，包含 9 個常見症狀（如聲音沙啞、頻繁清喉嚨、喉嚨多痰、慢性咳嗽、喉嚨異物感等）。總分若大於 13 分，即高度懷疑有 LPR。</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h4 className="font-bold text-blue-800 mb-2">2. 逆流發現分數 (Reflux Finding Score, RFS)</h4>
                                    <p className="text-sm text-gray-600">這是由醫師透過內視鏡觀察到的客觀發現（如聲帶水腫、杓狀軟骨紅腫、黏膜增厚等）。總分若大於 7 分，則在醫學上可判定為逆流性喉炎。</p>
                                </div>
                            </div>
                        </div>

                        {/* ========== 決策流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">門診決策與治療流程</h2>
                        <p className="leading-relaxed mb-6">
                            面對喉球症與潛在的咽喉逆流，我們會依據最新的歐洲臨床指引（2025年發布），採取階梯式的診斷與治療策略：
                        </p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">喉球症門診評估與治療流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">患者主訴: 喉嚨異物感 / 喉球症</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">是否有危險警訊?</div>
                                    <div className="text-sm mt-1">吞嚥疼痛、體重減輕、頸部腫塊</div>
                                </div>
                                
                                {/* Branching */}
                                <div className="w-full max-w-lg flex justify-between">
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm text-sm h-full flex items-center justify-center">
                                            <div className="font-bold">有警訊 → 進階影像學檢查或切片</div>
                                        </div>
                                    </div>
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">無警訊</div>
                                            <div className="border-t border-green-200 pt-1 mt-1">軟式鼻咽喉內視鏡檢查</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        
                                        <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">無明顯腫瘤，有發炎跡象</div>
                                            <div className="border-t border-blue-200 pt-1 mt-1">評估 RSI 問卷 → 確立 LPR 診斷</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        
                                        <div className="w-full bg-purple-50 border-2 border-purple-200 text-purple-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold">第一階段: 飲食調整 + 藻酸鹽類</div>
                                            <div className="text-xs mt-1">治療 4-8 週後評估</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        
                                        <div className="w-full bg-amber-50 border-2 border-amber-200 text-amber-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold">若症狀持續: 第二階段加入 PPI</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 治療選項比較表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">治療方式選項與比較</h2>
                        <p className="leading-relaxed mb-6">
                            根據 2025 年歐洲的最新共識，對於 LPR 的治療強調「多重模式」的介入。以下是常見的治療選項比較：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">治療選項</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">作用機制</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優點 / 適用時機</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">生活型態與飲食調整</td>
                                        <td className="px-4 py-4 font-medium">減少胃酸分泌與刺激，減輕括約肌壓力</td>
                                        <td className="px-4 py-4 text-green-700">最根本的治療，無副作用。戒除咖啡因、甜食、宵夜。</td>
                                        <td className="px-4 py-4 text-gray-600">需要極高的患者配合度，見效較慢。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">藻酸鹽類 (Alginates) / 制酸劑</td>
                                        <td className="px-4 py-4 font-medium">在胃內容物表面形成物理性防護筏，阻擋酸與非酸逆流</td>
                                        <td className="px-4 py-4 text-green-700">最新指引推薦的第一線用藥，能同時對付胃酸與胃蛋白酶。</td>
                                        <td className="px-4 py-4 text-gray-600">通常需飯後及睡前服用，提供即時物理防護。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">質子幫浦抑制劑 (PPI)</td>
                                        <td className="px-4 py-4 font-medium">從源頭強效抑制胃酸分泌</td>
                                        <td className="px-4 py-4 text-green-700">適用於合併傳統胃食道逆流 (GERD) 症狀，或第一線治療無效者。</td>
                                        <td className="px-4 py-4 text-gray-600">最新指引不建議常規盲目使用，通常需治療 8-12 週以上才見效。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">語言治療與嗓音復健</td>
                                        <td className="px-4 py-4 font-medium">放鬆咽喉肌肉，矯正錯誤的發聲與清喉嚨習慣</td>
                                        <td className="px-4 py-4 text-green-700">對於因過度清喉嚨導致肌肉緊繃的喉球症患者有奇效。</td>
                                        <td className="px-4 py-4 text-gray-600">需配合專業語言治療師進行療程。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，治療喉球症與咽喉逆流，最大的挑戰其實是「耐心」。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我常遇到患者吃了一個禮拜的藥，回診時很氣餒地說：「醫師，還是卡卡的啊，藥是不是沒有效？」老實說，我們的聲帶和咽喉黏膜就像是被強酸灼傷的皮膚，要讓這些受傷的組織重新修復、消腫，通常需要至少兩到三個月的時間，這絕對不是施展魔法，吃幾顆特效藥就能瞬間痊癒的。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            此外，我也經常叮嚀患者，一定要戒掉「刻意清喉嚨」的習慣。當你覺得喉嚨有痰、卡卡的，下意識地用力「咳、咳」兩聲，這兩下對聲帶的撞擊力道非常大，反而會讓原本已經發炎的黏膜腫得更嚴重，變成一個惡性循環。想清喉嚨時，請改用「喝一小口溫水」來代替。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>喉嚨覺得卡卡、有異物感，但吃東西時卻不覺得痛或卡，這是典型的「喉球症」，大多數是良性的。</li>
                                <li>喉球症最常見的隱形殺手是「咽喉逆流（LPR）」。即使你沒有感覺到火燒心，胃酸氣體仍可能已經刺激了脆弱的喉嚨。</li>
                                <li>耳鼻喉科的內視鏡檢查是第一步，主要是為了排除長腫瘤的疑慮，讓患者安心，同時評估發炎的程度。</li>
                                <li>治療需要耐心。飲食控制（少甜、少咖啡、睡前三小時不進食）加上至少兩個月的藥物治療，才能讓受傷的黏膜徹底修復。</li>
                                <li>想清喉嚨時，忍住！用喝一小口溫水來取代「咳」的動作，保護你的聲帶。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「林老師，從今天的內視鏡看來，妳的聲帶和咽喉除了因為胃酸刺激有些紅腫之外，沒有長任何壞東西。我們接下來把重點放在調整飲食和吃藥修復黏膜。給喉嚨一點時間，它會慢慢好起來的。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-10-globus-lpr" />
            </div>

            <Sidebar />
        </div>
    );
}
