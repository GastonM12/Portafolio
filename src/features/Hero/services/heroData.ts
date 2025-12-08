import { HeroData } from '../models';

export const getHeroData = (): HeroData => ({
    firstName: 'Gaston',
    lastName: 'Mori',
    role: 'Full Stack & Cloud Arch',
    description: 'Desarrollador Full Stack en formación constante.',
    techStack: 'Laravel, Python, React & AWS.',
    cvLink: '/CV_Gaston_Mori.pdf',
    status: 'Open to Work',
    linkedinLink: 'https://www.linkedin.com/in/gaston-mori-0a3719335/',
    githubLink: 'https://github.com/GastonM12',
    email: 'mailto:gastonexequielmori@outlook.com'
});
