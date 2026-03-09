import { useState } from "react";
import taskotrackerlogo from "../assets/TaskoTrackerLogo.svg";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navigationItems = [
    { label: "Home" },
    { label: "Info" },
    { label: "Get Started" },
  ];

  return (
    <header className="flex w-[1728px] h-[105.23px] relative items-center justify-between px-10 py-8 bg-tasko-gray500 shadow-vertical-down-LM">
      <img
        className="relative w-[50px] h-[41.23px] aspect-[1.21]"
        alt="Tasko Tracker Logo"
        src={taskotrackerlogo}
      />

      <nav
        className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]"
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] list-none m-0 p-0">
          {navigationItems.map((item) => {
            // Check if the current item is the active tab
            const isActive = activeTab === item.label;

            return (
              <li
                key={item.label}
                className="inline-flex gap-2.5 flex-[0_0_auto] items-center relative"
              >
                <a
                  href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                  className={`flex w-fit mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] items-center relative [font-style:var(--body-large-font-style)] no-underline ${
                    isActive
                      ? "text-tasko-blue600"
                      : "text-tasko-gray400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.label);
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <img
          className="relative w-[30.05px] h-px mb-[-1.00px]"
          alt=""
          aria-hidden="true"
        />
      </nav>
    </header>
  );
};

