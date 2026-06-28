---
description: Blog post writing style guidelines for Dr. Chen's medical blog
---

# 部落格文章撰寫風格指南

為了降低文章的 AI 機器生成感，增加溫暖真實的「人味」與臨床說服力，撰寫文章時請嚴格遵守以下寫作風格與文章結構原則：

## 1. 文章開頭：文獻來源與精簡的真實案例 (EBM & Patient Story)
- **實證醫學置頂**：文章的最開頭必須首先列出「權威參考文獻與醫學實證 (Evidence-Based Medicine)」以及來源連結，展現專業度。
- **拒絕冷硬定義**：與其從疾病定義或醫學指引切入，一律改用一個真實（或虛構但合理）的病人故事開場。
- **人物設定與字數限制**：故事段落應精簡扼要，**控制在 300 字左右**。文章開頭的臨床案例依序需提及該病患來自「某某台灣縣市」、「幾歲」、「某某男性或女性」及「職業」。其中，病患的居住地**僅限北北基桃新竹地區**（台北市、新北市、基隆市、桃園市、新竹縣市）。
- **第二段必備醫病問答**：在故事的第二段，必須固定加上「**患者常見的疑惑與提問**」以及「**醫師的回答**」，用真實的門診問答情境帶出後續的探討。

## 2. 視覺化圖表輔助 (Visual Aids)
- **決策流程圖**：文章主體中後段，必須呈現一個清晰的圖表（利用 Mermaid 或 TailwindCSS 卡片排版），用來呈現**門診評估與疾病的決策流程**。
- **治療方式選項**：必須包含清楚的 Markdown 表格清單，列出並比較各種**治療方式選項**與其優缺點、適用時機。

## 3. 文章結尾：實務觀察與重點回顧 (Conclusion)
- 文章最後必須包含「**陳醫師的實務觀察**」以及「**Take home message**」這兩個小節，作為獨立的段落。
- **實務觀察的口語化小結**：在「陳醫師的實務觀察」段落，開頭必須使用「我想，」、「我認為，」、「我常遇到...」等等口語化的開頭來進行小結，拉近與讀者的距離。
- **精要的 Take home message**：在 Take home message 區塊內，必須明確列出 **3 到 5 點**重要的結論回顧。
- **保留醫師的溫度**：甚至在文章最後，也請加上一段「醫師在病患離開診間前，最後一句叮嚀」的話語作結尾，帶給讀者溫暖與關懷，避免整段都只是冷冰冰的教條清單。

## 4. 允許不確定的語氣與真實感 (Human Tone & Honest Limitations)
- **降低完美感**：句子長短不要太過一致，允許加入口語化的轉折詞彙（例如：「說實話」、「老實說」、「在門診我們常看到...」）。
- **適度的不確定性**：真正的醫師不會把話說死。可以加入不確定的語氣（如：「老實說，這個診斷有時候真的很難確定...」），反而能建立信任感。
- **展現內外科結合的思維**：在解釋局部症狀時，適時用一句話帶入全身性或預防醫學的觀點。
- **誠實面對醫療極限**：必須明確點出現實情況，例如「這不是魔法，還是有復發率」等現實情況，還原真實醫師會說的話。

## 5. 標題去公式化 (Conversational Titles)
- **避免農場文標題**：絕對禁止使用「ＯＯ族群必讀：依據ＸＸ指引解析...」或「...完全解碼」這類高度對稱、呆板的標題。
- **充滿同理心的提問**：請多用口語化、帶有疑問或同理心的文字作為標題（如：你也是常被鼻塞困擾的工程師嗎？聊聊下鼻甲肥厚與那些沒效的噴劑）。

## 6. 專業名詞與文獻引用的自然化 (Natural Integration of Evidence)
- **作為輔助而非主體**：除了開頭置頂的 Reference，內文引用指引時請把它當作「補充說明」自然融入文章中（如：「在最新的醫學指引中，其實也證實了我們在門診的觀察：...」），保持閱讀的流暢度。
- **藥名標記規範**：所有文章中出現的藥物名稱（不論是學名或商品名），如使用中文藥名，必須一律加上括號加註其英文原文（例如：「翠普登類 (Triptans)」、「立平妥 (Lipitor)」），以利讀者查詢並展現專業性。


