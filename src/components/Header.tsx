
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation.ts';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from "@/constants/Routes.tsx";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isHomePage = location.pathname === Routes.page.home.path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Run once immediately to set correct initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to home page with hash
      window.location.href = `/${id === 'home' ? '' : '#' + id}`;
    }
  };

  const renderNavItem = (id: string, translationKey: string) => {
    if (isHomePage) {
      return (
        <button 
          className="font-medium hover:text-primary transition-colors"
          onClick={() => scrollToSection(id)}
        >
          {t(translationKey)}
        </button>
      );
    } else {
      return (
        <Link 
          to={`/#${id}`}
          className="font-medium hover:text-primary transition-colors"
        >
          {t(translationKey)}
        </Link>
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link className="flex items-center"
                to={Routes.page.home.path}>
            <span className="text-2xl font-bold text-primary">Comanda<span className="text-secondary">Top</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {renderNavItem(Routes.page.home.section.features, 'header.features')}
          {renderNavItem(Routes.page.home.section.how_it_works, 'header.how-it-works')}
          {renderNavItem(Routes.page.home.section.plans, 'header.plans')}
          {renderNavItem(Routes.page.home.section.faq, 'header.faq')}

          <Link className="font-medium hover:text-primary transition-colors"
                to={Routes.page.contact.path}>
            {t('header.contact')}
          </Link>

          <Link to={Routes.page.register.path}>
            <Button className="bg-primary hover:bg-primary-light text-white font-semibold">
              {t('header.free-trial')}
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-dark hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <button className="font-medium py-2 hover:text-primary transition-colors"
                        onClick={() => scrollToSection(Routes.page.home.section.features)}>
                  {t('header.features')}
                </button>

                <button className="font-medium py-2 hover:text-primary transition-colors"
                        onClick={() => scrollToSection(Routes.page.home.section.how_it_works)}>
                  {t('header.how-it-works')}
                </button>

                <button className="font-medium py-2 hover:text-primary transition-colors"
                        onClick={() => scrollToSection(Routes.page.home.section.plans)}>
                  {t('header.plans')}
                </button>

                <button className="font-medium py-2 hover:text-primary transition-colors"
                        onClick={() => scrollToSection(Routes.page.home.section.faq)}>
                  {t('header.faq')}
                </button>
              </>
            ) : (
              <>
                <Link className="font-medium py-2 hover:text-primary transition-colors"
                      to={`/#${Routes.page.home.section.features}`}>
                  {t('header.features')}
                </Link>

                <Link className="font-medium py-2 hover:text-primary transition-colors"
                      to={`/#${Routes.page.home.section.how_it_works}`}>
                  {t('header.how-it-works')}
                </Link>

                <Link className="font-medium py-2 hover:text-primary transition-colors"
                      to={`/#${Routes.page.home.section.plans}`}>
                  {t('header.plans')}
                </Link>

                <Link className="font-medium py-2 hover:text-primary transition-colors"
                      to={`/#${Routes.page.home.section.faq}`}>
                  {t('header.faq')}
                </Link>
              </>
            )}

            <Link className="font-medium py-2 hover:text-primary transition-colors"
                  to={Routes.page.contact.path}>
              {t('header.contact')}
            </Link>

            <Link to={Routes.page.register.path}>
              <Button className="bg-primary hover:bg-primary-light text-white font-semibold w-full">
                {t('header.free-trial')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
