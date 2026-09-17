import { getExperienceData, getEducationData, getCertificationsData, getTechStackData } from '../services/experienceData';
import { useLanguage } from '../../../context/LanguageContext';

export const useExperienceLogic = () => {
    const { language } = useLanguage();
    const experience = getExperienceData(language);
    const education = getEducationData(language);
    const certifications = getCertificationsData();
    const techStack = getTechStackData();

    return {
        experience,
        education,
        certifications,
        techStack
    };
};
