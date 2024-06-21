import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="fr">
      <Head></Head>
      <body>
        <header className='main-column'>
          <div className="site-logo">
            <Image 
              src="/nsp-logo.svg"
              alt="Logo du collectif Nos services publics"
              width={100}
              height={100}
            />
          </div>
          <div className="site-title">
            Le comparateur de programme
          </div>
          <nav className="site-nav">
            <ul>
              <li>
                À propos
              </li>
            </ul>
          </nav>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
