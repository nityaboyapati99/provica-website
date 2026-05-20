import { Link } from "react-router-dom";
import { brandAssets, contactDetails, footerColumns } from "../data/siteContent";

const Footer = () => (
  <footer className="border-t border-white/10 bg-cocoa-950 px-6 py-16 md:px-10 lg:px-16">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div className="max-w-md">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">From West Godavari to the world</p>
        <div className="mt-5 w-fit rounded-[1.2rem] bg-[#f6cf2f] p-3 shadow-glow">
          <img
            src={brandAssets.logoUrl}
            alt="Provica Foods logo"
            className="h-12 w-auto rounded-md object-contain mix-blend-multiply"
          />
        </div>
        <h2 className="mt-6 font-display text-4xl text-cocoa-100">Chocolate with origin, scale, and soul.</h2>
        <p className="mt-5 text-sm leading-7 text-cocoa-400">
          Provica Foods blends the story of farmers, sustainable cocoa cultivation, and premium manufacturing into a modern Indian chocolate identity built for trust and discovery.
        </p>
        <div className="mt-6 space-y-2 text-sm text-cocoa-300">
          <p>{contactDetails.email}</p>
          <p>{contactDetails.phone}</p>
          <p>{contactDetails.hours}</p>
        </div>
      </div>

      {footerColumns.map((column) => (
        <div key={column.title}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cocoa-200">{column.title}</h3>
          <div className="mt-5 flex flex-col gap-3">
            {column.links.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-cocoa-400 transition-colors hover:text-cocoa-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-cocoa-500 md:flex-row md:items-center md:justify-between">
      <p>Provica Foods Premium Brand Experience Concept</p>
      <p>Media placeholders are designed for easy future replacement.</p>
    </div>
  </footer>
);

export default Footer;
