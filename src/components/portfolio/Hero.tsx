const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-dark min-h-screen flex items-center">
      <div className="section-spacing section-container w-full">
        <p className="body-text tracking-widest uppercase text-sm mb-8 opacity-60">
          ESG · Dados · Operações
        </p>
        <h1 className="heading-1 text-text-on-dark-bright max-w-3xl mb-8">
          ESG que vira decisão.<br />
          Dados que viram resultado.
        </h1>
        <p className="body-text max-w-2xl mb-12 opacity-80">
          Atuo na interseção entre ESG, dados e operações, usando métricas e sistemas
          para transformar estratégia em decisão e resultado.
        </p>
        <button onClick={scrollToAbout} className="btn-outline-light">
          Ver trajetória
        </button>
      </div>
    </section>
  );
};

export default Hero;
