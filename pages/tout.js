import Head from "next/head";

import data from "@/lib/data-loader";

import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";

import { SITE_TITLE } from "@/lib/constants";

export async function getStaticProps({ params }) {
  return {
    props: {
      thematiques: data.thematiques,
      questions: data.questions,
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
