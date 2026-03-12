import { useState } from "react";
import Background from "../assets/BackgroundHero.webp";
import { EmailModal } from "./EmailModal";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="main-content"
        tabIndex={-1}
        aria-label="Hero — Cultivating independence through calm technology"
        className="items-start bg-cover bg-center bg-no-repeat w-full flex-[0_0_auto] focus:outline-none"
        style={{
          backgroundImage: `url(${Background})`
        }}
      >
        <div className="tasko-container py-4xl md:py-5xl">
          <div className="tasko-grid">
            <article
              aria-labelledby="hero-headline"
              className="col-span-4 min-[550px]:col-span-6 min-[700px]:col-span-4 flex flex-col items-start gap-lg md:gap-xl lg:gap-3xl p-lg md:p-xl lg:p-3xl relative flex-[0_0_auto] bg-tasko-white400 rounded-lg border-line border-solid border-tasko-blue400 shadow-high-LM"
            >
              <div className="flex flex-col items-start gap-lg md:gap-xl relative self-stretch w-full flex-[0_0_auto]">
                <h1 id="hero-headline" className="relative w-full mt-[-1.00px] text-header-2 md:text-header-1 text-tasko-blue900">
                  Cultivating independence through the principles of calm technology
                </h1>

                <p className="relative w-full text-body-main lg:text-body-large text-tasko-gray400">
                  Tasko Tracker provides a focused environment for routines. We
                  replace digital noise with a structured approach that helps children
                  motivate themselves, moving away from constant parental pressure and
                  toward self-governance.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex w-max min-w-[50%] max-w-full h-12 px-4 items-center justify-center gap-sm relative bg-tasko-blue400 rounded-no shadow-medium-LM cursor-pointer border-0 hover:bg-tasko-blue500 active:bg-tasko-blue600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tasko-blue600 focus-visible:ring-offset-2"
                type="button"
                aria-label="Join the waitlist — become part of the Tasko Tracker program"
                aria-haspopup="dialog"
              >
                <span className="relative flex items-center justify-center w-full text-UI-button text-center text-tasko-gray400 leading-tight" aria-hidden="true">
                  Become part of the program
                </span>
              </button>
            </article>
          </div>
        </div>
      </section>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
