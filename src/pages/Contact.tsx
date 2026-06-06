import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';
import { useContent, useLanguage } from '../i18n';
import { Seo, SITE_URL, SITE_NAME, canonicalFor, breadcrumbLd } from '../seo';

type FormState = {
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  objective: string;
  challenge: string;
};

const initialForm: FormState = {
  name: '',
  company: '',
  title: '',
  email: '',
  phone: '',
  location: '',
  objective: '',
  challenge: '',
};

export const Contact = () => {
  const content = useContent();
  const cp = content.contactPage;
  const { locale } = useLanguage();
  const isRtl = locale === 'ar';
  const [form, setForm] = useState<FormState>(initialForm);

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Freedom First Intake Form';
    const body = [
      `Name: ${form.name}`,
      `Company / Organization: ${form.company}`,
      `Official Title: ${form.title}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Asset / Project Location: ${form.location}`,
      `Operational Objective: ${form.objective}`,
      '',
      'Core Challenge:',
      form.challenge,
    ].join('\n');

    const mailto = `mailto:info@freedomfirstglobal.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      <Seo
        path="/contact"
        title={content.seo.contact.title}
        description={content.seo.contact.description}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact | Freedom First Global',
            url: canonicalFor('/contact'),
            mainEntity: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              email: 'info@freedomfirstglobal.com',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: '2700 Research Forest Dr. Suite 105',
                  addressLocality: 'The Woodlands',
                  addressRegion: 'TX',
                  postalCode: '77381',
                  addressCountry: 'US',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: '811N, Floor 8, Tamouh Tower, Al Reem Island',
                  addressLocality: 'Abu Dhabi',
                  addressCountry: 'AE',
                },
              ],
            },
          },
          breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[38vh] flex items-center pt-28 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Freedom First Global energy operations site"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep/90" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">
                  {cp.eyebrow}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-4">
                {cp.title}
              </h1>
              <p className="text-off-white/80 text-base leading-relaxed max-w-xl opacity-90">
                {cp.subhead}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Intake Form */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">
                  {cp.formEyebrow}
                </span>
              </div>
              <h2 className="block text-navy-deep text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-[-0.02em] leading-[0.95]">
                {cp.formHeading}
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6"
            >
              {/* Left column */}
              <div className="space-y-6">
                <Field label={cp.fields.name} value={form.name} onChange={update('name')} required />
                <Field label={cp.fields.company} value={form.company} onChange={update('company')} required />
                <Field label={cp.fields.title} value={form.title} onChange={update('title')} />
                <Field label={cp.fields.email} type="email" value={form.email} onChange={update('email')} required />
                <Field label={cp.fields.phone} type="tel" value={form.phone} onChange={update('phone')} />
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <Field label={cp.fields.location} value={form.location} onChange={update('location')} />

                <div>
                  <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {cp.fields.objective}
                  </label>
                  <select
                    value={form.objective}
                    onChange={(e) => update('objective')(e.target.value)}
                    className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23001E3C' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: isRtl ? 'left 1rem center' : 'right 1rem center',
                      backgroundSize: '1.25em',
                      paddingInlineEnd: '2.5rem',
                    }}
                  >
                    <option value="">{cp.objectivePlaceholder}</option>
                    {cp.objectiveOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {cp.fields.challenge}
                  </label>
                  <textarea
                    value={form.challenge}
                    onChange={(e) => update('challenge')(e.target.value)}
                    rows={6}
                    placeholder={cp.challengePlaceholder}
                    className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors resize-none placeholder:text-navy-deep/40"
                  />
                </div>
              </div>

              <div className="md:col-span-2 flex justify-center pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-red-freedom text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-freedom/30"
                >
                  {cp.submit}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:-scale-x-100" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-12 md:py-16 text-white relative overflow-hidden">
        {/* HQ office image with FF gradient overlay */}
        <img
          src="/images/office-hq.jpg"
          alt="Freedom First Global headquarters in The Woodlands, Texas"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,20,40,0.92) 0%, rgba(0,35,65,0.88) 45%, rgba(0,47,85,0.92) 100%)' }}
        />
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="mb-10 md:mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-10 h-[1px] bg-red-freedom" />
              <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                {cp.directEyebrow}
              </span>
            </div>
            <h2 className="block text-white text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-[-0.02em] leading-[0.95]">
              {cp.directHeading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {/* HQ Address */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 start-6 md:start-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  {cp.hqEyebrow}
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  {cp.hqCity}
                </h3>
              </div>

              <address className="not-italic text-white/80 text-sm md:text-[15px] leading-relaxed">
                <p dir="ltr" className="whitespace-pre-line rtl:text-right">{cp.hqAddress}</p>
                <p className="text-white/55 mt-2">{cp.hqCountry}</p>
              </address>

              <a
                href="https://maps.google.com/?q=2700+Research+Forest+Dr+Suite+105+The+Woodlands+TX+77381"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 inline-flex items-center gap-2 text-white/55 hover:text-red-freedom text-[10px] font-bold uppercase tracking-[0.25em] transition-colors w-fit"
              >
                {cp.getDirections}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Email */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 start-6 md:start-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <Mail className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  {cp.emailEyebrow}
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  {cp.emailHeading}
                </h3>
              </div>

              <a
                href="mailto:info@freedomfirstglobal.com"
                className="group/email block py-2 border-s-2 border-white/15 hover:border-red-freedom ps-3 transition-colors"
              >
                <p className="text-white/45 text-[10px] uppercase tracking-[0.25em] mb-1 font-bold">
                  {cp.generalInquiries}
                </p>
                <p className="text-white group-hover/email:text-red-freedom transition-colors text-sm md:text-[15px] font-mono break-all">
                  info@freedomfirstglobal.com
                </p>
              </a>
            </div>

            {/* Global Footprint */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 start-6 md:start-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <Globe className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  {cp.footprintEyebrow}
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  {cp.footprintHeading}
                </h3>
              </div>

              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">
                {cp.footprintText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

const Field = ({ label, value, onChange, type = 'text', required = false }: FieldProps) => (
  <div>
    <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
      {label}
      {required && <span className="text-red-freedom"> *</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors"
    />
  </div>
);
