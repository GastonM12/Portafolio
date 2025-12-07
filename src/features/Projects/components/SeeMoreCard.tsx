import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { GlassCard } from '../../../components/ui/GlassCard';

export const SeeMoreCard: React.FC = () => (
    <div className="h-[75vh] w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-[800px] flex-shrink-0 p-4 flex items-center justify-center">
        <GlassCard className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
            <a href="https://github.com/GastonM12" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-6 text-center w-full h-full justify-center">
                <div className="p-6 rounded-full bg-slate-200 dark:bg-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Github size={64} className="text-slate-900 dark:text-white" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">¿Quieres ver más?</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Explora todos mis proyectos en GitHub</p>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mt-4 group-hover:translate-x-2 transition-transform">
                    Visitar Perfil <ExternalLink size={20} />
                </div>
            </a>
        </GlassCard>
    </div>
);
