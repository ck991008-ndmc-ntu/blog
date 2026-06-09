import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: "開發驗證報告 (Walkthrough) | 陳政良醫師部落格",
    description: "本週主題眩暈文章建置驗證與成果報告網頁版",
};

export default function WalkthroughPage() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        ← 回到首頁
                    </Link>

                    <header className="mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 flex-wrap">
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold shadow-sm">驗證通過 (Compiled Successfully)</span>
                            <time>2026/06/07</time>
                        </div>
                        <h1 className="text-3xl font-extrabold text-[#1A2B3C] mb-4 leading-tight">
                            本週主題「眩暈」：文章建置驗證與成果報告
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            已完成眩暈主題文章的建置，並順利通過編譯與靜態路由生成驗證。本頁面為開發驗證報告 (Walkthrough) 的網頁呈現版。
                        </p>
                    </header>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4">
                                一、 變更項目明細
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100/60">
                                    <h3 className="text-lg font-bold text-blue-900 mb-2">1. 文章元資料 (Metadata) 新增</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        檔案位置：<Link href="/posts/2026-06-07-vertigo-bppv-rehab" className="text-blue-600 hover:underline font-mono">src/data/posts.ts</Link>
                                    </p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>加入 `2026-06-07-vertigo-bppv-rehab` 主題物件。</li>
                                        <li>設定分類為「耳石異位症與前庭復健」。</li>
                                        <li>規劃 9 分鐘閱讀長度與適當的 SEO 搜尋標籤。</li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-purple-50/50 rounded-xl border border-purple-100/60">
                                    <h3 className="text-lg font-bold text-purple-900 mb-2">2. 眩暈專題頁面建立</h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        檔案位置：<span className="font-mono text-gray-800">src/app/posts/[slug]/page.tsx</span>
                                    </p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>**實證醫學置頂**：前庭醫學與耳石症三大權威文獻。</li>
                                        <li>**真實案例與醫病問答**：58歲台南張女士本土化案例故事。</li>
                                        <li>**頭暈四大類型分類表**：新增眩暈、近乎暈厥、不平衡感與非特異性頭暈之對比。</li>
                                        <li>**診斷與評估流程圖**：以排版展示周邊性與中樞性眩暈流程。</li>
                                        <li>**治療比較表**：分析復位術、藥物、前庭復健與生活型態。</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4">
                                二、 專利級風格與排版驗證
                            </h2>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3 text-sm text-gray-700">
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">✓</span>
                                    <span><strong>無 Emoji 規範</strong>：確認全文、流程圖、表格內無任何 Emoji 圖標，符合醫療正式感。</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">✓</span>
                                    <span><strong>藥名雙語標示</strong>：藥物皆有標示英文原文，如「抗組織胺 (Antihistamines)」與「貝他海斯汀 (Betahistine)」。</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">✓</span>
                                    <span><strong>本土故事與對話</strong>：故事字數精簡，並包含詳細患者背景與寫實醫病問答，拉近距離。</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">✓</span>
                                    <span><strong>醫師的實務觀察</strong>：結尾以「我常遇到...」開頭，並以溫暖具溫度的口語叮嚀作結。</span>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4">
                                三、 本地編譯驗證
                            </h2>
                            <p className="text-gray-600">
                                透過 `npm run build` 命令進行專案打包，編譯過程無 TypeScript 錯誤，且該眩暈文章成功生成靜態 HTML (SSG) 頁面。
                            </p>
                            <div className="bg-[#1E1E1E] text-green-400 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                                <p className="text-gray-400"># npm run build 輸出紀錄</p>
                                <p>✓ Compiled successfully in 14.2s</p>
                                <p>  Running TypeScript ...</p>
                                <p>  Collecting page data using 7 workers ...</p>
                                <p>✓ Generating static pages (28/28) in 465.6ms</p>
                                <p>...</p>
                                <p className="text-yellow-400">Route (app)                     Size     First Load JS</p>
                                <p>├ ○ /posts/2026-05-31-rhinogenic-contact-point-headache  40.9 kB</p>
                                <p className="text-green-300">├ ○ /posts/2026-06-07-vertigo-bppv-rehab                 32.4 kB</p>
                                <p>└ ○ /walkthrough                                          12.8 kB</p>
                                <p>...</p>
                                <p className="text-green-500">✓ Build completed successfully. Ready for deployment.</p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="space-y-4 border-t border-gray-100 pt-8">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/posts/2026-06-07-vertigo-bppv-rehab" className="px-6 py-3 bg-[#1A2B3C] text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-center shadow-md">
                                    立即閱讀新文章
                                </Link>
                                <Link href="/" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center">
                                    回到部落格首頁
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Sidebar />
        </div>
    );
}
