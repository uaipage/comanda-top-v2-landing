
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
import Plans from "@/components/Plans.tsx";

const Index = () => {
  return (
    <>
      <SEOProvider
        title={seoConfig.pages.index.title}
        description={seoConfig.pages.index.description}
        keywords={seoConfig.pages.index.keywords}
        ogImage={seoConfig.ogImage}
        ogUrl={seoConfig.ogUrl}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Plans />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
