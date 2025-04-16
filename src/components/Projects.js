import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Projects() {
    const { language } = useLanguage();
    const [openProject, setOpenProject] = useState(null);

    const toggleDetails = (index) => {
        console.log('Toggling project:', index, 'Current state:', openProject); // برای دیباگ
        setOpenProject(openProject === index ? null : index);
    };

    const projectsTitle = { en: 'Projects', fa: 'پروژه‌ها', ar: 'مشاريعنا' };

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                    {projectsTitle[language]}
                </h2>
                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20 animate-fade-in-up flex flex-col"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={require(`../assets/${project.image}`)}
                                alt={project.title[language]}
                                className="w-full h-64 sm:h-96 object-cover"
                                loading="lazy"
                            />
                            <div className="p-6 h-fit flex flex-col">
                                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                                    {project.title[language]}
                                </h3>
                                <p
                                    className={`text-sm sm:text-base mb-4 leading-relaxed ${language === 'fa' || language === 'ar'
                                            ? 'text-right direction-rtl'
                                            : 'text-left'
                                        } sm:text-justify`}
                                >
                                    {project.description[language]}
                                </p>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openProject === index
                                            ? 'max-h-[1000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p
                                        className={`text-sm sm:text-base mb-4 leading-relaxed ${language === 'fa' || language === 'ar'
                                                ? 'text-right direction-rtl'
                                                : 'text-left'
                                            } sm:text-justify`}
                                    >
                                        {project.details[language]}
                                    </p>
                                </div>
                                <div
                                    className={`flex ${language === 'fa' || language === 'ar'
                                            ? 'justify-end'
                                            : 'justify-start'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleDetails(index)}
                                        className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 w-fit"
                                    >
                                        {openProject === index
                                            ? language === 'en'
                                                ? 'Hide Details'
                                                : language === 'fa'
                                                    ? 'مخفی کردن جزئیات'
                                                    : 'إخفاء التفاصيل'
                                            : language === 'en'
                                                ? 'View Details'
                                                : language === 'fa'
                                                    ? 'مشاهده جزئیات'
                                                    : 'عرض التفاصيل'}
                                        {openProject === index ? (
                                            <FaChevronUp className="ml-2" />
                                        ) : (
                                            <FaChevronDown className="ml-2" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;