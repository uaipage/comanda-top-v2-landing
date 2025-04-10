
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/Faq';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadPopup from '@/components/LeadPopup';
import SEOProvider from '@/components/SEOProvider';
import seoConfig from '@/config/seo.config';

const Index = () => {
  useEffect(() => {
    // Initialize tracking or other functionality if needed
    console.log('Landing page loaded');
  }, []);

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
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </>
  );
};

export default Index;
