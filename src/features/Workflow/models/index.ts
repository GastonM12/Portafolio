import React from 'react';

export interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
}
