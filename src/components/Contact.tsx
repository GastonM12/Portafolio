import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="min-h-[80vh] flex flex-col justify-between py-24 px-6 relative bg-slate-100 dark:bg-antigravity-bg transition-colors duration-300">

            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto flex-grow flex flex-col justify-center items-center text-center z-10">
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

                <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a href="https://www.linkedin.com/in/gaston-mori-0a3719335/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none">
                        <Linkedin size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors mb-2" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn</span>
                    </a>
                    <a href="https://github.com/GastonM12" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none">
                        <Github size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors mb-2" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GitHub</span>
                    </a>
                    <a href="mailto:gastonexequielmori@outlook.com" className="group flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none">
                        <Mail size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                    </a>
                    <a href="https://wa.me/543493511221" className="group flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none">
                        <Phone size={32} className="text-slate-600 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</span>
                    </a>
                </motion.div>
            </div>

            <div className="container mx-auto pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-slate-500 dark:text-slate-500 text-sm">
                <p>&copy; 2025 Gaston Mori. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <span>Full Stack Developer</span>
                    <span>•</span>
                    <span>Open to Work</span>
                </div>
            </div>
        </section>
    );
};
