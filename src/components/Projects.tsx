import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Cpu, Server, Database, MessageCircle, BookOpen, ChevronDown, ChevronUp, ShoppingCart, Scissors, Camera, Link } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import facebookImage from '../assets/image/Captura desde 2025-12-04 14-51-07.png';
import instagramImage from '../assets/image/imageInstagramClone.png';
import mundosEImage from '../assets/image/MundosE.JPG';
import ecommerceImage from '../assets/image/Ecommerce.png';
import barberiaImage from '../assets/image/Barberia.png';
import blogImage from '../assets/image/Blog.png';
import scaleLinkImage from '../assets/image/ScaleLink2.png';
import chatImage from '../assets/image/charWrbSokets.png';
import movieImage from '../assets/image/apiPelis.png';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    links: { label: string; url: string; icon: React.ElementType }[];
    image: string;
    badge: { icon: React.ElementType; text: string; color: string };
    layout: 'left' | 'right'; // Kept for compatibility but not used in horizontal layout
    gradient: string;
}

const projectsData: Project[] = [
    {
        id: 9,
        title: "ScaleLink",
        description: "Plataforma moderna desarrollada con React y Vite. Enfocada en la escalabilidad y rendimiento.",
        tags: ["React", "Vite", "Frontend"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/ScaleLink", icon: Github }
        ],
        image: scaleLinkImage,
        badge: { icon: Link, text: "SaaS Platform", color: "emerald" },
        layout: "left",
        gradient: "from-emerald-200 via-teal-200 to-white dark:from-emerald-900 dark:via-teal-900 dark:to-slate-900"
    },
    {
        id: 8,
        title: "MundosE Platform",
        description: "Plataforma integral con arquitectura separada. Frontend moderno y Backend robusto para gestión de datos.",
        tags: ["React", "Node.js", "Full Stack"],
        links: [
            { label: "Frontend Repo", url: "https://github.com/GastonM12/Proyecto-MundosE", icon: Github },
            { label: "Backend Repo", url: "https://github.com/GastonM12/pin-mundosE", icon: Github }
        ],
        image: mundosEImage,
        badge: { icon: BookOpen, text: "Education Platform", color: "orange" },
        layout: "left",
        gradient: "from-orange-200 via-red-200 to-white dark:from-orange-900 dark:via-red-900 dark:to-slate-900"
    },
    {
        id: 1,
        title: "Facebook Clone",
        description: "Réplica completa de la red social. Arquitectura desacoplada con Frontend en React y Backend API RESTful.",
        tags: ["React", "Redux", "Tailwind CSS", "Node.js", "Python"],
        links: [
            { label: "Frontend Repo", url: "https://github.com/GastonM12/RedSocial", icon: Github },
            { label: "Backend API Repo", url: "https://github.com/GastonM12/api-red-social-fb", icon: Github }
        ],
        image: facebookImage,
        badge: { icon: Cpu, text: "Social Network V2", color: "blue" },
        layout: "right",
        gradient: "from-violet-200 via-blue-200 to-white dark:from-violet-900 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 6,
        title: "Instagram Clone",
        description: "Clon funcional de Instagram. Feed de noticias, perfiles de usuario, y sistema de likes y comentarios.",
        tags: ["Python", "Django", "SQLite", "Bootstrap"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/RedSocialInstagram", icon: Github }
        ],
        image: instagramImage,
        badge: { icon: Camera, text: "Social Media", color: "pink" },
        layout: "left",
        gradient: "from-fuchsia-200 via-violet-200 to-white dark:from-fuchsia-900 dark:via-violet-900 dark:to-slate-900"
    },
    {
        id: 2,
        title: "Ecommerce Platform",
        description: "Plataforma de comercio electrónico con gestión de productos en tiempo real y carrito de compras persistente.",
        tags: ["React", "Firebase", "Vite", "Context API"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/Ecommerce", icon: Github }
        ],
        image: ecommerceImage,
        badge: { icon: Sparkles, text: "Full Stack", color: "orange" },
        layout: "right",
        gradient: "from-blue-200 via-violet-200 to-white dark:from-blue-900 dark:via-violet-900 dark:to-slate-900"
    },
    {
        id: 7,
        title: "Barber Shop Site",
        description: "Landing page moderna para barbería. Diseño responsive, galería de estilos y sección de contacto.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/Barberia", icon: Github }
        ],
        image: barberiaImage,
        badge: { icon: Scissors, text: "Web Design", color: "zinc" },
        layout: "left",
        gradient: "from-slate-200 via-blue-200 to-white dark:from-slate-800 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 3,
        title: "Movie API REST",
        description: "API RESTful documentada con Swagger. Autenticación JWT, modelos relacionales y optimización de consultas.",
        tags: ["Python", "Django REST", "Swagger", "PostgreSQL"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/api-peliculas-con-django-rest", icon: Github }
        ],
        image: movieImage,
        badge: { icon: Database, text: "Backend API", color: "emerald" },
        layout: "right",
        gradient: "from-indigo-200 via-blue-200 to-white dark:from-indigo-900 dark:via-blue-900 dark:to-slate-900"
    },
    {
        id: 4,
        title: "Real-time Chat",
        description: "Aplicación de mensajería instantánea con comunicación bidireccional en tiempo real. Salas de chat y usuarios simultáneos.",
        tags: ["Node.js", "Socket.IO", "Express", "Vanilla JS"],
        links: [
            { label: "Ver Código", url: "https://github.com/GastonM12/Chat-", icon: Github }
        ],
        image: chatImage,
        badge: { icon: MessageCircle, text: "Socket.IO", color: "violet" },
        layout: "left",
        gradient: "from-violet-200 via-indigo-200 to-white dark:from-violet-900 dark:via-indigo-900 dark:to-slate-900"
    },
    {
        id: 5,
        title: "Personal Blog API",
        description: "Sistema de gestión de contenidos para blog personal. API RESTful para artículos, gestión de imágenes y base de datos.",
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    // Generate stable random offsets for each tag
    const tagVariants = useMemo(() => {
        return project.tags.map(() => ({
            hidden: {
                opacity: 0,
                x: (Math.random() - 0.5) * 500,
                y: (Math.random() - 0.5) * 500,
                scale: 0,
                rotate: (Math.random() - 0.5) * 90
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                }
            }
        }));
    }, [project.tags]);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="h-[75vh] w-[90vw] md:w-[80vw] lg:w-[60vw] max-w-[1200px] flex-shrink-0 p-4"
        >
            <GlassCard className="overflow-hidden border-0 bg-slate-900/20 dark:bg-slate-900/20 h-full relative group">
                {/* Full Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay z-10`}></div>
                    <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 z-20"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-30 h-full flex flex-col justify-end p-8 md:p-12">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${project.badge.color}-500/20 border border-${project.badge.color}-500/30 text-${project.badge.color}-300 text-xs font-medium backdrop-blur-md`}>
                                <project.badge.icon size={14} /> {project.badge.text}
                            </div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h3>

                        <p className="text-lg text-slate-200 mb-6 leading-relaxed max-w-2xl line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    variants={tagVariants[index]}
                                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium backdrop-blur-sm"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                                >
                                    <link.icon size={18} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
};

const SeeMoreCard = () => (
    <div className="h-[75vh] w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-[800px] flex-shrink-0 p-4 flex items-center justify-center">
        <GlassCard className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
            <a href="https://github.com/GastonM12" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-6 text-center w-full h-full justify-center">
                <div className="p-6 rounded-full bg-slate-200 dark:bg-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Github size={64} className="text-slate-900 dark:text-white" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">¿Quieres ver más?</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Explora todos mis proyectos en GitHub</p>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mt-4 group-hover:translate-x-2 transition-transform">
                    Visitar Perfil <ExternalLink size={20} />
                </div>
            </a>
        </GlassCard>
    </div>
);

export const Projects: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[1000vh] bg-slate-50 dark:bg-antigravity-bg">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-12 items-center">
                    <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] px-8">
                        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                            Ingeniería <br /><span className="text-slate-500 dark:text-slate-600">en Acción</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Desliza para explorar <br /> mis proyectos destacados.
                        </p>
                    </div>
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    <SeeMoreCard />
                </motion.div>
            </div>
        </section>
    );
};
