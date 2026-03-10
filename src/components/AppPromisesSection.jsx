export const AppPromisesSection = () => {
  const features = [
    {
      icon: "/vector.svg",
      title: "Developmental Alignment",
      description:
        'Engineered specifically for the 9-12 year old cognitive window. Tasko respects the transition from childhood to early adolescence by providing tools that are sophisticated enough to feel "grown-up" yet simple enough to remain intuitive.',
    },
    {
      icon: "/image.svg",
      title: "Verification, Not Surveillance",
      description:
        "The Parental Sync provides high-level transparency without the need for constant nudging. Parents stay informed through a unified data stream, allowing them to step back and let the child lead.",
    },
    {
      icon: "/vector-2.svg",
      title: "Privacy by Architecture",
      description:
        "In an era of data-harvesting, Tasko is a fortress. Built with end-to-end encryption and a strict \"Privacy by Design\" mandate, your family's daily life is never a product; it's a protected asset.",
    },
  ];

  return (
    <section className="items-center gap-6 bg-tasko-white400 flex flex-col justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto]">
      <header className="relative w-[700px] h-[116px]">
        <div className="absolute top-0 left-0 w-[700px] h-[42px] flex">
          <div className="w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 relative">
            The tasko promise
          </div>
        </div>

        <div className="absolute top-[58px] left-0 w-[700px] h-[58px] flex">
          <p className="w-[682px] h-[50px] ml-[9.1px] text-body-large text-tasko-gray400 text-center">
            Powerful features designed specifically for busy families who want
            to stay organized and connected.
          </p>
        </div>
      </header>

      <div className="flex items-center justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col w-[399px] items-start gap-4 p-8 relative self-stretch bg-tasko-white400 rounded-2xl border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM"
          >
            <div
              className="flex w-14 h-14 items-center justify-center relative bg-tasko-blue300 rounded-xl"
              aria-hidden="true"
            >
              <div
                className={`relative ${
                  index === 0
                    ? "w-6 h-[22.78px] aspect-[1.05]"
                    : index === 1
                      ? "w-[17.14px] aspect-[0.71] h-6"
                      : "w-[19.4px] aspect-[0.81] h-6"
                } bg-[url(${feature.icon})] bg-[100%_100%]`}
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
