import { memo, lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useContent } from '../i18n';

type Country = {
  id: string;
  name: string;
  brief: string;
  coordinates: number[];
};

// Home base highlighted on the map (visual only — no label, not interactive).
// Matched against geo.properties.name lowercased, like the country ids.
const HOME_IDS = ['united states of america'];
const HOME_FILL = 'rgba(215,38,56,0.65)';

const WorldMap = lazy(() => Promise.all([
  import('react-simple-maps'),
  import('world-atlas/countries-110m.json')
]).then(([rsm, geoData]) => {
  return {
    default: memo(({ countries, selectedId, onSelect }: { countries: Country[]; selectedId: string | null; onSelect: (id: string | null) => void }) => (
      <rsm.ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 215,
          center: [0, 0]
        }}
        className="w-full h-full opacity-90"
      >
        <rsm.Geographies geography={geoData.default || geoData}>
          {({ geographies }) =>
            geographies.map((geo: any) => {
              // Match on the stable English id (lowercased map name) so country
              // highlighting works in every locale, even when c.name is localized.
              const geoName = (geo.properties.name || '').toLowerCase();
              const country = countries.find(c => c.id === geoName || c.name === geo.properties.name);
              const isHighlighted = !!country;
              const isActive = country && selectedId === country.id;
              const dimmed = isHighlighted && selectedId !== null && !isActive;
              // Home base (USA): same red as markets, non-interactive, label-free.
              const isHome = !isHighlighted && HOME_IDS.includes(geoName);
              const fill = isActive
                ? 'rgba(215,38,56,0.95)'
                : isHighlighted
                  ? (dimmed ? 'rgba(215,38,56,0.35)' : 'rgba(215,38,56,0.65)')
                  : isHome
                    ? HOME_FILL
                    : 'rgba(255,255,255,0.03)';
              return (
                <rsm.Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={isHighlighted || isHome ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={isActive ? 1 : 0.5}
                  onClick={isHighlighted && country ? () => onSelect(isActive ? null : country.id) : undefined}
                  onMouseEnter={isHighlighted && country ? () => onSelect(country.id) : undefined}
                  style={{
                    default: {
                      outline: 'none',
                      fill,
                      cursor: isHighlighted ? 'pointer' : 'default',
                      transition: 'fill 0.3s ease, stroke-width 0.3s ease'
                    },
                    hover: {
                      outline: 'none',
                      fill: isHighlighted ? 'rgba(215,38,56,0.95)' : isHome ? HOME_FILL : 'rgba(255,255,255,0.08)',
                      cursor: isHighlighted ? 'pointer' : 'default'
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </rsm.Geographies>

      </rsm.ComposableMap>
    ))
  };
}));

export const ServiceMap = () => {
  const content = useContent();
  const { header, message, countries, cta, ctaLink, legendLabel } = content.whereWeDoIt;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = countries.find(c => c.id === selectedId) || null;

  const messageParts = message.split('to deliver results');
  const accentClause = messageParts.length > 1 ? `to deliver results ${messageParts[1]}` : '';
  const firstPart = messageParts[0];

  return (
    <section id="how-we-work" className="flex flex-col lg:flex-row w-full min-h-[60vh] md:min-h-[70vh]">

      {/* Dark Side - Content */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        {/* Corner glow */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-freedom/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative">
          {!selected ? (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-white/60 font-mono uppercase tracking-[0.3em] text-[10px]">
                  {content.ui.serviceMapEyebrow}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[0.95] mb-6 md:mb-8 uppercase text-white tracking-[-0.02em]">
                {header}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-medium">
                {firstPart}
                {accentClause && (
                  <span className="text-red-freedom font-bold">
                    {accentClause}
                  </span>
                )}
              </p>
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center bg-white text-navy-deep px-7 py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-white/90 group"
              >
                {cta}
                <ArrowRight className="ms-3 w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100" />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="flex items-center gap-2 text-white/50 hover:text-red-freedom transition-colors text-[10px] font-mono uppercase tracking-[0.3em] mb-6"
              >
                <ArrowLeft className="w-3 h-3 rtl:-scale-x-100" />
                {content.ui.serviceMapAll}
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono uppercase tracking-[0.3em] text-[10px]">
                  {content.ui.serviceMapActive} · {selected.id.slice(0, 3)}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display leading-[0.95] mb-6 uppercase text-white tracking-[-0.02em]">
                {selected.name}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-medium">
                {selected.brief}
              </p>
              <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.25em]">
                <span>Lat {selected.coordinates[1].toFixed(2)}°</span>
                <span className="w-1 h-1 bg-red-freedom rounded-full" />
                <span>Lng {selected.coordinates[0].toFixed(2)}°</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Dark Side - Map */}
      <div className="w-full lg:w-1/2 bg-navy-deep relative flex flex-col justify-center bg-gradient-to-tr from-navy-deep via-navy-deep to-blue-freedom/20 border-l border-white/5 py-16 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        <div className="relative w-full aspect-[4/3] max-w-3xl lg:max-w-[110%] lg:-mx-[5%] mx-auto">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-red-freedom border-t-transparent animate-spin" /></div>}>
            <WorldMap countries={countries} selectedId={selectedId} onSelect={setSelectedId} />
          </Suspense>

          <div className="absolute bottom-8 right-8 text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase select-none flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-red-freedom animate-pulse" />
            {legendLabel}
          </div>

          <div className="absolute top-[12%] left-[60%] -translate-x-1/2 text-[9px] text-white/40 font-mono tracking-[0.2em] uppercase select-none hidden md:flex items-center gap-2">
            <span>{content.ui.serviceMapHover}</span>
          </div>
        </div>
      </div>

    </section>
  );
};
