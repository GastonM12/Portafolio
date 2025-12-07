import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export const SocialCard: React.FC = () => {
    return (
        <motion.div
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
            <div className="h-full p-6 flex flex-col justify-center gap-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl">
                <a href="https://github.com/GastonM12" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10 backdrop-blur-sm transition-colors group/link border border-slate-200/50 dark:border-white/10 shadow-lg">
                    <div className="p-2 bg-slate-900 dark:bg-white rounded-lg text-white dark:text-slate-900 transition-colors shadow-md">
                        <Github size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 drop-shadow-sm">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/gaston-mori-0a3719335/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-blue-100/50 dark:bg-blue-500/10 hover:bg-blue-200/70 dark:hover:bg-blue-500/20 backdrop-blur-sm transition-colors group/link border border-blue-200/50 dark:border-blue-500/20 shadow-lg">
                    <div className="p-2 bg-blue-600 rounded-lg text-white transition-colors shadow-md">
                        <Linkedin size={18} />
                    </div>
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300 drop-shadow-sm">LinkedIn</span>
                </a>
            </div>
        </motion.div>
    );
};
