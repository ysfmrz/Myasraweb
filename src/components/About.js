import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Experts from './Experts'; // کامپوننت اکسپرت‌ها

function About() {
    const { language } = useLanguage();

    const aboutContent = {
        title: {
            en: 'About AstraTech Innovations',
            fa: 'درباره نوآوری‌های آستراتک',
            ar: 'عن ابتكارات أستراتك',
        },
        description: {
            en: 'AstraTech Innovations is a leader in next-generation technology solutions, empowering businesses to thrive in a digital world.',
            fa: 'نوآوری‌های آستراتک پیشرو در راه‌حل‌های فناوری نسل بعدی است و کسب‌وکارها را برای موفقیت در دنیای دیجیتال توانمند می‌کند.',
            ar: 'ابتكارات أستراتك رائدة في حلول التكنولوجيا من الجيل التالي، تمكّن الشركات من الازدهار في عالم رقمي.',
        },
        aboutUs: {
            title: {
                en: 'Our Story',
                fa: 'داستان ما',
                ar: 'قصتنا',
            },
            description: {
                en: 'Founded with a vision to redefine technology, AstraTech Innovations began its journey in the heart of innovation hubs, driven by a passion for excellence. Over the years, we have grown into a global force, delivering cutting-edge solutions that transform industries. Our team of experts combines creativity and technical expertise to create tools that empower businesses to achieve more. At AstraTech, we believe in innovation with purpose—building technologies that not only solve today’s challenges but also pave the way for a brighter, more connected future. Our core values of integrity, quality, and customer-centricity guide every project we undertake. From AI-driven analytics to seamless digital platforms, we are committed to pushing boundaries and setting new standards in the tech world. Join us as we continue to shape the future of technology, one innovation at a time.',
                fa: 'آستراتک با چشم‌اندازی برای بازتعریف فناوری تاسیس شد و سفر خود را در قلب مراکز نوآوری با اشتیاق برای تعالی آغاز کرد. طی سال‌ها، ما به یک نیروی جهانی تبدیل شده‌ایم که راه‌حل‌های پیشرفته‌ای ارائه می‌دهد که صنایع را متحول می‌کند. تیم کارشناسان ما خلاقیت و تخصص فنی را ترکیب می‌کند تا ابزارهایی خلق کند که کسب‌وکارها را برای دستیابی به موفقیت‌های بیشتر توانمند می‌سازد. در آستراتک، ما به نوآوری هدفمند اعتقاد داریم—ساخت فناوری‌هایی که نه‌تنها چالش‌های امروز را حل می‌کنند، بلکه راه را برای آینده‌ای روشن‌تر و متصل‌تر هموار می‌کنند. ارزش‌های اصلی ما، صداقت، کیفیت و مشتری‌مداری، در هر پروژه‌ای که انجام می‌دهیم راهنمای ماست. از تحلیل‌های مبتنی بر هوش مصنوعی تا پلتفرم‌های دیجیتال یکپارچه، ما متعهد به جابجایی مرزها و تعیین استانداردهای جدید در دنیای فناوری هستیم. با ما همراه شوید تا آینده فناوری را، یک نوآوری در هر زمان، شکل دهیم.',
                ar: 'تأسست ابتكارات أستراتك برؤية لإعادة تعريف التكنولوجيا، وبدأت رحلتها في قلب مراكز الابتكار، مدفوعة بشغف للتميز. على مر السنين، تطورنا لنصبح قوة عالمية، نقدم حلولًا متطورة تحول الصناعات. يجمع فريق خبرائنا بين الإبداع والخبرة التقنية لخلق أدوات تمكن الشركات من تحقيق المزيد. في أستراتك، نؤمن بالابتكار الهادف—بناء تقنيات لا تحل تحديات اليوم فحسب، بل تمهد الطريق أيضًا لمستقبل أكثر إشراقًا وترابطًا. قيمنا الأساسية المتمثلة في النزاهة والجودة وتتمحور حول العميل توجه كل مشروع نقوم به. من التحليلات المدعومة بالذكاء الاصطناعي إلى المنصات الرقمية السلسة، نحن ملتزمون بدفع الحدود ووضع معايير جديدة في عالم التكنولوجيا. انضم إلينا ونحن نواصل تشكيل مستقبل التكنولوجيا، ابتكارًا تلو الآخر.',
            },
        },
        mission: {
            title: {
                en: 'Mission',
                fa: 'ماموریت ما',
                ar: 'مهمتنا',
            },
            description: {
                en: 'To deliver innovative solutions that transform industries and inspire progress.',
                fa: 'ارائه راه‌حل‌های نوآورانه که صنایع را متحول کرده و پیشرفت را الهام می‌بخشد.',
                ar: 'تقديم حلول مبتكرة تحول الصناعات وتلهم التقدم.',
            },
        },
    };

    useEffect(() => {
        const items = document.querySelectorAll('.about-item');
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

        return () => items.forEach((item) => observer.unobserve(item));
    }, []);

    return (
        <main
            className="py-16 bg-gray-900 text-white"
            style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}
        >
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 about-item opacity-0 translate-y-10">
                    {aboutContent.title[language]}
                </h1>
                <p className="text-sm sm:text-base text-gray-300 text-center mt-4 max-w-2xl mx-auto leading-relaxed about-item opacity-0 translate-y-10">
                    {aboutContent.description[language]}
                </p>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 text-center mb-8 about-item opacity-0 translate-y-10">
                    {aboutContent.aboutUs.title[language]}
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20 about-item opacity-0 translate-y-10">
                        <p
                            className={`text-sm sm:text-base text-gray-200 leading-relaxed ${language === 'fa' || language === 'ar'
                                    ? 'text-right'
                                    : 'text-left'
                                }`}
                        >
                            {aboutContent.aboutUs.description[language]}
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 text-center mb-8 about-item opacity-0 translate-y-10">
                    {aboutContent.mission.title[language]}
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20 about-item opacity-0 translate-y-10">
                        <p
                            className={`text-sm sm:text-base text-gray-200 leading-relaxed ${language === 'fa' || language === 'ar'
                                    ? 'text-right'
                                    : 'text-left'
                                }`}
                        >
                            {aboutContent.mission.description[language]}
                        </p>
                    </div>
                </div>
            </section>

            <Experts />
        </main>
    );
}

export default About;