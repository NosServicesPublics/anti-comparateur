
export const partis = ['NFP', 'LREM', 'LR', 'RN']

export const responseDetailsFields = [
  {
    name: "Programme 2024",
    key: "Programme_2024"
  },
  {
    name: "Programme 2022",
    key: "Programme_2022"
  },
  {
    name: "Votes",
    key: "Votes"
  },
  {
    name: "Déclarations",
    key: "Declarations"
  },
  {
    name: "Analyse",
    key: "AnalyseHTML"
  },
]

export const authorsMap = {
  'NFP': 'le Nouveau Front Populaire',
  'RN': 'le Rn',
}

export function map(gristResponse) {
  return gristResponse.records.reduce((a, v) => {
    a[v.id] = v;
    return a;
  }, {});
}

export function getQuestionName(question) {
  return question.fields.Intitule;
}

export function getThematiqueId(thematique) {
  return thematique.id;
}

export function getThematiqueKey(thematique) {
  return thematique.fields.Slug;
}

export function getThematiqueName(thematique) {
  return thematique.fields.Nom;
}

export function getQuestionSlug(question) {
  return question.fields.Slug;
}

export function getQuestionId(question) {
  return question.id;
}

export function isQuestionInThematique(question, thematique) {
  return question.fields.Thematique == thematique.id;
}

export function getQuestionAppLink(thematique, question) {
  return `/${thematique.fields.Slug}#question_${question.id}`;
}

export function getQuestionAppLink2(thematique, question) {
  return `/${thematique.fields.Slug}#question_${question.id}`;
}

export function getThematiqueAppLink(thematique) {
  return `${getThematiqueKey(thematique)}`;
}

/**
 * @todo Implement this function
 */
export function getQuestionNumber(question) {
  return 1;
}

export function formatQuestionNumber(number) {
  if (number < 10) {
    return `0${number}. `;
  } else {
    return `${number}. `;
  }
};

export function getResponseId(response) {
  return response.id;
}


export function getResponseAuthor(response) {
  const key = response.fields.Qui;
  return authorsMap[key] || key;
}

export function getResponseAbstract(response) {
  return response.fields.Chapo;
}

export function getResponseContent(response) {
  return response.fields.TexteHTML;
}

export function getResponseDetailsLink(thematique, question, response) {
  return `${thematique.fields.Slug}/${question.fields.Slug}/${response.fields.Qui}`
}

export const getThematiquesPaths = (thematiquesData) => {
  return thematiquesData.records
    .map((r) => {
      return {
        params: {
          thematique_id: r.fields.Slug
        }
      }
    });
};

export const findThematiqueById = (thematiquesData, thematiqueId) => {
  return thematiquesData.records
    .find((t) => {
      return t.fields.Slug == thematiqueId
    });
};

export const findQuestionBySlug = (questionsData, questionId) => {
  return questionsData.records
    .find((q) => {
      return q.fields.Slug == questionId
    });
}

export const getThematiqueQuestions = (questionsData, thematiqueId) => {
  return questionsData.records
    .filter((q) => {
      return q.fields.Thematique == thematiqueId
    });
}

export function findQuestionReponse(reponsesData, questionId, reponse_id) {
  return reponsesData.records.filter(
    (r) =>
      r.fields.Qui == reponse_id && r.fields.Question == questionId,
  )[0];
}

export const getResponsePathParams = (response, thematiquesMap, questionsMap) => {
  return {
    thematique_id: thematiquesMap[response.fields.Thematique].fields.Slug,
    question_id: questionsMap[response.fields.Question].fields.Slug,
    reponse_id: response.fields.Qui,
  }
}
