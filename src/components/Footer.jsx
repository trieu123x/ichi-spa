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
        <div className="flex flex-col gap-4">
          <div className="text-3xl tracking-[0.2em] font-brand font-bold text-white">
            ichi <span className="text-accent underline decoration-accent/30 decoration-offset-4">spa</span>
          </div>
          <div className="text-[0.8rem] text-be/60 leading-relaxed font-light">
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              108 Phan Kế Bính, Ba Đình, Hà Nội
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              Hotline: 0395 093 087
            </p>
            <p className="mt-2 opacity-40 italic">
              10:00 - 22:00 Daily
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-[400px] h-[200px] rounded-lg overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9199195315546!2d105.80586021102502!3d21.035888987452315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab14daba7127%3A0x2dfcd981d90d400!2s108%20Phan%20Ke%20Binh%2C%20Ba%20Dinh%2C%20Ha%20Noi!5e0!3m2!1sen!2svn!4v1774769954116!5m2!1sen!2svn"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ichi Spa Location"
          ></iframe>
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
