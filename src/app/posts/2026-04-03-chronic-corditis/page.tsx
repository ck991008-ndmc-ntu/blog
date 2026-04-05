import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "法官、律師、教師等高用聲族群必讀：依據美國耳鼻喉科治療指引解析慢性聲帶炎與咽喉逆流",
    description: "法官、律師等長期依賴嗓音的專業人士，常遇到聲音沙啞、喉嚨「卡卡的」困擾。本文結合最新臨床權威指引，帶您一次看懂慢性聲帶炎與咽喉逆流的成因及治療對策。",
};

export default function BlogPost() {
    const currentPost = posts.find(p => p.slug === "2026-04-03-chronic-corditis");

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
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://journals.sagepub.com/doi/10.1177/0194599817751030" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Stachler, R. J., et al. (2018). <em>Clinical Practice Guideline: Hoarseness (Dysphonia) (Update)</em>. Otolaryngology–Head and Neck Surgery, 158(1_suppl), S1-S42.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        <p className="leading-relaxed">
                            法官、律師、檢察官等法界人士，或是教師、業務員，幾乎每天都必須透過「說話」來完成高強度的工作任務。而在長時間的法庭攻防或無止盡的會議後，您是否曾感到聲音沙啞、喉嚨像是有痰咳不出來，或是吞嚥時總覺得「卡卡的」？
                        </p>
                        <p className="leading-relaxed">
                            這些症狀，往往是「慢性聲帶炎 (Chronic Corditis)」或潛在疾病正在向您發出警告。本篇文章針對重度聲音使用者，結合美國耳鼻喉頭頸外科醫學會 (AAO-HNS) 的最新治療指引，帶您一次看懂聲帶疾病的成因與治療邏輯。
                        </p>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">為什麼喉嚨總是沙啞、卡卡的？</h2>

                        <p className="leading-relaxed">
                            當我們說話時，肺部呼出的氣流會通過喉部，引起左右兩側「聲帶」的震動來發出聲音。如果工作上需要大聲說話、長時間發聲，或是發聲方式不正確，聲帶就會因過度摩擦而產生發炎反應，這就是所謂的<strong>慢性聲帶炎</strong>。
                        </p>

                        <div className="my-8 flex justify-center">
                            <div className="text-center">
                                {/* 註解：請確定上傳的圖片儲存為 public/images/vocal-cords-anatomy.png 或 .jpg */}
                                <img
                                    src="/images/vocal-cords-anatomy.png"
                                    alt="聲帶與食道開口解剖位置圖"
                                    className="rounded-lg shadow-md max-w-full h-auto border border-gray-200"
                                />
                                <p className="text-sm text-gray-500 mt-2">喉部解剖圖：清晰可見聲帶位置與後方的食道開口</p>
                            </div>
                        </div>

                        <p className="leading-relaxed">
                            從上方的解剖圖可以清楚看到，我們的「聲帶 (Vocal Cords)」與後方的「食道開口 (Esophagus Opening)」距離非常相近。這個解剖相對位置非常重要，因為它帶出了一個關鍵的鑑別診斷：<strong>咽喉逆流 (Laryngopharyngeal Reflux, LPR)</strong>。
                        </p>

                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm my-8">
                            <h3 className="font-bold text-lg text-blue-800 mb-3 border-b border-blue-200 pb-2">「喉嚨卡卡」的兩大元兇</h3>
                            <ul className="space-y-4 font-medium text-gray-700 list-none pl-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <div>
                                        <strong className="text-[#1A2B3C]">慢性聲帶發炎與病變：</strong><br />
                                        長期發聲不當會導致聲帶黏膜水腫、充血，久而久之甚至可能長出「聲帶結節 (長繭)」、「聲帶息肉」或「聲帶囊腫」。此時最明顯的症狀就是<strong>聲音沙啞 (Hoarseness)</strong>、說話容易疲勞。
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <div>
                                        <strong className="text-[#1A2B3C]">咽喉逆流 (LPR)：</strong><br />
                                        與一般常聽到的胃食道逆流 (GERD) 表現出的胸口灼熱不同，咽喉逆流是胃酸直接往上接觸到了食道開口或是胃酸蒸散的氣體碰觸到喉嚨，刺激到鄰近的聲帶與咽喉黏膜。這會導致強烈的<strong>喉球症 (Globus pharyngeus，即喉嚨有異物感、卡卡的)</strong>，並伴隨慢性咳嗽與清喉嚨的動作，進而加重聲帶的發炎。
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">國際權威指引：何時應該就醫檢查？</h2>
                        <p className="leading-relaxed">
                            根據美國耳鼻喉頭頸外科醫學會 (AAO-HNS) 所發布的《聲音沙啞臨床實踐指引 (Clinical Practice Guideline: Hoarseness)》，提出了幾個極為重要的黃金準則：
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-red-50 border border-red-100 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-red-800 mb-3 border-b border-red-200 pb-2">四週法測 (The 4-Week Rule)</h3>
                                <p className="text-sm leading-relaxed mb-3">如果聲音沙啞或喉嚨異物感持續<strong>超過四週</strong>沒有好轉，必須尋求專科醫師進行內視鏡檢查。如果是經常抽菸、喝酒的高風險群，更應提前就醫，以排除惡性腫瘤的可能性。</p>
                            </div>
                            <div className="bg-green-50 border border-green-100 p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-green-800 mb-3 border-b border-green-200 pb-2">盡量避免常規使用抗生素</h3>
                                <p className="text-sm leading-relaxed mb-3">指引強烈建議，在沒有明確細菌感染證據下，不應常規使用抗生素治療聲音沙啞。大多數慢性聲帶發炎不需要抗生素介入。</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">標準治療流程</h2>
                        <p className="leading-relaxed">
                            針對慢性聲帶炎及喉部不適，臨床上我們會採取階梯式的處置方式：
                        </p>

                        <ol className="list-decimal pl-6 space-y-4 text-gray-700 font-medium">
                            <li>
                                <strong className="text-[#1A2B3C]">喉部內視鏡確診：</strong>這是唯一能確實看到聲帶病變以及是否有咽喉逆流跡象 (例如後半部杓狀軟骨紅腫) 的精確檢查。
                            </li>
                            <li>
                                <strong className="text-[#1A2B3C]">嗓音保健 (Vocal Hygiene) 與語言治療：</strong>指引中極度推崇的一線介入。透過語言治療師的專業指導，矯正發聲共鳴腔的使用，減少聲帶猛烈撞擊。同時要求患者多喝水，並減少清喉嚨這個極度傷害聲帶的動作。
                            </li>
                            <li>
                                <strong className="text-[#1A2B3C]">抗逆流藥物介入：</strong>如果內視鏡檢查及病史高度懷疑是咽喉逆流 (LPR) 引起的喉球症與沙啞，會開立質子幫浦抑制劑 (PPI) 或其他制酸藥物，阻斷胃酸對聲帶的刺激。
                            </li>
                            <li>
                                <strong className="text-[#1A2B3C]">顯微手術或局部注射：</strong>當慢性發炎已經進展成不可逆的巨大聲帶息肉或囊腫，且保守治療無效時，才會考慮以喉內視鏡顯微手術切除，或使用類固醇局部注射。
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">【陳醫師的臨床意見】預防勝於治療</h2>
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 my-8">
                            <p className="mb-4 text-xl font-bold text-amber-800">陳醫師的實務觀察：</p>
                            <p className="leading-relaxed text-lg font-medium text-gray-700">
                                對於法官、律師等專業人士而言，清晰的語音就是最重要的武器。然而，高壓的工作環境常伴隨快速進食、常喝咖啡、三餐不正常，這些正是引發咽喉逆流的最佳溫床。逆流的胃酸不斷刺激聲帶，加上法庭上的頻繁發聲，便很容易陷入「越講越沙啞、越沙啞越用力講、喉嚨一直卡卡只好一直清」的惡性循環。<br /><br />
                                建議大家在長時間說話時，桌上務必備有溫水，每十分鐘潤喉一次。如果發現喉嚨開始有異物感，或沙啞持續超過幾週，請將其視為身體的警訊，及早透過內視鏡作清楚的鑑別診斷。
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">【Take Home Message】</h2>
                        <div className="font-medium text-lg text-[#1A2B3C] bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <p className="mb-4"><strong>喉嚨卡卡不要輕忽：</strong>吞嚥有異物感通常與咽喉逆流 (LPR) 高度相關，胃酸越過食道開口刺激喉部，是引發慢性聲帶炎的隱形推手。</p>
                            <p className="mb-4"><strong>遵守四週原則：</strong>根據美國專科權威指引，如果聲音沙啞或喉部異物感持續超過四週，請務必尋求耳鼻喉科醫師進行內視鏡檢查，排除其他嚴重病變。</p>
                            <p><strong>嗓音保養是王道：</strong>多喝溫水、避免頻繁清喉嚨、修正發聲共鳴方式，是預防聲音疾病惡化的第一道防線。</p>
                        </div>

                    </article>
                </div>
                <PostNavigation currentSlug="2026-04-03-chronic-corditis" />
            </div>

            <Sidebar />
        </div>
    );
}
