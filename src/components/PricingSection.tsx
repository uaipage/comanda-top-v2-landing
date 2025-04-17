import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos e Preços
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Simples, direto e sem pegadinhas. Experimente grátis. Depois escolha o plano ideal para o seu negócio.
            </p>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-8 mt-12 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="w-full lg:w-1/2 bg-brand-bg rounded-2xl shadow-lg overflow-hidden animate-slide-up">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Grátis</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              <p className="mt-4 text-gray-600">Perfeito para quem está começando</p>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-green-600"/>
                  </span>
                  <span>Até 10 pratos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-green-600"/>
                  </span>
                  <span>QR Code personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-green-600"/>
                  </span>
                  <span>Suporte via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-green-600"/>
                  </span>
                  <span>Painel de controle simples</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-green-600"/>
                  </span>
                  <span>Atualizações ilimitadas</span>
                </li>
              </ul>

              <button className="btn-outline w-full mt-9">
                Começar grátis
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div
            className="w-full lg:w-1/2 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-xl overflow-hidden animate-slide-up animate-delay-200 relative">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>

            <div className="p-8 border-b border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-2">Profissional</h3>
              <div className="flex items-end">
                <span className="text-4xl font-bold">R$ 29</span>
                <span className="ml-1">/mês</span>
              </div>
              <p className="mt-4 text-white/90">Recuros completos para seu negócio</p>
            </div>

            <div className="p-8 text-white">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-white p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-secondary"/>
                  </span>
                  <span>Itens ilimitados</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-secondary"/>
                  </span>
                  <span>Upload de fotos dos pratos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-secondary"/>
                  </span>
                  <span>Link customizado (ex: comandatop.com.br/suamarca)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-secondary"/>
                  </span>
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white p-1 rounded-full mr-3 mt-0.5">
                    <Check className="text-secondary"/>
                  </span>
                  <span>Todos os recursos do plano grátis</span>
                </li>
              </ul>

              <button className=" w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90  btn-primary ">
                Assinar agora
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600">Cancele quando quiser, sem burocracia.</p>
      </div>
    </section>
  );
};

export default PricingSection;