import HeroSection from "../components/HeroSection";
import SectionShell from "../components/SectionShell";
import StorySplit from "../components/StorySplit";
import StatsBand from "../components/StatsBand";
import ProductGrid from "../components/ProductGrid";
import TrustCards from "../components/TrustCards";
import MediaGallery from "../components/MediaGallery";
import CtaBanner from "../components/CtaBanner";
import {
  storyMoments,
  impactStats,
  products,
  trustPoints,
  experienceGallery,
} from "../data/siteContent";

const HomePage = () => (
  <>
    <HeroSection />

    <SectionShell
      id="brand-story"
      dark
      eyebrow="Brand Story"
      title="An Indian chocolate brand world told through soil, leaves, people, and refined craft."
      intro="The homepage now behaves more like a documentary sequence than a chocolate template. Each chapter moves from landscape and farmer presence into factory precision and product richness, so trust is built emotionally before the visitor explores deeper."
    >
      <div className="grid gap-14">
        {storyMoments.map((moment, index) => (
          <StorySplit
            key={moment.title}
            eyebrow={moment.eyebrow}
            title={moment.title}
            text={moment.text}
            reverse={index % 2 === 1}
            mediaLabel={index === 0 ? "Farm origin visual" : "Craft and manufacturing visual"}
            mediaNote={
              index === 0
                ? "Use slow, atmospheric cocoa farm footage, hands-on harvesting, tree canopy light, and warm misty morning scenes rather than glossy commercial visuals."
                : "Use disciplined factory footage, molten chocolate, quality checks, packaging systems, and stainless-steel production environments with warm documentary grading."
            }
          />
        ))}
      </div>
    </SectionShell>

    <SectionShell
      id="impact"
      eyebrow="Farmer Impact"
      title="The cocoa ecosystem becomes a source of emotional authority."
      intro="This section should feel rooted and human, not data-heavy for its own sake. Use maps, portraiture, pod textures, sunrise field imagery, and concise copy to connect scale with livelihood and land."
    >
      <StatsBand items={impactStats} />
    </SectionShell>

    <SectionShell
      id="factory"
      dark
      eyebrow="Factory Excellence"
      title="Manufacturing confidence staged like the second act of a premium documentary."
      intro="Industrial credibility is presented with elegant restraint. Hygiene, consistency, scale, process control, and future certification modules sit inside a visual language grounded in green, ivory, and matte gold rather than generic chocolate brown."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Automated production storytelling with room for real future video proof",
              "Quality and hygiene narratives framed for procurement and distributor trust",
              "Macro chocolate textures and machinery rhythm to keep industrial storytelling emotionally rich",
              "A dedicated certification strip for FSSAI, QA, export, and process signals",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-cocoa-950/50 p-5 text-sm leading-7 text-cocoa-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-dashed border-gold/25 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Certification and audit wall</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cocoa-300">
            Reserve this space for future plant photos, certifications, export badges, and process diagrams so the section becomes a living proof point as assets are collected. The current public site clearly exposes contact details and hours, while certification specifics can be added here once verified.
          </p>
        </div>
      </div>
    </SectionShell>

    <SectionShell
      id="products"
      dark
      eyebrow="Product Ecosystem"
      title="A versatile portfolio presented with the appetite appeal of a legacy farm-to-chocolate brand."
      intro="Instead of a generic catalog grid, the portfolio now begins reflecting actual Provica product families: Classico compound products and Zoops as a chocolate brand within the Provica entity."
    >
      <ProductGrid items={products} />
    </SectionShell>

    <SectionShell
      id="experience"
      dark
      eyebrow="Experience Layer"
      title="Placeholder media architecture built for later replacement with premium motion assets."
      intro="Every media container is reusable and intentional. The launch version feels polished immediately, but swapping in farm films, factory reels, product photography, testimonials, or short-form clips later will be straightforward."
    >
      <MediaGallery items={experienceGallery} />
    </SectionShell>

    <SectionShell
      id="trust"
      eyebrow="Legacy + Trust"
      title="The closing chapters leave visitors with confidence, memory, and desire."
      intro="This is where the brand promise becomes explicit. Legacy, origin, manufacturing, and premium versatility close the loop so the user leaves feeling they have discovered a serious chocolate business with rare emotional depth."
    >
      <TrustCards items={trustPoints} />
    </SectionShell>

    <CtaBanner />
  </>
);

export default HomePage;
