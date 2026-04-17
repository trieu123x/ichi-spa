import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { extendedServices } from '../data/extendedServices';
import ServiceDetailModal from '../components/ServiceDetailModal';
import { Clock, Banknote, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MenuPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('vi') ? 'vi' : i18n.language.startsWith('jp') ? 'jp' : i18n.language.startsWith('ko') ? 'ko' : i18n.language.startsWith('zh') ? 'zh' : 'en';

  return (
    <div className="bg-cream pt-10 pb-24 px-6 lg:px-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 text-[0.7rem] uppercase tracking-[0.25em] text-accent">
            <span className="w-8 h-px bg-accent"></span>
            {t('menu_page.subtitle')}
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif text-wood-dark mb-6">{t('menu_page.title')}</h1>
          <p className="text-[0.95rem] text-text-mid font-light max-w-xl mx-auto opacity-70 leading-relaxed">
            {t('menu_page.desc')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {extendedServices.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-white border border-line p-3 sm:p-5 rounded-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:border-accent"
            >
              <div className="relative  h-40 sm:h-64 mb-4 sm:mb-6 overflow-hidden rounded-sm">
                <img 
                  src={service.images[0]} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  alt={service.name[currentLang]}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-wood/90 text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-bold">
                    {service.badge}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl text-wood">
                   <Sparkles size={18} fill="currentColor" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3 text-[0.65rem] uppercase tracking-widest text-accent font-semibold">
                <span className="w-4 h-px bg-accent opacity-50"></span>
                {service.category[currentLang]}
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold font-serif text-wood-dark mb-2 sm:mb-4 group-hover:text-wood transition-colors">{service.name[currentLang]}</h3>
              
              <div className="flex justify-between items-center text-[0.8rem] text-text-mid opacity-70 mb-4 border-t border-line/50 pt-4">
                 <div className="flex items-center gap-1.5">
                   <Clock size={14} className="opacity-50" />
                   {service.duration[currentLang]}
                 </div>
                 <div className="flex items-center gap-1.5 font-medium text-wood">
                   <Banknote size={14} className="opacity-50" />
                   {service.price[currentLang]}
                 </div>
              </div>
              
              <p className="text-[0.82rem] leading-relaxed text-text-soft font-light line-clamp-2 italic italic-serif">
                 "{service.description[currentLang]}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuPage;
