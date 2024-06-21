import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import thematiquesData from "../../data/thematiques.json";
import questionsData from "../../data/questions.json";
import reponsesData from "../../data/reponses.json";

export async function getStaticPaths() {
  return {
    paths: thematiquesData.records.map((r) => {
      return { params: { thematique_id: r.fields.Slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = thematiquesData.records.filter(
    (t) => t.fields.Slug == params.thematique_id,
  )[0];
  const questions = questionsData.records.filter(
    (q) => q.fields.Thematique == thematique.id,
  );
  const questionsMap = questions.reduce((a, v) => {
    a[v.id] = v;
    v.reponses = [];
    return a;
  }, {});

  const reponsesMap = reponsesData.records
    .filter((q) => q.fields.Thematique == thematique.id)
    .reduce((a, v) => {
      a[v.fields.Qui] = v
      return a
    }, {})
  const partis = ['NFP', 'LREM', 'LR', 'RN']
  partis.forEach((p) => {
    if (reponsesMap[p])
      questionsMap[reponsesMap[p].fields.Question].reponses.push(reponsesMap[p]);
    });
  return { props: { thematique, questions } };
}

export default function Home({ thematique, questions }) {
  return (
    <>
      <Head>
        <title>{thematique.fields.Nom}</title>
      </Head>
      <main>
        <h1>{thematique?.fields.Nom}</h1>
        {questions?.map((question) => {
          return (
            <div key={question.id} id={question.fields.Slug}>
              <h2>{question.fields.Intitule}</h2>
              <div>
                {question.reponses.map((r) => {
                  return (
                    <div key={r.id}>
                      <h3>Pour {r.fields.Qui}</h3>
                      <div>{r.fields.Chapo}</div>
                                <div dangerouslySetInnerHTML={{
    __html: r.fields.TexteHTML,
  }}/>
                      <Link
                        href={`${thematique.fields.Slug}/${question.fields.Slug}/${r.fields.Qui}`}
                      >
                        Plus de détails
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
