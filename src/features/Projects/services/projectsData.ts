import { Github, Link, BookOpen, Cpu, Camera, Sparkles, Scissors, Database, MessageCircle } from 'lucide-react';
import { Project } from '../models';
import { Language } from '../../../context/LanguageContext';

import facebookImage from '../../../assets/image/Captura desde 2025-12-04 14-51-07.png';
import instagramImage from '../../../assets/image/imageInstagramClone.png';
import mundosEImage from '../../../assets/image/MundosE.JPG';
import ecommerceImage from '../../../assets/image/Ecommerce.png';
import barberiaImage from '../../../assets/image/Barberia.png';
import blogImage from '../../../assets/image/Blog.png';
import scaleLinkImage from '../../../assets/image/ScaleLink2.png';
import chatImage from '../../../assets/image/charWrbSokets.png';
import movieImage from '../../../assets/image/apiPelis.png';
import portfolioImage from '../../../assets/image/Captura desde 2025-12-06 14-21-44.png';

export const getProjectsData = (lang: Language = 'es'): Project[] => [
    {
        id: 8,
        title: "MundosE Platform",
        description: lang === 'en'
            ? "Comprehensive platform with decoupled architecture. Modern frontend and robust backend for educational data management."
            : "Plataforma integral con arquitectura separada. Frontend moderno y Backend robusto para gestión de datos.",
        tags: ["React", "Node.js", "Full Stack"],
        links: [
            { label: "Frontend Repo", url: "https://github.com/GastonM12/Proyecto-MundosE", icon: Github },
            { label: "Backend Repo", url: "https://github.com/GastonM12/pin-mundosE", icon: Github }
        ],
        image: mundosEImage,
        badge: { icon: BookOpen, text: lang === 'en' ? "Education Platform" : "Plataforma Educativa", color: "orange" },
        layout: "left",
        gradient: "from-orange-200 via-red-200 to-white dark:from-orange-900 dark:via-red-900 dark:to-slate-900"
    },
    {
        id: 1,
        title: "Facebook Clone",
        description: lang === 'en'
            ? "Full-featured social network clone. Decoupled architecture with React frontend and RESTful backend API."
            : "Réplica completa de la red social. Arquitectura desacoplada con Frontend en React y Backend API RESTful.",
        tags: ["React", "Redux", "Tailwind CSS", "Node.js", "Python"],
        links: [
            { label: "Frontend Repo", url: "https://github.com/GastonM12/RedSocial", icon: Github },
            { label: "Backend API Repo", url: "https://github.com/GastonM12/api-red-social-fb", icon: Github }
        ],
        image: facebookImage,
        badge: { icon: Cpu, text: lang === 'en' ? "Social Network V2" : "Red Social V2", color: "blue" },
        layout: "right",
        gradient: "from-violet-200 via-blue-200 to-white dark:from-violet-900 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 6,
        title: "Instagram Clone",
        description: lang === 'en'
            ? "Functional Instagram clone featuring news feed, user profiles, and interactive like & comment system."
            : "Clon funcional de Instagram. Feed de noticias, perfiles de usuario, y sistema de likes y comentarios.",
        tags: ["Python", "Django", "SQLite", "Bootstrap"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/RedSocialInstagram", icon: Github }
        ],
        image: instagramImage,
        badge: { icon: Camera, text: "Social Media", color: "pink" },
        layout: "left",
        gradient: "from-fuchsia-200 via-violet-200 to-white dark:from-fuchsia-900 dark:via-violet-900 dark:to-slate-900"
    },
    {
        id: 10,
        title: "Digital Portfolio 2025",
        description: lang === 'en'
            ? "Interactive personal portfolio featuring glassmorphism design, fluid animations, and dark mode."
            : "Portafolio personal interactivo con diseño Glassmorphism, animaciones fluidas y modo oscuro.",
        tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/Portafolio", icon: Github }
        ],
        image: portfolioImage,
        badge: { icon: Sparkles, text: lang === 'en' ? "Personal Brand" : "Marca Personal", color: "indigo" },
        layout: "right",
        gradient: "from-indigo-200 via-purple-200 to-white dark:from-indigo-900 dark:via-purple-900 dark:to-slate-900"
    },
    {
        id: 2,
        title: "Ecommerce Platform",
        description: lang === 'en'
            ? "E-commerce platform with real-time product inventory and persistent shopping cart."
            : "Plataforma de comercio electrónico con gestión de productos en tiempo real y carrito de compras persistente.",
        tags: ["React", "Firebase", "Vite", "Context API"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/Ecommerce", icon: Github }
        ],
        image: ecommerceImage,
        badge: { icon: Sparkles, text: "Full Stack", color: "orange" },
        layout: "right",
        gradient: "from-blue-200 via-violet-200 to-white dark:from-blue-900 dark:via-violet-900 dark:to-slate-900"
    },
    {
        id: 7,
        title: "Barber Shop Site",
        description: lang === 'en'
            ? "Modern landing page for barber shop. Responsive layout, style gallery, and interactive contact section."
            : "Landing page moderna para barbería. Diseño responsive, galería de estilos y sección de contacto.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/Barberia", icon: Github }
        ],
        image: barberiaImage,
        badge: { icon: Scissors, text: lang === 'en' ? "Web Design" : "Diseño Web", color: "zinc" },
        layout: "left",
        gradient: "from-slate-200 via-blue-200 to-white dark:from-slate-800 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 3,
        title: "Movie API REST",
        description: lang === 'en'
            ? "RESTful API documented with Swagger. JWT authentication, relational models, and query optimization."
            : "API RESTful documentada con Swagger. Autenticación JWT, modelos relacionales y optimización de consultas.",
        tags: ["Python", "Django REST", "Swagger", "PostgreSQL"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/api-peliculas-con-django-rest", icon: Github }
        ],
        image: movieImage,
        badge: { icon: Database, text: "Backend API", color: "emerald" },
        layout: "right",
        gradient: "from-indigo-200 via-blue-200 to-white dark:from-indigo-900 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 4,
        title: "Real-time Chat",
        description: lang === 'en'
            ? "Instant messaging application with bidirectional real-time communication. Chat rooms and concurrent users."
            : "Aplicación de mensajería instantánea con comunicación bidireccional en tiempo real. Salas de chat y usuarios simultáneos.",
        tags: ["Node.js", "Socket.IO", "Express", "Vanilla JS"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/Chat-", icon: Github }
        ],
        image: chatImage,
        badge: { icon: MessageCircle, text: "Socket.IO", color: "violet" },
        layout: "left",
        gradient: "from-violet-200 via-indigo-200 to-white dark:from-violet-900 dark:via-indigo-900 dark:to-slate-900"
    },
    {
        id: 9,
        title: "ScaleLink",
        description: lang === 'en'
            ? "Modern platform built with React and Vite. Focused on high scalability and performance."
            : "Plataforma moderna desarrollada con React y Vite. Enfocada en la escalabilidad y rendimiento.",
        tags: ["React", "Vite", "Frontend"],
        links: [
            { label: lang === 'en' ? "View Code" : "Ver Código", url: "https://github.com/GastonM12/ScaleLink", icon: Github }
        ],
        image: scaleLinkImage,
        badge: { icon: Link, text: "SaaS Platform", color: "emerald" },
        layout: "left",
        gradient: "from-emerald-200 via-teal-200 to-white dark:from-emerald-900 dark:via-teal-900 dark:to-slate-900"
    },
    {
        id: 5,
        title: "Personal Blog API",
        description: lang === 'en'
            ? "Content management system for personal blog. RESTful API for articles, image management, and database persistence."
            : "Sistema de gestión de contenidos para blog personal. API RESTful para artículos, gestión de imágenes y base de datos.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        links: [
            { label: "Frontend Repo", url: "https://github.com/GastonM12/Blog", icon: Github },
            { label: "Backend API Repo", url: "https://github.com/GastonM12/api-blog", icon: Github }
        ],
        image: blogImage,
        badge: { icon: BookOpen, text: "Full Stack MERN", color: "cyan" },
        layout: "right",
        gradient: "from-blue-200 via-cyan-200 to-white dark:from-blue-900 dark:via-cyan-900 dark:to-slate-900"
    }
];
