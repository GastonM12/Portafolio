import React from 'react';
import { m } from 'framer-motion';
import { PRELOADER_SUBTEXT } from '../services/preloaderData';

export const SubText: React.FC = () => {
    return (
        <div className="overflow-hidden mt-4">
            <m.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="text-white/60 text-xs md:text-sm tracking-[0.5em] uppercase font-light"
            >
                {PRELOADER_SUBTEXT}
            </m.div>
        </div>
    );
};
