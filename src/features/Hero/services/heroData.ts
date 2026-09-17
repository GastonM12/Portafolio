import { HeroData } from '../models';
import { Language } from '../../../context/LanguageContext';

export const getHeroData = (lang: Language = 'es'): HeroData => {
    if (lang === 'en') {
        return {
            firstName: 'Gaston',
            lastName: 'Mori',
            role: 'Full Stack & Cloud Arch',
            description: 'Full Stack Developer focused on scalable web architectures and ERP systems.',
            techStack: 'Laravel, Node.js, React & AWS.',
            cvLink: '/cv-gaston-mori.pdf',
            status: 'Open to Work',
            linkedinLink: 'https://www.linkedin.com/in/gaston-mori-0a3719335/',
            githubLink: 'https://github.com/GastonM12',
            email: 'mailto:gastonexequielmori@outlook.com',
            downloadCvLabel: 'Download CV',
            contactLabel: "Let's Talk"
        };
    }

    return {
        firstName: 'Gaston',
        lastName: 'Mori',
        role: 'Desarrollador Full Stack & Cloud',
        description: 'Desarrollador Full Stack con sólida trayectoria en aplicaciones web y sistemas ERP.',
        techStack: 'Laravel, Node.js, React & AWS.',
        cvLink: '/cv-gaston-mori.pdf',
        status: 'Disponible para trabajar',
        linkedinLink: 'https://www.linkedin.com/in/gaston-mori-0a3719335/',
        githubLink: 'https://github.com/GastonM12',
        email: 'mailto:gastonexequielmori@outlook.com',
        downloadCvLabel: 'Descargar CV',
        contactLabel: 'Hablemos'
    };
};
