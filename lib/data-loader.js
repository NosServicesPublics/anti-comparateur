import thematiquesData from "@/data/thematiques.json";
import questionsData from "@/data/questions.json";
import reponsesData from "@/data/reponses.json";

questionsData.records
  .forEach((question, index) => {
    question.number = index + 1;
  });

const data = {
  thematiques: thematiquesData.records,
  questions: questionsData.records,
  responses: reponsesData.records,
}

export default data;
