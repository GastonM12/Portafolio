import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, GitBranch } from 'lucide-react';
import { GlassCard } from '../../../components/ui/GlassCard';
import { TechStackData } from '../models';

// Helper Component for Skill Meter
const SkillRow: React.FC<{ name: string; level: number }> = ({ name, level }) => {
    const percentage = level * 20;

    return (
        <div className="group mb-4">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{name}</span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{percentage}%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                    style={{ width: percentage + '%' }}
                    className="h-full bg-blue-500 dark:bg-blue-500 rounded-full group-hover:bg-blue-400 dark:group-hover:bg-blue-400 transition-colors"
                />
            </div>
        </div>
    );
};

interface TechStackProps {
    data: TechStackData;
}

export const TechStack: React.FC<TechStackProps> = ({ data }) => {
    return (
        <div className="sticky top-24 space-y-6">
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="will-change-transform"
            >
                <GlassCard className="overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-xl border-t-4 border-t-blue-500" hoverEffect>
                    {/* Tech Header */}
                    <div className="p-6 pb-2">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Tech Arsenal</h3>
                            <Terminal size={20} className="text-blue-500 opacity-80" />
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">STACK VISUALIZER v2.5</p>
                    </div>

                    <div className="px-6 pb-6 space-y-6">

                        {/* Group: Core */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-wider">Backend & Data</h4>
                            <div className="space-y-3">
                                {data.backend.map((item) => (
                                    <SkillRow key={item.name} name={item.name} level={item.level} />
                                ))}
                            </div>
                        </div>

                        {/* Group: Frontend */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-wider">Frontend Interface</h4>
                            <div className="space-y-3">
                                {data.frontend.map((item) => (
                                    <SkillRow key={item.name} name={item.name} level={item.level} />
                                ))}
                            </div>
                        </div>

                        {/* Group: Tools */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-wider">DevOps & Tools</h4>
                            <div className="space-y-3">
                                {data.tools.map((item) => (
                                    <SkillRow key={item.name} name={item.name} level={item.level} />
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="px-6 py-4 bg-slate-100 dark:bg-black/20 border-t border-slate-200 dark:border-white/5">
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-500">IDIOMAS</span>
                            <div className="flex gap-3">
                                <span className="px-2 py-1 rounded bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300">🇪🇸 ES</span>
                                <span className="px-2 py-1 rounded bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300">🇬🇧 EN (B2)</span>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Soft Skills Mini Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-500/10 flex items-start gap-3">
                    <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-500/20 rounded-full text-blue-600 dark:text-blue-400">
                        <GitBranch size={14} />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase mb-1">Habilidades Blandas</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                            "Capacidad de análisis, gestión de tiempo, motivación de equipos y adaptabilidad en entornos ágiles."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
