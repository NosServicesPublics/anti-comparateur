const SITE_TITLE = 'Le comparateur des programmes'
const SITE_DESCRIPTION = 'Au travers d’une trentaine de questions concrètes, nous avons passé au crible les propositions de ces élections législatives pour savoir ce qu’elles changeraient pour vous au quotidien.'
const SITE_URL = 'https://comparateur.nosservicespublics.fr/'

const config = {
  titleTemplate: `%s | ${SITE_TITLE}`,
  defaultTitle: SITE_TITLE,
  description: SITE_DESCRIPTION,
  canonical: SITE_URL,
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
    /** @todo */
    // images: [{
    //   url: 'https://www.example.ie/og-image.jpg',
    //   width: 800,
    //   height: 600,
    //   alt: 'Og Image Alt',
    // }]
  },
  twitter: {
    handle: '@nosservicespub',
    site: '@nosservicespub',
    cardType: 'summary_large_image',
  },
};

export default config;