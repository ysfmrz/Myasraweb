import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function ServicesPreview() {
    const { language } = useLanguage();

    const servicesContent = {
        title: { en: 'Our Expertise', fa: 'تخصص ما', ar: 'خبرتنا' },
        items: [
            {
                title: { en: 'Digital Experiences', fa: 'تجربیات دیجیتال', ar: 'تجارب رقمية' },
                description: {
                    en: 'Immersive websites that redefine user engagement.',
                    fa: 'وب‌سایت‌های غوطه‌ور که تعامل کاربر را بازتعریف می‌کنند.',
                    ar: 'مواقع ويب غامرة تعيد تعريف تفاعل المستخدم.',
                },
                icon: '🌐',
            },
            {
                title: { en: 'App Innovation', fa: 'نوآوری برنامه', ar: 'ابتكار التطبيقات' },
                description: {
                    en: 'Apps that blend performance with stunning design.',
                    fa: 'برنامه‌هایی که عملکرد را با طراحی خیره‌کننده ترکیب می‌کنند.',
                    ar: 'تطبيقات تجمع بين الأداء والتصميم المذهل.',
                },
                icon: '📱',
            },
            {
                title: { en: 'Cloud Revolution', fa: 'انقلاب ابری', ar: 'ثورة السحابة' },
                description: {
                    en: 'Future-proof infrastructure for seamless scalability.',
                    fa: 'زیرساخت آماده برای آینده برای مقیاس‌پذیری بی‌نقص.',
                    ar: 'بنية تحتية جاهزة للمستقبل للتوسع السلس.',
                },
                icon: '☁️',
            },
        ],
    };

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                    {servicesContent.title[language]}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesContent.items.map((service, index) => (
                        <article
                            key={index}
                            className="relative bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                                {service.title[language]}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {service.description[language]}
                            </p>
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesPreview;