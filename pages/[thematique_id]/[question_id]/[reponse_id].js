import Head from "next/head";

import thematiquesData from "../../../data/thematiques.json";
import questionsData from "../../../data/questions.json";
import reponsesData from "../../../data/reponses.json";

import {
  map,
  getThematiqueLabel,
  getQuestionName,
  findThematiqueById,
  findQuestionBySlug,
  getResponsePathParams,
  findQuestionReponse,
  getResponseAuthor,
  getResponseAbstract,
  getResponseContent,
  responseDetailsFields,
} from "@/lib/map.js";


export async function getStaticPaths() {
  const thematiquesMap = map(thematiquesData);
  const questionsMap = map(questionsData);
  return {
    paths: reponsesData.records.map((response) => {
      return {
        params: getResponsePathParams(response, thematiquesMap, questionsMap)
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = findThematiqueById(thematiquesData, params.thematique_id)
  const question = findQuestionBySlug(questionsData, params.question_id);
  const reponse = findQuestionReponse(reponsesData, question.id, params.reponse_id);
  return { props: { thematique, question, reponse } };
}

export default function ResponsePage({ thematique, question, reponse }) {
  return (
    <>
      <Head>
        <title>Réponse</title>
      </Head>
      <main>
        <h1>{getThematiqueLabel(thematique)}</h1>
        <h2>{getQuestionName(question)}</h2>
        <h3>Pour {getResponseAuthor(reponse)}</h3>
        <h4>{getResponseAbstract(reponse)}</h4>
        <div dangerouslySetInnerHTML={{
          __html: getResponseContent(reponse)
        }} />
        {responseDetailsFields.map((f) => {
          return (
            <fieldset key={f.key}>
              <legend>{f.name}</legend>
              <div>{reponse?.fields[f.key]}</div>
            </fieldset>
          )
        })}
        <fieldset>
          <legend>Analyse</legend>
          <div dangerouslySetInnerHTML={{
            __html: reponse?.fields.AnalyseHTML,
          }} />
        </fieldset>
      </main>
    </>
  );
}
