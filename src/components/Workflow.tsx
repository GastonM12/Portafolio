import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Code2, Rocket, ArrowRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const steps = [
    {
        id: 1,
        title: "Descubrimiento",
        description: "Análisis profundo de requerimientos y definición estratégica del producto.",
        icon: Search,
        color: "blue"
    },
    {
        id: 2,
        title: "Arquitectura",
        description: "Diseño de sistemas escalables, selección de stack y modelado de datos.",
        icon: Layout,
        color: "purple"
    },
    {
        id: 3,
        title: "Desarrollo",
        description: "Implementación de código limpio, modular y testable con las mejores prácticas.",
        icon: Code2,
        color: "indigo"
    },
    {
        id: 4,
        title: "Despliegue",
        description: "Configuración de CI/CD, optimización de rendimiento y monitoreo en producción.",
        icon: Rocket,
        color: "emerald"
    }
];

export const Workflow: React.FC = () => {
    return (
        <section className="py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent hidden lg:block"></div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Workflow <span className="text-indigo-500">Profesional</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Mi metodología para transformar ideas complejas en productos digitales robustos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative"
                        >
                            {/* Connecting Arrow (Desktop) */}
                            {index < steps.length - 1 && (
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
