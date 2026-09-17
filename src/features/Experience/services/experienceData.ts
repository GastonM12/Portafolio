import { Server, Layout, Globe, Code2, Award, Terminal, Database, Cpu, Layers } from 'lucide-react';
import { ExperienceItem, EducationItem, CertificationItem, TechStackData } from '../models';
import { Language } from '../../../context/LanguageContext';

const experienceDataEs: ExperienceItem[] = [
    {
        id: 1,
        company: "GIAMA",
        role: "Desarrollador Full Stack",
        date: "Junio 2026 – Actualidad | Santa Fe, Argentina",
        description: "",
        icon: Layers,
        color: "emerald",
        items: [
            "Desarrollo, mantenimiento y optimización de módulos integrales para gestión de flotas vehiculares con <strong>React</strong> y <strong>Node.js</strong> (ciclo completo hasta remitos automatizados).",
            "Implementación de pipelines de procesamiento y carga masiva de datos (+10.000 registros semanales) en Excel, automatizando conciliación de telepases e infracciones.",
            "Desarrollo de facturación electrónica y cuentas corrientes con integración fluida al ERP contable <strong>PA6</strong>.",
            "Gestión de infraestructura cloud en <strong>AWS</strong>, asegurando un 99.9% de uptime para servicios y aplicaciones productivas.",
            "Liderazgo en análisis de requerimientos técnicos y soporte de incidencias complejas en producción a clientes estratégicos."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: automated fleet management & PA6 ERP integration"',
            highlight: ["git", "feat: automated fleet management & PA6 ERP integration"],
            colors: ["text-purple-600 dark:text-purple-400", "text-emerald-600 dark:text-emerald-400"]
        }
    },
    {
        id: 2,
        company: "Cyberarg",
        role: "Desarrollador Backend",
        date: "Agosto 2025 – Actualidad | Remoto",
        description: "",
        icon: Server,
        color: "indigo",
        items: [
            "Diseño de arquitecturas backend escalables en <strong>PHP</strong> y <strong>Laravel</strong> para APIs RESTful de alto rendimiento.",
            "Modelado y optimización de bases de datos en <strong>MySQL</strong>, reduciendo tiempos de respuesta un 40% en operaciones de alto tráfico.",
            "Estandarización de flujos de trabajo con <strong>Docker</strong> y Docker Compose para paridad total local/producción.",
            "Automatización de procesos fiscales integrando Web Services de <strong>AFIP/ARCA</strong> (validación en tiempo real y cálculo de retenciones: Ganancias, ARBA, AGIP).",
            "Desarrollo de sistemas de control de inventario con trazabilidad del 100% de movimientos logísticos entre depósitos."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: AFIP/ARCA web services integration & db tuning"',
            highlight: ["git", "feat: AFIP/ARCA web services integration & db tuning"],
            colors: ["text-indigo-600 dark:text-indigo-400", "text-blue-600 dark:text-blue-400"]
        }
    },
    {
        id: 3,
        company: "Ray",
        role: "Desarrollador Full Stack (Pasantía)",
        date: "Enero 2026 – Abril 2026 | Remoto",
        description: "",
        icon: Cpu,
        color: "emerald",
        items: [
            "Construcción de interfaces modulares y altamente responsivas con <strong>Next.js</strong> y <strong>React.js</strong>, enfocadas en conversión y retención.",
            "Implementación de Server-Side Rendering (<strong>SSR</strong>), logrando optimizar métricas Core Web Vitals a puntajes > 90 en Lighthouse.",
            "Integración de soluciones de IA con agentes conversacionales y chatbots dinámicos para resolver el 80% de consultas iniciales.",
            "Aplicación de mejores prácticas de SEO técnico, aumentando la visibilidad orgánica de las plataformas."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: optimize Core Web Vitals > 90 & AI chatbot"',
            highlight: ["git", "feat: optimize Core Web Vitals > 90 & AI chatbot"],
            colors: ["text-purple-600 dark:text-purple-400", "text-emerald-600 dark:text-emerald-400"]
        }
    },
    {
        id: 4,
        company: "Global Crew",
        role: "Desarrollador Frontend",
        date: "Agosto 2025 – Diciembre 2025 | Remoto",
        description: "",
        icon: Layout,
        color: "indigo",
        items: [
            "Desarrollo de componentes reutilizables en <strong>React.js</strong>, priorizando mantenibilidad del código y experiencia de usuario.",
            "Gestión de estados complejos de la aplicación utilizando <strong>Redux</strong> y Context API para consistencia de datos.",
            "Colaboración en entornos ágiles (<strong>Scrum</strong>) con Git y GitLab para control de versiones y despliegue continuo."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: reusable UI components & Redux state"',
            highlight: ["git", "feat: reusable UI components & Redux state"],
            colors: ["text-indigo-600 dark:text-indigo-400", "text-blue-600 dark:text-blue-400"]
        }
    }
];

