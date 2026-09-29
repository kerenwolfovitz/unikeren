import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const blocks = [
  {
    title: "Home page discovery",
    body: "After the first launch, we got some negative feedback on the home page whicg makes us rethink it",
    link: {
      label: "Home discovery",
      href: "https://docs.google.com/document/d/1cBH4DscUSrPY8mHaapgMJQ42gou_J2nAVcNvwaeYhQI/edit?usp=sharing",
    },
    image: "/img/mc-home-page.jpg",
    alt: "Management console home page discovery",
  },
  {
    title: "Usability testing and user research",
    body: "During our research of the home page we've set some F2F usability testing",
    link: {
      label: "Usability testings",
      href: "https://drive.google.com/file/d/1WUz_JEjjpxxxs9C3ZE8McsDisIIi9nZO/view?usp=sharing",
    },
    image: "/img/mc-usability.jpg",
    alt: "Usability testing screens",
  },
  {
    title: "Conversational design discovery",
    body: "This module is a self serve, there was a need for converational design mechnism to help the user operate this module",
    link: {
      label: "Conversational design",
      href: "https://docs.google.com/document/d/14DoZgJMwyJIciRhHGLiewyHJYx2aam7mSu-J2TiYYLc/edit?usp=sharing",
    },
    image: "/img/mc-conversational.jpg",
    alt: "Conversational design screens",
  },
];

export default function ManagementConsoleDetails() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10 lg:py-14">
        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-16">
          <div className="md:sticky md:top-[96px] md:self-start">
            <Link
              to="/blast-from-the-past"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-1.5 text-[13px] text-white/90 transition-colors hover:bg-white hover:text-ink"
            >
              <span aria-hidden="true">‹</span> Back
            </Link>
            <h1 className="mt-7 text-[30px] leading-[1.25] lg:text-[34px]">
              Management Console - Discovery
            </h1>
            <p className="mt-6 text-[14px] leading-[1.85] text-white/85">
              The management Console is a self served administration product that designed to unify
              all configurations in the Conversational Cloud platform of Live Person.
            </p>
            <p className="mt-4 text-[14px] leading-[1.85] text-white/85">
              One of Live person principles is "we are drinking our own Champaign" so the Managment
              console needed to support also{" "}
              <strong className="font-semibold">conversational design</strong>.
            </p>
          </div>

          <div className="space-y-14">
            {blocks.map((b) => (
              <Reveal key={b.title}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-[560px]">
                    <h2 className="text-[19px]">{b.title}</h2>
                    <p className="mt-3 text-[14px] leading-[1.85] text-white/85">{b.body}</p>
                  </div>
                  <a
                    href={b.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/40 px-6 py-2 text-[13px] whitespace-nowrap text-white transition-colors hover:bg-white hover:text-ink"
                  >
                    {b.link.label}
                  </a>
                </div>
                <img src={b.image} alt={b.alt} loading="lazy" className="mt-6 w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
