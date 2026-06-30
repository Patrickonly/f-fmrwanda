import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero, SectionHeader } from "@/components/Section";
import consultancy from "@/assets/consultancy.jpg";
import gingerField from "@/assets/ginger-field.jpg";
import { ShieldCheck, Handshake, PackageCheck, Users, Lightbulb, Sun, Sprout, Globe, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — F&FM Rwanda Ltd" },
      { name: "description", content: "Mission, vision and the people behind F&FM Rwanda Ltd — transforming Rwandan agriculture into a sustainable, market-oriented enterprise." },
      { property: "og:title", content: "About F&FM Rwanda Ltd" },
      { property: "og:description", content: "Empowering farmers. Reliable market-oriented production." },
      { property: "og:image", content: gingerField },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Reliable Agricultural Expertise", d: "Deep practical experience in farming, consultancy and premium supply chains — guaranteeing absolute consistency for every producer we work with." },
  { icon: Handshake, t: "Long-Term Farming Contracts", d: "Structured multi-year contracts that deliver predictable security and financial stability for both farmers and corporate buyers." },
  { icon: PackageCheck, t: "Uncompromising Quality Focus", d: "Quality control at every phase — from micro-propagation and harvesting through value-add processing and international delivery." },
  { icon: Users, t: "Robust Integrated Farmer Network", d: "Strategic partnerships with dynamic outgrowers across Rwanda, aggregating products efficiently while elevating rural economies." },
  { icon: Lightbulb, t: "Innovation & Ag-Tech Adoption", d: "We integrate modern agricultural tools, clean biological inputs and climate-resilient practices to optimize yields consistently." },
  { icon: Sun, t: "Absolute Transparency & Integrity", d: "Open partnerships rooted in honest communication, fair pricing grids and mutually beneficial business terms." },
  { icon: Sprout, t: "Bespoke Tailored Solutions", d: "Bulk fresh exports, contractual outgrower networks or technical consultancy — we scale to match your specific needs." },
  { icon: HeartHandshake, t: "Clear Socio-Economic Impact", d: "Regional economic growth, sustainable jobs, youth & women empowerment, and stronger national food security." },
  { icon: Globe, t: "Reliable Supply & Export Alliances", d: "Long-term alliances with global buyers through institutional reliability, professional shipping and dedicated account support." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About F&FM Rwanda Ltd"
        title={<>Farming for Wealth<br />and Health.</>}
        description="Empowering farmers. Reliable market-oriented production. We transform Rwandan agriculture into a sustainable, highly profitable and internationally connected enterprise."
        image={gingerField}
      />

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-8">
          {[
            { eyebrow: "Our Mission", t: "Quality, innovation, contract farming.", d: "To improve livelihoods and promote sustainable agriculture through quality production, innovation, contract farming and professional agricultural services across our network." },
            { eyebrow: "Our Vision", t: "A thriving regional ecosystem.", d: "A thriving, innovative agricultural sector across Rwanda and the East African Community — driven by elite biological inputs, scientific training frameworks and structurally empowered farming communities." },
          ].map((b, i) => (
            <motion.div
              key={b.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-card border border-border shadow-soft"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">{b.eyebrow}</span>
              <h2 className="mt-3 font-display text-4xl leading-tight">{b.t}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={consultancy}
            alt="Agronomist consulting with farmers"
            loading="lazy"
            className="rounded-3xl shadow-leaf aspect-[4/5] object-cover w-full"
          />
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title={<>From volcanic hills to global markets.</>}
              description="F&FM Rwanda Ltd is a fully integrated agricultural company headquartered in Kayonza District, Eastern Province. We are specialists in high-value crops — Garlic, Ginger, Turmeric, Rosemary, Lemongrass and select fruits — and a trusted partner across the contract-farming value chain."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our model combines elite biological inputs, scientific training frameworks and
              structurally empowered farming communities — producing reliable volumes for both
              domestic distribution and international export markets.
            </p>
            <Link to="/leadership" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Meet our leadership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE VALUES — 9 */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            center
            eyebrow="Core Values"
            title={<>Why partners choose F&amp;FM Rwanda.</>}
            description="Nine commitments that define every contract, every harvest and every relationship."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-7 rounded-3xl bg-card border border-border hover:shadow-leaf transition-shadow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
