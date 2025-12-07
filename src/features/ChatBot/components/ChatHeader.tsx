import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface ChatHeaderProps {
    onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
    return (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                    <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Gaston AI Assistant</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Online • Gemini 3 Pro</span>
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
            >
                <X size={20} className="text-slate-500" />
            </button>
        </div>
    );
};
