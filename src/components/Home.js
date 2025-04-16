import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Hero from './Hero';
import ServicesPreview from './ServicesPreview';
import Solutions from './Solutions';
import Projects from './Projects';
import Experts from './Experts';
import ContactUs from './ContactUs';
import Mission from './Mission';

function Home() {
    const { language } = useLanguage();

    useEffect(() => {
        const items = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    const metaContent = {
        title: {
            en: 'AstraTech Innovations - Next-Gen Technology Solutions',
            fa: 'نوآوری‌های آستراتک - راه‌حل‌های فناوری نسل بعدی',
            ar: 'ابتكارات أستراتك - حلول تكنولوجية من الجيل التالي',
        },
        description: {
            en: 'Discover AstraTech’s innovative solutions in AI, web apps, IoT, and more to transform your business.',
            fa: 'راه‌حل‌های نوآورانه آستراتک در هوش مصنوعی، وب اپلیکیشن، اینترنت اشیا و غیره را کشف کنید.',
            ar: 'اكتشف حلول أستراتك المبتكرة في الذكاء الاصطناعي، تطبيقات الويب، إنترنت الأشياء وغيرها.',
        },
        keywords: {
            en: 'AstraTech, technology, AI, web apps, IoT',
            fa: 'آستراتک، فناوری، هوش مصنوعی، وب اپلیکیشن، اینترنت اشیا',
            ar: 'أستراتك، تكنولوجيا، ذكاء اصطناعي، تطبيقات ويب، إنترنت الأشياء',
        },
    };

    useEffect(() => {
        document.title = metaContent.title[language];
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = metaContent.description[language];

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = metaContent.keywords[language];

        document.documentElement.lang = language;
    }, [language]);

    return (
        <main dir={language === 'en' ? 'ltr' : 'rtl'}>
            <Hero />
            <ServicesPreview />
            <Solutions />
            <Projects />
            <Experts />
            <ContactUs />
            <Mission />
        </main>
    );
}

export default Home;