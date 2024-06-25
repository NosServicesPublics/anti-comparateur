import { NextSeo } from 'next-seo';
import data from "@/lib/data-loader";
import ResponsePageContent from "@/components/ResponsePageContent";

import {
  findThematique,
  findQuestion,
  getResponseQuestionId,
  getResponsePathParams,
  findResponse,
} from "@/lib/data-mappings";

export async function getStaticPaths() {
  return {
    paths: data.responses
      .filter(getResponseQuestionId)
      .map((responseRecord) => {
        return {
          params: getResponsePathParams(responseRecord, data.thematiques, data.questions)
        };
      }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = findThematique(data.thematiques, params.thematique_id)
  const question = findQuestion(data.questions, params.question_id);
  const reponse = findResponse(data.responses, question.id, params.reponse_id);

  return {
    props: {
      thematique,
      question,
      reponse
    }
  };
}

export default function ResponsePage({ thematique, question, reponse }) {
  return (
    <>
      <NextSeo
        title={'Réponse'}
      />
      <ResponsePageContent
        thematique={thematique}
        question={question}
        reponse={reponse}
      />
    </>
  );
}