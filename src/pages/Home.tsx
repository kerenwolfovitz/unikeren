import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { FlowArrow, WorkflowStep, type Step } from "../components/WorkflowStep";
import { DatasetShowcase } from "../components/DatasetShowcase";

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

const stats = [
  { n: "1,000+", l: "datasets" },
  { n: "21B+", l: "records" },
  { n: "250+", l: "domains" },
  { n: "50,000+", l: "customers on the platform" },
];

const dataWork = [
  {
    title: "What the product is",
    body: "Ready-made, validated datasets from the web's biggest sources — LinkedIn, Amazon, Instagram, Google Maps, Zillow, Crunchbase — across business, eCommerce, social and real estate. Buy a slice rather than build and maintain a scraper.",
  },
  {
    title: "How it reaches people",
    body: "Delivered by API, S3 or webhook, in JSON, CSV or Parquet, one-time or on a refresh subscription. Smart updates mean customers pay for new and changed records instead of re-buying the whole set.",
  },
  {
    title: "Where AI comes in",
    body: "Customers describe what they need in plain English and the filters are applied for them, narrowing a vast dataset to the rows that matter — which cuts both their cost and the volume they have to reason about.",
  },
  {
    title: "What I hold it to",
    body: "Freshness, fill rates and validation are the product, not a footnote. Published data-integrity stats let a buyer check the data meets their bar before they spend anything.",
  },
];

function DataProduct() {
  return (
    <section className="bg-ink text-white">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <img src="/img/brightdata.svg" alt="Bright Data" className="h-7 w-auto" />
            <span className="font-display text-[12px] tracking-[0.18em] text-white/50 uppercase">
              Where I work
            </span>
          </div>
          <h2 className="mt-5 text-[28px] lg:text-[34px]">I own Datasets</h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-white/85">
            Bright Data is a web-data platform. Datasets is the part of it I own: structured,
            validated data from the public web, packaged so a team can buy exactly the slice they
            need instead of building and babysitting their own collection pipeline.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/15 py-7 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <dt className="font-display text-[30px] tabular-nums lg:text-[36px]">{s.n}</dt>
              <dd className="mt-1 text-[12.5px] text-white/55">{s.l}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-1">
            {dataWork.map((d) => (
              <div key={d.title}>
                <h3 className="font-display text-[17px]">{d.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.75] text-white/75">{d.body}</p>
              </div>
            ))}
          </div>
          <DatasetShowcase />
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
