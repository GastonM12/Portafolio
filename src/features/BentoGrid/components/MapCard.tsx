import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const MapCard: React.FC = () => {
    return (
        <motion.div
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            <div className="h-full relative overflow-hidden group rounded-2xl bg-slate-200 dark:bg-slate-800">
                <img
                    src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-60.7000,-31.6333,12,0/400x400?access_token=PLACEHOLDER"
                    alt="Map Placeholder"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 rounded-2xl"
                    onError={(e) => {
                        // Fallback if no map token
                        e.currentTarget.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center gap-2 text-white mb-1 drop-shadow-lg">
                        <MapPin size={16} className="text-indigo-400" />
                        <span className="font-bold text-sm">Santa Fe, AR</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono drop-shadow-md">GMT-3 • Remote Ready</p>
                </div>
            </div>
        </motion.div>
    );
};
