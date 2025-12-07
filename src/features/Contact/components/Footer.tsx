import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className="container mx-auto pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-slate-500 dark:text-slate-500 text-sm">
            <p>&copy; 2025 Gaston Mori. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                <span>Full Stack Developer</span>
                <span>•</span>
                <span>Open to Work</span>
            </div>
        </div>
    );
};
