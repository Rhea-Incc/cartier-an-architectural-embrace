import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { SoftCursor } from "@/components/SoftCursor";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({ component: Index });

const media = {
  vid2: "/media/vid-2.mp4",
  vid3: "/media/vid-3.mp4",
  aerial: "/media/1.0.png",
  towerNight: "/media/09.png",
  balcony: "/media/08-2.png",
  entrance: "/media/07.png",
  towerLow: "/media/cartier.jpg",
  estateTop: "/media/Cartier..png",
  interior: "/media/cartier-02.jpg",
  towerDay: "/media/09.png",
  wordmark: "/media/wordmark.png",
  logo: "/media/logo.png",
};

const journey = [
  "The Collection",
  "Editions",
  "The Residence",
  "The Atmosphere",
  "Invisible Luxury",
  "Wellbeing",
  "The Estate",
  "Availability",
  "Reservation",
];

const editionData = [
  {
    id: "Edition 03",
    title: "Canopy Edition",
    image: media.towerLow,
    line: "Morning enters quietly.",
    detail: "North-east orientation · elevated garden threshold",
  },
  {
    id: "Edition 07",
    title: "Horizon Edition",
    image: media.entrance,
    line: "Every curve softens light.",
    detail: "South-west orientation · sunset corridor",
  },
  {
    id: "Edition 11",
    title: "Atelier Edition",
    image: media.towerNight,
    line: "Silence arrives before the sun.",
    detail: "Sea-facing volume · dual terrace sequence",
  },
];

const availability = [
  { id: "Edition 03", state: "available" },
  { id: "Edition 05", state: "reserved" },
  { id: "Edition 07", state: "available" },
  { id: "Edition 09", state: "sold" },
  { id: "Edition 11", state: "reserved" },
  { id: "Edition 14", state: "private" },
];

