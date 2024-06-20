type Props = {
    textPrincipal: string
    textSecondary: string
}

const Hero = ({ textPrincipal, textSecondary } : Props) => {
  return (
    <section id="hero">
      <div className="flex flex-col w-[90%] max-w-[1220px] mx-auto h-inherit min-h-inherit text-white text-left font-semibold leading-[.9] items-start justify-center">
        <span className="block text-[2.5rem]">{textPrincipal}</span>
        <span className="block text-[4rem]">{textSecondary}</span>
      </div>
    </section>
  );
};

export default Hero;
