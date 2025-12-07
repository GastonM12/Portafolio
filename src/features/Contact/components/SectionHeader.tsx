import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const SectionHeader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-slate-900 dark:text-white tracking-tighter mb-8">
                ¿Construimos algo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">juntos?</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
                <MapPin size={16} /> Santa Fe, Argentina
            </div>
        </motion.div>
    );
};