## 7. 嚴格禁止使用 Emoji Icon (No Emojis)
- 撰寫任何部落格文章時，**請勿在文章內容、流程圖或表格中使用任何 Emoji icon**（例如 🧠❤️⚖️🚗⚠️📋🏥💡🎯✅😴❌💊🔧📌🔬 等）。
- 目的在於減少 AI 生成感，維持醫學專業文章的正式性。可直接以字體 CSS 樣式（如粗體、色彩、邊框）來區分重點即可。

## 8. 分類與標籤命名規範 (Taxonomy & Tags)
- **分類 (Category) 限定**：目前僅允許使用以下三個分類，新增分類需經過審核：
  - `耳鼻喉專科`
  - `流行病學與預防醫學`
  - `內科疑難雜症`
- **標籤 (Tags) 數量與命名原則**：
  - **數量限制**：每篇文章的標籤數量建議控制在 **3 到 4 個**以內，避免標籤氾濫。
  - **命名格式**：標籤字數應控制在 2-6 字內，**禁止使用問句形式**（例如：使用「流鼻血」而非「流鼻血怎麼辦」）。
  - **病患主訴導向**：以**病患常見主訴、症狀**或口語關鍵字為主（例如：「鼻塞」、「喉嚨痛」、「打呼」），避免使用冷僻的醫學診斷名稱。
  - **禁止使用相近的同義詞標籤**：必須使用以下**常用標籤對照表**進行整併，避免產生發散、重複的標籤（否則讀者點選時會無法看到所有關聯文章）：
    - 統一使用 `流鼻血`（整併：流鼻血處理、流鼻血怎麼辦、鼻血不止、鼻血急診、高血壓鼻血、鼻血處理）
    - 統一使用 `耳道異物`（整併：耳朵跑進蟲、耳朵有蟲怎麼辦、耳道異物、小孩耳朵塞東西、耳鼻喉科夾耳屎蟲）
    - 統一使用 `魚刺卡喉嚨`（整併：吞飯團魚刺、喝醋化魚刺、魚刺急診、耳鼻喉科夾魚刺）
    - 統一使用 `喉嚨異物感`（整併：喉嚨卡卡）
    - 統一使用 `慢性疲勞`（整併：總是睡不飽、越睡越累、無力、精神不濟）
    - 統一使用 `眩暈`（整併：耳石症、頭暈、前庭復健、平衡訓練）

## 9. 圖片與 SEO Metadata 實作要求 (Images & SEO)
- **圖片使用規範**：
  - 所有插圖必須使用 Next.js 的 `<Image>` 元件進行渲染，並加上清楚的 `alt` 屬性描述。
  - 圖片外層需使用置中容器包裹，並在下方加上 `p` 標籤的 `caption` 圖片說明。
- **SEO Metadata 與描述**：
  - 頁面的 `metadata.title` 須與文章標題一致。
  - `metadata.description` 應控制在 100-150 字內，精煉文章大綱，吸引讀者點閱。
  - 每個文章頁面必須引入 `<ArticleJsonLd>` 元件，並傳入對應的 `post` 資料，以利搜尋引擎建立結構化資料（Structured Data / Rich Snippet）。

## 10. 排版空白與超連結規範 (Formatting & Links)
- **中英文排版空格**：中文與英文單字、半形數字、括號之間，必須留有空格（例如：`翠普登類 (Triptans)`、`8 歲`、`控制在 300 字左右`），以提升閱讀舒適度。
- **超連結屬性與安全性**：所有外連至醫學文獻的超連結（如 PubMed、DOI），必須統一設定 `target="_blank" rel="noopener noreferrer"` 以防安全性問題與引導流量流失。內文中的超連結應自然地作為說明融入。

