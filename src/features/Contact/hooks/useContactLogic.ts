import { getSocialLinks } from '../services/contactData';

export const useContactLogic = () => {
    const socialLinks = getSocialLinks();
    return { socialLinks };
};
