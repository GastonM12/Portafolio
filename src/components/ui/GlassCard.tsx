import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    hoverEffect = false
}) => {
    return (
        <div
            className={`
        relative overflow-hidden
        bg-white/60 dark:bg-white/[0.03]
        backdrop-blur-lg 
        border border-slate-200 dark:border-white/[0.1]
        rounded-3xl 
        shadow-xl dark:shadow-2xl
        transition-all duration-300
        will-change-transform
        ${hoverEffect ? 'hover:bg-white/80 dark:hover:bg-white/[0.06] hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {/* Noise texture overlay optional */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};
