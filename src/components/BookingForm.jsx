import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
  const { t } = useTranslation();

  return (
    <section id="liên hệ" className="grid grid-cols-1 lg:grid-cols-2 bg-wood-dark text-cream overflow-hidden">
      {/* Left Text Layer */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-16 lg:px-20 lg:py-24 flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-6 text-[0.7rem] uppercase tracking-[0.22em] text-accent font-medium">
          <span className="w-7 h-px bg-accent"></span>
          {t('booking.subtitle')}
        </div>
        <h2 className="mb-8 text-4xl lg:text-5xl font-light font-serif text-be-light leading-snug">
          {t('booking.title_part1')}<br />{t('booking.title_part2')} <em className="italic font-normal text-white">{t('booking.title_italic')}</em>
        </h2>
        <p className="mb-12 text-[0.92rem] leading-loose font-light text-be/60 max-w-md opacity-80">
          {t('booking.desc')}
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 text-[0.85rem] text-be/70 hover:text-accent transition-colors duration-300">
            <div className="p-2 border border-be/20 rounded-full">
              <MapPin size={16} className="text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-widest text-accent/60 mb-1">{t('booking.info.address')}</span>
              123 Đường Hoàng Hoa Thám, Hà Nội
            </div>
          </div>
          <div className="flex items-start gap-4 text-[0.85rem] text-be/70 hover:text-accent transition-colors duration-300">
             <div className="p-2 border border-be/20 rounded-full">
              <Phone size={16} className="text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-widest text-accent/60 mb-1">{t('booking.info.phone')}</span>
              0912 345 678
            </div>
          </div>
          <div className="flex items-start gap-4 text-[0.85rem] text-be/70 hover:text-accent transition-colors duration-300">
             <div className="p-2 border border-be/20 rounded-full">
              <Clock size={16} className="text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-widest text-accent/60 mb-1">{t('booking.info.opening')}</span>
              {t('booking.info.opening_val')}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Form Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-wood-dark p-6 py-16 lg:p-20 flex flex-col justify-center border-t border-white/5 lg:border-t-0 lg:border-l"
      >
        <form className="grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.name')}</label>
              <input 
                type="text" 
                placeholder="Nguyễn Thị Lan"
                className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:opacity-30"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.phone')}</label>
              <input 
                type="tel" 
                placeholder="09xx xxx xxx"
                className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.service')}</label>
              <select className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option className="bg-wood-dark">Massage Trị Liệu</option>
                <option className="bg-wood-dark">Chăm Sóc Da Mặt</option>
                <option className="bg-wood-dark">Cổ Vai Gáy</option>
                <option className="bg-wood-dark">Gội Đầu Dưỡng Sinh</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.date')}</label>
              <input 
                type="date" 
                className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all invert opacity-70"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.note')}</label>
            <textarea 
              rows="3"
              placeholder="..."
              className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all resize-none placeholder:opacity-30"
            />
          </div>

          <button type="submit" className="w-full py-5 bg-accent text-wood-dark text-[0.85rem] rounded-[2px] uppercase tracking-[0.2em] font-bold hover:bg-[#d4b585] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg">
            {t('booking.form.submit')}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default BookingForm;
