import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

import heroImageDark from '../assets/image/Gemini_Generated_Image_ujziezujziezujzi.png';
import heroImageLight from '../assets/image/Gemini_Generated_Image_4fsrj84fsrj84fsr (1).png';

export const Hero: React.FC = ({ theme }: { theme: string }) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 700], [0, 1]);

    const heroImage = theme === 'dark' ? heroImageDark : heroImageLight;

    return (
        <section id="hero" className="sticky top-0 z-0 h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden pt-20">

            {/* Scroll Darkening Overlay */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-slate-950 z-50 pointer-events-none"
            />

            {/* Background Gradient Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none transform-gpu" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10">

                {/* Left: Typography & Status */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col items-start space-y-8 will-change-transform"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        Open to Work
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            Gaston <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                                Mori
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
                            Desarrollador Full Stack en formación constante. <br />
                            <span className="text-slate-900 dark:text-slate-200 font-medium">Laravel, Python, React & AWS.</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="/CV_Gaston_Mori.pdf"
                            download="CV_Gaston_Mori.pdf"
                            className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Descargar CV <Download size={20} />
                            </span>
                        </a>
                        <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-medium text-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                            Hablemos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Right: Abstract Visual / Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 0.85, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 relative hidden md:block -translate-y-8 will-change-transform"
                >
                    <GlassCard className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] p-1.5 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-indigo-500 to-purple-600">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 group border-[3px] border-white/20">
                            <img
                                src={heroImage}
                                alt="Gaston Mori"
                                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Content Layer - Ensure it's above the filter */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                                            <Terminal className="text-blue-400" size={24} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-300 font-mono uppercase tracking-wider mb-1">Enfoque Actual</div>
                                            <div className="text-white font-bold text-lg">Full Stack & Cloud Arch</div>
                                        </div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-3/4 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};
