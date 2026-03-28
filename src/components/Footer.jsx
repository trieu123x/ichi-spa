import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-16 lg:px-20 border-t border-white/5 bg-wood-dark text-be">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-between gap-12 lg:flex-row"
      >
        <div className="text-3xl tracking-[0.2em] font-serif font-semibold">
          ichi <span className="italic font-normal text-accent">spa</span>
        </div>
        
        <div className="text-[0.8rem] text-be/40 leading-loose text-center lg:text-left font-light max-w-sm">
          <p className="mb-2">123 Hoàng Hoa Thám, Hà Nội &nbsp;·&nbsp; 0912 345 678</p>
          <p>ichispa@gmail.com &nbsp;·&nbsp; {t('booking.info.opening')}: {t('booking.info.opening_val')}</p>
        </div>
        
        <div className="flex gap-10">
          {['fb', 'ig', 'tt'].map((social) => (
            <motion.button
              key={social}
              whileHover={{ scale: 1.2, color: "#C9A97A" }}
              className="relative py-2 text-[0.75rem] uppercase tracking-widest font-bold border-b border-transparent hover:border-accent transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {social}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      <div className="mt-20 pt-8 border-t border-white/5 text-[0.65rem] text-center uppercase tracking-[0.3em] opacity-20 font-light">
        © 2026 Ichi Spa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
