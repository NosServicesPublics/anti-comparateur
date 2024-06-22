import Head from "next/head";
import Link from "next/link";

import { RiArrowDropRightLine } from "react-icons/ri";

import BackBreadcrumb from "@/components/BackBreadcrumb";
import ResponseDetailsBlock from "@/components/ResponseDetailsBlock";

import { getPageTitle } from "@/lib/constants";

import thematiquesData from "../../../data/thematiques.json";
import questionsData from "../../../data/questions.json";
import reponsesData from "../../../data/reponses.json";

import {
  map,
  getThematiqueName,
  getQuestionName,
  findThematiqueById,
  findQuestionBySlug,
  getQuestionPageLink,
  getResponsePathParams,
  findQuestionReponse,
  getThematiqueKey,
  getResponseAuthor,
  getResponseAnalysis,
  getThematiquePageLink,
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

const responseDetailsFields = [
  {
    title: <>DANS LE <b>PROGRAMME 2024</b></>,
    key: "Programme_2024"
  },
  {
    title: <>DANS LE <b>PROGRAMME 2022</b></>,
    key: "Programme_2022"
  },
  {
    title: <>DANS LES <b>VOTES</b></>,
    key: "Votes"
  },
  {
    title: <>DANS LES <b>DECLARATIONS</b></>,
    key: "Declarations"
  },
]

export default function ResponsePage({ thematique, question, reponse }) {
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <>
      <Head>
        <title>{getPageTitle('Réponse')}</title>
      </Head>
      <main
        data-thematique-key={thematiqueKey}
      >
        <section className='main-column main-section'>
          <ul className='response-breadcrumb'>
            <li>
              <Link href='/'>
                Accueil
              </Link>
            </li>
            <RiArrowDropRightLine />
            <li>
              <Link href={getThematiquePageLink(thematique)}>
                <span
                  className='breadcrumb__thematique-link'
                  data-thematique-key={thematiqueKey}
                >
                  {getThematiqueName(thematique)}
                </span>
              </Link>
            </li>
            <RiArrowDropRightLine />
            <li
              className='breadcrumb__question-link'
            >
              {getQuestionName(question)}
            </li>
          </ul>
          <section className='response-details'>
            <BackBreadcrumb
              label='Retour à la question'
              href={getQuestionPageLink(thematique, question)}
            />
            <h1
              className='response-details__title'
            >
              Détails pour {getResponseAuthor(reponse)}
            </h1>
            <div className='response-details__columns'>
              <div className='response-details__column'>
                <h2 className='response-details__column-title'>
                  CE QU&apos;ILS ONT DIT
                </h2>
                {responseDetailsFields.map((field) => {
                  return (
                    <ResponseDetailsBlock
                      key={field.key}
                      title={field.title}
                      content={reponse?.fields[field.key]}
                    />
                  );
                })}
              </div>
              <div className='response-details__column'>
                <h2 className='response-details__column-title'>
                  L&apos;ANALYSE DE <i>NOS SERVICES PUBLICS</i>
                </h2>
                <ResponseDetailsBlock
                  content={getResponseAnalysis(reponse)}
                />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}