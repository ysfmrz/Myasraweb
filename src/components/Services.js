import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { solutions } from '../data';
import { useLocation } from 'react-router-dom';

function Services() {
    const { language } = useLanguage();
    const location = useLocation();

    const servicesContent = {
        title: {
            en: 'Our Solutions',
            fa: 'راه‌حل‌های ما',
            ar: 'حلولنا',
        },
        description: {
            en: 'Discover our innovative solutions designed to transform your business with cutting-edge technology.',
            fa: 'راه‌حل‌های نوآورانه ما را کشف کنید که برای تحول کسب‌وکار شما با فناوری پیشرفته طراحی شده‌اند.',
            ar: 'اكتشف حلولنا المبتكرة المصممة لتحويل أعمالك بتكنولوجيا متطورة.',
        },
    };

    const defaultDetailedDescription = {
        en: 'This solution leverages advanced technology to streamline your operations, enhance user engagement, and drive measurable results. Whether it’s optimizing workflows or integrating smart systems, we tailor our approach to meet your unique needs.',
        fa: 'این راه‌حل از فناوری پیشرفته برای ساده‌سازی عملیات، بهبود تعامل کاربران و ایجاد نتایج قابل اندازه‌گیری استفاده می‌کند. چه در بهینه‌سازی جریان‌های کاری و چه در یکپارچه‌سازی سیستم‌های هوشمند، ما رویکردمان را متناسب با نیازهای خاص شما تنظیم می‌کنیم.',
        ar: 'يستفيد هذا الحل من التكنولوجيا المتقدمة لتبسيط عملياتك، وتعزيز تفاعل المستخدم، وتحقيق نتائج قابلة للقياس. سواء كان ذلك تحسين سير العمل أو دمج أنظمة ذكية، فإننا نصمم نهجنا لتلبية احتياجاتك الفريدة.',
    };

    useEffect(() => {
        const items = document.querySelectorAll('.solution-item');
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

        const params = new URLSearchParams(location.search);
        const solutionId = params.get('solution');
        if (solutionId) {
            const element = document.getElementById(`solution-${solutionId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        return () => items.forEach((item) => observer.unobserve(item));
    }, [location]);

    return (
        <main
            className="py-16 bg-gray-900 text-white"
            style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}
        >
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                    {servicesContent.title[language]}
                </h1>
                <p className="text-sm sm:text-base text-gray-300 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
                    {servicesContent.description[language]}
                </p>
            </section>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {solutions.map((solution, index) => (
                        <article
                            className="solution-item bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20 opacity-0 translate-y-10"
                            id={`solution-${index}`}
                            key={index}
                            style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
                        >
                            {solution.link ? (
                                <a
                                    href={solution.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={require(`../assets/${solution.image}`)}
                                        alt={solution.title[language]}
                                        className="w-full h-64 sm:h-96 object-cover rounded-t-xl"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                                            {solution.title[language]}
                                        </h3>
                                        <p
                                            className={`text-sm sm:text-base text-gray-200 mb-4 leading-relaxed ${language === 'fa' || language === 'ar'
                                                    ? 'text-right'
                                                    : 'text-left'
                                                } sm:text-justify`}
                                        >
                                            {solution.description[language]}
                                        </p>
                                        <p
                                            className={`text-sm sm:text-base text-gray-300 leading-relaxed ${language === 'fa' || language === 'ar'
                                                    ? 'text-right'
                                                    : 'text-left'
                                                } sm:text-justify`}
                                        >
                                            {solution.detailedDescription
                                                ? solution.detailedDescription[language]
                                                : defaultDetailedDescription[language]}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div>
                                    <img
                                        src={require(`../assets/${solution.image}`)}
                                        alt={solution.title[language]}
                                        className="w-full h-64 sm:h-96 object-cover rounded-t-xl"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                                            {solution.title[language]}
                                        </h3>
                                        <p
                                            className={`text-sm sm:text-base text-gray-200 mb-4 leading-relaxed ${language === 'fa' || language === 'ar'
                                                    ? 'text-right'
                                                    : 'text-left'
                                                } sm:text-justify`}
                                        >
                                            {solution.description[language]}
                                        </p>
                                        <p
                                            className={`text-sm sm:text-base text-gray-300 leading-relaxed ${language === 'fa' || language === 'ar'
                                                    ? 'text-right'
                                                    : 'text-left'
                                                } sm:text-justify`}
                                        >
                                            {solution.detailedDescription
                                                ? solution.detailedDescription[language]
                                                : defaultDetailedDescription[language]}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Services;