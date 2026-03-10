export const ProblemStatementSection = () => {
  const challenges = [
    {
      title: "Constant reminders",
      description:
        "Parents often need to repeat the same instructions every day.",
    },
    {
      title: "Routine conflicts",
      description:
        "Homework, chores and screen time can easily become daily battles.",
    },
    {
      title: "Developing self regulation",
      description:
        "Children want independence but still need structure and guidance.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center px-10 py-24 relative flex-[0_0_auto] bg-tasko-white400">
      <div className="inline-flex flex-col items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 relative">
          The Problem with Smart Devices
        </div>

        <p className="relative flex items-center justify-center w-[751.26px] text-body-large text-tasko-gray400 text-center">
          Children between 9 and 12 are starting to desire more independence but
          are often navigating routines heavily dictated by parents. Giving them a
          smartphone to manage tasks introduces a completely different set of
          problems:
        </p>

        <div className="flex w-[1231px] items-start justify-center gap-[25px] relative flex-[0_0_auto]">
          {challenges.map((challenge, index) => (
            <article
              key={index}
              className={`${
                index === 0
                  ? "w-[400px] gap-[8.9px]"
                  : index === 1
                    ? "w-[391px] gap-2"
                    : "w-[390px] gap-2"
              } p-6 self-stretch bg-tasko-white100 rounded-2xl flex flex-col items-start relative border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM`}
            >
              <header
                className={`flex flex-col items-center ${index === 1 ? "pt-0 pb-[0.8px] px-0" : "pt-0 pb-[0.69px] px-0"} relative self-stretch w-full flex-[0_0_auto]`}
              >
                <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] text-body-large text-tasko-gray400 text-center">
                  {challenge.title}
                </h3>
              </header>

              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] text-body-main text-tasko-gray400 text-center">
                  {challenge.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
