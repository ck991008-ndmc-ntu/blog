import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "天旋地轉、噁心想吐？聊聊常被誤會的「耳石異位症」與眩暈退化復健指南",
    description: "起床或翻身時突然覺得天旋地轉，甚至噁心嘔吐？這不一定是中風。本文從耳鼻喉科的臨床視角，解析良性陣發性姿勢性眩暈（俗稱耳石異位症）的病理機轉，並結合最新 AAO-HNS 臨床指引，提供 Dix-Hallpike 與 Epley 復位術的決策流程，以及在家即可自主訓練的前庭復健運動指南。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-06-07-vertigo-bppv-rehab");

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
                                    <a href="https://doi.org/10.1177/0194599816689667" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Bhattacharyya N, et al. (2017). Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update). <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1056/NEJMcp1309481" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Kim JS, Zee DS. (2014). Benign Paroxysmal Positional Vertigo. <em>New England Journal of Medicine.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1177/0194599820909438" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Basura GJ, et al. (2020). Clinical Practice Guideline: Meniere's Disease. <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.3233/VES-2009-0343" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Bisdorff A, et al. (2009). Classification of vestibular symptoms: towards an international classification of vestibular disorders. <em>Journal of Vestibular Research.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1002/14651858.CD003162" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Hilton MP, Pinder DK. (2014). The Epley (canalith repositioning) manoeuvre for benign paroxysmal positional vertigo. <em>Cochrane Database of Systematic Reviews.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            清晨六點左右，家住新北市、現年 58 歲的退休公務員張女士準備起床下床。就在她轉頭側身翻轉的瞬間，突如其來的天旋地轉排山倒海而來，彷彿整個房間的牆壁與天花板都在瘋狂旋轉。她嚇得連忙閉上雙眼、緊緊抓住床頭櫃，伴隨而來的是劇烈的噁心感與乾嘔。在保持頭部完全不動約三十秒後，那股旋轉的感覺漸漸緩和下來，只剩下頭重腳輕的漂浮感。然而，當她試圖再次轉頭或躺下時，那種令人恐懼的旋轉感又再度發生。張女士嚇壞了，以為自己像隔壁鄰居老王一樣，發生了急性腦中風。
                        </p>

                        {/* ========== 醫病問答 ========== */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h4 className="font-bold text-[#1A2B3C] text-lg mb-3">門診的真實醫病對話</h4>
                            <p className="leading-relaxed mb-3 font-medium">
                                張女士在家人攙扶下走進診間，臉色蒼白且驚恐地問：「陳醫師，我今天早上起床翻身，突然整間房間天旋地轉，還一直想吐。我是不是腦中風了？我很怕自己癱瘓...」
                            </p>
                            <p className="leading-relaxed font-bold text-blue-900">
                                我安慰她說：「張女士，別慌，我剛才幫妳做了幾項神經與前庭系統檢查，包括 Dix-Hallpike 眼振測試。結果顯示，當妳的頭往右側轉時，出現了典型的旋轉性眼振。這其實是『良性陣發性姿勢性眩暈』，也就是大家俗稱的『耳石異位症』。這雖然轉起來很嚇人，但它是內耳平衡器官的問題，並不是腦中風。我們等一下在診間做個耳石復位術，通常一次就會改善大半。我們今天就來好好聊聊，這到底是怎麼一回事。」
                            </p>
                        </div>

                        {/* ========== 頭暈的四大類型 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">你分得清楚嗎？頭暈的四大類型與典型症狀</h2>
                        <p className="leading-relaxed mb-6">
                            說實話，在診間我們常聽到患者說「醫生，我頭好暈喔」。但其實在醫學上，「頭暈」（Dizziness）是一個非常廣泛的形容詞。為了找出真正的病因，我們通常會先將頭暈細分為以下四大類型。大家不妨對照看看自己的症狀，屬於哪一種：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">類型</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">典型症狀</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">常見主觀描述</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">常見原因</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">眩暈 (Vertigo)</td>
                                        <td className="px-4 py-4">感覺周遭景物在旋轉、天旋地轉，或身體在位移、傾斜。常伴隨噁心嘔吐與眼震。</td>
                                        <td className="px-4 py-4">「整間房子在轉」、「像剛坐完咖啡杯一樣天旋地轉」</td>
                                        <td className="px-4 py-4 text-gray-600">良性陣發性姿勢性眩暈（耳石症）、梅尼爾氏症、前庭神經炎。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">近乎暈厥 (Presyncope)</td>
                                        <td className="px-4 py-4">眼前發黑、突發性全身無力、心悸，感覺快要失去意識昏倒。</td>
                                        <td className="px-4 py-4">「站起來突然眼前一片黑」、「頭一重，感覺快暈過去了」</td>
                                        <td className="px-4 py-4 text-gray-600">姿勢性低血壓、心律不整、貧血、心血管循環問題。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">不平衡感 (Disequilibrium)</td>
                                        <td className="px-4 py-4">站立或走路時步態不穩、搖晃，感覺失去平衡，但躺下或坐著時沒有旋轉感。</td>
                                        <td className="px-4 py-4">「走路像坐船一樣搖搖晃晃」、「腳底踩不實，像踩在棉花上」</td>
                                        <td className="px-4 py-4 text-gray-600">老年前庭功能退化、小腦病變、周邊感覺神經病變、藥物副作用。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">非特異性頭暈 (Ill-defined Dizziness)</td>
                                        <td className="px-4 py-4">感覺頭腦昏昏沉沉、頭重腳輕、不真實感、或是身體輕飄飄的。</td>
                                        <td className="px-4 py-4">「腦袋霧霧的不清醒」、「頭重重的，整天飄飄浮浮的」</td>
                                        <td className="px-4 py-4 text-gray-600">慢性焦慮與壓力、睡眠不足或障礙、換氣過度、持續性姿勢-知覺性頭暈（PPPD）。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 什麼是耳石異位症 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">什麼是耳石異位症？——耳朵裡的調皮小石頭</h2>
                        <p className="leading-relaxed mb-6">
                            說實話，「頭暈」在門診非常多見，但真正的「眩暈」（也就是覺得周遭景物在旋轉、天旋地轉）最常見的原因其實就在耳朵裡。在我們的內耳中有一個構造叫做前庭系統，裡面有兩個小口袋（稱為橢圓囊與球囊），表面覆蓋著一層碳酸鈣結晶，這就是俗稱的「耳石」。耳石平時負責偵測我們頭部的直線加速度與地心引力。
                        </p>
                        <p className="leading-relaxed mb-6">
                            然而，當我們因為老化、頭部撞擊、局部循環不良或是長期壓力大時，這些細小的耳石可能會從本來的黏膜上脫落，並掉進內耳旁邊的另一個構造——半規管（特別是後半規管）。半規管裡充滿了內淋巴液，負責偵測頭部的旋轉運動。當耳石掉進去後，只要我們轉頭、躺下或翻身，重力就會讓這些碎石在半規管內滑動，進而帶動淋巴液的異常流動，刺激內耳的毛細胞。這時候，大腦會誤以為我們的頭部正在劇烈旋轉，因而引發短暫但極為強烈的眩暈。
                        </p>

                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 my-8">
                            <h3 className="text-lg font-bold text-indigo-900 mb-4">耳石異位症（BPPV）的三大核心特徵</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>與特定姿勢改變有關</strong>：眩暈往往在躺下、翻身、低頭或仰頭時被誘發。如果頭部保持完全靜止，眩暈就會在數秒到一分鐘內消退。
                                </li>
                                <li>
                                    <strong>短暫的旋轉感</strong>：每次發作的時間通常不會超過一分鐘，但在剛停止時會殘留頭重腳輕、噁心欲吐的餘暈感。
                                </li>
                                <li>
                                    <strong>無伴隨聽力損傷或神經症狀</strong>：耳石症不會引起單側耳鳴、突發性聽力喪失，也不會有說話含糊、手腳無力、視線模糊等中樞神經系統症狀。
                                </li>
                            </ul>
                        </div>

                        {/* ========== 門診評估與診斷決策流程 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">眩暈症狀鑑別診斷與門診處置流程</h2>
                        <p className="leading-relaxed mb-6">
                            在門診評估眩暈時，醫師的首要任務是區分「中樞性眩暈（如腦中風）」與「周邊性眩暈（如內耳疾病）」，因為這直接關係到是否需要緊急送醫。以下是我在診間進行評估與決策的思考流程：
                        </p>

                        <div className="my-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">眩暈臨床評估與處置決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                {/* Step 1 */}
                                <div className="w-full max-w-md bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟一：排除中樞性警訊 (紅旗徵象)</div>
                                    <div className="text-sm mt-2 text-left px-2">檢查是否合併：複視（雙眼疊影）、口齒不清、半身麻木或無力、劇烈頭痛、無法站立平衡？</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 1.5 - Branch for emergency */}
                                <div className="w-full max-w-lg flex justify-between mt-0">
                                    <div className="w-1/2 flex flex-col items-center pl-2 pr-4">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-red-600 font-bold bg-white px-1 -mt-4 z-10">有中樞症狀</span>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span className="font-bold">懷疑腦中風或顱內病變</span>
                                            <span className="text-xs mt-1 block">立即啟動急診流程與腦部影像檢查</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center pl-4 pr-2">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-green-600 font-bold bg-white px-1 -mt-4 z-10">無中樞症狀</span>
                                        <div className="w-full bg-gray-50 border-2 border-gray-200 text-gray-700 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span className="font-bold">判斷為周邊性內耳眩暈</span>
                                            <span className="text-xs mt-1 block">進入前庭與位置測試</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-8 w-0.5 bg-gray-300"></div>

                                {/* Step 2 */}
                                <div className="w-full max-w-md bg-gray-50 border-2 border-gray-200 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟二：發作時間與伴隨症狀分類</div>
                                    <div className="text-sm mt-1">評估眩暈持續的精確時間，以及是否影響聽力</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 3 - Sub Branches */}
                                <div className="w-full grid grid-cols-3 gap-3">
                                    <div className="bg-amber-50 border-2 border-amber-200 text-amber-900 p-3 rounded-lg text-center shadow-sm text-xs">
                                        <div className="font-bold">持續數秒至一分鐘</div>
                                        <div className="mt-1 text-gray-600">隨特定姿勢誘發</div>
                                        <div className="mt-2 font-bold border-t border-amber-200 pt-1 text-amber-800">良性陣發性姿勢性眩暈 (BPPV)</div>
                                    </div>
                                    <div className="bg-purple-50 border-2 border-purple-200 text-purple-900 p-3 rounded-lg text-center shadow-sm text-xs">
                                        <div className="font-bold">持續數小時</div>
                                        <div className="mt-1 text-gray-600">伴隨單側耳鳴與耳脹感</div>
                                        <div className="mt-2 font-bold border-t border-purple-200 pt-1 text-purple-800">梅尼爾氏症 (Meniere's)</div>
                                    </div>
                                    <div className="bg-teal-50 border-2 border-teal-200 text-teal-900 p-3 rounded-lg text-center shadow-sm text-xs">
                                        <div className="font-bold">持續數天</div>
                                        <div className="mt-1 text-gray-600">突發劇烈、無聽力損失</div>
                                        <div className="mt-2 font-bold border-t border-teal-200 pt-1 text-teal-800">前庭神經炎 (Neuritis)</div>
                                    </div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 4 - Final Decision */}
                                <div className="w-full max-w-md bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟三：執行耳石復位與對應處置</div>
                                    <div className="text-sm mt-1 text-left">
                                        1. 若為 BPPV 則立刻執行 Epley 復位術矯正。<br />
                                        2. 若為急性神經炎或梅尼爾氏症發作，短期給予症狀緩解藥物治療，並於亞急性期加入前庭復健訓練。
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="leading-relaxed mb-6">
                            在門診中，我們通常會透過 <strong>Dix-Hallpike 測試（耳石定位測試）</strong>來做最後的確認：讓患者快速躺下，並將頭偏向一側，觀察是否有典型方向的眼球震顫（眼振）。如果眼振與眩暈同時被誘發出來，這便能直接鎖定耳石掉落的半規管位置。
                        </p>

                        {/* ========== 治療選項比較表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">眩暈治療與處置方式比較</h2>
                        <p className="leading-relaxed mb-6">
                            對於不同原因造成的周邊性眩暈，臨床上有不同的處理策略。我將最常用的幾種處置方式整理在下方表格中，方便大家理解它們的適用範圍：
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
                                        <td className="px-4 py-4 font-bold text-blue-800">耳石復位術<br/><span className="text-xs font-normal text-gray-500">(Epley Maneuver)</span></td>
                                        <td className="px-4 py-4 font-medium">後半規管耳石異位症 (BPPV) 的首選第一線治療</td>
                                        <td className="px-4 py-4 text-green-700">非侵入性、在診間即可由醫師執行。通常一次復位成功率高達八成以上，效果立竿見影。</td>
                                        <td className="px-4 py-4 text-gray-600">復位過程中會短暫誘發劇烈眩暈與嘔吐。頸椎受傷或嚴重血管狹窄患者需謹慎操作。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">症狀控制藥物<br/><span className="text-xs font-normal text-gray-500">(Medications)</span></td>
                                        <td className="px-4 py-4 font-medium">急性眩暈發作、伴隨強烈噁心嘔吐時的前三天短期使用</td>
                                        <td className="px-4 py-4 text-green-700">包含抗組織胺 (Antihistamines)、美克利靜 (Meclizine) 等前庭抑制劑，能有效壓制頭暈與嘔吐感。</td>
                                        <td className="px-4 py-4 text-gray-600">長期使用會抑制前庭神經的自我代償，拖慢大腦適應與康復的速度。容易造成嗜睡與口乾。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">微循環藥物<br/><span className="text-xs font-normal text-gray-500">(Vascular Meds)</span></td>
                                        <td className="px-4 py-4 font-medium">梅尼爾氏症、內耳循環不良造成的反覆性眩暈</td>
                                        <td className="px-4 py-4 text-green-700">如貝他海斯汀 (Betahistine) 可增加內耳微血管血流量，降低內淋巴水腫的發生率。</td>
                                        <td className="px-4 py-4 text-gray-600">需遵照醫囑服用數週至數月，對突發的急性姿勢性耳石脫落沒有直接的復位效果。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">自主前庭復健運動<br/><span className="text-xs font-normal text-gray-500">(Vestibular Rehab)</span></td>
                                        <td className="px-4 py-4 font-medium">前庭神經炎後遺症、老化所致之平衡退化、反覆眩暈後的慢性殘留頭暈</td>
                                        <td className="px-4 py-4 text-green-700">安全、無藥物副作用。透過眼球與頭部的協調訓練（如 Cawthorne-Cooksey 運動），重塑大腦的平衡系統代償。</td>
                                        <td className="px-4 py-4 text-gray-600">需要每天持之以恆訓練數週以上才能見效，訓練初期頭暈感可能會稍微被誘發。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 前庭復健運動指南 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">前庭康復：在家即可自主進行的平衡復健</h2>
                        <p className="leading-relaxed mb-6">
                            在門診中，我常遇到許多眩暈過後的患者，即使耳石已經復位、急性期也過了，卻依然長期覺得「頭重腳輕」、「走路不穩」、「低頭或轉身時覺得飄飄的」。這其實是因為內耳前庭系統在受損後，大腦的平衡中樞還沒有完全適應新的平衡訊號。
                        </p>
                        <p className="leading-relaxed mb-6">
                            這時候，最有效的治療不是繼續吃止暈藥，而是進行<strong>前庭復健運動 (Vestibular Rehabilitation Therapy)</strong>。以下為大家介紹兩組在臨床上證實能有效加速大腦代償的居家訓練方式：
                        </p>

                        <div className="grid grid-cols-1 gap-8 my-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-blue-900 border-b border-blue-100 pb-2 mb-3">訓練一：視動協調訓練 (Gaze Stabilization)</h3>
                                <div className="my-4">
                                    <Image
                                        src="/images/Gaze Stabilization.png"
                                        alt="視動協調訓練（Gaze Stabilization）示意圖：雙眼鎖定目標，頭部左右緩慢擺動"
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-sm border border-gray-100 w-full"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                    此運動旨在重塑「前庭眼動反射」，讓我們的雙眼在頭部移動時依然能穩定鎖定目標，進而減少看東西時的晃動與頭暈。
                                </p>
                                <ol className="list-decimal pl-5 text-xs text-gray-600 space-y-2">
                                    <li>雙手伸直拿著一張寫有字的卡片（或以大拇指為目標），雙眼注視著它。</li>
                                    <li>雙眼保持鎖定目標，將頭部緩慢向左、向右轉動約三十度。</li>
                                    <li>在鎖定目標的前提下，逐漸加快頭部擺動的速度，每次持續訓練一分鐘。</li>
                                    <li>同理，也可以上下擺動頭部進行上下方向的視動協調訓練。</li>
                                </ol>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-purple-900 border-b border-purple-100 pb-2 mb-3">訓練二：平衡與姿勢控制訓練 (Balance Training)</h3>
                                <div className="my-4">
                                    <Image
                                        src="/images/Balance Training.png"
                                        alt="平衡與姿勢控制訓練（Balance Training）示意圖：雙腳併攏站立，逐步進階至閉眼單腳站立"
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-sm border border-gray-100 w-full"
                                    />
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                    此訓練利用雙腳肌肉與關節的深部感覺，來協助代償受損的耳前庭平衡訊號，提升步行時的穩定度。
                                </p>
                                <ol className="list-decimal pl-5 text-xs text-gray-600 space-y-2">
                                    <li>雙腳併攏站立，雙手扶在椅背或牆壁旁以防跌倒。</li>
                                    <li>嘗試將雙手放開，保持站立平衡三十秒。</li>
                                    <li>若能穩定站立，可挑戰閉上雙眼，單純依靠腳底感覺與內耳平衡站立三十秒。</li>
                                    <li>進階挑戰：前後腳踏成一直線（像走鋼索般前後腳跟接腳尖），睜眼與閉眼各維持站立平衡。</li>
                                </ol>
                            </div>
                        </div>

                        {/* ========== 陳醫師的實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我常遇到許多前來求診的眩暈患者，病歷打開一看，吃止暈藥已經吃了好幾個月甚至半年。每次只要一停藥，稍微動一下又開始暈。
                        </p>

                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，面對眩暈，我們要建立正確的觀念：這不是魔法，復位術後大約有八成以上的改善，但依然有約二至三成的復發機率。這也提醒我們，眩暈雖然是內耳器官的局部問題，但它往往與身體整體的血管循環、睡眠品質、水分攝取以及自律神經系統的穩定性息息相關。只有在急性期配合復位，並在復原期主動進行前庭訓練、調整生活節奏，才是真正遠離眩暈的長久之道。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>天旋地轉的眩暈不等於中風。如果眩暈發作時間在短暫的一分鐘內、且只隨姿勢改變而誘發，極有可能是良性陣發性姿勢性眩暈（耳石症）。</li>
                                <li>若眩暈伴隨單側手腳無力、言語不清、嘴角歪斜或劇烈頭痛，此為中樞性眩暈的紅旗警訊，必須立即送醫急診排除腦血管意外。</li>

                                <li>耳石復位術（Epley Maneuver）是後半規管耳石症最有效的處置方式。急性期過後的慢性殘留頭暈，應採取居家前庭復健運動來加速代償。</li>
                                <li>預防耳石脫落或復發，日常應維持充足的水分攝取、避免快速劇烈的仰頭與轉身動作、並保持穩定的作息與睡眠。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「張女士，耳朵裡的石頭調皮移位了，我們把它放回去就好。回家多喝水、動作放慢，這幾天睡覺時可以把枕頭稍微墊高一點，睡向好的一側。不用擔心，只要跟著步驟，我們會陪著妳把平衡找回來。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-06-07-vertigo-bppv-rehab" />
            </div>

            <Sidebar />
        </div>
    );
}
