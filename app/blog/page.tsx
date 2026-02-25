import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, BookOpen, Users, ArrowRight, Calendar, User, ChevronRight } from 'lucide-react'

import { generateDynamicMetadata } from '@/lib/seo'
import { blogPosts } from '@/lib/blogData'

export async function generateMetadata() {
  return await generateDynamicMetadata('/blog')
}

export default function BlogPage() {
  // Use shared blog data
  const featuredPost = blogPosts.find(post => post.isFeatured)
  const otherPosts = blogPosts.filter(post => !post.isFeatured)

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Blog Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white border-b border-gray-100">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight tracking-tight">
              Insights & <span className="text-primary-500">Strategies</span> for Growth
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our latest articles on virtual assistance, operational efficiency,
              and how to scale your small business in 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <div className="group relative bg-white rounded-[20px] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row items-stretch transition-transform hover:-translate-y-1 duration-500">
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 font-medium">
                    <span className="text-primary-600 uppercase tracking-widest font-medium">{featuredPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-6 group-hover:text-primary-600 transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <User className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{featuredPost.author}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all group/btn">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Posts Grid (If any exist) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {otherPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-primary-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium uppercase tracking-tighter">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary-500 group/link">
                    Read More <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-900 rounded-[20px] p-8 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur">
                Weekly Insights
              </div>
              <h3 className="text-3xl lg:text-5xl font-normal mb-6 tracking-tight">Stay Ahead of the Curve</h3>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Get exclusive operational strategies and business growth tips delivered directly to your inbox. No spam, only value.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/10 transition-all font-medium"
                />
                <button className="bg-primary-500 text-white px-8 py-5 rounded-2xl font-medium hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-500/25 flex items-center justify-center">
                  Subscribe <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
