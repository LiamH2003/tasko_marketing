


export const PricingSection = () => {
  const freePlanFeatures = [
    "Unlimited children accounts",
    "Full access for kids",
    "Real-time peace of mind",
    "Basic routine builder",
  ];

  const premiumPlanFeatures = [
    "Everything in the free tier",
    "Smart progress tracking",
    "Energy forcasting",
    "Transition library",
    "Science nuggets",
  ];

  const plans = [
    {
      name: "Free",
      price: "€0,00",
      features: freePlanFeatures,
      bgColor: "bg-tasko-white400",
    },
    {
      name: "Premium",
      price: "€9,99",
      features: premiumPlanFeatures,
      bgColor: "bg-tasko-blue200",
    },
  ];

  return (
    <section 
      className="flex flex-col w-full items-center justify-center gap-8 px-10 py-8 relative flex-[0_0_auto]">
      <header className="flex flex-col w-[700px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 text-center relative">
          Choose Your Plan
        </div>
      </header>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`flex flex-col w-[400px] items-start gap-2.5 p-8 relative self-stretch ${plan.bgColor} rounded-2xl overflow-hidden border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM`}
          >
            <h2 className="relative w-fit mt-[-0.50px] text-header-3 text-tasko-gray400 text-center whitespace-nowrap">
              Tasko tracker
            </h2>

            <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-header-3 text-tasko-gray900">
                Single Bracelets
              </div>

              <p className="relative flex items-end justify-center w-fit text-body-large text-tasko-blue900 text-center">
                /month
              </p>
            </div>

            <ul className="inline-flex flex-col items-start gap-2.5 p-2.5 relative flex-[0_0_auto]">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                >
                  <span
                    className="relative w-2 h-2 bg-tasko-blue900 rounded aspect-[1]"
                    aria-hidden="true"
                  />

                  <div className="relative w-fit mt-[-1.00px] text-body-main text-tasko-gray900">
                One tasko tracker bracelet
              </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <button
        className="flex w-[400px] h-[52px] items-center justify-center gap-2.5 relative bg-tasko-blue300 rounded-lg border border-solid border-tasko-blue400 shadow-medium-LM"
        type="button"
      >
        <span className="relative flex items-center justify-center w-fit text-UI-button text-tasko-gray400 text-center">
          Compare plans side-by-side
        </span>
      </button>
    </section>
  );
};
