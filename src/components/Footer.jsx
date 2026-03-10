

export const Footer = () => {
  const footerLinks = [
    { text: "Accessibility statement" },
    { text: "Cookie preferences" },
    { text: "Privacy Policy" },
  ];

  return (
    <footer className="flex w-full items-center gap-4 px-10 py-0 relative flex-[0_0_auto] bg-tasko-white100 border-t-[0.5px] [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-tasko-blue400">
      <div className="flex flex-col items-start gap-4 px-0 py-6 relative flex-1 grow">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[42.95px] h-[39.9px] items-start relative">
              <div className="relative self-stretch w-full aspect-[1.23] bg-[url(/group.png)] bg-[100%_100%]" />
            </div>

            <div className="relative w-[137px] h-7 text-header-3 text-tasko-gray900">
            Tasko tracker
          </div>
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
                <span className="flex w-fit mt-[-1.00px] text-body-large text-tasko-gray400 items-center relative">
                  Links
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex h-[53.67px] items-start justify-between px-0 py-4 relative self-stretch w-full border-t-[0.5px] [border-top-style:solid] border-tasko-white700">
          <div className="relative flex-1 grow h-[21px]">
            <p className="w-[185px] mt-[-1.00px] text-body-main text-tasko-gray400 relative">
            © 2024 tasko tracker
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
