import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Globe, Sparkles } from 'lucide-react';

interface StackPreviewCardProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export const StackPreviewCard: React.FC<StackPreviewCardProps> = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="h-full p-6 flex flex-col justify-center items-center gap-4 group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl">
                <div className="flex flex-col justify-center items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="grid grid-cols-3 gap-3">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-3 bg-blue-500/20 dark:bg-blue-500/30 rounded-xl text-blue-600 dark:text-blue-400 flex justify-center backdrop-blur-sm border border-blue-500/20 shadow-lg shadow-blue-500/10"
                        >
                            <Code2 size={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="p-3 bg-yellow-500/20 dark:bg-yellow-500/30 rounded-xl text-yellow-600 dark:text-yellow-400 flex justify-center backdrop-blur-sm border border-yellow-500/20 shadow-lg shadow-yellow-500/10"
                        >
                            <Terminal size={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-3 bg-purple-500/20 dark:bg-purple-500/30 rounded-xl text-purple-600 dark:text-purple-400 flex justify-center backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10"
                        >
                            <Cpu size={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="p-3 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-xl text-cyan-600 dark:text-cyan-400 flex justify-center backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                        >
                            <Globe size={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-3 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 flex justify-center backdrop-blur-sm border border-emerald-500/20 shadow-lg shadow-emerald-500/10"
                        >
                            <Sparkles size={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="p-3 bg-slate-500/20 dark:bg-slate-700/30 rounded-xl text-slate-600 dark:text-slate-400 flex justify-center text-xs font-bold items-center backdrop-blur-sm border border-slate-500/20 shadow-lg shadow-slate-500/10"
                        >
                            +20
                        </motion.div>
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-indigo-500 transition-colors">Ver Stack Completo</p>
                </div>
            </div>
        </motion.div>
    );
};
