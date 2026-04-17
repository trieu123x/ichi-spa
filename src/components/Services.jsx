import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t('menu.body-aroma.name', 'Massage Trị Liệu'),
      desc: t('menu.body-aroma.desc', 'Phục hồi cơ thể với kỹ thuật massage truyền thống kết hợp tinh dầu thiên nhiên cao cấp.'),
      price: `${t('common.from', 'Từ')} 450.000 ₫`,
      icon: (
        <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E8DCCB" />
          <path d="M16 28c2-6 8-10 16-8" stroke="#7B5C3E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 24c1-4 5-7 10-7s9 3 10 7" stroke="#A07850" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      )
    },
    {
      name: t('menu.facial-basic.name', 'Chăm Sóc Da Mặt'),
      desc: t('menu.facial-basic.desc', 'Liệu trình làm sạch sâu, phục hồi và nuôi dưỡng da với công nghệ tiên tiến.'),
      price: `${t('common.from', 'Từ')} 550.000 ₫`,
      icon: (
        <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E8DCCB" />
          <ellipse cx="24" cy="22" rx="10" ry="12" stroke="#7B5C3E" strokeWidth="1.5" fill="none" />
          <circle cx="24" cy="22" r="4" fill="#A07850" opacity="0.5" />
        </svg>
      )
    },
    {
      name: t('menu.neck-shoulder-pro.name', 'Cổ Vai Gáy'),
      desc: t('menu.neck-shoulder-pro.desc', 'Giải pháp đặc trị đau mỏi cho dân văn phòng, khôi phục sự linh hoạt cho khớp cổ.'),
      price: `${t('common.from', 'Từ')} 490.000 ₫`,
      icon: (
        <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E8DCCB" />
          <path d="M14 30 Q24 16 34 30" stroke="#7B5C3E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="30" r="2.5" fill="#7B5C3E" opacity="0.5" />
        </svg>
      )
    },
    {
      name: t('menu.hair-60.name', 'Gội Đầu Dưỡng Sinh'),
      desc: t('menu.hair-60.desc', 'Kết hợp massage da đầu và ủ tóc thảo dược, giúp tóc mềm mượt và thư giãn sâu.'),
      price: `${t('common.from', 'Từ')} 99.000 ₫`,
      icon: (
        <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E8DCCB" />
          <ellipse cx="24" cy="20" rx="8" ry="6" stroke="#7B5C3E" strokeWidth="1.5" fill="none" />
          <path d="M16 20 Q14 28 18 32 Q24 36 30 32" stroke="#A07850" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="dịch vụ" className="px-6 py-24 lg:px-12 bg-cream overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start justify-between gap-6 mb-16 lg:items-end lg:flex-row"
      >
        <div>
          <div className="flex items-center gap-3 mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-text-soft font-medium">
            <span className="w-7 h-px bg-accent"></span>
            {t('services.subtitle')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-light font-serif text-wood-dark leading-tight">
            {t('services.title_part1')} <em className="italic font-normal text-wood-light">{t('services.title_italic')}</em><br className="hidden md:block" /> {t('services.title_part2')}
          </h2>
        </div>
        <Link to="/menu" className="px-10 py-4 text-[0.78rem] uppercase tracking-[0.14em] text-wood transition-all border border-wood rounded-sm hover:bg-be-light">
          {t('services.view_all')}
        </Link>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 gap-px bg-line md:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group relative bg-cream p-5 sm:p-10 transition-colors hover:bg-be-light cursor-pointer"
          >
            <Link to="/menu" className="absolute inset-0 z-10" />
            <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
              {service.icon}
            </div>
            <h3 className="mb-2 text-lg sm:text-2xl font-serif text-wood-dark font-normal">{service.name}</h3>
            <p className="mb-8 text-[0.88rem] leading-relaxed font-light text-text-soft opacity-80">{service.desc}</p>
            <div className="text-[0.9rem] font-medium tracking-tight text-wood">{service.price}</div>
            <ArrowUpRight className="absolute transition-all duration-300 bottom-8 right-8 w-6 h-6 text-accent opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
