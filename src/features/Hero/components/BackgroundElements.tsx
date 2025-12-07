import React from 'react';
import { m, MotionValue } from 'framer-motion';

interface BackgroundElementsProps {
    opacity: MotionValue<number>;
}

export const BackgroundElements: React.FC<BackgroundElementsProps> = ({ opacity }) => {
    return (
        <>
            {/* Scroll Darkening Overlay */}
            <m.div
                style={{ opacity }}
                className="absolute inset-0 bg-slate-950 z-50 pointer-events-none"
            />

            {/* Background Gradient Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none transform-gpu" />
        </>
    );
};
