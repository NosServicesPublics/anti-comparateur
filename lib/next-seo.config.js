const SITE_TITLE = 'Le comparateur de programmes sur les services publics'
const SITE_DESCRIPTION = 'Au travers d’une trentaine de questions concrètes, nous avons passé au crible les propositions de ces élections législatives 2024 pour savoir ce qu’elles changeraient pour vous au quotidien.'
const SITE_URL = 'https://comparateur.nosservicespublics.fr/'

const config = {
  titleTemplate: `%s | ${SITE_TITLE}`,
  defaultTitle: SITE_TITLE,
  description: SITE_DESCRIPTION,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/img/nsp-favicon.png',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    title: SITE_TITLE,
    siteName: 'Collectif Nos Services Publics',
    description: SITE_DESCRIPTION,
    images: [{
      url: `${SITE_URL}img/nsp-seo-image-min.jpg`,
      width: 1200,
      height: 630,
      alt: 'Et concrétement ? Les programmes à l’épreuve de vos questions',
    }]
  },
  twitter: {
    handle: '@nosservicespub',
    site: '@nosservicespub',
    cardType: 'summary_large_image',
  },
};

export default config;