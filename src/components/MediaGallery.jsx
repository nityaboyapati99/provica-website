import { motion } from "framer-motion";

const MediaGallery = ({ items }) => (
  <div className="grid gap-6 lg:grid-cols-3">
    {items.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-5"
      >
        <div className="flex min-h-[320px] flex-col justify-between rounded-[1.4rem] border border-dashed border-gold/30 bg-[linear-gradient(180deg,rgba(200,164,107,0.08),rgba(255,255,255,0.02))] p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{item.type}</p>
            <h3 className="mt-4 font-display text-3xl text-cocoa-100">{item.title}</h3>
          </div>
          <p className="max-w-xs text-sm leading-7 text-cocoa-300">{item.note}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default MediaGallery;
