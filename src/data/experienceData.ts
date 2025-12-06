import { Server, Layout, Globe, Code2, Award, Terminal, Database, Cpu } from 'lucide-react';

export const experienceData = [
    {
        id: 1,
        company: "CyberArg",
        role: "Backend Developer (Part-time)",
        date: "Ago 2024 – Actualidad",
        description: "",
        icon: Server,
        color: "emerald",
        items: [
            "Desarrollo backend robusto con <strong>Laravel / PHP</strong>.",
            "Mantenimiento y refactorización de interfaces legacy con <strong>jQuery</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong> y <strong>CSS3</strong>.",
            "Construcción y consumo optimizado de <strong>APIs RESTful</strong> e integración mediante <strong>AJAX</strong>.",
            "Gestión eficiente de bases de datos <strong>MySQL</strong> y <strong>PostgreSQL</strong>.",
            "Implementación de <strong>Docker</strong> para entornos de desarrollo y despliegues consistentes."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: optimize db queries"',
            highlight: ["git", "feat: optimize db queries"],
            colors: ["text-purple-600 dark:text-purple-400", "text-green-600 dark:text-green-400"]
        }
    },
    {
        id: 2,
        company: "Global Crew",
        role: "Frontend Developer (Part-time)",
        date: "Ago 2024 – Actualidad",
        description: "",
        icon: Layout,
        color: "indigo",
        items: [
            "Desarrollo de interfaces dinámicas y responsivas utilizando <strong>React.js</strong> y <strong>Next.js</strong>.",
            "Gestión de estado global compleja con <strong>Redux</strong> y Context API.",
            "Optimización de Web Vitals y carga eficiente de recursos (Lazy Loading).",
            "Implementación de pruebas unitarias y de integración para asegurar la calidad del código.",
            "Mejora continua de la accesibilidad (a11y) y SEO técnico de la aplicación.",
            "Colaboración en entornos ágiles (<strong>Scrum</strong>) y control de versiones con Git/Bitbucket."
        ],
        tags: [],
        cmd: {
            text: 'git commit -m "feat: enhance user experience"',
            highlight: ["git", "feat: enhance user experience"],
            colors: ["text-indigo-600 dark:text-indigo-400", "text-blue-600 dark:text-blue-400"]
        }
    }
];

export const educationData = [
    {
        title: "Master en Desarrollo Fullstack",
        institution: "ConquerBlocks",
        period: "2024 - Actualidad",
        color: "yellow"
    },
    {
        title: "Técnico Superior en Programación",
        institution: "TECLAB",
        period: "2024 - Actualidad",
        color: "slate"
    },
    {
        title: "Secundario Completo",
        institution: "2009 - Diciembre de 2014", // Institution/Period mixed in original
        period: "",
        color: "slate"
    }
];

export const certificationsData = [
    { name: "Desarrollo Full Stack", inst: "Mundos E", icon: Globe },
    { name: "JavaScript", inst: "CoderHouse", icon: Code2 },
    { name: "React Js", inst: "CoderHouse", icon: Code2 },
    { name: "Master en React", inst: "Udemy", icon: Award },
    { name: "Python / Django", inst: "ConquerBlocks", icon: Terminal },
    { name: "SQL & MySQL", inst: "ConquerBlocks", icon: Database },
    { name: "N8N Automation", inst: "Self-taught", icon: Cpu }
];

export const techStackData = {
    backend: [
        { name: 'Python / Django', level: 4 },
        { name: 'MySQL', level: 4.5 },
        { name: 'PHP / Laravel', level: 4 },
    ],
    frontend: [
        { name: 'React / Next.js', level: 5 },
        { name: 'Bootstrap', level: 4.5 },
        { name: 'JavaScript (ES6+)', level: 4 },
    ],
    tools: [
        { name: 'Docker / Git', level: 4 },
        { name: 'AWS Services', level: 3 },
        { name: 'N8N Automation', level: 4 },
    ]
};