## 11. 發布與上傳作業流程 (Publishing Workflow)
上傳並發布新文章時，必須嚴格遵守以下作業流程：
1. **註冊 Metadata**：在 [posts.ts](file:///c:/Users/user/Documents/NewBlog/src/data/posts.ts) 的 `posts` 陣列中新增該文章的 metadata 物件（格式需符合 `Post` 介面）。
2. **建立頁面檔案**：在 `src/app/posts/` 下建立以文章 `slug` 命名的資料夾，並在其中建立 `page.tsx`。
3. **網頁預覽審查**：
   - 建立完頁面後，**必須先啟動本機開發伺服器，讓使用者能夠查看實際生成的網頁畫面**。
   - **禁止直接上傳或推送到遠端**。
   - **最重要原則**：必須在使用者親自看過網頁，並在對話中說出 **「確認無誤，請上傳」** 之後，方可開始執行 git commit、push 或 deploy 等正式上傳發布流程。

### TSX 文章頁面範本 (page.tsx Template)
以下為標準的文章頁面架構範本：
```tsx
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import PostNavigation from "@/components/PostNavigation";
import Image from "next/image";

export const metadata: Metadata = {
    title: "文章完整標題",
    description: "精心撰寫的文章大綱描述，限制在 100-150 字內。",
};

export default function BlogPost() {
    const currentPost = posts.find((p) => p.slug === "your-post-slug");

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
                                    <a href="超連結" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors hover:underline">
                                        作者. (年份). 論文標題. <em>期刊名稱.</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <article className="prose prose-lg prose-blue max-w-none text-gray-700">
                        {/* ========== 病例故事（約300字）========== */}
                        <p className="leading-relaxed mb-4">
                            小明，今年 8 歲，來自台北市... (病患故事內容，須包含地區、年齡、性別、職業)
                        </p>

                        {/* ========== 醫病問答 ========== */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h4 className="font-bold text-[#1A2B3C] text-lg mb-3">患者常見的疑惑與提問</h4>
                            <p className="leading-relaxed mb-3 font-medium">
                                患者/家長提問內容...
                            </p>
                            <p className="leading-relaxed mb-4 font-bold text-blue-900">
                                醫師回答內容...
                            </p>
                        </div>

                        {/* 內文各段落，注意中英文空格、無 Emoji */}
                        
                        {/* ========== 圖片範例 ========== */}
                        <div className="my-8 flex flex-col items-center">
                            <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                                    <Image
                                        src="/images/your-image.png"
                                        alt="圖片替代文字描述"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                                <p className="text-sm text-gray-500 text-center mt-4">
                                    圖片標題說明文字 (Caption)
                                </p>
                            </div>
                        </div>

                        {/* ========== 治療對照表格 ========== */}
                        <table>
                            <thead>
                                <tr>
                                    <th>治療方式</th>
                                    <th>優點</th>
                                    <th>缺點</th>
                                    <th>適用時機</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>選項 A</td>
                                    <td>優點說明</td>
                                    <td>缺點說明</td>
                                    <td>時機說明</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* ========== 陳醫師的實務觀察 ========== */}
                        <h3 className="text-xl font-bold text-[#1A2B3C] mt-8 mb-4">陳醫師的實務觀察</h3>
                        <p className="leading-relaxed mb-4">
                            我想，... (以口語化開頭進行臨床實務經驗小結)
                        </p>

                        {/* ========== Take home message ========== */}
                        <h3 className="text-xl font-bold text-[#1A2B3C] mt-8 mb-4">Take home message</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>重點一</li>
                            <li>重點二</li>
                            <li>重點三</li>
                        </ul>

                        <p className="leading-relaxed mt-6 font-semibold italic text-blue-800">
                            「最後一句溫暖的叮嚀作結尾...」
                        </p>
                    </article>
                </div>
                <PostNavigation currentSlug={currentPost?.slug} />
            </div>
            <Sidebar />
        </div>
    );
}
```