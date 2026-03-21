import { useState } from "react";
import taskotrackerlogo from "../assets/TaskoTrackerNameLogo.svg";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navigationItems = [
    { label: "Home",  href: "#top" },
    { label: "Info",  href: "#problem-statement" },
    { label: "Price", href: "#pricing" },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item.label);
    const target = item.href === "#top"
      ? document.body
      : document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      target.focus?.({ preventScroll: true });
    }
  };

  return (
    <>
      {/* Skip to main content — visually hidden, shown on focus for screen-reader / keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-md focus:py-sm focus:bg-tasko-blue400 focus:text-tasko-gray900 focus:rounded-no focus:text-UI-button focus:shadow-high-LM focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        id="main-header"
        role="banner"
        className="flex w-full fixed top-0 left-0 right-0 z-[1000] items-center justify-between px-6 py-1 bg-tasko-white100 shadow-vertical-down-LM"
      >
        <a
          href="#top"
          aria-label="Tasko Tracker — go to top of page"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-tasko-blue500 focus-visible:rounded-xs"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setActiveTab("Home"); }}
        >
          <img
            className="relative w-[100px] h-[82.46px] aspect-[1.21]"
            alt="Tasko Tracker Logo"
            src={taskotrackerlogo}
          />
        </a>

        <nav
          className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] list-none m-0 p-0" role="list">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.label;

              return (
                <li
                  key={item.label}
                  className="inline-flex gap-2.5 flex-[0_0_auto] items-center relative"
                >
                  <a
                    href={item.href}
                    className={`flex w-fit mt-[-1.00px] text-body-large items-center relative no-underline border-b-2 pb-[4px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-tasko-blue500 focus-visible:outline-offset-2 focus-visible:rounded-xs ${
                      isActive
                        ? "text-tasko-blue600 border-tasko-blue600"
                        : "text-tasko-gray400 border-transparent hover:text-tasko-blue500"
                    }`}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <img
            className="relative w-[60.10px] h-px mb-[-1.00px]"
            alt=""
            aria-hidden="true"
          />
        </nav>
      </header>
    </>
  );
};
