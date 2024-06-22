import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import QuestionBlock from "@/components/QuestionBlock";

import thematiquesData from "../../data/thematiques.json";
import questionsData from "../../data/questions.json";
import reponsesData from "../../data/reponses.json";

import {
  getThematiqueName,
  getQuestionId,
  getThematiquesPaths,
  findThematiqueById,
  getThematiqueQuestions,
  getThematiqueKey,
  partis,
} from "@/lib/map";

export async function getStaticPaths() {
  return {
    paths: getThematiquesPaths(thematiquesData),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = findThematiqueById(thematiquesData, params.thematique_id);
  const questions = getThematiqueQuestions(questionsData, thematique.id);

  const questionsMap = questions.reduce((a, v) => {
    a[v.id] = v;
    v.reponses = [];
    return a;
  }, {});

  const reponsesMap = reponsesData.records
    .filter((q) => q.fields.Thematique == thematique.id)
    .reduce((a, v) => {
      a[v.fields.Qui] = v;
      return a;
    }, {});

  partis.forEach((p) => {
    if (reponsesMap[p]) {
      questionsMap[reponsesMap[p].fields.Question].reponses.push(
        reponsesMap[p]
      );
    }
  });
  return { props: { thematique, questions } };
}

export default function ThematiquePage({ thematique, questions }) {
  const name = getThematiqueName(thematique);
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <main data-thematique-key={thematiqueKey}>
        <section className="main-column main-section">
          <Breadcrumb />
          <h1>{name}</h1>
          <div className="question-blocks">
            {questions?.map((question) => {
              return (
                <QuestionBlock
                  key={getQuestionId(question)}
                  question={question}
                  thematique={thematique}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
