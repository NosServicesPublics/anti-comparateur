import Head from "next/head";

import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";
import ThematiquesButtonsGrid from "@/components/ThematiquesButtonsGrid";
import SiteBanner from "@/components/SiteBanner";
import TwitterButton from "@/components/TwitterButton";

import thematiquesData from "../data/thematiques.json";
import questionsData from "../data/questions.json";

import pickAWinner from "@/lib/twitter";

export async function getStaticProps() {
  const [selectedName, selectedPicto] = pickAWinner();

  return {
    props: {
      thematiques: thematiquesData.records,
      questions: questionsData.records,
      selectedName,
      selectedPicto,
    },
  };
}

export default function Home({
  thematiques,
  questions,
  selectedName,
  selectedPicto,
}) {
  return (
    <>
      <Head>
        <title>Le comparateur des programmes (à renommer)</title>
      </Head>
      <main>
        <SiteBanner>
          <ThematiquesButtonsGrid thematiques={thematiques} />
        </SiteBanner>
        <section className="main-column main-section">
          <ThematiquesCardsGrid thematiques={thematiques} questions={questions} />
          <TwitterButton
            selectedName={selectedName}
            selectedPicto={selectedPicto}
          />
        </section>
      </main>
    </>
  );
}
