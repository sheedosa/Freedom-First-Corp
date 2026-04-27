import { memo, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { content } from '../content';

const WorldMap = lazy(() => Promise.all([
  import('react-simple-maps'),
  import('world-atlas/countries-110m.json')
]).then(([rsm, geoData]) => {
  return {
    default: memo(({ countries }: { countries: any[] }) => (
      <rsm.ComposableMap 
        projection="geoEqualEarth" 
        projectionConfig={{
          scale: 160,
          center: [0, 0]
        }}
        className="w-full h-full opacity-90"
      >
        <rsm.Geographies geography={geoData.default || geoData}>
          {({ geographies }) =>
            geographies.map((geo: any) => {
              const isHighlighted = ["Libya", "Venezuela", "Somalia"].includes(geo.properties.name);
              return (
                <rsm.Geography 
                  key={geo.rsmKey} 
                  geography={geo} 
                  fill={isHighlighted ? "rgba(215,38,56,0.6)" : "rgba(255,255,255,0.03)"} 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", fill: isHighlighted ? "rgba(215,38,56,0.6)" : "rgba(255,255,255,0.03)" },
                    hover: { outline: "none", fill: isHighlighted ? "rgba(215,38,56,0.8)" : "rgba(255,255,255,0.08)" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </rsm.Geographies>

        {/* Map Pins with Tactical HUD Labels */}
        {countries.map((country: any, index: number) => {
          const isLeft = country.id === 'venezuela';
          const xOffset = isLeft ? -45 : 45;
          const yOffset = -25;
          
          return (
            <rsm.Marker key={country.id} coordinates={country.coordinates as [number, number]}>
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {/* Core Point */}
                <circle r={2} fill="#D72638" />
                
                {/* Pulsing Ring */}
                <motion.circle 
                  r={4} 
                  fill="transparent"
                  stroke="#D72638"
                  strokeWidth={0.5}
                  animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />

                {/* HUD Leader Line */}
                <motion.path
                  d={`M 0 0 L ${xOffset * 0.3} ${yOffset} L ${xOffset} ${yOffset}`}
                  fill="none"
                  stroke="#D72638"
                  strokeWidth={0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                />

                {/* HUD Label Box */}
                <motion.g
                  transform={`translate(${xOffset}, ${yOffset})`}
                  initial={{ opacity: 0, x: isLeft ? xOffset + 10 : xOffset - 10 }}
                  whileInView={{ opacity: 1, x: xOffset }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                >
                  <path 
                    d={isLeft 
                      ? "M -70 -12 L -5 -12 L 0 -7 L 0 12 L -70 12 Z" 
                      : "M 0 -12 L 65 -12 L 70 -7 L 70 12 L 0 12 Z"
                    }
                    fill="rgba(10, 25, 41, 0.9)"
                    stroke="#D72638"
                    strokeWidth={0.5}
                    opacity={0.8}
                  />
                  <text
                    x={isLeft ? -5 : 5}
                    y={-2}
                    textAnchor={isLeft ? "end" : "start"}
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "8px", 
                      fill: "white", 
                      fontWeight: "bold",
                      textTransform: "uppercase", 
                      letterSpacing: "1px" 
                    }}
                  >
                    {country.name}
                  </text>
                  <text
                    x={isLeft ? -5 : 5}
                    y={7}
                    textAnchor={isLeft ? "end" : "start"}
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "5px", 
                      fill: "rgba(255,255,255,0.5)", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.5px" 
                    }}
                  >
                    {country.id.slice(0, 3)}
                  </text>
                  <rect 
                    x={isLeft ? -70 : 66} 
                    y={-12} 
                    width="4" 
                    height="4" 
                    fill="#D72638" 
                    opacity="0.8" 
                  />
                </motion.g>
              </motion.g>
            </rsm.Marker>
          );
        })}
      </rsm.ComposableMap>
    ))
  };
}));

export const ServiceMap = () => {
  const { header, message, countries, cta, ctaLink } = content.whereWeDoIt;
  
  // Split the message to wrap the final clause
  const messageParts = message.split('to deliver results');
  const accentClause = messageParts.length > 1 ? `to deliver results ${messageParts[1]}` : '';
  const firstPart = messageParts[0];

  return (
    <section id="how-we-work" className="flex flex-col lg:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
      
      {/* Light Side - Content */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center pt-10 pb-20 lg:pt-20 lg:pb-32 px-6 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[1.5px] bg-red-freedom" />
            <span className="text-red-freedom uppercase tracking-[0.3em] font-bold text-[10px]">
              Global Operations
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display leading-[0.95] mb-8 md:mb-10 uppercase text-navy-deep tracking-tighter">
            {header}
          </h2>
          <p className="text-navy-deep/70 text-base md:text-lg leading-relaxed mb-10 font-medium">
            {firstPart}
            {accentClause && (
              <span className="text-navy-deep font-bold italic">
                {accentClause}
              </span>
            )}
          </p>
          <a 
            href={ctaLink}
            className="inline-flex items-center justify-center bg-navy-deep text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-black hover:shadow-xl shadow-navy-deep/20 group"
          >
            {cta}
            <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Dark Side - Map */}
      <div className="w-full lg:w-1/2 bg-navy-deep relative flex flex-col justify-center bg-gradient-to-tr from-navy-deep via-navy-deep to-blue-freedom/20 border-l border-white/5 pt-10 pb-20 sm:pt-16 sm:pb-32 lg:py-0 overflow-hidden">
        {/* Subtle Map Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-red-freedom border-t-transparent animate-spin" /></div>}>
            <WorldMap countries={countries} />
          </Suspense>
          
          <div className="absolute bottom-8 right-8 text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase select-none flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-red-freedom animate-pulse square-edges" />
             Strategic Sectors Online
          </div>
        </div>
      </div>

    </section>
  );
};
