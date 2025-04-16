import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
    const { language } = useLanguage();

    const content = {
        title: {
            en: 'Astra: Powering Tomorrow’s Business',
            fa: 'آستراتک: توان‌بخشی به کسب‌وکار آینده',
            ar: 'أستراتك: تمكين أعمال الغد',
        },
        subtitle: {
            en: 'Transform your operations with AI, custom apps, and smart messaging solutions tailored to lead your industry.',
            fa: 'عملیات خود را با هوش مصنوعی، اپلیکیشن‌های سفارشی و راه‌حل‌های پیام‌رسانی هوشمند متحول کنید.',
            ar: 'حوّل عملياتك باستخدام الذكاء الاصطناعي، التطبيقات المخصصة، وحلول المراسلة الذكية.',
        },
        cta: {
            en: 'Launch Your Future',
            fa: 'آینده‌تان را آغاز کنید',
            ar: 'أطلق مستقبلك',
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* تصویر پس‌زمینه با انیمیشن */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center animate-hero-bg"
                style={{
                    backgroundImage: `url(${require('../assets/hero-image.png')})`,
                }}
            ></div>

            {/* لایه شفاف برای خوانایی زیرعنوان و دکمه */}
            <div className="absolute inset-0 bg-gray-900/80 z-10"></div>

            {/* محتوای Hero */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-in"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px #ffffff',
                    }}
                    dir={language === 'en' ? 'ltr' : 'rtl'}
                >
                    {content.title[language]}
                </h1>
                <p
                    className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 animate-fade-in-up"
                    dir={language === 'en' ? 'ltr' : 'rtl'}
                    style={{ animationDelay: '0.2s' }}
                >
                    {content.subtitle[language]}
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-cyan-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    dir={language === 'en' ? 'ltr' : 'rtl'}
                    style={{ animationDelay: '0.4s' }}
                >
                    {content.cta[language]}
                </Link>
            </div>
        </section>
    );
}

export default Hero;