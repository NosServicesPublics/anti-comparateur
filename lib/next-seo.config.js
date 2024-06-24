const SITE_TITLE = 'Le comparateur des programmes (à renommer)'
const SITE_DESCRIPTION = 'Le comparateur des programmes (à renommer)'
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
    locale: 'en_IE',
    url: SITE_URL,
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;