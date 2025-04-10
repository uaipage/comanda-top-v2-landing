
import {
  Smartphone,
  Utensils,
  LayoutDashboard,
  CreditCard,
  BarChart3,
  Clock
} from "lucide-react";

const features = [
  {
    icon: <Smartphone size={36} className="text-primary" />,
    title: "Anote pedidos direto do celular",
    description: "Esqueça o papel! O garçom registra tudo em segundos, direto no app.",
    delay: "animate-delay-100"
  },
  {
    icon: <Utensils size={36} className="text-primary" />,
    title: "Pedidos enviados direto para a cozinha",
    description: "Mais agilidade, menos erros. O preparo começa na hora!",
    delay: "animate-delay-200"
  },
  {
    icon: <LayoutDashboard size={36} className="text-primary" />,
    title: "Controle completo de mesas e comandas",
    description: "Visualize ocupações, organize atendimentos e aumente a rotatividade.",
    delay: "animate-delay-300"
  },
  {
    icon: <CreditCard size={36} className="text-primary" />,
    title: "PDV online integrado",
    description: "Acompanhe vendas, lucros e desempenho em tempo real — de onde estiver.",
    delay: "animate-delay-100"
  },
  {
    icon: <BarChart3 size={36} className="text-primary" />,
    title: "Relatórios financeiros automáticos",
    description: "Análises detalhadas e gestão financeira simplificada para decisões mais inteligentes.",
    delay: "animate-delay-200"
  },
  {
    icon: <Clock size={36} className="text-primary" />,
    title: "Eficiência operacional",
    description: "Reduza o tempo de atendimento e aumente a satisfação dos clientes com processos otimizados.",
    delay: "animate-delay-300"
  }
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades que transformam seu negócio
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tudo o que você precisa para gerenciar seu estabelecimento de forma eficiente e lucrativa.
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
