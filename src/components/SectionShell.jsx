import { motion } from "framer-motion";

const SectionShell = ({ id, eyebrow, title, intro, children, dark = false }) => (
  <section
    id={id}
    className={`relative overflow-hidden px-6 py-20 md:px-10 lg:px-16 lg:py-28 ${
      dark ? "bg-cocoa-900 text-cocoa-100" : "bg-cocoa-100 text-cocoa-950"
    }`}
  >
    <div className={`texture-overlay absolute inset-0 ${dark ? "opacity-60" : "opacity-35"}`} />
    <div className="mx-auto max-w-7xl">
      {(eyebrow || title || intro) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="font-display text-4xl leading-none md:text-5xl lg:text-6xl">{title}</h2>}
          {intro && <p className="mt-6 text-sm leading-7 text-current/75 md:text-base">{intro}</p>}
        </motion.div>
      )}
      <div className="relative">{children}</div>
    </div>
  </section>
);

export default SectionShell;
