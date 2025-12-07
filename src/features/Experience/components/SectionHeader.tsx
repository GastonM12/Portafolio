import React from 'react';
import { m } from 'framer-motion';

export const SectionHeader: React.FC = () => {
    return (
        <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-16 will-change-transform"
        >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Trayectoria & <span className="text-slate-500 dark:text-slate-500">Formación</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                Experiencia profesional híbrida y capacitación continua en tecnologías modernas.
            </p>
        </m.div>
    );
};
