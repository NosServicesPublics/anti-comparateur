import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { get } from "../../lib/api.js";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticPaths() {
  const thematiques = await get("Thematiques/records");

  return {
    paths: thematiques.map((r) => {
      return { params: { id: r.fields.Nom_technique } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thematique = (
    await get(`Thematiques/records?filter={"Nom_technique": ["${params.id}"]}`)
  )[0];
  const questions = await get(
    `Questions/records?filter={"Thematique": [${thematique.id}]}`,
  );
  const reponses = await get(
    `Reponses/records?filter={"Thematique": [${thematique.id}]}`,
  );
  return { props: { thematique, questions, reponses }, revalidate: 600 };
}

export default function Home({ thematique, questions, reponses }) {
  return (
    <>
      <Head>
        <title>Question?</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>{thematique?.fields.Nom}</h1>
        {questions?.map((question) => {
          return <p key={question.id}>{question.fields.Intitule}</p>;
        })}
        <div>
          {reponses?.map((reponse) => {
            return <p key={reponse.id}>{reponse.fields.Chapo}</p>;
          })}
        </div>
      </main>
    </>
  );
}
