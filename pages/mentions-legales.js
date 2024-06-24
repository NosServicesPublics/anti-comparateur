import { NextSeo } from 'next-seo';

import BackBreadcrumb from "@/components/BackBreadcrumb";

export default function MentionsLegales() {
  return (
    <>
      <NextSeo
        title="Mentions légales"
      />
      <main>
        <section className="main-column main-section">
          <BackBreadcrumb />
          <h1>Mentions légales</h1>

          <h2>Édition et direction de la publication</h2>

          <p>
            Le collectif Nos services publics.
          </p>

          <h2>Hébergement</h2>

          <p>GitHub Pages.</p>

        </section>
      </main>
    </>
  );
}
