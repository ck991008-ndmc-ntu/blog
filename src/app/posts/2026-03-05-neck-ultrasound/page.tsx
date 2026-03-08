import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPostsByTag, posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
    title: "頭頸部超音波導引穿刺：非侵入性診斷的新標準",
    description: "詳解甲狀腺、成人淋巴結、唾液腺的超音波導引穿刺(FNA/CNB)流程，並探討小兒頸部腫塊與淋巴結腫大的臨床處置指引。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-05-neck-ultrasound");

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <ArticleJsonLd post={currentPost} />
            <div className="flex-1 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 回到首頁
                    </Link>

                    <header className="mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 flex-wrap">
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold shadow-sm">{currentPost?.category}</span>
                            {currentPost?.tags.map(tag => (
                                <Link key={tag} href={`/tags/${tag}`} className="bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors px-3 py-1 rounded-full font-bold shadow-sm cursor-pointer">#{tag}</Link>
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
                                    <a href="https://doi.org/10.1089/thy.2015.0020" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Haugen, B. R., Alexander, E. K., Bible, K. C., et al. (2016). 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. <em>Thyroid, 26</em>(1), 1-133. https://doi.org/10.1089/thy.2015.0020
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1016/j.rcl.2019.01.005" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Wagner, J. M., & Alleman, A. M. (2019). Ultrasonography of Cervical Lymph Nodes. <em>Radiologic Clinics of North America, 57</em>(3), 543-554. https://doi.org/10.1016/j.rcl.2019.01.005
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1016/j.esmoop.2022.100602" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        van Herpen, C., et al. (2022). ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up of salivary gland cancers. <em>ESMO Open, 7</em>(6), 100602. https://doi.org/10.1016/j.esmoop.2022.100602
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* 內容開始 */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【臨床實務】精準入針，三大腺體/結節的評估標準</h2>
                        <p className="leading-relaxed">
                            在頭頸部的理學檢查中，觸摸到無痛性腫塊往往是患者最擔憂的時刻。相較於傳統的「盲穿」，<strong>超音波導引細針抽吸 (US-FNA)</strong> 與 <strong>粗針切片 (CNB)</strong> 的引入，將檢體不足率從約 30% 大幅降低至 5% 以下，並成為制定後續手術或追蹤方案的黃金標準：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-blue-800 mb-3 border-b border-blue-200 pb-2">1. 甲狀腺 (Thyroid)</h3>
                                <p className="text-sm leading-relaxed mb-3">若超音波顯示結節大於 1cm，且具備<strong>低回音、微小鈣化、邊緣不規則、長大於寬 (Taller-than-wide)</strong> 等惡性特徵，即建議進行 FNA 取細胞學化驗，以 Bethesda 分類系統決定是否手術。</p>
                            </div>
                            <div className="bg-green-50 border border-green-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-green-800 mb-3 border-b border-green-200 pb-2">2. 頸部淋巴結 (Lymph Node)</h3>
                                <p className="text-sm leading-relaxed mb-3">正常淋巴結呈橢圓形且具有高回音的淋巴結門 (Hilum)。一旦出現<strong>形狀變圓 (S/L ratio {">"} 0.5)、周邊血流豐富、內部囊性壞死、異常微鈣化</strong>，即高度懷疑轉移性癌症或淋巴瘤，除了 FNA，也常需要 CNB 以取得組織結構。</p>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-purple-800 mb-3 border-b border-purple-200 pb-2">3. 唾液腺 (Salivary Gland)</h3>
                                <p className="text-sm leading-relaxed mb-3">腮腺或下頷腺出現堅硬腫塊。因唾液腺腫瘤種類繁多（如多形性腺瘤、瓦氏腫瘤，甚至惡性癌），超音波導引穿刺能協助耳鼻喉科醫師在術前辨別良惡性，從而決定手術切除的範圍，避免傷及顏面神經。</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【小兒專區】兒童頸部腫塊與淋巴結腫大</h2>
                        <p className="leading-relaxed">
                            兒童的頸部腫塊 (Pediatric neck mass) 與成人有著截然不同的診斷邏輯。在成人，無痛頸部腫塊必須先懷疑「惡性腫瘤轉移」；而在兒童，絕大多數是<strong>發炎感染</strong>或<strong>先天性發育異常</strong>：
                        </p>
                        <ul className="space-y-4 font-medium text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-200 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <div>
                                    <strong className="text-[#1A2B3C]">感染性淋巴結炎 (Reactive Lymphadenitis)：</strong><br />
                                    最常見的原因。通常伴隨上呼吸道感染、牙齒發炎或扁桃腺炎，呈雙側或單側腫大，具壓痛感。超音波下可見淋巴結門血流增加。多數在使用抗生素或保守觀察 1-2 週後會消退。
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <div>
                                    <strong className="text-[#1A2B3C]">先天性囊腫 (Congenital Cysts)：</strong><br />
                                    如位於頸部正中線的<strong>甲狀舌管囊腫 (Thyroglossal duct cyst)</strong>（吞嚥時會跟著上下移動），或是位於側頸部的<strong>鰓裂囊腫 (Branchial cleft cyst)</strong>。這類囊腫年輕時可能沒發現，常在一次上呼吸道感染後突然腫起發炎。
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <div>
                                    <strong className="text-[#1A2B3C]">蛤蟆腫 (Ranula)：</strong><br />
                                    特別提一下這種好發於兒童及年輕人的舌下腺/頷下腺黏液囊腫。它看起來就像青蛙鼓起的下巴一樣，超音波影像特徵為界線清楚的低回音囊腫。通常需要手術摘除舌下腺以避免復發。
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">•</span>
                                <div>
                                    <strong className="text-red-700">紅旗警訊 (Red Flags)：</strong><br />
                                    如果兒童的淋巴結腫大超過 2 公分、持續超過 4-6 週未縮小、質地堅硬、固定無法推動、位於鎖骨上區 (Supraclavicular)，或伴隨發燒、盜汗、體重減輕，必須立即透過超音波導引穿刺排除淋巴瘤或白血病的可能。
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【決策流程】頭頸部腫塊處置演算法</h2>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">成人 vs 小兒頸部腫塊 基本鑑別流程</h3>

                            <div className="flex flex-col items-center max-w-3xl mx-auto space-y-0 font-medium z-10">
                                {/* Top Trigger */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm relative z-10 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1 flex justify-center items-center gap-2">
                                        發現頸部異常腫塊
                                    </div>
                                    <div className="text-sm opacity-90">詳細詢問病史與理學檢查</div>
                                </div>

                                {/* Main Arrow */}
                                <div className="h-6 w-0.5 bg-gray-300 relative"></div>

                                {/* Age Split horizontal line */}
                                <div className="w-2/3 h-0.5 bg-gray-300 relative"></div>

                                <div className="w-full flex justify-between relative mt-0 px-4 md:px-12">

                                    {/* Left Branch - Pediatric */}
                                    <div className="flex flex-col items-center w-[45%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                                            <div className="font-bold">兒童 ({"<"} 18歲)</div>
                                            <div className="text-xs opacity-90 mt-1">發炎 &gt; 先天性 &gt; 惡性</div>
                                        </div>

                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>

                                        <div className="w-full bg-white border-2 border-gray-200 text-gray-700 p-3 rounded-lg text-center shadow-sm hover:border-blue-400 transition-colors">
                                            <div className="font-bold text-sm">先給予經驗性抗生素治療</div>
                                            <div className="text-xs mt-1">觀察 1-2 週是否縮小</div>
                                        </div>

                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>

                                        <div className="w-full bg-gray-50 border-2 border-gray-300 text-gray-800 p-3 rounded-lg text-center shadow-sm">
                                            <div className="font-bold text-sm text-red-600">無效或具備紅旗警訊</div>
                                            <div className="text-xs mt-1">安排頭頸部超音波評估</div>
                                        </div>
                                    </div>

                                    {/* Right Branch - Adult */}
                                    <div className="flex flex-col items-center w-[45%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-orange-50 border-2 border-orange-200 text-orange-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                                            <div className="font-bold">成人 ( {">="} 40歲 )</div>
                                            <div className="text-xs opacity-90 mt-1">惡性「法則 80」</div>
                                        </div>

                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>

                                        <div className="w-full bg-white border-2 border-gray-200 text-gray-700 p-3 rounded-lg text-center shadow-sm hover:border-red-400 transition-colors">
                                            <div className="font-bold text-sm">直接進行內視鏡與超音波</div>
                                            <div className="text-xs mt-1">搜尋鼻咽、口咽、下咽原發病灶</div>
                                        </div>

                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>

                                        <div className="w-full bg-gray-50 border-2 border-gray-300 text-gray-800 p-3 rounded-lg text-center shadow-sm">
                                            <div className="font-bold text-sm text-red-600">發現惡性超音波特徵</div>
                                            <div className="text-xs mt-1">立即安排 US-FNA / CNB</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Merge back to Ultrasound target */}
                                <div className="w-2/3 h-10 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-b-xl relative mt-0">
                                    <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gray-300 -translate-x-1/2 translate-y-1/2">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                    </div>
                                </div>
                                <div className="h-9 w-0.5 relative"></div>

                                {/* Final Output */}
                                <div className="w-full max-w-sm bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg relative z-10 overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="relative font-bold text-lg flex items-center justify-center gap-1">
                                        病理診斷確定 → 制定精準治療計畫
                                    </div>
                                    <div className="relative text-xs opacity-90 mt-1 font-semibold">外科切除 / 放射線治療 / 化學治療 / 射頻消融</div>
                                </div>

                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】與疾病和平共處</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700">
                                許多患者在門診常會問我：「抽針會不會很痛？會不會讓癌細胞擴散？」
                                <br /><br />
                                其實，超音波導引細針抽吸使用的針頭非常細（比抽血的針還要細），過程大約只有一兩分鐘，且安全性極高、導致擴散的機率微乎其微。不論是內科或外科，我們都強調「先有正確的診斷，才有正確的治療」。精準的超音波診斷，能幫助我們避開血管跟神經，直搗病灶核心，是保護您的第一道防線。
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【Take Home Message】</h2>
                        <ul className="space-y-4 font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 超音波導引穿刺 (US-FNA) 是目前診斷頭頸部不明腫塊、甲狀腺結節的安全首選，大幅減少了不必要的切片手術。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 成人發現無痛性頸部腫塊需高度警覺惡性可能；兒童的頸部腫塊則以感染及先天發育囊腫（如甲狀舌管囊腫、蛤蟆腫）居多。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 若兒童的腫塊伴隨「紅旗警訊」，請儘速就醫安排超音波排查，不要當成一般感冒輕忽。</li>
                        </ul>

                    </article>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
