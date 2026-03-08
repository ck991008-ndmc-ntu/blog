import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-03-chronic-cough");

    return (
        <div className="flex flex-col md:flex-row gap-8">
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
                                    <a href="https://doi.org/10.1016/j.chest.2017.10.016" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Irwin, R. S., French, C. L., Chang, A. B., et al. (2018). Classification of Cough as a Symptom in Adults and Management Algorithms: CHEST Guideline and Expert Panel Report. <em>Chest, 153</em>(1), 196-209. https://doi.org/10.1016/j.chest.2017.10.016
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1183/13993003.01136-2019" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Morice, A. H., Millqvist, E., Bieksiene, K., et al. (2020). ERS guidelines on the diagnosis and treatment of chronic cough in adults and children. <em>European Respiratory Journal, 55</em>(1), 1901136. https://doi.org/10.1183/13993003.01136-2019
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* 內容開始 */}
                        <p className="leading-relaxed">
                            「醫生，我咳了快兩個月了，肺部 X 光照了都說沒事，到底為什麼一直咳？」這是門診中極度常見的抱怨。慢性咳嗽（定義為持續超過 8 週的咳嗽）不僅會造成聲帶受損、睡眠障礙，更是許多隱藏性疾病的冰山一角。根據國際權威的 <strong>ACCP</strong> 與 <strong>ERS</strong> 指引，治療慢咳的關鍵，往往不在「肺部」，而在於找出刺激咳嗽中樞的源頭。
                        </p>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【兩大學派的診斷視角】</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-blue-800 mb-3 border-b border-blue-200 pb-2">ACCP 的三支柱理論 (Anatomical Triad)</h3>
                                <p className="text-sm leading-relaxed mb-3">
                                    美國胸腔科醫學會強調從解剖學位置出發，指出高達 90% 的不明原因慢咳都源於這三大問題：
                                </p>
                                <ul className="text-sm space-y-2 list-disc pl-4 text-gray-700 font-medium">
                                    <li><strong>UACS (上呼吸道咳嗽症候群)：</strong>過去稱為鼻涕倒流症候群，由過敏性鼻炎或鼻竇炎引起。</li>
                                    <li><strong>氣喘與非氣喘性嗜酸性球支氣管炎 (CVA/NAEB)：</strong>呼吸道對冷空氣或過敏原極度敏感。</li>
                                    <li><strong>胃食道逆流 (GERD)：</strong>胃酸或胃氣溢流刺激食道下端或喉嚨的神經受器。</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-purple-800 mb-3 border-b border-purple-200 pb-2">ERS 的咳嗽過敏症候群 (Cough Hypersensitivity)</h3>
                                <p className="text-sm leading-relaxed mb-3">
                                    歐洲呼吸學會則提出了「咳嗽過敏症候群」的新概念。他們認為，長期咳嗽的患者，其控制咳嗽的「迷走神經傳入途徑」發生了高度致敏 (Sensitization)。
                                </p>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    這解釋了為什麼有些患者只要聞到一點香水味、吹到一點冷風，甚至講話講稍微大聲一點，就會引發難以克制的劇烈陣咳。對於這類神經高度敏感的患者，ERS 甚至建議可以使用神經調節藥物（如 Gabapentin）來「冷靜」神經。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【標準決策流程】慢性咳嗽診斷與治療演算法</h2>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">成人慢性咳嗽 (&gt;8週) 標準鑑別流程</h3>

                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10 w-full">
                                {/* Step 1: Red flags */}
                                <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-lg shadow-sm relative z-10">
                                    <div className="font-bold text-lg flex justify-start items-center gap-2 mb-2">
                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">1</span>
                                        排除紅旗警訊與已知誘因（首要任務）
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm mt-3 border-t border-red-200 pt-3">
                                        <ul className="list-disc pl-5 opacity-90">
                                            <li>是否咳血？</li>
                                            <li>大量膿痰或發燒？</li>
                                            <li>體重不明原因減輕？</li>
                                        </ul>
                                        <ul className="list-disc pl-5 opacity-90">
                                            <li><strong>胸部 X 光異常？</strong> (肺炎、肺結核、腫瘤)</li>
                                            <li><strong>目前有抽菸嗎？</strong> (COPD、慢性支氣管炎)</li>
                                            <li><strong>服用 ACEI 類降血壓藥？</strong> (常見副作用)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="h-6 w-0.5 bg-gray-300 relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                </div>

                                {/* Step 2: Triad Evaluation */}
                                <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg shadow-sm relative z-10">
                                    <div className="font-bold text-lg flex justify-start items-center gap-2 mb-2">
                                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">2</span>
                                        評估三大常見病因 (Anatomical Triad)
                                    </div>
                                    <p className="text-sm opacity-90 mb-3">若 X 光正常且無紅旗警訊，則根據症狀進行「經驗性治療 (Empirical Trial)」：</p>

                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="bg-white p-3 rounded border border-blue-100 flex items-start gap-4">
                                            <div className="w-24 shrink-0 font-bold text-[#1A2B3C]">UACS <br /><span className="text-xs font-normal text-gray-500">上呼吸道症候群</span></div>
                                            <div className="text-sm text-gray-700">
                                                <strong>症狀：</strong> 鼻塞、鼻涕倒流感、頻繁清喉嚨。<br />
                                                <strong>治療：</strong> 第一代抗組織胺 + 偽麻黃鹼，或加上類固醇鼻噴劑。
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-blue-100 flex items-start gap-4">
                                            <div className="w-24 shrink-0 font-bold text-[#1A2B3C]">CVA <br /><span className="text-xs font-normal text-gray-500">咳嗽型氣喘</span></div>
                                            <div className="text-sm text-gray-700">
                                                <strong>症狀：</strong> 乾咳為主，夜間或接觸冷空氣變嚴重、喘鳴聲。<br />
                                                <strong>治療：</strong> 吸入性類固醇 (ICS) 或支氣管擴張劑、白三烯受體拮抗劑。
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-blue-100 flex items-start gap-4">
                                            <div className="w-24 shrink-0 font-bold text-[#1A2B3C]">GERD <br /><span className="text-xs font-normal text-gray-500">胃食道逆流</span></div>
                                            <div className="text-sm text-gray-700">
                                                <strong>症狀：</strong> 胸口灼熱、胃酸逆流、飯後或躺下時咳嗽加劇。<br />
                                                <strong>治療：</strong> 改變飲食習慣 (戒咖啡因、甜食)、使用氫離子幫浦阻斷劑 (PPI) 至少 2-3 個月。
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="h-6 w-0.5 bg-gray-300 relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                </div>

                                {/* Step 3: Refractory */}
                                <div className="w-full bg-purple-50 border-2 border-purple-200 text-purple-800 p-4 rounded-lg text-center shadow-sm relative z-10 transition-transform hover:scale-[1.02] cursor-pointer group">
                                    <div className="font-bold text-lg mb-1 flex justify-center items-center gap-2">
                                        如果治療後還是咳？ (Refractory Chronic Cough)
                                    </div>
                                    <div className="text-sm opacity-90 mt-2 text-left bg-white p-3 rounded border border-purple-100 group-hover:border-purple-300 transition-colors">
                                        若針對上述三大原因的治療皆無效，則進入<strong>咳嗽過敏症候群 (Cough Hypersensitivity Syndrome)</strong> 的範疇。<br />
                                        醫師可能會考慮處方神經調節劑（如 Gabapentin 或 Pregabalin），甚至低劑量嗎啡來抑制過度敏感的神經傳導。此外，也可轉介語言治療師 (Speech pathology therapy) 進行非藥物介入。
                                    </div>
                                </div>

                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】與疾病和平共處</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700">
                                在內科與耳鼻喉科的雙重訓練背景之下，慢性咳嗽的患者經常在門診大排長龍。耳鼻喉科醫師擅長用內視鏡直接看「鼻竇裡的膿」跟「咽喉上的胃酸灼傷」；而內科醫師則習慣傾聽「肺部的哮喘聲」。
                                <br /><br />
                                慢性咳嗽的診斷需要無比的耐心。有時候患者可能同時合併了鼻涕倒流跟胃食道逆流 (Double whammy)。請給自己也給醫師一點時間，確實記錄下自己最常咳嗽的時機（如：吃飽後、半夜吹冷氣時、出門聞到特定異味時），這些看似微不足道的線索，往往是我們破解咳嗽謎團的萬能鑰匙！
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【Take Home Message】</h2>
                        <ul className="space-y-4 font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 慢性咳嗽（大於8週）若胸部 X 光正常，最常見的元凶往往不在肺臟，而是在「鼻子」、「食道」或是「隱性氣喘」。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 治療慢性咳嗽就像在解謎，醫師常會使用「經驗性療法」：先開立鼻過敏或胃酸逆流的藥物吃一到兩週。如果咳嗽改善了，就等於同時完成了「診斷」與「治療」。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 不要自己亂買止咳藥水！市售止咳藥多半只能暫時壓制症狀，無法根除鼻炎或是胃酸對神經的刺激，甚至可能掩蓋惡性腫瘤的警訊。</li>
                        </ul>

                    </article>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
