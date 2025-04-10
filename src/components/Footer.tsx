
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and Description */}
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Comanda<span className="text-primary">Top</span></span>
            </a>
            <p className="text-gray-400 mb-6">
              Transformando a gestão de restaurantes, bares e lanchonetes com tecnologia intuitiva e eficiente.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#funcionalidades" className="text-gray-400 hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#teste-gratis" className="text-gray-400 hover:text-primary transition-colors">Teste Grátis</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3" />
                <a href="mailto:contato@comandatop.com.br" className="text-gray-400 hover:text-primary transition-colors">
                  contato@comandatop.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <a href="tel:+55000000000" className="text-gray-400 hover:text-primary transition-colors">
                  (00) 0000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ComandaTop. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
