export interface HeroData {
    firstName: string;
    lastName: string;
    role: string;
    description: string;
    techStack: string;
    cvLink: string;
    status: string;
    linkedinLink: string;
    githubLink: string;
    email: string;
    downloadCvLabel: string;
    contactLabel: string;
}

export interface HeroProps {
    theme: string;
}
