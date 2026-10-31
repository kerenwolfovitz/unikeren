import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { FlowArrow, WorkflowStep, type Step } from "../components/WorkflowStep";

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
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="max-w-[640px]">
            <h1 className="text-[30px] text-white lg:text-[36px]">A bit about me...</h1>
            <p className="mt-6 text-[17px] leading-[1.7] text-white/95">
              Product Manager at <strong className="font-semibold">Bright Data</strong>, building
              AI-driven, data-intensive B2B platforms.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-white/80">
              Fifteen years in design first — I came to product through the user, and that is still
              where I start. Technical enough to sit with Engineering and Data Science, commercial
              enough to be in the room when a deal closes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
            className="h-[150px] w-[150px] shrink-0 rounded-full object-cover lg:h-[200px] lg:w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

const steps: Step[] = [
  {
    icon: "customers",
    title: "Talk to customers",
    body: "Discovery calls and interviews with the enterprise teams who actually use it.",
  },
  {
    icon: "problem",
    title: "Frame the problem",
    body: "Turn what I heard into a sharp problem statement and a prioritised roadmap.",
  },
  {
    icon: "build",
    title: "Build with AI & data",
    body: "Hands-on with Engineering and Data Science on AI capability and data infrastructure.",
  },
  {
    icon: "test",
    title: "Test it",
    body: "Prototypes, usability sessions and A/B tests — before it ships, not after.",
  },
  {
    icon: "measure",
    title: "Measure it",
    body: "Analytics dashboards and KPIs that show adoption, performance and reliability.",
  },
  {
    icon: "deal",
    title: "Close deals",
    body: "In the room with sales and customers, turning the product into signed business.",
  },
];

function HowIWork() {
  return (
    <section className="bg-band-workflows">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <h2 className="text-[28px] lg:text-[34px]">How I work, end to end</h2>
        <p className="mt-3 max-w-[620px] text-[15px] leading-[1.75]">
          From the first customer conversation to the signed deal — I stay with it the whole way.
        </p>

        <ol className="mt-12 flex flex-col items-stretch gap-x-2 gap-y-4 lg:flex-row lg:items-start">
          {steps.map((s, i) => (
            <Fragment key={s.title}>
              {i > 0 && <FlowArrow />}
              <WorkflowStep step={s} />
            </Fragment>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

const cards = [
  {
    to: "/ux-ui-management",
    title: "UX/UI Management",
    body: "Five products at ZoomInfo, from problem statement to shipped feature.",
  },
  {
    to: "/design-systems",
    title: "Design Systems",
    body: "Building and governing Muze, across a large B2B platform.",
  },
  {
    to: "/management",
    title: "Being a Manager",
    body: "Leading designers across Israel, the U.S and India.",
  },
  {
    to: "/blast-from-the-past",
    title: "A Blast from the Past",
    body: "Earlier work at ZoomInfo and LivePerson.",
  },
];

function WhereNext() {
  return (
    <section className="bg-white">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <h2 className="text-[24px] lg:text-[28px]">The work behind it</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl border border-ink/12 p-5 transition-colors hover:border-ink/40"
            >
              <h3 className="font-display text-[17px] transition-colors group-hover:text-link">
                {c.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-ink/75">{c.body}</p>
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
      <HowIWork />
      <WhereNext />
    </>
  );
}
