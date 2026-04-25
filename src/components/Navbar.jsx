import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '/#giới thiệu', id: 'giới thiệu', isPage: false },
    { name: t('nav.services'), href: '/#dịch vụ', id: 'dịch vụ', isPage: false },
    { name: t('nav.menu'), href: '/menu', id: 'menu', isPage: true },
    { name: t('nav.prices'), href: '/#bảng giá', id: 'bảng giá', isPage: false },
    { name: t('nav.contact'), href: '/#liên hệ', id: 'liên hệ', isPage: false },
  ];

  useEffect(() => {
    if (location.pathname === '/menu') {
      setActiveSection('menu');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['giới thiệu', 'dịch vụ', 'bảng giá', 'liên hệ'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleScroll = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (item) => {
    if (item.id === 'menu') {
      return location.pathname === '/menu';
    }
    return activeSection === item.id && location.pathname === '/';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'vi', countryCode: 'vn', label: 'Tiếng Việt' },
    { code: 'en', countryCode: 'us', label: 'English' },
    { code: 'jp', countryCode: 'jp', label: '日本語' },
    { code: 'ko', countryCode: 'kr', label: '한국어' },
    { code: 'zh', countryCode: 'cn', label: '中文' },
  ];

  const currentLanguage = languages.find(l => i18n.language.startsWith(l.code)) || languages[1];

  const LanguageSelector = ({ isMobile = false }) => {
    return (
      <div className={`flex items-center ${isMobile ? 'grid grid-cols-5 gap-3' : 'gap-3 lg:gap-4'}`}>
        {languages.map((lng) => (
          <button
            key={lng.code}
            onClick={() => {
              changeLanguage(lng.code);
              if (isMobile) setIsOpen(false);
            }}
            className={`group relative flex flex-col items-center gap-1.5 transition-all duration-300 ${
              i18n.language.startsWith(lng.code)
                ? 'scale-110'
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
            title={lng.label}
          >
            <div className={`p-0.5 rounded-[2px] transition-all duration-300 ${
              i18n.language.startsWith(lng.code)
                ? 'bg-accent/20 ring-1 ring-accent'
                : 'bg-transparent'
            }`}>
              <img 
                src={`https://flagcdn.com/w40/${lng.countryCode}.png`} 
                alt={lng.code} 
                className="w-5 lg:w-6 h-auto rounded-[1px] shadow-sm"
              />
            </div>
            {isMobile && (
              <span className="text-[0.6rem] uppercase tracking-tighter text-text-dark font-medium">
                {lng.code}
              </span>
            )}
            {i18n.language.startsWith(lng.code) && !isMobile && (
              <motion.div 
                layoutId="activeLang"
                className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-accent"
              />
            )}
          </button>
        ))}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col lg:flex-row items-center lg:justify-between px-6 py-3 lg:py-4 border-b bg-cream/95 backdrop-blur-md border-line lg:px-12 gap-y-3 lg:gap-y-0">
      <div className="flex items-center justify-between w-full lg:flex-1 lg:w-auto">
        <Link to="/" className="group relative flex items-center hover:opacity-90 transition-opacity">
          <img src={logo} alt="Ichi Spa" className="h-14 lg:h-20 w-auto object-contain scale-125 lg:scale-150 origin-left" />
        </Link>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden space-x-1 lg:flex lg:flex-1 items-center justify-center">
        {navLinks.map((item, idx) => {
          const active = isActive(item);
          const linkClasses = `px-3 py-2 text-[0.7rem] uppercase tracking-[0.12em] transition-all duration-300 rounded-sm font-medium ${
            active 
              ? 'bg-wood text-white shadow-sm' 
              : 'text-text-mid hover:text-wood hover:bg-wood/5'
          }`;

          return item.isPage ? (
            <Link key={`${item.name}-${idx}`} to={item.href} className={linkClasses}>
              {item.name}
            </Link>
          ) : (
            <a
              key={`${item.name}-${idx}`}
              href={item.href}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll(item.href);
                }
              }}
              className={linkClasses}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center justify-between w-full lg:flex-1 lg:w-auto gap-4 lg:gap-6 lg:justify-end">
        {/* Language Selection - Now shows all flags */}
        <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'opacity-100'}`}>
          <LanguageSelector />
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="/#liên hệ"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                handleScroll('/#liên hệ');
              }
            }}
            className="hidden sm:block px-4 lg:px-5 py-2 lg:py-2.5 text-[0.6rem] lg:text-[0.7rem] uppercase tracking-[0.12em] text-white transition-all rounded-[2px] bg-wood-dark hover:bg-wood shadow-sm active:scale-95 whitespace-nowrap"
          >
            {t('nav.book_now')}
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="p-1.5 lg:p-2 lg:hidden text-wood hover:bg-be-light rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} lg:size={26} /> : <Menu size={24} lg:size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-cream z-[-1] lg:hidden flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((item, idx) => {
                const active = isActive(item);
                return item.isPage ? (
                  <Link
                    key={`mob-${item.name}-${idx}`}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-cursive tracking-[0.15em] p-3 rounded-sm transition-colors ${
                      active ? 'bg-wood text-white' : 'text-text-dark hover:bg-wood/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={`mob-${item.name}-${idx}`}
                    href={item.href}
                    onClick={(e) => {
                      if (location.pathname === '/') e.preventDefault();
                      handleScroll(item.href);
                    }}
                    className={`text-xl font-cursive tracking-[0.15em] p-3 rounded-sm transition-colors ${
                      active ? 'bg-wood text-white' : 'text-text-dark hover:bg-wood/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <div className="flex flex-col gap-4 p-4 bg-be-soft rounded-sm mt-4">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-text-soft">Language:</span>
                <LanguageSelector isMobile={true} />
              </div>

              <hr className="border-line/50 my-6" />
              <a 
                href="/#liên hệ"
                onClick={(e) => {
                  if (location.pathname === '/') e.preventDefault();
                  handleScroll('/#liên hệ');
                }}
                className="w-full py-5 text-center text-[0.85rem] uppercase tracking-[0.2em] text-white rounded-sm bg-wood-dark"
              >
                {t('nav.book_now')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
