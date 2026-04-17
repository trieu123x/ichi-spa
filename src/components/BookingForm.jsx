import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Massage Trị Liệu',
    date: '',
    note: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'Massage Trị Liệu',
      date: '',
      note: ''
    });
  };

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
              108 Phan Kế Bính, Ba Đình, Hà Nội
            </div>
          </div>
          <div className="flex items-start gap-4 text-[0.85rem] text-be/70 hover:text-accent transition-colors duration-300">
             <div className="p-2 border border-be/20 rounded-full">
              <Phone size={16} className="text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-widest text-accent/60 mb-1">{t('booking.info.phone')}</span>
              0395 093 087
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
        className="bg-wood-dark p-6 py-16 lg:p-20 flex flex-col justify-center border-t border-white/5 lg:border-t-0 lg:border-l min-h-[500px]"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit} 
              className="grid gap-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.name')}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t('booking.form.name_placeholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:opacity-30"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.phone')}</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all placeholder:opacity-30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.service')}</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-wood-dark" value="Massage Trị Liệu">{t('menu.body-aroma.name')}</option>
                    <option className="bg-wood-dark" value="Chăm Sóc Da Mặt">{t('menu.facial-basic.name')}</option>
                    <option className="bg-wood-dark" value="Cổ Vai Gáy">{t('menu.neck-shoulder-pro.name')}</option>
                    <option className="bg-wood-dark" value="Gội Đầu Dưỡng Sinh">{t('menu.hair-60.name')}</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.date')}</label>
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all invert opacity-70"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[0.68rem] uppercase tracking-widest text-accent font-semibold">{t('booking.form.note')}</label>
                <textarea 
                  rows="3"
                  placeholder="..."
                  value={formData.note}
                  onChange={(e) => setFormData({...formData, note: e.target.value})}
                  className="w-full px-5 py-4 bg-white/5 border border-be/10 rounded-sm text-be-light text-[0.9rem] outline-none focus:border-accent focus:bg-white/10 transition-all resize-none placeholder:opacity-30"
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-5 bg-accent text-wood-dark text-[0.85rem] rounded-[2px] uppercase tracking-[0.2em] font-bold hover:bg-[#d4b585] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-wood-dark border-t-transparent rounded-full animate-spin" />
                ) : t('booking.form.submit')}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 py-10"
            >
              <div className="flex justify-center">
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-6 bg-accent/20 rounded-full"
                  >
                    <CheckCircle2 size={64} className="text-accent" />
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-be-light">{t('booking.form.success.title')}</h3>
                <div className="space-y-2 text-[0.95rem] text-be/70 font-light leading-relaxed">
                  <p>{t('booking.form.success.thanks')}</p>
                  <p className="text-accent font-medium">{t('booking.form.success.time_info', { time: formData.date })}</p>
                  <p className="italic italic-serif mt-6 opacity-80">{t('booking.form.success.footer')}</p>
                </div>
              </div>

              <button 
                onClick={handleReset}
                className="px-8 py-3 border border-be/20 text-be/60 text-[0.7rem] uppercase tracking-widest hover:border-accent hover:text-accent transition-all rounded-sm"
              >
                {t('booking.form.reset')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BookingForm;
