import PageHero from "../components/PageHero";
import SectionShell from "../components/SectionShell";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-cocoa-100 outline-none transition focus:border-gold/50";

const ContactPage = ({ distributorMode = false }) => (
  <>
    <PageHero
      eyebrow={distributorMode ? "Distributor Inquiry" : "Contact"}
      title={
        distributorMode
          ? "Open the door for premium retail, distribution, and regional growth partnerships."
          : "Start a conversation with Provica Foods."
      }
      description={
        distributorMode
          ? "This page is structured for distributors, retail partners, and channel-led conversations. It can later connect to CRM flows, lead scoring, and regional partner workflows."
          : "Create a contact experience that feels elevated and clear, whether the visitor is a buyer, a retailer, a café owner, a procurement manager, or a consumer."
      }
      aside="Recommended future enhancements: CRM integration, segmented forms, WhatsApp CTA, office or plant map embed, and downloadable brochures."
    />
    <SectionShell
      dark
      eyebrow="Inquiry Experience"
      title="A clean, premium form pattern that can evolve into a high-conversion lead flow."
      intro="This form is intentionally simple in the concept build. The visual treatment keeps it refined while leaving space for real business logic, validations, and integrations later."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact pathway</p>
          <h3 className="mt-4 font-display text-4xl text-cocoa-100">Built to convert interest into conversation.</h3>
          <p className="mt-5 text-sm leading-7 text-cocoa-300">
            Capture segment, product interest, location, business scale, and inquiry type. For distributor flows, add territory, annual throughput, and channel footprint.
          </p>
        </div>
        <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-cocoa-950/70 p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className={fieldClass} placeholder="Full name" />
            <input className={fieldClass} placeholder="Company name" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className={fieldClass} placeholder="Email address" />
            <input className={fieldClass} placeholder="Phone number" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className={fieldClass} placeholder="City / Region" />
            <input className={fieldClass} placeholder={distributorMode ? "Distribution territory" : "Inquiry type"} />
          </div>
          <textarea className={`${fieldClass} min-h-36`} placeholder="Tell us about your requirement" />
          <button type="button" className="rounded-full bg-gold px-6 py-4 text-sm font-semibold text-cocoa-950">
            Submit Inquiry
          </button>
        </form>
      </div>
    </SectionShell>
  </>
);

export default ContactPage;
