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
  return thematique.fields.Nom_technique;
}

export function getThematiqueLabel(thematique) {
  return thematique.fields.Nom;
}

export function getQuestionId(question) {
  return question.id;
}

export function isQuestionInThematique(question, thematique) {
  return question.fields.Thematique == thematique.id;
}

export function getQuestionAppLink(thematique, question) {
  return `${thematique.fields.Nom_technique}#question_${question.id}`;
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
