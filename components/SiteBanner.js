function SiteBanner({ children, nQuestions }) {
  return ( 
    <section className="site-banner main-column">
      <h1 className="site-banner__title">
        Prendre au sérieux la politique, mettre les programmes à l&apos;épreuve
      </h1>
      <p className="site-banner__baseline">
        Vous ne croyez plus aux programmes ? Ça tombe bien, nous non plus ! Découvrez {nQuestions} questions et les réponses des groupes candidats aux élections législatives pour vous faire une vraie idée ce qui vous attends sur les sujets qui compte pour vous :
      </p>
      <div className="site-banner__cta">
        {children}
      </div>
    </section>
    );
}

export default SiteBanner;