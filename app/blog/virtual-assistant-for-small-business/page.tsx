'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { ArrowRight, ChevronRight, ThumbsUp, Share2, MessageCircle, User, ChevronDown, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { blogPosts } from '@/lib/blogData'

export default function VirtualAssistantForSmallBusiness() {
  // Filter out the current post from the related posts list
  const [relatedPosts] = useState(
    blogPosts.filter(post => post.slug !== "virtual-assistant-for-small-business")
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
    { id: "what-is-va", label: "What is a VA?" },
    { id: "why-small-business", label: "Why You Need a VA" },
    { id: "benefits", label: "Key Benefits & ROI" },
    { id: "ai-va", label: "AI Virtual Assistance" },
    { id: "tasks-to-outsource", label: "Tasks to Outsource" },
    { id: "costs", label: "Cost & Math" },
    { id: "pitfalls", label: "Mistakes to Avoid" },
    { id: "how-to-hire", label: "Step-by-Step Guide" },
    { id: "faq", label: "Expert FAQs" }
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

        {/* RESPONSIVE HERO SECTION (Upwork Style) */}
        <div className="bg-white border-b border-gray-100 mb-10 lg:mb-12">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-[15px] pt-8 lg:pt-[55px] pb-10">
            <nav className="mb-6 lg:mb-8 text-[15px] lg:text-[16px] font-medium text-[#001e00] leading-relaxed relative z-10">
              <Link href="/blog" className="hover:underline transition-all">Resources</Link>
              <span className="mx-2.5 text-[#5e6d55] text-[13px]">»</span>
              <Link href="/blog" className="hover:underline transition-all">Articles</Link>
              <span className="mx-2.5 text-[#5e6d55] text-[13px]">»</span>
              <span>Virtual Assistant for Small Business: The 2026 Strategy to Scale Your Growth</span>
            </nav>

            <div className="grid lg:grid-cols-[45%_55%] gap-[30px] items-start">
              {/* Left/Top Column: Text & Meta */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="bg-[#f0f4f0] text-[#001e00] px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-medium leading-tight">
                    Small Business Insights
                  </span>
                  <span className="bg-[#f0f4f0] text-[#001e00] px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-medium leading-tight">
                    Article
                  </span>
                  <span className="text-[#5e6d55] text-[13px] lg:text-[14px] font-medium ml-2">12 Min Read</span>
                </div>

                <h1 className="text-[36px] sm:text-[40px] lg:text-[48px] leading-[1.05] font-semibold text-[#111] mb-4 tracking-tighter">
                  Virtual Assistant for Small Business: The 2026 Strategy to Scale Your Growth
                </h1>

                <p className="text-[17px] lg:text-[19px] text-[#444] lg:leading-[1.6] leading-[1.5] mb-8 font-normal">
                  Discover how hiring a virtual assistant can transform your small business. Learn the benefits, costs, and how to find the perfect VA for your needs.
                </p>

                <div className="flex flex-col gap-6 pt-6 border-t border-gray-100 lg:border-none lg:pt-0 w-full relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full overflow-hidden shrink-0 bg-[#ff5e00] flex items-center justify-center p-[12px]">
                      <Image src="/TasksACE.svg" alt="TasksACE Team" width={40} height={40} className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="text-[17px] lg:text-[18px] font-medium text-[#001e00]">TasksACE Team</span>
                      <span className="text-[14px] lg:text-[15px] font-normal text-[#5e6d55]">Published | Feb 24, 2026</span>
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

              {/* Right Column: Featured Image */}
              <div className="flex justify-end mt-10 lg:mt-0">
                <div className="relative aspect-[3/2] w-full max-w-[652px] bg-white rounded-[20px] overflow-hidden shadow-sm">
                  <Image src="/blog-va-small-business.png" alt="Virtual Assistant for Small Business" fill className="object-cover" />
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

                <section id="what-is-va" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">What is a Virtual Assistant?</h2>

                  <p>By definition, a <strong>virtual assistant for small business</strong> is a remote professional who takes over your administrative, technical, or creative roadblocks so you can focus on strategy.</p>

                  <p>But here’s the truth about actually hiring one.</p>

                  <p>Most founders think hiring a VA is a magic pill. You hire someone on <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="font-normal underline decoration-primary-200">Upwork</a> for $5/hour, hand over your inbox, and suddenly you’re sipping margaritas on a beach, right?</p>

                  <p>Wrong.</p>

                  <p>I remember the first time I hired a remote team member for my agency. I thought it would instantly save me 10 hours a week. Instead, I spent <em>20 hours</em> just fixing their mistakes because my training processes were garbage.</p>

                  <p>That’s when the lightbulb went off. Hiring a VA doesn’t just save you time—<strong>it forces you to become a better CEO because you must document your chaos.</strong></p>

                  <p>If you’re still doing $10/hour admin work with your $100/hour founder time, you aren’t running a business. You’ve just bought yourself a very stressful job.</p>

                  <p>Let's break down how to actually build a remote team in 2026 without losing your mind (or your money).</p>

                  <div className="bg-orange-50 border-l-4 border-[#ff5e00] p-4 rounded-r-lg mt-6">
                    <p className="text-gray-700 font-medium italic">"Hiring a VA isn't an expense. It's buying back the only asset you can't create more of—your time."</p>
                  </div>
                </section>

                <section id="why-small-business" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">Why Small Businesses Need Virtual Assistants in 2026</h2>

                  <p>The game changed abruptly over the last two years.</p>

                  <p>AI tools and global talent pools leveled the playing field. <strong>Hiring a virtual assistant for small business</strong> is no longer just a "corporate luxury." It’s survival.</p>

                  <p>Small businesses waste a shocking amount of time on tiny, invisible tasks. Things like organizing messy CRM tags, fighting with inbox spam, or chasing invoices.</p>

                  <p>Here is why delegating to <strong>virtual assistants for small businesses</strong> is non-negotiable right now:</p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6 font-medium">
                    <li>Your competitors are already doing it to undercut your prices.</li>
                    <li>You literally cannot scale if you are the bottleneck for every decision.</li>
                    <li>You get to access elite, specialized skills on-demand without the W2 overhead.</li>
                    <li>Scalability becomes a tap you can turn on and off.</li>
                  </ul>

                  <p>According to <a href="https://www.statista.com" target="_blank" rel="noopener noreferrer" className="font-normal underline decoration-primary-200">Statista</a>, leaders who outsource correctly reclaim an average of 20+ hours per week. That's half a workweek handed right back to you.</p>
                </section>

                <section id="benefits" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">The Real ROI of a Virtual Assistant</h2>

                  <p>Let me explain where most people mess up.</p>

                  <p className="mb-6 text-gray-600">They focus obsessively on the hourly rate. Elite entrepreneurs don't do that. They focus on the <strong>Multiplier Effect</strong>.</p>

                  <p>Think about it like this. If your time generates $100/hour for your business, and you spend 3 hours doing a $15/hour data entry task yourself... you didn't "save" $45. You actively <em>cost</em> your business $255 in lost revenue generation.</p>

                  <div className="bg-gray-900 rounded-[20px] p-8 text-white mb-8 border border-white/10 shadow-xl relative overflow-hidden not-prose">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e00]/10 rounded-full -mr-16 -mt-16"></div>
                    <h3 className="text-xl font-normal mb-4 relative z-10 text-white">The Math of Delegation:</h3>
                    <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                      <div>
                        <p className="text-[#ff5e00] text-sm font-normal uppercase tracking-wider mb-1">Monthly Cost</p>
                        <p className="text-3xl font-normal tracking-tight">$600 <span className="text-sm text-gray-400 font-normal">(40 hrs x $15/hr)</span></p>
                      </div>
                      <div>
                        <p className="text-[#ff5e00] text-sm font-normal uppercase tracking-wider mb-1">Founder's Value Created</p>
                        <p className="text-3xl font-normal tracking-tight">$2,000 <span className="text-sm text-gray-400 font-normal">(40 hrs x $50/hr min)</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6 not-prose">
                    <div className="bg-white border border-gray-200 rounded-[20px] p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                      <h3 className="text-lg font-normal text-gray-900 mb-2">Cost Savings</h3>
                      <p className="text-gray-600 text-sm">Save up to 70% compared to local hires. No payroll taxes, medical insurance, or physical office costs.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-[20px] p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                      <h3 className="text-lg font-normal text-gray-900 mb-2">Operational Speed</h3>
                      <p className="text-gray-600 text-sm">Deploy specialized talent in days, not months. Scale your customer support or marketing instantly.</p>
                    </div>
                  </div>
                </section>

                <div className="my-12 relative aspect-[16/9] w-full bg-gray-100 rounded-[20px] overflow-hidden shadow-lg not-prose">
                  <Image src="/blog-va-collaboration.png" alt="VA Collaboration" fill className="object-cover" />
                </div>

                <section id="ai-va" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">The Rise of the AI Virtual Assistant</h2>

                  <p>Let's address the elephant in the room. Why not just use ChatGPT?</p>

                  <p>Because AI doesn't proactively follow up with your VIP client who missed an invoice. It doesn't join your Tuesday sync to take notes and parse action items into Asana.</p>

                  <p>As technology evolves, elite founders are pairing <strong>human virtual assistants</strong> with AI workflows. Your VA uses Claude or ChatGPT to write the email draft faster. But the human being still reviews it, ensures the tone matches your brand, and hits send.</p>

                  <p>AI is the engine. The VA is the driver.</p>
                </section>

                <section id="tasks-to-outsource" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">Best Tasks to Outsource</h2>

                  <p className="mb-6">The rule is simple. If a process occurs more than three times, it needs an SOP (Standard Operating Procedure). If it has an SOP, it goes to your VA.</p>

                  <p className="mb-6">Here is where we see founders get the biggest immediate return on their time:</p>

                  <div className="space-y-4 mb-6 not-prose">
                    {[
                      { task: "Inbox Zero Management", desc: "Sorting the noise from the critical. They surface the 5 emails you actually need to see today." },
                      { task: "Ruthless Calendar Defense", desc: "Saying 'no' politely on your behalf. Booking meetings with buffer times." },
                      { task: "Data & CRM Scrubbing", desc: "Because updating pipeline stages in HubSpot is not a $100/hr activity." },
                      { task: "Customer Support Triaging", desc: "Handling the 'where is my order' tickets so you can focus on 'how do we scale'." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="w-8 h-8 bg-[#ff5e00] text-white rounded-full flex items-center justify-center flex-shrink-0 font-normal text-sm">{index + 1}</div>
                        <div>
                          <h4 className="font-normal text-gray-900">{item.task}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="costs" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4">Cost Comparison: VA vs In-House</h2>

                  <p>Numbers don't lie. Most founders assume they "can't afford" help until they look at the true cost of an in-house employee.</p>

                  <div className="overflow-x-auto not-prose mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 italic">
                          <th className="text-left p-4 border text-gray-900 font-normal">Cost Factor</th>
                          <th className="text-left p-4 border bg-orange-50 text-orange-700 font-normal">Virtual Assistant</th>
                          <th className="text-left p-4 border text-gray-900 font-normal">In-House Employee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Annual Salary</td><td className="p-4 border bg-orange-50">$15k - $36k</td><td className="p-4 border font-medium">$40k - $60k+</td></tr>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Benefits</td><td className="p-4 border bg-orange-50">$0</td><td className="p-4 border font-medium">$10k - $20k/year</td></tr>
                        <tr className="text-gray-700"><td className="p-4 border font-medium">Office Space</td><td className="p-4 border bg-orange-50">$0</td><td className="p-4 border font-medium">$5k - $15k/year</td></tr>
                        <tr className="bg-gray-50 font-normal text-gray-900 italic">
                          <td className="p-4 border">Total Annual Cost</td>
                          <td className="p-4 border bg-orange-100 text-orange-700">$15,000 - $36,000</td>
                          <td className="p-4 border">$58,000 - $103,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="pitfalls" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4 tracking-tight">Mistakes to Avoid</h2>

                  <p className="mb-6">This is where most people mess up. They hire a VA, hand over a mess of undocumented processes, and then say "See? Remote work doesn't work!" when it fails.</p>

                  <ul className="space-y-4 not-prose">
                    <li className="flex gap-4 p-4 bg-red-50 rounded-[20px] border border-red-100 italic">
                      <div className="text-red-500 font-normal shrink-0">01</div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed"><strong>Hiring solely on price:</strong> The cheapest VA often costs the most in lost time and re-work.</p>
                    </li>
                    <li className="flex gap-4 p-4 bg-red-50 rounded-[20px] border border-red-100 italic">
                      <div className="text-red-500 font-normal shrink-0">02</div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed"><strong>Lack of SOPs:</strong> If you can't explain the process, a VA can't execute it perfectly.</p>
                    </li>
                    <li className="flex gap-4 p-4 bg-red-50 rounded-[20px] border border-red-100 italic">
                      <div className="text-red-500 font-normal shrink-0">03</div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed"><strong>Micromanaging:</strong> Trust your systems. If you're checking every email, you haven't bought your time back.</p>
                    </li>
                  </ul>
                </section>

                <div className="my-14 p-8 bg-[#fff8f1] rounded-[20px] border border-[#ffe4cc] relative overflow-hidden not-prose">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/50 rounded-full -mr-20 -mt-20"></div>
                  <span className="text-[#ff5e00] font-normal text-xs uppercase tracking-widest mb-4 block">Mini Case Study</span>
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">How an E-commerce Brand Scaled 3x in 6 Months</h3>
                  <p className="text-[#9a3412] mb-6 leading-relaxed italic font-medium">"By delegating customer support and order fulfillment tracking to a dedicated VA, the founder of 'GreenLeaf Decor' was able to focus entirely on product design and Meta ads. Result? Revenue jumped from $15k to $50k/mo with zero increase in founder workload."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Sarah J.</p>
                      <p className="text-xs text-gray-500 italic">Founder, GreenLeaf Decor</p>
                    </div>
                  </div>
                </div>

                <div className="my-12 relative aspect-[16/9] w-full bg-gray-100 rounded-[20px] overflow-hidden shadow-lg not-prose">
                  <Image src="/blog-va-business-growth.png" alt="Business Growth" fill className="object-cover" />
                </div>

                <section id="how-to-hire" className="mb-10">
                  <h2 className="text-[38px] font-normal text-gray-900 mb-4 tracking-tight">The Tactical 6-Step Hiring Guide</h2>
                  <div className="grid gap-6 not-prose">
                    {[
                      { step: "Audit Your Time", desc: "Track your tasks for 3 days. Anything repetitive or low-value goes on the 'to-outsource' list." },
                      { step: "Write the Scorecard", desc: "Don't just write a job description. Define what success looks like in 30, 60, and 90 days." },
                      { step: "The Test Task", desc: "Never hire based on an interview alone. Give a paid, 2-hour test task to see their real-world skills." },
                      { step: "Tools & Access", desc: "Set up a password manager (LastPass) and communication hubs like Slack or Trello." },
                      { step: "Record your SOPs", desc: "Use Loom to record your screen as you do the task once. Now you have a training manual." },
                      { step: "Scale with TasksACE", desc: "Skip the trial and error. Partner with an agency that pre-vets and manages the talent for you." }
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
                  <h2 className="text-[38px] font-normal text-gray-900 mb-8 tracking-tight">Expert FAQs</h2>
                  <div className="space-y-4 not-prose">
                    {[
                      { q: "How much does a virtual assistant cost in 2026?", a: "Rates typically range from $15-35/hour for general administrative tasks and $35-75+ for specialized technical or marketing skills. Using an agency can often provide better value through managed oversight." },
                      { q: "Is hiring a remote virtual assistant safe?", a: "Extremely safe when using secure tools. We recommend using a password manager like LastPass, ensuring signed NDAs, and using platforms that offer time-tracking and verified payment systems." },
                      { q: "Can a VA handle complex bookkeeping?", a: "Yes, many VAs specialize in QuickBooks or Xero. However, ensure they have verified certifications if they are managing high-level financial strategy." },
                      { q: "How do I pay a virtual assistant internationally?", a: "Platforms like Wise, Payoneer, or agency billing systems (like TasksACE) are the industry standard for secure, low-fee international payments." },
                      { q: "What are the best tools for managing a VA?", a: "Slack for communication, Trello or ASANA for task management, and Loom for asynchronous training are the 'elite' toolkit for remote management." },
                      { q: "How many hours per week should I start with?", a: "We recommend starting with 5-10 hours per week for specific 'bottleneck' tasks. Most businesses scale to 20+ hours once they see the ROI." },
                      { q: "What if the VA is not a good fit?", a: "Always have a trial period (1-2 weeks). If you hire through an agency, they can typically swap the talent for you with zero downtime." },
                      { q: "Can a VA work in my time zone?", a: "Yes. Many international VAs work 'graveyard' shifts or overlapping hours to ensure real-time communication with US or European clients." }
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
                        TasksACE is a leading virtual assistance and operational strategy agency that connects small businesses with elite remote talent.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Sidebar (HIDDEN ON MOBILE) */}
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
                <h3 className="text-xl font-normal mb-4 relative z-10 text-[#1a0f00]">Need help scaling?</h3>
                <p className="text-[#9a3412] mb-8 text-sm leading-relaxed relative z-10 font-medium italic">Get a free consultation and book your call today.</p>
                <button className="w-full bg-[#ff5e00] text-white font-medium py-[9px] px-4 rounded-[20px] hover:bg-[#e65500] transition-colors shadow-sm relative z-10 text-[14px] leading-[14px]">Book Free Call</button>
              </div>
            </aside>
          </div>
        </div>
      </article>

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
    </main>
  )
}
