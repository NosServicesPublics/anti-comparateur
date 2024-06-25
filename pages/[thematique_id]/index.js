import { NextSeo } from 'next-seo';

import { useState, useEffect } from "react";

import BackBreadcrumb from "@/components/BackBreadcrumb";
import QuestionBlock from "@/components/QuestionBlock";

import data from "@/lib/data-loader";

import {
  findThematique,
  getThematiqueName,
  getThematiquePathParams,
  getThematiqueKey,
  getThematiqueQuestions,
  getQuestionId,
  getThematiqueId,
  getQuestionMapResponses,
  findQuestionMapResponses,
} from "@/lib/data-mappings";

import { getPicto } from "@/lib/icons";

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
  const questions = getThematiqueQuestions(data.questions, getThematiqueId(thematique));
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
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setExpandedId(window.location.hash.slice(1))
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const el = document.querySelector(`#${expandedId}`);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 200)
    }
  }, [expandedId]);

  return (
    <>
      <NextSeo
        title={name}
      />
      <main data-thematique-key={thematiqueKey}>
        <section className="main-column main-section">
          <BackBreadcrumb />
          <div className="thematique-header">
            <h1
              className="thematique-title"
              data-thematique-key={thematiqueKey}
            >
              {name}
            </h1>
            {getPicto(thematiqueKey)}
          </div>
          <div className="question-blocks">
            {questions
              ?.map((question) => {
                const questionId = getQuestionId(question);
                const questionResponses = findQuestionMapResponses(responses, questionId);
                return (
                  <QuestionBlock
                    key={questionId}
                    question={question}
                    thematique={thematique}
                    responses={questionResponses}
                    expandedId={expandedId}
                    setExpandedId={setExpandedId}
                  />
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}