import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Banknote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceDetailModal = ({ service, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('vi') ? 'vi' : i18n.language.startsWith('jp') ? 'jp' : i18n.language.startsWith('ko') ? 'ko' : i18n.language.startsWith('zh') ? 'zh' : 'en';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % service.images.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [service.images.length]);

  if (!service) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-wood-dark/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-cream rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-cream/80 rounded-full text-wood-dark hover:bg-wood hover:text-white transition-all shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Left: Interactive Carousel */}
        <div className="lg:w-1/2 relative bg-be min-h-[300px] lg:min-h-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={service.images[currentImg]}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt={service.name[currentLang]}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white font-serif tracking-[0.2em] text-xs opacity-60">ICHI SPA EXPERIENCE</div>
        </div>

        {/* Right: Detailed Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto no-scrollbar bg-cream">
          <div className="flex items-center gap-2 mb-4 text-[0.7rem] uppercase tracking-widest text-accent font-semibold">
            <span className="w-6 h-px bg-accent"></span>
            {service.category[currentLang]}
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif text-wood-dark mb-4 leading-tight">{service.name[currentLang]}</h2>
          
          <div className="flex gap-6 mb-8 border-b border-line pb-6">
            <div className="flex items-center gap-2 text-[0.85rem] text-text-mid">
              <Clock size={16} className="text-accent" />
              {service.duration[currentLang]}
            </div>
            <div className="flex items-center gap-2 text-[0.85rem] text-wood font-medium">
              <Banknote size={16} className="text-accent" />
              {service.price[currentLang]}
            </div>
          </div>

          <div className="space-y-6 mb-8 text-[0.95rem] leading-relaxed text-text-mid font-light">
              <p className="font-medium text-wood-dark">
                {currentLang === 'vi' ? 'Món quà hoàn hảo cho cơ thể và tâm hồn.' : 
                 currentLang === 'jp' ? '心と体に最高の贈り物を。' : 
                 currentLang === 'ko' ? '몸과 마음에 전하는 완벽한 선물.' :
                 currentLang === 'zh' ? '送给身心的完美礼物。' :
                 'A perfect gift for body and soul.'}
              </p>
             <p className="opacity-80 italic italic-serif">{service.longDescription[currentLang]}</p>
          </div>

          <div className="space-y-3 mb-10">
            {service.benefits[currentLang].map((benefit, bIdx) => (
              <div key={bIdx} className="flex items-center gap-3 text-[0.88rem] text-text-dark font-normal">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-wood text-white text-[0.8rem] rounded-sm uppercase tracking-[0.2em] font-bold hover:bg-wood-dark transition-all shadow-md group"
          >
            {t('menu_page.back')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetailModal;
