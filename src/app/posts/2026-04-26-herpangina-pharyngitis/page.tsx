import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "連吞口水都像吞玻璃？聊聊大人也會得的腸病毒與疱疹性咽峽炎",
    description: "解答成人罹患腸病毒的迷思，簡單科普咽喉解剖構造。並解析重度喉嚨痛的門診評估流程、皰疹性咽峽炎的常見症狀與各項支持性治療策略，以及陳醫師對於緩解吞嚥疼痛的實務經驗。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-04-26-herpangina-pharyngitis");

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
                                    <a href="https://doi.org/10.1542/9781610027373" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        American Academy of Pediatrics (2024). Red Book: Report of the Committee on Infectious Diseases (Enterovirus and Parechovirus Infections).
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1093/cid/cis629" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Shulman, S. T., et al. (2012). Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis. <em>Clinical Infectious Diseases.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            上個禮拜，在門診遇見一位32歲，住在新北市板橋區的林小姐，職業是全職媽媽。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我喉嚨痛到連吞口水都像在吞碎玻璃，而且昨天還燒到39度。」她戴著兩層口罩，聲音非常微弱而沙啞。她三歲的兒子上週才因為腸病毒停課在家，而她日夜照顧著發燒的兒子，沒想到自己也倒下了。在仔細為她進行口咽部檢查後，我發現她的軟顎與懸雍垂兩側佈滿了水泡與潰瘍，這正是典型的疱疹性咽峽炎（Herpangina）。
                        </p>
                        <p className="leading-relaxed mb-6">
                            她驚訝地拋出了一個在門診非常常見的疑問：「醫師，腸病毒不是小孩子才會得嗎？我以前也得過，為什麼大人還會被傳染，而且感覺比小孩還要嚴重、超級痛？」
                        </p>

                        {/* ========== 醫病問答與解剖學視角 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">為什麼吞嚥時會這麼痛？一起認識我們的咽喉解剖構造</h2>
                        
                        <div className="my-8">
                            <Image 
                                src="/images/Herpangina.png" 
                                alt="疱疹性咽峽炎示意圖" 
                                width={800} 
                                height={600} 
                                className="w-full rounded-xl shadow-sm border border-gray-100"
                            />
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                老實說，看到有些大人感染腸病毒時痛到無法進食，在門診我們真的非常不忍心。許多人誤以為腸病毒是兒童的專利，但現實是，腸病毒有非常多種型別（包含克沙奇病毒及伊科病毒等），大人當然也會被傳染，尤其是免疫力因為長期疲勞或熬夜而低下時。
                            </p>
                            <p className="leading-relaxed mb-4">
                                要理解為什麼會痛到像吞玻璃，我們要先簡單區分一下「咽部 (Pharynx)」與「喉部 (Larynx)」在解剖構造上的差異。
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>咽部 (Pharynx)：</strong> 主要是食物與空氣共同經過的通道。它的後半部包含了軟顎、懸雍垂、以及負責第一線免疫防禦的扁桃腺。這個區域的黏膜充滿了豐富的感覺神經末梢。</li>
                                <li><strong>喉部 (Larynx)：</strong> 位於咽部的下方，是純粹的呼吸道與發聲器官，包含了聲帶與會厭軟骨。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                當我們感染疱疹性咽峽炎時，病毒主要侵犯的就是「咽部」的後半段黏膜。這些黏膜因為發炎而產生水泡，隨後破裂成潰瘍。偏偏我們每一次吞嚥口水時，咽部的肌肉群都必須劇烈收縮來將食物或液體向下推送，這些動作會強烈拉扯到正在發炎潰瘍的黏膜與神經，這也是為什麼「只要一吞嚥，就會引發劇痛」的原因所在。
                            </p>
                        </div>

                        {/* ========== 常見症狀 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">兒童與成人疱疹性咽峽炎的常見症狀</h2>
                        <p className="leading-relaxed mb-6">不管是大人還是小孩，如果感染了由腸病毒引起的疱疹性咽峽炎，通常會經歷以下幾個典型症狀：</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg text-blue-800 mb-2">突發性高燒</h3>
                                <p className="text-gray-600 text-sm">這往往是最早出現的症狀。體溫可能迅速竄升至 39°C 甚至 40°C，並伴隨強烈的畏寒與全身肌肉痠痛（大人尤其明顯）。</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg text-blue-800 mb-2">劇烈喉嚨痛與吞嚥困難</h3>
                                <p className="text-gray-600 text-sm">隨後會出現嚴重的咽喉痛，導致進食和飲水困難。年紀較小的幼兒常表現出異常的「一直流口水」，因為他們痛到連口水都不敢吞。</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg text-blue-800 mb-2">口腔後部的水泡與潰瘍</h3>
                                <p className="text-gray-600 text-sm">在發燒後的接下來幾天內，醫師在檢查口腔時，會在軟顎、懸雍垂、扁桃腺周圍看到數個小水泡或邊緣發紅的淺層潰瘍。</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg text-blue-800 mb-2">食慾減退與脫水風險</h3>
                                <p className="text-gray-600 text-sm">因為劇痛抗拒進食飲水，加上高燒流汗，患者很容易面臨脫水的危機，此一現象在幼童身上尤其危險。</p>
                            </div>
                        </div>

                        {/* ========== 決策流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">急性喉嚨痛的門診評估流程</h2>
                        <p className="leading-relaxed mb-6">當患者帶著嚴重的喉嚨痛來到門診時，我們通常會遵循以下的階段性評估流程，以確保沒有延誤更危險的併發症：</p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">急性咽喉炎/喉嚨痛 門診評估與處置流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1 */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">出現突發性高燒與劇烈喉嚨痛</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2 */}
                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm relative">
                                    <div className="font-bold text-lg">理學檢查與喉部檢視</div>
                                    <div className="text-sm font-normal mt-1">(檢查是否有濃垂、水泡或化膿現象)</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 3 */}
                                <div className="w-full max-w-sm bg-purple-50 border-2 border-purple-200 text-purple-800 p-4 rounded-lg text-center shadow-sm relative">
                                    <div className="font-bold text-lg">是否有重症前兆或呼吸道阻塞跡象？</div>
                                    <div className="text-sm font-normal mt-1">(如：嗜睡、肌躍型抽搐、無法呼吸)</div>
                                </div>

                                {/* Branch 1 */}
                                <div className="w-full max-w-lg flex justify-between mt-0">
                                    <div className="w-1/2 flex flex-col items-center pl-2 pr-6">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-red-500 font-bold bg-white px-1 -mt-4 z-10">是</span>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span className="font-bold text-lg block">立即轉送急診</span>
                                            <span>(排除重症或深頸部感染)</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center pl-6 pr-2">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-gray-500 bg-white px-1 -mt-4 z-10 whitespace-nowrap">否，繼續評估病因</span>
                                        <div className="w-full bg-gray-100 border-2 border-gray-300 text-gray-700 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span>判斷為病毒感染或細菌感染</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Continuation from "No" branch - representing diagnosis */}
                                <div className="w-px h-6 bg-gray-300 ml-auto mr-[25%] mt-0 relative"></div>
                                <div className="w-[45%] ml-auto bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                    <div className="font-bold mb-1 border-b border-green-200 pb-1">病毒性 (如: 腸病毒/疱疹性咽峽炎)</div>
                                    <div className="text-xs">支持性療法、症狀緩解藥物、預防脫水</div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 治療選項比較 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">治療選項比較表</h2>
                        <p className="leading-relaxed mb-6">由於腸病毒並沒有特效藥，我們目前的治療方針主要著重於「症狀緩解」與「預防併發症/脫水」：</p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">治療方式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用時機</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">臨床效益</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">口服止痛退燒藥</td>
                                        <td className="px-4 py-4 font-medium">發燒、喉嚨痛、肌肉痠痛時</td>
                                        <td className="px-4 py-4 text-green-700">有效降低體溫，減輕系統性與局部的疼痛感</td>
                                        <td className="px-4 py-4 text-gray-600">需依照體重與處方劑量使用，成人可短暫使用 NSAID 加強止痛，但要注意腸胃副作用。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">局部消炎止痛噴劑</td>
                                        <td className="px-4 py-4 font-medium">進食前或吞嚥疼痛難耐時</td>
                                        <td className="px-4 py-4 text-green-700">直接作用於潰瘍黏膜，能提供短暫但快速的疼痛阻斷</td>
                                        <td className="px-4 py-4 text-gray-600">時效通常較短，需配合口服藥物多管齊下。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">靜脈點滴輸液</td>
                                        <td className="px-4 py-4 font-medium">抗拒喝水導致出現脫水跡象時 (如尿量減少)</td>
                                        <td className="px-4 py-4 text-green-700">快速補充水分與電解質，避免病情惡化</td>
                                        <td className="px-4 py-4 text-gray-600">通常在急診或診所評估後進行，作為支持性療法的最後防線。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">口服抗生素</td>
                                        <td className="px-4 py-4 font-medium">醫師強烈懷疑合併續發性細菌感染(如鏈球菌)</td>
                                        <td className="px-4 py-4 text-green-700">殺死細菌，防止風濕熱等併發症</td>
                                        <td className="px-4 py-4 text-gray-600 font-bold text-red-600">純粹的病毒感染(腸病毒)吃抗生素「無效」，請交由醫師判定，勿自行隨意服用。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我想，面對不管是自己還是孩子得了腸病毒，家長承受的壓力真的難以想像。我認為在臨床上最重要的一環，其實是「維持水分攝取」。在門診我們常看到，有時痛起來連溫開水都像刺一樣，這種時候我們反而會建議吃一些「冰涼、滑順」的食物，比如布丁、冰淇淋甚至是放涼的鮮奶，只要吞得下去都好。別因為怕胖或者傳統禁忌而不敢吃冰的，現在這個階段，避免脫水絕對是第一要務。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>腸病毒絕對不是小孩的專利，大人在免疫力低下時被傳染，其喉部潰瘍帶來的疼痛感往往不亞於兒童。</li>
                                <li>疱疹性咽峽炎的劇痛來自咽部後半部的神經受到發炎牽扯，吞嚥時的肌肉收縮會讓疼痛加劇。</li>
                                <li>目前腸病毒沒有特效藥可以立即根治，治療方針首要目標是緩解疼痛與預防嚴重脫水。</li>
                                <li>如果出現重症前兆像是嗜睡、意識不清、持續嘔吐或肌躍型抽搐，那是病毒侵犯中樞神經的警訊，請務必立即就醫。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「生病照顧孩子還要對抗自己身體的不適，真的非常辛苦。這幾天請暫時放下那些必須完美做完的家事，吃點冰涼的甜點犒賞自己，優先讓身體補充足夠的水分與休息。我們一起度過這比較難熬的一週。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-04-26-herpangina-pharyngitis" />
            </div>

            <Sidebar />
        </div>
    );
}
