import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { HeroData } from '../models';
import { StatusBadge } from './StatusBadge';

interface HeroContentProps {
    data: HeroData;
}

export const HeroContent: React.FC<HeroContentProps> = ({ data }) => {
    const [showContactOptions, setShowContactOptions] = useState(false);

    return (
        <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-8 will-change-transform"
        >
            <StatusBadge status={data.status} />

            <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    {data.firstName} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                        {data.lastName}
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
                    {data.description} <br />
                    <span className="text-slate-900 dark:text-slate-200 font-medium">{data.techStack}</span>
                </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <a
                    href={data.cvLink}
                    download="CV_Gaston_Mori.pdf"
                    className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Descargar CV <Download size={20} />
                    </span>
                </a>
                <div className="relative flex items-center h-[60px]">
                    <AnimatePresence mode="wait">
                        {!showContactOptions ? (
                            <m.button
                                key="contact-button"
                                initial={{ opacity: 0, scale: 0.9, width: 0 }}
                                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                                exit={{ opacity: 0, scale: 0.9, width: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setShowContactOptions(true)}
                                className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-medium text-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                                Hablemos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </m.button>
                        ) : (
                            <m.div
                                key="contact-options"
                                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3"
                            >
                                <a
                                    href={data.linkedinLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform shadow-lg"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href={data.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-[#333] dark:bg-white text-white dark:text-slate-900 hover:scale-110 transition-transform shadow-lg"
                                    title="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={data.email}
                                    className="p-4 rounded-full bg-emerald-600 text-white hover:scale-110 transition-transform shadow-lg"
                                    title="Email"
                                >
                                    <Mail size={24} />
                                </a>
                                <button
                                    onClick={() => setShowContactOptions(false)}
                                    className="p-4 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                    title="Cerrar"
                                >
                                    <X size={24} />
                                </button>
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </m.div>
    );
};
