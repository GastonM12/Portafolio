import React from 'react';
import { useHeroLogic } from './hooks/useHeroLogic';
import { HeroProps } from './models';
import { BackgroundElements } from './components/BackgroundElements';
import { HeroContent } from './components/HeroContent';
import { HeroVisual } from './components/HeroVisual';
import styles from './Hero.module.css';

export const Hero: React.FC<HeroProps> = ({ theme }) => {
    const { opacity, heroData, heroImage } = useHeroLogic(theme);

    return (
        <section id="hero" className={`sticky top-0 z-0 h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden pt-20 ${styles.heroContainer || ''}`}>
            <BackgroundElements opacity={opacity} />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
                <HeroContent data={heroData} />
                <HeroVisual image={heroImage} data={heroData} />
            </div>
        </section>
    );
};
