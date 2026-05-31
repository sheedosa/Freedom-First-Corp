import { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { CapabilitiesSection } from '../components/Capabilities';
import { Advantages } from '../components/Advantages';
import { Partnerships } from '../components/Partnerships';

// ServiceMap pulls in react-simple-maps + d3-geo + countries-110m JSON (~210 KB
// across chunks). Lazy-load it so the rest of the homepage renders first; map
// hydrates as the user scrolls toward it.
const ServiceMap = lazy(() =>
  import('../components/ServiceMap').then((m) => ({ default: m.ServiceMap }))
);

const ServiceMapFallback = () => (
  <div
    aria-hidden
    className="w-full min-h-[60vh] md:min-h-[70vh]"
    style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
  />
);

export const Home = () => {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <Suspense fallback={<ServiceMapFallback />}>
        <ServiceMap />
      </Suspense>
      <Advantages />
      <Partnerships />
    </>
  );
};
