import { Pill } from "../components/Pill";
import { Reveal } from "../components/Reveal";

type PastProject = {
  title: string;
  paragraphs: string[];
  links: { label: string; href: string }[];
  band: string;
  screenshot: string;
  screenshotAlt: string;
};

const pastProjects: PastProject[] = [
  {
    title: "Ring Lead - ZoomInfo",
    paragraphs: [
      "With Ring Lead Data Management, you can ensure the efficiency and accuracy of your data. Our expert team specializes in organizing data to give you the best results possible. We go above and beyond to meet your unique requirements, and our innovative approach ensures that your data management is always up-to-date.",
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/f6YkVniKGGGb1w9mgHoNHX/UDM-Ring-Lead-demo-concept?node-id=1%3A10329&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A10329",
      },
      {
        label: "Discovery doc",
        href: "https://docs.google.com/document/d/1CMO44Lyw08KcVYX9W_PtMuUJCV5WV3_Xsmp-exFgX60/edit?usp=sharing",
      },
      {
        label: "Research results",
        href: "https://www.figma.com/proto/jahQXeiaKbgMPMg0AgB6sR/UDM-research?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A5889&node-id=0%3A5889",
      },
    ],
    band: "bg-[#f1eef6]",
    screenshot: "/img/shot-ringlead.jpg",
    screenshotAlt: "Ring Lead data management screens",
  },
  {
    title: "Management Console - Live Person",
    paragraphs: [
      "The management Console is a self served administration product that designed to unify all configurations in the Conversational Cloud platform of Live Person.",
      'One of Live person principles is "we are drinking our own Champaign" so the Managment console needed to support also conversational design.',
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/ovJMDATyc6busLCL0H9VIq/Management-Console-(Copy)?node-id=7912%3A0&starting-point-node-id=7912%3A1211",
      },
      {
        label: "More concepts",
        href: "https://www.figma.com/proto/b9Fm9pbkTYlGbbhG5G6jIG/MC-conversational-design?node-id=2%3A5&scaling=min-zoom&page-id=0%3A1",
      },
    ],
    band: "bg-[#e6e6e8]",
    screenshot: "/img/shot-mgmt-console.jpg",
    screenshotAlt: "LivePerson management console screens",
  },
  {
    title: "Agent as a bot tuner - Live Person",
    paragraphs: [
      "A big feature in the main Live Person system that uses intelligence.",
      "A SDR (agent) can uses his experience and knowledge to annotate the conversation in order to train the bots his brand uses.",
      "In this concept I present UX concepts supported by F2F usability testings",
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/3hsxYzc6MxCasuFDSomX1t/UT-Agent-annotations?node-id=1%3A21&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A21",
      },
      {
        label: "Usability testing",
        href: "https://docs.google.com/document/d/15D2-HRKBS7-gwJh-nnS7hvdTLrymbCPm_JhGPNhGvpM/edit?usp=sharing",
      },
    ],
    band: "bg-[#f1eef6]",
    screenshot: "/img/shot-bot-tuner.png",
    screenshotAlt: "Agent as a bot tuner screens",
  },
  {
    title: "Manager workspace - Live Person",
    paragraphs: [
      "Managers of SDR groups need a generic overview of the shift status.",
      "This dashboard present dynamic information of the SDR's, the queue and everything the manager need to know to help him run the shift better.",
      "In this concept I present UX improvements supported by F2F usability testings",
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/Vl7wAkHEKgdDH0puRivBi4/MWS-alerts-and-configuration?node-id=1%3A79&scaling=min-zoom&page-id=0%3A1",
      },
      {
        label: "Usability testing",
        href: "https://docs.google.com/document/d/15D2-HRKBS7-gwJh-nnS7hvdTLrymbCPm_JhGPNhGvpM/edit?usp=sharing",
      },
    ],
    band: "bg-[#e6e6e8]",
    screenshot: "/img/shot-manager-workspace.png",
    screenshotAlt: "Manager workspace dashboard",
  },
];

export default function BlastFromThePast() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pt-12 pb-6 lg:px-10 lg:pt-14">
          <h1 className="text-[28px] lg:text-[32px]">A Blast from the Past...</h1>
        </div>
      </section>

      {pastProjects.map((p) => (
        <article key={p.title}>
          <section className={p.band}>
            <Reveal className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10 lg:py-14">
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                <div>
                  <h2 className="text-[24px] lg:text-[26px]">{p.title}</h2>
                  {p.paragraphs.map((para) => (
                    <p key={para.slice(0, 30)} className="mt-3 max-w-[720px] text-[14px] leading-[1.85]">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 md:flex-col md:items-stretch">
                  {p.links.map((l, i) => (
                    <Pill key={l.href} href={l.href} variant={i === 0 ? "solid" : "outline-dark"}>
                      {l.label}
                    </Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
          <Reveal>
            <img src={p.screenshot} alt={p.screenshotAlt} loading="lazy" className="w-full" />
          </Reveal>
        </article>
      ))}
    </>
  );
}
