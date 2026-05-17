import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "耳朵跑進蟲或異物怎麼辦？別再用棉花棒越推越深",
    description: "耳朵跑進昆蟲或小孩塞異物進耳道怎麼辦？自己亂挖或用棉花棒可能會弄破耳膜！耳鼻喉科醫師教你正確應對步驟，以及專業醫師如何無痛安全取出耳道異物。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-17-ear-canal-foreign-body-insect");

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
                                    <span>
                                        Merck Manual: Foreign Bodies in the Ear. <em>MSD Manual Professional Edition.</em>
                                    </span>
                                </li>
                                <li>
                                    <span>UpToDate (2025). Foreign bodies of the external auditory canal in children.</span>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            星期天的傍晚，急診室外傳來一陣淒厲的哭聲。一對年輕夫妻滿頭大汗地抱著 4 歲的兒子衝進來，小男孩是住在基隆市的幼兒園學生，他一邊尖叫，一邊用手死命地摀著右邊耳朵。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「醫師！他剛剛在客廳玩玩具，突然一直喊耳朵痛。我拿手電筒一照，發現裡面塞了一顆小 BB 彈！」媽媽眼眶泛紅，拿出一把眉毛鑷子說：「我本來想用這個幫他夾出來，可是他一直亂動，好像越推越進去了，後來裡面還流出紅紅的血，他現在痛到不讓我碰！」我請護理師幫忙固定小男童的頭部，用耳鏡一看，一顆鮮豔的綠色塑膠 BB 彈，已經死死卡在耳道最深處的狹窄部位，旁邊的耳道皮膚被鑷子刮破，正在滲血，而且 BB 彈幾乎已經貼在脆弱的耳膜上了。
                        </p>
                        <p className="leading-relaxed mb-6">
                            爸爸懊惱地問：「醫師，我們自己用夾子夾錯了嗎？可是我們看它在很外面啊！現在夾不到怎麼辦？他的耳膜會不會破掉變聾子？」我放下耳鏡，轉身準備顯微鏡和特製的耳鼻喉科器械，並回答：「爸爸，這就是處理小兒耳道異物最常發生的狀況。圓形又光滑的東西，絕對不能用一般的平口夾子夾，因為一夾就會往後滑，越滑越深。放心，交給我們，只要孩子別亂動，我們有工具可以把它『勾』出來。」
                        </p>

                        {/* ========== 疾病本質說明 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">耳道異物的兩大類別：沒有生命的物品 vs. 活生生的蟲</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <div className="my-6 flex justify-center">
                                <div className="text-center w-full max-w-3xl">
                                    <Image
                                        src="/images/Ear foreign body.png"
                                        alt="耳道異物"
                                        width={800}
                                        height={600}
                                        className="rounded-xl shadow-sm border border-gray-100 w-full"
                                    />
                                    <p className="text-sm text-gray-500 mt-3 font-medium">狹窄且彎曲的外耳道</p>
                                </div>
                            </div>
                            <p className="leading-relaxed mb-4">
                                我們的外耳道大約只有 2.5 到 3 公分長，而且並不是筆直的管子，它有一個彎曲的弧度，並且在靠近耳膜的地方有一個最狹窄的「峽部（Isthmus）」。耳道皮膚非常薄，底下緊貼著骨頭或軟骨，神經非常豐富，因此只要有一點點摩擦或壓迫，就會產生劇烈疼痛。
                            </p>
                            <p className="leading-relaxed mb-4">
                                急診常見的耳道異物主要分為兩大類，處理原則截然不同：
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>無機物或玩具（常見於兒童）：</strong>如珠子、BB彈、豆子、貼紙、棉花棒頭等。這類異物不會亂動，威脅在於「人為的錯誤掏挖」，將其推向深處導致耳膜破裂或耳道撕裂傷。</li>
                                <li><strong>活體昆蟲（常見於成人）：</strong>如蟑螂、螞蟻、蛾等。昆蟲在狹窄的耳道內亂竄、拍打翅膀，不僅會引起極度恐懼與巨大的噪音（像是轟炸機在腦中盤旋），昆蟲的爪子更會刮傷耳膜引起劇痛。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                在耳鼻喉科看來，處理這兩類異物的核心原則只有一個：不論是蟲還是玩具，如果您沒有專業的照明與器械，絕對不要自己動手！
                            </p>
                        </div>

                        {/* ========== 常見錯誤 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">危險的自救法：別讓小問題變成大傷害</h2>
                        <p className="leading-relaxed mb-6">
                            當耳朵進了東西，人們本能地想把它挖出來。但以下這幾種常見的居家處理方式，往往會帶來更大的災難：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 1：拿棉花棒亂掏</h4>
                                <p className="text-gray-700 text-sm">棉花棒的直徑幾乎跟耳道一樣粗。使用棉花棒只會把異物像「推土機」一樣，一路推過耳道最狹窄的峽部，最後死死地壓在耳膜上，大幅增加醫師取出的難度，甚至戳破耳膜。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 2：用一般鑷子夾圓形物</h4>
                                <p className="text-gray-700 text-sm">就像故事中的男童家長一樣，一般的鑷子夾不住圓滑的珠子。兩側夾片一擠壓，圓形物體就會遵循物理原則往阻力小的深處滑去，造成耳道皮膚被嚴重夾傷出血。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 3：昆蟲還活著時硬挖</h4>
                                <p className="text-gray-700 text-sm">當蟲子受到驚嚇，牠會死命往暗處（耳膜方向）鑽。如果用耳扒去挖活著的蟲，牠可能會緊緊咬住耳道皮膚，或在掙扎中把耳膜抓破。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 4：盲目灌油自救</h4>
                                <p className="text-gray-700 text-sm">雖然網路上常教人滴嬰兒油淹死蟲子，但如果您的耳膜原本就有破洞，或是異物其實是「豆類」（遇水會膨脹卡死），灌油反而會引發劇痛或嚴重感染。這個動作最好由醫師評估後再執行。</p>
                            </div>
                        </div>

                        {/* ========== 正確處理方式與決策流程 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">正確應對步驟：忍住想挖的手，馬上就醫</h2>
                        <p className="leading-relaxed mb-6">
                            如果您或孩子遇到了耳道異物的狀況，請遵循以下的安全指南：
                        </p>
                        
                        <ol className="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
                            <li><strong>如果是蟲子：</strong>到暗處並嘗試用手電筒照耳朵外部（不是照深處）。有些蟲子有向光性，可能會自己爬出來。如果牠不出來，保持冷靜，立刻到耳鼻喉科急診。</li>
                            <li><strong>如果是玩具或小零件：</strong>不要驚慌。只要不去碰它，它不會自己往裡面跑。請保持孩子安靜，不要讓他們自己揉耳朵，然後立刻帶來門診。</li>
                            <li><strong>就醫危險警訊：</strong>如果伴隨劇烈撕裂痛、耳朵流血流膿、聽力突然下降，甚至出現頭暈或顏面神經失調，代表可能已經傷及中耳或內耳，必須立刻由急診耳鼻喉科醫師處理。</li>
                        </ol>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">耳道異物門診與急診評估流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">主訴：耳道異物或昆蟲入耳</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">耳鏡初步評估</div>
                                    <div className="text-sm mt-1">確認異物種類、位置、耳膜完整性</div>
                                </div>
                                
                                <div className="w-full max-w-lg flex justify-between mt-6">
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-amber-50 border-2 border-amber-200 text-amber-800 p-3 rounded-lg text-center shadow-sm text-sm h-full flex items-center justify-center">
                                            <div className="font-bold">活體昆蟲<br/><br/>↓<br/><br/>先滴入局部麻醉劑或礦物油<br/>(確認耳膜無破洞)<br/>讓蟲子窒息停止掙扎</div>
                                        </div>
                                    </div>
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-3 rounded-lg text-center shadow-sm text-sm h-full flex items-center justify-center">
                                            <div className="font-bold">無生命異物<br/>(玩具、珠子、豆子)</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="h-6 w-0.5 bg-gray-300 mt-6"></div>
                                <div className="w-full max-w-sm bg-green-50 border-2 border-green-300 text-green-900 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">醫師在顯微鏡下操作取出</div>
                                    <div className="text-sm mt-1">使用專用器械（異物鉤、吸引器、鱷魚鉗）或溫水沖洗</div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 醫師會怎麼處理 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">耳鼻喉科醫師的「拆彈」武器庫</h2>
                        <p className="leading-relaxed mb-6">
                            取出耳道異物就像在細小的管子裡拆除炸彈。我們擁有專門的工具來應付不同形狀與材質的異物：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">專用器械</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用對象</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">操作原理</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">異物鉤 (Day Hook)</td>
                                        <td className="px-4 py-4 font-medium">圓形或表面光滑的物體 (如珠子、BB彈)。</td>
                                        <td className="px-4 py-4 text-gray-700">一個微小如挖耳勺的鈍鉤。醫師會輕輕把它滑過異物的後方，然後從後往前「勾」出來，避免往深處推。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">鱷魚嘴鉗 (Alligator Forceps)</td>
                                        <td className="px-4 py-4 font-medium">不規則形狀的軟物 (如棉花、紙片) 或昆蟲屍體。</td>
                                        <td className="px-4 py-4 text-gray-700">具有齒狀咬合面的長柄微型鉗子，能在狹小的耳道內緊緊夾住軟性物質。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">微型吸引器 (Suction)</td>
                                        <td className="px-4 py-4 font-medium">輕巧或粉碎的異物、小飛蟲。</td>
                                        <td className="px-4 py-4 text-gray-700">就像迷你的吸塵器，只要異物表面能被吸盤吸附，就能直接抽出。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">溫水沖洗 (Irrigation)</td>
                                        <td className="px-4 py-4 font-medium">不膨脹且耳膜完整的無生命異物。</td>
                                        <td className="px-4 py-4 text-gray-700">利用水流沖到異物後方產生的反作用力將其沖出。注意：豆類或電池絕對禁用此法。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，處理兒童耳道異物，真正的挑戰不是工具，而是「安撫」。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            一個因為疼痛而驚恐萬分、拼命掙扎的孩子，如果在清醒狀態下硬夾，極有可能在掙扎的瞬間讓器械刺破耳膜。老實說，在門診，如果我們嘗試了一次，發現孩子完全無法配合，甚至要動用好幾個人去壓制，我們通常會立刻停止。與其造成永久的聽力傷害或嚴重的心理陰影，不如直接安排孩子進開刀房，在安全的短暫全身麻醉下，醫師只要花十秒鐘就能把異物無痛取出。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            至於昆蟲入耳的成人患者，通常是被那種「蟲在腦袋裡拍翅膀」的巨大聲響嚇得半死。當我們滴入局部麻醉藥水，蟲子停止活動的那一瞬間，患者通常會深深鬆一口氣。這時候慢慢把蟲子夾出來，再檢查耳膜有沒有被刮傷，這才是一個安全的標準流程。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li><strong>嚴禁自己亂挖！</strong>不論是蟲子還是玩具，使用棉花棒或鑷子通常只會把異物推向深處，甚至戳破耳膜。</li>
                                <li>如果活蟲跑進耳朵，最安全的做法是立刻尋求耳鼻喉科醫師協助，醫師會用藥物讓蟲子停止活動後再安全取出。</li>
                                <li>如果小孩把圓形珠子塞進耳朵，千萬不要用一般夾子夾，這會讓珠子滑向深淵。</li>
                                <li>當孩子極度害怕、無法配合時，在全身麻醉下取出異物是最安全且最保護耳膜的決定。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「底迪，你看！陳叔叔用這個神奇的小鉤子，把你的綠色小球球變出來了對不對？好勇敢，都沒有哭喔！」我轉頭對父母說：「爸爸媽媽，幸好耳膜只有一點點破皮紅腫，沒有破洞。我開一點消炎滴劑給他，這幾天洗澡小心不要進水。下次看到他把東西塞進耳朵，記得，直接帶來找我們，千萬別再自己夾了！」
                            </p>
                        </div>

                        {/* FAQ 與導覽 */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-gray-500 text-sm mb-4">這篇文章屬於「耳鼻喉科急診三部曲」系列：</p>
                            <ul className="list-none space-y-2 text-sm font-medium">
                                <li><Link href="/posts/2026-05-17-epistaxis-first-aid-ent" className="text-blue-600 hover:underline">1. 流鼻血怎麼辦？</Link></li>
                                <li><Link href="/posts/2026-05-17-fish-bone-impaction-throat" className="text-blue-600 hover:underline">2. 魚刺卡喉嚨怎麼辦？</Link></li>
                                <li><Link href="/posts/2026-05-17-ear-canal-foreign-body-insect" className="text-blue-600 hover:underline">3. 耳朵跑進蟲或異物怎麼辦？</Link> (本篇)</li>
                                <li className="pt-2"><Link href="/posts/2026-05-17-ent-emergency-trilogy-overview" className="text-purple-600 hover:underline">▶ 常見耳鼻喉科急診總覽頁</Link></li>
                            </ul>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-17-ear-canal-foreign-body-insect" />
            </div>

            <Sidebar />
        </div>
    );
}
