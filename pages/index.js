import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";

import thematiquesData from "../data/thematiques.json";
import questionsData from "../data/questions.json";

export async function getStaticProps({ params }) {
  return {
    props: {
      thematiques: thematiquesData.records,
      questions: questionsData.records,
    },
  };
}

export default function Home({ thematiques, questions }) {
  return (
    <>
      <Head>
        <title>Le comparateur des programmes à renommer</title>
      </Head>
      <main>
        {thematiques?.map((thematique) => {
          return (
            <div key={thematique.id}>
              <h2>
                <Link
                  key={thematique.fields.Nom_technique}
                  href={`${thematique.fields.Nom_technique}`}
                >
                  {thematique.fields.Nom}
                </Link>
              </h2>
              {questions
                .filter((q) => q.fields.Thematique == thematique.id)
                .map((q) => {
                  return (
                    <div key={q.id}>
                      <Link
                        href={`${thematique.fields.Nom_technique}#question_${q.id}`}
                      >
                        {q.fields.Intitule}
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
        <a href="a-propos">À propos (TODO)</a>
      </main>
    </>
  );
}
