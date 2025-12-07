import React from 'react';

export const SectionHeader: React.FC = () => {
    return (
        <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] px-8">
            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Ingeniería <br /><span className="text-slate-500 dark:text-slate-600">en Acción</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
                Desliza para explorar <br /> mis proyectos destacados.
            </p>
        </div>
    );
};
