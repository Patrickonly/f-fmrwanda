import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Sprout } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Crops" },
  { to: "/leadership", label: "Leadership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-18 py-4 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 group">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-leaf shadow-leaf group-hover:scale-110 transition-transform">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-lg font-semibold text-foreground truncate">F&FM Rwanda Ltd</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Farming for Wealth &amp; Health</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    active ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-leaf hover:bg-primary-glow transition-colors"
            >
              Start a Contract
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/80"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={n.to}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted font-medium"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center rounded-xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
              >
                Start a Contract
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
