import React from 'react';

export interface ProjectLink {
    label: string;
    url: string;
    icon: React.ElementType;
}

export interface ProjectBadge {
    icon: React.ElementType;
    text: string;
    color: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
    image: string;
    badge: ProjectBadge;
    layout: 'left' | 'right';
    gradient: string;
}
