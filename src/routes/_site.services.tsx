import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/Section";
import farming from "@/assets/farming.jpg";
import {
  Sprout, Handshake, Lightbulb, PackageCheck, GraduationCap,
  FlaskConical, Factory, Leaf, Truck, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services — F&FM Rwanda Ltd" },
      { name: "description", content: "Nine integrated agricultural services — production, contract farming, consultancy, processing, training, research, inputs, export & market linkage." },
      { property: "og:title", content: "Our 9-Pillar Service Ecosystem — F&FM Rwanda" },
      { property: "og:image", content: farming },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Sprout, t: "Agricultural Production", d: "We cultivate and supply a premium variety of commercial crops using modern production techniques — scaling high-value commodities including Garlic, Ginger, Turmeric, Rosemary, Lemongrass, specialized fruits and other in-demand market crops." },
  { icon: Handshake, t: "Contract Farming", d: "We structure secured, mutually beneficial long-term contract farming arrangements with smallholders and corporate buyers — ensuring reliable volume production, guaranteed market access and resilient supply chains." },
  { icon: Lightbulb, t: "Agricultural Consultancy", d: "Top-tier professional advisory and technical extension services: crop production optimization, full-scale farm operations management, agricultural project development, agribusiness planning and customized farmer training." },
  { icon: PackageCheck, t: "Supply of Agricultural Products", d: "We systematically source, aggregate and supply graded high-quality agricultural products from our corporate farms and trusted smallholders — meeting strict supply timelines for local distribution and international export." },
  { icon: GraduationCap, t: "Farmer Training & Extension", d: "Targeted outreach programs covering Good Agricultural Practices (GAP), climate-smart farming, integrated crop management and specialized post-harvest handling to dramatically reduce field losses." },
  { icon: FlaskConical, t: "Research and Innovation", d: "Continuous testing and rollout of improved crop methods, sustainable biological systems, ag-tech adaptation and market-driven value-chain enhancements." },
  { icon: Factory, t: "Processing & Value Addition", d: "We invest in physical processing and value-addition — sorting, dehydration, milling, packaging and refining — to extend shelf life and unlock premium pricing margins." },
  { icon: Leaf, t: "Agricultural Input Support", d: "End-to-end guidance on elite certified seeds and planting materials, optimal fertilizer use, eco-friendly crop protection and structured farm establishment engineering." },
  { icon: Truck, t: "Export & Market Linkage", d: "We bridge systemic gaps by connecting Rwandan farmers and cooperatives directly with verified local and international bulk buyers — unlocking lucrative global trade routes." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>The 9-Pillar service ecosystem.</>}
        description="From soil preparation through final international shipment — nine integrated services delivering reliability, quality and traceability at every stage."
        image={farming}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-leaf transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl text-muted-foreground/40">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Need a tailored solution?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our team designs custom programs for cooperatives, NGOs, government bodies and large buyers.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-leaf hover:bg-primary-glow transition-colors">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
