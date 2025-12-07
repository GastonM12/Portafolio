import React from 'react';
import { useWorkflowLogic } from './hooks/useWorkflowLogic';
import { WorkflowCard } from './components/WorkflowCard';
import { SectionHeader } from './components/SectionHeader';
import styles from './Workflow.module.css';

export const Workflow: React.FC = () => {
    const { steps } = useWorkflowLogic();

    return (
        <section className={`py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden ${styles.workflowContainer}`}>
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent hidden lg:block"></div>

            <div className="container mx-auto relative z-10">
                <SectionHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <WorkflowCard
                            key={step.id}
                            step={step}
                            index={index}
                            totalSteps={steps.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
