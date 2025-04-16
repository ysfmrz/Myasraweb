import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContactUs from './ContactUs'; // کامپوننت شرکت
import Experts from './Experts'; // کامپوننت اکسپرت‌ها

function Contact() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const contactContent = {
        title: {
            en: 'Get in Touch',
            fa: 'با ما تماس بگیرید',
            ar: 'تواصل معنا',
        },
        description: {
            en: 'Reach out to our team for inquiries, collaborations, or support.',
            fa: 'برای سوالات، همکاری یا پشتیبانی با تیم ما تماس بگیرید.',
            ar: 'تواصل مع فريقنا للاستفسارات أو التعاون أو الدعم.',
        },
        formTitle: {
            en: 'Send Us a Message',
            fa: 'پیامی برای ما ارسال کنید',
            ar: 'أرسل لنا رسالة',
        },
        form: {
            name: { en: 'Name', fa: 'نام', ar: 'الاسم' },
            email: { en: 'Email', fa: 'ایمیل', ar: 'البريد الإلكتروني' },
            message: { en: 'Message', fa: 'پیام', ar: 'الرسالة' },
            submit: { en: 'Send', fa: 'ارسال', ar: 'إرسال' },
            success: {
                en: 'Message sent successfully!',
                fa: 'پیام با موفقیت ارسال شد!',
                ar: 'تم إرسال الرسالة بنجاح!',
            },
            errors: {
                name: {
                    en: 'Name is required',
                    fa: 'نام الزامی است',
                    ar: 'الاسم مطلوب',
                },
                email: {
                    en: 'Valid email is required',
                    fa: 'ایمیل معتبر الزامی است',
                    ar: 'البريد الإلكتروني الصحيح مطلوب',
                },
                message: {
                    en: 'Message is required',
                    fa: 'پیام الزامی است',
                    ar: 'الرسالة مطلوبة',
                },
            },
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = contactContent.form.errors.name[language];
        }
        if (!formData.email.trim()) {
            newErrors.email = contactContent.form.errors.email[language];
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = contactContent.form.errors.email[language];
        }
        if (!formData.message.trim()) {
            newErrors.message = contactContent.form.errors.message[language];
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            setErrors(formErrors);
        }
    };

    useEffect(() => {
        const items = document.querySelectorAll('.contact-item');
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
                <h1 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 contact-item opacity-0 translate-y-10">
                    {contactContent.title[language]}
                </h1>
                <p className="text-sm sm:text-base text-gray-300 text-center mt-4 max-w-2xl mx-auto leading-relaxed contact-item opacity-0 translate-y-10">
                    {contactContent.description[language]}
                </p>
            </section>

            <ContactUs />

            <Experts />

            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 text-center mb-8 contact-item opacity-0 translate-y-10">
                    {contactContent.formTitle[language]}
                </h2>
                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <p className="text-sm sm:text-base text-green-400 text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 contact-item opacity-0 translate-y-10">
                            {contactContent.form.success[language]}
                        </p>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-transparent bg-gradient-to-r from-cyan-400/20 to-pink-500/20 contact-item opacity-0 translate-y-10"
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className={`block text-sm sm:text-base text-gray-200 mb-2 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                >
                                    {contactContent.form.name[language]}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-700/50 text-white border ${errors.name
                                            ? 'border-red-500'
                                            : 'border-gray-600'
                                        } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-1 block text-right">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className={`block text-sm sm:text-base text-gray-200 mb-2 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                >
                                    {contactContent.form.email[language]}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-700/50 text-white border ${errors.email
                                            ? 'border-red-500'
                                            : 'border-gray-600'
                                        } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1 block text-right">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className={`block text-sm sm:text-base text-gray-200 mb-2 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                >
                                    {contactContent.form.message[language]}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-700/50 text-white border ${errors.message
                                            ? 'border-red-500'
                                            : 'border-gray-600'
                                        } rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${language === 'fa' || language === 'ar'
                                            ? 'text-right'
                                            : 'text-left'
                                        }`}
                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-500 text-sm mt-1 block text-right">
                                        {errors.message}
                                    </span>
                                )}
                            </div>
                            <div
                                className={`flex ${language === 'fa' || language === 'ar'
                                        ? 'justify-end'
                                        : 'justify-start'
                                    }`}
                            >
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300"
                                >
                                    {contactContent.form.submit[language]}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Contact;