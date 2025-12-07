import React from 'react';
import { m } from 'framer-motion';
import { PRELOADER_TEXT } from '../services/preloaderData';

export const AnimatedText: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    return (
        <div className="overflow-hidden flex items-center justify-center">
            <m.div
                className="flex text-4xl md:text-7xl font-bold text-white tracking-tighter"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {PRELOADER_TEXT.split("").map((char, index) => (
                    <m.span
                        key={index}
                        variants={letterVariants}
                        className={char === " " ? "w-4 md:w-8" : ""}
                    >
                        {char}
                    </m.span>
                ))}
            </m.div>
        </div>
    );
};
