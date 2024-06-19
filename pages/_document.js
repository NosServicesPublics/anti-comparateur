import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="fr">
      <Head></Head>
      <body>
        <header>
          <Link href="/">Accueil</Link>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
