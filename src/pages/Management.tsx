import { Reveal } from "../components/Reveal";
import { contact } from "../site";

const sections = [
  {
    title: "Leadership and Mentorship",
    body: "As a Senior UX/UI Manager, one of my core responsibilities was to mentor and support my team of designers. I focused on nurturing each designer's unique strengths while encouraging growth in areas that aligned with their career goals. Regular feedback sessions, paired design critiques, and collaborative brainstorming were essential parts of the day-to-day. I also guided the team through complex problem-solving and decision-making processes, ensuring that we created meaningful, user-focused designs that were backed by data and research.",
  },
  {
    title: "Cross-Functional Collaboration",
    body: "A significant part of the role involved bridging the gap between design, development, and product strategy. I worked closely with product managers, developers, and other stakeholders to translate user needs and business requirements into design solutions — the same seam I now sit on from the product side. This cross-functional collaboration kept the entire product experience cohesive and aligned with both user expectations and technical capabilities. Regular syncs, design sprints, and workshops were the tools I used to facilitate seamless communication and keep projects moving forward.",
  },
  {
    title: "Design Strategy and Execution",
    body: "Balancing long-term design vision with the practical execution of day-to-day tasks was crucial in the role. I was responsible for setting the design strategy that aligned with business goals while also ensuring that the team delivered on tight deadlines. That meant defining design principles, creating roadmaps for future initiatives, and making sure that every design decision reflected the larger strategic direction. Whether it was overseeing the development of a new feature or managing the evolution of an existing product, I made sure the end result met both user and business needs.",
  },
  {
    title: "Driving Innovation",
    body: "Innovation is at the heart of successful UX/UI management. I constantly encouraged my team to think outside the box and explore creative solutions to complex design problems. From adopting cutting-edge design tools and methods to incorporating user feedback into the development cycle, I made sure we were always pushing the boundaries of what's possible. That commitment to innovation not only improved the user experience but also positioned the product as a leader in the industry.",
  },
  {
    title: "Maintaining a User-Centered Focus",
    body: "While managing a team and juggling multiple projects, keeping the user at the center of every decision was a key part of the role — and it is the habit that carried over most directly into product. I advocated for thorough user research and usability testing to inform design choices. Whether we were conducting interviews, running surveys, or performing A/B tests, my team and I made sure we were continuously learning from users and adjusting accordingly.",
  },
];

const socials = [
  {
    label: "Facebook",
    href: contact.facebook,
    path: "M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2C11.54 2 9.68 3.66 9.68 6.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z",
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 8.48h3.84V21H3V8.48Zm6.4 0h3.68v1.71h.05a4.03 4.03 0 0 1 3.63-2c3.88 0 4.6 2.56 4.6 5.88V21h-3.84v-5.98c0-1.43-.03-3.26-1.99-3.26-2 0-2.3 1.55-2.3 3.15V21H9.4V8.48Z",
  },
  {
    label: "Instagram",
    href: contact.instagram,
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm4.33-8.08a.97.97 0 1 0 0 1.95.97.97 0 0 0 0-1.95Z",
  },
];

export default function Management() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src="/img/mgmt-1.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid items-stretch gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <img
              src="/img/mgmt-2.jpg"
              alt="Keren Wolfovitz"
              className="h-full max-h-[460px] w-full object-cover"
            />
            <div className="bg-white/90 p-8 lg:p-10">
              <h1 className="text-[24px] lg:text-[28px]">Leading a UX/UI Team</h1>
              <p className="mt-5 text-[14px] leading-[1.85]">
                Before moving into product management, I spent years as a Senior UX/UI Manager —
                balancing creativity, leadership, and strategy. My role was not only to guide a
                talented team of designers but also to ensure that we consistently delivered
                user-centered, high-quality design solutions that aligned with business objectives.
                Every day presented new challenges, from mentoring individual team members to
                collaborating with stakeholders across the organization. By fostering a culture of
                innovation and continuous improvement, I made sure we stayed ahead of trends while
                meeting accessibility and usability standards. It is the grounding I bring to
                product work today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-6 lg:px-10">
        {sections.map((s) => (
          <Reveal key={s.title} className="py-10 lg:py-12">
            <h2 className="text-[24px] lg:text-[26px]">{s.title}</h2>
            <p className="mt-5 max-w-[900px] text-[14px] leading-[1.9]">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <section className="bg-band-shell/60">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-5 py-12 md:grid-cols-2 md:gap-0 md:py-0 lg:px-10">
          <div className="md:py-16">
            <h2 className="text-[26px]">Let's Get Social</h2>
            <div className="mt-6 flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-ink/70 transition-colors hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <img
            src="/img/mgmt-3.jpeg"
            alt="Keren Wolfovitz"
            className="h-full max-h-[340px] w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
