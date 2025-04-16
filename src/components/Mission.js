import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaRocket, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Mission() {
    const { language } = useLanguage();

    const missionContent = {
        title: { en: 'Mission', fa: 'ماموریت ما', ar: 'مهمتنا' },
        description: {
            en: 'At Astra, we architect tailored digital ecosystems that streamline workflows, captivate audiences, and accelerate business growth through pioneering technology.',
            fa: 'در آستراتک، ما اکوسیستم‌های دیجیتالی سفارشی طراحی می‌کنیم که جریان‌های کاری را ساده، مخاطبان را مجذوب و رشد کسب‌وکارها را با فناوری پیشرو تسریع می‌کنند.',
            ar: 'في أستراتك، نحن نصمم أنظمة رقمية مخصصة تبسط سير العمل، تجذب الجماهير، وتسرع نمو الأعمال من خلال التكنولوجيا الرائدة.',
        },
        visionTitle: { en: 'Vision', fa: 'چشم‌انداز ما', ar: 'رؤيتنا' },
        visionDescription: {
            en: 'To lead globally in delivering state-of-the-art technology solutions that elevate customer experiences and optimize operational excellence.',
            fa: 'رهبری جهانی در ارائه راه‌حل‌های فناوری پیشرفته که تجربه مشتریان را ارتقا داده و تعالی عملیاتی را بهینه می‌کنند.',
            ar: 'قيادة العالم في تقديم حلول تكنولوجية متطورة تعزز تجارب العملاء وتحسن التميز التشغيلي.',
        },
        cta: { en: 'Discover More', fa: 'بیشتر بدانید', ar: 'اكتشف المزيد' },
    };

    return (
        <section className="py-16 bg-gradient-to-b from-cyan-900 via-gray-900 to-pink-900 text-white relative overflow-hidden">
            {/* الگوی پس‌زمینه ظریف */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* کارت Mission */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20">
                        <div className="flex justify-center mb-6">
                            <FaRocket className="text-5xl text-cyan-400 animate-pulse" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                            {missionContent.title[language]}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 leading-loose italic max-w-3xl mx-auto animate-fade-in-up">
                            "{missionContent.description[language]}"
                        </p>
                    </div>
                    {/* کارت Vision */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20">
                        <div className="flex justify-center mb-6">
                            <FaStar className="text-5xl text-pink-400 animate-pulse" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-cyan-400 animate-fade-in">
                            {missionContent.visionTitle[language]}
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-200 leading-loose italic max-w-3xl mx-auto animate-fade-in-up">
                            "{missionContent.visionDescription[language]}"
                        </p>
                    </div>
                    {/* دکمه CTA */}
                    <Link
                        to="/about"
                        className="inline-block bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        {missionContent.cta[language]}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Mission;