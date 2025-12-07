import React from 'react';

interface SuggestedChipsProps {
    onChipClick: (chip: string) => void;
}

export const SuggestedChips: React.FC<SuggestedChipsProps> = ({ onChipClick }) => {
    const chips = ['Experiencia en Python', '¿Proyectos recientes?', 'Contacto'];

    return (
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
            {chips.map(chip => (
                <button
                    key={chip}
                    onClick={() => onChipClick(chip)}
                    className="flex-shrink-0 px-3 py-1 bg-slate-200 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-xs text-slate-700 dark:text-slate-300 rounded-full transition-colors border border-transparent hover:border-indigo-200 dark:hover:border-indigo-500/30"
                >
                    {chip}
                </button>
            ))}
        </div>
    );
};
