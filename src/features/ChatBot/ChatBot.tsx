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
                        className={`fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl ${styles.chatContainer}`}
                    >
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
                            handleKeyPress={handleKeyPress}
                            isLoading={isLoading}
                        />
                    </m.div>
                )}
            </AnimatePresence>

            <ChatToggle isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
        </>
    );
};
