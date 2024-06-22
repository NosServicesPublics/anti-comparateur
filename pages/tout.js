import Head from "next/head";

import ThematiquesCardsGrid from "@/components/ThematiquesGrid";

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
        <title>Le comparateur des programmes (à renommer)</title>
      </Head>
      <main>
        <section className="main-column">
          <ThematiquesCardsGrid thematiques={thematiques} questions={questions} />
        </section>
      </main>
    </>
  );
}
