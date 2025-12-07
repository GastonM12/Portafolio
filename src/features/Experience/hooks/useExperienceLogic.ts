import { getExperienceData, getEducationData, getCertificationsData, getTechStackData } from '../services/experienceData';

export const useExperienceLogic = () => {
    const experience = getExperienceData();
    const education = getEducationData();
    const certifications = getCertificationsData();
    const techStack = getTechStackData();

    return {
        experience,
        education,
        certifications,
        techStack
    };
};
