import { Link } from "react-router-dom";
import { Pill } from "../components/Pill";
import { Reveal } from "../components/Reveal";
import { projects, type Project } from "../data/projects";

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
                to="/management"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-2.5 text-[13px] text-white transition-colors hover:bg-white hover:text-ink"
              >
                Being a Manager
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

function ProjectBand({ project }: { project: Project }) {
  return (
    <article>
      <section className={`relative overflow-hidden ${project.band}`}>
        {project.bandImage && (
          <img
            src={project.bandImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover ${project.bandImageOpacity ?? "opacity-40"}`}
          />
        )}
        <Reveal className="relative mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="text-[30px] lg:text-[38px]">{project.title}</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <Pill key={l.href} href={l.href}>
                  {l.label}
                </Pill>
              ))}
            </div>
          </div>

          <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8]">{project.intro}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <h3 className="text-[15px] font-medium">Problem Statement</h3>
              <p className="mt-2 text-[14px] leading-[1.8]">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-[15px] font-medium">Goals</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-[1.8]">
                {project.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] font-medium">User Story</h3>
              <p className="mt-2 text-[14px] leading-[1.8]">{project.userStory}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={project.screenshotBand}>
        {project.screenshots.length > 1 ? (
          // Two-up collage, as on the original site: a wide screen with a second
          // artefact tucked in beside and below it.
          <Reveal className="relative mx-auto max-w-[1440px] pb-[6%]">
            <img
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              loading="lazy"
              className="w-[62%]"
            />
            <img
              src={project.screenshots[1].src}
              alt={project.screenshots[1].alt}
              loading="lazy"
              className="absolute right-0 bottom-0 w-[52%]"
            />
          </Reveal>
        ) : (
          project.screenshots.map((s) => (
            <Reveal key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" className="w-full" />
            </Reveal>
          ))
        )}
      </section>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      {projects.map((p) => (
        <ProjectBand key={p.id} project={p} />
      ))}
    </>
  );
}
