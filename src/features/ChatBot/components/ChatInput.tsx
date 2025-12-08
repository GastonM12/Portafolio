import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
    input: string;
    setInput: (value: string) => void;
    handleSend: () => void;
    isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend, isLoading }) => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            handleSend();
        }
    };

    return (
        <form onSubmit={onSubmit} className="p-4 bg-slate-900/80 border-t border-cyan-500/20 relative">
            <div className="relative flex items-center gap-2">
                <span className="text-cyan-500 font-mono animate-pulse">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter command..."
                    className="flex-1 bg-transparent text-cyan-100 placeholder-cyan-700/50 focus:outline-none font-mono text-sm py-2"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2 text-cyan-500 hover:text-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send size={18} />
                </button>
            </div>
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-50"></div>
        </form>
    );
};
