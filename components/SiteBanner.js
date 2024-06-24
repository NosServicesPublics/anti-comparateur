
import Image from 'next/image';

export default function SiteBanner({ children, nQuestions }) {
  return (
    <section className="site-banner main-column">
      <div className="site-banner__image">
        <Image
          src="/img/nsp-bg-gradient.jpg"
          aria-hidden
          alt="Bannière du site"
          width={1920}
          height={1920}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className="site-banner__title">
        Prendre au sérieux la politique, mettre les programmes à l&apos;épreuve
      </h1>
      <p className="site-banner__baseline">
        Vous ne croyez plus aux programmes ? Ça tombe bien, nous non plus ! Découvrez {nQuestions} questions et les réponses des groupes candidats aux élections législatives pour vous faire une vraie idée ce qui vous attend sur les sujets qui comptent pour vous :
      </p>
      <div className="site-banner__cta">
        {children}
      </div>
    </section>
  );
}