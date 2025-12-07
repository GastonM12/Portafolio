import React from 'react';
import { m } from 'framer-motion';
import { useContactLogic } from './hooks/useContactLogic';
import { SectionHeader } from './components/SectionHeader';
import { SocialCard } from './components/SocialCard';
import { Footer } from './components/Footer';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    const { socialLinks } = useContactLogic();

    return (
        <section id="contact" className={`min-h-[80vh] flex flex-col justify-between py-24 px-6 relative bg-slate-100 dark:bg-antigravity-bg transition-colors duration-300 ${styles.contactContainer}`}>

            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto flex-grow flex flex-col justify-center items-center text-center z-10">
                <SectionHeader />

                <m.div
                    className="flex flex-wrap justify-center gap-6 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {socialLinks.map((link) => (
                        <SocialCard key={link.id} link={link} />
                    ))}
                </m.div>
            </div>

            <Footer />
        </section>
    );
};
