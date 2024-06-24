import Head from "next/head";

import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";
import ThematiquesButtonsGrid from "@/components/ThematiquesButtonsGrid";
import SiteBanner from "@/components/SiteBanner";
import TwitterButton from "@/components/TwitterButton";

import { SITE_TITLE } from "@/lib/constants";
import pickAWinner from "@/lib/twitter";

import data from "@/lib/data-loader";

export async function getStaticProps() {
  const [selectedName, selectedPicto] = pickAWinner();

  return {
    props: {
      thematiques: data.thematiques,
      questions: data.questions,
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
        <title>{SITE_TITLE}</title>
      </Head>
      <main>
        <SiteBanner nQuestions={questions.length}>
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
