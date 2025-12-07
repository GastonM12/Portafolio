import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Workflow <span className="text-indigo-500">Profesional</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Mi metodología para transformar ideas complejas en productos digitales robustos.
            </p>
        </motion.div>
    );
};
