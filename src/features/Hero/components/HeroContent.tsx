import React from 'react';
import { m } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { HeroData } from '../models';
import { StatusBadge } from './StatusBadge';

interface HeroContentProps {
    data: HeroData;
}

export const HeroContent: React.FC<HeroContentProps> = ({ data }) => {
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
                <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-medium text-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
                    Hablemos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </m.div>
    );
};
