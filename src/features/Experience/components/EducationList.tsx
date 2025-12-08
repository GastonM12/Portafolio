import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '../../../components/ui/GlassCard';
import { Modal } from '../../../components/ui/Modal';
import { EducationItem, CertificationItem } from '../models';

interface EducationListProps {
    education: EducationItem[];
    certifications: CertificationItem[];
}

export const EducationList: React.FC<EducationListProps> = ({ education, certifications }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // Show only first 7 certifications
    const displayedCertifications = certifications.slice(0, 7);
    const remainingCount = certifications.length - 7;

    // Animation variants for fly-in effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: (custom: number) => {
            // Randomize start position from edges
            const random = custom % 4;
            switch (random) {
                case 0: return { x: "-100vw", y: 0, opacity: 0, scale: 0.5 }; // Left
                case 1: return { x: "100vw", y: 0, opacity: 0, scale: 0.5 };  // Right
                case 2: return { x: 0, y: "-100vh", opacity: 0, scale: 0.5 }; // Top
                default: return { x: 0, y: "100vh", opacity: 0, scale: 0.5 }; // Bottom
            }
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 60,
                mass: 1
            }
        }
    };

    return (
        <>
            <GlassCard className="overflow-hidden bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10" hoverEffect>
                {/* Decorative Header */}
                <div className="bg-slate-100/50 dark:bg-white/5 p-6 border-b border-slate-200 dark:border-white/10 flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                        <GraduationCap className="text-yellow-600 dark:text-yellow-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Formación Académica</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Educación formal y certificaciones especializadas</p>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Timeline: Formal Education */}
                    <div className="relative">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                            <BookOpen size={14} /> Carreras
                        </h4>

                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-10 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 h-[80%]"></div>

                        <div className="space-y-8">
                            {education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 group">
                                    <div className={`absolute left-[2px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 ${edu.color === 'yellow' ? 'bg-yellow-500' : 'bg-slate-400 dark:bg-slate-600'} shadow-sm z-10 group-hover:scale-110 transition-transform`}></div>
                                    <div className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                                        <h5 className="font-bold text-slate-900 dark:text-white text-base">{edu.title}</h5>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mt-1">{edu.institution} {edu.period && `(${edu.period})`}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                            <Award size={14} /> Certificaciones
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {displayedCertifications.map((course, idx) => (
                                <div key={idx} className="flex flex-col p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md hover:border-slate-200 dark:hover:border-white/20 transition-all cursor-default">
                                    <div className="flex items-center gap-2 mb-1 text-slate-900 dark:text-white font-medium text-xs">
                                        <span className="text-indigo-500"><course.icon size={14} /></span>
                                        {course.name}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wide text-slate-400 ml-6">{course.inst}</span>
                                </div>
                            ))}

                            {/* See All Button - Redesigned */}
                            {remainingCount > 0 && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative overflow-hidden flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="font-bold text-xs mb-1 z-10 flex items-center gap-1">
                                        Ver todas <Award size={12} />
                                    </span>
                                    <span className="text-[10px] text-indigo-100 z-10 bg-white/20 px-2 py-0.5 rounded-full">
                                        +{remainingCount} más
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </GlassCard>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Certificaciones & Logros"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {certifications.map((course, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            className="flex flex-col p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-2 text-slate-900 dark:text-white font-medium">
                                <span className="text-indigo-500 p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
                                    <course.icon size={18} />
                                </span>
                                <div>
                                    <div className="text-sm font-bold">{course.name}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{course.inst}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Modal>
        </>
    );
};
