
interface SEOConfig {
  siteName: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogUrl: string;
  pages?: {
    [key: string]: {
      title: string;
      description: string;
      keywords: string;
    }
  }
}

export const seoConfig: SEOConfig = {
  siteName: 'ComandaTop',
  title: 'ComandaTop - Sistema para Restaurantes, Bares e Lanchonetes',
  description: 'Sistema de gestão para restaurantes, bares e lanchonetes. Comanda digital, PDV online, controle de mesas e relatórios financeiros em tempo real.',
  keywords: 'comanda digital, sistema para restaurante, PDV online, app de garçom, gestão de bares, sistema de mesas, comanda eletrônica',
  ogImage: 'https://comandatop.com.br/og-image.jpg',
  ogUrl: 'https://comandatop.com.br',
  pages: {
    register: {
      title: 'ComandaTop - Cadastre sua Conta | Cardápio Digital para Restaurantes',
      description: 'Crie sua conta gratuita no ComandaTop e comece a transformar a experiência dos seus clientes com um cardápio digital moderno e intuitivo.',
      keywords: 'cadastro comanda digital, criar cardápio digital, sistema para restaurante, PDV online, app de garçom'
    },
    contact: {
      title: 'ComandaTop - Entre em Contato | Suporte para Cardápio Digital',
      description: 'Precisa de ajuda com seu cardápio digital? Entre em contato com a equipe do ComandaTop para suporte técnico e informações sobre nossos planos.',
      keywords: 'contato restaurante tech, fale conosco cardápio digital, suporte PDV restaurante, atendimento comanda digital'
    }
  }
};

export default seoConfig;
