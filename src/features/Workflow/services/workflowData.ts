import { Search, Layout, Code2, Rocket } from 'lucide-react';
import { WorkflowStep } from '../models';

const steps: WorkflowStep[] = [
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

export const getWorkflowSteps = () => steps;
