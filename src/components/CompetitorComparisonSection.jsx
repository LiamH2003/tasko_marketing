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
    <section className="flex flex-col items-start justify-center px-10 py-24 relative self-stretch w-full flex-[0_0_auto] bg-tasko-white100">
      <div className="flex flex-col items-center gap-10 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-tasko-gray400 text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
          Tasko Tracker vs Typical Routine Apps
        </h2>

        <div className="flex flex-col w-[798px] items-start p-4 relative flex-[0_0_auto] bg-tasko-white400 rounded-2xl border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM">
          <div
            className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
            role="row"
          >
            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-gray400 text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                Feature
              </div>
            </div>

            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-gray400 text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
                Typical Apps
              </div>
            </div>

            <div
              className="flex items-center justify-center gap-2.5 relative flex-1 grow"
              role="columnheader"
            >
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-blue600 text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
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
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-main font-[number:var(--body-main-font-weight)] text-tasko-gray400 text-[length:var(--body-main-font-size)] text-center tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
                  {row.feature}
                </div>
              </div>

              <div
                className="flex flex-col items-center relative flex-1 grow"
                role="cell"
              >
                <div
                  className={`${row.typicalAppsColor} relative flex items-center justify-center w-fit mt-[-1.00px] font-inter-regular font-[number:var(--inter-regular-font-weight)] text-[length:var(--inter-regular-font-size)] text-center tracking-[var(--inter-regular-letter-spacing)] leading-[var(--inter-regular-line-height)] whitespace-nowrap [font-style:var(--inter-regular-font-style)]`}
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
                  className={`${row.taskoColor} relative flex items-center justify-center w-fit mt-[-1.00px] font-inter-regular font-[number:var(--inter-regular-font-weight)] text-[length:var(--inter-regular-font-size)] text-center tracking-[var(--inter-regular-letter-spacing)] leading-[var(--inter-regular-line-height)] whitespace-nowrap [font-style:var(--inter-regular-font-style)]`}
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
