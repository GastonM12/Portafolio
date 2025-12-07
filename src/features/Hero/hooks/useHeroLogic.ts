import { useScroll, useTransform } from 'framer-motion';
import { getHeroData } from '../services/heroData';
// Adjusting imports to match the new location
import heroImageDark from '../../../assets/image/Gemini_Generated_Image_ujziezujziezujzi.png';
import heroImageLight from '../../../assets/image/Gemini_Generated_Image_4fsrj84fsrj84fsr (1).png';

export const useHeroLogic = (theme: string) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 700], [0, 1]);
    const heroData = getHeroData();
    const heroImage = theme === 'dark' ? heroImageDark : heroImageLight;

    return {
        opacity,
        heroData,
        heroImage
    };
};
