function Hero({ query }) {
  return (
    <section className="page-hero">
      <div className="section-center">
        <h3 className="page-hero-title">Home / {query}</h3>
      </div>
    </section>
  );
}

export default Hero;
