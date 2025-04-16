import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data';
import { FaPhone, FaEnvelope, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function ContactUs() {
    const { language } = useLanguage();

    const contactTitle = { en: 'Connect With Us', fa: 'ارتباط با ما', ar: 'تواصل معنا' };

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in">
                    {contactTitle[language]}
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800 rounded-xl p-8 shadow-lg">
                    <img
                        src={require(`../assets/${contactInfo.image}`)}
                        alt={contactInfo.company[language]}
                        className="w-full lg:w-1/2 h-64 lg:h-96 object-cover rounded-lg"
                        loading="lazy"
                    />
                    <div className="text-center lg:text-start">
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                            {contactInfo.company[language]}
                        </h3>
                        <p className="text-gray-300 mb-2 flex items-center justify-center lg:justify-start">
                            <FaPhone className="inline-block text-cyan-400 mr-2" />
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                {contactInfo.phone}
                            </a>
                        </p>
                        <p className="text-gray-300 mb-2 flex items-center justify-center lg:justify-start">
                            <FaEnvelope className="inline-block text-cyan-400 mr-2" />
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                {contactInfo.email}
                            </a>
                        </p>
                        <p className="text-gray-300 mb-2 flex items-center justify-center lg:justify-start">
                            <FaGlobe className="inline-block text-cyan-400 mr-2" />
                            <a
                                href={`https://${contactInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                {contactInfo.website}
                            </a>
                        </p>
                        <p className="text-gray-300 mb-2 flex items-center justify-center lg:justify-start">
                            <FaInstagram className="inline-block text-cyan-400 mr-2" />
                            <a
                                href={contactInfo.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                Instagram
                            </a>
                        </p>
                        <p className="text-gray-300 flex items-center justify-center lg:justify-start">
                            <FaWhatsapp className="inline-block text-cyan-400 mr-2" />
                            <a
                                href={contactInfo.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition-colors duration-200"
                            >
                                WhatsApp
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;