const experienceDataEn: ExperienceItem[] = [
    {
        id: 1,
        company: "GIAMA",
        role: "Full Stack Developer",
        date: "June 2026 – Present | Santa Fe, Argentina",
        description: "",
        icon: Layers,
        color: "emerald",
        items: [
            "Developed, maintained, and optimized end-to-end fleet management modules with <strong>React</strong> and <strong>Node.js</strong> (full lifecycle up to automated dispatch manifests).",
            "Implemented high-throughput bulk data processing pipelines (+10,000 weekly records) in Excel, automating tollway and traffic violation reconciliation.",
            "Engineered electronic invoicing and accounts receivable integrated seamlessly into the <strong>PA6</strong> accounting ERP.",
            "Managed cloud infrastructure on <strong>AWS</strong>, ensuring 99.9% uptime for critical production workloads.",
            "Led technical requirements analysis and handled production issue resolution for strategic clients."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: automated fleet management & PA6 ERP integration"',
            highlight: ["git", "feat: automated fleet management & PA6 ERP integration"],
            colors: ["text-purple-600 dark:text-purple-400", "text-emerald-600 dark:text-emerald-400"]
        }
    },
    {
        id: 2,
        company: "Cyberarg",
        role: "Backend Developer",
        date: "August 2025 – Present | Remote",
        description: "",
        icon: Server,
        color: "indigo",
        items: [
            "Designed scalable backend architectures in <strong>PHP</strong> and <strong>Laravel</strong> for high-performance RESTful APIs.",
            "Modeled and optimized <strong>MySQL</strong> databases, reducing response times by 40% under high concurrency.",
            "Standardized developer workflows with <strong>Docker</strong> and Docker Compose for 100% dev/prod parity.",
            "Automated fiscal tax workflows with <strong>AFIP/ARCA</strong> Web Services (real-time validation and automated withholding calculations).",
            "Engineered inventory and warehouse tracking systems guaranteeing 100% logistic movement traceability."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: AFIP/ARCA web services integration & db tuning"',
            highlight: ["git", "feat: AFIP/ARCA web services integration & db tuning"],
            colors: ["text-indigo-600 dark:text-indigo-400", "text-blue-600 dark:text-blue-400"]
        }
    },
    {
        id: 3,
        company: "Ray",
        role: "Full Stack Developer (Intern)",
        date: "January 2026 – April 2026 | Remote",
        description: "",
        icon: Cpu,
        color: "emerald",
        items: [
            "Built modular, responsive user interfaces with <strong>Next.js</strong> and <strong>React.js</strong> focused on user conversion and retention.",
            "Implemented Server-Side Rendering (<strong>SSR</strong>), achieving Lighthouse Core Web Vitals scores above 90.",
            "Integrated conversational AI agents and dynamic chatbots, automating resolution for 80% of incoming customer requests.",
            "Executed technical SEO best practices, driving organic search visibility for deployed platforms."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: optimize Core Web Vitals > 90 & AI chatbot"',
            highlight: ["git", "feat: optimize Core Web Vitals > 90 & AI chatbot"],
            colors: ["text-purple-600 dark:text-purple-400", "text-emerald-600 dark:text-emerald-400"]
        }
    },
    {
        id: 4,
        company: "Global Crew",
        role: "Frontend Developer",
        date: "August 2025 – December 2025 | Remote",
        description: "",
        icon: Layout,
        color: "indigo",
        items: [
            "Developed reusable UI components in <strong>React.js</strong>, emphasizing clean maintainability and smooth user experience.",
            "Architected complex application state using <strong>Redux</strong> and Context API for rigorous data consistency.",
            "Collaborated within agile <strong>Scrum</strong> teams using Git and GitLab for continuous integration and delivery."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: reusable UI components & Redux state"',
            highlight: ["git", "feat: reusable UI components & Redux state"],
            colors: ["text-indigo-600 dark:text-indigo-400", "text-blue-600 dark:text-blue-400"]
        }
    }
];

