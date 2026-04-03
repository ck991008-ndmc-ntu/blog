"use client";

import { BookOpen, Stethoscope, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { getAllTags, getAllCategories } from "@/data/posts";

const SYMPTOM_GROUPS = [
    { name: "鼻部與呼吸", tags: ["鼻塞", "流鼻水", "打噴嚏", "呼吸不順", "黃鼻涕", "嗅覺異常", "臉部脹痛"] },
    { name: "睡眠與精神", tags: ["打呼", "白天嗜睡", "睡眠中斷", "越睡越累", "慢性疲勞", "總是睡不飽", "無力", "精神不濟"] },
    { name: "咳嗽與喉部", tags: ["慢性咳嗽", "久咳不癒", "喉嚨卡卡", "喉嚨異物感", "吞嚥卡卡"] },
    { name: "頸部與腹部", tags: ["頸部腫塊", "脖子有硬塊", "腹部不適"] },
    { name: "預防與健檢", tags: ["無症狀", "預防醫學", "健康檢查", "全身健檢"] },
];

export default function Sidebar() {
    const allTags = getAllTags().map(t => t.tag);
    
    // 分類並過濾出確實有文章的標籤
    const groupedTags = SYMPTOM_GROUPS.map(group => ({
        ...group,
        tags: group.tags.filter(tag => allTags.includes(tag))
    })).filter(group => group.tags.length > 0);

    // 處理尚未分類到的其他標籤，自動歸類到「其他症狀」
    const mappedTags = new Set(SYMPTOM_GROUPS.flatMap(g => g.tags));
    const otherTags = allTags.filter(tag => !mappedTags.has(tag));
    
    if (otherTags.length > 0) {
        groupedTags.push({ name: "其他症狀", tags: otherTags });
    }

    return (
        <aside className="w-full md:w-80 shrink-0 space-y-8">
            {/* Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="text-[#1A2B3C] w-6 h-6" />
                    <h3 className="font-bold text-[#1A2B3C] text-lg">文章分類</h3>
                </div>
                <ul className="space-y-3">
                    {getAllCategories().map((topic) => (
                        <li key={topic.name}>
                            <Link href={`/categories/${topic.name}`} className="flex justify-between items-center group">
                                <span className="text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600" />
                                    {topic.name}
                                </span>
                                <span className="text-xs font-mono bg-gray-50 text-gray-500 px-2 py-1 rounded">
                                    {topic.count}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Symptom Tags */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-[#1A2B3C] w-6 h-6" />
                    <h3 className="font-bold text-[#1A2B3C] text-lg">症狀導向標籤</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                    透過您的症狀，快速尋找相關的診斷與治療指引：
                </p>
                <div className="space-y-6">
                    {groupedTags.map(group => (
                        <div key={group.name} className="space-y-3">
                            <h4 className="text-sm font-bold text-[#1A2B3C] border-b border-gray-100 pb-2 flex items-center">
                                <span className="w-1.5 h-4 bg-blue-500 rounded-full mr-2"></span>
                                {group.name}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {group.tags.map(tag => (
                                    <Link key={tag} href={`/tags/${tag}`} className="text-xs px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#1A2B3C] rounded-lg transition-colors font-medium">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
                    href="mailto:jlchen.cgmh@gmail.com"
                    className="inline-block w-full py-2 px-4 bg-white text-[#1A2B3C] font-bold rounded shadow-sm border border-gray-200 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                    寫信給陳醫師
                </a>
            </div>
        </aside>
    );
}
