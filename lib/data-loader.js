import thematiquesData from "../data/thematiques.json";
import questionsData from "../data/questions.json";
import reponsesData from "../data/reponses.json";

import {
  getQuestionThematiqueId,
  getQuestionId,
  getThematiqueId,
} from "@/lib/data-mappings";

thematiquesData.records
  ?.sort((a, b) => {
    return getThematiqueId(a) - getThematiqueId(b);
  })

questionsData.records.sort((a, b) => {
  if (getQuestionThematiqueId(a) < getQuestionThematiqueId(b)) {
    return -1
  }
  return getQuestionId(a) > getQuestionId(b)
});

questionsData.records.forEach((question, index) => {
  question.number = index + 1;
});

const data = {
  thematiques: thematiquesData.records,
  questions: questionsData.records,
  responses: reponsesData.records,
}

export default data;
