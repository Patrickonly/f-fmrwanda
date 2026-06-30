import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Sprout, Leaf, Handshake, Lightbulb, Factory, Truck, GraduationCap,
  FlaskConical, PackageCheck, ArrowRight, ShieldCheck, Globe, Users, Sun,
} from "lucide-react";
import gingerField from "@/assets/ginger-field.jpg";
import garlicHarvest from "@/assets/garlic-harvest.jpg";
import consultancy from "@/assets/consultancy.jpg";
import turmeric from "@/assets/turmeric.jpg";
import farming from "@/assets/farming.jpg";
import farmer from "@/assets/farmer.jpg";
import { SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "F&FM Rwanda Ltd — Farming for Wealth and Health" },
      { name: "description", content: "Your trusted partner in agriculture, contract farming, innovation & sustainable growth. Specialists in Garlic, Ginger & Smart Farming across Rwanda and the EAC." },
      { property: "og:title", content: "F&FM Rwanda Ltd — Farming for Wealth and Health" },
      { property: "og:description", content: "Specialists in Garlic, Ginger & Smart Farming Solutions across Rwanda & the EAC." },
      { property: "og:image", content: gingerField },
      { name: "twitter:image", content: gingerField },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Sprout, t: "Agricultural Production", d: "Premium commercial crops — Garlic, Ginger, Turmeric, Rosemary, Lemongrass and high-value fruits — produced at scale with modern techniques." },
  { icon: Handshake, t: "Contract Farming", d: "Secured long-term contracts with smallholders and corporate buyers for reliable volumes, guaranteed market access and resilient supply chains." },
  { icon: Lightbulb, t: "Agricultural Consultancy", d: "Crop optimization, farm operations management, agribusiness planning, project development and institutional capacity building." },
  { icon: PackageCheck, t: "Supply of Products", d: "Sourcing, aggregation and graded supply of high-quality produce for both local distribution and demanding international export markets." },
  { icon: GraduationCap, t: "Training & Extension", d: "Good Agricultural Practices, climate-smart techniques, integrated crop management and post-harvest handling to slash field losses." },
  { icon: FlaskConical, t: "Research & Innovation", d: "Continuous testing of improved crop methods, biological systems and ag-tech tools that drive market-driven value-chain gains." },
  { icon: Factory, t: "Processing & Value Addition", d: "Sorting, dehydration, milling, packaging and refining — extending shelf life and unlocking premium pricing margins." },
  { icon: Leaf, t: "Agricultural Input Support", d: "Certified seeds and planting materials, optimal fertilizer use, eco-friendly crop protection and structured farm establishment." },
  { icon: Truck, t: "Export & Market Linkage", d: "Direct connections between Rwandan farmers, cooperatives and verified bulk buyers — unlocking lucrative global trade routes." },
];

const stats = [
  { value: "9", label: "Service pillars" },
  { value: "EAC", label: "Regional reach" },
  { value: "5+", label: "Strategic crops" },
  { value: "100%", label: "Contract-secured" },
];

