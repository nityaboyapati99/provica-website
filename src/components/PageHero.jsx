const PageHero = ({ eyebrow, title, description, aside }) => (
  <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:min-h-[calc(100vh-116px)] lg:px-16 lg:py-24">
    <div className="absolute inset-0 bg-hero-radial opacity-90" />
    <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.38em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] text-cocoa-100 md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-cocoa-300 md:text-base">{description}</p>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="aspect-[5/4] rounded-[1.5rem] border border-dashed border-gold/30 bg-[linear-gradient(180deg,rgba(200,169,107,0.10),rgba(31,58,46,0.24))] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Content planning note</p>
          <p className="mt-4 text-sm leading-7 text-cocoa-300">{aside}</p>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
