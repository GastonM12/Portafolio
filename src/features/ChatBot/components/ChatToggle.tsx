import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareCode } from 'lucide-react';

interface ChatToggleProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

export const ChatToggle: React.FC<ChatToggleProps> = ({ isOpen, toggleOpen }) => {
    return (
        <motion.button
            onClick={toggleOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label={isOpen ? "Close chat" : "Open chat"}
        >
            <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Orb Effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-500/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-pulse"></div>

                {/* Inner Core */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-cyan-500/30">
                    <MessageSquareCode size={24} className="text-cyan-400" />
                </div>

                {/* Orbiting Ring */}
                <div className="absolute inset-0 rounded-full border-t border-cyan-500/80 animate-spin duration-3000"></div>
            </div>
        </motion.button>
    );
};
