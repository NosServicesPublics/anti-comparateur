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
        </section>
      </main>
    </>
  );
}
