import Sidebar from "@/components/Sidebar";
import Link from "next/link"; export default function Home() {
  const posts = [
    {
      title: "精準醫療時代：2026 最新指引解構——生物製劑在慢性鼻竇炎與鼻息肉的應用策略",
      summary: "慢性鼻竇炎合併鼻息肉（CRSwNP）常因極高的復發率讓患者苦不堪言。隨著 ARIA-Italy 最新共識指引的發布，第二型發炎反應的「標靶治療」正全面顛覆傳統的處置邏輯，為難治型患者帶來新契機。",
      date: "2026-03-06",
      category: "耳鼻喉專科",
      readTime: "8 min read",
      slug: "/posts/biologics-crswnp"
    },
    {
      title: "頭頸部超音波導引穿刺：非侵入性診斷的新標準",
      summary: "傳統切片與超音波導引粗針穿刺(CNB)的差異比較，以及在台灣健保體系下的臨床實務考量。為何我們需要更精準的術前診斷？",
      date: "2026-03-05",
      category: "耳鼻喉專科",
      readTime: "5 min read",
    },
    {
      title: "從數據看偏鄉醫療：那些隱藏在城鄉差距下的生命故事",
      summary: "9年半的偏鄉義診經驗回顧。科技如何成為劃破山區醫療壁壘的鵲橋？從流行病學視角解構現有資源分配。",
      date: "2026-02-28",
      category: "流行病學與預防醫學",
      readTime: "7 min read",
    },
    {
      title: "慢性咳嗽的診斷邏輯：不是所有的咳都來自肺部",
      summary: "整合內科與耳鼻喉科視角，三步拆解慢性咳嗽的可能原因：從胃食道逆流(GERD)到鼻涕倒流(PND)的鑑別診斷。",
      date: "2026-02-15",
      category: "內科疑難雜症",
      readTime: "6 min read",
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-2 border-b-2 border-blue-100 pb-2 inline-block">最新文章</h2>
        </div>

        {posts.map((post, index) => (
          <article key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{post.category}</span>
              <time>{post.date}</time>
              <span>· {post.readTime}</span>
            </div>
            <Link href={post.slug || "#"}>
              <h3 className="text-xl font-bold text-[#1A2B3C] mb-3 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-4">
              {post.summary}
            </p>
            <Link href={post.slug || "#"} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              閱讀全文 <span className="ml-1">→</span>
            </Link>
          </article>
        ))}

        <div className="flex justify-center mt-12">
          <button className="px-6 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-[#1A2B3C] transition-colors font-medium">
            載入更多文章
          </button>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
