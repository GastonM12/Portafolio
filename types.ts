import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
  type: 'AI' | 'Architecture' | 'Frontend';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  type: 'backend' | 'frontend' | 'education';
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
