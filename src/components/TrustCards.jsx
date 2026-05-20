import { motion } from "framer-motion";

const TrustCards = ({ items }) => (
  <div className="grid gap-6 lg:grid-cols-3">
    {items.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="rounded-[2rem] border border-cocoa-900/10 bg-cocoa-50 p-7 text-cocoa-900 shadow-[0_16px_50px_rgba(36,23,18,0.08)]"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-ember">{`0${index + 1}`}</p>
        <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-cocoa-700">{item.text}</p>
      </motion.div>
    ))}
  </div>
);

export default TrustCards;
