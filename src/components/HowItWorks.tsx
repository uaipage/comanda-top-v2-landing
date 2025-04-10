
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Garçom anota o pedido",
    description: "Direto no celular, com agilidade e sem erros.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Pedido chega na cozinha",
    description: "Imediatamente e de forma organizada, sem ruídos na comunicação.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Cliente consome",
    description: "Enquanto isso, tudo é atualizado em tempo real na comanda.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
  },
  {
    id: 4,
    title: "Comanda é fechada no PDV",
    description: "Fechamento rápido, com divisão de conta sem dor de cabeça.",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Relatório é gerado automaticamente",
    description: "Visualize dados valiosos e tome decisões com mais segurança.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev < steps.length ? prev + 1 : 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Um fluxo ágil, do pedido ao pagamento — mais eficiência em cada etapa.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-light rounded-xl p-1">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                {steps.map((step) => (
                  <img
                    key={step.id}
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex ${
                    activeStep === step.id
                      ? 'bg-primary text-white'
                      : 'bg-light hover:bg-gray-200 cursor-pointer'
                  } rounded-lg p-6 transition-all duration-300`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === step.id 
                      ? 'bg-white text-primary' 
                      : 'bg-primary text-white'
                  }`}>
                    {activeStep === step.id ? <Check /> : step.id}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeStep === step.id ? '' : 'text-dark'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={activeStep === step.id ? 'text-white/90' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
