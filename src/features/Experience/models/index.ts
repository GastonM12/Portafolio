import React from 'react';

export interface CmdData {
    text: string;
    highlight: string[];
    colors: string[];
}

export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    date: string;
    description: string;
    icon: React.ElementType;
    color: string;
    items: string[];
    tags: string[];
    cmd?: CmdData;
}

export interface EducationItem {
    title: string;
    institution: string;
    period: string;
    color: string;
}

export interface CertificationItem {
    name: string;
    inst: string;
    icon: React.ElementType;
}

export interface TechSkill {
    name: string;
    level: number;
}

export interface TechStackData {
    backend: TechSkill[];
    frontend: TechSkill[];
    tools: TechSkill[];
}
