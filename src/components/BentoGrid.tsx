import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Github, Linkedin, Mail, Code2, Terminal, Cpu, Globe, Sparkles, X, Database, Cloud, Layout } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

import profileImage from '../assets/image/Picsart_25-12-01_18-53-07-741.jpg';

// Tech Stack Data with SimpleIcons slugs
const techStack = [
    {
        category: "Frontend Ecosystem",
        icon: Layout,
        color: "blue",
        skills: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Redux", slug: "redux" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css3" },
        ]
    },
    {
        category: "Backend & API",
        icon: Terminal,
        color: "emerald",
        skills: [
            { name: "Python", slug: "python" },
            { name: "Django", slug: "django" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PHP", slug: "php" },
            { name: "Laravel", slug: "laravel" },
            { name: "Express", slug: "express" },
        ]
    },
    {
        category: "Database & Cloud",
        icon: Database,
        color: "purple",
        skills: [
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "MySQL", slug: "mysql" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "Firebase", slug: "firebase" },
            { name: "AWS", slug: "amazonwebservices" },
            { name: "Docker", slug: "docker" },
        ]
    },
    {
        category: "Tools & DevOps",
        icon: Cloud,
        color: "orange",
        skills: [
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github" },
            { name: "N8N", slug: "n8n" },
            { name: "Linux", slug: "linux" },
            { name: "Postman", slug: "postman" },
            { name: "Vercel", slug: "vercel" },
        ]
    }
];

export const BentoGrid: React.FC = () => {
    const [isStackOpen, setIsStackOpen] = useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsStackOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsStackOpen(false);
        }, 150);
    };

    // Close on Scroll or Escape Key
    useEffect(() => {
        const handleScroll = () => {
            if (isStackOpen) setIsStackOpen(false);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isStackOpen) setIsStackOpen(false);
        };

        if (isStackOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isStackOpen]);

    return (
        <>
            <section className="py-24 px-6 sm:px-12 lg:px-24 relative">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Sobre <span className="text-indigo-500">Mí</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">

                        {/* 1. Profile & Bio (2x2) */}
                        <motion.div
                            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full p-8 flex flex-col justify-between relative overflow-hidden group">
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

                        {/* 2. Map / Location (1x1) */}
                        <motion.div
                            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="h-full relative overflow-hidden group rounded-2xl">
                                <img
                                    src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-60.7000,-31.6333,12,0/400x400?access_token=PLACEHOLDER"
                                    alt="Map Placeholder"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-2xl"
                                    onError={(e) => {
                                        // Fallback if no map token
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="flex items-center gap-2 text-white mb-1 drop-shadow-lg">
                                        <MapPin size={16} className="text-indigo-400" />
                                        <span className="font-bold text-sm">Santa Fe, AR</span>
                                    </div>
                                    <p className="text-xs text-slate-300 font-mono drop-shadow-md">GMT-3 • Remote Ready</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Tech Stack (1x1) - HOVER TRIGGER */}
                        <motion.div
                            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="h-full p-6 flex flex-col justify-center items-center gap-4 group relative">
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

                        {/* 4. Socials (1x1) */}
                        <motion.div
                            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="h-full p-6 flex flex-col justify-center gap-3">
                                <a href="https://github.com/GastonM12" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10 backdrop-blur-sm transition-colors group/link border border-slate-200/50 dark:border-white/10 shadow-lg">
                                    <div className="p-2 bg-slate-900 dark:bg-white rounded-lg text-white dark:text-slate-900 transition-colors shadow-md">
                                        <Github size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 drop-shadow-sm">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/gaston-mori-0a3719335/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-blue-100/50 dark:bg-blue-500/10 hover:bg-blue-200/70 dark:hover:bg-blue-500/20 backdrop-blur-sm transition-colors group/link border border-blue-200/50 dark:border-blue-500/20 shadow-lg">
                                    <div className="p-2 bg-blue-600 rounded-lg text-white transition-colors shadow-md">
                                        <Linkedin size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300 drop-shadow-sm">LinkedIn</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* 5. Contact CTA (1x1) */}
                        <motion.div
                            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="h-full p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="flex justify-between items-start">
                                    <Mail size={24} className="text-indigo-200 drop-shadow-md" />
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                                </div>
                                <div>
                                    <p className="text-indigo-100 text-xs font-medium mb-1 drop-shadow-sm">¿Tienes un proyecto?</p>
                                    <h4 className="text-lg font-bold text-white drop-shadow-md">Hablemos</h4>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FULL SCREEN TECH STACK MODAL */}
            <AnimatePresence mode="wait">
                {isStackOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Backdrop with Blur */}
                        <div
                            className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 no-scrollbar"
                        >
                            <button
                                onClick={() => setIsStackOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors backdrop-blur-md border border-white/20"
                            >
                                <X size={24} className="text-white" />
                            </button>

                            <div className="mb-12 text-center">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                    Arsenal <span className="text-indigo-400">Tecnológico</span>
                                </h2>
                                <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
                                    Un ecosistema de herramientas seleccionadas para construir soluciones escalables, robustas y de alto rendimiento.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {techStack.map((category, idx) => (
                                    <motion.div
                                        key={category.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="rounded-2xl p-6 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`p-2 rounded-lg bg-${category.color}-500/30 text-white backdrop-blur-sm shadow-lg`}>
                                                <category.icon size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white drop-shadow-md">{category.category}</h3>
                                        </div>

                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="flex flex-col items-center gap-2 group/skill">
                                                    <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-white/20 group-hover/skill:scale-110 group-hover/skill:border-indigo-400/50 group-hover/skill:bg-white/30 transition-all duration-300">
                                                        <img
                                                            src={`https://cdn.simpleicons.org/${skill.slug}/white`}
                                                            alt={skill.name}
                                                            className="w-full h-full object-contain opacity-90 group-hover/skill:opacity-100 transition-opacity"
                                                            onError={(e) => {
                                                                // Fallback if icon fails
                                                                e.currentTarget.style.display = 'none';
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-medium text-white/90 group-hover/skill:text-indigo-300 transition-colors text-center drop-shadow-md">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
