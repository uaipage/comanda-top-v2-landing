import { useState, useEffect } from 'react';
import { Edit, Printer, QrCode, RefreshCcw, Smartphone } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation.ts';


const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Edit className="w-6 h-6"/>,
      title: t('how-it-works.steps.0.title'),
      description: t('how-it-works.steps.0.description'),
    },
    {
      icon: <QrCode className="w-6 h-6"/>,
      title: t('how-it-works.steps.1.title'),
      description: t('how-it-works.steps.1.description'),
    },
    {
      icon: <Printer className="w-6 h-6"/>,
      title: t('how-it-works.steps.2.title'),
      description: t('how-it-works.steps.2.description'),
    },
    {
      icon: <Smartphone className="w-6 h-6"/>,
      title: t('how-it-works.steps.3.title'),
      description: t('how-it-works.steps.3.description'),
    },
    {
      icon: <RefreshCcw className="w-6 h-6"/>,
      title: t('how-it-works.steps.4.title'),
      description: t('how-it-works.steps.4.description'),
    }
  ];

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev < steps.length ? prev + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-white to-primary-bg">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('how-it-works.title')}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('how-it-works.subtitle')}
            </p>
          </div>
        </div>


        {/* Steps Desktop */}
        <div className="hidden md:block relative mt-20">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-8 h-1 bg-gray-200 z-0"></div>

          {/* Steps */}
          <div className="relative z-10 flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-1/5"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeStep === index ? 'bg-primary text-white scale-110' : 'bg-white text-primary border-2 border-primary'
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className={`text-center transition-all duration-300 ${
                  activeStep === index ? 'opacity-100 transform scale-105' : 'opacity-70'
                }`}>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Mobile */}
        <div className="md:hidden mt-12 space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                activeStep === index ? 'bg-white shadow-md' : ''
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  activeStep === index ? 'bg-primary text-white' : 'bg-white text-primary border-2 border-primary'
                }`}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mt-12 md:mt-20 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              onClick={() => setActiveStep(index)}
              aria-label={`Step ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
