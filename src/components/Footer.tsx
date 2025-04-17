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
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Comanda<span className="text-primary">Top</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href={t('comandatop.facebook')} className="text-gray-400 hover:text-primary transition-colors"
                 aria-label="Facebook">
                <Facebook size={20}/>
              </a>
              <a href={t('comandatop.instagram')} className="text-gray-400 hover:text-primary transition-colors"
                 aria-label="Instagram">
                <Instagram size={20}/>
              </a>
              <a href={t('comandatop.linkedin')} className="text-gray-400 hover:text-primary transition-colors"
                 aria-label="LinkedIn">
                <Linkedin size={20}/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.useful-links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.how-it-works')}
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.plans')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.faq')}
                </a>
              </li>
              <li>
                <Link to="/free-trial" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.free-trial')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {/*<li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>*/}
              {/*<li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Suporte</a></li>*/}
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.privacy-policy')}
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-primary transition-colors">
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
                <a href={`mailto:${t('comandatop.email')}`}
                   className="text-gray-400 hover:text-primary transition-colors">
                  {t('comandatop.email')}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3"/>
                <a href={t('comandatop.phone.tel')} className="text-gray-400 hover:text-primary transition-colors">
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
              <Link to="/privacidade" className="text-gray-500 hover:text-primary transition-colors">
                {t('footer.privacy-policy')}
              </Link>
              <Link to="/termos" className="text-gray-500 hover:text-primary transition-colors">
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
