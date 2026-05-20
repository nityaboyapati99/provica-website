import PageHero from "../components/PageHero";
import SectionShell from "../components/SectionShell";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/siteContent";

const ProductPage = () => (
  <>
    <PageHero
      eyebrow="Products"
      title="A portfolio that now begins with real Provica product families, not just generic categories."
      description="This page now reflects the structure you clarified: Classico as the compound line, including white compound, and Zoops as a chocolate brand under the Provica umbrella."
      aside="Next upgrades can break this into dedicated brand pages for Classico and Zoops, plus SKU-level product detail templates, packaging views, and brochure downloads."
    />
    <SectionShell
      dark
      eyebrow="Portfolio System"
      title="Each product family is positioned as both a brand signal and a functional solution."
      intro="The current grid now starts reflecting real portfolio relationships: Classico compounds for application-led manufacturing needs, and Zoops for consumer-facing chocolate presence under Provica."
    >
      <ProductGrid items={products} />
    </SectionShell>
  </>
);

export default ProductPage;
