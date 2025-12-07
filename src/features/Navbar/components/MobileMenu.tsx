import React from 'react';
import { NavLink } from '../models';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    links: NavLink[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, links }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-20 left-6 right-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl pointer-events-auto md:hidden flex flex-col gap-4">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};
