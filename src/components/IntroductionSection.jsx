export const IntroductionSection = () => {
  const content = {
    title: "Meet Tasko Tracker",
    subtitle: "A calm structure for growing minds",
    description:
      "Tasko Tracker provides gentle structure without turning routines into control. Parents define what needs to happen, while children decide when and in what order. The system acts as a temporary external support for developing executive functions which helps children build focus, responsibility and emotional awareness.",
    card: {
      title: "Meet the Tasko's",
      description:
        "At the center of the experience is your own Tasko, a small 3D companion. Instead of rewards or punishments, the companion reflects consistency and care in daily routines. This encourages intrinsic motivation rather than the reward system.",
    },
  };

  return (
    <section className="flex flex-col items-center justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto] bg-tasko-white300">
      <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-black text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
          {content.title}
        </h2>

        <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
          <article className="flex flex-col w-[553px] items-start gap-2 relative self-stretch">
            <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-tasko-gray400 text-[length:var(--header-3-font-size)] text-center tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] whitespace-nowrap [font-style:var(--header-3-font-style)]">
              {content.subtitle}
            </h3>

            <p className="relative flex items-center self-stretch font-body-main font-[number:var(--body-main-font-weight)] text-tasko-gray400 text-[length:var(--body-main-font-size)] tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
              {content.description}
            </p>
          </article>

          <aside className="w-[403px] gap-2 px-[30px] py-[29px] bg-tasko-white400 rounded-xl flex flex-col items-start relative border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM">
            <h4 className="relative flex items-center self-stretch mt-[-0.50px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-gray400 text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
              {content.card.title}
            </h4>

            <p className="relative flex items-center self-stretch font-body-main font-[number:var(--body-main-font-weight)] text-tasko-gray400 text-[length:var(--body-main-font-size)] tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
              {content.card.description}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
