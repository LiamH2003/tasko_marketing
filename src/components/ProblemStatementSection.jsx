import TimeIcon from "../assets/icons/Time.png";
import FilterIcon from "../assets/icons/Filter.png";
import FocusModeIcon from "../assets/icons/Focus Mode Nav.png";

export const ProblemStatementSection = () => {
  const challenges = [
    {
      title: "Constant Reminders",
      description: "Repeating the same instructions daily gets exhausting.",
      icon: TimeIcon
    },
    {
      title: "Routine Battles",
      description: "Homework, chores, and screen time become daily conflicts.",
      icon: FilterIcon
    },
    {
      title: "Independence Gap",
      description: "Kids want freedom but still need structure and guidance.",
      icon: FocusModeIcon
    },
  ];

  return (
    <section id="problem-statement" className="flex flex-col w-full items-center px-10 py-24 relative flex-[0_0_auto] bg-tasko-white400">
      <div className="inline-flex flex-col items-center justify-center gap-8 relative flex-[0_0_auto] w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="w-full min-[550px]:w-[751px] min-[700px]:w-[848px] text-header-2 text-tasko-gray900 relative text-center px-4 min-[550px]:px-0">
            The Problem with Smart Devices
          </h2>

          <p className="relative flex items-center justify-center w-full min-[550px]:w-[640px] min-[700px]:w-[751px] text-body-large text-tasko-gray400 text-center px-4 min-[550px]:px-0">
            9-12 year olds want independence, but smartphones create new problems.
          </p>
        </div>

        <div className="flex flex-col min-[550px]:flex-col min-[700px]:flex-row w-full items-center min-[700px]:items-stretch justify-center gap-6 relative flex-[0_0_auto] px-4 min-[550px]:px-0 min-[700px]:px-10">
          {challenges.map((challenge, index) => (
            <article
              key={index}
              className="w-full min-[700px]:flex-1 min-[700px]:max-w-[400px] p-8 bg-tasko-white100 rounded-2xl flex flex-col items-start gap-4 relative border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM hover:shadow-medium-LM transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-tasko-blue300 rounded-lg flex-shrink-0">
                <img src={challenge.icon} alt={challenge.title} className="w-6 h-6" />
              </div>

              <h3 className="text-header-3 text-tasko-gray900 font-semibold">
                {challenge.title}
              </h3>

              <p className="text-body-main text-tasko-gray400">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
