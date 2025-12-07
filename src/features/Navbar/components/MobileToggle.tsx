import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileToggleProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const MobileToggle: React.FC<MobileToggleProps> = ({ isOpen, setIsOpen }) => {
    return (
        <button
            className="md:hidden text-slate-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};
