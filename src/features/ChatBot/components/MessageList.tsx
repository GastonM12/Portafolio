import React from 'react';
import { Loader2 } from 'lucide-react';
import { Message } from '../models';

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
    messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, isLoading, messagesEndRef }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100/50 dark:bg-black/20">
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`
                            max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                            ${msg.role === 'user'
                                ? 'bg-indigo-600 text-white rounded-br-none'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-white/5'}
                        `}
                    >
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-white/5 flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-indigo-500" />
                        <span className="text-xs text-slate-500">Escribiendo...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};
