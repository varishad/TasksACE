'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { ArrowRight, ChevronRight, ThumbsUp, Share2, MessageCircle, User, ChevronDown, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface RelatedPost {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  readTime: string;
}

export default function VirtualAssistantForSmallBusiness() {
  const [relatedPosts] = useState<RelatedPost[]>([
    {
      title: "How to Hire the Perfect Virtual Assistant for Your E-commerce Business",
      excerpt: "A complete guide to finding and hiring the right VA for your online store...",
      slug: "hire-virtual-assistant-ecommerce",
      image: "/blog/ecommerce-va.jpg",
      readTime: "10 min read"
    },
    {
      title: "10 Tasks to Outsource to a Virtual Assistant Today",
      excerpt: "Discover the top tasks that will free up your time and help your business grow...",
      slug: "tasks-to-outsource-va",
      image: "/blog/tasks-outsource.jpg",
      readTime: "8 min read"
    },
    {
      title: "Virtual Assistant vs In-House Assistant: What's Best for Your Business?",
      excerpt: "Compare the costs and benefits of hiring a VA vs a full-time employee...",
      slug: "va-vs-inhouse",
      image: "/blog/va-vs-inhouse.jpg",
      readTime: "12 min read"
    }
  ])

  const [activeId, setActiveId] = useState<string>('')
  const [isTocOpen, setIsTocOpen] = useState(false)

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
    { id: "what-is-va", label: "What is a VA?" },
    { id: "why-small-business", label: "Why You Need a VA" },
    { id: "benefits", label: "Key Benefits" },
    { id: "tasks-to-outsource", label: "Tasks to Outsource" },
    { id: "costs", label: "Cost Comparison" },
    { id: "how-to-hire", label: "How to Hire" },
    { id: "faq", label: "FAQs" }
  ]

  return (
    <main className="min-h-screen bg-white">
      <article className="pb-20">

        {/* DESKTOP: Split Hero Header (hidden on mobile) */}
        <div className="hidden lg:block bg-[#f9f9f9] border-b border-gray-100 mb-10 lg:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Title & Meta */}
              <div className="order-2 lg:order-1">
                <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-gray-500">
                  <Link href="/blog" className="hover:text-primary-600 transition-colors">Resources</Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <Link href="/blog" className="hover:text-primary-600 transition-colors">Articles</Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900 line-clamp-1">Virtual Assistant for Small Business</span>
                </nav>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">Small Business</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">Article</span>
                  <span className="text-gray-500 text-xs font-semibold">12 Min Read</span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-[1.2] tracking-tight">
                  Virtual Assistant for Small Business: The Ultimate Guide to Growing Your Business in 2026
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                  Discover how hiring a virtual assistant can transform your small business. Learn the benefits, costs, and how to find the perfect VA for your needs.
                </p>

                <div className="flex items-center gap-4 py-8 border-y border-gray-100 mb-8">
                  <div className="relative w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                    <Image src="/tasksace-logo.png" alt="TasksACE Team" width={40} height={40} className="object-contain" />
                  </div>
                  <div>
                    <span className="block text-gray-900 font-bold text-lg">TasksACE Editorial Team</span>
                    <span className="text-gray-500 text-sm">Published | Feb 24, 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Share:</span>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-600 hover:text-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></button>
                    <button className="text-gray-600 hover:text-[#0A66C2] transition-colors"><Linkedin className="w-4 h-4" /></button>
                    <button className="text-gray-600 hover:text-[#1877F2] transition-colors"><Facebook className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Image */}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5 group">
                  <Image src="/blog-va-small-business.png" alt="Virtual Assistant for Small Business" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-orange-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: Linear Header Section (Upwork Style - matched) */}
        <div className="lg:hidden max-w-[800px] mx-auto px-4 sm:px-6 pt-8 pb-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-[13px] font-medium text-gray-500">
            <Link href="/blog" className="hover:text-primary-600 transition-colors">Resources</Link>
            <span className="text-gray-300">»</span>
            <Link href="/blog" className="hover:text-primary-600 transition-colors">Articles</Link>
            <span className="text-gray-300">»</span>
            <span className="text-gray-900 line-clamp-1">Virtual Assistant for Small Business</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-gray-100/80 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold">Small Business</span>
            <span className="bg-gray-100/80 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold">Article</span>
            <span className="text-gray-500 text-xs font-semibold ml-2">12 Min Read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            Virtual Assistant for Small Business: The Ultimate Guide to Growing Your Business in 2026
          </h1>

          <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
            Discover how hiring a virtual assistant can transform your small business. Learn the benefits, costs, and how to find the perfect VA for your needs.
          </p>

          {/* Author/Share Bar (Matched Upwork) */}
          <div className="flex flex-col gap-6 py-6 border-t border-gray-100 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                  <Image src="/tasksace-logo.png" alt="TasksACE Team" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <span className="block text-gray-900 font-bold text-[15px] leading-tight">TasksACE Editorial Team</span>
                  <span className="text-gray-500 text-[12px]">Published | Feb 24, 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                <span className="text-[13px] font-bold text-gray-500">Share:</span>
                <div className="flex items-center gap-3">
                  <Twitter className="w-3.5 h-3.5 text-gray-600 cursor-pointer" />
                  <Linkedin className="w-3.5 h-3.5 text-gray-600 cursor-pointer text-xs" />
                  <Facebook className="w-3.5 h-3.5 text-gray-600 cursor-pointer text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
            <Image src="/blog-va-small-business.png" alt="Virtual Assistant for Small Business" fill className="object-cover" />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Sidebar (Desktop ToC) */}
            <aside className="hidden lg:block w-full lg:w-[240px] flex-shrink-0">
              <div className="sticky top-28">
                <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-6">In this article</h3>
                <nav className="flex flex-col gap-3">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-[15px] transition-all py-1 ${activeId === item.id ? 'text-primary-600 font-bold' : 'text-gray-500 hover:text-gray-900 font-medium'}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow max-w-[720px]">

              {/* MOBILE: Table of Contents Accordion (Matched Upwork) */}
              <div className="lg:hidden mb-12 border-b border-gray-100">
                <button
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full flex items-center justify-between py-4 text-left border-t border-gray-100"
                >
                  <span className="text-[18px] font-bold text-gray-900">Table of Contents</span>
                  <ChevronDown className={`w-5 h-5 text-gray-900 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTocOpen && (
                  <nav className="pb-8 space-y-4 px-1 animate-in fade-in slide-in-from-top-2 duration-300">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsTocOpen(false)}
                        className={`block text-[15px] transition-colors ${activeId === item.id ? 'text-primary-600 font-bold' : 'text-gray-600'}`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {/* Article Sections (RESTORED CONTENT) */}
              <div className="prose prose-lg prose-gray max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:scroll-mt-28
                prose-p:text-gray-600 prose-p:leading-[1.8]
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-3xl prose-img:shadow-lg
                prose-strong:text-gray-900
                prose-ul:list-disc prose-li:text-gray-600">

                <section id="what-is-va" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">What is a Virtual Assistant?</h2>
                  <p>A <strong>virtual assistant for small business</strong> is a remote professional who provides administrative, technical, or creative support to entrepreneurs and small business owners from a distant location. Unlike traditional employees, virtual assistants work remotely and typically charge hourly or project-based rates.</p>
                  <p>Small businesses increasingly turn to <strong>virtual assistant services for small businesses</strong> because they offer flexibility, cost savings, and access to specialized skills without the overhead of hiring full-time employees.</p>
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                    <p className="text-gray-700 font-medium">"A virtual assistant is like having a dedicated team member, but without the office space, equipment, or benefits costs."</p>
                  </div>
                </section>

                <section id="why-small-business" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Small Businesses Need Virtual Assistants in 2026</h2>
                  <p>The landscape of <strong>small business operations</strong> has dramatically changed. With the rise of remote work, AI tools, and global talent pools, <strong>hiring a virtual assistant for small business</strong> has become not just an option, but a strategic necessity.</p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
                    <li>Limited budgets require smarter resource allocation</li>
                    <li>Owners need to focus on revenue-generating activities</li>
                    <li>Competition from businesses already using VAs</li>
                    <li>Access to specialized skills on-demand</li>
                    <li>Scalability without fixed costs</li>
                  </ul>
                  <p>According to recent data, small businesses that utilize virtual assistant services report saving an average of 20+ hours per week on administrative tasks.</p>
                </section>

                <section id="benefits" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Top Benefits of Hiring a Virtual Assistant</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Savings</h3>
                      <p className="text-gray-600 text-sm">Save up to 70% compared to hiring a full-time employee. No office space, equipment, or benefits costs.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Time Freedom</h3>
                      <p className="text-gray-600 text-sm">Free up 20+ hours weekly to focus on growing your business, serving customers, and strategic planning.</p>
                    </div>
                  </div>
                </section>

                <section id="tasks-to-outsource" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Best Tasks to Outsource</h2>
                  <div className="space-y-4 mb-6">
                    {[
                      { task: "Email Management", desc: "Inbox organization, response handling, and email marketing" },
                      { task: "Calendar Scheduling", desc: "Appointment booking, meeting coordination, and reminders" },
                      { task: "Data Entry", desc: "CRM updates, spreadsheet management, and database maintenance" },
                      { task: "Customer Support", desc: "Live chat, email support, and FAQ management" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{index + 1}</div>
                        <div>
                          <h4 className="font-bold text-gray-900">{item.task}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="costs" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cost Comparison: VA vs In-House</h2>
                  <div className="overflow-x-auto not-prose">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-4 border text-gray-900">Cost Factor</th>
                          <th className="text-left p-4 border bg-primary-50 text-primary-700">Virtual Assistant</th>
                          <th className="text-left p-4 border text-gray-900">In-House Employee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Annual Salary</td><td className="p-4 border bg-primary-50">$15k - $36k</td><td className="p-4 border">$40k - $60k+</td></tr>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Benefits</td><td className="p-4 border bg-primary-50">$0</td><td className="p-4 border">$10k - $20k/year</td></tr>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Office Space</td><td className="p-4 border bg-primary-50">$0</td><td className="p-4 border">$5k - $15k/year</td></tr>
                        <tr className="bg-gray-50 font-bold text-gray-900">
                          <td className="p-4 border">Total Annual Cost</td>
                          <td className="p-4 border bg-primary-100 text-primary-700">$15,000 - $36,000</td>
                          <td className="p-4 border">$58,000 - $103,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="how-to-hire" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">How to Hire the Right VA</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                      <h4 className="font-bold mb-2">Step 1: Identify Needs</h4>
                      <p className="text-sm">List specific tasks you need help with. Be clear about required skills and budget.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                      <h4 className="font-bold mb-2">Step 2: Choose Method</h4>
                      <p className="text-sm">Hire through agencies (like TasksACE), freelance platforms (Upwork), or direct postings.</p>
                    </div>
                  </div>
                </section>

                <section id="faq" className="mb-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4 not-prose">
                    {[
                      { q: "How much does a virtual assistant cost?", a: "Rates typically range from $15-35/hour for general tasks, and $35-75+ for specialized skills." },
                      { q: "Can I hire for just a few hours?", a: "Yes! Most VAs offer flexible arrangements, starting with just 5-10 hours per week." },
                      { q: "What tasks can I outsource?", a: "Almost any repetitive task: email, calendar, data entry, customer service, social media, and research." }
                    ].map((faq, index) => (
                      <div key={index} className="border border-gray-100 rounded-2xl">
                        <details className="group">
                          <summary className="p-5 cursor-pointer font-bold flex justify-between items-center text-gray-900">
                            {faq.q} <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                        </details>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between not-prose">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-primary-600 transition-colors shadow-lg">
                    <ThumbsUp className="w-4 h-4" /> Helpful
                  </button>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span>Share:</span>
                    <Twitter className="w-4 h-4 cursor-pointer hover:text-primary-600" />
                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-primary-600" />
                    <Facebook className="w-4 h-4 cursor-pointer hover:text-primary-600" />
                  </div>
                </div>

                {/* Author Bio Section */}
                <div className="mt-20 p-8 lg:p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-start not-prose">
                  <div className="relative w-24 h-24 bg-primary-600 rounded-[2rem] flex items-center justify-center overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    <Image src="/tasksace-logo.png" alt="TasksACE" width={80} height={80} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About the TasksACE Editorial Team</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">Our team of operations specialists and virtual assistance experts is dedicated to helping entrepreneurs scale efficiently with remote workforce management.</p>
                    <Link href="/about" className="text-primary-600 font-bold hover:underline inline-flex items-center">Meet the team <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-[320px] flex-shrink-0">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-[0.1em] mb-6 pb-2 border-b border-gray-100">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post, i) => (
                      <Link key={i} href={`/blog/${post.slug}`} className="group block">
                        <h4 className="text-[15px] font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">{post.title}</h4>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-primary-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10 !text-white">Need help scaling?</h3>
                  <p className="text-primary-100 mb-8 text-sm leading-relaxed relative z-10">Get a free consultation and book your call today.</p>
                  <button className="w-full bg-white text-primary-600 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-lg relative z-10 text-sm">Book Free Call</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Footer Related Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Keep Reading</h2>
            <Link href="/blog" className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all">
                <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Strategy</span>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-primary-600 font-bold text-xs uppercase tracking-wider">Read Article <ChevronRight className="w-4 h-4 ml-1" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
