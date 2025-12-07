import React from 'react';
import { NavLink } from '../models';

interface DesktopMenuProps {
    links: NavLink[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ links }) => {
    return (
        <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};
