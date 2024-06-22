import Head from "next/head";

import { getPageTitle } from "@/lib/constants";

import BackBreadcrumb from "@/components/BackBreadcrumb";

export default function APropos() {
  return (
    <>
      <Head>
        <title>{getPageTitle("À propos")}</title>
      </Head>
      <main>
        <section className="main-column main-section">
          <BackBreadcrumb />
          <h1>À Propos</h1>
        </section>
      </main>
    </>
  );
}
