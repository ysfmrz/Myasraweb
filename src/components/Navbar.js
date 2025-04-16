import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    // لینک‌ها با ترتیب پیش‌فرض انگلیسی
    const navLinks = [
        { to: '/', label: { en: 'Home', fa: 'خانه', ar: 'الرئيسية' } },
        { to: '/services', label: { en: 'Services', fa: 'خدمات', ar: 'الخدمات' } },
        { to: '/about', label: { en: 'About', fa: 'درباره ما', ar: 'معلومات عنا' } },
        { to: '/contact', label: { en: 'Contact', fa: 'تماس', ar: 'اتصل بنا' } },
    ];

    // تو فارسی/عربی، الرئيسية/خانه باید راست‌ترین (اولین از راست) باشه
    const displayedLinks = language === 'en' ? navLinks : [
        navLinks[0], // الرئيسية/خانه
        navLinks[3], // اتصل بنا
        navLinks[2], // معلومات عنا
        navLinks[1], // الخدمات
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center h-16 ${language === 'en' ? 'flex-row' : 'flex-row-reverse'
                        }`}
                >
                    {/* لوگو */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <NavLink to="/" className="flex items-center gap-2">
                            {language === 'en' ? (
                                <>
                                    <img
                                        src={require('../assets/fav.png')}
                                        alt="AstraTech Logo"
                                        className="h-8 w-8"
                                    />
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
                                        AstraTech
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
                                        {language === 'fa' ? 'آستراتک' : 'أستراتك'}
                                    </span>
                                    <img
                                        src={require('../assets/fav.png')}
                                        alt="AstraTech Logo"
                                        className="h-8 w-8"
                                    />
                                </>
                            )}
                        </NavLink>
                    </div>

                    {/* فاصله برای وسط کردن منو */}
                    <div className="flex-grow"></div>

                    {/* لینک‌ها (دسکتاپ) */}
                    <div
                        className={`hidden md:flex items-center gap-4 ${language === 'en' ? 'flex-row' : 'flex-row-reverse'
                            }`}
                    >
                        {displayedLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${isActive
                                        ? 'bg-cyan-500 text-gray-900'
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                                    }`
                                }
                            >
                                {link.label[language]}
                            </NavLink>
                        ))}
                    </div>

                    {/* فاصله برای وسط کردن منو */}
                    <div className="flex-grow"></div>

                    {/* سوییچر زبان (دسکتاپ) */}
                    <div
                        className={`hidden md:flex items-center ${language === 'en' ? 'ml-4' : 'mr-4'
                            }`}
                    >
                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                            <option value="fa">FA</option>
                        </select>
                    </div>

                    {/* دکمه همبرگری (موبایل) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
                            aria-label={language === 'en' ? 'Toggle menu' : language === 'fa' ? 'باز کردن منو' : 'تبديل القائمة'}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* منوی موبایل */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {displayedLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${isActive
                                            ? 'bg-cyan-500 text-gray-900'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label[language]}
                                </NavLink>
                            ))}
                            <div className="px-3 py-2">
                                <select
                                    value={language}
                                    onChange={(e) => {
                                        changeLanguage(e.target.value);
                                        setIsOpen(false);
                                    }}
                                    className="w-full bg-gray-800 text-gray-300 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                >
                                    <option value="en">English</option>
                                    <option value="ar">العربية</option>
                                    <option value="fa">فارسی</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;