import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "半夜流鼻血怎麼辦？耳鼻喉科醫師教你正確止血與就醫時機",
    description: "半夜突然流鼻血怎麼辦？仰頭、塞衛生紙反而危險！耳鼻喉科醫師教你正確的捏鼻翼止血法、需要立刻送急診的危險徵兆，以及反覆流鼻血的可能隱藏原因。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-17-epistaxis-first-aid-ent");

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
                                    <a href="https://journals.sagepub.com/doi/10.1177/0194599819889955" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Tunkel DE, et al. (2020). Clinical Practice Guideline: Nosebleed (Epistaxis). <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            前幾天凌晨兩點半，急診會診的電話響起。一位 65 歲、住在新竹市的退休公務員張伯伯被家屬推著輪椅來到急診。他一手拿著沾滿鮮血的毛巾摀著鼻子，另一手還拿著一個塞滿血塊的塑膠袋。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我爸半夜起來上廁所，突然就流鼻血。我們讓他把頭往後仰，又拿衛生紙塞滿鼻孔，結果血不但沒有停，反而從嘴巴一直吐出血塊，現在他覺得頭很暈！」張伯伯的女兒在一旁焦急地說。我一邊請護理師幫張伯伯量血壓（數值高達 190/100 mmHg），一邊戴上手套，輕輕將他鼻孔裡那一團吸滿血水、已經卡得死死的衛生紙球夾出來。
                        </p>
                        <p className="leading-relaxed mb-6">
                            張伯伯緊張地問：「醫師，流鼻血不是要把頭往後仰嗎？我看電視上都是這樣演的啊！為什麼我越仰越嚴重，還差點嗆到？」我拿著吸引器清理他的鼻腔，耐心解釋：「張伯伯，這就是大家最常犯的錯誤。把頭往後仰，鼻血其實沒有止住，只是從前面流改成往後倒流進喉嚨跟胃裡。如果血塊嗆到氣管，那可是會窒息的！」
                        </p>

                        {/* ========== 疾病本質說明 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">為什麼會流鼻血？耳鼻喉科急診的常見客</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                流鼻血（Epistaxis）是耳鼻喉科與急診非常常見的急症。我們的鼻腔黏膜非常脆弱，且富含微血管網，特別是在鼻中膈的前下方，有一個被稱為「克氏靜脈叢（Kiesselbach's plexus）」的區域。大約 90% 的鼻血都發生在這裡，我們稱為<strong>前部鼻出血</strong>。
                            </p>
                            <div className="my-6 flex justify-center">
                                <div className="text-center w-full max-w-3xl">
                                    <Image
                                        src="/images/Littles area.png"
                                        alt="克氏靜脈叢 (Kiesselbach's plexus)"
                                        width={800}
                                        height={600}
                                        className="rounded-xl shadow-sm border border-gray-100 w-full"
                                    />
                                    <p className="text-sm text-gray-500 mt-3 font-medium">容易出血的克氏靜脈叢</p>
                                </div>
                            </div>
                            <p className="leading-relaxed mb-4">
                                常見的原因包括：
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>氣候乾燥或過敏：</strong>秋冬季節乾燥，或是嚴重過敏性鼻炎導致頻繁揉鼻子、打噴嚏。</li>
                                <li><strong>外力創傷：</strong>最常見的就是習慣性挖鼻孔，或是臉部受到撞擊。</li>
                                <li><strong>全身性因素：</strong>例如像張伯伯這樣的高血壓患者，血壓飆高時微血管更容易破裂；或是服用抗凝血劑（如阿斯匹靈）的長輩，凝血功能較差。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                通常前部鼻出血只要處置得當，大多能自行止血。但如果是發生在鼻腔深處的<strong>後部鼻出血</strong>（常發生在年紀較大、有高血壓或動脈硬化的患者），血流速度快且不易自行加壓，這時候就很可能需要耳鼻喉科醫師介入處理了。
                            </p>
                        </div>

                        {/* ========== 常見錯誤 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">流鼻血時，這些事千萬不要做！</h2>
                        <p className="leading-relaxed mb-6">
                            在門診，我們常看到患者因為錯誤的處理方式，讓原本可以輕鬆止住的鼻血變成災難：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 1：把頭往後仰</h4>
                                <p className="text-gray-700 text-sm">這絕對是最危險的迷思！仰頭會讓鼻血順著鼻咽流進喉嚨與食道。吞下大量血液會刺激胃部引起劇烈嘔吐；若不慎嗆入氣管，更可能引發吸入性肺炎或窒息。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 2：將衛生紙硬塞入鼻孔</h4>
                                <p className="text-gray-700 text-sm">粗糙的衛生紙不僅無法精準壓迫出血點，取出時還容易將剛剛結好的血痂扯破，造成二次出血。有時衛生紙的纖維殘留在鼻腔，甚至會引發感染。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 3：每兩分鐘放開手檢查</h4>
                                <p className="text-gray-700 text-sm">血液凝固需要時間（通常是 10-15 分鐘）。如果一直頻繁放開手看「止血了沒」，剛剛凝固的血小板就會被血流沖散，永遠也止不住。</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <h4 className="font-bold text-red-800 mb-2 border-b border-red-100 pb-2">錯誤 4：忽略高血壓或單側反覆出血</h4>
                                <p className="text-gray-700 text-sm">許多長輩忽視血壓控制，導致微血管在壓力下爆裂。此外，如果總是「固定同一側」反覆流鼻血，不能只當作火氣大，必須排除鼻咽腫瘤的可能性。</p>
                            </div>
                        </div>

                        {/* ========== 正確處理方式與決策流程 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">正確的「捏鼻翼」止血法與就醫時機</h2>
                        <p className="leading-relaxed mb-6">
                            遇到流鼻血，請保持冷靜，並按照以下步驟進行正確的加壓止血：
                        </p>
                        
                        <div className="my-8 flex justify-center">
                            <div className="text-center w-full max-w-3xl">
                                <Image
                                    src="/images/Epistaxis-Child.png"
                                    alt="正確捏鼻翼加壓止血"
                                    width={800}
                                    height={600}
                                    className="rounded-xl shadow-sm border border-gray-100 w-full"
                                />
                                <p className="text-sm text-gray-500 mt-3 font-medium">前傾並捏住鼻翼柔軟處</p>
                            </div>
                        </div>

                        <ol className="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
                            <li><strong>身體微微前傾：</strong>坐著或半躺，頭部微微往前傾（像在看書的角度），讓血液順著鼻孔流出，而非流進喉嚨。如果有血流進嘴巴，請輕輕吐出，不要吞下去。</li>
                            <li><strong>用手指捏住鼻翼柔軟處：</strong>用大拇指和食指，緊緊捏住鼻子下半部軟骨的地方（也就是我們憋氣捏鼻子的部位），不是捏兩眼之間的硬骨。</li>
                            <li><strong>持續加壓 10 到 15 分鐘：</strong>請看著時鐘，不要提早放手。這段時間請張開嘴巴呼吸。</li>
                            <li><strong>冰敷輔助（非絕對必要）：</strong>如果方便，可以在鼻樑或額頭冰敷，促使血管收縮，但「捏鼻翼」加壓才是最關鍵的動作。</li>
                        </ol>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">流鼻血居家處理與急診決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium">
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">突然流鼻血</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">執行正確加壓止血</div>
                                    <div className="text-sm mt-1">前傾 + 捏鼻翼 15 分鐘</div>
                                </div>
                                
                                <div className="w-full max-w-lg flex justify-between mt-6">
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">血流停止</div>
                                            <div className="border-t border-green-200 pt-1 mt-1">避免挖鼻孔、用力擤鼻涕<br/>保持鼻腔濕潤</div>
                                        </div>
                                    </div>
                                    <div className="w-[48%] flex flex-col items-center">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm text-sm">
                                            <div className="font-bold mb-1">加壓2次(30分鐘)仍無法止血</div>
                                            <div className="border-t border-red-200 pt-1 mt-1">或大量出血、呼吸困難、嚴重頭暈</div>
                                        </div>
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-red-100 border-2 border-red-300 text-red-900 p-3 rounded-lg text-center shadow-sm text-sm font-bold">
                                            立刻前往急診
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 醫師會怎麼處理 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">到了急診或門診，耳鼻喉科醫師會做什麼？</h2>
                        <p className="leading-relaxed mb-6">
                            如果你因為無法止住的鼻血來到醫院，請不要太驚慌，耳鼻喉科醫師通常會準備以下武器來幫忙：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">處置方式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用情境</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優缺點與注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">血管收縮劑與局部麻醉</td>
                                        <td className="px-4 py-4 font-medium">初步處理，清除血塊後放入含有藥物的棉條。</td>
                                        <td className="px-4 py-4 text-gray-700">能迅速讓微血管收縮並減輕疼痛，方便後續檢查。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">局部化學燒灼術 (硝酸銀)</td>
                                        <td className="px-4 py-4 font-medium">內視鏡下找到明確的小出血點時使用。</td>
                                        <td className="px-4 py-4 text-gray-700">見效快，點下去會有一點刺痛感，能封閉破裂的微血管。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">前鼻腔填塞 (Nasal Packing)</td>
                                        <td className="px-4 py-4 font-medium">出血面積大或找不到明確出血點時。</td>
                                        <td className="px-4 py-4 text-gray-700">使用止血泡棉或紗布將鼻腔塞緊加壓。缺點是會很不舒服，通常需要塞著 2-3 天才能回診取出。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">電燒術或動脈結紮術</td>
                                        <td className="px-4 py-4 font-medium">嚴重的後部鼻出血或填塞無效時。</td>
                                        <td className="px-4 py-4 text-gray-700">需進開刀房在內視鏡下尋找深部出血血管進行電燒，是最後一道防線。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，面對流鼻血的長輩，穩定的情緒跟醫療處置一樣重要。我常遇到流著鼻血來到急診的長輩，一量血壓都是 180、190 甚至 200 以上。家屬常會問：「是不是因為血壓高才流鼻血？」
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            老實說，這通常是個「雞生蛋、蛋生雞」的問題。高血壓的確會讓血管容易破裂，但很多時候是因為看到自己流滿地血，恐慌加上焦慮，導致交感神經興奮，血壓才瞬間飆高。這時候，醫師除了想辦法止血外，穩定患者的情緒，甚至是給予降血壓藥物，都是同等重要的。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            另外我也要提醒，很多有心血管疾病的長輩在服用阿斯匹靈或保栓通等抗凝血藥物。這些藥物會讓血液不容易凝固，一旦流鼻血就如水龍頭般難以控制。請不要因為流一次鼻血就自行停用心臟科的藥物，這可能會增加中風的風險，請務必與醫師討論後再調整。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li><strong>千萬不要仰頭！</strong>流鼻血時請坐直、頭微前傾，捏住鼻翼柔軟處（不是捏硬骨），連續加壓 10-15 分鐘。</li>
                                <li><strong>不要亂塞衛生紙：</strong>衛生紙無法有效加壓，且取出時容易扯破血塊造成二次傷害。</li>
                                <li>如果正確加壓超過 30 分鐘仍血流不止、血流如注，或合併呼吸困難，請立刻掛急診。</li>
                                <li>如果是反覆同一側流鼻血，或是不明原因流鼻血，請到耳鼻喉科門診做內視鏡檢查，以排除鼻咽部腫瘤的可能。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「張伯伯，我幫您用止血泡棉塞好了。這幾天鼻子會有點塞住不舒服，請忍耐一下，千萬不要去摳它。等血壓穩定了，我們再回門診拿出來。這個屬於『耳鼻喉科急診三部曲』的第一課，您這下學到了，下次別再仰頭啦！」
                            </p>
                        </div>

                        {/* FAQ 與導覽 */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-gray-500 text-sm mb-4">這篇文章屬於「耳鼻喉科急診三部曲」系列：</p>
                            <ul className="list-none space-y-2 text-sm font-medium">
                                <li><Link href="/posts/2026-05-17-epistaxis-first-aid-ent" className="text-blue-600 hover:underline">1. 流鼻血怎麼辦？</Link> (本篇)</li>
                                <li><Link href="/posts/2026-05-17-fish-bone-impaction-throat" className="text-blue-600 hover:underline">2. 魚刺卡喉嚨怎麼辦？</Link></li>
                                <li><Link href="/posts/2026-05-17-ear-canal-foreign-body-insect" className="text-blue-600 hover:underline">3. 耳朵跑進蟲或異物怎麼辦？</Link></li>
                                <li className="pt-2"><Link href="/posts/2026-05-17-ent-emergency-trilogy-overview" className="text-purple-600 hover:underline">▶ 常見耳鼻喉科急診總覽頁</Link></li>
                            </ul>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-17-epistaxis-first-aid-ent" />
            </div>

            <Sidebar />
        </div>
    );
}
