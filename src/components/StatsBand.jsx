import { motion } from "framer-motion";

const StatsBand = ({ items }) => (
  <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
    {items.map((item, index) => (
      <motion.div
        key={item.label}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="bg-cocoa-900/90 p-8"
      >
        <p className="font-display text-4xl text-cocoa-100">{item.value}</p>
        <p className="mt-3 max-w-xs text-sm leading-7 text-cocoa-300">{item.label}</p>
      </motion.div>
    ))}
  </div>
);

export default StatsBand;
