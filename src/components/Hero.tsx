import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-light to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              {t('hero.headline')}
              <span className="text-primary"> {t('hero.subheadline')}</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
              <Button 
                onClick={() => scrollToSection('teste-gratis')} 
                className="btn-primary flex items-center gap-2"
              >
                {t('hero.cta-primary')}
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => scrollToSection('como-funciona')}
              >
                <PlayCircle size={18} />
                {t('hero.cta-secondary')}
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Garçom utilizando o sistema ComandaTop" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
