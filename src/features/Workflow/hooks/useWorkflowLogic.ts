import { getWorkflowSteps } from '../services/workflowData';

export const useWorkflowLogic = () => {
    const steps = getWorkflowSteps();
    return { steps };
};
