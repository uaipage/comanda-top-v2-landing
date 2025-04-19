
import { useTranslation } from "@/hooks/use-translation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOProvider from "@/components/SEOProvider";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import seoConfig from "@/config/seo.config.ts";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactItems = [
    {
      icon: <Mail className="text-primary h-6 w-6" />,
      title: t('contact.email-title'),
      content: t('contact.email'),
      action: `mailto:${t('contact.email')}`,
      delay: 100
    },
    {
      icon: <Phone className="text-primary h-6 w-6" />,
      title: t('contact.phone-title'),
      content: t('contact.phone'),
      action: `tel:${t('contact.phone-link')}`,
      delay: 200
    },
    {
      icon: <MapPin className="text-primary h-6 w-6" />,
      title: t('contact.whatsapp-title'),
      content: t('contact.whatsapp'),
      action: `https://wa.me/${t('contact.whatsapp-link')}`,
      actionLabel: t('contact.whatsapp-button'),
      isWhatsApp: true,
      delay: 300
    },
  ];

  return (
    <>
      <SEOProvider
        title={seoConfig.pages.contact.title}
        description={seoConfig.pages.contact.description}
        keywords={seoConfig.pages.contact.keywords}
        ogImage={seoConfig.ogImage}
        ogUrl={seoConfig.ogUrl}
      />
      <Header />
      <main className="container-section min-h-[calc(100vh-200px)] py-10 md:py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t('contact.title')}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('contact.description')}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-10">
            <div className="flex items-center mb-6 animate-slide-up">
              <Clock className="text-primary mr-3 h-6 w-6" />
              <div>
                <h3 className="font-bold text-dark">{t('contact.hours-title')}</h3>
                <p className="text-gray-600">{t('contact.hours')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactItems.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-slide-up animate-delay-${item.delay}`}
                >
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="font-bold text-dark ml-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  {item.isWhatsApp ? (
                    <Button 
                      asChild
                      className="mt-auto self-start bg-[#25D366] hover:bg-[#20BD5C]"
                    >
                      <a href={item.action} target="_blank" rel="noopener noreferrer">
                        <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                          <path d="M5.2 22l1.4-5.2c-1.6-2.2-2.1-4.9-1.5-7.6.6-2.7 2.3-4.9 4.6-6.1 2.3-1.2 5.1-1.2 7.4 0 2.3 1.2 4 3.4 4.6 6.1.6 2.7 0 5.4-1.5 7.6s-4.2 3.6-7.1 3.6c-1.3 0-2.6-.2-3.8-.7L5.2 22zm11.5-6.2c0-.1-.1-.2-.2-.3l-2.4-1.1c-.1 0-.2 0-.3.1l-1.1 1.1c-.1.1-.2.1-.3.1-1.5-.5-2.7-1.7-3.2-3.2 0-.1 0-.2.1-.3l.8-1.4c0-.1 0-.2-.1-.3-1-.4-1.3-1.6-1.3-1.6 0-.1-.1-.2-.2-.3L7 9.5c-.1-.1-.3-.2-.4-.1-.7.5-1.1 1.3-1.1 2.1 0 3.5 2.9 6.4 6.4 6.4.8 0 1.6-.4 2.1-1.1.1-.1.1-.2 0-.4l-.7-2.6z" fillRule="nonzero"></path>
                        </svg>
                        {item.actionLabel}
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      asChild
                      variant="outline" 
                      className="mt-auto self-start text-primary border-primary hover:bg-primary hover:text-white"
                    >
                      <a href={item.action}>
                        {item.isWhatsApp ? "WhatsApp" : t('contact.contact-button')}
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
