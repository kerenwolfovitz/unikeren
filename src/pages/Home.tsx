import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src="/img/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(14,14,22,0.96) 0%, rgba(24,22,60,0.86) 38%, rgba(62,54,160,0.55) 62%, rgba(45,140,205,0.45) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="max-w-[720px]">
            <h1 className="text-[30px] text-white lg:text-[34px]">A bit about me...</h1>
            <p className="mt-6 text-[15px] leading-[1.85] text-white/90">
              Product Manager with 15+ years of experience, specializing in AI-driven,
              data-intensive B2B platforms. Deep expertise in translating complex data and AI
              capabilities into scalable product experiences — from discovery through delivery, with
              a proven track record defining product strategy, prioritizing roadmaps, and driving
              measurable outcomes at the intersection of AI, data infrastructure, and enterprise
              user needs. A design background underpins all of it: years spent mentoring, guiding
              and managing cross-functional teams of 10 talented designers across Israel, the U.S
              and India, leading design system management and deep discovery on large and complex
              products, and building accessible solutions for intricate systems. A strong partner to
              Engineering, Data Science and Leadership teams.
            </p>
            <div className="mt-8 flex lg:justify-end">
              <Link
                to="/ux-ui-management"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-2.5 text-[13px] text-white transition-colors hover:bg-white hover:text-ink"
              >
                UX/UI Management
              </Link>
            </div>
          </div>
          <img
            src="/img/portrait.png"
            alt="Keren Wolfovitz"
            className="h-[150px] w-[150px] shrink-0 rounded-full object-cover lg:mt-4 lg:h-[180px] lg:w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "What I own",
    body: "Product strategy and vision for AI-driven, data-intensive platform solutions — from the first problem statement through to rollout. I define the roadmap, decide what earns a place on it, and keep product goals tied to what enterprise customers actually need rather than what is easiest to build.",
  },
  {
    title: "How I work",
    body: "Discovery first, and in the open. I run end-to-end discovery with Engineering, Data Science, UX and Executive Leadership in the room, prioritise with data-informed frameworks instead of loudest-voice-wins, and keep the trade-offs visible so the whole team understands why a call was made.",
  },
  {
    title: "How I measure",
    body: "Metrics defined before a feature ships, not after. I set the KPIs for performance, adoption and reliability across dynamic data workflows, so we can tell the difference between a bet that paid off and one that merely launched — and act on it either way.",
  },
];

function ProductManagement() {
  return (
    <section className="bg-band-workflows">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <h2 className="text-[30px] lg:text-[38px]">Product Management</h2>
        <p className="mt-4 max-w-[800px] text-[15px] leading-[1.8]">
          Since 2025 I have been a Product Manager at <strong className="font-semibold">Bright
          Data</strong>, working on AI-driven, data-intensive B2B platforms — turning complex data
          infrastructure and AI capability into something enterprise teams can pick up and use.
          Fifteen years of design work sits underneath it: I came to product through the user, and
          that is still where I start.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-[15px] font-medium">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.8]">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function WhereNext() {
  const cards = [
    {
      to: "/ux-ui-management",
      title: "UX/UI Management",
      body: "Five products at ZoomInfo — Workflows, Route & Territories, DaaS, Global Mapping and Enrich — from problem statement to shipped feature.",
    },
    {
      to: "/design-systems",
      title: "Design Systems",
      body: "Building and governing Muze, the design system behind a large, complex B2B platform.",
    },
    {
      to: "/management",
      title: "Leading a UX/UI Team",
      body: "Mentoring, strategy and cross-functional collaboration across teams in Israel, the U.S and India.",
    },
    {
      to: "/blast-from-the-past",
      title: "A Blast from the Past",
      body: "Earlier work at ZoomInfo and LivePerson, including discovery docs and usability testing.",
    },
  ];

  return (
    <section className="bg-white">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <h2 className="text-[26px] lg:text-[30px]">The work behind it</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl border border-ink/12 p-6 transition-colors hover:border-ink/40"
            >
              <h3 className="font-display text-[19px] transition-colors group-hover:text-link">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-ink/80">{c.body}</p>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductManagement />
      <WhereNext />
    </>
  );
}
