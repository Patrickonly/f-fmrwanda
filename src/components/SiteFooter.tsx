import { Link } from "@tanstack/react-router";
import { Sprout, Mail, Phone, MapPin, Globe, Camera, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-leaf opacity-90" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground/15 backdrop-blur">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold">F&amp;FM Rwanda Ltd</span>
            </div>
            <p className="mt-4 text-primary-foreground/85 text-sm leading-relaxed">
              Farming for Wealth and Health. Specialists in Garlic, Ginger &amp; Smart Farming
              Solutions across Rwanda and the East African Community.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, Camera, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/85">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/products", label: "Our Crops" },
                { to: "/leadership", label: "Leadership" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Headquarters</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>Kayonza District, Mukarange Sector, Eastern Province, Rwanda</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 mt-0.5" /><span>+250 789 384 603</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5" /><span>info@fandfmrwandaltd.com</span></li>
              <li className="flex gap-3"><Globe className="h-4 w-4 shrink-0 mt-0.5" /><span>fandfmrwandaltd.com</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/85 mb-3">
              Harvest stories, contract opportunities &amp; market insights — straight to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2.5 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <button className="rounded-full bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row gap-3 justify-between text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} F&amp;FM Rwanda Ltd. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://futureinnovatech.rw/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">
              FUTURE INNOVATECH LTD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
