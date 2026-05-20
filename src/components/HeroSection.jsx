import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { contactDetails } from "../data/siteContent";

const HeroSection = () => (
  <section className="film-grain relative isolate overflow-hidden bg-cocoa-950 px-6 pb-10 pt-10 md:px-10 lg:h-[calc(100vh-116px)] lg:px-16 lg:pb-10 lg:pt-10">
    <div className="absolute inset-0 bg-hero-radial" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
    <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(18,18,18,0.84),rgba(31,58,46,0.44),rgba(18,18,18,0.92))]" />
    <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(18,18,18,0.86))]" />

    <div className="relative mx-auto grid max-w-7xl gap-8 lg:h-full lg:grid-cols-[0.96fr_0.94fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl pt-4 lg:pt-0"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gold">Premium farm-to-chocolate legacy</p>
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.32em] text-cocoa-400"
          >
            From the soils of West Godavari...
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.32em] text-cocoa-400"
          >
            One unforgettable chocolate legacy...
          </motion.p>
        </div>
        <h1 className="mt-5 font-display text-5xl leading-[0.9] text-cocoa-100 md:text-6xl lg:text-[5.2rem]">
          Crafted from fields, farmers, and flavor.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-cocoa-300 md:text-base">
          Provica Foods is positioned here as a premium Indian cocoa story where sunrise fields, sustainable farming, skilled manufacturing, and rich chocolate expression flow together in one cinematic experience.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/products"
            className="rounded-full bg-gold px-7 py-4 text-center text-sm font-semibold text-cocoa-950 transition-transform duration-300 hover:-translate-y-1"
          >
            Explore Product Ecosystem
          </Link>
          <Link
            to="/our-story"
            className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-cocoa-100 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
          >
            Discover Our Story
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-5 text-xs uppercase tracking-[0.24em] text-cocoa-400">
          <span>{contactDetails.email}</span>
          <span>{contactDetails.phone}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow backdrop-blur">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(74,52,39,0.18),rgba(18,18,18,0.74))] lg:h-[64vh] lg:max-h-[580px] lg:aspect-auto">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video/provica-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,58,46,0.04),rgba(18,18,18,0.2))]" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
