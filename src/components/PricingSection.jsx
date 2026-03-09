


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
      className="flex flex-col w-[1728px] items-center justify-center gap-8 px-10 py-8 relative flex-[0_0_auto]">
      <header className="flex flex-col w-[700px] items-center gap-4 relative flex-[0_0_auto]">
        <h1 className="relative w-fit mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-tasko-gray400 text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
          Chose your plan
        </h1>
      </header>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`flex flex-col w-[400px] items-start gap-2.5 p-8 relative self-stretch ${plan.bgColor} rounded-2xl overflow-hidden border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM`}
          >
            <h2 className="relative w-fit mt-[-0.50px] font-header-3 font-[number:var(--header-3-font-weight)] text-tasko-gray400 text-[length:var(--header-3-font-size)] text-center tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] whitespace-nowrap [font-style:var(--header-3-font-style)]">
              {plan.name}
            </h2>

            <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-header-2 font-[number:var(--header-2-font-weight)] text-tasko-blue900 text-[length:var(--header-2-font-size)] text-center tracking-[var(--header-2-letter-spacing)] leading-[var(--header-2-line-height)] [font-style:var(--header-2-font-style)]">
                {plan.price}
              </p>

              <p className="relative flex items-end justify-center w-fit font-body-large font-[number:var(--body-large-font-weight)] text-tasko-blue900 text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
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

                  <span className="relative w-fit mt-[-1.00px] font-body-main font-[number:var(--body-main-font-weight)] text-tasko-gray400 text-[length:var(--body-main-font-size)] text-center tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
                    {feature}
                  </span>
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
        <span className="relative flex items-center justify-center w-fit font-UI-button font-[number:var(--UI-button-font-weight)] text-tasko-gray400 text-[length:var(--UI-button-font-size)] text-center tracking-[var(--UI-button-letter-spacing)] leading-[var(--UI-button-line-height)] [font-style:var(--UI-button-font-style)]">
          Learn more about pricing and featurs
        </span>
      </button>
    </section>
  );
};
