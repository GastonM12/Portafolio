import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../../assets/image/Picsart_25-12-01_18-53-07-741.jpg';

export const ProfileCard: React.FC = () => {
    return (
        <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="h-full p-8 flex flex-col justify-between relative overflow-hidden group bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-lg shadow-indigo-500/20">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-900"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white drop-shadow-md">Gaston Mori</h3>
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium drop-shadow-sm">Full Stack Developer</p>
                        </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed drop-shadow-sm text-sm">
                        Soy programador en formación con un sólido interés en el desarrollo web. Actualmente curso la carrera de <span className="text-slate-900 dark:text-white font-semibold">Técnico Superior en Programación</span>.
                        Me motiva aprender constantemente y enfrentar nuevos desafíos, buscando siempre aportar valor en entornos colaborativos.
                    </p>
                </div>

                <div className="z-10 mt-4 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                        {['Trabajo en Equipo', 'Gestión', 'Análisis', 'Scrum'].map((skill) => (
                            <span key={skill} className="px-2 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium shadow-lg shadow-emerald-500/10 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open to Work
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
