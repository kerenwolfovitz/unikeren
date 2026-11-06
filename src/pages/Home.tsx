import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { FlowArrow, WorkflowStep, type Step } from "../components/WorkflowStep";
import { DatasetShowcase } from "../components/DatasetShowcase";
import { NeverMissShowcase } from "../components/NeverMissShowcase";
import { ShoverShookShowcase } from "../components/ShoverShookShowcase";

function Hero() {
  return (
    <section className="relative bg-ink">
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
      {/* Deepens the lower half so the workflow text stays readable on the light right side */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(14,14,22,0) 40%, rgba(14,14,22,0.6) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="max-w-[640px]">
            <h1 className="text-[30px] text-white lg:text-[36px]">
              A bit about my product management life...
            </h1>
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
              <a
                href="#nevermiss"
                className="inline-flex items-center rounded-full bg-white px-7 py-2.5 text-[13px] text-ink transition-colors hover:bg-accent"
              >
                See the businesses I built
              </a>
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

        <div className="mt-14 border-t border-white/15 pt-10 lg:mt-16">
          <h2 className="text-[22px] text-white lg:text-[26px]">How I work, end to end</h2>
          <ol className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:flex lg:flex-row lg:items-start lg:gap-x-2">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                {i > 0 && <FlowArrow dark compact />}
                <WorkflowStep step={s} dark hoverDetails />
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const neverMissPipeline = [
  {
    title: "Sign-up triggers n8n",
    body: "A business fills in the onboarding form and an n8n workflow picks it up instantly.",
    tools: ["Form", "n8n"],
  },
  {
    title: "Written to the sheet",
    body: "n8n saves every answer to the spreadsheet that runs the whole operation.",
    tools: ["n8n", "Sheets"],
  },
  {
    title: "Voice agent built by API",
    body: "n8n creates a dedicated voice assistant for that business and writes its ID back to the sheet.",
    tools: ["n8n", "Voice AI"],
  },
  {
    title: "Calls become leads",
    body: "After every call, n8n logs the lead as a new row and emails the team a summary.",
    tools: ["Voice AI", "n8n", "Sheets"],
  },
  {
    title: "Paid by SMS",
    body: "On day 7, n8n sends a payment link. No payment, and the trial agent is switched off.",
    tools: ["n8n", "SMS"],
  },
  {
    title: "Feedback loop",
    body: "n8n sends a feedback form, and I tune the agent on what real calls reveal.",
    tools: ["n8n", "Email"],
  },
];

const stack = [
  { name: "n8n", role: "The automation engine — every workflow runs through it" },
  { name: "Voice AI agent", role: "Answers the phone, qualifies, books" },
  { name: "Spreadsheet", role: "The live database: clients, agents, leads" },
  { name: "Email & SMS", role: "Lead summaries, payment links, feedback" },
];

const neverMissPoints = [
  {
    title: "The problem",
    body: "Clinics, garages, cleaners and contractors don't lose work for lack of demand. They lose it to voicemail — after hours, or when the team is busy — and the customer just calls the next number on the list.",
  },
  {
    title: "What it does",
    body: "Answers 24/7, works out why the person is calling, asks only the essential questions, books the job or captures the lead, filters out noise, and emails the team a summary they can act on. No new app for anyone to learn.",
  },
  {
    title: "How I run it",
    body: "Outcomes, not “AI”. I listen to real calls and tune the agent on what actually happens, not on demos. The goal is simple: more appointments, less admin, zero missed leads.",
  },
];

function NeverMiss() {
  return (
    <section id="nevermiss" className="scroll-mt-24 bg-white">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <span className="font-display text-[12px] tracking-[0.18em] text-ink/50 uppercase">
              Something I built, end to end
            </span>
            <h2 className="mt-4 text-[30px] leading-[1.2] lg:text-[40px]">
              NeverMiss — an AI receptionist that answers every call
            </h2>
            <p className="mt-5 max-w-[580px] text-[16px] leading-[1.75] text-ink/80">
              A voice agent for service businesses that live on the phone. I took it from idea to
              paying-customer flow on my own — and wired the whole business together with{" "}
              <strong className="font-semibold text-ink">n8n</strong>: the voice agent, the
              spreadsheet that runs operations, lead emails, payments and feedback, all automated.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
              {["n8n automation", "Voice AI agent", "Spreadsheet as database", "API integrations"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-[12px] text-ink/75"
                  >
                    {t}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {neverMissPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-[17px]">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.75] text-ink/75">{p.body}</p>
                </div>
              ))}
            </div>

            <a
              href="https://nevermiss-lead.com"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[13px] text-white transition-colors hover:bg-link"
            >
              Visit nevermiss-lead.com
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <NeverMissShowcase />
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid gap-10 p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-14 lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 font-display text-[12px] tracking-[0.12em] text-accent uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Automated with n8n
              </span>
              <h3 className="mt-5 font-display text-[24px] leading-[1.25] lg:text-[28px]">
                No manual work from sign-up to payment
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-white/70">
                I designed and built the n8n workflows that connect everything. A new business
                goes from the website to a working receptionist — and every call becomes a row in
                the spreadsheet and an email to the team — without anyone touching it.
              </p>
              <dl className="mt-7 grid gap-4">
                {stack.map((s) => (
                  <div key={s.name} className="border-l-2 border-accent/50 pl-3">
                    <dt className="font-display text-[15px]">{s.name}</dt>
                    <dd className="mt-0.5 text-[12.5px] leading-[1.6] text-white/55">{s.role}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {neverMissPipeline.map((s, i) => (
                <li
                  key={s.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="font-display text-[12px] tracking-[0.14em] text-white/40 tabular-nums">
                    STEP {i + 1}
                  </span>
                  <h4 className="mt-2 font-display text-[16px]">{s.title}</h4>
                  <p className="mt-1.5 flex-1 text-[12.5px] leading-[1.7] text-white/65">{s.body}</p>
                  <ul className="mt-4 flex flex-wrap items-center gap-1.5" aria-label="Tools">
                    {s.tools.map((t, j) => (
                      <li key={t} className="flex items-center gap-1.5">
                        {j > 0 && (
                          <span aria-hidden="true" className="text-[11px] text-white/30">
                            →
                          </span>
                        )}
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] ${
                            t === "n8n" ? "bg-accent text-ink" : "bg-white/10 text-white/75"
                          }`}
                        >
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const shoverShookPoints = [
  {
    title: "The problem",
    body: "Gift vouchers pile up unused — the wrong shop, the wrong city, a birthday gift nobody wanted — and quietly expire. Meanwhile someone else would happily use that exact voucher if it were cheaper.",
  },
  {
    title: "What it does",
    body: "A marketplace that connects the two. Sellers list a voucher in a minute and get cash back for it; buyers browse by category, pay below face value and get the code instantly.",
  },
  {
    title: "What I focused on",
    body: "Trust. A stranger is handing over a code, so safe payment, clear pricing and instant delivery are the product — not an afterthought.",
  },
];

const shoverShookFlow = [
  { who: "Seller", text: "Lists an unused voucher and sets a price" },
  { who: "Buyer", text: "Finds it by category, at a discount" },
  { who: "Platform", text: "Takes payment securely" },
  { who: "Buyer", text: "Gets the code instantly and uses it" },
];

function ShoverShook() {
  return (
    <section id="shover-shook" className="scroll-mt-24 bg-band-daas/60">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="order-2 lg:order-1">
            <ShoverShookShowcase />
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-display text-[12px] tracking-[0.18em] text-ink/50 uppercase">
              Another business I built
            </span>
            <h2 className="mt-4 text-[30px] leading-[1.2] lg:text-[40px]">
              Shover Shook — a marketplace for vouchers you'll never use
            </h2>
            <p className="mt-5 max-w-[580px] text-[16px] leading-[1.75] text-ink/80">
              A two-sided marketplace for the Israeli market: people sell gift vouchers they don't
              need, others buy them below face value. I designed and built it from the idea up —
              both sides of the marketplace, the buying flow and the site.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="What it involved">
              {["Two-sided marketplace", "Hebrew / RTL", "Trust & payments", "Built with AI tools"].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/15 bg-white/60 px-3 py-1 text-[12px] text-ink/75"
                  >
                    {t}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {shoverShookPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-[17px]">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.75] text-ink/75">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shoverShookFlow.map((s, i) => (
            <li key={i} className="rounded-2xl border border-ink/10 bg-white/70 p-4">
              <span className="font-display text-[12px] tracking-[0.14em] text-ink/40 tabular-nums">
                STEP {i + 1} · {s.who.toUpperCase()}
              </span>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink/85">{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
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
      <NeverMiss />
      <ShoverShook />
      <DataProduct />
      <WhereNext />
    </>
  );
}
