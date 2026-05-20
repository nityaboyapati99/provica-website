import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { brandAssets, contactDetails, navLinks } from "../data/siteContent";

const baseLink =
  "transition-colors duration-300 hover:text-cocoa-100 data-[active=true]:text-cocoa-100 data-[active=true]:after:w-full";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cocoa-950/78 backdrop-blur-xl">
      <div className="border-b border-white/5 px-6 py-2 text-[11px] uppercase tracking-[0.28em] text-cocoa-400 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <span>{contactDetails.email}</span>
          <span>{contactDetails.phone}</span>
          <span>{contactDetails.hours}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center">
          <div className="rounded-[0.9rem] bg-[#f6cf2f] px-2 py-1.5 shadow-glow">
            <img
              src={brandAssets.logoUrl}
              alt="Provica Foods logo"
              className="h-11 w-auto object-contain mix-blend-multiply saturate-150 brightness-110 lg:h-12"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={`${baseLink} relative text-sm text-cocoa-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all`}
            >
              {({ isActive }) => <span data-active={isActive}>{link.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full border border-gold/40 bg-gold px-5 py-3 text-sm font-semibold text-cocoa-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cocoa-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-[10px] uppercase tracking-[0.26em]">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-cocoa-900 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cocoa-200"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-cocoa-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
