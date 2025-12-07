import React from 'react';

export interface TechSkill {
    name: string;
    slug: string;
}

export interface TechCategory {
    category: string;
    icon: React.ElementType;
    color: string;
    skills: TechSkill[];
}
