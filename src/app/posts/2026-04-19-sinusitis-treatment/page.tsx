import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";

export const metadata: Metadata = {
    title: "你是不是每次感冒最後都變成黃鼻涕？聊聊鼻竇炎的用藥與復發，以及微創手術的時機",
    description: "解答為何慢性鼻竇炎單吃抗生素無法斷根，並分享門診決策流程、各項治療方案（洗鼻、藥物、微創手術與生物製劑）優缺點比較，以及陳醫師對於術後防復發的實務觀察。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "2026-04-19-sinusitis-treatment");

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

                        {/* ========== EBM 置頂 ========== */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                            <strong className="text-[#1A2B3C] text-base mb-2 inline-block">權威參考文獻與醫學實證 (Evidence-Based Medicine)</strong>
                            <ul className="list-decimal pl-5 space-y-3 break-words">
                                <li>
                                    <a href="https://doi.org/10.1002/alr.22741" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Orlandi, R. R., et al. (2021). International Consensus Statement on Allergy and Rhinology: Rhinosinusitis. <em>International Forum of Allergy & Rhinology.</em>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://doi.org/10.1177/0194599815572097" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        Rosenfeld, R. M., et al. (2015). Clinical Practice Guideline (Update): Adult Sinusitis. <em>Otolaryngology–Head and Neck Surgery.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病人故事開場 ========== */}
                        <p className="leading-relaxed mb-6">
                            上個禮拜，在門診遇見一位35歲，從基隆市區專程過來的先生，主要工作是業務。
                        </p>
                        <p className="leading-relaxed mb-6">
                            「陳醫師，我最近每個月感冒，到最後都會變成濃稠的黃鼻涕，不僅頭痛，連聞東西的味道都變得很遲鈍。」他一邊擤著鼻子，一邊無奈地說。因為業務工作需要頻繁拜訪客戶，嚴重的鼻音與臉部脹痛，甚至讓他開會時無法集中精神，已經嚴重影響到他的職場表現。在做完內視鏡檢查後，確診他患有慢性鼻竇炎合併鼻瘜肉。
                        </p>
                        <p className="leading-relaxed mb-6">
                            這時，他拋出了一個在門診非常常見的疑問：「醫師，我已經吃了很多抗生素了，為什麼還是好不了？一定要開刀嗎？聽說開完刀還是很容易復發？」
                        </p>

                        {/* ========== 醫病問答與破除迷思 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-12 mb-6">為什麼抗生素無法斷根？</h2>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                            <p className="leading-relaxed mb-4">
                                老實說，面對反覆發作的黃鼻涕，這的確是個讓人頭痛的問題。很多患者以為鼻部症狀只要吃幾天抗生素就能「斷根」，但其實慢性鼻竇炎的成因相當複雜。
                            </p>
                            <p className="leading-relaxed mb-4">
                                當鼻竇的出口因為長期發炎、過敏或長出鼻瘜肉而阻塞時，裡面的分泌物就像死水一樣排不出去，進而成為細菌的溫床。這時候單純吃口服抗生素，往往只能暫時壓制表面的細菌感染，很難徹底改變裡面塞住的結構。這也是為什麼你一停藥，沒多久症狀又會捲土重來。
                            </p>
                            <p className="leading-relaxed font-bold text-indigo-900 border-l-2 border-indigo-300 pl-4 mt-4">
                                我在門診最常看到的，不是藥完全沒效，而是藥物效果因為鼻息肉的結構性阻塞而抵消了。這也是為什麼有些病人明明吃過很多藥，還是一直反覆發作。這也是為什麼最新醫學指引中提到：適當的類固醇洗鼻與手術介入，其實就是在幫這個「死水池」重新打通排水道。
                            </p>
                        </div>

                        {/* ========== 決策流程圖 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">門診評估與決策流程</h2>
                        <p className="leading-relaxed mb-6">若是你在門診諮詢，我們通常會遵循以下的階段性評估流程：</p>

                        <div className="my-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <h3 className="text-xl font-bold text-center text-[#1A2B3C] mb-8">門診評估與手術決策流程</h3>
                            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-0 font-medium z-10">
                                {/* Step 1 */}
                                <div className="w-full max-w-sm bg-blue-50 border-2 border-blue-200 text-blue-800 p-4 rounded-lg text-center shadow-sm">
                                    <div className="font-bold text-lg">出現疑似鼻竇炎症狀</div>
                                    <div className="text-sm font-normal mt-1">(黃鼻涕、臉部脹痛、嗅覺減退)</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 2 */}
                                <div className="w-full max-w-sm bg-gray-100 border-2 border-gray-300 text-gray-700 p-4 rounded-lg text-center shadow-sm relative">
                                    <div className="font-bold text-lg">為期 2-4 週保守藥物治療</div>
                                    <div className="text-sm font-normal mt-1">(類固醇噴劑、洗鼻、適當抗生素)</div>
                                </div>
                                <div className="h-6 w-0.5 bg-gray-300"></div>

                                {/* Step 3 */}
                                <div className="w-full max-w-sm bg-purple-50 border-2 border-purple-200 text-purple-800 p-4 rounded-lg text-center shadow-sm relative">
                                    <div className="font-bold text-lg">藥物治療是否有效？</div>
                                </div>

                                {/* Branch */}
                                <div className="w-full max-w-lg flex justify-between mt-0">
                                    <div className="w-1/2 flex flex-col items-center pl-2 pr-6">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-gray-500 bg-white px-1 -mt-4 z-10">是</span>
                                        <div className="w-full bg-green-50 border-2 border-green-200 text-green-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex items-center justify-center">
                                            維持洗鼻與局部噴劑保養
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center pl-6 pr-2">
                                        <div className="h-6 w-0.5 bg-gray-300"></div>
                                        <span className="text-xs text-red-500 font-bold bg-white px-1 -mt-4 z-10 text-center whitespace-nowrap">否，且嚴重影響生活</span>
                                        <div className="w-full bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-lg text-center shadow-sm mt-3 text-sm h-full flex flex-col items-center justify-center">
                                            <span>內視鏡與電腦斷層評估</span>
                                            <span className="font-bold mt-1 block border-t border-red-200/50 pt-1 w-full">微創手術 (FESS) 討論</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========== 治療選項比較 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">治療選項比較表</h2>
                        <p className="leading-relaxed mb-6">目前針對鼻竇炎的治療武器相當多元，我們幫大家整理成以下的表格供參：</p>

                        <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">治療方式</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">適用時機</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">優點</th>
                                        <th className="px-4 py-3 text-left font-bold whitespace-nowrap">缺點與限制</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">局部噴劑與洗鼻</td>
                                        <td className="px-4 py-4 font-medium">輕度發炎、手術後保養</td>
                                        <td className="px-4 py-4 text-green-700">副作用極低、可長期安全使用</td>
                                        <td className="px-4 py-4 text-gray-600">結構性阻塞（如嚴重瘜肉）時，藥水進不去，效果有限。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">口服抗生素</td>
                                        <td className="px-4 py-4 font-medium">急性細菌感染或急性發作</td>
                                        <td className="px-4 py-4 text-green-700">能快速控制細菌感染的症狀</td>
                                        <td className="px-4 py-4 text-gray-600">無法解決鼻瘜肉與結構阻塞問題，長期使用有抗藥性風險。</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">微創手術 (FESS)</td>
                                        <td className="px-4 py-4 font-medium">藥物無效且有明顯結構阻塞</td>
                                        <td className="px-4 py-4 text-green-700">能精準移除病灶、打通鼻竇開口保留正常黏膜</td>
                                        <td className="px-4 py-4 text-gray-600">術後需高度配合長期洗鼻保養，某些特殊體質仍有復發可能。</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b border-gray-100 hover:bg-blue-50/30">
                                        <td className="px-4 py-4 font-bold text-blue-800">生物製劑</td>
                                        <td className="px-4 py-4 font-medium">嚴重且反覆復發的第二型發炎 (CRSwNP)</td>
                                        <td className="px-4 py-4 text-green-700">標靶治療效果顯著，能大幅縮小瘜肉、恢復嗅覺</td>
                                        <td className="px-4 py-4 text-gray-600">費用極為高昂，且需長期施打。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ========== 實務觀察 ========== */}
                        <h2 className="text-2xl font-bold text-[#1A2B3C] border-l-4 border-blue-600 pl-4 mt-16 mb-6">陳醫師的實務觀察</h2>
                        <p className="leading-relaxed mb-6 text-gray-700">
                            我想，很多患者在面對鼻竇炎手術時，最擔心的往往是「復發率」。我認為，這類手術的成功不僅僅取決於醫師開刀的技術，更在於患者術後的保養決心。我常遇到患者以為開完刀就從此免疫，回去後就不再洗鼻、不用噴劑，結果幾年後瘜肉又慢慢長回來。手術是幫你清理戰場、打通引流通道，但要維持戰果，靠的絕對是你自己每天的洗鼻與藥物保養。說到底，醫療不是魔法，它需要醫病雙方一起合作才能達到最好的效果。
                        </p>

                        {/* ========== Take home message ========== */}
                        <div className="bg-amber-50 text-gray-800 p-8 rounded-xl shadow-md border border-amber-100 mt-12 mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Take home message</h3>
                            <ul className="list-disc pl-6 space-y-3 font-medium text-lg text-gray-700">
                                <li>慢性鼻竇炎不是單純的感冒，反覆吃抗生素無法解決鼻竇結構性的阻塞問題。</li>
                                <li>鼻部微創手術 (FESS) 的核心精神是「打通通道」與「保留正常黏膜」，為後續的洗鼻保養創造有利環境。</li>
                                <li>手術絕不是一勞永逸的終點，術後的規則洗鼻與局部類固醇噴劑保養，才是真正避免復發的關鍵。</li>
                            </ul>
                            <p className="leading-relaxed font-bold text-amber-900 border-l-4 border-amber-400 pl-4 mt-6 italic">
                                「今天講的有點多，別太在意那些複雜的醫學名詞。如果最近常常覺得頭昏腦脹、鼻涕又黃又稠，記得隨時回來門診，我們慢慢找出最適合你的治療方式。記得，多喝溫水，先把自己照顧好。」
                            </p>
                        </div>
                    </article>
                </div>
                <PostNavigation currentSlug="2026-04-19-sinusitis-treatment" />
            </div>

            <Sidebar />
        </div>
    );
}
