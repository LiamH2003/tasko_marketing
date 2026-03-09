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
          <h2 className="relative w-[530px] mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-tasko-blue900 text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
            Cultivating independence through the principles of calm technology
          </h2>

          <p className="relative w-[513px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-gray400 text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
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
          <span className="relative flex items-center justify-center w-fit font-UI-button font-[number:var(--UI-button-font-weight)] text-tasko-gray400 text-[length:var(--UI-button-font-size)] text-center tracking-[var(--UI-button-letter-spacing)] leading-[var(--UI-button-line-height)] [font-style:var(--UI-button-font-style)]">
            Become part of the program
          </span>
        </button>
      </article>
    </section>
  );
};
