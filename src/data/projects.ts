export type Project = {
  id: string;
  title: string;
  intro: string;
  problem: string;
  goals: string[];
  userStory: string;
  links: { label: string; href: string }[];
  /** Tailwind background colour class for the text band. */
  band: string;
  /** Decorative photo layered behind the text band, if any. */
  bandImage?: string;
  bandImageOpacity?: string;
  /** Text colour for the band; defaults to dark ink. */
  screenshots: { src: string; alt: string }[];
  screenshotBand: string;
};

export const projects: Project[] = [
  {
    id: "workflows",
    title: "Workflows",
    intro:
      "Workflows in ZoomInfo automate repetitive tasks, streamline processes, and enhance productivity by guiding users through complex operations.",
    problem:
      "Users struggled with manual processes, leading to inefficiencies and errors in data management and client outreach.",
    goals: [
      "Reduce the time users spend on manual processes by at least 30%.",
      "Increase accuracy in data management tasks by implementing automation.",
      "Enhance user satisfaction with streamlined, intuitive workflows.",
    ],
    userStory:
      "As a sales representative, I want an automated workflow to manage my client follow-ups so that I can save time and reduce errors in my daily tasks",
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/ze62N6sxqkJhtwUFL6q2t5/Workflows?node-id=1-205579&t=vt1CjUrd9XnYxmV6-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A192911&starting-point-node-id=1%3A205579",
      },
    ],
    band: "bg-band-workflows",
    screenshots: [{ src: "/img/shot-workflows.jpg", alt: "ZoomInfo Workflows screens" }],
    screenshotBand: "bg-band-shell",
  },
  {
    id: "route",
    title: "Route & Teritorries",
    intro:
      "The Route feature provides optimized paths for sales and marketing efforts, ensuring efficient territory management and client engagement.",
    problem:
      "Sales teams lacked a structured way to manage territories, leading to overlap and missed opportunities.",
    goals: [
      "Optimize territory management to reduce overlap and increase efficiency by 20%.",
      "Improve user navigation and task completion rates within the application.",
      "Enhance sales team productivity and client engagement.",
    ],
    userStory:
      "As a sales manager, I need a clear and efficient route plan for my team so that we can maximize our territory coverage and avoid overlapping efforts.",
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/490goZiQ4jWAxIJFy5mvYG/Teritorries-and-Route?node-id=1-53715&t=40cL4uqKO7PRvfl9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A53715&show-proto-sidebar=1",
      },
    ],
    band: "bg-band-route",
    bandImage: "/img/bg-man-running.jpg",
    bandImageOpacity: "opacity-45",
    screenshots: [{ src: "/img/shot-route.jpg", alt: "Route and territories screens" }],
    screenshotBand: "bg-band-shell",
  },
  {
    id: "daas",
    title: "Data as a Service (DaaS)",
    intro:
      "DaaS provides users with real-time, high-quality data accessible via APIs, enhancing their decision-making and operational efficiency.",
    problem:
      "Users needed access to real-time, accurate data but faced challenges with data integration and usability.",
    goals: [
      "Ensure data accuracy and real-time availability for users.",
      "Simplify the integration process for users accessing data via APIs.",
      "Improve user satisfaction by making data easily accessible and actionable.",
    ],
    userStory:
      "As a data analyst, I need real-time, accurate data accessible through APIs so that I can integrate it seamlessly into our reporting tools",
    links: [
      {
        label: "Figma flow 1",
        href: "https://www.figma.com/proto/JLvi62mi14lkWd7z4ev7Po/DaaS-POC?node-id=1-197298&t=PqOkodJHUPZo8O4Z-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A196009&starting-point-node-id=1%3A197298",
      },
      {
        label: "Figma flow 2",
        href: "https://www.figma.com/proto/JLvi62mi14lkWd7z4ev7Po/DaaS-POC?node-id=1-317114&t=IvBeEilLBvmF9smW-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A311710&starting-point-node-id=1%3A317114",
      },
    ],
    band: "bg-band-daas",
    bandImage: "/img/bg-cotton-candy.jpg",
    bandImageOpacity: "opacity-20",
    screenshots: [{ src: "/img/shot-daas.jpg", alt: "Data as a Service screens" }],
    screenshotBand: "bg-band-shell",
  },
  {
    id: "global-mapping",
    title: "Global Mapping",
    intro:
      "Global Mapping provides a comprehensive view of data across different geographies, helping users make informed decisions on a global scale.",
    problem: "Users lacked a cohesive view of data across regions, leading to fragmented insights.",
    goals: [
      "Improve global data visibility and accessibility by 50%.",
      "Enhance the user interface for ease of use across different regions.",
      "Increase the ability of users to derive insights from global data.",
    ],
    userStory:
      "As a global sales executive, I need a comprehensive view of our data across different regions so that I can make informed strategic decisions.",
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/JLvi62mi14lkWd7z4ev7Po/DaaS-POC?node-id=1-241403&t=Us3yTev7OkGyjAzV-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A235017&starting-point-node-id=1%3A241403",
      },
    ],
    band: "bg-band-mapping",
    bandImage: "/img/bg-ice-cream.jpg",
    bandImageOpacity: "opacity-35",
    screenshots: [
      { src: "/img/shot-global-mapping.png", alt: "Global mapping screens" },
      { src: "/img/shot-global-mapping-2.png", alt: "Global mapping data flow" },
    ],
    screenshotBand: "bg-band-shell",
  },
  {
    id: "enrich",
    title: "Enrich",
    intro:
      "The Enrich feature enhances user data with additional context and insights, providing a more complete and valuable dataset.",
    problem:
      "Users had incomplete or outdated data, impacting their ability to make informed decisions.",
    goals: [
      "Improve the completeness and accuracy of user data by 40%.",
      "Enhance the user interface to display enriched data clearly and intuitively.",
      "Increase user engagement with the enriched data feature.",
    ],
    userStory:
      "As a marketing strategist, I want enriched data with additional context so that I can create more targeted and effective marketing campaigns",
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/p2cr63cHH2O9sP1sJP9bJE/Enruch-improvments?node-id=1-84864&t=UxJecQvXveWgcjYE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A84864&show-proto-sidebar=1",
      },
    ],
    band: "bg-band-enrich",
    bandImage: "/img/bg-pink-cream.jpg",
    bandImageOpacity: "opacity-45",
    screenshots: [{ src: "/img/shot-enrich.jpg", alt: "Enrich screens" }],
    screenshotBand: "bg-band-shell",
  },
];
