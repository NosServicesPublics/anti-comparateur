/**
 * Thematique fields
 */

export function getThematiqueId(thematique) {
  return thematique.id;
}

export function getThematiqueKey(thematique) {
  return thematique?.fields.Slug;
}

export function getThematiqueName(thematique) {
  return thematique?.fields.Nom;
}

export function getThematiquePathParams(thematique) {
  return {
    thematique_id: getThematiqueKey(thematique)
  }
}

export function getThematiquePageLink(thematique) {
  return `/${getThematiqueKey(thematique)}`;
}

export function findThematique(thematiquesRecords, thematiqueId) {
  return thematiquesRecords
    ?.find((thematique) => {
      return getThematiqueKey(thematique) === thematiqueId
    });
};

export function getThematiqueQuestions(questionRecords, thematiqueId) {
  return questionRecords
    ?.filter((question) => {
      return getQuestionThematiqueId(question) === thematiqueId
    }) || [];
}

/**
 * Question fields
 */

export function getQuestionId(question) {
  return question?.id;
}

export function getQuestionKey(question) {
  return question?.fields.Slug;
}

export function getQuestionName(question) {
  return question?.fields.Intitule;
}

export function findQuestion(questionsRecords, questionId) {
  return questionsRecords
    .find((question) => {
      return getQuestionKey(question) == questionId
    });
};

export function getQuestionThematiqueId(question) {
  return question?.fields.Thematique;
}

export function getQuestionPageLink(thematique, question) {
  return `/${getThematiqueKey(thematique)}#${getQuestionKey(question)}`;
}

export function getQuestionNumber(question) {
  return question?.number;
  // return getQuestionId(question);
}

export function sortQuestionsByNumber(questionA, questionB) {
  return getQuestionNumber(questionA) - getQuestionNumber(questionB);
}

export function formatQuestionNumber(number) {
  if (number < 10) {
    return `0${number}. `;
  } else {
    return `${number}. `;
  }
};

export function findResponse(responsesRecords, questionId, responseId) {
  return responsesRecords
    .find((response) => {
      return (
        getResponseAuthorKey(response) == responseId
        && getResponseQuestionId(response) == questionId
      );
    });
}

export function getResponses(responsesRecords, questionId) {
  return responsesRecords
    .filter((response) => {
      return (
        getResponseQuestionId(response) == questionId
      );
    });
}

export function getQuestionMapResponses(questions, responsesRecords) {
  return questions
    ?.map((question) => {
      return {
        question_id: getQuestionId(question),
        responses: getResponses(responsesRecords, getQuestionId(question))
      }
    });
}

export function findQuestionMapResponses(responses, questionId) {
  return responses
    .find((response) => response.question_id == questionId)
    ?.responses;
}

/**
 * Response fields
 */

/**
 * Order matters here, it will be used to display the responses in the same order
 */

export const RESPONSES_AUTHORS = ['NFP', 'LREM', 'LR', 'RN']

export const authorsMap = {
  'NFP': 'le Nouveau Front Populaire',
  'RN': 'le Rn',
}

export function getResponseId(response) {
  return response.id;
}

export function getResponseAuthorName(response) {
  const key = getResponseAuthorKey(response);
  return authorsMap[key] || key;
}

export function getResponseAuthorKey(response) {
  return response?.fields.Qui;
}

export function getResponseAbstract(response) {
  return response?.fields.Chapo;
}

export function getResponseAbstractColor(response) {
  return response?.fields.Couleur;
}

export function getResponseContent(response) {
  return response?.fields.Texte_HTML;
}

export const responseDetailsFields = [
  {
    title: <>DANS LE <b>PROGRAMME DES LÉGISLATIVES 2024</b></>,
    key: "Programme_2024_HTML"
  },
  {
    title: <>DANS LE <b>PROGRAMME DES PRÉSIDENTIELLES 2022</b></>,
    key: "Programme_2022_HTML"
  },
  {
    title: <>DANS LES <b>VOTES ET ACTIONS ANTÉRIEURES</b></>,
    key: "Votes_HTML"
  },
  {
    title: <>DANS LES <b>DÉCLARATIONS PUBLIQUES ET AUTRES PROPOSITIONS FAITES</b></>,
    key: "Declarations_HTML"
  },
]

export function getResponseAnalysis(response) {
  return response?.fields.Analyse_HTML;
}

export function getResponseThematiqueId(response) {
  return response?.fields.Thematique;
}

export function getResponseDetailsLink(thematique, question, response) {
  return `/${getThematiqueKey(thematique)}/${getQuestionKey(question)}/${getResponseAuthorKey(response)}`
}

export function getResponseThematique(response, thematiques) {
  return thematiques
    ?.find(thematique => {
      return getResponseThematiqueId(response) === getThematiqueId(thematique);
    }) || [];
}

export function getResponseQuestionId(response) {
  return response?.fields.Question;
}

export function getResponseQuestion(response, questions) {
  return questions
    ?.find(question => {
      return getQuestionId(question) === getResponseQuestionId(response);
    }) || [];
}

export function getResponsePathParams(response, thematiques, questions) {
  const thematique = getResponseThematique(response, thematiques)
  const question = getResponseQuestion(response, questions)
  return {
    thematique_id: getThematiqueKey(thematique),
    question_id: getQuestionKey(question),
    reponse_id: getResponseAuthorKey(response)
  }
}

export function sortResponsesByAuthor(responseA, responseB) {
  const authorA = getResponseAuthorKey(responseA);
  const indexA = RESPONSES_AUTHORS.indexOf(authorA);
  const authorB = getResponseAuthorKey(responseB);
  const indexB = RESPONSES_AUTHORS.indexOf(authorB);

  return indexA - indexB;
}