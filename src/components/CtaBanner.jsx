import { Link } from "react-router-dom";

const CtaBanner = () => (
  <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
    <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(200,164,107,0.16),rgba(27,18,14,1))] p-8 shadow-glow md:p-12 lg:p-16">
      <p className="text-xs uppercase tracking-[0.36em] text-gold">Partner. Source. Experience.</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <h2 className="font-display text-4xl leading-none text-cocoa-100 md:text-5xl lg:text-6xl">
            This is not just chocolate manufacturing. This is legacy, craft, and scale with soul.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-cocoa-200 md:text-base">
            Invite distributors, retailers, bakery partners, and procurement teams into a digital world that feels as premium as the products and partnerships behind it.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/distributor-inquiry" className="rounded-full bg-gold px-6 py-4 text-center text-sm font-semibold text-cocoa-950">
            Become a Distributor
          </Link>
          <Link to="/contact" className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-semibold text-cocoa-100">
            Talk to Sales
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
