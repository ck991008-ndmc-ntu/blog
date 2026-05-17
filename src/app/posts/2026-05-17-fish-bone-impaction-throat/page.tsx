import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "魚刺卡喉嚨可以吞飯團嗎？耳鼻喉科醫師提醒：這些情況不要硬撐",
    description: "吃魚不小心卡魚刺怎麼辦？千萬別吞飯團或喝醋！耳鼻喉科醫師解析魚刺哽喉的正確處理方式、哪些情況必須立刻掛急診，以及醫師如何安全取出深部魚刺。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-17-fish-bone-impaction-throat");

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
                                        BMJ Best Practice: Foreign bodies in the upper aerodigestive tract. <em>British Medical Journal.</em>
                                    </span>
                                </li>
                                <li>
                                    <span>Flint PW, et al. (2020). Cummings Otolaryngology-Head and Neck Surgery, 7th Edition.</span>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            星期六的晚上，急診室外坐滿了等待看診的人。35 歲、在台北市信義區擔任外商主管的陳小姐，痛苦地捂著脖子，連吞口水都不敢，任憑口水從嘴角流下。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我剛剛在聚餐吃清蒸鱸魚，跟朋友講話笑得太開心，一不小心就把魚刺吞下去了。」陳小姐聲音沙啞、眼眶泛淚地說：「當下我覺得喉嚨右邊卡卡的，朋友就叫我趕快吞三大口白飯，又叫我喝了半杯黑醋。結果不吞還好，一吞下去，好像有一把刀直接插進脖子裡，現在連喝水都痛到想哭！」我趕緊安撫她，並請她坐上手術椅，準備用內視鏡幫她檢查。
                        </p>
                        <p className="leading-relaxed mb-6">
                            陳小姐焦慮地問：「醫師，我喝那麼多醋，魚刺怎麼都沒有軟化？吞白飯不是可以把它壓下去嗎？我會不會要把食道切開啊？」我一邊將軟式內視鏡輕輕放入她的鼻腔，一邊無奈地回答：「陳小姐，這就是最可怕的偏方了。醋根本不可能在幾秒鐘內溶解魚刺；而吞白飯，只會把原本卡在淺處的魚刺，像釘釘子一樣，直接釘進深層的肌肉裡。如果刺穿食道，那真的就得進開刀房了！」
                        </p>

                        {/* ========== 疾病本質說明 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">魚刺卡在哪裡？為什麼不能硬吞？</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <div className="my-6 flex justify-center">
                                <div className="text-center w-full max-w-3xl">
                                    <Image
                                        src="/images/Fish bone.png"
                                        alt="魚刺卡喉嚨常見位置"
                                        width={800}
                                        height={600}
                                        className="rounded-xl shadow-sm border border-gray-100 w-full"
                                    />
                                    <p className="text-sm text-gray-500 mt-3 font-medium">常見的魚刺卡喉嚨解剖位置</p>
                                </div>
                            </div>
                            <p className="leading-relaxed mb-4">
                                「魚刺哽喉（Fish bone impaction）」可以說是台灣耳鼻喉科急診的「特產」，因為台灣人非常愛吃帶骨的魚類。當我們不小心吞下魚刺時，它最常卡在幾個咽喉的「關卡」：
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>扁桃腺與舌根：</strong>這是最常見也最淺的位置。因為表面凹凸不平，魚刺很容易在這裡「著床」。</li>
                                <li><strong>會厭谷與梨狀竇：</strong>這裡是喉部深處的兩個凹陷處，吞嚥時食物會經過這裡，魚刺常卡在這些深處的轉角。</li>
                                <li><strong>食道入口（環咽肌）：</strong>這是最危險的位置！食道入口是一個狹窄的括約肌，如果魚刺卡在這裡又硬吞，很容易直接刺穿食道壁。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                我們的咽喉黏膜非常敏感，只要有一點點刮傷，大腦就會傳遞強烈的「異物感」。有時候魚刺其實已經被吞下去了，但刮傷的傷口會讓你一直覺得「它還卡在那裡」。但是，我們絕對不能抱著「可能已經吞下去」的僥倖心態，因為一旦真的卡住並引發深頸部感染，死亡率是相當高的。
                            </p>
                        </div>

                        {/* ========== 常見錯誤 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">卡魚刺的四大NG行為，你中了幾個？</h2>
                        <p className="leading-relaxed mb-6">
                            面對卡魚刺，坊間流傳的偏方往往是急診醫師的噩夢：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">❌ 吞大口白飯或饅頭</h4>
                                <p className="text-gray-700 text-sm">這是最致命的錯誤！原本魚刺可能只是輕輕刺在表面（這時醫師用夾子一秒就能夾出）。硬吞食物，就像用鐵鎚把釘子敲進牆壁，會把魚刺完全推入肌肉層，甚至刺穿食道周圍的大血管。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">❌ 大口喝醋</h4>
                                <p className="text-gray-700 text-sm">化學常識告訴我們，要讓堅硬的魚骨鈣質軟化，需要將它浸泡在高濃度酸液中好幾個小時。喝下一口醋，停留在喉嚨的時間不到一秒，除了刺激已經受傷的黏膜讓你更痛之外，毫無幫助。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">❌ 用手指或筷子亂挖</h4>
                                <p className="text-gray-700 text-sm">除了會引起強烈的作嘔反射，更危險的是盲目亂挖很容易把周邊的軟組織抓破，引發嚴重的出血或細菌感染，而且通常根本挖不到魚刺。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">❌ 覺得卡卡卻硬拖好幾天</h4>
                                <p className="text-gray-700 text-sm">有些長輩很能忍耐，覺得卡卡的過幾天就會好。但口腔內充滿了各種細菌，魚刺卡在黏膜上超過 24 小時，很容易引發化膿、膿瘍，屆時就必須住院打抗生素甚至開刀排膿。</p>
                            </div>
                        </div>

                        {/* ========== 正確處理與危險警訊 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">不小心卡魚刺，正確處理步驟看這裡</h2>
                        <p className="leading-relaxed mb-6">
                            如果不幸在吃魚時覺得喉嚨被刺到了，請立刻停止進食，並依照以下步驟處理：
                        </p>
                        
                        <ol className="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
                            <li><strong>立刻停止進食：</strong>連水都盡量少喝。保持冷靜，輕輕試著咳兩下，看能不能把淺處的魚刺咳出來（但不要過度用力咳）。</li>
                            <li><strong>自我評估疼痛感：</strong>如果只是輕微的不適感，而且位置不固定，可能是黏膜刮傷。但如果是「持續的單側刺痛」，且吞口水就痛，那極高機率魚刺還在。</li>
                            <li><strong>直接前往耳鼻喉科診所或急診：</strong>請專業醫師使用光源與工具幫您檢查。千萬別自己對著鏡子拿手電筒亂挖。</li>
                        </ol>

                        {/* ========== 決策流程圖 ========== */}
                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">魚刺哽喉門診與急診評估流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">主訴：吞入魚刺且有異物痛感</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">是否有紅旗危險警訊？</div>
                                    <div className="text-sm mt-1">呼吸困難、無法吞口水、發燒、頸部腫痛、胸口痛</div>
                                </div>
                                
                                <div className="w-full max-w-lg flex justify-between mt-6">
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm text-sm h-full flex items-center justify-center">
                                            <div className="font-bold">有警訊 → 高度懷疑食道穿孔或深頸部感染<br/><br/>立刻安排頸胸部電腦斷層 (CT)<br/>聯絡腸胃科或胸腔外科</div>
                                        </div>
                                    </div>
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">無警訊</div>
                                            <div className="border-t border-green-200 pt-1 mt-1">耳鼻喉科理學與內視鏡檢查</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        
                                        <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">看見魚刺</div>
                                            <div className="border-t border-blue-200 pt-1 mt-1">局部麻醉後以異物鉗取出</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        
                                        <div className="w-full bg-purple-50 border-2 border-purple-200 text-purple-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold">未見魚刺但患者仍極度疼痛</div>
                                            <div className="text-xs mt-1">安排頸部 X 光或轉介腸胃科照胃鏡確認食道</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 醫師會怎麼處理 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">到了耳鼻喉科，醫師會怎麼夾魚刺？</h2>
                        <p className="leading-relaxed mb-6">
                            夾魚刺其實是一門藝術，很考驗醫師的眼力與手部的穩定度。我們通常會採取以下幾種方式尋找並取出異物：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">檢查與處理工具</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用情境</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">處置說明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">壓舌板與頭燈直視</td>
                                        <td className="px-4 py-4 font-medium">卡在口腔後方、扁桃腺或舌根淺處。</td>
                                        <td className="px-4 py-4 text-gray-700">最快速的處理方式。請患者張大嘴發出「阿」的聲音，若能看到魚刺，直接用長鑷子夾取。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">軟式鼻咽喉內視鏡</td>
                                        <td className="px-4 py-4 font-medium">肉眼看不到，懷疑卡在會厭、梨狀竇或下咽部。</td>
                                        <td className="px-4 py-4 text-gray-700">經由鼻腔放入細長的內視鏡，攝影鏡頭可以看清喉嚨死角。發現後可配合異物鉗經口取出。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">腸胃科胃鏡</td>
                                        <td className="px-4 py-4 font-medium">耳鼻喉科檢查無發現，但高度懷疑卡在食道內。</td>
                                        <td className="px-4 py-4 text-gray-700">耳鼻喉科醫師的範圍只到食道入口。一旦魚刺掉入食道中段，就需要腸胃科醫師安排胃鏡取出。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">全身麻醉硬式食道鏡</td>
                                        <td className="px-4 py-4 font-medium">食道深處的巨大異物、尖銳骨頭，或兒童不配合時。</td>
                                        <td className="px-4 py-4 text-gray-700">需進入開刀房全身麻醉，以粗管徑的金屬食道鏡將危險異物安全拔除，保護食道壁不被二次割傷。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，夾魚刺最怕的不是魚刺藏得多深，而是患者「不合作」。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我們的咽喉有非常強烈的嘔吐反射（Gag reflex）。當內視鏡或夾子伸進喉嚨時，很多人會下意識地乾嘔、舌頭亂頂，這會增加取出魚刺的難度，甚至導致夾子刮傷黏膜。老實說，這不是患者的錯，這是人體保護氣管的本能。所以在門診，我會盡量噴上一點局部麻醉藥物來降低敏感度，並且引導患者深呼吸：「用嘴巴大口吸氣，放鬆肩膀」。您越放鬆，我們越能安全、快速地解決您的痛苦。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            另外，我常遇到一些患者，內視鏡從頭到尾照了三遍，什麼都沒看到，但患者還是覺得很痛。這通常是因為魚刺在吞嚥的過程中劃傷了黏膜，魚刺其實已經進到胃裡了，但那個「刮傷的傷口」會持續產生異物感。在這種情況下，我們會給予消炎止痛藥，並請患者觀察三天。通常傷口癒合了，那種「卡卡的感覺」就會消失了。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>卡魚刺時，**絕對不要吞飯團或喝醋**。這會把魚刺越推越深，增加食道穿孔與致命感染的風險。</li>
                                <li>立即停止進食，不要自行用手指亂挖。盡速前往耳鼻喉科診所或醫院急診尋求協助。</li>
                                <li>如果出現連口水都吞不下去、流口水、發燒、呼吸困難或胸痛，請馬上到急診！這代表可能已有深層併發症。</li>
                                <li>配合醫師指示，深呼吸並放鬆身體，醫師才能用最安全的方式將魚刺取出。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「陳小姐，妳看螢幕，這根兩公分長的魚刺已經整根刺進妳右邊的扁桃腺深處了，難怪妳痛到流眼淚。還好妳後來沒有繼續硬吞飯！我幫妳噴點麻藥，等一下深呼吸，五秒鐘我們就把它拿出來。以後吃魚的時候，講話還是不要太激動啊！」
                            </p>
                        </div>

                        {/* FAQ 與導覽 */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-gray-500 text-sm mb-4">這篇文章屬於「耳鼻喉科急診三部曲」系列：</p>
                            <ul className="list-none space-y-2 text-sm font-medium">
                                <li><Link href="/posts/2026-05-17-epistaxis-first-aid-ent" className="text-blue-600 hover:underline">1. 流鼻血怎麼辦？</Link></li>
                                <li><Link href="/posts/2026-05-17-fish-bone-impaction-throat" className="text-blue-600 hover:underline">2. 魚刺卡喉嚨怎麼辦？</Link> (本篇)</li>
                                <li><Link href="/posts/2026-05-17-ear-canal-foreign-body-insect" className="text-blue-600 hover:underline">3. 耳朵跑進蟲或異物怎麼辦？</Link></li>
                                <li className="pt-2"><Link href="/posts/2026-05-17-ent-emergency-trilogy-overview" className="text-purple-600 hover:underline">▶ 常見耳鼻喉科急診總覽頁</Link></li>
                            </ul>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-17-fish-bone-impaction-throat" />
            </div>

            <Sidebar />
        </div>
    );
}
