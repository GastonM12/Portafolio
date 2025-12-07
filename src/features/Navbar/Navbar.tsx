import React from 'react';
import { m } from 'framer-motion';
import { useNavbarLogic } from './hooks/useNavbarLogic';
import { Logo } from './components/Logo';
import { DesktopMenu } from './components/DesktopMenu';
import { ThemeToggle } from './components/ThemeToggle';
import { MobileMenu } from './components/MobileMenu';
import { MobileToggle } from './components/MobileToggle';
import { NavbarProps } from './models';
import styles from './Navbar.module.css';

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const { isOpen, setIsOpen, links, handleThemeToggle } = useNavbarLogic(theme, toggleTheme);

    return (
        <m.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-center ${styles.navbarContainer}`}
        >
            <div className="pointer-events-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-lg">
                <Logo />
                <DesktopMenu links={links} />
                <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
                <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
        </m.nav>
    );
};
