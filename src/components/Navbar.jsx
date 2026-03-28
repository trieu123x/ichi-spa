import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  const FlagButton = ({ lng, countryCode, title }) => (
    <button 
      onClick={() => changeLanguage(lng)}
      className={`transition-all p-1 hover:bg-wood/5 rounded-sm ${i18n.language.startsWith(lng) ? 'scale-110 grayscale-0 border-b-2 border-accent pb-1' : 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'}`}
      title={title}
    >
      <img src={`https://flagcdn.com/w40/${countryCode}.png`} alt={lng} className="w-8 h-auto rounded-[1px] shadow-md" />
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-cream/95 backdrop-blur-md border-line lg:px-12">
      <Link to="/" className="text-3xl font-bold tracking-[0.18em] font-serif text-wood-dark hover:opacity-80 transition-opacity">
        ichi <span className="italic font-normal text-wood-light">spa</span>
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden space-x-1 lg:flex items-center">
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

      <div className="flex items-center gap-3">
        {/* Language Flags */}
        <div className="flex items-center gap-2 mr-1">
          <FlagButton lng="vi" countryCode="vn" title="Tiếng Việt" />
          <FlagButton lng="en" countryCode="us" title="English" />
          <FlagButton lng="jp" countryCode="jp" title="日本語" />
        </div>

        <a 
          href="/#liên hệ"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              handleScroll('/#liên hệ');
            }
          }}
          className="hidden sm:block px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.12em] text-white transition-all rounded-[2px] bg-wood-dark hover:bg-wood shadow-sm active:scale-95 whitespace-nowrap"
        >
          {t('nav.book_now')}
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="p-2 lg:hidden text-wood hover:bg-be-light rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
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
              
              <div className="flex gap-5 p-4 items-center bg-be-soft rounded-sm mt-4">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-text-soft">Language:</span>
                <div className="flex gap-4">
                  <button onClick={() => { changeLanguage('vi'); setIsOpen(false); }}>
                     <img src="https://flagcdn.com/w40/vn.png" alt="VN" className={`w-8 h-auto ${i18n.language.startsWith('vi') ? 'scale-110 shadow-md' : 'grayscale opacity-50'}`} />
                  </button>
                  <button onClick={() => { changeLanguage('en'); setIsOpen(false); }}>
                     <img src="https://flagcdn.com/w40/us.png" alt="US" className={`w-8 h-auto ${i18n.language.startsWith('en') ? 'scale-110 shadow-md' : 'grayscale opacity-50'}`} />
                  </button>
                  <button onClick={() => { changeLanguage('jp'); setIsOpen(false); }}>
                     <img src="https://flagcdn.com/w40/jp.png" alt="JP" className={`w-8 h-auto ${i18n.language.startsWith('jp') ? 'scale-110 shadow-md' : 'grayscale opacity-50'}`} />
                  </button>
                </div>
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
