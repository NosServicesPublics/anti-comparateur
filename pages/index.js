import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { get } from "../lib/api.js";

import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ params }) {
  const themes = await get("Thematiques/records");
  return { props: { themes }, revalidate: 600 };
}

export default function Home({ themes }) {
  return (
    <>
      <Head>
        <title>L'anti comparateur des programmes à renommer</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {themes?.map((theme) => {
          return (
            <Link
              key={theme.fields.Nom_technique}
              href={`/theme/${theme.fields.Nom_technique}`}
            >
              {theme.fields.Nom} ({theme.fields.Nombres_de_questions} questions)
            </Link>
          );
        })}
        <a href="a-propos">À propos (TODO)</a>
      </main>
    </>
  );
}
