import { getWorkflowSteps } from '../services/workflowData';
import { useLanguage } from '../../../context/LanguageContext';

export const useWorkflowLogic = () => {
    const { language } = useLanguage();
    const steps = getWorkflowSteps(language);
    return { steps };
};
