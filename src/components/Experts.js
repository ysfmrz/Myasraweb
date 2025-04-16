import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experts } from '../data';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Experts() {
    const { language } = useLanguage();
    const expertsRef = useRef(null);

    const scrollLeft = () => {
        if (expertsRef.current) {
            expertsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (expertsRef.current) {
            expertsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const expertsTitle = { en: 'Our Experts', fa: 'کارشناسان ما', ar: 'خبراؤنا' };

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                    {expertsTitle[language]}
                </h2>
                <div className="relative">
                    <button
                        onClick={scrollLeft}
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-lg text-white font-bold hover:brightness-110 hover:scale-110 hover:shadow-lg transition-all duration-300 z-10"
                        aria-label={language === 'en' ? 'Scroll left' : language === 'fa' ? 'اسکرول به چپ' : 'التمرير لليسار'}
                    >
                        ←
                    </button>
                    <div
                        ref={expertsRef}
                        className="md:flex md:overflow-x-auto md:scroll-smooth md:gap-6 md:pb-4 md:snap-x md:snap-mandatory grid grid-cols-1 gap-6"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {experts.map((expert, index) => (
                            <article
                                key={index}
                                className="md:flex-none md:w-72 w-full bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:snap-center animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <img
                                    src={require(`../assets/${expert.image}`)}
                                    alt={expert.name[language]}
                                    className="w-full h-56 object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                                        {expert.name[language]}
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-2">
                                        {expert.position}
                                    </p>
                                    <p className="text-gray-200 mb-2 flex items-center justify-center">
                                        <FaPhone className="inline-block text-cyan-400 mr-2" />
                                        {expert.phone}
                                    </p>
                                    <p className="text-gray-200 flex items-center justify-center">
                                        <FaEnvelope className="inline-block text-cyan-400 mr-2" />
                                        <a
                                            href={`mailto:${expert.email}`}
                                            className="hover:text-cyan-400 transition-colors duration-200"
                                        >
                                            {expert.email}
                                        </a>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-lg text-white font-bold hover:brightness-110 hover:scale-110 hover:shadow-lg transition-all duration-300 z-10"
                        aria-label={language === 'en' ? 'Scroll right' : language === 'fa' ? 'اسکرول به راست' : 'التمرير لليمين'}
                    >
                        →
                    </button>
                </div>
            </div>
            <style>
                {`
                    .md\\:overflow-x-auto::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </section>
    );
}

export default Experts;