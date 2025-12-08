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
                        className={`max-w-[85%] p-3 rounded-lg text-sm relative overflow-hidden ${msg.role === 'user'
                                ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 rounded-tr-none'
                                : 'bg-slate-800/80 border border-slate-700 text-slate-300 rounded-tl-none font-mono'
                            }`}
                    >
                        {/* Tech decoration for AI messages */}
                        {msg.role === 'model' && (
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50"></div>
                        )}

                        <p className="leading-relaxed whitespace-pre-wrap relative z-10">
                            {msg.text}
                        </p>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg rounded-tl-none flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};
