import Background from "../assets/BackgroundHero.webp";

export const HeroSection = () => {
  return (
    <section 
      className="items-start bg-[url(/section.svg)] bg-cover bg-[50%_50%] flex flex-col justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto]"
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 100%'
      }}
    >
      <article className="inline-flex flex-col items-start gap-10 p-12 relative flex-[0_0_auto] bg-tasko-white400 rounded-2xl border-[0.5px] border-solid border-tasko-blue400 shadow-high-LM">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-[530px] mt-[-1.00px] text-header-1 text-tasko-blue900">
            Cultivating independence through the principles of calm technology
          </h2>

          <p className="relative w-[513px] text-body-large text-tasko-gray400">
            Tasko Tracker provides a focused environment for routines. We
            replace digital noise with a structured approach that helps children
            motivate themselves, moving away from constant parental pressure and
            toward self-governance.
          </p>
        </div>

        <button
          className="flex w-[261px] h-12 items-center justify-center gap-2.5 relative bg-tasko-blue400 rounded-lg shadow-medium-LM cursor-pointer border-0"
          type="button"
          aria-label="Become part of the program"
        >
          <span className="relative flex items-center justify-center w-fit text-UI-button text-center text-tasko-gray400">
            Become part of the program
          </span>
        </button>
      </article>
    </section>
  );
};
