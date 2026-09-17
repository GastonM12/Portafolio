import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

export const Footer: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="container mx-auto pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-slate-500 dark:text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Gaston Mori. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <span>Full Stack Developer</span>
                <span>•</span>
                <span>{language === 'en' ? 'Open to Work' : 'Disponible para trabajar'}</span>
            </div>
        </div>
    );
};
