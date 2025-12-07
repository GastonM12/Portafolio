import { Layout, Terminal, Database, Cloud } from 'lucide-react';
import { TechCategory } from '../models';

export const techStack: TechCategory[] = [
    {
        category: "Frontend Ecosystem",
        icon: Layout,
        color: "blue",
        skills: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Redux", slug: "redux" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css3" },
        ]
    },
    {
        category: "Backend & API",
        icon: Terminal,
        color: "emerald",
        skills: [
            { name: "Python", slug: "python" },
            { name: "Django", slug: "django" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PHP", slug: "php" },
            { name: "Laravel", slug: "laravel" },
            { name: "Express", slug: "express" },
        ]
    },
    {
        category: "Database & Cloud",
        icon: Database,
        color: "purple",
        skills: [
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "MySQL", slug: "mysql" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "Firebase", slug: "firebase" },
            { name: "AWS", slug: "amazonwebservices" },
            { name: "Docker", slug: "docker" },
        ]
    },
    {
        category: "Tools & DevOps",
        icon: Cloud,
        color: "orange",
        skills: [
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github" },
            { name: "N8N", slug: "n8n" },
            { name: "Linux", slug: "linux" },
            { name: "Postman", slug: "postman" },
            { name: "Vercel", slug: "vercel" },
        ]
    }
];

export const getTechStack = () => techStack;
