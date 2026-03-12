import promiseIcon1 from "../assets/promiseIcon1.png";
import promiseIcon2 from "../assets/promiseIcon2.png";
import promiseIcon3 from "../assets/promiseIcon3.png";

export const AppPromisesSection = () => {
  const features = [
    {
      icon: promiseIcon1,
      title: "Developmental Alignment",
      description:
        'Engineered specifically for the 9-12 year old cognitive window. Tasko respects the transition from childhood to early adolescence by providing tools that are sophisticated enough to feel "grown-up" yet simple enough to remain intuitive.',
    },
    {
      icon: promiseIcon2,
      title: "Verification, Not Surveillance",
      description:
        "The Parental Sync provides high-level transparency without the need for constant nudging. Parents stay informed through a unified data stream, allowing them to step back and let the child lead.",
    },
    {
      icon: promiseIcon3,
      title: "Privacy by Architecture",
      description:
        "In an era of data-harvesting, Tasko is a fortress. Built with end-to-end encryption and a strict \"Privacy by Design\" mandate, your family's daily life is never a product; it's a protected asset.",
    },
  ];

  return (
    <section className="items-center gap-6 bg-tasko-white400 flex flex-col justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto]">
      <header className="relative w-full min-[550px]:w-[640px] min-[700px]:w-[700px] min-[700px]:h-[116px]">
        <div className="relative top-0 left-0 w-full h-auto min-[700px]:absolute min-[700px]:w-[700px] min-[700px]:h-[42px] flex">
          <div className="w-full min-[700px]:w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 relative text-center">
            The tasko promise
          </div>
        </div>

        <div className="relative top-0 left-0 mt-4 min-[700px]:mt-0 min-[700px]:absolute min-[700px]:top-[58px] w-full h-auto min-[700px]:w-[700px] min-[700px]:h-[58px] flex">
          <p className="w-full min-[700px]:w-[682px] min-[700px]:h-[50px] min-[700px]:ml-[9.1px] text-body-large text-tasko-gray400 text-center px-4 min-[550px]:px-0">
            Powerful features designed specifically for busy families who want
            to stay organized and connected.
          </p>
        </div>
      </header>

      <div className="flex flex-col min-[700px]:flex-row items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto] px-4 min-[550px]:px-0">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col w-full min-[700px]:w-[399px] items-start gap-4 p-8 relative self-stretch bg-tasko-white400 rounded-no border-line border-solid border-tasko-blue400 shadow-small-LM"
          >
            <div
              className="flex w-14 h-14 items-center justify-center relative bg-tasko-blue300 rounded-sm"
              aria-hidden="true"
            >
              <img
                src={feature.icon}
                alt=""
                className="relative h-6 w-auto"
              />
            </div>

            <div className="relative self-stretch mt-[-1.00px] text-header-3 text-tasko-gray900">
              {feature.title}
            </div>
            <p className="relative self-stretch text-body-main text-tasko-gray400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
