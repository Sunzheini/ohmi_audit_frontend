import React from 'react';
import {useTranslation, i18n} from 'react-i18next';

function LanguageSwitcher() {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;

    const languages = [
        {code: 'en', name: 'English'},
        {code: 'bg', name: 'Bulgarian'},
        // Add more languages as needed
    ];

    const changeLanguage = (e) => {
        const newLanguage = e.target.value;
        i18n.changeLanguage(newLanguage);
        // Optional: Save preference to localStorage
        localStorage.setItem('i18nextLng', newLanguage);
    };

    return (
            <div className="lang">
                <select
                        id="language-selector"
                        value={currentLanguage}
                        onChange={changeLanguage}
                        className="language-dropdown"
                >
                    {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name} ({lang.code})
                            </option>
                    ))}
                </select>
            </div>
    );
}

export default LanguageSwitcher;