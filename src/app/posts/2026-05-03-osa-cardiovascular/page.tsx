import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "枕邊人說你打呼很大聲？小心，這不只是噪音——聊聊睡眠呼吸中止症背後的心血管隱形炸彈",
    description: "打破「打呼等於睡得香」的迷思。從耳鼻喉科的氣道結構、內科的間歇性缺氧病理機轉，到預防醫學的篩檢策略，全面解析 OSA 與難治型高血壓、心房顫動及中風之間的隱形危機。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-03-osa-cardiovascular");

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
                                    <a href="https://doi.org/10.1161/CIR.0000000000000988" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Yeghiazarians Y, et al. (2021). Obstructive Sleep Apnea and Cardiovascular Disease: A Scientific Statement From the American Heart Association. <em>Circulation.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1056/NEJMoa1606599" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        McEvoy RD, et al. (2016). CPAP for Prevention of Cardiovascular Events in Obstructive Sleep Apnea (SAVE Trial). <em>N Engl J Med.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.5664/jcsm.9592" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        AASM (2025). Clinical Practice Guideline for Surgical Referral for Adults with OSA. <em>Journal of Clinical Sleep Medicine.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            上個月，一位52歲、住在台北市信義區的陳先生（化名），在太太的強烈要求下來到門診。陳先生是一間上市科技公司的副總經理，工作極度忙碌。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，其實是我硬拉他來的。」坐在一旁的陳太太率先開口：「他打呼已經打了好幾年，而且越來越誇張，聲音大到我都必須戴耳塞才能入睡。最可怕的是，有時候呼嚕聲會突然『斷掉』好幾秒，然後他猛地大吸一口氣，嚇得我整個人彈起來。」陳先生則一臉無奈地說：「我覺得還好吧，就是白天比較容易累、開會的時候偶爾會恍神。但最讓我困擾的是，最近做健檢發現血壓飆到148/96，我的家庭醫師開了兩種降血壓藥，吃了三個月還是壓不太下來。」
                        </p>
                        <p className="leading-relaxed mb-6">
                            陳先生皺著眉問了一個我在門診幾乎每週都會聽到的問題：「醫師，打呼不是很正常嗎？我爸也打呼打了一輩子。而且打呼跟我的高血壓，應該沒有關係吧？」
                        </p>

                        {/* ========== 耳鼻喉科視角 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">耳鼻喉科視角：不只是「打呼」這麼簡單的氣道阻塞</h2>

                        <div className="my-8">
                            <Image 
                                src="/images/OSA anatomy.png" 
                                alt="阻塞型睡眠呼吸中止症氣道解剖示意圖" 
                                width={800} 
                                height={600} 
                                className="w-full rounded-xl shadow-sm border border-gray-100"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                說實話，在門診我們最常需要打破的第一個迷思就是：<strong>「打呼等於睡得香」</strong>。事實恰好相反，嚴重的打鼾往往代表上呼吸道在睡眠時正面臨顯著的阻塞。
                            </p>
                            <p className="leading-relaxed mb-4">
                                阻塞型睡眠呼吸中止症（Obstructive Sleep Apnea, OSA）的核心問題，就在於睡眠時上呼吸道反覆塌陷，導致氣流受阻甚至完全中斷。造成塌陷的結構因素通常包括：
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>扁桃腺與腺樣體肥大：</strong>特別常見於兒童與年輕成人，肥大的組織直接壓縮口咽空間。</li>
                                <li><strong>軟顎與懸壅垂鬆弛：</strong>隨著年齡增長或肥胖，軟顎組織變得冗贅下垂，在睡眠中隨呼吸氣流振動產生鼾聲，嚴重時造成阻塞。</li>
                                <li><strong>舌根肥厚與後縮：</strong>肥胖或下顎骨後縮的患者，舌根在仰睡時容易向後墜落，堵住咽喉氣道。</li>
                                <li><strong>鼻中隔彎曲與下鼻甲肥厚：</strong>鼻腔層面的阻塞雖不直接造成呼吸中止，但會增加口呼吸的比例，間接加重咽部塌陷。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                在門診中，耳鼻喉科醫師會透過軟式纖維鼻咽喉內視鏡，搭配 Muller's maneuver（請患者閉嘴捏鼻用力吸氣），即時觀察咽部各層面在負壓下的塌陷程度，初步判斷阻塞的位置與嚴重度。這項檢查只需要幾分鐘，但提供的資訊對於後續治療策略的擬定非常關鍵。
                            </p>
                        </div>

                        {/* ========== 內科視角：心血管風險 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">內科視角：夜間缺氧如何引爆全身性的心血管危機？</h2>
                        <p className="leading-relaxed mb-6">
                            老實說，OSA 最危險的地方並不在於打呼本身，而是每一次呼吸中止所引發的<strong>間歇性缺氧（Intermittent Hypoxia）</strong>。在最新的美國心臟協會（AHA）科學聲明中，已經將 OSA 明確定位為心血管疾病的獨立風險因子。以下是它傷害心血管系統的關鍵機轉：
                        </p>

                        {/* 病理機轉流程圖 */}
                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">OSA 間歇性缺氧與心血管損傷的病理機轉</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">睡眠中反覆呼吸中止</div>
                                    <div className="text-sm mt-1">每小時數十次的氣道塌陷與缺氧</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-orange-50 border-2 border-orange-200 text-orange-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">間歇性缺氧 (Intermittent Hypoxia)</div>
                                    <div className="text-sm mt-1">類似缺血再灌流損傷，產生大量活性氧自由基 (ROS)</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-lg flex justify-between">
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-amber-50 border-2 border-amber-200 text-amber-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold">交感神經過度亢奮</div>
                                            <div className="text-xs mt-1">心跳加速、血壓飆升、血管收縮</div>
                                        </div>
                                    </div>
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-purple-50 border-2 border-purple-200 text-purple-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold">氧化壓力與全身性發炎</div>
                                            <div className="text-xs mt-1">NF-kB 活化、內皮功能障礙</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/3 h-8 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-b-xl relative mt-0">
                                    <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-gray-300 -translate-x-1/2 translate-y-1/2"></div>
                                </div>
                                <div className="h-4 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg overflow-hidden">
                                    <div className="font-bold text-lg">心血管系統長期受損</div>
                                    <div className="text-sm mt-2 space-y-1">
                                        <div>難治型高血壓 / 心房顫動 / 中風</div>
                                        <div>動脈粥狀硬化 / 心衰竭</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 三大心血管重症 */}
                        <h3 className="text-xl font-bold text-[#1A2B3C] mt-10 mb-6">OSA 與三大心血管重症的關聯</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-lg text-red-700 mb-2">難治型高血壓</h4>
                                <p className="text-gray-600 text-sm mb-2">約 <strong>80%</strong> 的難治型高血壓患者合併有未診斷的 OSA。夜間反覆的交感神經激發，使血壓在應該下降的睡眠時段反而持續偏高（non-dipping pattern）。</p>
                                <p className="text-xs text-gray-500 italic">如果你吃了兩、三種降壓藥血壓還是壓不下來，務必跟醫師討論是否需要排除 OSA。</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-lg text-red-700 mb-2">心房顫動 (AF)</h4>
                                <p className="text-gray-600 text-sm mb-2">在心房顫動患者中，約 <strong>32-49%</strong> 合併 OSA。間歇性缺氧造成的心房結構重塑與自律神經失衡，是誘發心房顫動的重要推手。更麻煩的是，未治療的 OSA 會大幅增加電燒術後的復發率。</p>
                                <p className="text-xs text-gray-500 italic">心臟科醫師在處理心房顫動時，越來越重視同步篩檢 OSA。</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-lg text-red-700 mb-2">缺血性中風</h4>
                                <p className="text-gray-600 text-sm mb-2">嚴重 OSA（AHI {">"} 30）的患者，中風風險是一般人的 <strong>2 倍以上</strong>。夜間的血壓劇烈波動、血液高凝狀態與動脈粥狀硬化加速，都是促成中風的關鍵因素。</p>
                                <p className="text-xs text-gray-500 italic">中風的預防不只是控制血壓和膽固醇，睡眠品質也是重要的一環。</p>
                            </div>
                        </div>

                        {/* SAVE Trial */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 mb-8">
                            <p className="leading-relaxed mb-4">
                                <strong className="text-[#1A2B3C]">來自 SAVE Trial 的重要啟示：</strong>2016 年發表在 NEJM 的 SAVE 試驗，是目前規模最大的 OSA 心血管預防隨機對照研究。結果顯示，對於已經罹患心血管疾病的中重度 OSA 患者，使用 CPAP 並未能顯著降低心血管事件（如心肌梗塞或中風）的再發率。
                            </p>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4">
                                然而，這不代表治療 OSA 沒有意義。SAVE Trial 受限於患者的 CPAP 平均使用時數偏低（僅約 3.3 小時/夜），且已是心血管疾病的「二級預防」情境。在門診我們更重視的是「一級預防」——在心血管疾病尚未發生之前，及早診斷與治療 OSA，才能真正阻斷這條從缺氧到心臟的傷害鏈。
                            </p>
                        </div>

                        {/* ========== 預防醫學：篩檢與治療 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">預防醫學視角：從篩檢到個人化治療策略</h2>
                        <p className="leading-relaxed mb-6">當我們懷疑一位患者可能有 OSA 時，門診的評估流程大致如下：</p>

                        {/* 篩檢決策流程圖 */}
                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">「我懷疑自己有 OSA」——門診篩檢與治療決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">出現警訊症狀</div>
                                    <div className="text-sm mt-1">嚴重打鼾 / 目擊呼吸中止 / 白天極度嗜睡 / 難治型高血壓</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">門診初步評估</div>
                                    <div className="text-sm mt-1">STOP-Bang 問卷 / Epworth 嗜睡量表 / 內視鏡氣道評估</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-purple-50 border-2 border-purple-200 text-purple-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">睡眠檢查確認診斷</div>
                                    <div className="text-sm mt-1">居家睡眠檢測 (HSAT) 或醫院多頻道睡眠攝影 (PSG)</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg">
                                    <div className="font-bold text-lg">AHI 嚴重度分級</div>
                                    <div className="text-sm mt-2 space-y-1">
                                        <div>輕度：5-14 次/hr</div>
                                        <div>中度：15-29 次/hr</div>
                                        <div>重度：≥ 30 次/hr</div>
                                    </div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-md bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">依嚴重度與個人條件制定治療方案</div>
                                    <div className="text-sm mt-1">見下方治療選項比較表</div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 治療選項比較表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">治療選項比較表</h2>
                        <p className="leading-relaxed mb-6">針對不同嚴重程度的 OSA，目前的主流治療策略如下：</p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">治療方式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用對象</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">臨床效益</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">生活型態調整（減重、戒酒、側睡）</td>
                                        <td className="px-4 py-4 font-medium">所有 OSA 患者的基礎治療</td>
                                        <td className="px-4 py-4 text-green-700">體重減少 10% 可降低 AHI 約 26%；側睡可減少舌根後墜</td>
                                        <td className="px-4 py-4 text-gray-600">需長期維持，單靠生活調整對中重度 OSA 通常不足夠。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">CPAP 陽壓呼吸器</td>
                                        <td className="px-4 py-4 font-medium">中重度 OSA 的黃金標準治療</td>
                                        <td className="px-4 py-4 text-green-700">有效撐開氣道、改善血氧、降低血壓、改善白天嗜睡與生活品質</td>
                                        <td className="px-4 py-4 text-gray-600">約 30-50% 患者長期耐受性不佳；需定期回診調整壓力與面罩。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">口腔矯正器 (MAD)</td>
                                        <td className="px-4 py-4 font-medium">輕中度 OSA 或 CPAP 無法耐受者</td>
                                        <td className="px-4 py-4 text-green-700">將下顎前移擴大咽部空間，舒適度通常優於 CPAP</td>
                                        <td className="px-4 py-4 text-gray-600">需牙科客製化，長期配戴可能影響咬合；對重度 OSA 效果有限。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">睡眠外科手術</td>
                                        <td className="px-4 py-4 font-medium">CPAP 無法耐受且 BMI {"<"} 40 者</td>
                                        <td className="px-4 py-4 text-green-700">針對阻塞位點精準處理（UPPP、MMA、舌下神經刺激術等）</td>
                                        <td className="px-4 py-4 text-gray-600">術前需以 DISE 評估塌陷位置；非所有患者皆適合，術後仍有復發可能。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我常遇到這樣的情境：患者因為打呼被家人「押來」門診，自己卻覺得沒什麼大不了。但當我把他們的內視鏡影像調出來，讓他們親眼看到自己咽部塌陷的程度，再搭配一份睡眠檢查報告上紅通通的 AHI 數字，很多人才真正意識到事情的嚴重性。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，OSA 是一個非常需要「跨科合作」的疾病。耳鼻喉科負責評估氣道結構、心臟科同步追蹤血壓與心律、胸腔科或睡眠中心負責 CPAP 的調整與追蹤——少了任何一環，治療效果都會打折扣。老實說，CPAP 的耐受性確實是臨床上最大的挑戰。有些患者嘗試了幾個晚上就放棄了，但也有些患者在更換了合適的鼻枕式面罩、調低了起始壓力後，反而回饋說「終於知道一覺到天亮是什麼感覺」。所以我總是鼓勵患者：如果第一次戴不習慣，先不要放棄，讓我們一起微調。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>打呼絕對不等於睡得好。嚴重且伴隨呼吸中止的打鼾，是阻塞型睡眠呼吸中止症（OSA）的核心警訊。</li>
                                <li>OSA 透過「間歇性缺氧」引發交感神經亢奮、氧化壓力與全身性發炎，是難治型高血壓、心房顫動與中風的獨立危險因子。</li>
                                <li>如果你的血壓吃了多種藥物仍然控制不佳，務必請醫師評估是否有潛在的 OSA 問題。</li>
                                <li>居家睡眠檢測（HSAT）方便、快速、不需住院，是篩檢 OSA 最務實的第一步。</li>
                                <li>CPAP 仍是中重度 OSA 的黃金標準治療，但第一次戴不習慣不代表失敗——面罩選擇與壓力微調往往能大幅改善舒適度。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「陳先生，今天最重要的事情就是：打呼這件事，不只是你太太的睡眠品質問題，更是你自己心血管健康的隱形警報。我們先安排一個居家睡眠檢測，等報告出來後再一起討論最適合你的治療方案。你太太今天硬拉你來，其實是幫了你一個大忙。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-03-osa-cardiovascular" />
            </div>

            <Sidebar />
        </div>
    );
}
