import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/Section";
import farmer from "@/assets/farmer.jpg";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/_site/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — F&FM Rwanda Ltd" },
      { name: "description", content: "Meet the executive team driving F&FM Rwanda Ltd — agriculture, technical, marketing, business development and field operations." },
      { property: "og:title", content: "Leadership — F&FM Rwanda Ltd" },
      { property: "og:image", content: farmer },
    ],
  }),
  component: Leadership,
});

const team = [
  {
    name: "MANIRARO Theogene",
    role: "Managing Director & Founder",
    resp: "Managing nationwide farming operations, standardizing large-scale seed production systems, deploying local cooperative training layouts, and coordinating public-private partnership (PPP) and government stakeholder relations.",
    phone: ["+250 789 384 603", "+250 795 093 115"],
    region: "Rwanda HQ",
  },
  {
    name: "Steven Parmar",
    role: "Chief Marketing Officer (CMO)",
    resp: "Global B2B high-value market linkages, international brand scaling, overseas export buyer relationships and cross-border commercial trade profiles.",
    phone: ["+91 84888 78938"],
    region: "India & International Operations",
  },
  {
    name: "HABANABAKIZE Thomas",
    role: "Technical Director",
    resp: "Overseeing scientific crop implementation models, monitoring GAP compliance, initiating research innovation setups and optimizing advanced processing technology protocols.",
    phone: ["+250 783 261 439", "+250 732 798 074"],
    region: "Rwanda HQ",
  },
  {
    name: "UWIFASHIJE Claudine",
    role: "Business Development Operations Officer",
    resp: "Leading commercial business growth strategies, structuring multi-party contract farming frameworks, managing project engineering portfolios and servicing enterprise corporate accounts.",
    phone: ["+250 784 017 642"],
    region: "Rwanda HQ",
  },
  {
    name: "HAVUGIMANA Ildephonse",
    role: "Field Operations Officer",
    resp: "Directing cooperative identification matrices, supervising smallholder recruitment, leading cluster group field coordination and administering weekly crop health monitoring.",
    phone: ["+250 788 596 415"],
    region: "Rwanda HQ",
  },
];

function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={<>The team behind every harvest.</>}
        description="Executive leaders steering F&FM Rwanda Ltd across agricultural operations, technical research, marketing, business development and field coordination."
        image={farmer}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-6 sm:grid-cols-2">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-leaf transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground font-display text-2xl shadow-leaf">
                  {m.name.split(" ").slice(-1)[0][0]}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-tight">{m.name}</h3>
                  <p className="mt-1 text-primary font-semibold text-sm">{m.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{m.region}</p>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed">{m.resp}</p>
              <div className="mt-5 pt-5 border-t border-border space-y-2">
                {m.phone.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" /> {p}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Corporate Headquarters</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Kayonza District, Mukarange Sector — 25 meters from the Kayonza District
            Administration Offices, Eastern Province, Republic of Rwanda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+250789384603" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-leaf">
              <Phone className="h-4 w-4" /> +250 789 384 603
            </a>
            <a href="mailto:info@fandfmrwandaltd.com" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 font-semibold">
              <Mail className="h-4 w-4" /> info@fandfmrwandaltd.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
