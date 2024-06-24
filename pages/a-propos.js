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
          <p>
            Ce comparateur a été conçu par le collectif Nos services publics de manière à éclairer les citoyennes et les citoyens sur les enjeux des élections législatives au regard des services publics.
          </p>
          <p>
            Il analyse le programme, les votes des parlementaires et des déclarations des responsables politiques en essayant de répondre, pour chacun des quatre partis analysés, à une trentaine de questions du quotidien sur les services publics et leur évolution, dans neuf secteurs clefs des politiques publiques.
          </p>
          <p>
            Il vise à proposer, avec l’appui d’une trentaine d’experts de leur secteur, une lecture pédagogique aux citoyennes et aux citoyens qui le souhaiteraient pour comprendre les conséquences des élections sur leur quotidien.
          </p>
          <p>
            Il sera mis à jour dès lors que de nouvelles propositions ou déclarations le rendront nécessaire.
          </p>
        </section>
      </main>
    </>
  );
}
