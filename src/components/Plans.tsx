import { Check } from 'lucide-react';
import { useTranslation } from "@/hooks/use-translation.ts";
import { Routes } from "@/constants/Routes.tsx";
import { Link } from "react-router-dom";

const Plans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      highlighted: false,
      title: t('plans.cards.free.title'),
      subtitle: t('plans.cards.free.subtitle'),
      currencySymbol: t('plans.cards.free.currencySymbol'),
      price: t('plans.cards.free.price'),
      button: t('plans.cards.free.button'),
      link: Routes.externalLinks.home_app.path,
      features: t('plans.cards.free.features', { returnObjects: true }) as string[]
    },
    {
      highlighted: true,
      title: t('plans.cards.professional.title'),
      subtitle: t('plans.cards.professional.subtitle'),
      currencySymbol: t('plans.cards.professional.currencySymbol'),
      price: t('plans.cards.professional.price'),
      button: t('plans.cards.professional.button'),
      link: Routes.externalLinks.planos.path,
      features: t('plans.cards.professional.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id={Routes.page.home.section.plans} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('plans.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('plans.subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div className={`w-full lg:w-1/2 bg-brand-bg rounded-2xl shadow-lg overflow-hidden animate-slide-up flex flex-col 
                ${plan.highlighted && "bg-gradient-to-br from-secondary to-secondary/80 relative text-white"}`}
                 key={index}>

              {plan.highlighted && (
                /* Popular Badge */
                <div className="absolute top-4 right-4 bg-primary text-sm font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="p-8 border-b border-gray-200 ">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">
                    {plan.currencySymbol + ' ' + plan.price}
                  </span>
                  <span className={`ml-1 ${plan.highlighted ? "text-white" : "text-gray-600"}`}>/mês</span>

                </div>
                <p className={`mt-4 ${plan.highlighted ? "text-white" : "text-gray-600"}`}>{plan.subtitle}</p>
              </div>

              <div className="p-8 flex flex-col flex-grow ">
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, index2) => (
                    <li className="flex items-start" key={index2}>
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="text-green-600"/>
                    </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">

                  <Link to={plan.link}>
                    <button className={`w-full ${plan.highlighted
                      ? "mt-8 bg-primary text-primary-foreground hover:bg-primary/90 btn-primary"
                      : "btn-outline"}`}>{plan.button}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600"> {t('plans.footer')} </p>
      </div>
    </section>
  );
};

export default Plans;