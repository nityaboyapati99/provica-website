import { motion } from "framer-motion";

const StorySplit = ({ eyebrow, title, text, reverse = false, mediaLabel, mediaNote }) => (
  <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h3 className="font-display text-4xl leading-tight md:text-5xl">{title}</h3>
      <p className="mt-6 max-w-xl text-sm leading-7 text-current/75 md:text-base">{text}</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow"
    >
      <div className="flex min-h-[360px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(200,164,107,0.12),rgba(20,13,10,0.12))] p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">{mediaLabel}</span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-current/70">
            Placeholder asset
          </span>
        </div>
        <p className="max-w-sm text-sm leading-7 text-current/75">{mediaNote}</p>
      </div>
    </motion.div>
  </div>
);

export default StorySplit;
