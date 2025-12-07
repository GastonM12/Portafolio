import React from 'react';

export interface SocialLink {
    id: string;
    label: string;
    url: string;
    icon: React.ElementType;
    hoverColorClass: string;
}
