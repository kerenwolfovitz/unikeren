import { Reveal } from "../components/Reveal";

const primaryLinks = [
  {
    label: "Muze storybook",
    href: "https://storage.googleapis.com/yazi-stg-pet-llama-frontend-assets.zoominfo.com/component-library/master/component-library/latest/index.html?path=/story/foundations-colors--colors",
  },
  {
    label: "Muze Figma",
    href: "https://www.figma.com/design/dnCn4NkU6oCgrmVFFLW6Gm/Muze-Core?node-id=0-1&t=fBFTHMpJPqAkKHxW-1",
  },
];

const secondaryLinks = [
  {
    label: "Muzeletter",
    href: "https://www.figma.com/proto/Kwk13z7SRHqxpFvVGjNMYj/Muzeletter?node-id=1-2&node-type=frame&t=OPDMqKPOYPqLCsO3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    label: "Startegy",
    href: "https://docs.google.com/document/d/1hJ7oED0nbQy8sgFLqO2AnmWypXX6QF5XUaSiCUdXMeQ/edit?usp=sharing",
  },
  {
    label: "Health Scan",
    href: "https://docs.google.com/presentation/d/1oT5_CGhqZ0UFcwpLL0Jh6kiXOQilUdKfEtyGj36-nio/edit?usp=sharing",
  },
  {
    label: "Components Matrix",
    href: "https://docs.google.com/spreadsheets/d/188H4zhPgcSGEi6XZWndC_XmQOubEnnqYyExODuF0ib8/edit?usp=sharing",
  },
  {
    label: "Training",
    href: "https://www.figma.com/design/MFTbVHhpuFgCxMHVYY2HNj/Muze-Odyssey?node-id=0-1&t=eXLx151aeJzgm7DY-1",
  },
  {
    label: "A11Y Guidelines",
    href: "https://www.figma.com/design/i68DiIVeVL3yIXabzpbqaI/Accessibility-Guidelines?node-id=0-1&t=FWp2jqAZXlqigFFJ-1",
  },
];

const cards = [
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.5 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM8 14.2a4.6 4.6 0 0 0 8 0",
    title: "The Gate Keeper",
    body: "As a Senior UX/UI Manager, I took on the role of gatekeeper to ensure our Design System evolves in the right direction. The commitment to adopting the Design System across all new projects and features is crucial, especially for designers and developers who are accustomed to different workflows without the structured guidance of UX principles.\n\nChanging established habits can be challenging, so I spearheaded the creation of a streamlined process for building new components, clearly distinguishing between components and patterns, and defining the governance for adding features to developed components.",
  },
  {
    icon: "m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z",
    title: "Main Challenges",
    body: '"Managing a design system came with several key challenges. One of the primary obstacles was getting buy-in from developers to embrace a more structured, system-driven approach, requiring a shift from their established practices. Additionally, communicating the importance of integrating design system tasks into the product development process to product managers proved complex, as it often required balancing competing priorities. Another significant challenge was managing the dual responsibilities of overseeing the design system while leading a full-time UX/UI team, ensuring progress without compromising on day-to-day project demands."',
  },
  {
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0v20M2 12h20M4.5 6h15M4.5 18h15",
    title: "Day to Day",
    body: "Managing the design system alongside my role as Senior UX/UI Manager required meticulous coordination across multiple teams, including UX, product, and engineering. I implemented streamlined processes and communication channels to ensure smooth collaboration and effective maintenance of the system.\n\nDay-to-day responsibilities include overseeing the system's integration into ongoing projects, offering guidance on best practices, and ensuring the team has the support they need for successful implementation. I also focus on continuously refining the design system, identifying areas for improvement, and ensuring it remains scalable and adaptable to meet future demands",
  },
  {
    icon: "M13 2 4.5 12.5h6L11 22l8.5-10.5h-6L13 2Z",
    title: "Governance and Documentation",
    body: "Maintaining the integrity of our design system required a balance between flexibility and consistency. I focused on fostering collaboration and accountability to drive sustainable growth while ensuring guidelines were followed. To support this, I created a standardized documentation template that clearly outlines each component's purpose, behavior, and usage. This approach ensures the design system remains both scalable and easy to implement across teams",
  },
];

export default function DesignSystems() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-16">
          <h1 className="text-center text-[26px] lg:text-[32px]">
            Managing Design Systems for Complex systems
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-[14px] leading-[1.9] text-white/90">
                Managing design systems for complex projects requires a blend of strategic vision and
                practical execution. My approach focuses on creating scalable, cohesive systems that
                unify user experience across platforms while streamlining collaboration for
                cross-functional teams. By fostering innovation and maintaining consistency, I ensure
                that each component serves both design and functionality, delivering high-quality
                digital experiences efficiently.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                {primaryLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#8b7bff] px-6 py-2 text-[13px] text-white transition-colors hover:bg-[#8b7bff]"
                  >
                    {l.label}
                    <span aria-hidden="true">›</span>
                  </a>
                ))}
              </div>
            </div>
            <img
              src="/img/ds-hero.jpg"
              alt="Design system illustration"
              className="max-h-[300px] w-full object-cover"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-3">
            {secondaryLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-white/85 underline underline-offset-4 transition-colors hover:text-link"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <img
        src="/img/ds-hero.jpg"
        alt=""
        aria-hidden="true"
        className="h-[280px] w-full object-cover object-center lg:h-[380px]"
      />

      <section className="mx-auto max-w-[1180px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
          {cards.map((c) => (
            <Reveal key={c.title}>
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-6 w-6 shrink-0 text-ink/70"
                >
                  <path d={c.icon} />
                </svg>
                <h2 className="text-[20px]">{c.title}</h2>
              </div>
              {c.body.split("\n\n").map((para) => (
                <p key={para.slice(0, 30)} className="mt-4 text-[13.5px] leading-[1.9] text-ink/85">
                  {para}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
