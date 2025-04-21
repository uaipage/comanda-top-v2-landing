import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from "@/hooks/use-translation.ts";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer" className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link className="inline-block mb-4" to="/">
              <span className="text-2xl font-bold">Comanda<span className="text-primary">Top</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-primary transition-colors"
                 href={t('comandatop.facebook')} aria-label="Facebook">
                <Facebook size={20}/>
              </a>
              <a className="text-gray-400 hover:text-primary transition-colors"
                 href={t('comandatop.instagram')} aria-label="Instagram">
                <Instagram size={20}/>
              </a>
              <a className="text-gray-400 hover:text-primary transition-colors"
                 href={t('comandatop.linkedin')} aria-label="LinkedIn">
                <Linkedin size={20}/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.useful-links')}</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href="#features">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href="#how-it-works">
                  {t('footer.how-it-works')}
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href="#plans">
                  {t('footer.plans')}
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href="#faq">
                  {t('footer.faq')}
                </a>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-primary transition-colors"
                      to="/free-trial">
                  {t('footer.free-trial')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href="#">
                  Suporte
                </a>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-primary transition-colors"
                      to="/privacidade">
                  {t('footer.privacy-policy')}
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-primary transition-colors"
                      to="/termos">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3"/>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href={`mailto:${t('comandatop.email')}`}>
                  {t('comandatop.email')}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3"/>
                <a className="text-gray-400 hover:text-primary transition-colors"
                   href={t('comandatop.phone.tel')}>
                  {t('comandatop.phone.format')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ComandaTop. {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link className="text-gray-500 hover:text-primary transition-colors"
                    to="/privacidade">
                {t('footer.privacy-policy')}
              </Link>
              <Link className="text-gray-500 hover:text-primary transition-colors"
                    to="/termos">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
