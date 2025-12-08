import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useChatBot } from './hooks/useChatBot';
import { ChatHeader } from './components/ChatHeader';
import { MessageList } from './components/MessageList';
import { SuggestedChips } from './components/SuggestedChips';
import { ChatInput } from './components/ChatInput';
import { ChatToggle } from './components/ChatToggle';
import styles from './ChatBot.module.css';

export const ChatBot: React.FC = () => {
    const {
        isOpen,
        setIsOpen,
        messages,
        input,
        setInput,
        isLoading,
        messagesEndRef,
        handleSend,
        handleKeyPress,
        handleChipClick
    } = useChatBot();

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-slate-950/90 border border-cyan-500/50 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] z-50 flex flex-col overflow-hidden backdrop-blur-xl ${styles.chatContainer}`}
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                        <ChatHeader onClose={() => setIsOpen(false)} />

                        <MessageList
                            messages={messages}
                            isLoading={isLoading}
                            messagesEndRef={messagesEndRef}
                        />

                        {messages.length < 3 && (
                            <SuggestedChips onChipClick={handleChipClick} />
                        )}

                        <ChatInput
                            input={input}
                            setInput={setInput}
                            handleSend={handleSend}
                            isLoading={isLoading}
                        />
                    </m.div>
                )}
            </AnimatePresence>

            <ChatToggle isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
        </>
    );
};
