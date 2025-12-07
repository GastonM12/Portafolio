import React from 'react';
import { SocialLink } from '../models';

interface SocialCardProps {
    link: SocialLink;
}

export const SocialCard: React.FC<SocialCardProps> = ({ link }) => {
    return (
        <a
            href={link.url}
            target={link.url.startsWith('http') ? "_blank" : undefined}
            rel={link.url.startsWith('http') ? "noreferrer" : undefined}
            className="group flex flex-col items-center justify-center w-36 h-36 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-none"
        >
            <link.icon size={32} className={`text-slate-600 dark:text-slate-400 ${link.hoverColorClass} transition-colors mb-2`} />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{link.label}</span>
        </a>
    );
};
