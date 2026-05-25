import { memo, lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { content } from '../content';

type Country = {
  id: string;
  name: string;
  brief: string;
  coordinates: [number, number];
};

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
              const country = countries.find(c => c.name === geo.properties.name);
              const isHighlighted = !!country;
              const isActive = country && selectedId === country.id;
              const dimmed = isHighlighted && selectedId !== null && !isActive;
              const fill = isActive
                ? 'rgba(215,38,56,0.95)'
                : isHighlighted
                  ? (dimmed ? 'rgba(215,38,56,0.35)' : 'rgba(215,38,56,0.65)')
                  : 'rgba(255,255,255,0.03)';
              return (
                <rsm.Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={isHighlighted ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)'}
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
                      fill: isHighlighted ? 'rgba(215,38,56,0.95)' : 'rgba(255,255,255,0.08)',
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
                  Global Operations
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
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Operations log */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-[1px] bg-red-freedom" />
                  <span className="text-white/50 font-mono text-[10px] uppercase tracking-[0.3em]">
                    Active Operations
                  </span>
                </div>
                <div className="space-y-1">
                  {countries.map((country) => {
                    // Derive status from the first word of the brief
                    const statusMap: Record<string, string> = {
                      libya: 'Active',
                      venezuela: 'Advisory',
                      somalia: 'Greenfield',
                    };
                    const status = statusMap[country.id] || 'Active';
                    return (
                      <button
                        key={country.id}
                        onClick={() => setSelectedId(country.id)}
                        onMouseEnter={() => setSelectedId(country.id)}
                        className="group w-full flex items-center gap-4 py-3 px-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-freedom shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-white text-sm font-bold uppercase tracking-wider min-w-[80px] group-hover:text-red-freedom transition-colors">
                          {country.name}
                        </span>
                        <span className="text-white/35 font-mono text-[10px] uppercase tracking-[0.25em] shrink-0">
                          {status}
                        </span>
                        <span className="text-white/50 text-xs leading-relaxed hidden lg:block flex-1 truncate">
                          {country.brief.split(',')[0]}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-red-freedom group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
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
                <ArrowLeft className="w-3 h-3" />
                All Operations
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono uppercase tracking-[0.3em] text-[10px]">
                  Active · {selected.id.slice(0, 3)}
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
            {legendLabel || 'Our Operational Footprint'}
          </div>

          <div className="absolute bottom-8 left-8 text-[9px] text-white/30 font-mono tracking-[0.2em] uppercase select-none hidden md:flex items-center gap-2">
            <span>Hover highlighted regions for details</span>
          </div>
        </div>
      </div>

    </section>
  );
};
