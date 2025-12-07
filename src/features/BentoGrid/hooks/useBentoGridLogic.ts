import { useState, useRef, useEffect } from 'react';
import { getTechStack } from '../services/bentoData';

export const useBentoGridLogic = () => {
    const [isStackOpen, setIsStackOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const techStack = getTechStack();

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsStackOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsStackOpen(false);
        }, 150);
    };

    // Close on Scroll or Escape Key
    useEffect(() => {
        const handleScroll = () => {
            if (isStackOpen) setIsStackOpen(false);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isStackOpen) setIsStackOpen(false);
        };

        if (isStackOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isStackOpen]);

    return {
        isStackOpen,
        setIsStackOpen,
        handleMouseEnter,
        handleMouseLeave,
        techStack
    };
};
