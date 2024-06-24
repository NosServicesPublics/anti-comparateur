/**
 * Order matters here, it will be used to display the responses in the same order
 */
export const RESPONSES_AUTHORS = ['NFP', 'LREM', 'LR', 'RN']

export const authorsMap = {
  'NFP': 'le Nouveau Front Populaire',
  'RN': 'le Rn',
}

export const SITE_TITLE = 'Le comparateur des programmes (à renommer)'

export const getPageTitle = (title) => `${title} | ${SITE_TITLE}`