import React from 'react';
import { m } from 'framer-motion';
import { useBentoGridLogic } from './hooks/useBentoGridLogic';
import { ProfileCard } from './components/ProfileCard';
import { MapCard } from './components/MapCard';
import { StackPreviewCard } from './components/StackPreviewCard';
import { SocialCard } from './components/SocialCard';
import { ContactCard } from './components/ContactCard';
import { TechStackModal } from './components/TechStackModal';
import styles from './BentoGrid.module.css';

export const BentoGrid: React.FC = () => {
    const { isStackOpen, setIsStackOpen, handleMouseEnter, handleMouseLeave, techStack } = useBentoGridLogic();

    return (
        <>
            <section className={`py-24 px-6 sm:px-12 lg:px-24 relative ${styles.bentoContainer}`}>
                <div className="container mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Sobre <span className="text-indigo-500">Mí</span>
                        </h2>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
                        {/* 1. Profile & Bio (2x2) */}
                        <ProfileCard />

                        {/* 2. Map / Location (1x1) */}
                        <MapCard />

                        {/* 3. Tech Stack (1x1) - HOVER TRIGGER */}
                        <StackPreviewCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

                        {/* 4. Socials (1x1) */}
                        <SocialCard />

                        {/* 5. Contact CTA (1x1) */}
                        <ContactCard />
                    </div>
                </div>
            </section>

            {/* FULL SCREEN TECH STACK MODAL */}
            <TechStackModal
                isOpen={isStackOpen}
                onClose={() => setIsStackOpen(false)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                techStack={techStack}
            />
        </>
    );
};
