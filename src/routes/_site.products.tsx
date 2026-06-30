import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero, SectionHeader } from "@/components/Section";
import garlicHarvest from "@/assets/garlic-harvest.jpg";
import gingerField from "@/assets/ginger-field.jpg";
import turmeric from "@/assets/turmeric.jpg";
import produce from "@/assets/produce.jpg";

export const Route = createFileRoute("/_site/products")({
  head: () => ({
    meta: [
      { title: "Our Crops — F&FM Rwanda Ltd" },
      { name: "description", content: "Garlic, Ginger, Turmeric, Rosemary, Lemongrass and select fruits — grown at scale across Rwanda for domestic and international markets." },
      { property: "og:title", content: "Our Crops — F&FM Rwanda Ltd" },
      { property: "og:image", content: garlicHarvest },
    ],
  }),
  component: Products,
});

const products = [
  { img: garlicHarvest, tag: "Specialty Bulb", title: "Garlic", desc: "Premium white-bulb varieties cultivated at altitude for tight cloves, strong shelf life and pungent flavor — graded for export." },
  { img: gingerField, tag: "Rhizome", title: "Ginger", desc: "Cultivated under our precise spacing blueprint (20–30 cm plant × 25–40 cm row). Plump, fibrous rhizomes with high oil content." },
  { img: turmeric, tag: "Rhizome", title: "Turmeric", desc: "Vibrant high-curcumin turmeric — fresh, dried whole or milled to specification for spice traders and processors." },
  { img: produce, tag: "Aromatic Herb", title: "Rosemary", desc: "Field-grown rosemary harvested for fresh-pack, dried leaf and essential-oil extraction streams." },
  { img: produce, tag: "Aromatic Herb", title: "Lemongrass", desc: "Hardy lemongrass cultivated across outgrower plots — supplied fresh, dehydrated or oil-distilled." },
  { img: produce, tag: "Specialty Fruits", title: "Fruits & Market Crops", desc: "Tropical and temperate fruits plus other in-demand crops, aggregated to spec from our integrated farmer network." },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Crops"
        title={<>The harvest, beautifully sorted.</>}
        description="Specialists in Garlic and Ginger — supported by a full portfolio of high-value commercial crops grown across our network of corporate farms and contracted smallholders."
        image={garlicHarvest}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-leaf transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.tag}</span>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Contract & spot</span>
                  <span className="text-xs text-muted-foreground">Request quote</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Agronomic spotlight */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeader
            center
            eyebrow="Technical Spotlight"
            title={<>Ginger planting blueprint.</>}
            description="Our science-first approach to ginger spacing — engineered, not estimated."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-card border border-border p-7 shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Plant distance</div>
              <div className="font-display text-5xl mt-3">20–30 <span className="text-2xl text-muted-foreground">cm</span></div>
              <p className="mt-3 text-sm text-muted-foreground">Optimized for uniform rhizome development.</p>
            </div>
            <div className="rounded-3xl bg-card border border-border p-7 shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Row distance</div>
              <div className="font-display text-5xl mt-3">25–40 <span className="text-2xl text-muted-foreground">cm</span></div>
              <p className="mt-3 text-sm text-muted-foreground">Maximizes airflow and sunlight penetration.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This geometry suppresses weed canopy competition, guarantees uniform underground
            rhizome development and drastically minimizes foliar-pathogen cross-contamination
            through optimized macro-airflow.
          </p>
        </div>
      </section>
    </>
  );
}
