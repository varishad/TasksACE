'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { ArrowRight, ChevronRight, ThumbsUp, Share2, MessageCircle, User, ChevronDown, Facebook, Linkedin, Twitter, Zap, Search, Layout as LayoutIcon, Settings, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { blogPosts } from '@/lib/blogData'

export default function NextJsForSmallBusiness() {
    // Filter out the current post from the related posts list
    const [relatedPosts] = useState(
        blogPosts.filter(post => post.slug !== "next-js-for-small-business")
    )

    const [activeId, setActiveId] = useState<string>('')
    const [isTocOpen, setIsTocOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = totalScroll / windowHeight
            setScrollProgress(scroll)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0% -35% 0%', threshold: 0 }
        )

        const sections = document.querySelectorAll('section[id]')
        sections.forEach((section) => observer.observe(section))

        return () => sections.forEach((section) => observer.unobserve(section))
    }, [])

    const tocItems = [
        { id: "intro", label: "Introduction" },
        { id: "performance", label: "The Performance Multiplier" },
        { id: "seo-benefits", label: "SEO by Default" },
        { id: "tasksace-difference", label: "The TasksACE Difference" },
        { id: "user-experience", label: "UX & Conversions" },
        { id: "scalability", label: "Scaling Your Business" },
        { id: "costs", label: "ROI Calculation" },
        { id: "next-steps", label: "How to Build Your Site" },
        { id: "faq", label: "Web Dev FAQs" }
    ]

    return (
        <main className="min-h-screen bg-white font-inter">
            <article className="pb-20">

                {/* Scroll Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-[4px] z-[100] bg-transparent">
                    <div
                        className="h-full bg-[#ff5e00] transition-all duration-150 ease-out"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>

                {/* RESPONSIVE HERO SECTION */}
                <div className="bg-white border-b border-gray-100 mb-10 lg:mb-12">
                    <div className="max-w-[1170px] mx-auto px-4 sm:px-[15px] pt-8 lg:pt-[55px] pb-10">
                        <nav className="mb-6 lg:mb-8 text-[15px] lg:text-[16px] font-medium text-[#001e00] leading-relaxed relative z-10">
                            <Link href="/blog" className="hover:underline transition-all">Resources</Link>
                            <span className="mx-2.5 text-[#5e6d55] text-[13px]">»</span>
                            <Link href="/blog" className="hover:underline transition-all">Articles</Link>
                            <span className="mx-2.5 text-[#5e6d55] text-[13px]">»</span>
                            <span>Web Development for Small Business 2026: Why Next.js is King</span>
                        </nav>

                        <div className="grid lg:grid-cols-[45%_55%] gap-[30px] items-start">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap items-center gap-2 mb-5">
                                    <span className="bg-[#f0f4f0] text-[#001e00] px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-medium leading-tight">
                                        Web Development
                                    </span>
                                    <span className="bg-[#f0f4f0] text-[#001e00] px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-medium leading-tight">
                                        Strategy
                                    </span>
                                    <span className="text-[#5e6d55] text-[13px] lg:text-[14px] font-medium ml-2">10 Min Read</span>
                                </div>

                                <h1 className="text-[36px] sm:text-[40px] lg:text-[48px] leading-[1.05] font-semibold text-[#111] mb-4 tracking-tighter">
                                    Web Development for Small Business 2026: Why Next.js is King
                                </h1>

                                <p className="text-[17px] lg:text-[19px] text-[#444] lg:leading-[1.6] leading-[1.5] mb-8 font-normal">
                                    In a world where attention spans are measured in milliseconds, your website performance is your competitive edge. Discover why Next.js is the framework of choice for small businesses looking to scale.
                                </p>

                                <div className="flex flex-col gap-6 pt-6 border-t border-gray-100 lg:border-none lg:pt-0 w-full relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full overflow-hidden shrink-0 bg-[#ff5e00] flex items-center justify-center p-[12px]">
                                            <Image src="/TasksACE.svg" alt="TasksACE Team" width={40} height={40} className="object-contain" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 text-left">
                                            <span className="text-[17px] lg:text-[18px] font-medium text-[#001e00]">TasksACE Team</span>
                                            <span className="text-[14px] lg:text-[15px] font-normal text-[#5e6d55]">Published | Feb 26, 2026</span>
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-3 bg-[#f2f5f2] px-4 py-2 lg:py-2.5 rounded-[8px] w-fit">
                                        <span className="text-[14px] lg:text-[15px] font-medium text-[#5e6d55]">Share:</span>
                                        <div className="flex items-center gap-3">
                                            <button className="text-[#5e6d55] hover:text-[#ff5e00] transition-colors border border-gray-200 p-1.5 rounded-md" aria-label="Share on X">
                                                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </button>
                                            <button className="text-[#5e6d55] hover:text-[#ff5e00] transition-colors border border-gray-200 p-1.5 rounded-md" aria-label="Share on LinkedIn">
                                                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </button>
                                            <button className="text-[#5e6d55] hover:text-[#ff5e00] transition-colors border border-gray-200 p-1.5 rounded-md" aria-label="Share on Facebook">
                                                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-10 lg:mt-0">
                                <div className="relative aspect-[3/2] w-full max-w-[652px] bg-white rounded-[20px] overflow-hidden shadow-sm">
                                    <Image
                                        src="/blog-nextjs-small-business-pro.png"
                                        alt="Next.js for Small Business - Pro Web Development 2026"
                                        title="Next.js Web Development Strategy for Growth-Focused Small Businesses"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 652px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                    <div className="flex flex-col lg:flex-row gap-[30px]">

                        {/* Left Sidebar (Desktop ToC) */}
                        <aside className="hidden lg:block w-full lg:w-[165px] flex-shrink-0">
                            <div className="sticky top-28">
                                <h3 className="text-[16px] font-medium text-[#1a0f00] tracking-tight mb-2 pb-2 border-b border-gray-100">Table of contents</h3>
                                <nav className="flex flex-col gap-1">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block text-[14px] transition-all py-1.5 ${activeId === item.id ? 'text-[#ff5e00] font-medium' : 'text-gray-500 hover:text-gray-900 font-medium'}`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <div className="flex-grow max-w-[652.5px]">

                            {/* MOBILE: Table of Contents Accordion */}
                            <div className="lg:hidden mb-12">
                                <button
                                    onClick={() => setIsTocOpen(!isTocOpen)}
                                    className="w-full flex items-center justify-between py-4 text-left border-y border-gray-100"
                                >
                                    <span className="text-[16px] font-medium text-[#1a0f00] tracking-tight">Table of contents</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-900 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isTocOpen && (
                                    <nav className="py-6 space-y-4 px-1 border-b border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                                        {tocItems.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                onClick={() => setIsTocOpen(false)}
                                                className={`block text-[14px] transition-colors py-1 ${activeId === item.id ? 'text-[#ff5e00] font-medium' : 'text-gray-600 font-medium'}`}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                )}
                            </div>

                            <div className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-normal prose-headings:scroll-mt-28 prose-headings:mb-4
                prose-p:text-[#222222] prose-p:leading-[32px] prose-p:text-[19px] prose-p:mb-5
                prose-a:text-[#ff5e00] prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-[20px] prose-img:shadow-lg
                prose-strong:text-gray-900
                prose-ul:list-disc prose-li:text-[#222222] prose-li:text-[19px] prose-li:leading-[32px] prose-li:mb-2 prose-ul:mb-5 font-inter">

                                <section id="intro" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">The "Ghost Town" Website Problem</h2>

                                    <p>Let’s be real for a second. Building a website for your small business in 2026 isn’t just about "checking a box." We’ve all seen them—those sites that look like they were abandoned in 2014, with clunky layouts and loading speeds that make a dial-up modem look fast.</p>

                                    <p>Your website is your 24/7 salesperson. If it’s slow, it’s basically a salesperson who takes a 5-minute coffee break every time a customer asks a question. Not exactly the "growth engine" you were promised, right?</p>

                                    <p>I’ve sat in dozens of strategy calls where founders tell me, "I built the site, but nobody is buying." When we look under the hood, it’s usually the same culprit: a generic site builder that’s choking their potential. That’s why we’re obsessed with <strong>Next.js</strong>. It’s not just tech-babble; it’s about giving your business a fighting chance in a crowded market.</p>

                                    <div className="bg-orange-50 border-l-4 border-[#ff5e00] p-4 rounded-r-lg mt-6">
                                        <p className="text-gray-700 font-medium italic">"A slow website is a quiet way of telling your customers you don't value their time. Don't let your tech be the reason you lose a sale."</p>
                                    </div>
                                </section>

                                <section id="performance" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">Speed Kills (Your Conversions)</h2>

                                    <p>We’ve all been there. You click a link, wait three seconds, and... *click*—you’re gone. You’ve already bounced to the competitor. It feels harsh, but that’s the reality of the mobile-first world we live in.</p>

                                    <p>In the dev world, we talk about Server-Side Rendering (SSR) like it’s some holy grail. And honestly? It kind of is. <strong>Next.js</strong> does the heavy lifting on the server so that by the time the page reaches your customer's phone, it’s already built. It’s instantaneous.</p>

                                    <div className="my-12 relative aspect-[16/9] w-full bg-gray-100 rounded-[20px] overflow-hidden shadow-lg not-prose">
                                        <Image
                                            src="/blog-web-performance-pro.png"
                                            alt="Web performance metrics showing Next.js speed optimization for better search ranking"
                                            title="Next.js Core Web Vitals and Performance Optimization Visualization"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 652px"
                                        />
                                    </div>

                                    <p>When your site snaps open, it sends a subconscious signal: <em>"These people know what they're doing."</em> It's that instant hit of professionalism that turns a "maybe" into a "yes."</p>
                                </section>

                                <section id="seo-benefits" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">Google’s Love Language</h2>

                                    <p>Google is like that one strict teacher you had in high school. They don't care about how "pretty" your site is if the structure is a mess. They want clean code, fast load times, and content that actually helps people.</p>

                                    <p>Next.js speaks that language fluently. It’s built from the ground up to be indexed perfectly. No more crossing your fingers and hoping the search crawlers can find your "About Me" page. It’s all there, laid out on a silver platter for them.</p>

                                    <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6 font-medium">
                                        <li><strong>No More Guessing:</strong> Your content is readable the moment it’s published.</li>
                                        <li><strong>Smooth Metrics:</strong> It naturally nails Google’s "Core Web Vitals" without you needing a PhD in computer science.</li>
                                        <li><strong>Total Control:</strong> You can tweak your SEO tags for every single page with zero friction.</li>
                                    </ul>
                                </section>

                                <section id="tasksace-difference" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">The TasksACE Difference: Tech + Talent</h2>

                                    <p>Here’s the thing: A great website is a piece of art, but a great business is a machine. You can have the fastest Next.js site in the world, but if nobody is managing your stock, answering customer emails, or updating your blog, the engine will eventually stall.</p>

                                    <p>That’s where <strong>TasksACE</strong> steps in. We don’t just build the car; we provide the pit crew.</p>

                                    <div className="grid sm:grid-cols-2 gap-6 not-prose my-10">
                                        <div className="bg-[#fff8f1] p-6 rounded-[20px] border border-[#ffe4cc]">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                                                <Settings className="w-6 h-6 text-[#ff5e00]" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">E-commerce Mastery</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Our <Link href="/services/ecommerce-assistant" className="text-[#ff5e00] hover:underline">E-commerce Assistants</Link> manage your Next.js store, from product listings to order processing, so you can focus on strategy.</p>
                                        </div>
                                        <div className="bg-[#fff8f1] p-6 rounded-[20px] border border-[#ffe4cc]">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                                                <LayoutIcon className="w-6 h-6 text-[#ff5e00]" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Admin Support</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">Let our <Link href="/services/administrative" className="text-[#ff5e00] hover:underline">Administrative Assistants</Link> handle the scheduling and data entry, keeping your business backend as smooth as your frontend.</p>
                                        </div>
                                    </div>

                                    <p>By combining cutting-edge web development with specialized virtual assistance, we give you a truly "hands-off" growth platform. It's the ultimate unfair advantage for small businesses in 2026.</p>
                                </section>

                                <section id="user-experience" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">Making Your Brand Feel "Alive"</h2>

                                    <p>Have you ever visited a site and felt like you were just looking at a digital brochure? It’s boring. It’s static. It feels... robotic.</p>

                                    <p>We believe your site should feel premium. We’re talking about subtle micro-animations that respond when you hover, smooth transitions between pages, and layouts that feel "expensive." Next.js gives us the freedom to build these experiences without dragging your site’s performance into the dirt.</p>

                                    <div className="bg-gray-900 rounded-[20px] p-8 text-white mb-8 border border-white/10 shadow-xl relative overflow-hidden not-prose">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e00]/10 rounded-full -mr-16 -mt-16"></div>
                                        <h3 className="text-xl font-normal mb-4 relative z-10 text-white">The "Vibe" ROI:</h3>
                                        <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                                            <div>
                                                <p className="text-[#ff5e00] text-sm font-normal uppercase tracking-wider mb-1">Custom Next.js Builds</p>
                                                <p className="text-3xl font-normal tracking-tight">3.5x <span className="text-sm text-gray-400 font-normal">Customer Trust Score</span></p>
                                            </div>
                                            <div>
                                                <p className="text-[#ff5e00] text-sm font-normal uppercase tracking-wider mb-1">Basic Template Sites</p>
                                                <p className="text-3xl font-normal tracking-tight">Meh. <span className="text-sm text-gray-400 font-normal">Standard Bounce Rates</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="scalability" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">Grow Without Breaking Things</h2>

                                    <p>The worst thing that can happen to a small business is outgrowing their tech. I’ve seen companies have to completely scrap their $5,000 website because they wanted to add a simple booking feature that their builder didn't support. It’s heartbreaking and expensive.</p>

                                    <p>Next.js is modular. It’s like LEGO for the web. We build your foundation today, and when you’re ready to add an e-commerce shop, a client dashboard, or an AI chatbot next year, we just plug it in. Your tech shouldn't be a bottleneck; it should be yours for the long haul.</p>
                                </section>

                                <section id="costs" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4">ROI: Investing vs Spending</h2>

                                    <p>Many small business owners view a website as an "expense." High-growth founders view it as an "investment." When you partner with TasksACE, we optimize your spend by building for long-term ROI.</p>

                                    <div className="overflow-x-auto not-prose mt-6">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-100 italic">
                                                    <th className="text-left p-4 border text-gray-900 font-normal">Feature</th>
                                                    <th className="text-left p-4 border bg-orange-50 text-orange-700 font-normal">TasksACE Custom (Next.js)</th>
                                                    <th className="text-left p-4 border text-gray-900 font-normal">Generic Site Builder</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-gray-700"><td className="p-4 border font-medium">Load Speed</td><td className="p-4 border bg-orange-50">&lt; 1s (Lightning)</td><td className="p-4 border font-medium">3s - 8s (Frustrating)</td></tr>
                                                <tr className="text-gray-700"><td className="p-4 border font-medium">SEO Control</td><td className="p-4 border bg-orange-50">Total Control</td><td className="p-4 border font-medium">Limited & Generic</td></tr>
                                                <tr className="text-gray-700"><td className="p-4 border font-medium">Scalability</td><td className="p-4 border bg-orange-50">Unlimited LEGO-style</td><td className="p-4 border font-medium">Hard Cap</td></tr>
                                                <tr className="bg-gray-50 font-normal text-gray-900 italic">
                                                    <td className="p-4 border">Business Outcome</td>
                                                    <td className="p-4 border bg-orange-100 text-orange-700 italic">Scalable Growth Engine</td>
                                                    <td className="p-4 border italic">Static Digital Brochure</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="next-steps" className="mb-10">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-4 tracking-tight">How to Build Your Site</h2>
                                    <div className="grid gap-6 not-prose">
                                        {[
                                            { step: "Brand Audit", desc: "Identify your target audience and the 'WOW' factor you want to achieve." },
                                            { step: "Choose Your Stack", desc: "We recommend Next.js + TailwindCSS + Supabase for the most robust small business setup." },
                                            { step: "Design First", desc: "Always design the user journey before writing a single line of code." },
                                            { step: "Optimization", desc: "Compress images, use lazy loading, and ensure your code is lean." },
                                            { step: "Continuous SEO", desc: "A website is never 'done.' Regularly update your content and monitor rankings." },
                                            { step: "Partner with Experts", desc: "Don't waste time learning code if you're a CEO. Hire a team to handle the heavy lifting." }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 bg-white border border-gray-100 rounded-[20px] flex gap-6 hover:border-primary-200 transition-colors">
                                                <div className="text-[#ff5e00] font-normal font-mono text-xl">0{i + 1}</div>
                                                <div>
                                                    <h4 className="font-normal text-gray-900 mb-1">{item.step}</h4>
                                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="faq" className="mb-20">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-8 tracking-tight">Web Dev FAQs</h2>
                                    <div className="space-y-4 not-prose">
                                        {[
                                            { q: "Is Next.js too complex for a small business?", a: "While it has a learning curve, it's actually simpler to manage in the long run because of its modular nature. It prevents the 'spaghetti code' common in older platforms." },
                                            { q: "Do I need to pay for hosting?", a: "Platforms like Vercel offer generous free tiers for small businesses, making hosting costs negligible compared to traditional dedicated servers." },
                                            { q: "Can I migrate my existing site to Next.js?", a: "Yes, you can migrate content while keeping your existing domain and SEO ranking. In fact, many see a ranking boost immediately after migrating." },
                                            { q: "How long does it take to build a custom Next.js site?", a: "A professional landing page can take 1-2 weeks, while a full multipage site typically takes 4-8 weeks to allow for proper SEO and design work." }
                                        ].map((faq, index) => (
                                            <div key={index} className="border border-gray-100 rounded-[20px]">
                                                <details className="group">
                                                    <summary className="p-5 cursor-pointer font-normal flex justify-between items-center text-gray-900">
                                                        {faq.q} <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                                                    </summary>
                                                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed font-medium italic">{faq.a}</div>
                                                </details>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Author Spotlight */}
                                <div className="mt-20 not-prose">
                                    <h2 className="text-[38px] font-normal text-gray-900 mb-8 tracking-tight">Author Spotlight</h2>
                                    <div className="p-5 pr-20 bg-[#fff8f1] rounded-[20px] border-none flex flex-col gap-8 items-start">
                                        <div className="flex items-center gap-6">
                                            <div className="relative w-[100px] h-[100px] bg-[#ff5e00] rounded-[20px] flex items-center justify-center overflow-hidden border-none shadow-none flex-shrink-0">
                                                <Image src="/TasksACE.svg" alt="TasksACE" width={80} height={80} className="object-contain" />
                                            </div>
                                            <h3 className="text-base font-medium text-[#1a0f00] leading-tight tracking-normal">The TasksACE Team</h3>
                                        </div>
                                        <div className="max-w-3xl">
                                            <p className="text-[14px] leading-[22px] font-medium text-[#9a3412] italic">
                                                TasksACE is more than just virtual assistants. We are your fractional operations team, helping you build systems and technology that scale with your vision.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <aside className="hidden lg:block w-full lg:w-[262.5px] flex-shrink-0">
                            <div className="mb-8">
                                <h3 className="text-[16px] font-medium text-[#1a0f00] tracking-tight mb-3 pb-2 border-b border-gray-100">Related articles</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((post, i) => (
                                        <Link key={i} href={`/blog/${post.slug}`} className="group block">
                                            <h4 className="text-[14px] font-medium text-gray-900 group-hover:text-[#ff5e00] transition-colors leading-snug">{post.title}</h4>
                                            <span className="text-[12px] text-gray-400">{post.readTime}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="sticky top-28 bg-[#fff8f1] rounded-[20px] p-8 shadow-sm relative overflow-hidden group border border-[#ffe4cc]">
                                <h3 className="text-xl font-normal mb-4 relative z-10 text-[#1a0f00]">Ready to Scale?</h3>
                                <p className="text-[#9a3412] mb-8 text-sm leading-relaxed relative z-10 font-medium italic">Partner with TasksACE and let's build your 2026 growth engine today.</p>
                                <Link href="/contact" className="w-full bg-[#ff5e00] text-center text-white font-medium py-[9px] px-4 rounded-[20px] hover:bg-[#e65500] transition-colors shadow-sm relative z-10 text-[14px] leading-[14px] block">Get Started with TasksACE</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            {/* Bottom Articles Sections */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
                            <h2 className="text-[32px] font-normal text-gray-900 tracking-tight">Latest articles</h2>
                            <Link href="/blog" className="text-[14px] font-medium text-[#ff5e00] hover:text-[#e65500] flex items-center gap-1.5 transition-colors">
                                View all articles <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.slice(0, 3).map((post, index) => (
                                <Link href={`/blog/${post.slug}`} key={index} className="group flex flex-col h-full">
                                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-[12px] bg-gray-100">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="bg-gray-100 text-[#ff5e00] px-3 py-1 rounded-full text-[12px] font-medium">{post.category}</span>
                                    </div>
                                    <h3 className="text-[20px] font-normal text-gray-900 mb-4 group-hover:text-[#ff5e00] transition-colors leading-tight line-clamp-2">{post.title}</h3>
                                    <div className="mt-auto pt-4 flex items-center gap-4 text-[13px] text-gray-400 font-normal border-t border-gray-50">
                                        <span>{post.date}</span>
                                        <span className="w-[1px] h-3 bg-gray-200"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Popular Articles */}
                    <div>
                        <div className="mb-10 pb-4 border-b border-gray-100">
                            <h2 className="text-[32px] font-normal text-gray-900 tracking-tight">Popular articles</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[...relatedPosts].reverse().slice(0, 3).map((post, index) => (
                                <Link href={`/blog/${post.slug}`} key={index} className="group flex flex-col h-full">
                                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-[12px] bg-gray-100">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="bg-gray-100 text-[#ff5e00] px-3 py-1 rounded-full text-[12px] font-medium">{post.category}</span>
                                    </div>
                                    <h3 className="text-[20px] font-normal text-gray-900 mb-4 group-hover:text-[#ff5e00] transition-colors leading-tight line-clamp-2">{post.title}</h3>
                                    <div className="mt-auto pt-4 flex items-center gap-4 text-[13px] text-gray-400 font-normal border-t border-gray-50">
                                        <span>{post.date}</span>
                                        <span className="w-[1px] h-3 bg-gray-200"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
