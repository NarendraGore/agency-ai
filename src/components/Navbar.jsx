import { useState } from "react";
import assets from "../assets/assets/assets.js";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact us", href: "#contact-us" },
];

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/50 font-medium backdrop-blur-xl dark:bg-gray-900/70">
      <div className="flex items-center justify-between px-4 py-4 sm:px-12 lg:px-24 xl:px-40">
        <a href="#" className="shrink-0">
          <img
            src={isDark ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-40"
            alt="Agency.AI"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-700 dark:text-white sm:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary dark:hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            <img
              src={isDark ? assets.sun_icon : assets.moon_icon}
              className="size-5"
              alt=""
            />
          </button>

          <a
            href="#contact-us"
            className="hidden items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm text-white transition-transform hover:scale-105 sm:flex"
          >
            Connect <img src={assets.arrow_icon} width={14} alt="" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 sm:hidden"
          >
            <img
              src={isDark ? assets.menu_icon_dark : assets.menu_icon}
              className="size-5"
              alt=""
            />
          </button>
        </div>
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 sm:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex w-64 flex-col gap-6 bg-primary p-8 pt-20 text-white transition-transform duration-300 sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6"
        >
          <img src={assets.close_icon} className="size-5" alt="" />
        </button>

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-lg transition-opacity hover:opacity-80"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact-us"
          onClick={() => setMenuOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-2 text-sm transition-colors hover:bg-white/25"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
