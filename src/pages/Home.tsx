import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { CapabilitiesSection } from '../components/Capabilities';
import { IndustrialDivider } from '../components/IndustrialDivider';
import { ServiceMap } from '../components/ServiceMap';
import { Advantages } from '../components/Advantages';
import { Partnerships } from '../components/Partnerships';
import { FinalCta } from '../components/FinalCta';

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CapabilitiesSection />
      <IndustrialDivider label="Section 03 · Global Operations" />
      <ServiceMap />
      <Advantages />
      <Partnerships />
      <FinalCta />
    </>
  );
};
