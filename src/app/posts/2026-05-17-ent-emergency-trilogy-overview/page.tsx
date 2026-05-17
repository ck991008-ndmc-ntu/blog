import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "常見耳鼻喉科急診三部曲：流鼻血、魚刺卡喉嚨、耳朵異物怎麼辦？",
    description: "半夜流鼻血不止、魚刺卡喉嚨、耳朵跑進蟲怎麼辦？本篇為耳鼻喉科急診三大常見問題的總覽懶人包，幫你快速掌握正確急救知識、避開危險偏方與判斷就醫時機。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-05-17-ent-emergency-trilogy-overview");

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
                            <p className="text-sm mt-1">本系列文章之實證醫學來源，詳見各獨立篇章內之引註。</p>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 開場與導論 ========== */}
                        <p className="leading-relaxed mb-6">
                            晚上 11 點，當大多數人正準備進入夢鄉時，醫院的急診室往往才正要開始忙碌。作為一名耳鼻喉科醫師，如果在這個時間點接到急診室打來的會診電話，我腦海中通常會立刻浮現三個最常見的畫面：
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，這裡有一位阿伯流鼻血流了半小時停不下來，血壓飆到 190。」<br/>
                            「陳醫師，有一位小姐晚上聚餐吃魚，現在吞口水都會痛到流眼淚，懷疑卡魚刺了。」<br/>
                            「陳醫師，一個四歲小弟把玩具珠子塞進耳朵裡，家長剛剛用夾子夾結果流血了，小弟現在大哭不讓任何人碰。」
                        </p>
                        <p className="leading-relaxed mb-6">
                            這三種狀況，可以說是耳鼻喉科急診的「經典三部曲」。它們通常不會立刻威脅生命，但在當下，卻會帶給患者極大的恐慌與痛苦。更讓人遺憾的是，在我們到達之前，許多患者或家屬因為焦慮，使用了錯誤的「民間偏方」來自行急救，結果反而讓原本一個小動作就能解決的問題，變成了需要進開刀房的大災難。
                        </p>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8 mt-10">
                            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4 border-b border-blue-200 pb-2">為什麼會寫這個系列？</h2>
                            <p className="leading-relaxed mb-4">
                                面對這些突如其來的耳鼻喉科急症，人們往往因為慌亂而做錯決定。仰頭止鼻血、吞白飯把魚刺壓下去、用棉花棒挖耳朵裡的蟲……這些深植人心的錯誤觀念，幾乎每天都在各地的急診室裡重演。
                            </p>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                我希望透過這三篇文章，有系統地幫大家建立一個「居家急症知識庫」。讓你知道：什麼時候該冷靜處理、什麼動作絕對不能做，以及什麼時候必須立刻衝急診。
                            </p>
                        </div>

                        {/* ========== 系列文章導覽 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">系列文章快速導覽：點擊標題深入閱讀</h2>
                        
                        <div className="space-y-6 mb-12">
                            {/* 導覽卡片 1 */}
                            <Link href="/posts/2026-05-17-epistaxis-first-aid-ent" className="block group">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                                    <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 mb-2 transition-colors">
                                        首部曲：半夜流鼻血怎麼辦？正確止血與就醫時機
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm">仰頭、塞衛生紙為什麼很危險？帶你破解流鼻血的迷思，學習正確的「捏鼻翼加壓法」，並了解醫師如何幫你找尋出血點並徹底止血。</p>
                                    <span className="text-blue-500 text-sm font-medium">閱讀完整文章 →</span>
                                </div>
                            </Link>

                            {/* 導覽卡片 2 */}
                            <Link href="/posts/2026-05-17-fish-bone-impaction-throat" className="block group">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                                    <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 mb-2 transition-colors">
                                        二部曲：魚刺卡喉嚨可以吞飯團嗎？這些情況不要硬撐
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm">喝醋化魚骨、吞白飯把魚刺往下壓，這些行為可能會導致食道穿孔的致命危機！這篇文章教你如何判斷危險警訊，以及耳鼻喉科醫師的「拆彈」過程。</p>
                                    <span className="text-blue-500 text-sm font-medium">閱讀完整文章 →</span>
                                </div>
                            </Link>

                            {/* 導覽卡片 3 */}
                            <Link href="/posts/2026-05-17-ear-canal-foreign-body-insect" className="block group">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                                    <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 mb-2 transition-colors">
                                        三部曲：耳朵跑進蟲或異物怎麼辦？別再用棉花棒越推越深
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm">半夜活生生的蟲子跑進耳朵，或是小孩把BB彈塞進耳道，千萬別自己拿鑷子亂挖。本篇解析不同異物的正確處理方式，保護你和孩子的耳膜不受二次傷害。</p>
                                    <span className="text-blue-500 text-sm font-medium">閱讀完整文章 →</span>
                                </div>
                            </Link>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我認為，面對醫療急症，沒有什麼比「建立正確的觀念」更像一道護身符了。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            這三種耳鼻喉科常見的急診狀況，大多數都不一定是大病，只要初步處理得當，後續的復原都會非常順利。但老實說，在門診或急診室裡，我們最怕遇到的不是難處理的病情，而是患者或家屬因為缺乏正確觀念，擅自採取了會造成「二次傷害」的處置。錯誤的處理，往往會讓小問題變成大麻煩，甚至留下不可逆的後遺症。
                        </p>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            有時候，「什麼都不做、保持冷靜趕快看醫生」，反而比亂試偏方還要安全得多。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>耳鼻喉科急診最常見的三大狀況：流鼻血、卡魚刺、耳道進異物。</li>
                                <li><strong>最大的共同地雷就是「自己亂處理」</strong>：仰頭止鼻血、吞飯壓魚刺、用棉花棒或鑷子挖耳道。</li>
                                <li>知道什麼時候該停手、什麼時候該去急診求助，比聽信偏方更重要。</li>
                                <li>歡迎將這個「急診三部曲」系列分享給家裡的長輩或有幼兒的朋友，在遇到突發狀況時，可以第一時間做出正確的判斷。</li>
                            </ul>
                        </div>

                    </article>
                </div>
                <PostNavigation currentSlug="2026-05-17-ent-emergency-trilogy-overview" />
            </div>

            <Sidebar />
        </div>
    );
}
