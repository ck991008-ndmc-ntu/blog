import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <p className="text-lg text-blue-600 font-medium leading-relaxed">
            「醫療指引給的是標準答案，但我希望能為您找到『適合您的答案』。結合內科的系統思維、耳鼻喉頭頸外科的專業，以及預防醫學的實證數據，我將與您一起在生活型態與醫療處置間，找出最佳平衡點。」
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-2 border-b-2 border-blue-100 pb-2 inline-block">最新文章</h2>
        </div>

        {posts.map((post, index) => (
          <article key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{post.category}</span>
              <time>{post.date}</time>
              <span>· {post.readTime}</span>
              {post.tags.map(tag => (
                <Link key={tag} href={`/tags/${tag}`} className="bg-purple-50 hover:bg-purple-100 transition-colors text-purple-700 px-2 py-1 rounded-full font-bold shadow-sm text-xs">#{tag}</Link>
              ))}
            </div>
            <Link href={`/posts/${post.slug}`}>
              <h3 className="text-xl font-bold text-[#1A2B3C] mb-3 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-4">
              {post.summary}
            </p>
            <Link href={`/posts/${post.slug}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
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
