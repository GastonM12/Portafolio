import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
    input: string;
    setInput: (value: string) => void;
    handleSend: () => void;
    handleKeyPress: (e: React.KeyboardEvent) => void;
    isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend, handleKeyPress, isLoading }) => {
    return (
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Pregunta sobre mi experiencia..."
                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder-slate-400 outline-none transition-all"
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-500/20"
                    aria-label="Send message"
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};
