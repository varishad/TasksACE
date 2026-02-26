export interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    slug: string;
    isFeatured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        title: "Video Editing for Small Business 2026: Elevate Your Brand Story",
        excerpt: "Attention spans are shrinking, but video engagement is skyrocketing. Learn how professional video editing can dramatically boost your brand's ROI and customer trust.",
        image: "/blog-video-editing-pro.png",
        category: "Content Creation",
        date: "Feb 26, 2026",
        readTime: "8 min read",
        author: "TasksACE Team",
        slug: "video-editing-for-small-business",
        isFeatured: false
    },
    {
        title: "Web Development for Small Business 2026: Why Next.js is King",
        excerpt: "Performance is no longer optional. Discover why Next.js is the ultimate framework for small businesses looking to outrank competitors and convert visitors in 2026.",
        image: "/blog-nextjs-small-business-pro.png",
        category: "Web Development",
        date: "Feb 26, 2026",
        readTime: "10 min read",
        author: "TasksACE Team",
        slug: "next-js-for-small-business",
        isFeatured: true
    },
    {
        title: "Virtual Assistant for Small Business: The 2026 Strategy to Scale Your Growth",
        excerpt: "Stop trading your hours for dollars. This ultimate guide reveals how the world's most successful small businesses use virtual assistants to reclaim 40+ hours a month.",
        image: "/blog-va-small-business.png",
        category: "Business Strategy",
        date: "Feb 25, 2026",
        readTime: "12 min read",
        author: "TasksACE Team",
        slug: "virtual-assistant-for-small-business",
        isFeatured: false
    }
];
