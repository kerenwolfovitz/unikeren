import { Pill } from "./Pill";
import { Reveal } from "./Reveal";
import type { Project } from "../data/projects";

export function ProjectBand({ project }: { project: Project }) {
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
