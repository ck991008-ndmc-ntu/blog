import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

interface PostNavigationProps {
    currentSlug: string;
}

export default function PostNavigation({ currentSlug }: PostNavigationProps) {
    const currentIndex = posts.findIndex((p) => p.slug === currentSlug);

    // If post not found, render nothing
    if (currentIndex === -1) return null;

    // posts array is sorted by date descending (newest first).
    // Therefore, an older post is at a larger index, and a newer post is at a smaller index.
    const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

    return (
        <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-8 gap-4">
            <div className="flex-1">
                {prevPost && (
                    <Link
                        href={`/posts/${prevPost.slug}`}
                        className="flex items-center text-gray-500 hover:text-blue-600 font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 shrink-0 group-hover:-translate-x-1 transition-transform" />
                        <span className="hidden sm:inline line-clamp-1 truncate" title={prevPost.title}>
                            上一篇：{prevPost.title}
                        </span>
                        <span className="sm:hidden">上一篇</span>
                    </Link>
                )}
            </div>

            <div className="flex-1 flex justify-end text-right">
                {nextPost && (
                    <Link
                        href={`/posts/${nextPost.slug}`}
                        className="flex items-center justify-end text-gray-500 hover:text-blue-600 font-medium transition-colors group"
                    >
                        <span className="hidden sm:inline line-clamp-1 truncate" title={nextPost.title}>
                            下一篇：{nextPost.title}
                        </span>
                        <span className="sm:hidden">下一篇</span>
                        <ArrowRight className="w-5 h-5 ml-2 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </div>
    );
}
