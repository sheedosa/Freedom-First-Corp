import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt=""
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
                <span className="text-xs font-mono tracking-[0.3em] text-red-freedom uppercase">
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
          alt=""
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
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                Direct Contact
              </span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-[-0.02em] leading-[0.95]">
              Freedom First Global
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* HQ Address */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Headquarters
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line font-mono">
                {`Freedom First Headquarters
2700 Research Forest Dr. Suite 105
The Woodlands, Texas 77381
United States of America`}
              </p>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Contact via Email
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@freedomfirstglobal.com"
                    className="text-white hover:text-red-freedom transition-colors text-sm md:text-base font-mono break-all"
                  >
                    info@freedomfirstglobal.com
                  </a>
                </div>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">
                    Media & Press
                  </p>
                  <a
                    href="mailto:media@freedomfirstglobal.com"
                    className="text-white hover:text-red-freedom transition-colors text-sm md:text-base font-mono break-all"
                  >
                    media@freedomfirstglobal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Global Footprint */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom text-[10px] font-bold tracking-[0.3em] uppercase">
                  Global Operating Footprint
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
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
