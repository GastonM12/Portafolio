import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../../components/ui/GlassCard';
import { ExperienceItem } from '../models';

interface ExperienceCardProps {
    data: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
    const Icon = data.icon;
    const colorClass = data.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400';
    const bgPulse = data.color === 'emerald' ? 'bg-emerald-500' : 'bg-indigo-500';
    const checkColor = data.color === 'emerald' ? 'text-emerald-500' : 'text-indigo-500';
    const gradient = data.color === 'emerald'
        ? 'from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-900/50'
        : 'from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900/50';
    const iconColor = data.color === 'emerald' ? 'text-slate-900 dark:text-white' : 'text-indigo-900 dark:text-indigo-400';

    return (
        <GlassCard className={`p-8 flex flex-col justify-between group bg-gradient-to-br ${gradient}`} hoverEffect>
            <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Icon size={120} className={iconColor} />
            </div>
            <div className="z-10">
                <div className={`flex items-center gap-3 mb-4 ${colorClass}`}>
                    <div className={`w-2 h-2 rounded-full ${bgPulse} animate-pulse`}></div>
                    <span className="font-mono text-sm tracking-wider uppercase">{data.role}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{data.company}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">{data.date}</p>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm mb-6">
                    {data.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className={`mt-1 ${checkColor} shrink-0`} />
                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                    ))}
                </ul>

                {data.cmd && (
                    <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-200/50 dark:bg-black/40 p-4 rounded-xl border border-slate-300 dark:border-white/5 shadow-inner">
                        <p>
                            <span className={data.cmd.colors[0]}>{data.cmd.highlight[0]}</span> commit -m <span className={data.cmd.colors[1]}>"{data.cmd.highlight[1]}"</span>
                        </p>
                    </div>
                )}

                {data.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {data.tags.map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-200 dark:border-indigo-500/30">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </GlassCard>
    );
};