const values = [
  { icon: ShieldCheck, t: "Reliable Expertise" },
  { icon: Handshake, t: "Long-Term Contracts" },
  { icon: PackageCheck, t: "Uncompromising Quality" },
  { icon: Users, t: "Integrated Farmer Network" },
  { icon: Lightbulb, t: "Innovation & Ag-Tech" },
  { icon: Sun, t: "Transparency & Integrity" },
  { icon: Sprout, t: "Tailored Solutions" },
  { icon: Globe, t: "Socio-Economic Impact" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] overflow-hidden grain">
        <div className="absolute inset-0">
          <img src={gingerField} alt="Ginger fields, Rwanda" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/55 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-40 pb-24 sm:pt-48 sm:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Farming for Wealth and Health
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-medium text-primary-foreground max-w-5xl leading-[0.98]"
          >
            Your Trusted Partner in <em className="not-italic text-accent">Agriculture</em>, Contract Farming &amp; Sustainable Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-7 max-w-2xl text-lg sm:text-xl text-primary-foreground/90 leading-relaxed"
          >
            Specialists in Garlic, Ginger &amp; Smart Farming Solutions across Rwanda and the EAC —
            transforming Rwandan agriculture into a sustainable, profitable, market-oriented enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-leaf hover:translate-y-[-2px] transition-transform"
            >
              Explore Contract Farming
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/20"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-primary/40 p-5 sm:p-7">
                <div className="font-display text-3xl sm:text-4xl text-accent">{s.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-primary-foreground/85">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-8">
          {[
            { t: "Our Mission", d: "To improve livelihoods and promote sustainable agriculture through quality production, innovation, contract farming, and professional agricultural services across our network." },
            { t: "Our Vision", d: "A thriving, innovative agricultural sector across Rwanda and the East African Community — driven by elite biological inputs, scientific training frameworks, and structurally empowered farming communities." },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[2rem] bg-gradient-leaf text-primary-foreground overflow-hidden grain"
            >
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{i === 0 ? "Purpose" : "Future"}</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">{b.t}</h2>
              <p className="mt-5 text-primary-foreground/90 text-lg leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9 PILLARS */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            center
            eyebrow="The 9-Pillar Ecosystem"
            title={<>Field-to-export agriculture, fully integrated.</>}
            description="Nine interconnected service pillars taking every crop from soil preparation through final international shipment — without losing sight of quality."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-leaf transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl text-muted-foreground/40">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-foreground">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT: GARLIC & GINGER */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={garlicHarvest}
              alt="Freshly harvested garlic"
              loading="lazy"
              className="rounded-3xl shadow-leaf w-full aspect-[4/5] object-cover"
            />
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src={turmeric}
              alt="Turmeric and ginger rhizomes"
              loading="lazy"
              className="hidden sm:block absolute -bottom-10 -right-10 h-56 w-56 object-cover rounded-2xl border-8 border-background shadow-soft"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Agronomic Spotlight"
              title={<>Science behind every rhizome.</>}
              description="Our ginger and garlic operations are built on a precise agronomic blueprint — not guesswork. Spacing, airflow and rhizome geometry are engineered for maximum yield."
            />
            <div className="mt-8 rounded-3xl bg-card border border-border p-7 shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Ginger Geometric Spacing</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-secondary/60">
                  <div className="text-xs text-muted-foreground">Plant distance</div>
                  <div className="font-display text-3xl mt-1">20–30 cm</div>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/60">
                  <div className="text-xs text-muted-foreground">Row distance</div>
                  <div className="font-display text-3xl mt-1">25–40 cm</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                Maximizes sunlight penetration, suppresses weed canopy competition, guarantees
                uniform rhizome development and minimizes foliar-pathogen cross-contamination
                via optimized macro-airflow.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See all crops <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            center
            eyebrow="Why choose us"
            title={<>Nine reasons partners trust F&amp;FM Rwanda.</>}
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground">
                  <v.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium">{v.t}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BAND */}
      <section className="relative overflow-hidden h-[60vh] min-h-[420px]">
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          src={consultancy}
          alt="Field consultancy with smallholder farmers"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
        <div className="relative mx-auto max-w-7xl h-full px-5 sm:px-8 flex items-center">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-6xl text-primary-foreground leading-[1.05]"
            >
              Empowering farmers.<br />Reliable production.
            </motion.h2>
            <p className="mt-5 text-primary-foreground/90 text-lg">
              Outgrower networks, GAP training and structured contracts that turn smallholders
              into thriving, market-connected enterprises.
            </p>
            <Link to="/services" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:translate-y-[-2px] transition-transform">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-leaf p-10 sm:p-16 grain">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.3fr_auto] gap-10 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-4xl sm:text-6xl text-primary-foreground leading-[1.05]"
                >
                  Let's grow something<br />remarkable together.
                </motion.h2>
                <p className="mt-5 text-primary-foreground/90 text-lg max-w-xl">
                  Buyers, cooperatives, NGOs or smallholders — structured contracts, professional
                  agronomy and global market linkages start with one conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-leaf hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/leadership" className="rounded-full bg-primary-foreground/15 border border-primary-foreground/30 backdrop-blur text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary-foreground/25">
                  Meet our leaders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
