import React, { useMemo } from 'react';
import { m } from 'framer-motion';
import { GlassCard } from '../../../components/ui/GlassCard';
import { Project } from '../models';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // Generate stable random offsets for each tag
    const tagVariants = useMemo(() => {
        return project.tags.map(() => ({
            hidden: {
                opacity: 0,
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                scale: 0,
                rotate: (Math.random() - 0.5) * 90
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                }
            }
        }));
    }, [project.tags]);

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="h-[75vh] w-[90vw] md:w-[80vw] lg:w-[60vw] max-w-[1200px] flex-shrink-0 p-4 will-change-transform"
        >
            <GlassCard className="overflow-hidden border-0 bg-slate-900/20 dark:bg-slate-900/20 h-full relative group">
                {/* Full Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay z-10`}></div>
                    <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 z-20"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-30 h-full flex flex-col justify-end p-8 md:p-12">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${project.badge.color}-500/20 border border-${project.badge.color}-500/30 text-${project.badge.color}-300 text-xs font-medium backdrop-blur-md`}>
                                <project.badge.icon size={14} /> {project.badge.text}
                            </div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h3>

                        <p className="text-lg text-slate-200 mb-6 leading-relaxed max-w-2xl line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, index) => (
                                <m.span
                                    key={tag}
                                    variants={tagVariants[index]}
                                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium backdrop-blur-sm"
                                >
                                    {tag}
                                </m.span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                                >
                                    <link.icon size={18} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>
        </m.div>
    );
};
