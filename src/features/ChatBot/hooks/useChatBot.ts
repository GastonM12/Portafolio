import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../models';
import { generateAIResponse } from '../services/chatService';

export const useChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', text: '¡Hola! Soy el asistente virtual de Gaston. ¿Tienes alguna pregunta sobre su experiencia o stack tecnológico?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input;
        const userMessage: Message = { id: Date.now().toString(), role: 'user', text: userText };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const aiText = await generateAIResponse(messages, userText);
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', text: aiText }]);
        } catch (error) {
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', text: "Hubo un error al conectar con la IA. Por favor intenta más tarde." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChipClick = (chip: string) => {
        setInput(chip);
    };

    return {
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
    };
};
