const X = 'X';

function SiteBanner({ children }) {
  return ( 
    <section className="site-banner">
      <h1 className="site-banner__title">
        Prendre au sérieux la politique, mettre les programmes à l'épreuve
      </h1>
      <p className="site-banner__baseline">
        Vous ne croyez plus aux programmes ? Ça tombe bien, nous non plus ! Découvrez {X} questions et les réponses des groupes candidats aux élections législatives pour vous faire une vraie idée ce qui vous attends sur les sujets qui compte pour vous :
      </p>
      <div className="site-banner__cta">
        {children}
      </div>
    </section>
    );
}

export default SiteBanner;