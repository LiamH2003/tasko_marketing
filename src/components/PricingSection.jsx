import { useEffect, useState } from "react";

export const PricingSection = () => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

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

  useEffect(() => {
    if (!isPricingModalOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsPricingModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isPricingModalOpen]);

  return (
    <section
      id="pricing"
      className="flex flex-col w-full items-center justify-center gap-8 px-6 md:px-10 py-8 relative flex-[0_0_auto] bg-tasko-white400">
      <header className="flex flex-col w-full max-w-[700px] items-center gap-4 relative flex-[0_0_auto]">
        <div className="w-full max-w-[848px] mt-[-1.00px] text-header-2 text-tasko-gray900 text-center relative">
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
        className="flex w-full max-w-[420px] h-[52px] items-center justify-center gap-2.5 relative bg-tasko-blue300 rounded-lg border border-solid border-tasko-blue400 shadow-medium-LM hover:bg-tasko-blue400 active:bg-tasko-blue500 transition-colors"
        type="button"
        onClick={() => setIsPricingModalOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isPricingModalOpen}
      >
        <span className="relative flex items-center justify-center w-fit text-UI-button text-tasko-gray400 text-center">
          Learn more about pricing and features
        </span>
      </button>

      {isPricingModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tasko-gray900/50 backdrop-blur-sm p-4"
          onClick={() => setIsPricingModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-modal-title"
            className="w-full max-w-[980px] max-h-[90vh] overflow-y-auto bg-tasko-white100 rounded-2xl p-6 md:p-10 relative border border-tasko-blue400 shadow-high-LM"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPricingModalOpen(false)}
              className="absolute top-4 right-4 text-tasko-gray400 hover:text-tasko-gray900 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center rounded-sm hover:bg-tasko-gray200"
              aria-label="Close pricing details"
            >
              ×
            </button>

            <div className="mb-8 pr-10">
              <h3
                id="pricing-modal-title"
                className="text-header-2 text-tasko-blue900"
              >
                Pricing details explained
              </h3>
              <p className="text-body-main text-tasko-gray400 mt-3 max-w-[760px]">
                Start with Free to build routines and visibility at home.
                Upgrade to Premium when you want deeper insights and smarter
                transition support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className="bg-tasko-white400 border border-tasko-blue400 rounded-xl p-6">
                <h4 className="text-header-3 text-tasko-gray900 mb-2">Free</h4>
                <p className="text-body-large text-tasko-blue900 mb-4">€0.00/month</p>
                <ul className="space-y-2 text-body-main text-tasko-gray400">
                  <li>Unlimited children accounts</li>
                  <li>Full access for kids</li>
                  <li>Real-time peace of mind</li>
                  <li>Basic routine builder</li>
                </ul>
              </article>

              <article className="bg-tasko-blue200 border border-tasko-blue400 rounded-xl p-6">
                <h4 className="text-header-3 text-tasko-gray900 mb-2">Premium</h4>
                <p className="text-body-large text-tasko-blue900 mb-4">€9.99/month</p>
                <ul className="space-y-2 text-body-main text-tasko-gray400">
                  <li>Everything in the free tier</li>
                  <li>Smart progress tracking</li>
                  <li>Energy forcasting</li>
                  <li>Transition library</li>
                  <li>Science nuggets</li>
                </ul>
              </article>
            </div>

            <div className="mt-8 flex w-full items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsPricingModalOpen(false)}
                className="h-11 px-5 rounded-lg border border-tasko-blue400 bg-tasko-white400 text-body-main text-tasko-gray900 hover:bg-tasko-white500 active:bg-tasko-white600 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setIsPricingModalOpen(false)}
                className="h-11 px-5 rounded-lg border border-tasko-blue400 bg-tasko-blue300 text-UI-button text-tasko-gray900 hover:bg-tasko-blue400 active:bg-tasko-blue500 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};