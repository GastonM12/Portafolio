import React from 'react';
import { m } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { GlassCard } from '../../../components/ui/GlassCard';
import { HeroData } from '../models';

interface HeroVisualProps {
    image: string;
    data: HeroData;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ image, data }) => {
    return (
        <m.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 0.85, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden md:block -translate-y-8 will-change-transform"
        >
            <GlassCard className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] p-1.5 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-indigo-500 to-purple-600">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 group border-[3px] border-white/20">
                    <img
                        src={image}
                        alt={`${data.firstName} ${data.lastName}`}
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
                                    <div className="text-white font-bold text-lg">{data.role}</div>
                                </div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-3/4 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </m.div>
    );
};
