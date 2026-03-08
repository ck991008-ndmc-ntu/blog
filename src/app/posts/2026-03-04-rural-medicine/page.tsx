import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-04-rural-medicine");

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
                                    <a href="https://doi.org/10.7863/ultra.16.05002" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Bornemann, P., et al. (2017). Assessment of a Novel Point-of-Care Ultrasound Curriculum's Effect on Competency Measures in Family Medicine Graduate Medical Education. <em>Journal of Ultrasound in Medicine</em>. https://doi.org/10.7863/ultra.16.05002
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.4102/phcfm.v17i1.4959" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Thirion, J. C., & Van Hoving, D. J. (2025). The merit of rural point-of-care ultrasound: Carotid pseudoaneurysm case report. <em>African Journal of Primary Health Care & Family Medicine, 17</em>(1), 4959. https://doi.org/10.4102/phcfm.v17i1.4959
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* 內容開始 */}
                        <p className="leading-relaxed">
                            長達九年半的偏鄉義診歲月裡，我看過無數的流行病學數據，分析過城鄉之間的就醫距離與資源落差。但在那些冰冷的數據背後，真正讓我深刻反思醫師角色的，是一個個鮮活的生命故事。
                        </p>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【故事一】梅雨季的往診：感恩承擔責任的機會</h2>
                        <p className="leading-relaxed">
                            2024年的初夏，東北角的梅雨季讓山路變得泥濘濕滑。我們在瑞芳與雙溪進行了每個月例行的義診。那天，我被臨時派任帶領初次參加義診的 PGY（不分科住院醫師）學弟妹，深入無法自行下山的長輩家中進行「往診」。
                        </p>
                        <p className="leading-relaxed">
                            在一個昏暗的屋簷下，一位阿嬤獨自照顧著臥床的先生。阿嬤自己的膝蓋退化嚴重，寸步難行，連走到山下的公車站都需要一個多小時，更別提要帶先生去大醫院看病了。每次義診團隊的到來，是他們唯一能見到醫生的機會。在幫阿公檢查完、開立藥物後，阿嬤緊緊握著我們的手不放。那一刻我深刻體會到，我們帶上山的，不僅僅是幾顆降血壓藥或止痛藥，更是一份<strong>照看民眾健康的沉重責任與承諾</strong>。這也是為什麼，不管晴雨，義診的火炬必須傳承下去。
                        </p>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【故事二】劃一道偏鄉與醫療的鵲橋</h2>
                        <p className="leading-relaxed">
                            在偏鄉，最害怕的是「小病拖成大病」。有些長輩肚子痛了幾個月，卻因為下山一趟太折騰而一忍再忍。2024 年 9 月，我們開始積極將<strong>手持式超音波 (Handheld Ultrasound)</strong> 等新科技導入義診行動中。
                        </p>
                        <p className="leading-relaxed">
                            超音波就像是醫師的「第三隻眼」。在一次山區的義診中，一位阿伯只是輕描淡寫地說自己最近胃口不好、右上腹悶悶的。若是過去，我們只能開些腸胃藥讓他觀察。但那天，我打開手持超音波一掃，立刻發現了他的膽囊內充滿了泥沙狀的結石，甚至已經有發炎的跡象。我們當下立即為他安排轉診下山手術，及時阻止了可能發生的敗血症。
                            這件事讓我震撼：科技的引入，真正成為了劃破山區醫療壁壘的「鵲橋」，讓遠距就醫的民眾得以在第一時間獲得專科等級的篩檢。
                        </p>


                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【陳醫師的臨床意見】從偏鄉回到診間</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="text-lg leading-relaxed text-gray-800 font-medium mb-6">
                                這些偏鄉的經驗深刻影響了我的臨床實務。在醫學中心裡，各科分工極細，病患看甲狀腺找一科，看肝臟又要掛另一科。但對病人來說，人是一個完整的個體。
                            </p>
                            <p className="text-lg leading-relaxed text-blue-800 font-bold mb-4">
                                具備內科與耳鼻喉科雙核背景的優勢：
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm mt-0.5">1</span>
                                    <div>
                                        <strong className="text-[#1A2B3C]">內科訓練的底蘊——腹部超音波：</strong><br />
                                        在馬偕醫學中心內科訓練期間，我打下了扎實的腹部超音波基礎。從肝腫大、膽結石、脂肪肝到腎臟囊腫，我能從內科與家醫科的宏觀視角，為您解讀腹部臟器的健康密碼。
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm mt-0.5">2</span>
                                    <div>
                                        <strong className="text-[#1A2B3C]">耳鼻喉科的專精——頭頸部超音波：</strong><br />
                                        回到耳鼻喉科後，我專精於頭頸部超音波與導引穿刺 (US-FNA/CNB)。無論是甲狀腺結節、唾液腺腫瘤，還是不明原因的淋巴結腫大，都能提供最精準的局部診斷。
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 border-t border-amber-200 pt-6">
                                <p className="leading-relaxed font-bold text-[#1A2B3C] text-xl text-center mb-6">
                                    「找我做超音波，絕對不是只花 3 分鐘跑流程的快速敷衍。」
                                </p>
                                <p className="leading-relaxed">
                                    我深知超音波探頭下的每一個陰影，都牽動著一個家庭的情緒。因此，我的超音波檢查以<strong>仔細、全面、結合臨床數據分析</strong>為核心。我會花時間為您解釋影像的意義，結合您的抽血報告與家族史，並利用流行病學的邏輯，告訴您這個結節或囊腫「現在該如何處理」、「未來該如何追蹤」。這是一場為您量身打造的健康防護網。
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【Take Home Message】</h2>
                        <ul className="space-y-4 font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 偏鄉醫療的困境在於「距離」，而科技與手持超音波的結合，是打破遠距藩籬的最佳利器。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 人體是一個整體，擁有內科腹部超音波與耳鼻喉科頭頸超音波的雙重訓練，能為您提供更全面、不漏接的診斷視角。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 定期健康檢查中的超音波掃描，不應只是流水線作業。細膩的操作與結合臨床邏輯的判讀，才是及早揪出病灶的關鍵。</li>
                        </ul>

                    </article>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
