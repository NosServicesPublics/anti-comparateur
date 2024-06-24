import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";
import ThematiquesButtonsGrid from "@/components/ThematiquesButtonsGrid";
import SiteBanner from "@/components/SiteBanner";
import TwitterButton from "@/components/TwitterButton";

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
