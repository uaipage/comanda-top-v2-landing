
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL when the Index component mounts
    if (hash) {
      // Wait a bit for all components to fully render
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [hash]);

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
