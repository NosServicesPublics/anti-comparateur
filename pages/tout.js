import data from "@/lib/data-loader";

import ThematiquesCardsGrid from "@/components/ThematiquesCardsGrid";

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
      <main>
        <section className="main-column">
          <ThematiquesCardsGrid thematiques={thematiques} questions={questions} />
        </section>
      </main>
    </>
  );
}
