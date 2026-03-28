import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const images = [
  "/1010574840257195780.jpg",
  "/1293911440826339391.jpg",
  "/1612625643177023838.jpg",
  "/3370205943518695100.jpg"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="giới thiệu" className="grid min-h-[85vh] grid-cols-1 lg:grid-cols-2">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-20 bg-cream"
      >
        <div className="flex items-center gap-3 mb-6 text-[0.72rem] uppercase tracking-[0.22em] text-text-soft">
          <span className="w-8 h-px bg-accent"></span>
          {t('hero.subtitle')}
        </div>
        
        <h1 className="mb-6 text-5xl font-light leading-tight font-serif text-wood-dark lg:text-7xl">
          {t('hero.title_part1')}<br />{t('hero.title_part2')} <em className="italic font-normal text-wood-light">{t('hero.title_italic')}</em>
        </h1>
        
        <p className="max-w-md mb-10 text-[0.95rem] leading-loose font-light text-text-mid opacity-80">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link to="/menu" className="flex-1 sm:flex-none px-8 py-3.5 text-[0.78rem] uppercase tracking-[0.14em] text-white transition-all rounded-sm bg-wood hover:bg-wood-dark hover:-translate-y-0.5 shadow-sm text-center">
            {t('hero.btn_explore')}
          </Link>
          <button 
            onClick={() => scrollToSection('bảng giá')}
            className="flex-1 sm:flex-none px-8 py-3.5 text-[0.78rem] uppercase tracking-[0.14em] text-wood transition-all border border-wood rounded-sm hover:bg-be-light"
          >
            {t('hero.btn_prices')}
          </button>
        </div>
      </motion.div>

      {/* Right Carousel */}
      <div className="relative overflow-hidden bg-be h-[40vh] lg:h-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 object-cover w-full h-full"
            alt="Ichi Spa"
          />
        </AnimatePresence>
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-12">
          <div className="relative w-full h-full border border-white/20 opacity-30 flex items-center justify-center">
             <div className="text-[10vw] lg:text-[5vw] font-serif text-white opacity-10 select-none">ICHI</div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute flex gap-3 bottom-6 right-6 lg:bottom-10 lg:right-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                idx === current ? "bg-white w-8" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
