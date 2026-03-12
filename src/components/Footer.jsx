

import taskoTrackerLogo from "../assets/TaskoTrackerLogo.svg";
import githubLogo from "../assets/Octicons-mark-github.svg.png";
import linkedInLogo from "../assets/LinkedIn_Logo.svg.png";
import xLogo from "../assets/X_logo_2023.svg.png";

export const Footer = () => {
  const footerLinks = [
    { text: "Accessibility statement", href: "/accessibility-statement" },
    { text: "Cookie preferences", href: "/cookie-preferences" },
    { text: "Privacy Policy", href: "/privacy-policy" },
  ];
  const socialLinks = [
    { alt: "GitHub", href: "#", src: githubLogo },
    { alt: "LinkedIn", href: "#", src: linkedInLogo },
    { alt: "X", href: "#", src: xLogo },
  ];

  return (
    <footer className="w-full px-6 md:px-10 py-0 relative flex-[0_0_auto] bg-tasko-white100 border-t-[0.5px] [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-tasko-blue400">
      <div className="absolute top-6 left-6 md:left-10 inline-flex items-center gap-4">
        <img
          className="relative h-10 w-auto"
          src={taskoTrackerLogo}
          alt="TaskoTracker logo"
        />
        <span className="whitespace-nowrap text-body-large text-tasko-gray400">
          Organize your routines efficiently with TaskoTracker
        </span>
      </div>

      <div className="flex flex-col items-start gap-4 px-0 py-6 pt-24 pb-24 relative flex-1 grow">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <nav
            className="flex w-[533px] items-center gap-6 relative flex-[0_0_auto]"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex gap-2.5 flex-[0_0_auto] items-center relative"
              >
                <span className="flex w-fit mt-[-1.00px] text-header-4 text-tasko-gray400 items-center relative">
                  {link.text}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex h-[53.67px] items-start justify-between px-0 py-4 relative self-stretch w-full border-t-[0.5px] [border-top-style:solid] border-tasko-white700">
          <div className="relative flex-1 grow h-[21px]">
            <p className="w-[220px] mt-[-1.00px] text-body-large text-tasko-gray400 relative">
            © 2026 tasko tracker
          </p>
          </div>

          <div className="inline-flex items-center justify-end gap-6 absolute bottom-6 right-6 md:right-10">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.alt}
                href={socialLink.href}
                aria-label={socialLink.alt}
                className="inline-flex items-center justify-center relative flex-[0_0_auto]"
              >
                <img
                  className="relative h-5 w-auto"
                  src={socialLink.src}
                  alt={socialLink.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
