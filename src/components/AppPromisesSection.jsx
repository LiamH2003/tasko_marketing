import promiseIcon1 from "../assets/promiseIcon1.png";
import promiseIcon2 from "../assets/promiseIcon2.png";
import promiseIcon3 from "../assets/promiseIcon3.png";
import FocusModeNavIcon from "../assets/icons/Focus Mode Nav.png";
import ViewIcon from "../assets/icons/View.png";
import LockedIcon from "../assets/icons/Locked.png";

export const AppPromisesSection = () => {
  const features = [
    {
      icon: promiseIcon1,
      iconFile: FocusModeNavIcon,
      title: "Built for 9-12",
      description: 'Sophisticated enough to feel "grown-up", simple enough to work.',
      highlight: "Age-optimized"
    },
    {
      icon: promiseIcon2,
      iconFile: ViewIcon,
      title: "Trust, Not Control",
      description: "Parents see progress without constant monitoring. Real autonomy for kids.",
      highlight: "Balanced visibility"
    },
    {
      icon: promiseIcon3,
      iconFile: LockedIcon,
      title: "Privacy First",
      description: "End-to-end encrypted. We never sell data. Privacy isn't negotiable.",
      highlight: "Your data, your control"
    },
  ];

  return (
    <section className="items-center gap-12 bg-tasko-white400 flex flex-col justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center gap-6 w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="w-full min-[700px]:w-[700px] text-header-2 text-tasko-gray900 relative text-center px-4 min-[550px]:px-0">
            The Tasko Promise
          </h2>

          <p className="w-full min-[700px]:w-[682px] text-body-large text-tasko-gray400 text-center px-4 min-[550px]:px-0">
            Three principles that make everything work better.
          </p>
        </div>
      </div>

      <div className="flex flex-col min-[700px]:flex-row items-center justify-center gap-8 relative self-stretch w-full flex-[0_0_auto] px-4 min-[550px]:px-0 max-w-[1200px] mx-auto">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col w-full min-[700px]:w-[380px] items-start gap-6 p-8 relative self-stretch bg-tasko-white100 rounded-2xl border-2 border-tasko-blue400 shadow-small-LM hover:shadow-medium-LM hover:border-tasko-blue500 transition-all"
          >
            <div className="flex items-start gap-4 w-full">
              <div
                className="flex w-14 h-14 items-center justify-center relative bg-tasko-blue300 rounded-lg flex-shrink-0"
                aria-hidden="true"
              >
                <img src={feature.iconFile} alt={feature.title} className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-tasko-blue600 uppercase tracking-wide">
                  {feature.highlight}
                </div>
              </div>
            </div>

            <div>
              <div className="relative self-stretch text-header-3 text-tasko-gray900 font-semibold mb-2">
                {feature.title}
              </div>
              <p className="relative self-stretch text-body-main text-tasko-gray400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
