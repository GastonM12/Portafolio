import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
    theme: 'dark' | 'light';
    onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-yellow-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};
