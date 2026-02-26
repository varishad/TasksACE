'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { ArrowRight, ChevronRight, ThumbsUp, Share2, MessageCircle, User, ChevronDown, Facebook, Linkedin, Twitter, Zap, Search, Layout as LayoutIcon, Settings, Globe, Video, PlaySquare, Scissors, Wand2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { blogPosts } from '@/lib/blogData'

export default function VideoEditingForSmallBusiness() {
    // Filter out the current post from the related posts list
    const [relatedPosts] = useState(
        blogPosts.filter(post => post.slug !== "video-editing-for-small-business")
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
        { id: "intro", label: "The Shift to Video" },
        { id: "why-invest", label: "Why Invest in Video?" },
        { id: "quality-matters", label: "Why Quality Edits Matter" },
        { id: "how-we-help", label: "How TasksACE Helps" },
        { id: "cost-vs-value", label: "Cost vs. Value" },
        { id: "social-media", label: "Winning on Social Media" },
        { id: "next-steps", label: "Getting Started" },
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
                            <span>Video Editing for Small Business 2026: Elevate Your Brand Story</span>
                        </nav>

                        <div className="grid lg:grid-cols-[52%_48%] gap-8 lg:gap-14 items-start">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    <span className="bg-[#f9f9f9] text-[#001e00] px-3 py-1 rounded-md text-[13px] font-medium">
                                        Content Creation
                                    </span>
                                    <span className="bg-[#f9f9f9] text-[#001e00] px-3 py-1 rounded-md text-[13px] font-medium">
                                        Article
                                    </span>
                                    <span className="text-[#5e6d55] text-[13px] font-medium ml-2">9 Min Read</span>
                                </div>

                                <h1 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.1] font-bold text-[#001e00] mb-6 tracking-tight">
                                    Video Editing for Small Business 2026: Elevate Your Brand Story
                                </h1>

                                <p className="text-[18px] lg:text-[20px] text-[#5e6d55] leading-[1.55] mb-8 max-w-[540px]">
                                    Attention spans are shrinking, but video engagement is skyrocketing. Learn how professional video editing can dramatically boost your brand's ROI and customer trust.
                                </p>

                                <div className="space-y-6">
                                    {/* Author Block */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#ff5e00] flex items-center justify-center">
                                            <Image src="/TasksACE.svg" alt="TasksACE Team" fill className="object-contain p-[10px]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[16px] font-semibold text-[#001e00]">The TasksACE Team</span>
                                            <span className="text-[14px] text-[#5e6d55]">Published | Feb 26, 2026</span>
                                        </div>
                                    </div>

                                    {/* Share Block */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-[14px] font-medium text-[#5e6d55]">Share:</span>
                                        <div className="flex items-center gap-2 bg-[#f9f9f9] p-1.5 rounded-[8px]">
                                            <button className="w-8 h-8 flex items-center justify-center text-[#5e6d55] hover:text-[#001e00] transition-colors" aria-label="Share on X">
                                                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center text-[#5e6d55] hover:text-[#001e00] transition-colors" aria-label="Share on LinkedIn">
                                                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 flex items-center justify-center text-[#5e6d55] hover:text-[#001e00] transition-colors" aria-label="Share on Facebook">
                                                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end lg:mt-0">
                                <div className="relative aspect-[16/11] w-full bg-white rounded-[16px] overflow-hidden">
                                    <Image
                                        src="/blog-video-editing-pro.png"
                                        alt="Video Editing for Small Business 2026"
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
                        <aside className="hidden lg:block w-full lg:w-[185px] flex-shrink-0">
                            <div className="sticky top-28">
                                <h3 className="text-[14px] font-bold text-[#001e00] uppercase tracking-wider mb-4 pb-3 border-b border-gray-100">Table of Contents</h3>
                                <nav className="flex flex-col gap-1.5">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`text-[15px] leading-snug py-1.5 transition-colors duration-200 border-l-2 pl-4 ${activeId === item.id
                                                ? 'text-[#ff5e00] font-semibold border-[#ff5e00]'
                                                : 'text-[#5e6d55] hover:text-[#001e00] border-transparent hover:border-gray-300'
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Mobile ToC Toggle */}
                        <div className="lg:hidden mb-10 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setIsTocOpen(!isTocOpen)}
                                className="w-full flex items-center justify-between p-4 bg-[#f9f9f9] text-[16px] font-semibold text-[#001e00]"
                                aria-expanded={isTocOpen}
                            >
                                Table of Contents
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isTocOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isTocOpen && (
                                <nav className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
                                    {tocItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`text-[15px] py-1 transition-colors duration-200 ${activeId === item.id
                                                ? 'text-[#ff5e00] font-semibold'
                                                : 'text-[#5e6d55]'
                                                }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsTocOpen(false);
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            )}
                        </div>

                        {/* Main Article Content */}
                        <div className="flex-1 w-full lg:max-w-[calc(100%-485px)]">
                            <div className="prose prose-lg max-w-none text-[#5e6d55] leading-[1.75]
                                prose-headings:text-[#001e00] prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:text-[32px] lg:prose-h2:text-[38px] prose-h2:mt-12 prose-h2:mb-4
                                prose-h3:text-[24px] lg:prose-h3:text-[28px] prose-h3:mt-10 prose-h3:mb-4
                                prose-p:text-[18px] lg:text-[19px] prose-p:mb-6
                                prose-ul:mt-2 prose-ul:mb-8 prose-li:text-[18px] prose-li:my-1
                                prose-a:text-[#ff5e00] prose-a:font-medium hover:prose-a:underline
                                prose-strong:text-[#001e00] prose-strong:font-bold
                                selection:bg-[#ff5e00] selection:text-white">

                                <section id="intro" className="scroll-mt-28">
                                    <p className="text-[20px] lg:text-[23px] leading-[1.6] font-normal text-[#001e00] mb-8 max-w-[800px]">
                                        If a picture is worth a thousand words, a video is worth a million. In 2026, consumers don't just want to read about your product or service—they want to see it, hear it, and experience it. But raw footage isn't enough. <strong className="text-[#001e00]">Professional video editing</strong> is the invisible art that turns simple clips into compelling, conversion-driving narratives.
                                    </p>
                                    <p>
                                        Whether you're running Facebook ads, posting TikToks, or embedding product demos on your landing pages, the quality of your video editing directly reflects the quality of your brand. Let's explore why small businesses can no longer afford to ignore this critical medium.
                                    </p>
                                </section>

                                <section id="why-invest" className="scroll-mt-28">
                                    <h2>Why Invest in Professional Video?</h2>
                                    <p>
                                        The algorithm favors video. Across every major platform—from Instagram Reels to LinkedIn—video content receives overwhelmingly higher engagement, shares, and watch times compared to static images or text.
                                    </p>

                                    <div className="bg-[#fff5f0] p-8 rounded-2xl my-8 border border-[#ff5e00]/10">
                                        <h3 className="text-[#001e00] mt-0 mb-6 flex items-center gap-3">
                                            <PlaySquare className="w-6 h-6 text-[#ff5e00]" />
                                            The Video Advantage
                                        </h3>
                                        <ul className="space-y-4 mb-0 pl-0 list-none">
                                            <li className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#ff5e00]/10 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-[#ff5e00] text-sm font-bold">1</span>
                                                </div>
                                                <div>
                                                    <strong className="text-[#001e00] block mb-1">Higher Conversion Rates</strong>
                                                    <span className="text-[#444] text-[16px]">Landing pages with professional video can increase conversions by up to 80%.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#ff5e00]/10 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-[#ff5e00] text-sm font-bold">2</span>
                                                </div>
                                                <div>
                                                    <strong className="text-[#001e00] block mb-1">Improved Trust and Authenticity</strong>
                                                    <span className="text-[#444] text-[16px]">Seeing a face, hearing a voice, and watching a product in action builds immediate credibility.</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#ff5e00]/10 flex items-center justify-center shrink-0 mt-1">
                                                    <span className="text-[#ff5e00] text-sm font-bold">3</span>
                                                </div>
                                                <div>
                                                    <strong className="text-[#001e00] block mb-1">Algorithm Supremacy</strong>
                                                    <span className="text-[#444] text-[16px]">Platforms prioritize video, meaning your content reaches vastly more people organically.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="quality-matters" className="scroll-mt-28">
                                    <h2>Why Quality Edits Matter</h2>
                                    <p>
                                        Taking a video on your phone is easy. Making someone watch it to the end is hard. The difference lies in the edit. A choppy, unpolished video with bad audio reflects poorly on your business, making you look amateurish.
                                    </p>
                                    <p>
                                        Professional video editing involves pacing, color grading, sound design, and text overlays that retain viewer attention. In a world where you have less than three seconds to hook an audience, every cut counts.
                                    </p>

                                    {/* Middle Content Image */}
                                    <figure className="my-10">
                                        <Image
                                            src="/blog-video-editing-content.png"
                                            alt="Professional video editing timeline and color grading interface"
                                            width={800}
                                            height={450}
                                            className="w-full rounded-[16px] object-cover"
                                        />
                                        <figcaption className="text-center text-[14px] text-[#5e6d55] mt-3">
                                            Expert editing turns raw footage into a compelling brand narrative.
                                        </figcaption>
                                    </figure>

                                    <h3>Key Elements of a Professional Edit</h3>
                                    <ul>
                                        <li><strong>Pacing and Flow:</strong> Removing awkward pauses and "umms" to keep the energy high.</li>
                                        <li><strong>Audio Mixing:</strong> Balancing voiceovers, background music, and removing static noise so your message is crystal clear.</li>
                                        <li><strong>Color Correction:</strong> Making your footage look cinematic, consistent, and on-brand.</li>
                                        <li><strong>Dynamic Captions:</strong> Essential for social media where up to 85% of videos are watched on mute.</li>
                                    </ul>
                                </section>

                                <section id="how-we-help" className="scroll-mt-28">
                                    <h2>How TasksACE Transforms Your Footage</h2>
                                    <p>
                                        Editing video takes hours—time you should be spending running your business. That's where TasksACE comes in. Our team of expert video editors acts as your dedicated post-production studio.
                                    </p>
                                    <p>
                                        You shoot the raw footage on your phone or camera; we handle the rest. From adding your branded logos and lower-thirds to cutting dynamic reels tailored for TikTok and Instagram, we make your business look like a Fortune 500 company on a small business budget.
                                    </p>
                                    <ul className="list-none pl-0">
                                        <li className="flex items-center gap-3 mb-3">
                                            <Scissors className="w-5 h-5 text-[#ff5e00] shrink-0" />
                                            <span><strong>Short-form (Reels/TikTok):</strong> High-energy, fast-paced cuts designed for virality.</span>
                                        </li>
                                        <li className="flex items-center gap-3 mb-3">
                                            <Wand2 className="w-5 h-5 text-[#ff5e00] shrink-0" />
                                            <span><strong>Long-form (YouTube/Webinars):</strong> Educational, well-paced content that establishes authority.</span>
                                        </li>
                                        <li className="flex items-center gap-3 mb-3">
                                            <Video className="w-5 h-5 text-[#ff5e00] shrink-0" />
                                            <span><strong>Ads & Promos:</strong> Conversion-focused editing designed to sell products.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section id="cost-vs-value" className="scroll-mt-28">
                                    <h2>Cost vs. Value</h2>
                                    <p>
                                        Learning Premiere Pro or Final Cut, buying an expensive computer to render files, and spending your weekends editing is a massive drain on your resources.
                                    </p>
                                    <p>
                                        By partnering with TasksACE, you get polished, ready-to-post content delivered directly to your inbox. You pay for the result, not the software subscriptions or the learning curve. It's the highest leverage investment you can make in your marketing strategy today.
                                    </p>
                                </section>

                                <section id="social-media" className="scroll-mt-28">
                                    <h2>Winning on Social Media</h2>
                                    <p>
                                        The algorithm rewards consistency. To stay relevant, you need to post high-quality video content regularly. Trying to maintain that output alone leads to burnout.
                                    </p>
                                    <p>
                                        A streamlined video editing pipeline allows you to batch record content in one day, send it off to TasksACE, and receive a month's worth of highly engaging, perfectly edited social media content.
                                    </p>
                                </section>

                                <section id="next-steps" className="scroll-mt-28">
                                    <h2>Ready to Elevate Your Content?</h2>
                                    <p>
                                        Stop letting great ideas die because you don't have the time to edit them. Start leveraging the power of professional video today.
                                    </p>

                                    <div className="mt-10 bg-gradient-to-br from-[#fff5f0] to-[#fff] border border-[#ff5e00]/20 p-8 lg:p-10 rounded-[24px] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5e00]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5e00]/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="inline-flex items-center gap-2 text-[#ff5e00] font-semibold text-[14px] uppercase tracking-wider mb-3">
                                                    <Video className="w-5 h-5" />
                                                    Scale Your Content
                                                </div>
                                                <h3 className="text-[#001e00] text-[26px] lg:text-[32px] mt-0 mb-3 font-bold leading-tight">Ready to stand out?</h3>
                                                <p className="text-[#444] text-[17px] mb-0 max-w-xl mx-auto lg:mx-0">
                                                    Stop wasting hours struggling with complicated software. Hand off your raw clips to our expert editors and get viral-ready videos delivered.
                                                </p>
                                            </div>
                                            <div className="shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
                                                <Link href="/contact" className="group flex items-center justify-center bg-[#ff5e00] hover:bg-[#e65500] text-white px-8 py-4 rounded-xl font-medium transition-all text-[17px] shadow-lg shadow-[#ff5e00]/20 hover:shadow-[#ff5e00]/40 hover:-translate-y-0.5 w-full lg:w-auto">
                                                    Get Started Today
                                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>

                            {/* Author Bio Footer */}
                            <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col sm:flex-row gap-8 items-start">
                                <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden bg-[#ff5e00] flex items-center justify-center shrink-0">
                                    <Image src="/TasksACE.svg" alt="The TasksACE Team" fill className="object-contain p-[14px]" />
                                </div>
                                <div>
                                    <h4 className="text-[20px] font-bold text-[#001e00] mb-3">The TasksACE Team</h4>
                                    <p className="text-[#5e6d55] text-[17px] leading-[1.7] max-w-2xl">
                                        We are digital strategists, expert editors, and growth specialists dedicated to helping small businesses succeed in the digital economy through high-quality visual content and reliable support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Related Posts */}
                        <aside className="w-full lg:w-[240px] flex-shrink-0 mt-12 lg:mt-0 lg:pl-[15px]">
                            <div className="sticky top-28">
                                <h3 className="text-[16px] font-medium text-[#1a0f00] tracking-tight mb-6 pb-2 border-b border-gray-100">Read next</h3>
                                <div className="flex flex-col gap-8">
                                    {relatedPosts.map((post, index) => (
                                        <Link href={`/blog/${post.slug}`} key={index} className="group block">
                                            <div className="relative aspect-[3/2] w-full rounded-[12px] overflow-hidden mb-3">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 1024px) 100vw, 240px"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 mb-2 text-[12px] font-bold text-[#ff5e00] uppercase tracking-wide">
                                                <span>{post.category}</span>
                                            </div>
                                            <h4 className="text-[16px] font-bold text-[#001e00] leading-snug group-hover:text-[#ff5e00] transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>

                {/* Bottom Articles Sections */}
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Latest Articles */}
                        <div className="mb-20">
                            <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
                                <h2 className="text-[32px] font-normal text-gray-900 tracking-tight">Latest articles</h2>
                                <Link href="/blog" className="text-[14px] font-medium text-[#ff5e00] hover:text-[#e65500] flex items-center gap-1.5 transition-colors">
                                    View all articles <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedPosts.map((post, index) => (
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
                                {[...relatedPosts].reverse().map((post, index) => (
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
            </article>
        </main>
    )
}
