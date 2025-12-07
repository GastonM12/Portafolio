import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { SocialLink } from '../models';

const socialLinks: SocialLink[] = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gaston-mori-0a3719335/',
        icon: Linkedin,
        hoverColorClass: 'group-hover:text-blue-600 dark:group-hover:text-blue-500'
    },
    {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/GastonM12',
        icon: Github,
        hoverColorClass: 'group-hover:text-slate-900 dark:group-hover:text-white'
    },
    {
        id: 'email',
        label: 'Email',
        url: 'mailto:gastonexequielmori@outlook.com',
        icon: Mail,
        hoverColorClass: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        url: 'https://wa.me/543493511221',
        icon: Phone,
        hoverColorClass: 'group-hover:text-green-600 dark:group-hover:text-green-400'
    }
];

export const getSocialLinks = () => socialLinks;
