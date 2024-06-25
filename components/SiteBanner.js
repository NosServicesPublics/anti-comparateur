
import Image from 'next/image';

export default function SiteBanner({ children }) {
  return (
    <section className="site-banner main-column">
      <div className="site-banner__image">
        <Image
          src="/img/nsp-gradient-min.jpg"
          aria-hidden
          alt="Bannière du site"
          width={1920}
          height={1920}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className="site-banner__title">
      Et concrètement ? Les programmes à l’épreuve de vos questions
      </h1>
      <p className="site-banner__baseline">
        Les programmes politiques vous paraissent déconnectés ? On les a fait redescendre sur terre. Au travers d’une trentaine de questions concrètes, nous avons passé au crible les propositions de ces élections législatives pour savoir ce qu’elles changeraient pour vous au quotidien :
      </p>
      <div className="site-banner__cta">
        {children}
      </div>
    </section>
  );
}