import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    // Prevent scrolling on the body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Scrollable Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md overflow-y-auto"
                    >
                        {/* Centering Wrapper */}
                        <div className="min-h-screen px-4 py-10 flex items-center justify-center">
                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col border border-slate-200 dark:border-white/10 relative"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10 sticky top-0 bg-white dark:bg-slate-900 z-10 rounded-t-2xl">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {title || 'Detalles'}
                                    </h2>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors text-slate-500 dark:text-slate-400"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-6">
                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};
