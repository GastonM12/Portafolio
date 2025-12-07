import React from 'react';
import { m } from 'framer-motion';
import { useExperienceLogic } from './hooks/useExperienceLogic';
import { SectionHeader } from './components/SectionHeader';
import { ExperienceCard } from './components/ExperienceCard';
import { EducationList } from './components/EducationList';
import { TechStack } from './components/TechStack';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
    const { experience, education, certifications, techStack } = useExperienceLogic();

    return (
        <section id="experience" className={`min-h-screen py-24 px-6 sm:px-12 lg:px-24 flex flex-col justify-center relative ${styles.experienceContainer}`}>
            <div className="container mx-auto">
                <SectionHeader />

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Experience & Education (Span 2) */}
                    <div className="lg:col-span-2 space-y-8">

                        {experience.map((job, idx) => (
                            <m.div
                                key={job.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
                                className="will-change-transform"
                            >
                                <ExperienceCard data={job} />
                            </m.div>
                        ))}

                        {/* Education & Courses Section */}
                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                            className="will-change-transform"
                        >
                            <EducationList education={education} certifications={certifications} />
                        </m.div>

                    </div>

                    {/* Right Column: Sticky Sidebar Stack (Span 1) */}
                    <div className="lg:col-span-1">
                        <TechStack data={techStack} />
                    </div>

                </div>
            </div>
        </section>
    );
};