function HeroBelonging() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[115vh] overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <video
          src={media.vid2}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/20 to-background" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <Reveal>
            <p className="font-mono-caps text-accent/80">Phase 02 · Belonging</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <img src={media.wordmark} alt="Cartier" className="mx-auto h-14 w-auto md:h-24" loading="eager" />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="mt-10 font-display text-4xl italic leading-[1.08] text-foreground md:text-7xl">
              Architecture is no longer the destination.
              <span className="mt-4 block text-foreground/70">It has become the setting for belonging.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mx-auto mt-12 max-w-2xl">
              <p className="font-display text-xl italic text-foreground/70 md:text-2xl">
                The visitor stops observing Cartier and quietly begins living inside it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function JourneyRail() {
  return (
    <section className="relative border-y border-border/80 bg-surface/40 px-4 py-5 backdrop-blur-sm md:px-6">
      <div className="mx-auto max-w-7xl overflow-x-auto">
        <div className="flex min-w-max items-center gap-6 md:gap-8">
          {journey.map((item, idx) => (
            <div key={item} className="flex items-center gap-6 md:gap-8">
              <span className="font-mono-caps text-foreground/65">{item}</span>
              {idx < journey.length - 1 ? <span className="h-px w-10 bg-border" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionSection() {
  return (
    <section id="collection" className="relative bg-background px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">I · The Collection</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            Residences as architectural editions,
            <span className="block italic text-foreground/65">each with its own relationship to light and landscape.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {editionData.map((edition, idx) => (
            <Reveal key={edition.id} delay={idx * 0.08}>
              <article className="group relative isolate aspect-[4/5] overflow-hidden">
                <img
                  src={edition.image}
                  alt={edition.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-mono-caps text-accent">{edition.id}</p>
                  <p className="mt-2 font-display text-3xl italic text-foreground">{edition.title}</p>
                  <p className="mt-2 font-display italic text-foreground/70">{edition.line}</p>
                  <p className="mt-4 text-sm text-foreground/55">{edition.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditionsSection() {
  const [selected, setSelected] = useState(editionData[0]);

  return (
    <section id="editions" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-mono-caps text-accent/80">II · Editions</p>
            <h3 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
              Numbered pieces in an editorial sequence.
            </h3>
            <p className="mt-6 max-w-md font-display italic text-xl text-foreground/70">
              Selecting an edition begins a continuous movement into residence.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-border">
            {editionData.map((edition) => (
              <button
                key={edition.id}
                type="button"
                onClick={() => setSelected(edition)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 text-left"
                data-hover
              >
                <div className="min-w-0">
                  <p className="font-mono-caps text-foreground/60">{edition.id}</p>
                  <p className="truncate font-display text-2xl italic text-foreground">{edition.title}</p>
                </div>
                <span className={`h-2.5 w-2.5 rounded-full ${selected.id === edition.id ? "bg-accent" : "bg-foreground/30"}`} />
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10">
              <p className="font-mono-caps text-accent">{selected.id}</p>
              <p className="mt-2 font-display text-4xl italic md:text-5xl">{selected.title}</p>
              <p className="mt-3 max-w-xl font-display text-xl italic text-foreground/70">{selected.line}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ResidenceSection() {
  return (
    <section id="residence" className="relative py-24 md:py-36">
      <div className="px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono-caps text-accent/80">III · The Residence</p>
            <h3 className="mt-5 max-w-4xl font-display text-4xl leading-[1.06] md:text-6xl">
              One uninterrupted walkthrough.
              <span className="block italic text-foreground/65">Morning enters quietly. Every curve softens light.</span>
            </h3>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.2} className="mt-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <video
            src={media.vid3}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/60" />
        </div>
      </Reveal>
    </section>
  );
}

function AtmosphereSection() {
  return (
    <section className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">IV · The Atmosphere</p>
          <h3 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">Life is suggested, never staged.</h3>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <figure className="relative aspect-[16/10] overflow-hidden">
              <img src={media.balcony} alt="Balcony over the estate at dusk" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4">
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img src={media.interior} alt="Interior with sculptural lines and reflective stone" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InvisibleLuxurySection() {
  const [beam, setBeam] = useState({ x: 50, y: 50 });

  return (
    <section className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">V · Invisible Luxury</p>
          <h3 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-5xl">
            Luxury is revealed through precision, not ornament.
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="relative mt-12 aspect-[16/9] overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setBeam({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
              });
            }}
          >
            <img src={media.entrance} alt="Stone and bronze detailing" loading="lazy" className="h-full w-full object-cover" />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `radial-gradient(420px circle at ${beam.x}% ${beam.y}%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 65%)`,
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="font-mono-caps text-accent">Stone · Bronze · Glass · Timber · Water</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WellbeingSection() {
  const spaces = [
    ["Movement Studio", "Filtered morning light and silent floor grids."],
    ["Sanctuary", "Warm stone, water resonance, low illumination."],
    ["Water Garden", "Open horizon pools with continuous edge reflections."],
    ["Library", "Timber-lined stillness designed for long afternoons."],
    ["Private Salon", "Acoustic calm for confidential conversations."],
  ];

  return (
    <section className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">VI · Wellbeing</p>
          <h3 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
            Wellness presented as architecture.
          </h3>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {spaces.map(([name, description], idx) => (
            <Reveal key={name} delay={idx * 0.08}>
              <div className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <p className="font-display text-3xl italic text-foreground">{name}</p>
                <p className="font-display text-xl italic text-foreground/70">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstateSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="estate" ref={ref} className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">VII · The Estate</p>
          <h3 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            A single ecosystem from residence to coastline.
          </h3>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          <motion.figure style={{ y }} className="md:col-span-7 aspect-[16/10] overflow-hidden">
            <img src={media.estateTop} alt="Aerial estate composition" loading="lazy" className="h-full w-full object-cover" />
          </motion.figure>
          <motion.figure style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 50]) }} className="md:col-span-5 aspect-[4/5] overflow-hidden md:mt-20">
            <img src={media.towerDay} alt="Curved residence geometry" loading="lazy" className="h-full w-full object-cover" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

function AvailabilitySection() {
  const stateTone = useMemo(
    () => ({
      available: "bg-[color:color-mix(in_oklab,var(--accent)_80%,transparent)]",
      reserved: "bg-foreground/45",
      sold: "bg-background/90 border border-border",
      private: "bg-foreground/25",
    }),
    [],
  );

  return (
    <section id="availability" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-caps text-accent/80">VIII · Availability</p>
          <h3 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] md:text-5xl">
            Night reveals what remains illuminated.
          </h3>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <figure className="relative aspect-[16/10] overflow-hidden">
              <img src={media.towerNight} alt="Cartier tower night elevation" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="border border-border/80 bg-surface/40 p-6">
              <p className="font-mono-caps text-foreground/60">Edition states</p>
              <div className="mt-4 space-y-4">
                {availability.map((item) => (
                  <div key={item.id} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    <span className={`h-2.5 w-2.5 rounded-full ${stateTone[item.state as keyof typeof stateTone]}`} />
                    <div className="min-w-0">
                      <p className="truncate font-display text-2xl italic text-foreground">{item.id}</p>
                      <p className="font-mono-caps text-foreground/55">{item.state}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="relative overflow-hidden px-6 py-24 md:py-36">
      <div className="absolute inset-0">
        <img src={media.aerial} alt="Night aerial Cartier" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/78" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-mono-caps text-accent/85">IX · Reservation</p>
          <h3 className="mt-5 text-center font-display text-4xl leading-[1.08] md:text-6xl">
            A private introduction, conducted in confidence.
          </h3>
        </Reveal>

        <Reveal delay={0.2}>
          {submitted ? (
            <div className="mx-auto mt-16 max-w-xl text-center">
              <p className="font-display text-5xl italic text-foreground">Welcome to Cartier.</p>
              <p className="mt-5 font-display text-xl italic text-foreground/65">
                Your private consultation has been received.
              </p>
            </div>
          ) : (
            <form
              className="mx-auto mt-16 max-w-2xl space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "edition", label: "Preferred Edition", type: "text" },
              ].map((field) => (
                <div key={field.id} className="border-b border-border pb-3 focus-within:border-accent transition-colors duration-500">
                  <label htmlFor={field.id} className="mb-3 block font-mono-caps text-foreground/50">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    className="w-full bg-transparent font-display text-2xl italic text-foreground outline-none placeholder:text-foreground/40"
                    data-hover
                  />
                </div>
              ))}

              <div className="border-b border-border pb-3 focus-within:border-accent transition-colors duration-500">
                <label htmlFor="consultation" className="mb-3 block font-mono-caps text-foreground/50">
                  Private Consultation
                </label>
                <textarea
                  id="consultation"
                  required
                  rows={3}
                  className="w-full resize-none bg-transparent font-display text-xl italic text-foreground outline-none placeholder:text-foreground/40"
                  data-hover
                />
              </div>

              <div className="flex justify-center pt-3">
                <button type="submit" className="border-b border-accent/40 pb-2 font-mono-caps text-accent transition-colors duration-500 hover:border-accent" data-hover>
                  Send Introduction →
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-14 pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={media.logo} alt="Cartier emblem" className="h-20 w-auto opacity-90" loading="lazy" />
          <img src={media.wordmark} alt="Cartier" className="mt-4 h-4 w-auto opacity-80" loading="lazy" />
          <p className="mt-5 max-w-sm font-display text-xl italic text-foreground/65">
            Belonging is not purchased. It is recognized.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-8 md:grid-cols-3">
          {[
            ["Collection", "Editions", "Residence"],
            ["Atmosphere", "Wellbeing", "Estate"],
            ["Availability", "Reservation", "Press"],
          ].map((group, idx) => (
            <div key={idx} className="space-y-3 font-mono-caps text-foreground/60">
              {group.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-2 border-t border-border pt-6 font-mono-caps text-foreground/45 md:flex-row md:items-center md:justify-between">
        <span>© MMXXV Cartier</span>
        <span>Architecture remembers every sunrise.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <SoftCursor />
      <Nav />
      <HeroBelonging />
      <JourneyRail />
      <CollectionSection />
      <EditionsSection />
      <ResidenceSection />
      <AtmosphereSection />
      <InvisibleLuxurySection />
      <WellbeingSection />
      <EstateSection />
      <AvailabilitySection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
