import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 回到首頁
                    </Link>

                    <header className="mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 flex-wrap">
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold shadow-sm">耳鼻喉專科</span>
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold shadow-sm">最新指引</span>
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-bold shadow-sm">#鼻竇炎</span>
                            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-bold shadow-sm">#生物製劑</span>
                            <time>2026-03-06</time>
                            <span>· 8 min read</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-[#1A2B3C] mb-4 leading-tight">
                            精準醫療時代：2026 最新指引解構——生物製劑在慢性鼻竇炎與鼻息肉的應用策略
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            慢性鼻竇炎合併鼻息肉（CRSwNP）常因極高的復發率讓患者苦不堪言。隨著 ARIA-Italy 最新共識指引的發布，第二型發炎反應的「標靶治療」正全面顛覆傳統的處置邏輯，為難治型患者帶來新契機。
                        </p>
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.1016/j.waojou.2021.100592" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Gelardi, M., et al. (2021). ARIA-Italy multidisciplinary consensus on nasal polyposis and biological treatments. <em>World Allergy Organization Journal, 14</em>(11), 100592. https://doi.org/10.1016/j.waojou.2021.100592
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.4193/Rhin20.600" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Fokkens, W. J., Lund, V. J., Hopkins, C., et al. (2020). European Position Paper on Rhinosinusitis and Nasal Polyps 2020. <em>Rhinology, 58</em>(Suppl S29), 1-464. https://doi.org/10.4193/Rhin20.600
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* 內容開始 */}

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【基礎知識】認識鼻竇解剖構造</h2>
                        <div className="my-8 flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <div className="w-full md:w-1/2">
                                <img src="/images/sinus_anatomy.png" alt="鼻竇解剖構造" className="w-full h-auto rounded-lg shadow-sm border border-gray-100 mix-blend-multiply" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    我們的臉部骨骼內有四個主要的空腔，統稱為<strong>鼻竇 (Paranasal sinuses)</strong>，它們與鼻腔相通，負責減輕頭骨重量、調節吸入空氣的溫濕度，並協助發聲共鳴：
                                </p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2"><span className="text-blue-600 font-bold">1.</span> <div><strong>額竇 (Frontal Sinus)：</strong>位於前額眼睛上方。</div></li>
                                    <li className="flex gap-2"><span className="text-blue-600 font-bold">2.</span> <div><strong>篩竇 (Ethmoid Sinus)：</strong>位於兩眼中間，由許多小氣室組成。</div></li>
                                    <li className="flex gap-2"><span className="text-blue-600 font-bold">3.</span> <div><strong>蝶竇 (Sphenoid Sinus)：</strong>位於鼻腔最深處，靠近頭顱中心。</div></li>
                                    <li className="flex gap-2"><span className="text-blue-600 font-bold">4.</span> <div><strong>上頷竇 (Maxillary Sinus)：</strong>位於兩側臉頰，是體積最大的鼻竇。</div></li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed text-sm bg-blue-50 p-3 rounded-lg mt-4 border border-blue-100">
                                    <strong>為什麼會長鼻息肉？</strong> 當鼻黏膜遭受長期的發炎刺激（如第二型發炎反應），上皮組織會水腫並如水球般向外突出，最終形成鼻息肉（Nasal Polyps）。這些息肉最常從篩竇或中鼻道長出，阻塞鼻竇的開口，導致流膿鼻涕、嗅覺喪失與臉部脹痛。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【核心機制】發炎路徑的精準攔截</h2>
                        <p className="leading-relaxed">傳統的類固醇與內視鏡鼻竇手術（ESS）猶如「除草」，但若土壤的發炎體質不改，息肉極易春風吹又生。生物製劑則是「改變土壤」的標靶武器，直接阻斷發炎的源頭：</p>
                        <ul className="bg-blue-50 p-6 rounded-xl list-none space-y-6 my-6 border border-blue-100 shadow-sm pl-4">
                            <li className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow shrink-0">1</div>
                                <div><strong className="text-[#1A2B3C]">阻斷 IL-4 / IL-13 路徑：</strong> 透過結合受體（如 Dupilumab），瞬間煞車嗜酸性球的召集與杯狀細胞的過度增生，直接縮小息肉體積。</div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow shrink-0">2</div>
                                <div><strong className="text-[#1A2B3C]">抑制 IL-5 路徑：</strong> 針對血液與組織中嗜酸性球（Eosinophils）數量異常升高的患者，直接阻斷其存活與成熟（如 Mepolizumab）。</div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow shrink-0">3</div>
                                <div><strong className="text-[#1A2B3C]">抗 IgE 策略：</strong> 針對過敏體質強烈、游離 IgE 指數偏高的患者，從上游攔截過敏反應（如 Omalizumab）。</div>
                            </li>
                        </ul>

                        <h2 id="慢性鼻竇炎" className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【臨床實務】何時該啟動生物製劑？</h2>
                        <p className="leading-relaxed">在台灣的臨床實務與健保框架下，功能性內視鏡鼻竇手術（FESS）仍然是首選的標準介入方案。然而，根據最新共識，若患者出現以下<strong>難治型特徵</strong>，即可考慮將生物製劑納入治療演算法：</p>
                        <ol className="list-decimal pl-6 space-y-3 mb-8 marker:text-blue-600 marker:font-bold">
                            <li>已經過完善的內科保守治療（如含類固醇的鼻鹽水沖洗、短程口服類固醇、抗生素）。</li>
                            <li>曾接受過至少一次以上的<strong>功能性內視鏡鼻竇手術（FESS）</strong>，息肉卻仍頑固復發。</li>
                            <li>合併有<strong>嚴重氣喘 (Severe Asthma)</strong> 或阿斯匹靈加重型呼吸道疾病 (AERD)。</li>
                            <li>具備第二型發炎的生物標記：如高嗜酸性球計數 (Eosinophil count)、特異性 IgE 偏高等。</li>
                        </ol>
                        <p className="leading-relaxed border-l-2 border-gray-300 pl-4 italic opacity-80">
                            <strong>臨床決策：</strong> 對於復發性 CRSwNP，應視為一種「系統性免疫疾病」而非單純的局部組織增生，生物製劑的介入能顯著改善嗅覺喪失與鼻塞，大幅減少反覆手術的需求。
                        </p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">慢性鼻竇炎合併鼻息肉 (CRSwNP) 治療流程</h3>

                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1 */}
                                <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm relative z-10 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1 flex justify-center items-center gap-2">
                                        初步診斷為 CRSwNP
                                    </div>
                                    <div className="text-sm opacity-90">內科保守治療（鼻鹽水沖洗、鼻噴劑、短期口服類固醇）</div>
                                </div>

                                {/* Arrow */}
                                <div className="h-6 w-0.5 bg-gray-300 relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                </div>

                                {/* Step 2 */}
                                <div className="w-full bg-white border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm relative z-10 mt-2 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1 text-gray-800">症狀持續 / 內科治療效果不佳</div>
                                    <div className="text-sm opacity-90">進入外科介入評估</div>
                                </div>

                                {/* Arrow */}
                                <div className="h-6 w-0.5 bg-gray-300 relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                </div>

                                {/* Step 3 */}
                                <div className="w-full bg-orange-50 border-2 border-orange-200 text-orange-800 p-4 rounded-lg text-center shadow-sm relative z-10 mt-2 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1 flex justify-center items-center gap-2">
                                        功能性內視鏡鼻竇手術 (FESS)
                                    </div>
                                    <div className="text-sm opacity-90">透過手術切除息肉、打開鼻竇開口引流</div>
                                </div>

                                {/* Arrow & Split */}
                                <div className="h-8 w-0.5 bg-gray-300 relative mt-2"></div>
                                <div className="w-full flex justify-between relative mt-0">
                                    <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>

                                    {/* Left Split */}
                                    <div className="flex flex-col items-center w-1/2 pt-0.5 px-2">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm mt-2 transition-transform hover:scale-[1.03]">
                                            <div className="font-bold flex justify-center items-center gap-1">控制良好</div>
                                            <div className="text-xs opacity-90 mt-1">持續局部藥物保養與追蹤</div>
                                        </div>
                                    </div>

                                    {/* Right Split */}
                                    <div className="flex flex-col items-center w-1/2 pt-0.5 px-2">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm mt-2 transition-transform hover:scale-[1.03]">
                                            <div className="font-bold flex justify-center items-center gap-1">息肉頑固復發</div>
                                            <div className="text-xs opacity-90 mt-1">難治型 / 具備第二型發炎特徵</div>
                                        </div>

                                        {/* Right Sub-arrow */}
                                        <div className="h-6 w-0.5 bg-gray-300 relative mt-2">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>

                                        {/* Final Step */}
                                        <div className="w-full bg-purple-50 border-2 border-purple-300 text-purple-900 p-4 rounded-lg text-center shadow-lg mt-2 relative z-10 overflow-hidden group cursor-pointer">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                            <div className="relative font-bold text-lg flex items-center justify-center gap-1">
                                                生物製劑標靶治療
                                            </div>
                                            <div className="relative text-xs opacity-90 mt-1 font-semibold">阻斷 IL-4/13, IL-5, IgE 等發炎路徑</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】與疾病和平共處</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700">
                                作為有內科經驗目前在耳鼻喉科訓練的醫師，我經常看到患者因為害怕頻繁開刀而選擇「隱忍」鼻塞與失去嗅覺的痛苦。現在的醫學已經從「切割」進步到「精準調節」。
                                <br /><br />
                                如果您是手術後仍不斷復發的「苦主」，請不要灰心。建議您下次就診時，可以向醫師詢問抽血檢查「嗜酸性球」與「IgE」指數，讓我們判斷您是否屬於第二型發炎體質，這將是決定您是否適用生物製劑這項新武器的關鍵數據！
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【FAQ 快速問答】解析</h2>
                        <div className="space-y-6">
                            <div className="bg-white border text-gray-700 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-[#1A2B3C] mb-3 flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm shrink-0">Q1</span>
                                    打生物製劑，息肉的復發率能降低多少？是否有具體數據 (Metrics)?
                                </h4>
                                <p className="opacity-90 leading-relaxed">
                                    根據臨床試驗數據，使用生物製劑（如 Dupilumab）治療 24 週後，患者的鼻息肉總分（NPS）與鼻塞嚴重度（NCS）均有具備統計學意義的顯著下降。多數患者能成功避免再次手術的命運，嗅覺恢復的比例也遠高於單純手術組。
                                </p>
                            </div>
                            <div className="bg-white border text-gray-700 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-[#1A2B3C] mb-3 flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm shrink-0">Q2</span>
                                    這是一種長期維護 (Maintenance) 還是可以停藥的治療？
                                </h4>
                                <p className="opacity-90 leading-relaxed">
                                    目前生物製劑被視為一種「疾病調節劑 (Disease modifier)」。如同控制高血壓，一開始需要定期施打（通常為每兩週到四週一次皮下注射）。未來是否能完全停藥仍需更多長期數據支持，但對難治型患者而言，它能提供極長的無症狀期 (Symptom-free period)。
                                </p>
                            </div>
                            <div className="bg-white border text-gray-700 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-[#1A2B3C] mb-3 flex items-center gap-2">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm shrink-0">Q3</span>
                                    在台灣，健保 (NHI) 有給付這項治療嗎？
                                </h4>
                                <p className="opacity-90 leading-relaxed">
                                    生物製劑造價不菲。目前台灣健保主要將其給付於「嚴重的嗜酸性白血球型氣喘」或「重度異位性皮膚炎」。純粹因「鼻息肉」而申請健保給付門檻極高，常常需要專案審查或是自費使用。建議由專業醫師根據您的抽血報告進行全面評估與建議。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【Take Home Message】</h2>
                        <ul className="space-y-4 font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 慢性鼻竇炎合併鼻息肉（CRSwNP）若伴隨氣喘，多屬「第二型發炎反應」，復發率極高。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 最新 ARIA 共識明確定位：生物製劑是針對「手術失敗」或「難治型」患者的精準標靶治療。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 透過抽血檢驗生物標記（如嗜酸性球、IgE），可量身打造最合適的單株抗體，從根本改善生活品質。</li>
                        </ul>

                    </article>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
