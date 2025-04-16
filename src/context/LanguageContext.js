import React, { createContext, useState, useEffect, useContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // زبان اولیه از localStorage، اگه نبود انگلیسی
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    // ذخیره زبان تو localStorage
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// هوک برای دسترسی به context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

