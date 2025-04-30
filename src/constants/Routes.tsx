interface PageRoute {
  path: string;
  section?: { [key: string]: string };
}

interface ExternalLink {
  path: string;
}

interface RoutesConfig {
  page: { [key: string]: PageRoute; };
  externalLinks: { [key: string]: ExternalLink; };
}

export const Routes = {
  page: {
    home: {
      path: '/',
      section: {
        features: 'features',
        how_it_works: 'how-it-works',
        plans: 'plans',
        faq: 'faq',
      },
    },
    register: {
      path: '/register'
    },
    contact: {
      path: '/contato'
    },
    terms: {
      path: '/terms'
    },
    privacy: {
      path: '/privacy'
    },
  },

  externalLinks: {
    facebook: {
      path: 'https://www.facebook.com/'
    },
    instagram: {
      path: 'https://www.instagram.com/'
    },
    linkedin: {
      path: 'https://www.linkedin.com/'
    },
    login: {
      path: 'https://kc.comandatop.com.br/realms/comandatop/protocol/openid-connect/auth?client_id=comandatop-web-app-client&response_type=code&redirect_uri=https://app.comandatop.com.br/'
    },
    register: {
      path: 'https://kc.comandatop.com.br/realms/comandatop/protocol/openid-connect/auth?kc_action=register&client_id=comandatop-web-app-client&response_type=code&redirect_uri=https://app.comandatop.com.br/'
    }
  }
} as RoutesConfig;

export default { Routes };