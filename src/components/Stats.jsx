import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('stats.clients'), value: '500+' },
    { label: t('stats.specialists'), value: '12' },
    { label: t('stats.categories'), value: '4' },
    { label: t('stats.natural'), value: '100%' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-2 divide-x divide-y lg:grid-cols-4 bg-be-soft border-y border-line divide-line"
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center py-10 lg:py-16 border-line group">
          <motion.div 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            className="mb-2 text-4xl lg:text-5xl font-light font-serif text-wood group-hover:scale-105 transition-transform"
          >
            {stat.value}
          </motion.div>
          <div className="text-[0.65rem] lg:text-[0.72rem] uppercase tracking-[0.15em] text-text-soft text-center px-4">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Stats;
