export const CompetitorComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Rewards & punishments",
      typicalApps: "✓",
      tasko: "✕",
      typicalAppsColor: "text-tasko-gray400",
      taskoColor: "text-tasko-blue700",
    },
    {
      feature: "Intrinsic motivation",
      typicalApps: "✕",
      tasko: "✓",
      typicalAppsColor: "text-tasko-gray400",
      taskoColor: "text-tasko-blue700",
    },
    {
      feature: "Privacy-first design",
      typicalApps: "✕",
      tasko: "✓",
      typicalAppsColor: "text-tasko-gray400",
      taskoColor: "text-tasko-blue700",
    },
    {
      feature: "Development-focused",
      typicalApps: "✕",
      tasko: "✓",
      typicalAppsColor: "text-tasko-gray400",
      taskoColor: "text-tasko-blue700",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-10 py-16 md:py-24 relative self-stretch w-full flex-[0_0_auto] bg-tasko-white100">
      <div className="flex flex-col items-center gap-8 md:gap-10 px-0 py-0 relative w-full max-w-[900px] flex-[0_0_auto]">
        <p className="relative w-full max-w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 text-center">
          It isn’t your classic smartphone
        </p>
        <p className="relative w-full max-w-[760px] text-body-main text-tasko-gray400 text-center">
          Every feature on your child’s phone was built to grab their
          attention, not help them focus. That’s why a phone will never
          replace a dedicated tool like tasko.
        </p>

        <div className="flex flex-col w-full max-w-[798px] items-start p-3 md:p-4 relative flex-[0_0_auto] bg-tasko-white400 rounded-2xl border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM overflow-x-auto">
          <div
            className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            role="row"
          >
            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] text-body-large text-tasko-gray400">
                Feature
              </div>
            </div>

            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] text-body-large text-tasko-gray400">
                Typical Apps
              </div>
            </div>

            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] text-body-large text-tasko-blue600">
                Tasko
              </div>
            </div>
          </div>

          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto] ${
                index < comparisonData.length - 1
                  ? "border-b-[0.5px] [border-bottom-style:solid] border-tasko-blue400"
                  : ""
              } ${index === 0 ? "justify-center" : "justify-between"}`}
              role="row"
            >
              <div
                className="flex flex-col items-center relative flex-1 grow"
                role="cell"
              >
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] text-body-main text-tasko-gray400">
                  {row.feature}
                </div>
              </div>

              <div
                className="flex flex-col items-center relative flex-1 grow"
                role="cell"
              >
                <div
                  className={`${row.typicalAppsColor} relative flex items-center justify-center w-fit mt-[-1.00px] text-inter-regular text-center whitespace-nowrap`}
                  aria-label={
                    row.typicalApps === "✓" ? "Supported" : "Not supported"
                  }
                >
                  {row.typicalApps}
                </div>
              </div>

              <div
                className="flex flex-col items-center relative flex-1 grow"
                role="cell"
              >
                <div
                  className={`${row.taskoColor} relative flex items-center justify-center w-fit mt-[-1.00px] text-inter-regular text-center whitespace-nowrap`}
                  aria-label={row.tasko === "✓" ? "Supported" : "Not supported"}
                >
                  {row.tasko}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
