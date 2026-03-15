import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPostsByTag, posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "工程師必讀：睡眠呼吸中止症的藥物與手術治療指引初解",
    description: "整合 AASM 2025、ERS 最新指引，為台灣辛苦的工程師族群解析阻塞性睡眠呼吸中止症 (OSA) 的診斷流程、藥物治療選項（含台灣可用藥物）及手術治療策略。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-15-osa-treatment");

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <ArticleJsonLd post={currentPost} />
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
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            你是不是常常打呼到被室友踢醒、白天開會卻頻頻打瞌睡？別再以為只是「太累」了——你可能患有<strong className="text-[#1A2B3C]">阻塞性睡眠呼吸中止症 (OSA)</strong>，這是一個會影響心血管、代謝、甚至認知功能的嚴重睡眠障礙。本文整合最新權威指引，帶你一次看懂診斷到治療的完整路徑。
                        </p>
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.5664/jcsm.9592" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        AASM (2025). Clinical Practice Guideline for Surgical Referral for Adults with OSA. <em>Journal of Clinical Sleep Medicine.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">

                        {/* ========== 引言：為什麼工程師要注意 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【前言】為什麼「科技業工程師」更該重視 OSA？</h2>
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                台灣的科技產業以高工時與高壓聞名全球。根據統計，<strong>久坐、肥胖、壓力大、作息不規律</strong>是阻塞性睡眠呼吸中止症 (Obstructive Sleep Apnea, OSA) 的高風險因子——而這些正好完美描述了許多工程師的日常。
                            </p>
                            <p className="leading-relaxed mb-4">
                                OSA 不只是「打呼很大聲」這麼簡單。未經治療的中重度 OSA 會導致：
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800 mb-2">認知功能下降</p>
                                    <p className="text-sm">日間嗜睡 (EDS)、注意力不集中、記憶力減退——影響 code review 品質與除錯效率</p>
                                </div>
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800 mb-2">心血管風險倍增</p>
                                    <p className="text-sm">高血壓、心律不整、中風風險上升 2-4 倍</p>
                                </div>
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800 mb-2">代謝症候群</p>
                                    <p className="text-sm">胰島素阻抗增加，第二型糖尿病風險上升</p>
                                </div>
                                <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
                                    <p className="font-bold text-indigo-800 mb-2">交通事故</p>
                                    <p className="text-sm">OSA 患者交通事故風險為一般人的 2-7 倍</p>
                                </div>
                            </div>
                        </div>

                        {/* ========== 診斷流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【診斷流程】OSA 的標準診斷路徑</h2>
                        <p className="leading-relaxed mb-6">
                            根據 <strong>AASM 2021 診斷指引</strong>，成人 OSA 的標準診斷包括臨床評估與睡眠檢查兩大部分。以下流程圖整合了從初步懷疑到確立診斷的完整路徑：
                        </p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">OSA 診斷流程圖 (AASM 2021)</h3>

                            <div className="flex flex-col items-center max-w-3xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1: Clinical Suspicion */}
                                <div className="w-full max-w-md bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-lg text-center shadow-sm relative z-10 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1">臨床懷疑 OSA</div>
                                    <div className="text-sm opacity-90">打鼾、目擊呼吸中止、白天嗜睡 (ESS ≥ 10)、肥胖 (BMI ≥ 30)、頸圍粗 (男 ≥ 43cm / 女 ≥ 38cm)</div>
                                </div>

                                <div className="h-6 w-0.5 bg-gray-300 relative"></div>

                                {/* Step 2: Screening tools */}
                                <div className="w-full max-w-md bg-amber-50 border-2 border-amber-200 text-amber-800 p-4 rounded-lg text-center shadow-sm relative z-10">
                                    <div className="font-bold text-lg mb-1">篩檢量表評估</div>
                                    <div className="text-sm opacity-90">STOP-Bang ≥ 3 分 / Epworth 嗜睡量表 (ESS) / Berlin 問卷</div>
                                </div>

                                <div className="h-6 w-0.5 bg-gray-300 relative"></div>

                                {/* Step 3: Split into PSG vs HSAT */}
                                <div className="w-2/3 h-0.5 bg-gray-300 relative"></div>

                                <div className="w-full flex justify-between relative mt-0 px-4 md:px-8">
                                    {/* Left: PSG */}
                                    <div className="flex flex-col items-center w-[45%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                                            <div className="font-bold">第一型 PSG</div>
                                            <div className="text-xs opacity-90 mt-1">醫院實驗室多頻道睡眠檢查</div>
                                            <div className="text-xs mt-1">黃金標準 (Gold Standard)</div>
                                        </div>
                                        <div className="h-4 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-white border border-gray-200 text-gray-700 p-2 rounded-lg text-center text-xs">
                                            適用：疑似合併其他睡眠障礙、心肺疾病、或 HSAT 結果不確定
                                        </div>
                                    </div>

                                    {/* Right: HSAT */}
                                    <div className="flex flex-col items-center w-[45%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm relative z-10">
                                            <div className="font-bold">居家睡眠檢查 (HSAT)</div>
                                            <div className="text-xs opacity-90 mt-1">第三/四型攜帶式檢查</div>
                                            <div className="text-xs mt-1">方便、在宅可用</div>
                                        </div>
                                        <div className="h-4 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-white border border-gray-200 text-gray-700 p-2 rounded-lg text-center text-xs">
                                            適用：高度懷疑單純 OSA 且無嚴重共病
                                        </div>
                                    </div>
                                </div>

                                {/* Merge */}
                                <div className="w-2/3 h-10 border-l-2 border-r-2 border-b-2 border-gray-300 rounded-b-xl relative mt-0">
                                    <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-gray-300 -translate-x-1/2 translate-y-1/2">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                    </div>
                                </div>
                                <div className="h-9 w-0.5 relative"></div>

                                {/* AHI Result */}
                                <div className="w-full max-w-md bg-blue-600 text-white p-4 rounded-lg text-center shadow-lg relative z-10 overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="relative font-bold text-lg">AHI 報告判讀</div>
                                    <div className="relative text-sm mt-2 space-y-1">
                                        <div>輕度：AHI 5-14 次/hr</div>
                                        <div>中度：AHI 15-29 次/hr</div>
                                        <div>重度：AHI ≥ 30 次/hr</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-8">
                            <p className="text-sm text-amber-800">
                                <strong>工程師小提醒：</strong>AHI (Apnea-Hypopnea Index) 就像系統的 error rate。AHI 5 以上就代表每小時呼吸中止超過 5 次，等於你的大腦每小時被強制 interrupt 超過 5 次——sleep() 函數根本沒在運作！
                            </p>
                        </div>

                        {/* ========== 治療選項流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【治療決策】OSA 治療選項決策流程</h2>
                        <p className="leading-relaxed mb-6">
                            下圖整合 <strong>AASM 2025 手術轉介指引</strong>與 <strong>ERS Non-CPAP 治療指引</strong>，呈現從確立 OSA 診斷後的完整治療決策樹：
                        </p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-50 rounded-br-full -z-10 opacity-50"></div>
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">OSA 治療決策流程圖</h3>

                            <div className="flex flex-col items-center max-w-4xl mx-auto space-y-0 font-medium z-10">
                                {/* Start: OSA Confirmed */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm relative z-10 transition-transform hover:scale-[1.02]">
                                    <div className="font-bold text-lg mb-1">確診 OSA</div>
                                    <div className="text-sm opacity-90">依 AHI 嚴重度分級</div>
                                </div>

                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* All patients: lifestyle + CPAP */}
                                <div className="w-full max-w-lg bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg mb-1">所有患者：第一線治療</div>
                                    <div className="text-sm">① 生活型態調整（減重、戒酒、側睡、運動）</div>
                                    <div className="text-sm">② CPAP 陽壓呼吸器（中重度 OSA 黃金標準）</div>
                                </div>

                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Decision: CPAP tolerance */}
                                <div className="w-full max-w-sm bg-amber-50 border-2 border-amber-300 text-amber-800 p-4 rounded-xl text-center shadow-sm" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                                    <div className="font-bold py-6">CPAP 是否可接受/耐受？</div>
                                </div>

                                <div className="h-4 w-0.5 bg-gray-300"></div>
                                <div className="w-2/3 h-0.5 bg-gray-300 relative"></div>

                                <div className="w-full flex justify-between relative mt-0 px-2 md:px-6">
                                    {/* Left: CPAP OK */}
                                    <div className="flex flex-col items-center w-[30%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm">
                                            <div className="font-bold text-sm">可耐受</div>
                                            <div className="text-xs mt-1">持續 CPAP + 定期追蹤</div>
                                        </div>
                                    </div>

                                    {/* Middle: Residual EDS */}
                                    <div className="flex flex-col items-center w-[30%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-purple-50 border-2 border-purple-200 text-purple-800 p-3 rounded-lg text-center shadow-sm">
                                            <div className="font-bold text-sm">殘餘嗜睡</div>
                                            <div className="text-xs mt-1">CPAP 使用中仍有日間嗜睡</div>
                                        </div>
                                        <div className="h-4 w-0.5 bg-gray-300"></div>
                                        <div className="w-full bg-purple-100 border border-purple-200 text-purple-800 p-2 rounded-lg text-center text-xs">
                                            考慮輔助藥物：Modafinil / Pitolisant
                                        </div>
                                    </div>

                                    {/* Right: CPAP intolerant */}
                                    <div className="flex flex-col items-center w-[30%]">
                                        <div className="h-6 w-0.5 bg-gray-300 relative">
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-300"></div>
                                        </div>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm">
                                            <div className="font-bold text-sm">無法耐受 CPAP</div>
                                            <div className="text-xs mt-1">轉介替代治療</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom row for CPAP intolerant options */}
                                <div className="h-4 w-0.5 bg-gray-300"></div>
                                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 mt-2 px-2">
                                    <div className="bg-orange-50 border border-orange-200 text-orange-800 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="font-bold text-sm mb-1">口腔矯正器</div>
                                        <div className="text-xs">MAD (下顎前移裝置)</div>
                                        <div className="text-xs opacity-75 mt-1">輕中度 OSA 首選替代</div>
                                    </div>
                                    <div className="bg-teal-50 border border-teal-200 text-teal-800 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="font-bold text-sm mb-1">藥物治療</div>
                                        <div className="text-xs">Tirzepatide (肥胖型)</div>
                                        <div className="text-xs opacity-75 mt-1">新興選項，見藥物簡表</div>
                                    </div>
                                    <div className="bg-pink-50 border border-pink-200 text-pink-800 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="font-bold text-sm mb-1">上呼吸道手術</div>
                                        <div className="text-xs">UPPP / MMA / HNS</div>
                                        <div className="text-xs opacity-75 mt-1">BMI {"<"} 40，見手術簡表</div>
                                    </div>
                                    <div className="bg-sky-50 border border-sky-200 text-sky-800 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="font-bold text-sm mb-1">減重手術</div>
                                        <div className="text-xs">BMI ≥ 35 考慮</div>
                                        <div className="text-xs opacity-75 mt-1">AASM 強烈建議轉介</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 藥物治療簡表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【藥物治療】台灣可用藥物簡表</h2>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 mb-6">
                            <p className="text-sm text-blue-800 leading-relaxed">
                                <strong>重要說明：</strong>目前尚無單一藥物被 AASM 強烈推薦作為 OSA 的第一線治療。藥物治療主要扮演<strong>輔助角色</strong>：針對特定共病（如肥胖、殘餘嗜睡）或特定病理機轉進行調節。以下簡表列出目前有實證支持且台灣可取得的藥物。
                            </p>
                        </div>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#1A2B3C] to-[#2C3E50] text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">藥物名稱</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">台灣商品名</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">機轉分類</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用情境</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">實證等級</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">健保給付</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-blue-700">Tirzepatide</td>
                                        <td className="px-4 py-3">猛健樂 (Mounjaro)</td>
                                        <td className="px-4 py-3">GIP/GLP-1 受體促效劑</td>
                                        <td className="px-4 py-3">肥胖型 OSA（BMI ≥ 30）<br /><span className="text-xs text-gray-500">SURMOUNT-OSA 試驗顯示 AHI 降幅約 50-60%</span></td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">RCT</td>
                                        <td className="px-4 py-3 text-gray-700">限 T2DM，OSA 自費</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-blue-700">Modafinil</td>
                                        <td className="px-4 py-3">普衛醒 (Provigil)</td>
                                        <td className="px-4 py-3">中樞神經促醒劑</td>
                                        <td className="px-4 py-3">CPAP 使用中仍有殘餘日間嗜睡 (Residual EDS)<br /><span className="text-xs text-gray-500">不降低 AHI，僅改善嗜睡</span></td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">RCT</td>
                                        <td className="px-4 py-3 text-gray-700">管制藥品，限嗜睡症</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-blue-700">Acetazolamide</td>
                                        <td className="px-4 py-3">丹木斯 (Diamox)</td>
                                        <td className="px-4 py-3">碳酸酐酶抑制劑</td>
                                        <td className="px-4 py-3">合併中樞型或高海拔相關睡眠呼吸中止<br /><span className="text-xs text-gray-500">可降低 AHI 約 50%（小型研究）</span></td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">小型 RCT</td>
                                        <td className="px-4 py-3 text-gray-700">限青光眼／癲癇適應症</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-blue-700">Atomoxetine + Oxybutynin</td>
                                        <td className="px-4 py-3">思銳 + 歐舒</td>
                                        <td className="px-4 py-3">NRI + 抗膽鹼複方</td>
                                        <td className="px-4 py-3">研究中的 OSA 病理機轉靶向治療<br /><span className="text-xs text-gray-500">提高上呼吸道肌張力 + 降低 loop gain</span></td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">小型 RCT</td>
                                        <td className="px-4 py-3 text-gray-700">均為仿單外使用</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-blue-700">鼻用類固醇</td>
                                        <td className="px-4 py-3">內舒拿 (Nasonex) 等</td>
                                        <td className="px-4 py-3">鼻腔抗發炎</td>
                                        <td className="px-4 py-3">合併過敏性鼻炎、鼻塞之 OSA<br /><span className="text-xs text-gray-500">改善鼻腔通暢性，可輔助降低 CPAP 壓力</span></td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">Meta-analysis</td>
                                        <td className="px-4 py-3 text-gray-700">健保給付（鼻炎適應症）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-red-50 border border-red-200 p-5 rounded-xl my-8">
                            <p className="text-sm text-red-800">
                                <strong>特別注意：</strong>上述藥物多為<strong>仿單外使用 (Off-label Use)</strong>，使用前務必與專科醫師充分討論利弊。Tirzepatide 已於 2024 年底獲 FDA 核准用於肥胖成人 OSA 適應症，為首個直接治療 OSA 的藥物，但台灣健保尚未納入 OSA 適應症給付。
                            </p>
                        </div>


                        {/* ========== 手術治療簡表 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【手術治療】術式選項簡表</h2>

                        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-xl border border-pink-100 mb-6">
                            <p className="text-sm text-pink-800 leading-relaxed">
                                <strong>手術轉介時機（AASM 2025 指引）：</strong>強烈建議對 <strong>BMI {"<"} 40</strong> 且無法耐受 CPAP 的成人 OSA 患者，轉介至睡眠外科醫師進行評估。手術前通常會先以 <strong>DISE（藥物誘導睡眠內視鏡）</strong>評估上呼吸道塌陷的位置與型態，以制定個人化手術方案。
                            </p>
                        </div>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#1A2B3C] to-[#2C3E50] text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">手術名稱</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">作用位置</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">原理</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用對象</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">成功率</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">備註</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">UPPP 懸壅垂顎咽成型術</td>
                                        <td className="px-4 py-3">軟顎/懸壅垂/扁桃腺</td>
                                        <td className="px-4 py-3">切除/重塑口咽部多餘組織，擴大氣道</td>
                                        <td className="px-4 py-3">口咽部塌陷為主的患者</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">40-60%</td>
                                        <td className="px-4 py-3 text-xs">台灣最常施行的 OSA 手術；改良式（如 expansion sphincter pharyngoplasty）效果更佳</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">MMA 上下顎前移術</td>
                                        <td className="px-4 py-3">上顎骨 + 下顎骨</td>
                                        <td className="px-4 py-3">骨骼前移擴大整體咽腔空間</td>
                                        <td className="px-4 py-3">顎骨後縮型、CPAP 與其他手術失敗者</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">85-90%</td>
                                        <td className="px-4 py-3 text-xs">成功率最高的 OSA 手術；侵入性大，術後恢復期 4-6 週，需正顎外科執行</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">HNS 舌下神經刺激術</td>
                                        <td className="px-4 py-3">舌下神經 (Cranial Nerve XII)</td>
                                        <td className="px-4 py-3">植入電極刺激舌肌前突，防止舌根塌陷</td>
                                        <td className="px-4 py-3">AHI 15-100、BMI ≤ 40、DISE 排除完全環形塌陷</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">70-75%</td>
                                        <td className="px-4 py-3 text-xs">Inspire 裝置獲 FDA 核准；台灣部分醫學中心可施行，自費為主</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">扁桃腺切除 ± 腺樣體切除</td>
                                        <td className="px-4 py-3">口咽/鼻咽</td>
                                        <td className="px-4 py-3">移除肥大的扁桃腺/腺樣體</td>
                                        <td className="px-4 py-3">扁桃腺/腺樣體肥大明顯者（兒童 OSA 首選）</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">70-80%</td>
                                        <td className="px-4 py-3 text-xs">健保給付；成人若同時施行 UPPP，效果更佳</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">鼻中隔矯正 / 下鼻甲手術</td>
                                        <td className="px-4 py-3">鼻腔</td>
                                        <td className="px-4 py-3">改善鼻腔通暢度</td>
                                        <td className="px-4 py-3">鼻中隔彎曲、下鼻甲肥厚導致鼻阻塞</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">輔助性</td>
                                        <td className="px-4 py-3 text-xs">健保給付；單獨無法治癒 OSA，但可改善 CPAP 耐受度與睡眠品質</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-pink-50/30 transition-colors">
                                        <td className="px-4 py-3 font-bold text-pink-700">減重手術 (Bariatric Surgery)</td>
                                        <td className="px-4 py-3">胃腸道</td>
                                        <td className="px-4 py-3">減少食物攝取/吸收，大幅減重</td>
                                        <td className="px-4 py-3">BMI ≥ 35 且無法耐受 CPAP</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">75-85%</td>
                                        <td className="px-4 py-3 text-xs">AASM 強烈建議轉介；可同時改善代謝症候群、氧飽和度</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl my-8">
                            <p className="text-sm text-blue-800">
                                <strong>術前評估亮點：DISE（藥物誘導睡眠內視鏡）</strong><br />
                                在決定手術方式之前，睡眠外科醫師會利用 DISE 讓患者在藥物誘導的睡眠狀態下，以纖維內視鏡觀察上呼吸道各個位置（軟顎、咽側壁、舌根、會厭）的塌陷模式。這就像是 debug 前先用 profiler 找到最慢的那段 code 一樣——找到真正的阻塞瓶頸，才能精準修復。
                            </p>
                        </div>


                        {/* ========== 陳醫師臨床意見 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】給工程師的務實建議</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700">
                                身為也在醫院輪班的醫師，我完全理解那種「睡眠被壓縮到只剩基本需求」的感受。但如果你的枕邊人經常提到你「打呼到突然沒聲音」，或者你白天不管睡多久都還是極度疲倦、開會簡報時眼皮總是不受控制地下沉——這些都是身體在發出 critical alert。
                                <br /><br />
                                我的建議是：<strong>先做篩檢</strong>。現在很多醫院和診所都有居家睡眠檢查 (HSAT) 服務，不用住院、大約三千多元就能在家完成，連掛號帶報告一週搞定。如果 AHI 確實偏高，再來跟睡眠專科醫師討論 CPAP 或其他選項，完全不需要一開始就想到手術。
                                <br /><br />
                                至於藥物，我特別想提一下 <strong>Tirzepatide</strong>——它在 2024 年 SURMOUNT-OSA 試驗中展現出令人驚豔的成果，對肥胖合併 OSA 的患者可以一箭雙鵰：減重 + 降 AHI。但目前台灣健保僅給付糖尿病適應症，用於 OSA 需自費。如果你恰好也有高 BMI 和代謝問題，這是一個值得和你的醫師討論的新武器。
                            </p>
                        </div>


                        {/* ========== Take Home Message ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【Take Home Message】</h2>
                        <ul className="space-y-4 font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100 list-none pl-6 pr-6">
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> OSA 不是打呼這麼簡單——它會增加心血管疾病、代謝症候群與交通事故的風險。久坐、肥胖、作息不規律的工程師是高危險群。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 診斷靠 PSG 或 HSAT 睡眠檢查，以 AHI 分級嚴重度。CPAP 仍是中重度 OSA 的黃金標準治療。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 藥物治療以輔助為主：Tirzepatide 是首個獲 FDA 核准的 OSA 藥物（肥胖型），Modafinil 可處理殘餘嗜睡。但多數藥物在台灣屬仿單外使用。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> CPAP 無法耐受且 BMI {"<"} 40 的患者，AASM 強烈建議轉介睡眠外科手術評估。MMA 成功率最高但侵入性大；HNS 是微創新選擇。</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600">•</span> 如果你懷疑自己可能有 OSA，第一步不是 Google，是去做一個居家睡眠檢查。及早診斷，才是最好的 hotfix。</li>
                        </ul>

                    </article>
                </div>
                <PostNavigation currentSlug="2026-03-15-osa-treatment" />
            </div>

            <Sidebar />
        </div>
    );
}
