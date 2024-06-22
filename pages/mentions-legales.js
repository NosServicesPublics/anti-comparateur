import Head from "next/head";

import BackBreadcrumb from "@/components/BackBreadcrumb";

import { getPageTitle } from "@/lib/constants";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>{getPageTitle('Mentions légales')}</title>
      </Head>
      <main>
        <section className="main-column main-section">
        <BackBreadcrumb />
          <h1>Mentions légales</h1>
        </section>
      </main>
    </>
  );
}
