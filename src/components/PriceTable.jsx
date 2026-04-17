import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';
import { useTranslation } from 'react-i18next';

const PriceTable = () => {
  const [activeTab, setActiveTab] = useState('body');
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('vi') ? 'vi' : i18n.language.startsWith('jp') ? 'jp' : i18n.language.startsWith('ko') ? 'ko' : i18n.language.startsWith('zh') ? 'zh' : 'en';

  return (
    <section id="bảng giá" className="px-6 py-24 lg:px-12 bg-be-soft">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start justify-between gap-6 mb-16 lg:items-end lg:flex-row"
      >
        <div>
          <div className="flex items-center gap-3 mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-text-soft font-medium">
            <span className="w-7 h-px bg-accent"></span>
            {t('prices.subtitle')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-light font-serif text-wood-dark">
            {t('prices.title_part1')} <em className="italic font-normal text-wood-light">{t('prices.title_italic')}</em>
          </h2>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="relative mb-12">
        <div className="flex border-b border-line overflow-x-auto no-scrollbar scroll-smooth">
          {Object.entries(menuData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 text-[0.8rem] uppercase tracking-[0.1em] transition-all border-b-2 font-medium whitespace-nowrap ${
                activeTab === key
                  ? 'border-wood text-wood'
                  : 'border-transparent text-text-soft hover:text-wood'
              }`}
            >
              {category.title[currentLang]}
            </button>
          ))}
        </div>
        {/* Swipe Hint for Mobile */}
        <div className="mt-2 text-[0.65rem] text-accent/60 uppercase tracking-widest text-right lg:hidden">
          {t('prices.swipe_hint')}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-16"
        >
          {menuData[activeTab].sections.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 className="mb-8 text-[0.75rem] lg:text-[0.8rem] uppercase tracking-[0.16em] text-accent font-semibold flex items-center gap-4">
                {section.subtitle[currentLang]}
                <span className="flex-1 h-px bg-line/50"></span>
              </h3>
              
              <div className="overflow-x-auto p-6 pb-4 scroll-smooth">
                <table className="w-full border-collapse min-w-[600px] lg:min-w-0">
                  <thead>
                    <tr className="text-[0.68rem] uppercase tracking-[0.15em] text-text-soft border-b border-line font-medium opacity-70">
                      <th className="pb-4 text-left font-medium">{t('prices.table.service')}</th>
                      <th className="px-6 pb-4 text-left font-medium">{t('prices.table.time')}</th>
                      <th className="px-6 pb-4 text-left font-medium">{t('prices.table.desc')}</th>
                      <th className="pb-4 text-right font-medium">{t('prices.table.price')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/30">
                    {section.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-be-light  transition-colors group">
                        <td className="py-8 pr-6">
                          <div className="font-medium text-text-dark flex items-center flex-wrap gap-2">
                            {item.name[currentLang]}
                            {item.badge && (
                              <span className="bg-wood text-white px-2 py-0.5 rounded-[2px] text-[0.6rem] uppercase tracking-wider font-bold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.highlight?.[currentLang] && (
                            <div className="text-[0.7rem] text-accent mt-2 italic opacity-90 max-w-xs">{item.highlight[currentLang]}</div>
                          )}
                        </td>
                        <td className="px-6 py-8 text-[0.85rem] text-text-mid whitespace-nowrap opacity-80">
                          {item.duration[currentLang].join(' / ')}
                        </td>
                        <td className="px-6 py-8 text-[0.8rem] text-text-soft max-w-sm leading-relaxed opacity-80">
                          {item.description[currentLang]}
                        </td>
                        <td className="py-8 text-right font-semibold text-wood whitespace-nowrap">
                          {item.price[currentLang]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default PriceTable;
