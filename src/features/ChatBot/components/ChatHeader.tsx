import React from 'react';
import { Sparkles, X, MessageSquareCode } from 'lucide-react';

interface ChatHeaderProps {
    onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
    return (
        <div className="p-4 border-b border-cyan-500/20 bg-slate-900/50 flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
            <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <MessageSquareCode size={20} className="text-cyan-400" />
                </div>
                <div>
                    <h3 className="font-bold text-white tracking-wide font-mono text-sm">
                        GASTON AI
                    </h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        <span className="text-xs text-cyan-300/70 font-mono tracking-wider">SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-cyan-400/70 hover:text-cyan-400 relative z-10"
            >
                <X size={20} />
            </button>
        </div>
    );
};
