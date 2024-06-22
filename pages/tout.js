import Head from "next/head";

import { SITE_TITLE } from "@/lib/constants";

import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";

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

export default function ThematiqueListPage({ thematiques, questions }) {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <main>
        <section className="main-column">
          <ThematiquesCardsGrid thematiques={thematiques} questions={questions} />
        </section>
      </main>
    </>
  );
}
