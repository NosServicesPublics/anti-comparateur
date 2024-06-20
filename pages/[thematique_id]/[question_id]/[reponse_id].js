import Head from "next/head";
import { Inter } from "next/font/google";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { map } from "../../../lib/map.js";

import thematiquesData from "../../../data/thematiques.json";
import questionsData from "../../../data/questions.json";
import reponsesData from "../../../data/reponses.json";

const inter = Inter({ subsets: ["latin"] });

const thematiquesMap = map(thematiquesData);
const questionsMap = map(questionsData);

export async function getStaticPaths() {
  return {
    paths: reponsesData.records.map((r) => {
      return {
        params: {
          thematique_id:
            thematiquesMap[r.fields.Thematique].fields.Nom_technique,
          question_id: `question_${r.fields.Question}`,
          reponse_id: r.fields.Qui,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = thematiquesData.records.filter(
    (t) => t.fields.Nom_technique == params.thematique_id,
  )[0];
  const qid = params.question_id.split("_")[1];
  const question = questionsData.records.filter((q) => q.id == qid)[0];
  const reponse = reponsesData.records.filter(
    (r) => r.fields.Qui == params.reponse_id && r.fields.Question == qid,
  )[0];
  return { props: { thematique, question, reponse } };
}

export default function Home({ thematique, question, reponse }) {
  return (
    <>
      <Head>
        <title>Réponse</title>
      </Head>
      <main>
        <h1>{thematique?.fields.Nom}</h1>
        <h2>{question?.fields.Intitule}</h2>
        <h3>Pour {reponse?.fields.Qui}</h3>
        <h4>{reponse?.fields.Chapo}</h4>
        <div>{reponse?.fields.Texte}</div>
        <fieldset>
          <legend>Programme_2024</legend>
          <div>{reponse?.fields.Programme_2024}</div>
        </fieldset>
        <fieldset>
          <legend>Programme_2022</legend>
          <div>{reponse?.fields.Programme_2022}</div>
        </fieldset>
        <fieldset>
          <legend>Votes</legend>
          <div>{reponse?.fields.Votes}</div>
        </fieldset>
        <fieldset>
          <legend>Déclarations</legend>
          <div>{reponse?.fields.Declarations}</div>
        </fieldset>
        <fieldset>
          <legend>Analyse</legend>
          <div>{reponse?.fields.Analyse}</div>
        </fieldset>
      </main>
    </>
  );
}
