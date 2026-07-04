import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { SoftCursor } from "@/components/SoftCursor";
import { Reveal } from "@/components/Reveal";

import vid2 from "@/assets/vid-2.mp4.asset.json";
import vid3 from "@/assets/vid-3.mp4.asset.json";
import aerial from "@/assets/1.0.png.asset.json";
import pool1 from "@/assets/1.2.png.asset.json";
import pool2 from "@/assets/1.3.png.asset.json";
import tower1 from "@/assets/04.png.asset.json";
import tower2 from "@/assets/05.png.asset.json";
import terrace from "@/assets/08.png.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: tower1.url },
      { name: "twitter:image", content: tower1.url },
    ],
  }),
  component: Index,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section ref={ref} id="top" className="relative h-[110vh] w-full overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <video
          src={vid2.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="slow-fade" style={{ animationDelay: "0.2s" }}>
          <p className="font-mono-caps text-accent/80">Est · MMXXV · Coastal Reserve</p>
        </div>
        <div className="slow-fade mt-10" style={{ animationDelay: "0.9s" }}>
          <img src={wordmark.url} alt="Cartier" className="h-14 md:h-24 w-auto mx-auto" />
        </div>
        <div className="slow-fade mt-10 max-w-xl" style={{ animationDelay: "1.6s" }}>
          <p className="font-display italic text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Some places are discovered.
            <br />
            Others remember you.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono-caps text-foreground/50">Descend</span>
        <div className="h-16 w-px bg-gradient-to-b from-accent/60 to-transparent shimmer" />
      </motion.div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative py-40 md:py-56 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono-caps text-accent/70 mb-10">I · A Prelude</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.15] text-foreground/95">
            Architecture remembers what buildings forget.
            <span className="block mt-6 italic text-foreground/60">
              Cartier is not built to impress. It is composed to remain.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-16 mx-auto w-40 hairline" />
        </Reveal>
      </div>
    </section>
  );
}

