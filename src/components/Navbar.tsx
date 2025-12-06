import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-lg">

                {/* Logo / Name */}
                <a href="#" className="font-display font-bold text-lg text-slate-800 dark:text-white tracking-tight">
                    GM<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={(e) => {
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
                    }}
                    className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-yellow-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-20 left-6 right-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl pointer-events-auto md:hidden flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </motion.nav>
    );
};
