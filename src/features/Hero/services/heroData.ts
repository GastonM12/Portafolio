import { HeroData } from '../models';

export const getHeroData = (): HeroData => ({
    firstName: 'Gaston',
    lastName: 'Mori',
    role: 'Full Stack & Cloud Arch',
    description: 'Desarrollador Full Stack en formación constante.',
    techStack: 'Laravel, Python, React & AWS.',
    cvLink: '/CV_Gaston_Mori.pdf',
    status: 'Open to Work'
});
