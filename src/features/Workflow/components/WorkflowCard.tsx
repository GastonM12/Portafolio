import React from 'react';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../../../components/ui/GlassCard';
import { WorkflowStep } from '../models';

interface WorkflowCardProps {
    step: WorkflowStep;
    index: number;
    totalSteps: number;
}

export const WorkflowCard: React.FC<WorkflowCardProps> = ({ step, index, totalSteps }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative"
        >
            {/* Connecting Arrow (Desktop) */}
            {index < totalSteps - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0 text-slate-300 dark:text-slate-700">
                    <ArrowRight size={24} />
                </div>
            )}

            <GlassCard className="h-full p-6 flex flex-col items-center text-center group hover:border-indigo-500/30 transition-colors" hoverEffect>
                <div className={`
                    w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                    bg-${step.color}-100 dark:bg-${step.color}-500/10
                    text-${step.color}-600 dark:text-${step.color}-400
                    group-hover:scale-110 transition-transform duration-300
                `}>
                    <step.icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-300 dark:text-slate-700">
                    0{step.id}
                </div>
            </GlassCard>
        </m.div>
    );
};
