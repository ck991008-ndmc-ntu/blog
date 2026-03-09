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
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center py-6 border-t border-gray-200 mt-8 gap-4 w-full">
            <div className="flex-1 w-full sm:w-1/2 flex">
                {prevPost && (
                    <Link
                        href={`/posts/${prevPost.slug}`}
                        className="flex items-center text-gray-500 hover:text-blue-600 font-medium transition-colors group p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-100 w-full"
                    >
                        <ArrowLeft className="w-5 h-5 mr-3 shrink-0 group-hover:-translate-x-1 transition-transform" />
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-xs text-gray-400 mb-1">上一篇</span>
                            <span className="text-sm sm:text-base text-gray-800 group-hover:text-blue-700 line-clamp-2 leading-tight" title={prevPost.title}>
                                {prevPost.title}
                            </span>
                        </div>
                    </Link>
                )}
            </div>

            <div className="flex-1 w-full sm:w-1/2 flex justify-end">
                {nextPost && (
                    <Link
                        href={`/posts/${nextPost.slug}`}
                        className="flex items-center justify-end text-right text-gray-500 hover:text-blue-600 font-medium transition-colors group p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-100 w-full"
                    >
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-xs text-gray-400 mb-1">下一篇</span>
                            <span className="text-sm sm:text-base text-gray-800 group-hover:text-blue-700 line-clamp-2 leading-tight" title={nextPost.title}>
                                {nextPost.title}
                            </span>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-3 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </div>
    );
}
