import Head from "next/head";

import BackBreadcrumb from "@/components/BackBreadcrumb";
import QuestionBlock from "@/components/QuestionBlock";

import { getPageTitle } from "@/lib/constants";

import data from "@/lib/data-loader";

import {
  findThematique,
  getThematiqueName,
  getThematiquePathParams,
  getThematiqueKey,
  getThematiqueQuestions,
  getQuestionId,
  getQuestionMapResponses,
  findQuestionMapResponses,
} from "@/lib/data-mappings";

export async function getStaticPaths() {
  return {
    paths: data.thematiques
      .map((thematiqueRecord) => {
        return {
          params: getThematiquePathParams(thematiqueRecord)
        };
      }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = findThematique(data.thematiques, params.thematique_id);
  const questions = getThematiqueQuestions(data.questions, thematique.id);
  const responses = getQuestionMapResponses(questions, data.responses)

  return {
    props: {
      thematique,
      questions,
      responses,
    }
  };
}

export default function ThematiquePage({ thematique, questions, responses }) {
  const name = getThematiqueName(thematique);
  const thematiqueKey = getThematiqueKey(thematique);
  return (
    <>
      <Head>
        <title>{getPageTitle(name)}</title>
      </Head>
      <main data-thematique-key={thematiqueKey}>
        <section className="main-column main-section">
          <BackBreadcrumb />
          <h1>{name}</h1>
          <div className="question-blocks">
            {questions?.map((question) => {
              const questionId = getQuestionId(question);
              const questionResponses = findQuestionMapResponses(responses, questionId);
              return (
                <QuestionBlock
                  key={questionId}
                  question={question}
                  thematique={thematique}
                  responses={questionResponses}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}