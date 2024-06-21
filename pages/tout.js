import Head from "next/head";

import ThematiquesGrid from "@/components/ThematiquesGrid";
import ThematiquesList from "@/components/ThematiquesList";
import SiteBanner from "@/components/SiteBanner";

import thematiquesData from "../data/thematiques.json";
import questionsData from "../data/questions.json";
import reponsesData from "../data/reponses.json";

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
        <title>Le comparateur des programmes (à renommer)</title>
      </Head>
      <main>
        <section className="main-column">
          <ThematiquesGrid thematiques={thematiques} questions={questions} />
        </section>
      </main>
    </>
  );
}
