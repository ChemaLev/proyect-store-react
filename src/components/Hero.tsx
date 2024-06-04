type Props = {
    textPrincipal: string
    textSecondary: string
}

const Hero = ({ textPrincipal, textSecondary } : Props) => {
  return (
    <section id="hero">
      <div className="hero-titles container">
        <span className="hero-item">{textPrincipal}</span>
        <span className="hero-item">{textSecondary}</span>
      </div>
    </section>
  );
};

export default Hero;
