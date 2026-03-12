


export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "€0.00/month",
      features: [
        "Unlimited children accounts",
        "Full access for kids",
        "Real-time peace of mind",
        "Basic routine builder",
      ],
      bgColor: "bg-tasko-white400",
    },
    {
      name: "Premium",
      price: "€9.99/month",
      features: [
        "Everything in the free tier",
        "Smart progress tracking",
        "Energy forcasting",
        "Transition library",
        "Science nuggets",
      ],
      bgColor: "bg-tasko-blue200",
    },
  ];

  return (
    <section 
      className="flex flex-col w-full items-center justify-center gap-8 px-10 py-8 relative flex-[0_0_auto] bg-tasko-white400">
      <header className="flex flex-col w-[700px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 text-center relative">
          Choose Your Plan
        </div>
      </header>

      <div className="grid w-full max-w-[826px] grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`flex flex-col items-start gap-2.5 p-8 relative ${plan.bgColor} rounded-2xl overflow-hidden border-[0.5px] border-solid border-tasko-blue400 shadow-small-LM`}
          >
            <h2 className="relative w-fit mt-[-0.50px] text-header-3 text-tasko-gray400 text-center whitespace-nowrap">
              {plan.name}
            </h2>

            <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-header-3 text-tasko-gray900">
                {plan.price}
              </div>
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
                    {feature}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <button
        className="flex w-full max-w-[420px] h-[52px] items-center justify-center gap-2.5 relative bg-tasko-blue300 rounded-lg border border-solid border-tasko-blue400 shadow-medium-LM"
        type="button"
      >
        <span className="relative flex items-center justify-center w-fit text-UI-button text-tasko-gray400 text-center">
          Learn more about pricing and features
        </span>
      </button>
    </section>
  );
};
