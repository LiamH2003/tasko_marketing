

export const Footer = () => {
  const footerLinks = [
    { text: "Accessibility statement" },
    { text: "Cookie preferences" },
    { text: "Privacy Policy" },
  ];

  return (
    <footer className="flex w-[1728px] items-center gap-4 px-10 py-0 relative flex-[0_0_auto] bg-tasko-white100 border-t-[0.5px] [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-tasko-blue400">
      <div className="flex flex-col items-start gap-4 px-0 py-6 relative flex-1 grow">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[42.95px] h-[39.9px] items-start relative">
              <div className="relative self-stretch w-full aspect-[1.23] bg-[url(/group.png)] bg-[100%_100%]" />
            </div>

            <p className="relative w-fit font-body-main font-[number:var(--body-main-font-weight)] text-tasko-gray400 text-[length:var(--body-main-font-size)] tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
              Organize your routines efficiently with TaskoTracker
            </p>
          </div>

          <nav
            className="flex w-[533px] items-center gap-6 relative flex-[0_0_auto]"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex gap-2.5 flex-[0_0_auto] items-center relative"
              >
                <span className="flex w-fit mt-[-1.00px] font-body-large font-[number:var(--body-large-font-weight)] text-tasko-gray400 text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] items-center relative [font-style:var(--body-large-font-style)]">
                  {link.text}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex h-[53.67px] items-start justify-between px-0 py-4 relative self-stretch w-full border-t-[0.5px] [border-top-style:solid] border-tasko-white700">
          <div className="relative flex-1 grow h-[21px]">
            <p className="absolute top-0 left-0 font-body-main font-[number:var(--body-main-font-weight)] text-tasko-white700 text-[length:var(--body-main-font-size)] tracking-[var(--body-main-letter-spacing)] leading-[var(--body-main-line-height)] [font-style:var(--body-main-font-style)]">
              © 2026 TaskoTracker. All rights reserved.
            </p>
          </div>

          <img
            className="relative w-[108px] h-5"
            alt="Social media icons"
          />
        </div>
      </div>
    </footer>
  );
};
