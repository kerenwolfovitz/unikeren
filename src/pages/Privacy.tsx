import { contact } from "../site";

export default function Privacy() {
  return (
    <section className="mx-auto max-w-[760px] px-5 py-14 lg:px-10 lg:py-16">
      <h1 className="text-[28px] lg:text-[32px]">Privacy</h1>

      <p className="mt-6 text-[15px] leading-[1.85]">
        This site keeps a simple record of visits, so I can see whether anyone is reading it. It
        uses no cookies, no advertising trackers, and no third-party analytics service.
      </p>

      <h2 className="mt-10 text-[20px]">What is recorded</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.85]">
        <li>The page you opened, and the date and time.</li>
        <li>The site you arrived from, if any — for example a search engine or LinkedIn.</li>
        <li>An approximate location: country, and sometimes city.</li>
        <li>Your browser and whether you are on a phone or a computer.</li>
        <li>
          A random identifier, held only for the length of your visit, so that several pages viewed
          in one sitting are grouped together.
        </li>
      </ul>

      <h2 className="mt-10 text-[20px]">What is not recorded</h2>
      <p className="mt-3 text-[15px] leading-[1.85]">
        Your IP address is not stored. It is used momentarily to work out the country and then
        discarded. Your name, your employer and your email address are not collected, and nothing
        here is shared with or sold to anyone else.
      </p>

      <h2 className="mt-10 text-[20px]">Getting in touch</h2>
      <p className="mt-3 text-[15px] leading-[1.85]">
        If you would like your records removed, or you want to know what is held, email me at{" "}
        <a href={contact.mailHref} className="underline underline-offset-4 hover:text-link">
          {contact.email}
        </a>{" "}
        and I will take care of it.
      </p>
    </section>
  );
}
