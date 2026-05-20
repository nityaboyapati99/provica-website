import PageHero from "../components/PageHero";
import SectionShell from "../components/SectionShell";
import FeatureList from "../components/FeatureList";
import { certifications } from "../data/siteContent";

const ManufacturingPage = ({ certificationsOnly = false }) => (
  <>
    <PageHero
      eyebrow={certificationsOnly ? "Certifications" : "Manufacturing Excellence"}
      title={
        certificationsOnly
          ? "Proof-ready quality storytelling for distributors, procurement teams, and partners."
          : "Modern production confidence presented through the lens of a luxury food brand."
      }
      description={
        certificationsOnly
          ? "This page is structured to house real certificates, audit signals, food safety assurances, and process trust markers as they become available."
          : "Manufacturing is a core brand asset here. The experience should make process discipline, hygiene, consistency, and capability feel aspirational and commercially reassuring."
      }
      aside="Ideal future content: plant photography, QA videos, process diagrams, certificates, export readiness, and founder or operations leadership statements."
    />
    <SectionShell
      dark
      eyebrow="Trust Framework"
      title="A modular structure for capability proof, quality evidence, and future documentation."
      intro="This page is intentionally media-ready so the team can replace placeholders with real proof assets over time without redesigning the experience."
    >
      <FeatureList items={certifications} />
    </SectionShell>
  </>
);

export default ManufacturingPage;