function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section id="architecture" ref={ref} className="relative min-h-[130vh] px-6 py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-y-12 items-end mb-16">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="font-mono-caps text-accent/70 mb-6">II · The Object</p>
            <h3 className="font-display text-5xl md:text-7xl leading-[1] text-foreground">
              Sculpted<br />
              <em className="text-accent-soft">into</em> the earth.
            </h3>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-display text-lg md:text-xl italic text-foreground/70 leading-relaxed">
              Twelve organic volumes emerge from the canopy — a single, continuous gesture of stone, glass, and light. Every curve resolves a horizon.
            </p>
            <div className="mt-8 flex gap-10 font-mono-caps text-foreground/60">
              <div>
                <div className="text-accent text-lg font-display not-italic mb-1">14</div>
                Storeys
              </div>
              <div>
                <div className="text-accent text-lg font-display not-italic mb-1">86</div>
                Residences
              </div>
              <div>
                <div className="text-accent text-lg font-display not-italic mb-1">03</div>
                Pavilions
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <motion.div
            style={{ y, scale }}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <img
              src={aerial.url}
              alt="Aerial architectural composition of Cartier"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8 font-mono-caps text-foreground/70">
              Fig. 01 — Site plan · aerial · dusk
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Tower() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8 md:gap-16 items-center">
        <Reveal className="col-span-12 md:col-span-7 order-2 md:order-1">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={tower2.url}
              alt="Cartier tower elevation at blue hour"
              className="h-full w-full object-cover gentle-drift"
            />
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2">
          <Reveal>
            <p className="font-mono-caps text-accent/70 mb-6">III · Elevation</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              Light becomes<br />structure.
            </h3>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-display italic text-lg text-foreground/70 mt-8 leading-relaxed">
              At dusk the façade shifts from stone to lantern. Warm light traces each rounded aperture, transforming architecture into a vertical horizon.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 space-y-4 border-t border-border pt-8">
              {[
                ["Material", "Cast lime concrete, bronze"],
                ["Glazing", "Full-height, low-iron"],
                ["Balconies", "Monolithic curvature"],
                ["Orientation", "West · Sea · Mountain"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-4 text-sm">
                  <span className="font-mono-caps text-foreground/50">{k}</span>
                  <span className="font-display italic text-foreground/85">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Grounds() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section id="grounds" ref={ref} className="relative px-6 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="font-mono-caps text-accent/70 mb-6">IV · The Grounds</p>
            <h3 className="font-display text-5xl md:text-7xl leading-[1]">
              Silence<br />
              has a <em className="text-accent-soft">shape.</em>
            </h3>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="font-display italic text-lg text-foreground/70 leading-relaxed">
              Infinity pools follow the coastline. Terraces descend into gardens where the sea is heard before it is seen.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <motion.div style={{ y: y1 }} className="col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden">
            <img src={pool1.url} alt="Curved infinity pool at blue hour" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="col-span-12 md:col-span-5 aspect-[4/5] overflow-hidden md:mt-24">
            <img src={pool2.url} alt="Terrace lounge with candlelight" className="h-full w-full object-cover" />
          </motion.div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-32 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 md:col-start-2">
              <p className="font-mono-caps text-accent/70 mb-4">Composition</p>
              <p className="font-display italic text-foreground/80 leading-relaxed">
                Every element — the curve of a bench, the depth of a step, the placement of a single lantern — is drawn from the same continuous line.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-7">
              <p className="font-mono-caps text-accent/70 mb-4">Time</p>
              <p className="font-display italic text-foreground/80 leading-relaxed">
                The site is designed to age slowly. Bronze softens. Stone weathers. The building will look more itself in twenty years than it does today.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Film() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono-caps text-accent/70 mb-4">V · A Moving Portrait</p>
              <h3 className="font-display text-3xl md:text-5xl">One continuous view.</h3>
            </div>
            <span className="font-mono-caps text-foreground/50 hidden md:block">02:14 · silent</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[16/9] overflow-hidden">
            <video
              src={vid3.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const residences = [
  { no: "N° 04", type: "Garden Residence", area: "212 m²", view: "Canopy · Pool", status: "Available" },
  { no: "N° 07", type: "Sky Residence", area: "268 m²", view: "Coastline · West", status: "Reserved" },
  { no: "N° 09", type: "Sky Residence", area: "268 m²", view: "Coastline · South", status: "Available" },
  { no: "N° 12", type: "Crown Residence", area: "384 m²", view: "Panoramic", status: "On Request" },
  { no: "N° 14", type: "The Pinnacle", area: "612 m²", view: "Full Horizon", status: "Private" },
];

function Residences() {
  return (
    <section id="residences" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="font-mono-caps text-accent/70 mb-6">VI · Residences</p>
            <h3 className="font-display text-5xl md:text-7xl leading-[1]">
              Numbered<br />editions.
            </h3>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-display italic text-lg text-foreground/70 leading-relaxed">
              Eighty-six residences, each recorded by hand. Ownership begins long before possession.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {residences.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.06}>
              <a
                href="#reserve"
                data-hover
                className="group grid grid-cols-12 gap-4 py-8 border-b border-border items-baseline transition-colors duration-700 hover:bg-surface/40 px-2 -mx-2"
              >
                <span className="col-span-2 font-mono-caps text-accent">{r.no}</span>
                <span className="col-span-4 font-display text-2xl md:text-3xl text-foreground group-hover:text-accent-soft transition-colors duration-700">
                  {r.type}
                </span>
                <span className="col-span-2 font-mono-caps text-foreground/60">{r.area}</span>
                <span className="col-span-2 font-display italic text-foreground/70">{r.view}</span>
                <span className="col-span-2 text-right font-mono-caps text-foreground/50">{r.status}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-md font-display italic text-foreground/60">
            Full portfolios and floor studies are issued on request. Each enquiry receives a private introduction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Balcony() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={terrace.url} alt="Balcony view of the grounds at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
      </motion.div>
      <motion.div
        style={{ y }}
        className="relative z-10 h-full flex items-center px-6 md:px-20 max-w-2xl"
      >
        <Reveal>
          <p className="font-mono-caps text-accent/80 mb-6">VII · Interlude</p>
          <p className="font-display text-3xl md:text-5xl leading-[1.15] italic text-foreground">
            "Precision leaves nothing<br />unnecessary."
          </p>
          <p className="mt-6 font-mono-caps text-foreground/50">— Studio note, Vol. IV</p>
        </Reveal>
      </motion.div>
    </section>
  );
}

function Reserve() {
  return (
    <section id="reserve" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono-caps text-accent/70 mb-6 text-center">VIII · Reservation</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h3 className="font-display text-4xl md:text-6xl leading-[1.1] text-center">
            An introduction,<br />
            <em className="text-accent-soft">by invitation.</em>
          </h3>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 text-center font-display italic text-foreground/70 max-w-lg mx-auto">
            Enquiries are received in confidence. A representative of the studio will respond within seventy-two hours.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <form
            className="mt-20 space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Correspondence", type: "email" },
              { id: "residence", label: "Residence of interest", type: "text" },
            ].map((f) => (
              <div key={f.id} className="border-b border-border pb-3 focus-within:border-accent transition-colors duration-500">
                <label htmlFor={f.id} className="block font-mono-caps text-foreground/50 mb-3">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  className="w-full bg-transparent font-display text-xl text-foreground focus:outline-none placeholder:text-foreground/30"
                  data-hover
                />
              </div>
            ))}
            <div className="border-b border-border pb-3 focus-within:border-accent transition-colors duration-500">
              <label htmlFor="note" className="block font-mono-caps text-foreground/50 mb-3">
                A note
              </label>
              <textarea
                id="note"
                rows={3}
                className="w-full bg-transparent font-display italic text-lg text-foreground focus:outline-none resize-none"
                data-hover
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                data-hover
                className="group font-mono-caps text-accent border-b border-accent/40 pb-2 hover:border-accent transition-colors duration-500"
              >
                Submit Enquiry <span className="ml-2 inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 pt-32 pb-16 border-t border-border">
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
          <img src={logo.url} alt="Cartier mark" className="h-24 w-auto opacity-90" />
          <img src={wordmark.url} alt="Cartier" className="h-4 w-auto opacity-80" />
          <p className="font-display italic text-foreground/60 max-w-xs">
            An architectural object. Composed for permanence.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-7 space-y-3 font-mono-caps text-foreground/60">
          <p className="text-accent/80 mb-4">Studio</p>
          <p>Architecture</p>
          <p>Interiors</p>
          <p>Landscape</p>
        </div>
        <div className="col-span-6 md:col-span-2 space-y-3 font-mono-caps text-foreground/60">
          <p className="text-accent/80 mb-4">Contact</p>
          <p>Reservations</p>
          <p>Press</p>
          <p>Studio Visits</p>
        </div>
        <div className="col-span-12 md:col-span-2 space-y-3 font-mono-caps text-foreground/60">
          <p className="text-accent/80 mb-4">Location</p>
          <p>Coastal Reserve</p>
          <p>Private Access</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-24 flex flex-col md:flex-row justify-between gap-4 font-mono-caps text-foreground/40">
        <span>© MMXXV — Cartier</span>
        <span>Architecture remembers.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <SoftCursor />
      <Nav />
      <Hero />
      <Manifesto />
      <Architecture />
      <Tower />
      <Grounds />
      <Film />
      <Residences />
      <Balcony />
      <Reserve />
      <Footer />
    </main>
  );
}
