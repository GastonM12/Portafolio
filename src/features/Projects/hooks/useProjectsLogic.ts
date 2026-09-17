import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { getProjectsData } from '../services/projectsData';
import { useLanguage } from '../../../context/LanguageContext';

export const useProjectsLogic = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const { language } = useLanguage();
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);
    const projects = getProjectsData(language);

    return {
        targetRef,
        x,
        projects
    };
};
