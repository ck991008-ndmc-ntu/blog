import { Post } from "@/data/posts";

export default function ArticleJsonLd({ post }: { post: Post | undefined }) {
    if (!post) return null;

    // Google 規範的日期格式最好是 ISO 8601 或 yyyy-MM-dd
    const formattedDate = new Date(post.date).toISOString().split('T')[0];

    // 同時標記為文章 (Article) 與 醫療網頁 (MedicalWebPage)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["Article", "MedicalWebPage"],
        "headline": post.title,
        "description": post.summary,
        "author": {
            "@type": "Physician",
            "name": "陳政良醫師",
            "url": "https://drchenmd.tw/about"
        },
        "publisher": {
            "@type": "MedicalOrganization",
            "name": "陳政良醫師的跨領域醫療觀察",
            "url": "https://drchenmd.tw"
        },
        "datePublished": formattedDate,
        "url": `https://drchenmd.tw/posts/${post.slug}`,
        "keywords": post.tags.join(", ")
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
