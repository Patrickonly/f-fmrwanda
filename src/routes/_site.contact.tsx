import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/Section";
import consultancy from "@/assets/consultancy.jpg";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — F&FM Rwanda Ltd" },
      { name: "description", content: "Get in touch with F&FM Rwanda Ltd — Kayonza District HQ. Buyers, cooperatives, NGOs and farmers welcome." },
      { property: "og:title", content: "Contact F&FM Rwanda Ltd" },
      { property: "og:image", content: consultancy },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's grow together.</>}
        description="Buyers, cooperatives, NGOs and curious farmers — we read every message and reply within two business days."
        image={consultancy}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Headquarters", d: "Kayonza District, Mukarange Sector — 25m from Kayonza District Administration Offices, Eastern Province, Rwanda" },
              { icon: Phone, t: "National Support Center", d: "+250 789 384 603 (Voice · SMS · WhatsApp)" },
              { icon: Mail, t: "Email", d: "info@fandfmrwandaltd.com" },
              { icon: Globe, t: "Web", d: "fandfmrwandaltd.com" },
              { icon: Clock, t: "Hours", d: "Mon — Fri · 8:00 to 18:00 CAT" },
            ].map((c) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">{c.t}</div>
                  <div className="mt-1 text-foreground font-medium leading-snug">{c.d}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card border border-border p-8 shadow-soft space-y-5"
          >
            <h2 className="font-display text-3xl">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company / Cooperative" name="company" />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Interest</label>
              <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                <option>Contract Farming</option>
                <option>Bulk Supply / Export</option>
                <option>Consultancy & Training</option>
                <option>Processing & Value Addition</option>
                <option>Partnership / Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 font-semibold shadow-leaf hover:bg-primary-glow transition-colors"
            >
              {sent ? "Message sent ✓" : <>Send message <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </div>
  );
}