const educationDataEs: EducationItem[] = [
    {
        title: "Técnico Superior en Programación",
        institution: "TECLAB",
        period: "2024 – 2026 | Finalizado",
        color: "emerald"
    },
    {
        title: "Máster en Desarrollo Full Stack",
        institution: "ConquerBlocks",
        period: "2024 - Actualidad",
        color: "yellow"
    },
    {
        title: "Secundario Completo",
        institution: "2009 - Diciembre de 2014",
        period: "",
        color: "slate"
    }
];

const educationDataEn: EducationItem[] = [
    {
        title: "Higher Technical Degree in Programming",
        institution: "TECLAB",
        period: "2024 – 2026 | Completed",
        color: "emerald"
    },
    {
        title: "Master in Full Stack Development",
        institution: "ConquerBlocks",
        period: "2024 - Present",
        color: "yellow"
    },
    {
        title: "High School Diploma",
        institution: "2009 - December 2014",
        period: "",
        color: "slate"
    }
];

const certificationsData: CertificationItem[] = [
    { name: "Desarrollo Full Stack", inst: "Mundos E", icon: Globe },
    { name: "JavaScript", inst: "CoderHouse", icon: Code2 },
    { name: "React Js", inst: "CoderHouse", icon: Code2 },
    { name: "Master en React", inst: "Udemy", icon: Award },
    { name: "Python / Django", inst: "ConquerBlocks", icon: Terminal },
    { name: "SQL & MySQL", inst: "ConquerBlocks", icon: Database },
    { name: "N8N Automation", inst: "Self-taught", icon: Cpu },
    { name: "Soft Skills", inst: "ConquerBlocks", icon: Award },
    { name: "CSS Avanzado", inst: "ConquerBlocks", icon: Layout },
    { name: "Python", inst: "ConquerBlocks", icon: Terminal },
    { name: "Python Avanzado", inst: "ConquerBlocks", icon: Terminal },
    { name: "React Avanzado", inst: "ConquerBlocks", icon: Code2 },
    { name: "WordPress", inst: "ConquerBlocks", icon: Globe },
    { name: "TypeScript", inst: "ConquerBlocks", icon: Code2 },
    { name: "Streamlit", inst: "ConquerBlocks", icon: Layout }
];

const techStackData: TechStackData = {
    backend: [
        { name: 'Node.js / Express', level: 4.5 },
        { name: 'PHP / Laravel', level: 4.5 },
        { name: 'Python / Django', level: 4 },
        { name: 'PostgreSQL / MySQL', level: 4.5 }
    ],
    frontend: [
        { name: 'React / Next.js', level: 5 },
        { name: 'TypeScript', level: 4.5 },
        { name: 'Redux / Context API', level: 4.5 },
        { name: 'Tailwind CSS', level: 5 }
    ],
    tools: [
        { name: 'Docker / Compose', level: 4.5 },
        { name: 'AWS (EC2, S3)', level: 4 },
        { name: 'AFIP / ARCA & ERP PA6', level: 4.5 },
        { name: 'Git / GitLab / GitHub', level: 4.5 }
    ]
};

export const getExperienceData = (lang: Language = 'es') => (lang === 'en' ? experienceDataEn : experienceDataEs);
export const getEducationData = (lang: Language = 'es') => (lang === 'en' ? educationDataEn : educationDataEs);
export const getCertificationsData = () => certificationsData;
export const getTechStackData = () => techStackData;
