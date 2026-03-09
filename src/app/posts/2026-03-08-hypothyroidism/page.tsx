import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowLeft, Clock, Activity, ChevronRight } from "lucide-react";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "常常覺得累？從抽血數值看甲狀腺低下與慢性疲勞症候群",
    description: "明明睡很久卻還是極度疲勞？不要只驗肝功能。本文帶您看懂 TSH 與 Free T4 抽血報告，秒懂「亞臨床甲狀腺低下」與「臨床甲狀腺低下」的差異與治療時機。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-03-08-hypothyroidism");

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <ArticleJsonLd post={currentPost} />
            <div className="flex-1 space-y-8">
                {/* 麵包屑導覽 */}
                <nav className="flex text-sm text-gray-500 font-medium">
                    <Link href="/" className="hover:text-blue-600 transition-colors">首頁</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link href={`/categories/${currentPost?.category}`} className="hover:text-blue-600 transition-colors">{currentPost?.category}</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-gray-900 truncate max-w-[200px] md:max-w-xs">{currentPost?.title}</span>
                </nav>

                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header Section */}
                    <div className="p-8 md:p-10 border-b border-gray-100 bg-gradient-to-br from-white to-blue-50/30">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 flex-wrap">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold shadow-sm">{currentPost?.category}</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {currentPost?.date}</span>
                            <span className="flex items-center"><Activity className="w-4 h-4 mr-1" /> {currentPost?.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A2B3C] leading-tight mb-6">
                            {currentPost?.title}
                        </h1>

                        {/* 自動帶入的 Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {currentPost?.tags.map(tag => (
                                <Link key={tag} href={`/tags/${tag}`} className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors px-3 py-1 rounded-full font-bold shadow-sm text-sm">#{tag}</Link>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.4158/EP12280.GL" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Garber, J. R., Cobin, R. H., Gharib, H., Hennessey, J. V., Klein, I., Mechanick, J. I., Pessah-Pollack, R., Singer, P. A., & Woeber, K. A. (2012). Clinical practice guidelines for hypothyroidism in adults: Cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. <em>Endocrine Practice, 18</em>(6), 988-1028. https://doi.org/10.4158/EP12280.GL
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 文獻回顧與基礎知識 */}
                    <div className="p-8 md:p-10 space-y-12">
                        {/* Section 1: The Problem */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 flex items-center border-l-4 border-blue-600 pl-4 py-1">
                                慢性疲勞：到底是太累，還是生病了？
                            </h2>
                            <div className="prose max-w-none text-gray-700 leading-loose">
                                <p>
                                    在門診，最常聽到的主訴之一就是：「醫師，我最近真的好累，怎麼睡都睡不飽，是不是肝有問題？」
                                </p>
                                <p>
                                    許多患者一進診間，第一件事就是要求抽血檢查肝功能（GOT/GPT）。雖然肝功能異常確實可能導致疲勞，但在廣大「慢性疲勞」的族群中，我們往往會忽略一個非常重要、且容易治療的內分泌器官——<strong>甲狀腺</strong>。
                                </p>
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-6">
                                    <h4 className="font-bold text-[#1A2B3C] mb-3 flex items-center">
                                        甲狀腺低下的常見非特異性症狀：
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-2 marker:text-blue-500 text-gray-700">
                                        <li><strong>全身性：</strong> 無法解釋的極度疲勞、怕冷、體重不明原因增加。</li>
                                        <li><strong>神經與精神：</strong> 記憶力減退、注意力不集中、情緒低落（常被誤診為輕度憂鬱症）。</li>
                                        <li><strong>外觀與皮膚：</strong> 皮膚乾燥粗糙、容易掉髮、臉部或眼臉浮腫。</li>
                                        <li><strong>腸胃與心血管：</strong> 便祕、心跳過慢。</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Blood Tests */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 flex items-center border-l-4 border-blue-600 pl-4 py-1">
                                關鍵抽血指標：促甲狀腺素 (TSH) 與 游離甲狀腺素 (Free T4)
                            </h2>
                            <div className="prose max-w-none text-gray-700 leading-loose">
                                <p>
                                    要確認是不是甲狀腺惹的禍，我們只需要依賴兩項關鍵的抽血數據。根據美國甲狀腺學會（ATA）與美國臨床內分泌學會（AACE）的臨床指引，這兩項指標的互動就像是工廠的老闆（腦下垂體）與員工（甲狀腺）之間的對話：
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 my-8">
                                    <div className="bg-white border-2 border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-sm font-bold text-blue-600 mb-1 border-b border-blue-100 pb-2">「老闆的指令」</div>
                                        <div className="text-2xl font-extrabold text-[#1A2B3C] mb-2">TSH</div>
                                        <div className="font-bold text-gray-800 mb-2">促甲狀腺素 (Thyroid-Stimulating Hormone)</div>
                                        <p className="text-sm text-gray-600">
                                            由大腦（腦下垂體）分泌，用來「催促」甲狀腺工作。當甲狀腺怠職時，大腦就會大量分泌 TSH 來下達指令，因此 <strong>TSH 升高，代表甲狀腺功能可能正在衰退</strong>。
                                        </p>
                                    </div>
                                    <div className="bg-white border-2 border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-sm font-bold text-purple-600 mb-1 border-b border-purple-100 pb-2">「員工的產能」</div>
                                        <div className="text-2xl font-extrabold text-[#1A2B3C] mb-2">Free T4</div>
                                        <div className="font-bold text-gray-800 mb-2">游離甲狀腺素 (Free Thyroxine)</div>
                                        <p className="text-sm text-gray-600">
                                            甲狀腺實際製造出來、在血液中具有活性的荷爾蒙。<strong>維持身體代謝的關鍵動力</strong>。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Diagnosis Algorithm */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 flex items-center border-l-4 border-blue-600 pl-4 py-1">
                                解讀檢驗報告：你是哪一種甲狀腺低下？
                            </h2>
                            <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                <p className="mb-6 text-gray-700">當血液報告出爐時，我們通常會根據 TSH 與 Free T4 的組合，將其分為兩個階段：</p>

                                {/* Diagram */}
                                <div className="my-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                                    <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">甲狀腺低下 (Hypothyroidism) 鑑別診斷</h3>

                                    <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10 w-full">
                                        <div className="w-full bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm relative z-10 text-lg font-bold">
                                            發現 TSH 升高 (異常)
                                        </div>

                                        <div className="h-8 w-0.5 bg-gray-300 relative"></div>

                                        <div className="w-full flex gap-4">
                                            <div className="flex-1 flex flex-col items-center">
                                                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap z-10">
                                                    Free T4 正常
                                                </div>
                                                <div className="h-6 w-0.5 bg-gray-300 relative"></div>
                                                <div className="w-full bg-orange-50 border-2 border-orange-200 text-orange-800 p-4 rounded-lg text-center shadow-sm relative z-10">
                                                    <div className="font-bold text-lg mb-1">亞臨床甲狀腺低下</div>
                                                    <div className="text-xs opacity-90">(Subclinical Hypothyroidism)</div>
                                                    <hr className="my-2 border-orange-200" />
                                                    <div className="text-sm font-normal text-left">
                                                        員工還撐得住，但老闆已經在生氣了。<br />
                                                        依據 TSH 高度 (&gt;10 mIU/L)、抗體狀態與年齡決定是否治療。
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex flex-col items-center">
                                                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap z-10">
                                                    Free T4 偏低
                                                </div>
                                                <div className="h-6 w-0.5 bg-gray-300 relative"></div>
                                                <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-lg text-center shadow-sm relative z-10">
                                                    <div className="font-bold text-lg mb-1">臨床甲狀腺低下</div>
                                                    <div className="text-xs opacity-90">(Overt Hypothyroidism)</div>
                                                    <hr className="my-2 border-red-200" />
                                                    <div className="text-sm font-normal text-left">
                                                        員工全面停擺了。<br />
                                                        需要常規補充甲狀腺素 (Levothyroxine) 治療。
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Doctor's Advice */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】與疾病和平共處</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8 relative overflow-hidden">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700 mb-4">
                                對於「亞臨床甲狀腺低下」的患者，要不要吃藥是一個很常被討論的問題。如果是年輕人（尤其是備孕女性）、TSH 數值過高（大於 10 mIU/L），或是合併有甲狀腺抗體（如 Anti-TPO）陽性、且已經出現明顯疲勞和血脂異常，請盡速至醫療院所進行就診檢查跟治療。
                            </p>
                        </div>

                        {/* Take Home Message */}
                        <section className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                                Take Home Message
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3 font-bold text-sm">1</div>
                                    <p className="text-gray-800 leading-relaxed">
                                        <strong>長期的不明疲勞：</strong>不要只驗肝功能，請醫師一併檢查 <strong>TSH 與 Free T4</strong>，排除甲狀腺低下的可能性。
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3 font-bold text-sm">2</div>
                                    <p className="text-gray-800 leading-relaxed">
                                        <strong>看懂抽血報告：</strong>TSH 偏高代表甲狀腺功能正在衰退（大腦在催促了）。如果 TSH 高但 Free T4 還正常，稱為「亞臨床甲狀腺低下」。
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3 font-bold text-sm">3</div>
                                    <p className="text-gray-800 leading-relaxed">
                                        <strong>治療應個人化：</strong>不是數值紅字就一定要立刻吃藥。應根據年齡、疲勞程度、是否合併抗體異常或血脂異常，與醫師討論最佳的治療或追蹤策略。
                                    </p>
                                </li>
                            </ul>
                        </section>

                    </div>
                </article>

                <PostNavigation currentSlug="2026-03-08-hypothyroidism" />
            </div>

            <Sidebar />
        </div>
    );
}
