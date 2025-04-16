import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data';
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    const { language } = useLanguage();

    const footerLinks = {
        services: { en: 'Services', fa: 'خدمات', ar: 'الخدمات' },
        about: { en: 'About', fa: 'درباره ما', ar: 'معلومات عنا' },
        contact: { en: 'Contact', fa: 'تماس', ar: 'اتصل بنا' },
    };

    return (
        <footer className="py-8 bg-gradient-to-t from-cyan-900 to-gray-950 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
                    {/* ستون About */}
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                            {contactInfo.company[language]}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {language === 'en'
                                ? 'Empowering the future with technology.'
                                : language === 'fa'
                                    ? 'آینده را با فناوری توانمند می‌کنیم.'
                                    : 'تمكين المستقبل بالتكنولوجيا.'}
                        </p>
                    </div>
                    {/* ستون Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                            {language === 'en' ? 'Quick Links' : language === 'fa' ? 'لینک‌های سریع' : 'روابط سريعة'}
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="/services"
                                    className="text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-200"
                                >
                                    {footerLinks.services[language]}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-200"
                                >
                                    {footerLinks.about[language]}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-white hover:px-2 hover:py-1 hover:rounded transition-all duration-200"
                                >
                                    {footerLinks.contact[language]}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ستون Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                            {language === 'en' ? 'Contact Us' : language === 'fa' ? 'تماس با ما' : 'تواصل معنا'}
                        </h3>
                        <ul className="space-y-1">
                            <li className="flex items-center justify-center md:justify-start">
                                <FaPhone className="text-lg text-cyan-400 mr-2" />
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="text-sm hover:text-cyan-400 transition-colors duration-200"
                                >
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <FaEnvelope className="text-lg text-cyan-400 mr-2" />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm hover:text-cyan-400 transition-colors duration-200"
                                >
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <FaGlobe className="text-lg text-cyan-400 mr-2" />
                                <a
                                    href={`https://${contactInfo.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-cyan-400 transition-colors duration-200"
                                >
                                    {contactInfo.website}
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <FaInstagram className="text-lg text-cyan-400 mr-2" />
                                <a
                                    href={contactInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-cyan-400 transition-colors duration-200"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <FaWhatsapp className="text-lg text-cyan-400 mr-2" />
                                <a
                                    href={contactInfo.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-cyan-400 transition-colors duration-200"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg py-2 px-4 inline-block">
                        <p className="text-sm text-gray-500">
                            © 2025 {contactInfo.company[language]}.{' '}
                            {language === 'en'
                                ? 'All rights reserved.'
                                : language === 'fa'
                                    ? 'تمامی حقوق محفوظ است.'
                                    : 'جميع الحقوق محفوظة.'}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;