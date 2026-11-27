import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        {/* CONTEÚDO DO BANNER */}
        <div className="hero-content">
          <span className="hero-eyebrow">Melhores Ofertas Personalizadas</span>

          <h1 className="hero-title">Queima de Estoque Nike 🔥</h1>

          <p className="hero-description">
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>

          <a href="#produtos" className="hero-button">
            Ver Ofertas
          </a>
        </div>

        {/* IMAGEM DO PRODUTO */}
        <div className="hero-img">
          <img src="/hero.png" alt="Tênis Nike em destaque" />
        </div>

        {/* INDICADORES DO BANNER */}
        <div className="hero-indicators" aria-hidden="true">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
