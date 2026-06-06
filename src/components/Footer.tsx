import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Send, MapPin, Facebook } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { useContent } from '../i18n';

export const Footer = () => {
  const content = useContent();
  const { navigate: navData, contactForm, company } = content.footer;
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Let normal navigation happen if it's a Link or manual if <a>
      } else {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="text-white pt-16 pb-10 relative overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}>
      {/* Structural pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-content-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Column 1: Addresses */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block pb-6">
              <img
                src="/images/logo-horizontal.png"
                alt="Freedom First Global"
                className="h-12 md:h-14 w-auto"
                loading="lazy"
              />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {company.offices.map((office) => (
                <div key={office.city} className="space-y-3">
                  <div className="flex items-center gap-2 text-red-freedom">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{office.city}</span>
                  </div>
                  <p dir={/[؀-ۿ]/.test(office.address) ? 'rtl' : 'ltr'} className="text-white/60 text-xs leading-relaxed whitespace-pre-line font-mono rtl:text-right">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigate & Socials */}
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-6">
              <h3 className="text-red-freedom text-xs font-bold uppercase tracking-[0.2em]">
                {navData.title}
              </h3>
              <nav className="flex flex-col gap-4">
                {navData.links.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      key={link.label} 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/70 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-4">
              <a 
                href={`mailto:${company.social.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-red-freedom transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">{company.social.email}</span>
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-[#0077b5] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-[#1877F2] transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Facebook</span>
              </a>
              <a
                href={company.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-black transition-colors">
                  <XIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">X</span>
              </a>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-5 space-y-8 lg:ps-12 lg:border-s lg:border-white/5">
            <h3 className="text-red-freedom text-xs font-bold uppercase tracking-[0.2em]">
              {contactForm.title}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactForm.fields.slice(0, 3).map((field) => (
                  <div key={field.name} className={field.name === 'company' ? 'sm:col-span-2' : ''}>
                    <input 
                      type={field.type}
                      placeholder={field.label}
                      className="w-full bg-blue-freedom/10 border border-white/10 px-6 py-4 text-sm rounded-2xl focus:border-red-freedom focus:ring-1 focus:ring-red-freedom/30 focus:outline-none transition-all placeholder:text-white/50"
                    />
                  </div>
                ))}
              </div>
              <div>
                <textarea 
                  placeholder={contactForm.fields[3].label}
                  rows={4}
                  className="w-full bg-blue-freedom/10 border border-white/10 px-6 py-4 text-sm rounded-2xl focus:border-red-freedom focus:ring-1 focus:ring-red-freedom/30 focus:outline-none transition-all placeholder:text-white/50 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center bg-red-freedom text-white px-10 py-4.5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-freedom/20 active:scale-[0.98] group"
              >
                {contactForm.cta}
                <Send className="ms-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:-scale-x-100" />
              </button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">
            © 2026 {company.name}. {content.ui.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
