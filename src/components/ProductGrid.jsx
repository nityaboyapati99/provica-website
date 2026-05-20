import { motion } from "framer-motion";

const BrandMark = ({ item }) => {
  if (item.brandLogo) {
    return (
      <div className="inline-flex rounded-2xl bg-white/95 px-3 py-2 shadow-[0_10px_24px_rgba(18,18,18,0.18)] backdrop-blur">
        <img src={item.brandLogo} alt={item.brand} className="h-9 w-auto object-contain" />
      </div>
    );
  }

  if (item.brandMark === "provica") {
    return (
      <div className="inline-flex rounded-full border border-gold/25 bg-[#f4eddc]/95 px-4 py-2 shadow-[0_10px_24px_rgba(18,18,18,0.18)] backdrop-blur">
        <span className="text-xl font-black uppercase tracking-[0.08em] text-[#224735]">Provica</span>
      </div>
    );
  }

  return null;
};

const ProductGrid = ({ items }) => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {items.map((item, index) => (
      <motion.article
        key={item.name}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition-transform duration-500 hover:-translate-y-2"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-gold">{item.tag}</p>
        {item.brand && <p className="mt-3 text-xs uppercase tracking-[0.22em] text-cocoa-400">{item.brand}</p>}
        <h3 className="mt-5 font-display text-3xl text-cocoa-100">{item.name}</h3>
        <p className="mt-4 text-sm leading-7 text-cocoa-300">{item.description}</p>
        <div className="relative mt-8 h-48 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(200,164,107,0.16),transparent_45%),linear-gradient(180deg,rgba(27,18,14,0.65),rgba(20,13,10,0.95))] p-4">
          <div className="absolute left-6 top-6 z-10">
            <BrandMark item={item} />
          </div>
          {item.image ? (
            <img
              src={item.image}
              alt={item.imageAlt || item.name}
              className="h-full w-full rounded-[1.1rem] object-cover"
            />
          ) : (
            <div className="flex h-full items-end rounded-[1.1rem] border border-dashed border-gold/25 p-4">
              <p className="max-w-[14rem] text-xs uppercase tracking-[0.26em] text-cocoa-300">
                Placeholder product shot or looping category video
              </p>
            </div>
          )}
        </div>
      </motion.article>
    ))}
  </div>
);

export default ProductGrid;
