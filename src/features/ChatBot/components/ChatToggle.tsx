import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatToggleProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

export const ChatToggle: React.FC<ChatToggleProps> = ({ isOpen, toggleOpen }) => {
    return (
        <motion.button
            onClick={toggleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl shadow-indigo-600/30 z-50 flex items-center justify-center group"
            aria-label={isOpen ? "Close chat" : "Open chat"}
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                        <X size={24} />
                    </motion.div>
                ) : (
                    <motion.div key="chat" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                        <MessageCircle size={24} className="group-hover:animate-pulse" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};
