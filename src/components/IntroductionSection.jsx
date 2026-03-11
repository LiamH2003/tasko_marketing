export const IntroductionSection = () => {
  const content = {
    title: "Meet Tasko Tracker",
    subtitle: "A calm structure for growing minds",
    description:
      "Tasko Tracker provides gentle structure without turning routines into control. Parents define what needs to happen, while children decide when and in what order. The system acts as a temporary external support for developing executive functions which helps children build focus, responsibility and emotional awareness.",
    feature: "Meet the Tasko's",
    text: "At the center of the experience is your own Tasko, a small 3D companion. Instead of rewards or punishments, the companion reflects consistency and care in daily routines. This encourages intrinsic motivation rather than the reward system.",
  };

  return (
    <section className="flex flex-col items-center justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto] bg-tasko-white300">
      <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] text-header-2 text-black text-center">
          What is tasko tracker?
        </h2>

        <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
          <article className="flex flex-col w-[553px] items-start gap-2 relative self-stretch">
            <p className="relative self-stretch mt-[-1.00px] text-header-2 text-tasko-gray900">
            Empower routines without the screen-time battle
          </p>
          <p className="relative self-stretch text-body-main text-tasko-gray400">
            Getting through an evening routine shouldn't require a smartphone
            distracting them or you micromanaging every step. Tasko Tracker is
            designed using calm technology—it provides physical feedback for
            completion, keeps distractions out, and builds real independence.
          </p>
          </article>

          <aside className="w-[403px] gap-2 px-[30px] py-[29px] bg-tasko-white400 rounded-no flex flex-col items-start relative border-line border-solid border-tasko-blue400 shadow-small-LM">
            <h4 className="relative flex items-center self-stretch mt-[-0.50px] text-body-large text-tasko-gray400">
              {content.feature}
            </h4>

            <p className="relative flex items-center self-stretch text-body-main text-tasko-gray400">
              {content.text}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
