import { ProjectBand } from "../components/ProjectBand";
import { projects } from "../data/projects";

export default function UxUiManagement() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pt-12 pb-8 lg:px-10 lg:pt-14">
          <h1 className="text-[28px] lg:text-[34px]">UX/UI Management</h1>
          <p className="mt-4 max-w-[800px] text-[15px] leading-[1.85]">
            Product work from my years leading UX/UI at ZoomInfo — large, data-heavy B2B systems
            taken from problem definition through discovery, design and rollout. Each one shows the
            problem we set out to solve, the goals we set, and what shipped.
          </p>
        </div>
      </section>

      {projects.map((p) => (
        <ProjectBand key={p.id} project={p} />
      ))}
    </>
  );
}
