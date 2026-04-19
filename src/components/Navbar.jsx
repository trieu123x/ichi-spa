import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-sm transition-all duration-300 ${
            isMobile 
              ? 'bg-be-soft w-full justify-between border border-line/30' 
              : 'hover:bg-wood/5 border border-transparent hover:border-line/30'
          }`}
        >
          <div className="flex items-center gap-2">
            <img 
              src={`https://flagcdn.com/w40/${currentLanguage.countryCode}.png`} 
              alt={currentLanguage.code} 
              className="w-5 h-auto rounded-[1px] shadow-sm"
            />
            <span className={`text-[0.7rem] uppercase tracking-widest font-medium ${isMobile ? 'text-text-dark' : 'text-text-mid'}`}>
              {currentLanguage.label}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isLangOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={14} className="text-accent" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isLangOpen && (
            <>
              {/* Backdrop to close on click outside */}
              {!isMobile && (
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsLangOpen(false)}
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`${
                  isMobile 
                    ? 'relative mt-2 w-full grid grid-cols-2 gap-2' 
                    : 'absolute left-0 lg:left-auto lg:right-0 mt-2 w-48 bg-white border border-line shadow-xl rounded-sm py-2 z-20'
                }`}
              >
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => {
                      changeLanguage(lng.code);
                      setIsLangOpen(false);
                      if (isMobile) setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2 text-[0.75rem] transition-colors w-full text-left ${
                      i18n.language.startsWith(lng.code)
                        ? 'bg-wood/10 text-wood font-semibold'
                        : 'text-text-mid hover:bg-wood/5'
                    } ${isMobile ? 'bg-white border border-line/50 rounded-sm' : ''}`}
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${lng.countryCode}.png`} 
                      alt={lng.code} 
                      className="w-5 h-auto rounded-[1px]"
                    />
                    <span>{lng.label}</span>
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col lg:flex-row items-center lg:justify-between px-6 py-3 lg:py-4 border-b bg-cream/95 backdrop-blur-md border-line lg:px-12 gap-y-3 lg:gap-y-0">
      <div className="flex items-center justify-between w-full lg:flex-1 lg:w-auto">
        <Link to="/" className="group relative flex items-center gap-3 hover:opacity-90 transition-opacity">
          <motion.div 
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="relative flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-linear-to-tr from-wood/30 to-accent/30"
          >
            <Leaf className="text-wood-dark w-6 lg:w-7 h-6 lg:h-7" strokeWidth={2} />
            <motion.div 
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-accent/20 blur-lg"
            />
          </motion.div>
          
          <div className="flex flex-col -space-y-1 lg:-space-y-1.5">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight font-brand text-wood-dark leading-none">
              ichi
            </span>
            <div className="flex items-center gap-2 pt-0.5 lg:pt-1">
              <div className="h-[2px] w-4 lg:w-6 bg-accent" />
              <span className="text-[0.6rem] lg:text-sm font-sans font-bold uppercase tracking-[0.5em] text-wood-light">
                spa
              </span>
            </div>
          </div>
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
        {/* Language Dropdown - Hidden on Mobile Toggle */}
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
                    className={`text-xl font-serif tracking-[0.15em] p-3 rounded-sm transition-colors ${
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
                    className={`text-xl font-serif tracking-[0.15em] p-3 rounded-sm transition-colors ${
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
