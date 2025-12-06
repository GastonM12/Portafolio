import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 2500); // Duration of the preloader

        return () => clearTimeout(timer);
    }, [onComplete]);

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
                ease: [0.76, 0, 0.24, 1] // Custom bezier for smooth "cinematic" feel
            }
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="overflow-hidden flex items-center justify-center">
                        <motion.div
                            className="flex text-4xl md:text-7xl font-bold text-white tracking-tighter"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Split text into letters for individual animation */}
                            {"< Gaston Mori >".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className={char === " " ? "w-4 md:w-8" : ""} // Add spacing for space character
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="overflow-hidden mt-4">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                            className="text-white/60 text-xs md:text-sm tracking-[0.5em] uppercase font-light"
                        >
                            Portfolio
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
