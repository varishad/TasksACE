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
        title: "Virtual Assistant for Small Business: The 2026 Strategy to Scale Your Growth",
        excerpt: "Stop trading your hours for dollars. This ultimate guide reveals how the world's most successful small businesses use virtual assistants to reclaim 40+ hours a month.",
        image: "/blog-va-small-business.png",
        category: "Business Strategy",
        date: "Feb 25, 2026",
        readTime: "12 min read",
        author: "TasksACE Team",
        slug: "virtual-assistant-for-small-business",
        isFeatured: true
    }
];
