import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-all font-mono text-xs font-bold tracking-wider"
            aria-label="Toggle language"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <Languages size={15} className="text-indigo-600 dark:text-indigo-400" />
            <span className="uppercase">{language === 'es' ? 'ES' : 'EN'}</span>
        </button>
    );
};
