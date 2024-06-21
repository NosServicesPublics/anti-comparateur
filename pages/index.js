import Head from "next/head";

import ThematiquesGrid from "@/components/ThematiquesGrid";
import ThematiquesList from "@/components/ThematiquesList";
import SiteBanner from "@/components/SiteBanner";

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
        <SiteBanner>
          <ThematiquesList thematiques={thematiques} />
        </SiteBanner>
        <ThematiquesGrid thematiques={thematiques} questions={questions} />
        <a href="a-propos">À propos (TODO)</a>
      </main>
    </>
  );
}
