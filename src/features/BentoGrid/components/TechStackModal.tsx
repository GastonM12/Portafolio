import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { TechCategory } from '../models';

interface TechStackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    techStack: TechCategory[];
}

export const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose, onMouseEnter, onMouseLeave, techStack }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {/* Backdrop with Blur */}
                    <div
                        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
                    ></div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.98, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 no-scrollbar"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors backdrop-blur-md border border-white/20"
                        >
                            <X size={24} className="text-white" />
                        </button>

                        <div className="mb-12 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                Arsenal <span className="text-indigo-400">Tecnológico</span>
                            </h2>
                            <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
                                Un ecosistema de herramientas seleccionadas para construir soluciones escalables, robustas y de alto rendimiento.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {techStack.map((category, idx) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="rounded-2xl p-6 transition-colors group"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-2 rounded-lg bg-${category.color}-500/30 text-white backdrop-blur-sm shadow-lg`}>
                                            <category.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white drop-shadow-md">{category.category}</h3>
                                    </div>

                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name} className="flex flex-col items-center gap-2 group/skill">
                                                <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 dark:border-white/20 group-hover/skill:scale-110 group-hover/skill:border-indigo-400/50 group-hover/skill:bg-white/30 transition-all duration-300">
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${skill.slug}/white`}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain opacity-90 group-hover/skill:opacity-100 transition-opacity"
                                                        onError={(e) => {
                                                            // Fallback if icon fails
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-white/90 group-hover/skill:text-indigo-300 transition-colors text-center drop-shadow-md">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
