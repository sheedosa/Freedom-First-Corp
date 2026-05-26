import { Hero } from '../components/Hero';
import { CapabilitiesSection } from '../components/Capabilities';
import { ServiceMap } from '../components/ServiceMap';
import { Advantages } from '../components/Advantages';
import { Partnerships } from '../components/Partnerships';
import { FinalCta } from '../components/FinalCta';

export const Home = () => {
  return (
    <>
      <Hero />
      <CapabilitiesSection />
      <ServiceMap />
      <Advantages />
      <Partnerships />
      <FinalCta />
    </>
  );
};
