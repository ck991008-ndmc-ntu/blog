import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "工程師必讀：鼻塞、過敏與下鼻甲肥厚完全解碼",
    description: "針對高壓工程師族群，解析鼻塞、下鼻甲肥厚及鼻中膈彎曲的診斷流程、藥物噴劑（含血管收縮劑風險與類固醇噴劑正確用法）及局部麻醉微創手術總整理。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-22-nasal-congestion-engineers");

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
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            你是不是常覺得吸不到空氣、腦袋昏沉，甚至得張口呼吸才能入睡？別讓「鼻塞」拖垮你的 code 品質與專注力。今天我們來深度解析<strong className="text-[#1A2B3C]">下鼻甲肥厚</strong>與<strong className="text-[#1A2B3C]">鼻中膈彎曲</strong>，從正確使用噴劑到微創手術選擇，帶你重新找回順暢呼吸！
                        </p>
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.1177/0194599814561600" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        AAO-HNSF (2015). Clinical Practice Guideline: Allergic Rhinitis. <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1002/alr.23090" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Wise SK, et al. (2023). International Consensus Statement on Allergy and Rhinology: Allergic Rhinitis (ICAR-AR). <em>International Forum of Allergy & Rhinology.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">

                        {/* ========== 為什麼工程師要注意鼻塞 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【前言】呼吸道就像頻寬，塞車=效能降級</h2>
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                對於經常在冷氣房盯螢幕的工程師來說，過敏原與冷空氣常會導致鼻黏膜長期發炎、腫脹，最終形成<strong>「下鼻甲肥厚」</strong>。如果你的「頻寬」不夠，大腦就會處於長期慢性缺氧的狀態。
                            </p>
                            <p className="leading-relaxed mb-4">這會導致什麼問題？</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800">1. 睡眠碎片化</p>
                                    <p className="text-sm">張口呼吸會導致口乾舌燥、淺眠，隔天起床完全沒有恢復感。</p>
                                </div>
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800">2. 認知效能下降</p>
                                    <p className="text-sm">長期微缺氧狀態會讓專注力渙散，解 bug 速度直接砍半。</p>
                                </div>
                            </div>
                        </div>

                        {/* ========== 解剖結構說明圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【結構解析】你的鼻腔裡到底長怎樣？</h2>
                        <div className="my-8 flex flex-col items-center">
                            <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                {/* The user's provided real image should be placed at public/images/anterior-rhinoscopy.jpg */}
                                <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                                   <Image 
                                      src="/images/anterior-rhinoscopy.jpg" 
                                      alt="Anterior Rhinoscopy View of Nasal Cavity" 
                                      fill
                                      className="object-contain"
                                      unoptimized
                                   />
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-4">
                                    前鼻鏡下的鼻腔結構：可見中鼻甲(Middle turbinate)、下鼻甲(Inferior turbinate)、鼻前庭(Vestibule)與鼻中膈(Septum)。
                                </p>
                            </div>
                        </div>
                        <p className="leading-relaxed mb-6">
                            從上圖可以清楚看到，<strong>下鼻甲 (Inferior turbinate)</strong> 是一塊富含血管的肉團，負責暖化和加濕吸入的空氣。當它因為過敏或發炎而「肥厚腫大」時，就會直接堵死氣流通道。而旁邊的<strong>鼻中膈 (Septum)</strong> 如果天生或後天彎曲，更是會讓這個狹窄的通道雪上加霜。
                        </p>

                        {/* ========== 診斷流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【診斷流程】找到鼻塞的真兇</h2>
                        <p className="leading-relaxed mb-6">
                            耳鼻喉科醫師如何一步步找出讓你呼吸不順的元兇？這是一個非常強調「結構與功能」並重的除錯 (debugging) 過程：
                        </p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">鼻阻塞診斷流程圖</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1: Symptoms */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg mb-1">主觀症狀評估</div>
                                    <div className="text-sm opacity-90">單側/雙側鼻塞、清晨打噴嚏、鼻涕倒流、長期張口呼吸</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2: Physical Exam */}
                                <div className="w-full max-w-md bg-amber-50 border-2 border-amber-200 text-amber-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg mb-1">理學檢視 (前鼻鏡)</div>
                                    <div className="text-sm opacity-90">第一線評估：檢查下鼻甲是否蒼白腫脹、鼻中膈是否有明顯彎曲</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 3: Endoscopy/Imaging */}
                                <div className="w-full max-w-lg bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg mb-1">進階檢查 (依需要)</div>
                                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-3 text-sm">
                                        <div className="bg-white/60 p-2 rounded"><strong>內視鏡：</strong>評估鼻咽部、腺樣體、後鼻甲</div>
                                        <div className="bg-white/60 p-2 rounded"><strong>X光/CT：</strong>排除鼻竇炎、確認深部結構</div>
                                    </div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 4: Final Diagnosis */}
                                <div className="w-full max-w-sm bg-purple-600 text-white p-4 rounded-lg text-center shadow-md">
                                    <div className="font-bold text-lg">擬定治療策略</div>
                                    <div className="text-sm mt-1">區分「黏膜發炎」(內科) 與「結構異常」(外科)</div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 藥物治療表格 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【藥物治療】噴劑的陷阱與正確用法</h2>

                        <div className="bg-red-50 border border-red-200 p-5 rounded-xl mb-6">
                            <p className="text-sm text-red-800">
                                <strong>⚠️ 藥局血管收縮劑的危險陷阱：</strong><br />
                                許多人去藥局買的「一噴就通」鼻噴劑，成分大多是血管收縮劑 (如 Oxymetazoline)。短期使用很爽，但<strong>連續使用超過 3-5 天</strong>，會導致微血管疲乏，產生<strong>「反彈性鼻塞」</strong>(藥物性鼻炎 Rhinitis Medicamentosa)，鼻肉反而會變得更腫、完全失去彈性！
                            </p>
                        </div>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#1A2B3C] to-[#2C3E50] text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">藥物類型</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">作用機制</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優點</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">缺點與注意事項</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-3 font-bold text-blue-700">局部類固醇噴劑<br/><span className="text-xs text-gray-500">(如艾敏釋、內舒拿)</span></td>
                                        <td className="px-4 py-3">抑制局部免疫發炎反應，從根本消腫</td>
                                        <td className="px-4 py-3">長期使用安全、全身吸收率極低、無反彈風險</td>
                                        <td className="px-4 py-3 font-bold text-amber-600">見效慢！需連續使用 1-2 週才有明顯效果，不能「有塞才噴」</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-3 font-bold text-blue-700">口服抗組織胺</td>
                                        <td className="px-4 py-3">阻斷組織胺受體</td>
                                        <td className="px-4 py-3">快速緩解打噴嚏、流鼻水、發癢症狀</td>
                                        <td className="px-4 py-3">對「鼻塞」本身改善有限；一代藥物易引起嗜睡</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-3 font-bold text-blue-700">血管收縮噴劑<br/><span className="text-xs text-gray-500">(藥局常見速效型)</span></td>
                                        <td className="px-4 py-3">強制鼻黏膜血管收縮</td>
                                        <td className="px-4 py-3">短短幾分鐘內瞬間暢通</td>
                                        <td className="px-4 py-3 font-bold text-red-600">請勿使用超過5天，否則可能導致藥物性鼻炎</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 手術選項表格 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【手術治療】打通氣道的物理選擇 (局部麻醉)</h2>
                        <p className="leading-relaxed mb-6">
                            當你認真噴了三個月的類固醇神藥，卻還是覺得鼻子像被水泥封住時，那就代表問題從「軟體發炎」惡化成了「硬體結構異常」。這時候，微創手術就是最快、最直接的解法：
                        </p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-teal-800 to-teal-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">手術術式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">原理說明</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">疼痛度/出血量</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優點</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">缺點</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-teal-50/30">
                                        <td className="px-4 py-3 font-bold text-teal-700">雷射下鼻甲手術<br/><span className="text-xs font-normal text-gray-500">(Laser)</span></td>
                                        <td className="px-4 py-3">利用雷射高溫將肥厚黏膜氣化、燒灼結痂</td>
                                        <td className="px-4 py-3">低疼痛<br/>極少出血</td>
                                        <td className="px-4 py-3">門診即可做，時間極短</td>
                                        <td className="px-4 py-3">仍有復發黏膜肥厚的機會</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-teal-50/30">
                                        <td className="px-4 py-3 font-bold text-teal-700">無線電波下鼻甲手術<br/><span className="text-xs font-normal text-gray-500">(Radiofrequency)</span></td>
                                        <td className="px-4 py-3">金屬探針插入黏膜下層，發放電波使蛋白質凝固萎縮</td>
                                        <td className="px-4 py-3">低疼痛<br/>極少出血</td>
                                        <td className="px-4 py-3">保留表面黏膜功能，結痂少</td>
                                        <td className="px-4 py-3">針對骨頭肥厚者無效，仍有一定復發率</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-teal-50/30">
                                        <td className="px-4 py-3 font-bold text-teal-700">微創動力旋轉刀手術<br/><span className="text-xs font-normal text-gray-500">(Microdebrider)</span></td>
                                        <td className="px-4 py-3">劃開小切口，用旋轉刀將過多的深層組織絞碎吸出</td>
                                        <td className="px-4 py-3">中低疼痛<br/>少量出血 (需填塞)</td>
                                        <td className="px-4 py-3">切除根本組織，效果最持久，復發率低</td>
                                        <td className="px-4 py-3">術後 1-2 天需塞止血棉條，恢復期略長</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-teal-50/30">
                                        <td className="px-4 py-3 font-bold text-teal-700">鼻中膈彎曲全方位矯正<br/><span className="text-xs font-normal text-gray-500">(Septoplasty)</span></td>
                                        <td className="px-4 py-3">掀開黏膜，移除或削平彎曲不平整的軟/硬骨</td>
                                        <td className="px-4 py-3">中度疼痛<br/>中量出血</td>
                                        <td className="px-4 py-3">徹底解決結構異常的黃金標準</td>
                                        <td className="px-4 py-3">手術時間較長，通常與下鼻甲手術合併進行</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 陳醫師的臨床建議 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床處方箋】</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8">
                            <p className="mb-4 text-xl font-bold text-amber-800">給忙碌工程師的 3 個破關小技巧：</p>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li className="pl-2">
                                    <strong className="text-amber-900">類固醇噴劑是長線投資，不是短線炒作：</strong>千萬不要像點眼藥水一樣「卡卡的時候才噴」。類固醇噴劑需要<strong>每天定時噴</strong>，持續累積約兩週以上，才能真正在黏膜深處發揮強大的抗發炎效果！
                                </li>
                                <li className="pl-2">
                                    <strong className="text-amber-900">該動刀就別拖延：</strong>如果用藥無效，每天早上起床都覺得比沒睡還累，請果斷考慮局部麻醉微創手術。現在的各式鼻塞手術都有手術時間短、出血少，對結構性阻塞的改善的優勢，對於藥物使用失敗以及結構(硬體)上有問題的工程師們來說這絕對是 ROI (投資報酬率) 最高的健康決策。
                                </li>
                                <li className="pl-2">
                                    <strong className="text-amber-900">遠離藥局速效噴劑：</strong>把它當成萬靈丹，最後只會換來無藥可醫的藥物性鼻炎。
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-03-22-nasal-congestion-engineers" />
            </div>

            <Sidebar />
        </div>
    );
}
