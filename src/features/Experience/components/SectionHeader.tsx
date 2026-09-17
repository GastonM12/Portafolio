import React from 'react';
import { m } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export const SectionHeader: React.FC = () => {
    const { language } = useLanguage();

    return (
        <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-16 will-change-transform"
        >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {language === 'en' ? (
                    <>Experience & <span className="text-slate-500 dark:text-slate-500">Education</span></>
                ) : (
                    <>Trayectoria & <span className="text-slate-500 dark:text-slate-500">Formación</span></>
                )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                {language === 'en'
                    ? 'Professional trajectory and continuous training in modern software engineering.'
                    : 'Experiencia profesional y capacitación continua en tecnologías modernas.'}
            </p>
        </m.div>
    );
};
