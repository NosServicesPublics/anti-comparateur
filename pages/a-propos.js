import { NextSeo } from 'next-seo';

import BackBreadcrumb from "@/components/BackBreadcrumb";

export default function APropos() {
  return (
    <>
      <NextSeo
        title="À propos"
      />
      <main>
        <section className="main-column main-section">
          <BackBreadcrumb />
          <h1>À Propos</h1>
        </section>
      </main>
    </>
  );
}
