
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "É necessário internet para utilizar o ComandaTop?",
    answer: "Sim, o ComandaTop funciona com conexão à internet, mas possui sistema de cache que permite operações básicas mesmo com conexão intermitente. Recomendamos uma conexão Wi-Fi estável para melhor desempenho."
  },
  {
    question: "Em quantos celulares posso instalar o aplicativo?",
    answer: "O ComandaTop pode ser instalado em quantos dispositivos forem necessários para seu estabelecimento, sem custo adicional. Cada garçom pode ter seu próprio acesso com perfil personalizado."
  },
  {
    question: "O sistema funciona para bares, restaurantes e lanchonetes?",
    answer: "Sim! O ComandaTop foi desenvolvido para atender diversos tipos de estabelecimentos: restaurantes, bares, lanchonetes, cafeterias, food trucks e similares."
  },
  {
    question: "Preciso comprar algum equipamento específico?",
    answer: "Não é necessário nenhum equipamento especial. O ComandaTop funciona em smartphones Android e iOS, tablets e computadores que você já possui. Para impressão, é compatível com impressoras térmicas comuns."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte técnico por chat, WhatsApp e e-mail, com atendimento 7 dias por semana. Clientes dos planos premium também contam com suporte telefônico prioritário."
  },
  {
    question: "O sistema divide contas entre clientes?",
    answer: "Sim, o ComandaTop permite divisão de contas de diversas formas: em partes iguais, por consumo individual ou personalizado. Tudo de forma rápida e sem complicações."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");
  
  return (
    <section id="faq" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o ComandaTop e descubra como ele pode ajudar seu negócio.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" value={openItem || undefined} onValueChange={(val) => setOpenItem(val)}>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg shadow-sm border-none overflow-hidden">
                <AccordionTrigger className="hover:no-underline px-6 py-4 font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
