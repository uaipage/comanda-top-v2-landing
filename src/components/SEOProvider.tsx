
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const defaultValues = {
  title: 'ComandaTop - Sistema para Restaurantes, Bares e Lanchonetes',
  description: 'Sistema de gestão para restaurantes, bares e lanchonetes. Comanda digital, PDV online, controle de mesas e relatórios financeiros em tempo real.',
  keywords: 'comanda digital, sistema para restaurante, PDV online, app de garçom, gestão de bares, sistema de mesas, comanda eletrônica',
  ogImage: 'https://comandatop.com.br/og-image.jpg',
  ogUrl: 'https://comandatop.com.br',
};

const SEOProvider: React.FC<SEOProps> = ({
  title = defaultValues.title,
  description = defaultValues.description,
  keywords = defaultValues.keywords,
  ogImage = defaultValues.ogImage,
  ogUrl = defaultValues.ogUrl,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEOProvider;
