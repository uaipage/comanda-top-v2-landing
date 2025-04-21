import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation.ts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Routes } from "@/constants/Routes.tsx";

const FAQ = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <section id={Routes.page.home.section.faq} className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" value={openItem || undefined}
                     onValueChange={(val) => setOpenItem(val)}>
            {faqItems.map((item, index) => (
              <AccordionItem className="bg-white mb-4 rounded-lg shadow-sm border-none overflow-hidden"
                             key={index} value={`item-${index}`}>
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


