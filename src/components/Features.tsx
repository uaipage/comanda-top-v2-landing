import {
  Smartphone, Image as Imagei, Clock, MessageSquare, QrCodeIcon, Monitor
} from "lucide-react";
import { useTranslation } from '@/hooks/use-translation.ts';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <QrCodeIcon size={36} className="text-primary"/>,
      title: t('features.items.mobile-orders.title'),
      description: t('features.items.mobile-orders.description'),
      delay: "animate-delay-100"
    },
    {
      icon: <Clock size={36} className="text-primary"/>,
      title: t('features.items.kitchen-orders.title'),
      description: t('features.items.kitchen-orders.description'),
      delay: "animate-delay-200"
    },
    {
      icon: <Imagei size={36} className="text-primary"/>,
      title: t('features.items.table-management.title'),
      description: t('features.items.table-management.description'),
      delay: "animate-delay-300"
    },
    {
      icon: <Monitor size={36} className="text-primary"/>,
      title: t('features.items.pos.title'),
      description: t('features.items.pos.description'),
      delay: "animate-delay-100"
    },
    {
      icon: <Smartphone size={36} className="text-primary"/>,
      title: t('features.items.reports.title'),
      description: t('features.items.reports.description'),
      delay: "animate-delay-200"
    },
    {
      icon: <MessageSquare size={36} className="text-primary"/>,
      title: t('features.items.efficiency.title'),
      description: t('features.items.efficiency.description'),
      delay: "animate-delay-300"
    }
  ];

  return (
    <section id="features" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up ${feature.delay}`}
            >
              <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
