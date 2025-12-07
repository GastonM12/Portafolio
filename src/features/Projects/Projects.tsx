import React from 'react';
import { motion } from 'framer-motion';
import { useProjectsLogic } from './hooks/useProjectsLogic';
import { ProjectCard } from './components/ProjectCard';
import { SeeMoreCard } from './components/SeeMoreCard';
import { SectionHeader } from './components/SectionHeader';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    const { targetRef, x, projects } = useProjectsLogic();

    return (
        <section ref={targetRef} id="projects" className={`relative h-[1000vh] bg-slate-50 dark:bg-antigravity-bg ${styles.projectsContainer}`}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-12 items-center">
                    <SectionHeader />
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    <SeeMoreCard />
                </motion.div>
            </div>
        </section>
    );
};
