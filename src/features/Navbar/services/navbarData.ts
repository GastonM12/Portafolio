import { NavLink } from '../models';
import { Language } from '../../../context/LanguageContext';

const linksEs: NavLink[] = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Trayectoria', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

const linksEn: NavLink[] = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const getNavLinks = (lang: Language = 'es') => (lang === 'en' ? linksEn : linksEs);
