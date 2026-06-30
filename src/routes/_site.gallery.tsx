import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/Section";
import gingerField from "@/assets/ginger-field.jpg";
import garlicHarvest from "@/assets/garlic-harvest.jpg";
import turmeric from "@/assets/turmeric.jpg";
import consultancy from "@/assets/consultancy.jpg";
import farmer from "@/assets/farmer.jpg";
import farming from "@/assets/farming.jpg";
import produce from "@/assets/produce.jpg";
import heroFields from "@/assets/hero-fields.jpg";

export const Route = createFileRoute("/_site/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — F&FM Rwanda Ltd" },
      { name: "description", content: "Scenes from our farms, contract-farming partners and value-addition operations across Rwanda." },
      { property: "og:title", content: "Gallery — F&FM Rwanda Ltd" },
      { property: "og:image", content: gingerField },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: gingerField, span: "lg:col-span-2 lg:row-span-2", label: "Ginger fields, Eastern Province" },
  { src: garlicHarvest, span: "", label: "Garlic harvest, graded for export" },
  { src: farmer, span: "", label: "Partner outgrower" },
  { src: consultancy, span: "lg:col-span-2", label: "Field consultancy & GAP training" },
  { src: turmeric, span: "", label: "Turmeric & ginger rhizomes" },
  { src: farming, span: "lg:col-span-2", label: "Modern tools, ancient soil" },
  { src: produce, span: "", label: "Aggregated produce, market grade" },
  { src: heroFields, span: "", label: "Highland terraces" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Field notes from a thousand hills.</>}
        description="A look inside our farms, mills and the people behind every harvest."
        image={heroFields}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] gap-3 sm:gap-5">
            {shots.map((s, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`relative overflow-hidden rounded-2xl group shadow-soft ${s.span}`}
              >
                <img src={s.src} alt={s.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
