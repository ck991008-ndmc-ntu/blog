"use client";

import { BookOpen, Stethoscope, ChevronRight, Mail } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-full md:w-80 shrink-0 space-y-8">
            {/* Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="text-[#1A2B3C] w-6 h-6" />
                    <h3 className="font-bold text-[#1A2B3C] text-lg">文章分類</h3>
                </div>
                <ul className="space-y-3">
                    {[
                        { name: "耳鼻喉專科", count: 8 },
                        { name: "內科疑難雜症", count: 5 },
                        { name: "流行病學與預防醫學", count: 3 },
                        { name: "診斷邏輯", count: 6 },
                    ].map((topic) => (
                        <li key={topic.name}>
                            <a href="#" className="flex justify-between items-center group">
                                <span className="text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600" />
                                    {topic.name}
                                </span>
                                <span className="text-xs font-mono bg-gray-50 text-gray-500 px-2 py-1 rounded">
                                    {topic.count}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Disease Tags */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-[#1A2B3C] w-6 h-6" />
                    <h3 className="font-bold text-[#1A2B3C] text-lg">疾病快篩標籤</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    快速尋找特定疾病的診斷與最新治療指引：
                </p>
                <div className="flex flex-wrap gap-2">
                    {["甲狀腺結節", "慢性鼻竇炎", "睡眠呼吸中止症", "胃食道逆流", "慢性咳嗽", "眩暈", "突發性耳聾"].map((tag) => (
                        <a key={tag} href={`#${tag}`} className="text-xs px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#1A2B3C] rounded-full transition-colors">
                            #{tag}
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 rounded-xl shadow-sm p-6 text-gray-800 text-center border border-blue-100">
                <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-bold text-lg mb-2 text-[#1A2B3C]">醫療諮詢與交流</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    有任何耳鼻喉科或內科相關問題？或是對於流行病學數據有興趣討論？歡迎來信指教。
                </p>
                <a
                    href="mailto:contact@example.com"
                    className="inline-block w-full py-2 px-4 bg-white text-[#1A2B3C] font-bold rounded shadow-sm border border-gray-200 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                    寫信給陳醫師
                </a>
            </div>
        </aside>
    );
}
