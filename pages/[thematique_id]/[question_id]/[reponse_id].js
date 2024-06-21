import Head from "next/head";

import thematiquesData from "../../../data/thematiques.json";
import questionsData from "../../../data/questions.json";
import reponsesData from "../../../data/reponses.json";

import Link from "next/link";

import {
  map,
  getThematiqueName,
  getQuestionName,
  findThematiqueById,
  findQuestionBySlug,
  getQuestionAppLink,
  getResponsePathParams,
  findQuestionReponse,
  getThematiqueKey,
  getResponseAuthor,
  getResponseAbstract,
  getResponseContent,
  getThematiqueAppLink,
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
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <>
      <Head>
        <title>Réponse</title>
      </Head>
      <main
        data-thematique-key={thematiqueKey}
      >
        <section className='main-column main-section'>
          <ul>
            <li>
              <Link href='/'>
                Accueil
              </Link>
            </li>
            <li>
              <Link href={getThematiqueAppLink(thematique)}>
                <span
                  data-thematique-key={thematiqueKey}
                >
                  {getThematiqueName(thematique)}
                </span>
              </Link>
            </li>
            <li>
              {getQuestionName(question)}
            </li>
          </ul>
          <section className='response-details'>
            <p><Link href={getQuestionAppLink(thematique, question)}>Retour à la question</Link></p>
            <h1>Détails pour {getResponseAuthor(reponse)}</h1>
            <div className='response-details__columns'>
              <div className='response-details__column'>
                {responseDetailsFields.map((f) => {
                  return (
                    <div
                      className='response-details__block'
                      key={f.key}>
                      <h3>{f.name}</h3>
                      <div>{reponse?.fields[f.key]}</div>
                    </div>
                  )
                })}
              </div>
              <div className='response-details__column'>
                <div className='response-details__block'>
                  <h3>Analyse</h3>
                  <div dangerouslySetInnerHTML={{
                    __html: reponse?.fields.AnalyseHTML,
                  }} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
