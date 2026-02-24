'use client'

import { useState, useEffect } from 'react'
import { Cookie, X, Check, Settings as SettingsIcon } from 'lucide-react'
import { updateGDPRConsent } from './GoogleAnalytics'
import Link from 'next/link'

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // Small delay to make it feel smoother
            const timer = setTimeout(() => setIsVisible(true), 2000)
            return () => clearTimeout(timer)
        } else if (consent === 'accepted') {
            updateGDPRConsent(true)
        }
    }, [])

    const handleAccept = () => {
        updateGDPRConsent(true)
        setIsVisible(false)
    }

    const handleDecline = () => {
        updateGDPRConsent(false)
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-8 overflow-hidden relative group">
                {/* Background Gradient Orbs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500"></div>

                <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Cookie className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Cookie Preferences</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We use cookies to enhance your experience, analyze performance, and serve relevant content.
                                Read our{' '}
                                <Link href="/cookie-policy" className="text-primary-600 hover:underline font-medium">
                                    Cookie Policy
                                </Link>{' '}
                                to learn more.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-orange-600 hover:from-primary-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                        >
                            <Check className="w-4 h-4" />
                            Accept All
                        </button>
                        <button
                            onClick={handleDecline}
                            className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                        >
                            Reject All
                        </button>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                        <button
                            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                            className="hover:text-primary-600 flex items-center gap-1 transition-colors"
                        >
                            <SettingsIcon className="w-3 h-3" />
                            Custom Settings
                        </button>
                        <span>v2.0 Compliance</span>
                    </div>

                    {isSettingsOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-300">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Essential</span>
                                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Always On</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Analytics</span>
                                    <div className="w-8 h-4 bg-primary-500 rounded-full cursor-pointer relative">
                                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between opacity-50">
                                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Marketing</span>
                                    <div className="w-8 h-4 bg-gray-300 rounded-full cursor-not-allowed relative">
                                        <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
