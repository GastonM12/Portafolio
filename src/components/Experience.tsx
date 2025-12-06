import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { EducationList } from './EducationList';
import { TechStack } from './TechStack';
import { experienceData } from '../data/experienceData';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="min-h-screen py-24 px-6 sm:px-12 lg:px-24 flex flex-col justify-center relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mb-16 will-change-transform"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Trayectoria & <span className="text-slate-500 dark:text-slate-500">Formación</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                        Experiencia profesional híbrida y capacitación continua en tecnologías modernas.
                    </p>
                </motion.div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Experience & Education (Span 2) */}
                    <div className="lg:col-span-2 space-y-8">

                        {experienceData.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
                                className="will-change-transform"
                            >
                                <ExperienceCard data={job} />
                            </motion.div>
                        ))}

                        {/* Education & Courses Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                            className="will-change-transform"
                        >
                            <EducationList />
                        </motion.div>

                    </div>

                    {/* Right Column: Sticky Sidebar Stack (Span 1) */}
                    <div className="lg:col-span-1">
                        <TechStack />
                    </div>

                </div>
            </div>
        </section>
    );
};
