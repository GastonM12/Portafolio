import React, { useState } from 'react';
import { getNavLinks } from '../services/navbarData';

export const useNavbarLogic = (theme: 'dark' | 'light', toggleTheme: () => void) => {
    const [isOpen, setIsOpen] = useState(false);
    const links = getNavLinks();

    const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const isDark = theme === 'dark';

        if (!document.startViewTransition) {
            toggleTheme();
            return;
        }

        const x = e.clientX;
        const y = e.clientY;

        // Helper to generate a smooth closed path string (d attribute)
        const createBlobPathString = (cx: number, cy: number, radius: number, randomness: number) => {
            const points = 8;
            const angleStep = (Math.PI * 2) / points;
            const nodes: { x: number; y: number }[] = [];

            for (let i = 0; i < points; i++) {
                const angle = i * angleStep;
                const r = radius * (1 - randomness + Math.random() * randomness * 2);
                nodes.push({
                    x: cx + Math.cos(angle) * r,
                    y: cy + Math.sin(angle) * r,
                });
            }

            // Close the loop for calculation
            const loop = [...nodes, nodes[0], nodes[1]];

            let d = `M ${(loop[0].x + loop[1].x) / 2} ${(loop[0].y + loop[1].y) / 2}`;

            for (let i = 0; i < points; i++) {
                const p0 = loop[i];
                const p1 = loop[i + 1];
                const midX = (p0.x + p1.x) / 2;
                const midY = (p0.y + p1.y) / 2;
                // Simple quadratic bezier for smoothness
                // Using the vertex as the control point
                d += ` Q ${p0.x} ${p0.y} ${midX} ${midY}`;
            }

            d += ' Z';
            return d;
        };

        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            toggleTheme();
        });

        transition.ready.then(() => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            // Blob 1: Click position
            const startBlob1 = createBlobPathString(x, y, 0, 0);
            const endBlob1 = createBlobPathString(x, y, endRadius * 1.2, 0.2);

            // Blob 2: Bottom-Right corner
            const startBlob2 = createBlobPathString(w, h, 0, 0);
            const endBlob2 = createBlobPathString(w, h, endRadius * 1.2, 0.2);

            // Blob 3: Bottom-Left corner
            const startBlob3 = createBlobPathString(0, h, 0, 0);
            const endBlob3 = createBlobPathString(0, h, endRadius * 1.2, 0.2);

            // Combine paths
            const startPath = `path('${startBlob1} ${startBlob2} ${startBlob3}')`;
            const endPath = `path('${endBlob1} ${endBlob2} ${endBlob3}')`;

            const clipPath = [startPath, endPath];

            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 5500,
                    easing: 'ease-in-out',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    };

    return {
        isOpen,
        setIsOpen,
        links,
        handleThemeToggle
    };
};
