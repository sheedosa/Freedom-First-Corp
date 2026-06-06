import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../i18n';
import { Seo, SITE_URL, SITE_NAME, canonicalFor, breadcrumbLd } from '../seo';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Contact = () => {
  const content = useContent();
  const cp = content.contactPage;
  const [form, setForm] = useState<FormState>(initialForm);

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Website Enquiry — Freedom First Global';
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone Number: ${form.phone}`,
      '',
      'Message:',
      form.message,
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em]">
                {cp.title}
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Enquiry Form */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
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
              <p className="text-navy-deep/70 text-base md:text-lg leading-relaxed mt-5">
                {cp.formDescription}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6"
            >
              <Field label={cp.fields.name} value={form.name} onChange={update('name')} required />
              <Field label={cp.fields.email} type="email" value={form.email} onChange={update('email')} required />

              <div className="md:col-span-2">
                <Field label={cp.fields.phone} type="tel" value={form.phone} onChange={update('phone')} required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-navy-deep text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {cp.fields.message}
                  <span className="text-red-freedom"> *</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message')(e.target.value)}
                  required
                  rows={6}
                  className="w-full bg-white border-2 border-navy-deep/15 px-4 py-3.5 text-sm text-navy-deep rounded-lg focus:border-red-freedom focus:outline-none transition-colors resize-none placeholder:text-navy-deep/40"
                />
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
