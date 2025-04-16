
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOProvider from '@/components/SEOProvider';
import seoConfig from '@/config/seo.config';
import PricingSection from "@/components/PricingSection.tsx";

const Index = () => {
  return (
    <>
      <SEOProvider
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        ogImage={seoConfig.ogImage}
        ogUrl={seoConfig.ogUrl}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
