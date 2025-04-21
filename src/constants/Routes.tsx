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
  }
} as RoutesConfig;

export default { Routes };