import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';
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
        title="Contact"
        description="Engage the engineers behind high-yield production. Connect with Freedom First Global to diagnose constraints, engineer solutions and get stalled production moving. Offices in The Woodlands, Texas and Abu Dhabi, UAE."
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
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
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
                  Contact
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                Engage the Engineers Behind High-Yield Production
              </h1>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
                Connect with our team today to diagnose your constraints, engineer the solution, and get stalled production moving.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Intake Form */}
      <section className="bg-white py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">
                  Initiate Contact
                </span>
                <div className="w-10 h-[1px] bg-red-freedom" />
              </div>
              <h2 className="text-navy-deep text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-[-0.02em] leading-[0.95] mb-6">
                The Freedom First Intake Form
              </h2>
              <p className="text-navy-deep/75 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Submit your operational requirements below. We review all serious inquiries and deploy around the world to diagnose constraints and execute solutions on the ground.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6"
            >
              {/* Left column */}
              <div className="space-y-6">
                <Field label="First & Last Name" value={form.name} onChange={update('name')} required />
                <Field label="Company / Organization" value={form.company} onChange={update('company')} required />
                <Field label="Official Title" value={form.title} onChange={update('title')} />
                <Field label="Email" type="email" value={form.email} onChange={update('email')} required />
                <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} />
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <Field label="Asset / Project Location" value={form.location} onChange={update('location')} />

                <div>
                  <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    Operational Objective
                  </label>
                  <select
                    value={form.objective}
                    onChange={(e) => update('objective')(e.target.value)}
                    className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23001E3C' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25em',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="">— Select objective —</option>
                    <option value="Upstream: Production Optimization & Recovery">
                      Upstream: Production Optimization & Recovery
                    </option>
                    <option value="Midstream: Infrastructure & Flow Acceleration">
                      Midstream: Infrastructure & Flow Acceleration
                    </option>
                    <option value="Downstream: Yield Optimization & Reliability">
                      Downstream: Yield Optimization & Reliability
                    </option>
                    <option value="Trading & Logistics: Market Access & Physical Offtake">
                      Trading & Logistics: Market Access & Physical Offtake
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    Define the Core Challenge
                  </label>
                  <textarea
                    value={form.challenge}
                    onChange={(e) => update('challenge')(e.target.value)}
                    rows={6}
                    placeholder="Provide a brief overview of the operational bottleneck or commercial constraint you need resolved..."
                    className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors resize-none placeholder:text-navy-deep/40"
                  />
                </div>
              </div>

              <div className="md:col-span-2 flex justify-center pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-red-freedom text-white px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-freedom/30"
                >
                  Initiate Contact
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-14 md:py-24 text-white relative overflow-hidden">
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
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            {/* Small brand spec line above the title */}
            <p className="text-white/35 font-mono text-[10px] tracking-[0.3em] uppercase mb-5">
              Freedom First Global
            </p>

            {/* Eyebrow with double red rule */}
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                Direct Contact
              </span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>

            {/* Primary heading — action-oriented */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-[-0.02em] leading-[0.95] mb-5">
              Reach Our Team Directly
            </h2>

            {/* Subtitle framing what the 3 cards below are for */}
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Our Houston headquarters, two direct inboxes, and the global operating presence behind every deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {/* HQ Address */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 left-6 md:left-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Headquarters
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  The Woodlands, TX
                </h3>
              </div>

              <address className="not-italic text-white/80 text-sm md:text-[15px] leading-relaxed">
                <p>2700 Research Forest Dr.</p>
                <p>Suite 105</p>
                <p className="mt-2">The Woodlands, Texas 77381</p>
                <p className="text-white/55">United States of America</p>
              </address>

              <a
                href="https://maps.google.com/?q=2700+Research+Forest+Dr+Suite+105+The+Woodlands+TX+77381"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 inline-flex items-center gap-2 text-white/55 hover:text-red-freedom text-[10px] font-bold uppercase tracking-[0.25em] transition-colors w-fit"
              >
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Email */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 left-6 md:left-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <Mail className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Email
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  Get in Touch
                </h3>
              </div>

              <a
                href="mailto:info@freedomfirstglobal.com"
                className="group/email block py-2 border-l-2 border-white/15 hover:border-red-freedom pl-3 transition-colors"
              >
                <p className="text-white/45 text-[10px] uppercase tracking-[0.25em] mb-1 font-bold">
                  General Inquiries
                </p>
                <p className="text-white group-hover/email:text-red-freedom transition-colors text-sm md:text-[15px] font-mono break-all">
                  info@freedomfirstglobal.com
                </p>
              </a>
            </div>

            {/* Global Footprint */}
            <div className="group relative flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl p-6 md:p-8 transition-colors duration-300">
              <div className="absolute top-0 left-6 md:left-8 -translate-y-1/2 w-12 h-12 rounded-xl bg-red-freedom flex items-center justify-center shadow-lg shadow-red-freedom/30">
                <Globe className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <div className="mt-4 mb-5">
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Operating Footprint
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mt-2">
                  Deployed Globally
                </h3>
              </div>

              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">
                Freedom First deploys engineers and operators globally. Whether assets are located in mature domestic basins or the world's most logistically challenging emerging markets, we bring the execution directly to the wellhead.
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
