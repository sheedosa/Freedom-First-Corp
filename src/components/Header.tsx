import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { content } from '../content';
import { Logo } from './Logo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState(content.nav.languages.find(l => l.active)?.code || 'EN');
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = content.nav.items;

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const handleLangChange = (code: string, active: boolean) => {
    if (active) {
      setCurrentLang(code);
      setIsMobileLangOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 md:py-4 shadow-sm text-navy-deep' 
          : 'bg-transparent py-5 md:py-8 text-white'
      }`}
    >
      <div className="max-content-width flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/">
            <Logo variant={isScrolled ? 'color' : 'white'} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={item.href}
                className="flex items-center nav-link transition-colors duration-200 hover:text-red-freedom"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="ml-1 w-3 h-3 opacity-50" strokeWidth={3} />}
              </a>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-4 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
                    >
                      <div className="py-3 px-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-navy-deep rounded-xl hover:bg-red-freedom/10 hover:text-red-freedom transition-all duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="relative group">
            <button 
              className="flex items-center text-xs font-medium uppercase tracking-wider transition-colors duration-200"
            >
              <Globe className="mr-2 w-4 h-4 opacity-70" />
              {currentLang}
            </button>
            <div className="absolute right-0 mt-4 w-40 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="py-2 px-1">
                {content.nav.languages.map((lang) => (
                  <button 
                    key={lang.code} 
                    onClick={() => handleLangChange(lang.code, lang.active)}
                    className={`w-full relative px-4 py-2.5 flex items-center text-left rounded-xl ${!lang.active ? 'cursor-not-allowed opacity-50' : 'hover:bg-red-freedom/10'}`}
                    disabled={!lang.active}
                  >
                    <span className={`text-xs ${currentLang === lang.code ? 'text-red-freedom font-bold' : 'text-navy-deep'}`}>
                      {lang.label} ({lang.code})
                    </span>
                    {!lang.active && (
                      <span className="ml-auto text-[10px] bg-gray-100 px-1 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
 
          <a 
            href="#contact" 
            className="bg-red-freedom text-white px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-freedom/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            {content.nav.cta}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden p-3 -mr-3 touch-manipulation"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8 transition-colors duration-200" />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-navy-deep text-white h-[100dvh]"
          >
            <div className="flex flex-col h-full overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                <Logo variant="white" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  aria-label="Close menu"
                  className="p-3 -mr-3"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-10 space-y-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/5 pb-4">
                    <button 
                      onClick={() => item.dropdown ? toggleMobileItem(item.label) : setIsMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between text-left text-2xl font-bold uppercase tracking-tight active:text-red-freedom transition-all"
                    >
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <motion.div
                          animate={{ rotate: expandedMobileItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-6 h-6 opacity-50" />
                        </motion.div>
                      )}
                    </button>
                    
                    {item.dropdown && (
                      <AnimatePresence>
                        {expandedMobileItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-4 space-y-4 border-l border-white/20">
                              {item.dropdown.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block text-lg text-gray-400 active:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-8 border-t border-white/10 space-y-6 bg-black/40 shrink-0">
                {/* Mobile Language Switcher Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 text-sm font-bold tracking-widest"
                  >
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-red-freedom" />
                      <span>{content.nav.languages.find(l => l.code === currentLang)?.label || 'English'}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                  </button>
 
                  <AnimatePresence>
                    {isMobileLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-0 right-0 mb-4 bg-white text-navy-deep rounded-3xl shadow-2xl overflow-hidden p-2"
                      >
                        {content.nav.languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLangChange(lang.code, lang.active)}
                            disabled={!lang.active}
                            className={`w-full px-6 py-4 flex items-center justify-between text-left rounded-2xl ${!lang.active ? 'opacity-30' : 'active:bg-off-white'}`}
                          >
                            <span className={`text-sm font-bold uppercase ${currentLang === lang.code ? 'text-red-freedom' : ''}`}>
                              {lang.label}
                            </span>
                            {!lang.active && (
                              <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md">Coming soon</span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
 
                <a 
                  href="#contact"
                  className="block w-full bg-red-freedom text-white text-center py-5 text-lg font-bold uppercase tracking-widest rounded-2xl active:scale-[0.98] transition-transform shadow-xl shadow-red-freedom/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {content.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
