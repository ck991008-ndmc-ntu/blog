import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "男生也要打？保護自己與另一半：聊聊 HPV 疫苗防範子宮頸癌、口咽癌與那些你所不知道的預防科學",
    description: "HPV 疫苗常被俗稱為子宮頸癌疫苗，但它其實是男女皆需的防癌防護盾。本文結合最新 JAMA Oncology、NEJM 與 Lancet 等世界權威期刊實證，為您拆解 HPV 疫苗對女性生殖道癌症，以及男女兩性口腔癌與口咽癌的強大保護效果，並提供門診決策與疫苗選擇指南。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-24-hpv-vaccine-cancer-prevention");

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
                                    <a href="https://doi.org/10.1056/NEJMoa1917338" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Lei J, et al. (2020). HPV Vaccination and the Risk of Invasive Cervical Cancer. <em>New England Journal of Medicine.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1016/S0140-6736(21)02178-4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Falcaro M, et al. (2021). The effects of the national HPV vaccination programme in England, UK, on cervical cancer and grade 3 cervical intraepithelial neoplasia incidence: a register-based observational study. <em>The Lancet.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1001/jamaoncol.2026.0496" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Kitano T, et al. (2026). Nine-Valent Human Papillomavirus Vaccination and Related Cancers in Males. <em>JAMA Oncology.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            上週三的下午，35歲、住在竹北的張先生（化名）走進了診間。張先生是一位半導體廠的資深軟體工程師，平時工作高壓、常需要熬夜加班。他今天是在太太的「半強迫」陪同下前來的，臉上帶著一絲無奈與困惑。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我太太最近去做子宮頸抹片檢查，婦產科醫師建議她去打 HPV 疫苗，還特別叮嚀叫我今天一定要一起來打。」張先生有些尷尬地抓了抓頭，「但我上網查，這個疫苗不是大家都叫它『子宮頸癌疫苗』嗎？我又沒有子宮頸，為什麼男生也需要打？這疫苗對我們男生到底能預防什麼？還是其實這只是婦產科的推銷噱頭而已？」
                        </p>
                        
                        {/* ========== 醫病問答 ========== */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h4 className="font-bold text-[#1A2B3C] text-lg mb-3">門診的真實醫病對話</h4>
                            <p className="leading-relaxed mb-3 font-medium">
                                張先生困惑地問：「陳醫師，子宮頸癌疫苗，男生打真的有用嗎？我又沒有子宮頸...」
                            </p>
                            <p className="leading-relaxed font-bold text-blue-900">
                                我笑著回答：「張先生，這其實是個非常普遍的誤解。HPV 疫苗雖然因為早期推廣而被俗稱為『子宮頸癌疫苗』，但它防範的人類乳突病毒（HPV）可不止會攻擊女性生殖道。它對男性和女性的口咽癌、口腔癌都有非常顯著的保護力。甚至在最新的醫學數據中，男性的口咽癌發生率已經快要超越女性的子宮頸癌了。所以，這是一份同時保護您自己，也保護太太的雙向承諾。」
                            </p>
                        </div>

                        {/* ========== 女性生殖道癌症保護力 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">女性生殖道癌症：從「癌前病變」到「侵襲性癌症」的真實數據</h2>
                        <p className="leading-relaxed mb-6">
                            首先，我們來看看對女性而言，HPV 疫苗究竟有多少實力。老實說，在臨床醫學中，很少有一種疫苗的「防癌效果」能像 HPV 疫苗一樣，擁有如此扎實且大規模的真實世界數據（Real-World Evidence）支持。
                        </p>
                        <p className="leading-relaxed mb-6">
                            過去大家可能只知道疫苗「理論上」能預防感染，但它到底能不能「防癌」？近年發表在國際頂尖醫學期刊的兩大里程碑研究，給了我們毫無疑問的答案：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-blue-900 border-b border-blue-100 pb-2 mb-3">瑞典 170 萬人國家級研究（NEJM）</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    這項發表於《新英格蘭醫學期刊》（NEJM）的研究追蹤了近 170 萬名女性。數據證實：
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-700 font-medium">
                                    <li>在 <strong>17 歲以前</strong> 接種四價 HPV 疫苗的女孩，其罹患侵襲性子宮頸癌的風險降低了高達 <strong>88%</strong>。</li>
                                    <li>即使是在 17 至 30 歲之間才接種的女性，其子宮頸癌風險依然降低了 <strong>53%</strong>。</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-purple-900 border-b border-purple-100 pb-2 mb-3">英國公衛回顧研究（The Lancet）</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    發表於《刺胳針》（The Lancet）的英格蘭國家接種計畫追蹤顯示：
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-700 font-medium">
                                    <li>在 <strong>12 至 13 歲</strong>（國中階段）接種 HPV 疫苗的女性世代，子宮頸癌的發生率幾乎被「抹平」，降幅高達 <strong>87%</strong>。</li>
                                    <li>最嚴重的子宮頸癌前病變（CIN3）預防率更是達到了驚人的 <strong>97%</strong>。</li>
                                </ul>
                            </div>
                        </div>

                        <p className="leading-relaxed mb-6">
                            這些數據清楚地告訴我們，HPV 疫苗在防範女性生殖道癌症（包含子宮頸癌、外陰癌、陰道癌）上，扮演著幾乎是「決定性」的角色。而且，**越早接種，保護效果越顯著**，這也是為什麼各國政府皆將公費 HPV 疫苗的施打年齡訂在國中階段的關鍵原因。
                        </p>

                        {/* ========== 男女兩性口咽癌、口腔癌保護力 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">男女皆避不開的盲區：口腔癌與口咽癌的無形威脅</h2>
                        <p className="leading-relaxed mb-6">
                            那麼，回到張先生最在意的問題：「我是男生，這疫苗對我有什麼用？」
                        </p>
                        <p className="leading-relaxed mb-6">
                            事實上，這幾年耳鼻喉頭頸外科界最關注的流行病學變化，就是 **HPV 相關口咽癌（Oropharyngeal Cancer）的爆發性成長**。過去我們常認為口腔癌和咽喉癌是「吃檳榔、抽菸、喝酒」的人專屬的疾病。但在門診，我常遇到許多完全不菸不酒、作息正常、注重健康的男性，卻因為喉嚨痛、吞嚥異物感或脖子摸到腫塊，切片檢查後確診為口咽癌。
                        </p>
                        <p className="leading-relaxed mb-6">
                            這背後最大的推手，就是人類乳突病毒（特別是高危險型的 HPV-16）。
                        </p>

                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">為什麼男性更需要警惕 HPV 口咽癌？</h3>
                            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
                                <li className="leading-relaxed">
                                    <strong>解剖生理劣勢：</strong>研究發現，男性的口腔黏膜與口咽淋巴組織，相較於女性，更容易發生持續性的 HPV 病毒感染。
                                </li>
                                <li className="leading-relaxed">
                                    <strong>缺乏早期篩檢工具：</strong>女性子宮頸癌有非常成熟、推廣多年的「子宮頸抹片檢查」，能藉由早期發現癌前病變將其切除。但對於藏在扁桃腺、舌根深處的口咽癌，目前<strong>完全沒有任何有效的篩檢工具</strong>。很多患者發現時，往往已經是脖子轉移淋巴結腫大的晚期了。
                                </li>
                                <li className="leading-relaxed">
                                    <strong>兩性傳播的共犯結構：</strong>HPV 主要是透過親密接觸（包含性接觸、親吻及口交）傳播。男性的持續感染率高，若男性不接種，病毒便會在伴侶之間反覆交叉感染。
                                </li>
                            </ul>
                        </div>

                        <div className="my-8 flex justify-center">
                            <div className="text-center w-full max-w-2xl">
                                <Image
                                    src="/images/HPV-oropharyngeal cancer.png"
                                    alt="人類乳突病毒 (HPV) 引起口咽癌與口腔癌的分布示意圖"
                                    width={800}
                                    height={500}
                                    className="rounded-xl shadow-sm border border-gray-100 w-full"
                                />
                                <p className="text-sm text-gray-500 mt-3 font-medium">人類乳突病毒 (HPV) 不僅導致女性生殖道病變，亦是男女兩性口咽癌（含扁桃腺、舌根與軟顎）及口腔癌的主要誘因之一</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#1A2B3C] mt-8 mb-4">2026 最新 JAMA Oncology 震撼數據：男性防癌效果減半！</h3>
                        <p className="leading-relaxed mb-6">
                            過去由於口咽癌從感染到發病可能需要 15 至 30 年，我們一直缺乏直接針對「頭頸部癌症發病率降低」的臨床實證，只能以「口腔 HPV 病毒感染率降低 80% 至 90%」作為間接指標。
                        </p>
                        <p className="leading-relaxed mb-6 font-bold text-gray-900">
                            但這個缺憾，在 2026 年 4 月發表於《美國醫學會雜誌·腫瘤學》（JAMA Oncology）的一項劃時代研究中得到了解答。
                        </p>
                        <p className="leading-relaxed mb-6">
                            這項由 Taito Kitano 醫師團隊主導的大型研究，追蹤了美國超過 100 萬名年齡在 9 至 26 歲之間的男性世代。結果發現：
                        </p>
                        <blockquote className="border-l-4 border-purple-500 pl-4 py-1 my-6 text-gray-700 italic font-medium bg-purple-50/50 p-4 rounded-r-lg">
                            「接受過至少一劑 HPV 疫苗接種的男性，在長達 10 年的追蹤期間，其罹患 HPV 相關頭頸部癌症（主要是口咽癌與口腔癌）的風險，相較於未接種的對照組，直接<strong>降低了近 50%</strong>。」
                        </blockquote>
                        <p className="leading-relaxed mb-6">
                            這項極具震撼力的真實世界數據直接向大眾宣告：<strong>HPV 疫苗是男性的防癌盾牌</strong>。在美國 FDA 於 2020 年正式核准九價 HPV 疫苗用於預防口咽癌及頭頸部癌症之後，這項研究提供了最強而有力的臨床實證。
                        </p>

                        {/* ========== 門診評估與疾病防護決策流程 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">我該不該打？門診決策評估流程</h2>
                        <p className="leading-relaxed mb-6">
                            在門診，我常會引導像張先生這樣處於猶豫階段的患者，利用以下三步的決策流程來評估自己的防護需求：
                        </p>

                        <div className="my-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">HPV 疫苗接種門診決策與防護評估流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-md bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟一：評估性別與年齡</div>
                                    <div className="text-sm mt-1">9 至 45 歲之男性與女性</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-md bg-gray-50 border-2 border-gray-200 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">步驟二：評估防護重點</div>
                                    <div className="text-sm mt-2 grid grid-cols-2 gap-4">
                                        <div className="bg-white p-2 rounded border border-gray-200">
                                            <div className="text-purple-700 font-bold">女性防護重點</div>
                                            <div className="text-xs text-gray-600 mt-1">子宮頸癌、外陰癌<br />陰道癌、子宮頸病變</div>
                                        </div>
                                        <div className="bg-white p-2 rounded border border-gray-200">
                                            <div className="text-blue-700 font-bold">男性防護重點</div>
                                            <div className="text-xs text-gray-600 mt-1">口咽癌、口腔癌<br />陰莖癌、生殖器疣（尖形濕疣）</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-md bg-white border-2 border-amber-300 text-gray-700 p-4 rounded-lg shadow-sm">
                                    <div className="font-bold text-amber-800 text-center text-lg">步驟三：評估當前狀態與接種策略</div>
                                    <div className="text-sm mt-3 space-y-2">
                                        <div className="p-2 bg-amber-50 rounded border border-amber-100">
                                            <strong className="text-amber-900 block text-xs">A. 未有性行為 / 年輕族群</strong>
                                            <span className="text-xs text-gray-600">保護力最佳。建議在國中階段（9-14歲）及早接種兩劑。</span>
                                        </div>
                                        <div className="p-2 bg-gray-50 rounded border border-gray-100">
                                            <strong className="text-gray-800 block text-xs">B. 已有性行為 / 成年男女</strong>
                                            <span className="text-xs text-gray-600">依然高度建議接種。雖可能曾感染過部分型別，但疫苗能提供對其他未感染型別的交叉保護（建議九價打滿三劑）。</span>
                                        </div>
                                        <div className="p-2 bg-red-50 rounded border border-red-100">
                                            <strong className="text-red-900 block text-xs">C. 已有 HPV 相關病變或感染史</strong>
                                            <span className="text-xs text-gray-600">疫苗並非治療性藥物。但接種依然能預防後續其他高危險型別的重疊感染，降低復發或多重癌症風險。</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 疫苗選項比較表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">市場上常見 HPV 疫苗之比較</h2>
                        <p className="leading-relaxed mb-6">
                            目前台灣常見的 HPV 疫苗主要有二價、四價與九價三種（四價目前已逐漸被九價取代）。在門診，我強烈建議不論男女，皆以保護範圍最廣的**九價疫苗**為首選，以下是詳細的規格比較表：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">疫苗種類</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">涵蓋病毒型別</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">主要預防範疇</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">建議接種時機與劑量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">二價疫苗 (Cervarix)</td>
                                        <td className="px-4 py-4 font-medium">HPV 16, 18</td>
                                        <td className="px-4 py-4 text-gray-600">主要針對女性子宮頸癌（預防約 70% 相關個案）。對於男性及非子宮頸相關癌症保護力極有限。</td>
                                        <td className="px-4 py-4 text-gray-600">僅核准用於女性。9-14歲接種兩劑；15歲以上接種三劑。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">四價疫苗 (Gardasil 4)</td>
                                        <td className="px-4 py-4 font-medium">HPV 6, 11, 16, 18</td>
                                        <td className="px-4 py-4 text-gray-600">除了子宮頸癌，加入了預防生殖器疣（俗稱菜花，由 6, 11 型引起）的效果。對男女性皆有核准。</td>
                                        <td className="px-4 py-4 text-gray-600">男女皆可。現已逐漸淡出市場，被防護更全面的九價取代。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">九價疫苗 (Gardasil 9)</td>
                                        <td className="px-4 py-4 font-medium">HPV 6, 11, 16, 18, 31, 33, 45, 52, 58</td>
                                        <td className="px-4 py-4 text-green-700 font-medium">防護力最全面。可防範高達 90% 的子宮頸癌，以及九成以上的尖形濕疣。更是目前<strong>唯一獲得 FDA 核准用於預防男女口咽癌與頭頸部癌症</strong>的疫苗。</td>
                                        <td className="px-4 py-4 text-gray-600">男女皆可（9-45歲）。9-14歲接種兩劑；15-45歲接種三劑。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 陳醫師的實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，要推動台灣的 HPV 預防醫學，最大的障礙往往不是疫苗的價格，而是「去標籤化」。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            在門診，我常遇到不少男性一聽到 HPV 疫苗，直覺反應就是退縮、排斥，甚至露出一種「我有潔身自愛，為什麼要打這種防性病的疫苗」的防衛神情。老實說，這真的是非常令人遺憾的偏見。人類乳突病毒傳播力極強，只要一生中有過任何親密接觸，感染的機率就高達 80%。這不是私生活檢點不檢點的問題，而是人類黏膜接觸時再自然不過的自然現象。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            特別是當太太或女友被婦產科檢查出 HPV 陽性或子宮頸癌前病變時，許多男性會陷入無謂的猜忌。事實上，病毒可以在人體內潛伏數年甚至十幾年才發病。這時候，責怪和懷疑沒有任何意義，最實際的做法是「立刻建構防禦網絡」。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我想，疫苗不是萬靈丹。它沒有治療功能，無法消滅已經感染的病毒，更無法百分之百保證未來絕對不會得癌症。但是，在目前的預防醫學工具箱中，它無疑是CP值最高、實證最扎實的一把防禦傘。男性多挨這三針，換來的除了是降低自己罹患口咽癌、口腔癌的致命風險，更是給予伴侶最實質、最溫暖的健康承諾。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>HPV 疫苗不僅是「子宮頸癌疫苗」。瑞典與英國的大規模研究證實其對女性生殖道癌症有高達 87% 至 88% 的預防效果。</li>
                                <li>男性的口咽部黏膜比女性更容易發生持續性的 HPV 感染。由於喉嚨深處的口咽癌與口腔癌完全沒有篩檢工具，一旦發病往往已是晚期。</li>
                                <li>2026 最新發表於 JAMA Oncology 的百萬人研究證實，接種 HPV 疫苗能降低男性約 50% 罹患相關頭頸部癌症（含口咽癌）的風險。</li>
                                <li>預防效果最廣的「九價疫苗」是目前的黃金標準，不僅涵蓋更多子宮頸癌型別，更可有效防止男性口咽癌與尖形濕疣。</li>
                                <li>疫苗防禦是雙向的。兩性共同接種（Gender-Neutral Vaccination），才能打破群體傳播鏈，建立最完整的家庭防護網。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「張先生，疫苗的保護是送給自己和太太最好的健康禮物。男人多挨這一針，防的是自己看不見的喉嚨威脅，護的是枕邊人一生的平安。這份投資，絕對值得。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-24-hpv-vaccine-cancer-prevention" />
            </div>

            <Sidebar />
        </div>
    );
}
