import { HeroData } from '../models';
import cvFile from '../../../assets/CV-GASTON-MORI.pdf';

export const getHeroData = (): HeroData => ({
    firstName: 'Gaston',
    lastName: 'Mori',
    role: 'Full Stack & Cloud Arch',
    description: 'Desarrollador Full Stack en formación constante.',
    techStack: 'Laravel, Python, React & AWS.',
    cvLink: cvFile,
    status: 'Open to Work',
    linkedinLink: 'https://www.linkedin.com/in/gaston-mori-0a3719335/',
    githubLink: 'https://github.com/GastonM12',
    email: 'mailto:gastonexequielmori@outlook.com'
});
