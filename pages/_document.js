import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <script defer data-domain="comparateur.nosservicespublics.fr" src="https://plausible.io/js/script.js"></script>
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
        <Script
          src="https://grist.incubateur.net/grist-plugin-api.js"
          strategy="beforeInteractive"
          async=""
        />
      </body>
    </Html>
  );
}
