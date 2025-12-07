import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { usePreloaderLogic } from './hooks/usePreloaderLogic';
import { AnimatedText } from './components/AnimatedText';
import { SubText } from './components/SubText';
import { PreloaderProps } from './models';
import styles from './Preloader.module.css';

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const { show } = usePreloaderLogic(onComplete);

    return (
        <AnimatePresence>
            {show && (
                <m.div
                    className={`fixed inset-0 flex flex-col items-center justify-center bg-black ${styles.preloaderContainer}`}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatedText />
                    <SubText />
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
