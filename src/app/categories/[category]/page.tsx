import { getPostsByCategory } from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const resolvedParams = await props.params;
    const decodedCategory = decodeURIComponent(resolvedParams.category || "");
    const categoryPosts = getPostsByCategory(decodedCategory);

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-blue-500 mb-8">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 回到首頁
                    </Link>
                    <h2 className="text-3xl font-bold text-[#1A2B3C] flex items-center gap-3">
                        <Stethoscope className="w-8 h-8 text-blue-600" />
                        分類：{decodedCategory}
                    </h2>
                    <p className="text-gray-500 mt-2">共找到 {categoryPosts.length} 篇文章</p>
                </div>

                {categoryPosts.map((post, index) => (
                    <article key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{post.category}</span>
                            <time>{post.date}</time>
                            <span>· {post.readTime}</span>
                            {/* post tags */}
                            {post.tags.map(tag => (
                                <Link key={tag} href={`/tags/${tag}`} className="bg-purple-50 hover:bg-purple-100 transition-colors text-purple-700 px-2 py-1 rounded-full font-bold shadow-sm text-xs cursor-pointer">#{tag}</Link>
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

                {categoryPosts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        目前此分類還沒有相關文章喔！
                    </div>
                )}
            </div>

            <Sidebar />
        </div>
    );
}
