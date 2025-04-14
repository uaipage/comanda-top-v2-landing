import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Comanda<span className="text-secondary">Top</span></span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('funcionalidades')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('header.features')}
          </button>
          <button 
            onClick={() => scrollToSection('como-funciona')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('header.how-it-works')}
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('header.faq')}
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="font-medium hover:text-primary transition-colors"
          >
            {t('header.contact')}
          </button>
          <Button 
            onClick={() => scrollToSection('teste-gratis')}
            className="bg-primary hover:bg-primary-light text-white font-semibold"
          >
            {t('header.free-trial')}
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-dark hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="font-medium py-2 hover:text-primary transition-colors"
            >
              {t('header.features')}
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="font-medium py-2 hover:text-primary transition-colors"
            >
              {t('header.how-it-works')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="font-medium py-2 hover:text-primary transition-colors"
            >
              {t('header.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="font-medium py-2 hover:text-primary transition-colors"
            >
              {t('header.contact')}
            </button>
            <Button 
              onClick={() => scrollToSection('teste-gratis')}
              className="bg-primary hover:bg-primary-light text-white font-semibold w-full"
            >
              {t('header.free-trial')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
