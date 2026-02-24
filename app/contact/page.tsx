import React from 'react'
import type { Metadata } from 'next'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Phone, Send, MessageCircle, ArrowRight, MapPin, ChevronDown, Search, Check, Star, Clock, Users, Globe, Heart, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Contact TasksACE - Get Professional Virtual Assistant Services | 24/7 Support',
  description: 'Contact TasksACE for professional virtual assistant services. Get expert administrative support, e-commerce solutions, and digital marketing services. Free consultation available.',
  keywords: 'contact virtual assistant, VA services contact, business support contact, administrative services contact, e-commerce assistant contact',
  authors: [{ name: 'TasksACE' }],
  creator: 'TasksACE',
  publisher: 'TasksACE',
  robots: 'index, follow',
  openGraph: {
    title: 'Contact TasksACE - Get Professional Virtual Assistant Services | 24/7 Support',
    description: 'Contact TasksACE for professional virtual assistant services. Get expert administrative support, e-commerce solutions, and digital marketing services. Free consultation available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TasksACE',
    url: 'https://tasksace.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TasksACE - Professional Virtual Assistant Services',
    description: 'Get expert virtual assistant services. Free consultation available. 24/7 support.',
    creator: '@tasksace',
  },
}

// Countries with phone codes (A-Z sorted)
const countries = [
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫', countryCode: 'AF' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿', countryCode: 'DZ' },
  { name: 'Angola', code: '+244', flag: '🇦🇴', countryCode: 'AO' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷', countryCode: 'AR' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲', countryCode: 'AM' },
  { name: 'Australia', code: '+61', flag: '🇦🇺', countryCode: 'AU' },
  { name: 'Austria', code: '+43', flag: '🇦🇹', countryCode: 'AT' },
  { name: 'Bahamas', code: '+1-242', flag: '🇧🇸', countryCode: 'BS' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩', countryCode: 'BD' },
  { name: 'Barbados', code: '+1-246', flag: '🇧🇧', countryCode: 'BB' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾', countryCode: 'BY' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪', countryCode: 'BE' },
  { name: 'Benin', code: '+229', flag: '🇧🇯', countryCode: 'BJ' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹', countryCode: 'BT' },
  { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦', countryCode: 'BA' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼', countryCode: 'BW' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷', countryCode: 'BR' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳', countryCode: 'BN' },
  { name: 'Burkina Faso', code: '+226', flag: '🇧🇫', countryCode: 'BF' },
  { name: 'Burundi', code: '+257', flag: '🇧🇮', countryCode: 'BI' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭', countryCode: 'KH' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲', countryCode: 'CM' },
  { name: 'Canada', code: '+1', flag: '🇨🇦', countryCode: 'CA' },
  { name: 'Cape Verde', code: '+238', flag: '🇨🇻', countryCode: 'CV' },
  { name: 'Central African Republic', code: '+236', flag: '🇨🇫', countryCode: 'CF' },
  { name: 'Chad', code: '+235', flag: '🇹🇩', countryCode: 'TD' },
  { name: 'Chile', code: '+56', flag: '🇨🇱', countryCode: 'CL' },
  { name: 'China', code: '+86', flag: '🇨🇳', countryCode: 'CN' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴', countryCode: 'CO' },
  { name: 'Comoros', code: '+269', flag: '🇰🇲', countryCode: 'KM' },
  { name: 'Congo (Democratic Republic)', code: '+243', flag: '🇨🇩', countryCode: 'CD' },
  { name: 'Congo (Republic)', code: '+242', flag: '🇨🇬', countryCode: 'CG' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿', countryCode: 'CZ' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰', countryCode: 'DK' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬', countryCode: 'EG' },
  { name: 'Finland', code: '+358', flag: '🇫🇮', countryCode: 'FI' },
  { name: 'France', code: '+33', flag: '🇫🇷', countryCode: 'FR' },
  { name: 'Germany', code: '+49', flag: '🇩🇪', countryCode: 'DE' },
  { name: 'Greece', code: '+30', flag: '🇬🇷', countryCode: 'GR' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺', countryCode: 'HU' },
  { name: 'India', code: '+91', flag: '🇮🇳', countryCode: 'IN' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪', countryCode: 'IE' },
  { name: 'Israel', code: '+972', flag: '🇮🇱', countryCode: 'IL' },
  { name: 'Italy', code: '+39', flag: '🇮🇹', countryCode: 'IT' },
  { name: 'Japan', code: '+81', flag: '🇯🇵', countryCode: 'JP' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾', countryCode: 'MY' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽', countryCode: 'MX' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱', countryCode: 'NL' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿', countryCode: 'NZ' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬', countryCode: 'NG' },
  { name: 'Norway', code: '+47', flag: '🇳🇴', countryCode: 'NO' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰', countryCode: 'PK' },
  { name: 'Peru', code: '+51', flag: '🇵🇪', countryCode: 'PE' },
  { name: 'Poland', code: '+48', flag: '🇵🇱', countryCode: 'PL' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹', countryCode: 'PT' },
  { name: 'Romania', code: '+40', flag: '🇷🇴', countryCode: 'RO' },
  { name: 'Russia', code: '+7', flag: '🇷🇺', countryCode: 'RU' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦', countryCode: 'SA' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬', countryCode: 'SG' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦', countryCode: 'ZA' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷', countryCode: 'KR' },
  { name: 'Spain', code: '+34', flag: '🇪🇸', countryCode: 'ES' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪', countryCode: 'SE' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭', countryCode: 'CH' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭', countryCode: 'TH' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷', countryCode: 'TR' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦', countryCode: 'UA' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧', countryCode: 'GB' },
  { name: 'United States', code: '+1', flag: '🇺🇸', countryCode: 'US' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳', countryCode: 'VN' }
];

export default function Contact() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    selectedCountry: countries.find(c => c.countryCode === 'BD') || countries[0],
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
        setCountrySearch('');
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowCountryDropdown(false);
        setCountrySearch('');
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showCountryDropdown]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: formData.companyName,
          phone: `${formData.selectedCountry.code}${formData.phone}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        // Parse error response
        const errorData = await response.json();
        console.error('API Error:', errorData);
        
        // Handle validation errors
        if (response.status === 400 && errorData.details) {
          const newErrors: Record<string, string> = {};
          errorData.details.forEach((detail: string) => {
            if (detail.includes('Name')) {
              newErrors.fullName = detail;
            } else if (detail.includes('Email') || detail.includes('email')) {
              newErrors.email = detail;
            } else if (detail.includes('Message') || detail.includes('message')) {
              newErrors.message = detail;
            }
          });
          setErrors(newErrors);
          
          // Show a user-friendly message for validation errors
          alert('Please check your form input: ' + errorData.details.join(', '));
        } else if (response.status === 429) {
          alert('Too many requests. Please wait a moment and try again.');
        } else {
          alert('Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));
    
    // Real-time validation
    const newValidFields = { ...validFields };
    if (name === 'fullName') {
      newValidFields.fullName = value.trim().length > 0;
    } else if (name === 'email') {
      newValidFields.email = /\S+@\S+\.\S+/.test(value);
    } else if (name === 'message') {
      newValidFields.message = value.trim().length >= 10;
    }
    setValidFields(newValidFields);
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Set default country and attempt browser-based detection
  useEffect(() => {
    // Set USA as default immediately (better for international business)
    const defaultCountry = countries.find(c => c.countryCode === 'US') || countries[0];
    setFormData(prev => ({ ...prev, selectedCountry: defaultCountry }));
    
    // Try to detect timezone-based country (no external API calls)
    const detectCountryFromTimezone = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Map common timezones to countries
        const timezoneCountryMap: Record<string, string> = {
          'America/New_York': 'US',
          'America/Chicago': 'US',
          'America/Denver': 'US',
          'America/Los_Angeles': 'US',
          'America/Toronto': 'CA',
          'Europe/London': 'GB',
          'Europe/Paris': 'FR',
          'Europe/Berlin': 'DE',
          'Europe/Rome': 'IT',
          'Europe/Madrid': 'ES',
          'Asia/Tokyo': 'JP',
          'Asia/Shanghai': 'CN',
          'Asia/Kolkata': 'IN',
          'Asia/Dubai': 'AE',
          'Asia/Singapore': 'SG',
          'Asia/Dhaka': 'BD',
          'Australia/Sydney': 'AU',
          'Pacific/Auckland': 'NZ',
        };
        
        const countryCode = timezoneCountryMap[timezone];
        if (countryCode) {
          const detectedCountry = countries.find(c => c.countryCode === countryCode);
          if (detectedCountry) {
            setFormData(prev => ({ ...prev, selectedCountry: detectedCountry }));
            return;
          }
        }
        
        // Fallback: detect from timezone region
        if (timezone.startsWith('America/')) {
          const usCountry = countries.find(c => c.countryCode === 'US');
          if (usCountry) setFormData(prev => ({ ...prev, selectedCountry: usCountry }));
        } else if (timezone.startsWith('Europe/')) {
          const gbCountry = countries.find(c => c.countryCode === 'GB');
          if (gbCountry) setFormData(prev => ({ ...prev, selectedCountry: gbCountry }));
        } else if (timezone.startsWith('Asia/')) {
          const inCountry = countries.find(c => c.countryCode === 'IN');
          if (inCountry) setFormData(prev => ({ ...prev, selectedCountry: inCountry }));
        }
      } catch (error) {
        // Silent fallback to default
      }
    };
    
    // Run timezone detection after a small delay to ensure smooth UX
    const timer = setTimeout(detectCountryFromTimezone, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-primary-500/10 rounded-full blur-3xl"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6 border border-primary-200">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">Contact TasksACE</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your Free Virtual Assistant Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to scale your business? Contact us today for a free consultation and custom quote. Available 24/7 worldwide to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
            
            {/* Contact Information - Enhanced */}
            <div className="xl:col-span-2 space-y-8">
              <div className="fade-in-up">
                <h2 className="text-heading-2 text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-body-large mb-8">
                  Choose your preferred way to connect with us. We're committed to providing you with the best support experience possible.
                </p>
              </div>

              <div className="space-y-6 stagger-animation">
                {/* Email Contact */}
                <div className="card-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                      <Mail className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                      <a href="mailto:info@tasksace.com" className="link-primary text-lg block mb-3">
                        info@tasksace.com
                      </a>
                      <p className="text-gray-600 leading-relaxed">Perfect for detailed inquiries and project discussions. We typically respond within 2-4 hours during business days.</p>
                    </div>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="card-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      <Phone className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                                             <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                       <a href="tel:+8801981696760" className="link-primary text-lg block mb-3">
                         +880 1981-696760
                       </a>
                       <p className="text-gray-600 leading-relaxed">Direct line for immediate assistance and urgent project discussions.</p>
                    </div>
                  </div>
                </div>

                                 {/* WhatsApp Contact - Featured */}
                 <div className="bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 rounded-3xl p-8 shadow-medium border border-green-100 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative flex items-start gap-5">
                     <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg">
                       <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                       </svg>
                     </div>
                     <div className="flex-1">
                       <div className="flex items-center gap-2 mb-3">
                         <h3 className="text-xl font-bold text-gray-900">WhatsApp Support</h3>
                         <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Recommended</span>
                       </div>
                       <p className="text-gray-600 mb-6 leading-relaxed">Get instant support and quick responses. Our WhatsApp channel provides real-time communication for all your project needs.</p>
                       <a 
                         href="https://wa.me/8801981696760" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group/btn"
                       >
                         <div className="flex items-center justify-between w-full">
                           <div className="flex items-center gap-3">
                             <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                             <span>Start Chat Now</span>
                           </div>
                           <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                         </div>
                       </a>
                       <p className="text-sm text-green-600 mt-3 font-medium">⚡ Typically respond within minutes</p>
                     </div>
                   </div>
                 </div>

                
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <div className="xl:col-span-3 fade-in-up">
              <div 
                className="card-modern relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <div className="mb-10">
                    <h2 className="text-heading-2 text-gray-900 mb-4">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-body mb-6">
                      Fill out the form below and we'll get back to you within 24 hours with a customized solution for your business needs.
                    </p>
                    
                    {/* Form Progress Indicator */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>Loved by 500+ businesses worldwide</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name Field */}
                      <div className="relative">
                        <label htmlFor="fullName" className="form-label">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`form-input ${
                              errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 
                              validFields.fullName ? 'border-green-500 focus:border-green-500 focus:ring-green-500' : ''
                            }`}
                            placeholder="Enter your full name"
                          />
                          {validFields.fullName && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                              <Check className="w-5 h-5 text-green-500" />
                            </div>
                          )}
                        </div>
                        {errors.fullName && <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.fullName}
                        </p>}
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${
                              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 
                              validFields.email ? 'border-green-500 focus:border-green-500 focus:ring-green-500' : ''
                            }`}
                            placeholder="Enter your email address"
                          />
                          {validFields.email && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                              <Check className="w-5 h-5 text-green-500" />
                            </div>
                          )}
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </p>}
                      </div>
                    </div>

                                         {/* Company Name */}
                     <div>
                       <label htmlFor="companyName" className="form-label">
                         Company Name <span className="text-gray-400">(Optional)</span>
                       </label>
                       <input
                         type="text"
                         id="companyName"
                         name="companyName"
                         value={formData.companyName}
                         onChange={handleChange}
                         className="form-input"
                         placeholder="Enter your company name"
                       />
                     </div>

                     {/* Phone Number with Country Selector */}
                     <div>
                       <label className="form-label">
                         Phone Number <span className="text-gray-400">(Optional)</span>
                       </label>
                       <div className="flex gap-3">
                         <div className="relative" ref={dropdownRef}>
                           <button
                             type="button"
                             onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                             className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-all duration-200 min-w-[140px] focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                           >
                             <span className="text-lg">{formData.selectedCountry.flag}</span>
                             <span className="text-gray-700 font-medium">{formData.selectedCountry.code}</span>
                             <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                           </button>
                           
                           {showCountryDropdown && (
                             <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-strong z-50 max-h-64 overflow-hidden">
                               <div className="p-4 border-b border-gray-100">
                                 <div className="relative">
                                   <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                   <input
                                     type="text"
                                     placeholder="Search countries..."
                                     value={countrySearch}
                                     onChange={(e) => setCountrySearch(e.target.value)}
                                     className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                   />
                                 </div>
                               </div>
                               <div className="max-h-48 overflow-y-auto">
                                 {filteredCountries.map((country, index) => (
                                   <button
                                     key={index}
                                     type="button"
                                     onClick={() => {
                                       setFormData(prev => ({ ...prev, selectedCountry: country }));
                                       setShowCountryDropdown(false);
                                       setCountrySearch('');
                                     }}
                                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                                   >
                                     <span className="text-lg">{country.flag}</span>
                                     <span className="text-sm text-gray-600 font-medium min-w-[60px]">{country.code}</span>
                                     <span className="text-sm text-gray-900">{country.name}</span>
                                   </button>
                                 ))}
                               </div>
                             </div>
                           )}
                         </div>
                         <input
                           type="tel"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           className="form-input flex-1"
                           placeholder="Enter phone number"
                         />
                       </div>
                     </div>

                    {/* Message */}
                    <div className="relative">
                      <label htmlFor="message" className="form-label">
                        Project Details *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={`form-input resize-none ${
                            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 
                            validFields.message ? 'border-green-500 focus:border-green-500 focus:ring-green-500' : ''
                          }`}
                          placeholder="Tell us about your project requirements, timeline, budget range, and any specific needs. The more details you provide, the better we can tailor our proposal to your needs."
                        />
                        {validFields.message && (
                          <div className="absolute right-4 top-4">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        )}
                      </div>
                      {errors.message && <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.message}
                      </p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full text-lg py-5 group relative overflow-hidden"
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending Your Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              <span>Send Message & Get Quote</span>
                            </>
                          )}
                        </div>
                      </button>
                      
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          🔒 Your information is secure and will never be shared with third parties
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                             </div>
             </div>
           </div>
         </div>
       </section>

       {/* Trust Elements Below Form */}
       <section className="relative pb-16">
         <div className="max-w-7xl mx-auto container-padding">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
             {[
               { icon: Clock, title: "24-48 Hours", subtitle: "Lightning Response", color: "text-primary-600" },
               { icon: Users, title: "500+ Clients", subtitle: "Globally Served", color: "text-green-600" },
               { icon: Star, title: "99.9% Success", subtitle: "Client Satisfaction", color: "text-blue-600" },
               { icon: Globe, title: "Global Service", subtitle: "Worldwide Coverage", color: "text-primary-600" },
               { icon: Shield, title: "Secure & Private", subtitle: "Data Protected", color: "text-purple-600" }
             ].map((item, index) => (
               <div 
                 key={index}
                 className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/25 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                   backdropFilter: 'blur(15px)',
                   WebkitBackdropFilter: 'blur(15px)',
                   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                 }}
               >
                 <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                 <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                 <div className="text-xs text-gray-600">{item.subtitle}</div>
               </div>
             ))}
           </div>
         </div>
       </section>

       <Footer />
    </main>
  );
} 