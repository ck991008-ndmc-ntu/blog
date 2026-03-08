import { getPostsByTag } from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
    const resolvedParams = await props.params;
    const decodedTag = decodeURIComponent(resolvedParams.tag || "");
    const tagPosts = getPostsByTag(decodedTag);

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-purple-500 mb-8">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 回到首頁
                    </Link>
                    <h2 className="text-3xl font-bold text-[#1A2B3C] flex items-center gap-3">
                        <Tag className="w-8 h-8 text-purple-600" />
                        包含標籤「{decodedTag}」的文章
                    </h2>
                    <p className="text-gray-500 mt-2">共找到 {tagPosts.length} 篇文章</p>
                </div>

                {tagPosts.map((post, index) => (
                    <article key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{post.category}</span>
                            <time>{post.date}</time>
                            <span>· {post.readTime}</span>
                            {/* post tags */}
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-bold shadow-sm text-xs">#{tag}</span>
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

                {tagPosts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        目前此標籤還沒有相關文章喔！
                    </div>
                )}
            </div>

            <Sidebar />
        </div>
    );
}
