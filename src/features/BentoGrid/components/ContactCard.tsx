import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export const ContactCard: React.FC = () => {
    return (
        <motion.div
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
        >
            <div className="h-full p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start">
                    <Mail size={24} className="text-indigo-200 drop-shadow-md" />
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>
                <div>
                    <p className="text-indigo-100 text-xs font-medium mb-1 drop-shadow-sm">¿Tienes un proyecto?</p>
                    <h4 className="text-lg font-bold text-white drop-shadow-md">Hablemos</h4>
                </div>
            </div>
        </motion.div>
    );
};
