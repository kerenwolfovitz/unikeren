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

const dataWork = [
  {
    title: "Infrastructure into product",
    body: "Collection pipelines and AI extraction are deep technical systems. My job is to shape them into features with a clear user, a clear job and a clear definition of done.",
  },
  {
    title: "Discovery with technical users",
    body: "The people using this are engineers, data scientists and analysts. Discovery means getting into their pipelines and their workarounds, not just running interviews.",
  },
  {
    title: "AI where it earns its place",
    body: "LLM-assisted extraction and structuring, scoped to the cases where it genuinely beats a deterministic approach — and measured against it rather than assumed better.",
  },
  {
    title: "Reliability as a feature",
    body: "At this scale, uptime, freshness and accuracy are the product. I set the KPIs for them and hold the roadmap to them when something shinier comes along.",
  },
];

function DataProduct() {
  return (
    <section className="bg-ink text-white">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="max-w-[760px]">
          <p className="font-display text-[13px] tracking-[0.18em] text-accent uppercase">
            Product at Bright Data
          </p>
          <h2 className="mt-3 text-[28px] lg:text-[34px]">Data is the product</h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-white/85">
            Bright Data is a web-data platform — infrastructure that collects, structures and
            delivers public web data at enormous scale. I work on the product layer above it,
            turning raw collection and AI capability into something an enterprise data team can buy,
            trust and run in production.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {dataWork.map((d) => (
            <div key={d.title} className="border-t border-white/20 pt-4">
              <h3 className="font-display text-[17px]">{d.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.75] text-white/75">{d.body}</p>
            </div>
          ))}
        </div>
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
      <DataProduct />
      <WhereNext />
    </>
  );
}
