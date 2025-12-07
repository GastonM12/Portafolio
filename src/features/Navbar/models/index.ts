export interface NavLink {
    name: string;
    href: string;
}

export interface NavbarProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}
