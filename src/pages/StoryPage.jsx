import PageHero from "../components/PageHero";
import SectionShell from "../components/SectionShell";
import StorySplit from "../components/StorySplit";
import StatsBand from "../components/StatsBand";
import { impactStats } from "../data/siteContent";

const contentMap = {
  about: {
    eyebrow: "About Provica",
    title: "A premium Indian chocolate identity built on origin, craftsmanship, and scale.",
    description:
      "Use this page to translate brand intent into company clarity. It should welcome both a curious consumer and a serious business buyer with the same warmth and assurance.",
    aside:
      "Ideal modules: founder note, brand philosophy, premium positioning statement, and a concise timeline of cocoa sourcing to market evolution.",
  },
  story: {
    eyebrow: "Our Story",
    title: "From West Godavari farms to a modern chocolate ecosystem.",
    description:
      "This page expands the homepage narrative into a layered brand documentary, exploring people, place, process, and product in a slower emotional rhythm.",
    aside:
      "Use long-form visual storytelling here: farm portraits, aerials, timelines, origin maps, and editorial quote blocks from growers or leadership.",
  },
  farmers: {
    eyebrow: "Farmers & Sustainability",
    title: "20,000 farming lives at the heart of a more meaningful cocoa journey.",
    description:
      "This page should make sustainability feel human, local, and specific. Show what the cocoa ecosystem means for West Godavari communities, agricultural continuity, and responsible growth.",
    aside:
      "Future modules can include region maps, grower interviews, cultivation season visuals, traceability stories, and sustainability metrics.",
  },
  careers: {
    eyebrow: "Careers",
    title: "Join a chocolate brand building premium Indian food culture from the ground up.",
    description:
      "Careers should feel aspirational and purposeful rather than transactional, connecting talent to brand ambition, manufacturing rigor, and the pride of building an Indian-origin premium category leader.",
    aside:
      "Use this page for culture storytelling, team values, hiring process, and employer-brand visuals from farms, factory, and office environments.",
  },
};

const StoryPage = ({ variant = "story" }) => {
  const content = contentMap[variant];

  return (
    <>
      <PageHero {...content} />
      <SectionShell dark eyebrow="Narrative Architecture" title="A premium editorial page structure with room to grow.">
        <div className="grid gap-14">
          <StorySplit
            eyebrow="Chapter one"
            title="Begin with a slower, more intimate view of cocoa origin and place."
            text="Use immersive copy and visual pacing so this page feels like a guided experience rather than a brochure. Content should breathe, with oversized type, quote moments, and elegant transitions between themes."
            mediaLabel="Editorial media slot"
            mediaNote="Ideal for future cinematic reels, documentary stills, founder portraiture, or quote-led parallax imagery."
          />
          <StorySplit
            eyebrow="Chapter two"
            title="Transition into proof: community, process, and the confidence of a serious business."
            text="Narrative pages should always bring emotion back to trust. Even storytelling-focused pages can gently reinforce consistency, scale, and premium intent through carefully written copy and visual evidence."
            reverse
            mediaLabel="Timeline or map slot"
            mediaNote="Use for region maps, impact infographics, farm clusters, or manufacturing milestone timelines."
          />
        </div>
      </SectionShell>
      <SectionShell eyebrow="Impact Markers" title="A clear structure for metrics, milestones, and future proof points.">
        <StatsBand items={impactStats} />
      </SectionShell>
    </>
  );
};

export default StoryPage;
