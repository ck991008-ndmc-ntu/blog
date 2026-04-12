import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "你也常因為反覆喉嚨痛請假嗎？聊聊切除扁桃腺前，那些讓你猶豫的免疫力迷思",
    description: "解答切除扁桃腺是否會降低免疫力的迷思，並解析門診決策流程、常見適應症（含睡眠呼吸中止症 OSA），以及術後面臨的出血與疼痛風險和飲食照顧指南。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-04-12-tonsillectomy-myths");

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
                                    <a href="https://doi.org/10.1177/0194599818801757" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        AAO-HNSF (2019). Clinical Practice Guideline: Tonsillectomy in Children (Update). <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/19130955/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Bhattacharyya, N., et al. (2009). Adult tonsillectomy: current indications and outcomes. <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">

                        {/* ========== 門診情境 ========== */}
                        <p className="leading-relaxed mb-6">
                            上週門診，來了一位 32 歲在新竹竹科上班的林姓工程師。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我只要專案一忙、連續熬夜，喉嚨痛又發燒的毛病就犯了。」他帶著濃重鼻音無奈地說。一年內，他已經因為嚴重的急性扁桃腺炎、甚至化膿，請了好幾天病假。在討論過病情後，我建議他考慮進行扁桃腺切除手術，一勞永逸解決這顆不定時炸彈。
                        </p>
                        <p className="leading-relaxed mb-6">
                            這時，他拋出了幾乎所有病人在手術前必問的問題：「聽說扁桃腺是免疫器官，切掉以後，我是不是會變得更容易感冒？」
                        </p>

                        {/* ========== 破除迷思 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">破除免疫力的迷思</h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                這個疑慮非常合理。說實話，叫病人去動刀切除身上原本就存在的一塊肉，誰都會猶豫。
                            </p>
                            <p className="leading-relaxed mb-4">
                                當我們還是三到五歲的孩童時，扁桃腺的確扮演著攔截病菌的第一道防線；但隨著逐漸長大，全身的免疫系統（如骨髓、脾臟與淋巴結）發育成熟後，扁桃腺的免疫功能就會慢慢功成身退。它就像是失去防禦能力的老碉堡，不但沒用，還常常變成細菌反覆開派對的溫床。
                            </p>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                在成人的醫學實證與臨床指引中也證實：切除反覆發炎的扁桃腺，並不會導致上呼吸道感染的機率增加，也不會造成整體免疫力下降。事實上，除去了反覆藏汙納垢的源頭，感冒的頻率反而可能降低。
                            </p>
                        </div>

                        {/* ========== 適應症 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">常見的切除適應症：不只是發炎，還攸關睡眠</h2>
                        <p className="leading-relaxed mb-6">除了反覆發炎，其實門診中還有許多狀況會建議將扁桃腺拿掉：</p>
                        <ul className="list-disc pl-6 space-y-4 font-medium text-gray-700">
                            <li><strong className="text-blue-800">反覆化膿性扁桃腺炎</strong>：一年發作超過 7 次，或連續兩年每年超過 5 次。</li>
                            <li><strong className="text-blue-800">睡眠呼吸中止症 (OSA)</strong>：由於扁桃腺體積過大，在睡覺平躺時阻塞呼吸道，導致嚴重打呼、甚至呼吸暫停，這不僅影響睡眠品質，更是心血管疾病的隱形殺手。</li>
                            <li><strong className="text-blue-800">嚴重的扁桃腺結石</strong>：隱窩太深容易卡住食物殘渣與細菌，形成散發惡臭的結石，造成嚴重的口臭及異物感。</li>
                        </ul>

                        {/* ========== 手術簡介與圖片 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">手術簡介與兩大品質指標</h2>

                        <div className="my-8 flex flex-col items-center">
                            <div className="relative w-full max-w-lg bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                                    <Image
                                        src="/images/tonsil-anatomy.png"
                                        alt="扁桃腺解剖示意圖"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-4">
                                    扁桃腺位於口腔深處、懸壅垂的兩側。
                                </p>
                            </div>
                        </div>

                        <p className="leading-relaxed mb-6">
                            如上圖所示，手術全程會在全身麻醉下進行。而評估這類手術有兩個最關鍵的品質因素：
                        </p>
                        <ul className="list-disc pl-6 space-y-4 font-medium text-gray-700 mb-8">
                            <li><strong className="text-amber-700">術後出血</strong>：雖然機率不高，但傷口結痂脫落時仍要注意二次出血的風險。</li>
                            <li><strong className="text-amber-700">術後疼痛</strong>：扁桃腺周圍神經豐富，手術過程若對周邊組織造成較大熱傷害，術後疼痛度就會較高。為了取得這兩者的平衡，近年也有冷光刀等較新式的微創器械可以選擇。</li>
                        </ul>

                        {/* ========== 決策流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">決策流程與治療選項</h2>
                        <p className="leading-relaxed mb-6">如果你正在猶豫，這裡提供一個簡單的門診決策流程供參考：</p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">門診評估與手術決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1 */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">出現疑似扁桃腺問題</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2 */}
                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm relative">
                                    <div className="font-bold text-lg">保守藥物治療是否有效?</div>
                                </div>

                                {/* Branch */}
                                <div className="w-full max-w-sm flex justify-between mt-0">
                                    <div className="w-1/2 flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-gray-500 bg-white px-1 -mt-4 z-10">是</span>
                                        <div className="w-full max-w-[140px] bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm">
                                            持續觀察與衛教保養
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-red-500 font-bold bg-white px-1 -mt-4 z-10 text-center whitespace-nowrap">否, 影響生活品質</span>
                                        <div className="w-full max-w-[140px] bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm">
                                            進入手術評估狀況
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 術後恢復指南 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">術後恢復指南：怎麼吃才安全？</h2>
                        <p className="leading-relaxed mb-6">若是決定動手術，了解術後的照顧非常重要，尤其是飲食階段的轉換：</p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">階段</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">時間點</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">食物類型建議</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">醫師的注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">階段一</td>
                                        <td className="px-4 py-4 font-medium">術後第 1 天</td>
                                        <td className="px-4 py-4 text-blue-700">冰涼、完全流質</td>
                                        <td className="px-4 py-4">避免熱食，可喝冰牛奶或冷湯，幫助血管收縮止血且減輕疼痛。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">階段二</td>
                                        <td className="px-4 py-4 font-medium">術後第 2-6 天</td>
                                        <td className="px-4 py-4 text-blue-700">軟質、微溫食物</td>
                                        <td className="px-4 py-4">布丁、蒸蛋、放涼的稀飯，絕對避免辛辣、高溫的刺激。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">階段三</td>
                                        <td className="px-4 py-4 font-medium">術後約 1 週後</td>
                                        <td className="px-4 py-4 text-blue-700">漸進恢復正常飲食</td>
                                        <td className="px-4 py-4">傷口白膜逐漸脫落，此時仍不建議吃太堅硬粗糙的食物（如炸排骨酥、洋芋片），以免刮傷新生黏膜。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我常遇到許多患者對「切除身體一部份」感到猶豫不決，這很正常。我想，這類手術的確不是什麼魔法，它並不能保證你開完刀後這輩子再也不會感冒，畢竟感冒病毒依然會侵襲你的鼻腔黏膜。但我認為，這個手術真正的價值在於「停損」：在門診中，我看到絕大多數接受手術的患者，真正獲得救贖的是他們不再需要頻繁為了嚴重的「扁桃腺化膿」請假、不再經歷生不如死痛到無法吞嚥的折磨，甚至大幅改善了睡覺時因為阻塞而喘不過氣的睡眠危機。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>割除反覆發炎的扁桃腺並不會降低成人整體免疫力，也不會讓你更容易感冒。</li>
                                <li>除了反覆發炎化膿，嚴重的睡眠呼吸中止症 (OSA) 與扁桃腺結石也是極為常見的手術考量。</li>
                                <li>術後需短暫忍氣吞聲，嚴格遵守飲食階段（初期以冰涼流質為主），以降低出血與疼痛風險。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「回去好好想想，手術不急於一時。但若是這個問題已經讓你極度害怕每次感冒的到來，那我們就找個時間一起把它解決掉吧。這幾天記得多喝水，先把自己照顧好。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-04-12-tonsillectomy-myths" />
            </div>

            <Sidebar />
        </div>
    );
}
