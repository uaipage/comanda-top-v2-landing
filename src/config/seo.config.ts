
interface SEOConfig {
  siteName: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogUrl: string;
}

export const seoConfig: SEOConfig = {
  siteName: 'ComandaTop',
  title: 'ComandaTop - Sistema para Restaurantes, Bares e Lanchonetes',
  description: 'Sistema de gestão para restaurantes, bares e lanchonetes. Comanda digital, PDV online, controle de mesas e relatórios financeiros em tempo real.',
  keywords: 'comanda digital, sistema para restaurante, PDV online, app de garçom, gestão de bares, sistema de mesas, comanda eletrônica',
  ogImage: 'https://comandatop.com.br/og-image.jpg',
  ogUrl: 'https://comandatop.com.br',
};

export default seoConfig;
