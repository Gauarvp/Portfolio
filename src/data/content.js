export const hero = {
  tag: "Bengaluru · Open to PM Roles",
  headline: ["I don't just", "analyze data.", "I build what's next."],
  accentWord: "what's next.",
  sub: "I've spent 1.7+ years as a support analyst at Wipro and DXC — but I never stopped at just reviewing and running reports. I spotted problems worth solving, designed two product tools from scratch, and sat in sprint planning alongside PMs. Now I'm making the switch official.",
  cta1: { label: "Read my story", href: "#story" },
  cta2: { label: "Hire me", href: "#contact" },
  stats: [
    { value: 1.7, suffix: "+", label: "Years of experience", isFloat: true },
    { value: 28, suffix: "%", label: "Bottleneck identified" },
    { value: 18, suffix: "%", label: "Engagement increase" },
    { value: 24, suffix: "%", label: "Processing time cut" },
  ],
};

export const story = {
  label: "My Story",
  title: ["A support analyst", "becoming a product manager."],
  narrative: [
    {
      text: "I started out as a support analyst. My job was to look at tickets, track metrics, and keep things running. But the more I worked with the data, the more I kept noticing patterns that nobody was acting on.",
    },
    {
      text: "I'd see the same types of tickets come in week after week. I'd watch engineers waste time on problems that could be solved with better tooling. And I kept thinking — why isn't someone building a fix for this?",
    },
    {
      quote: "Good products come from understanding both the data and the people behind it.",
    },
    {
      text: "So I started doing it myself. I spotted a 28% process bottleneck at Wipro and turned it into a feature request. I designed an AI support agent and a performance dashboard — both born from problems I saw first-hand in my analyst role. At Varcons, I'd already shipped a full app and grown engagement by 18%.",
    },
    {
      text: "I've been doing product work inside analyst roles for a while now. I'm ready to make it my actual job.",
      bold: true,
    },
  ],
  timeline: [
    {
      year: "2020 – 2024",
      label: "20",
      role: "BE Computer Science",
      company: "Jyothy Institute of Technology, Bangalore · GPA 8.22",
      detail: "Learned the fundamentals — REST APIs, databases, and how to break down problems systematically.",
    },
    {
      year: "Jan – Mar 2023",
      label: "23",
      role: "Product & Engineering Intern",
      company: "Varcons Technologies, Bengaluru",
      detail: "Built and shipped a social app from scratch. Made real product calls about what to build and what to skip. 18% engagement uplift.",
    },
    {
      year: "Sep 2024 – Jun 2025",
      label: "24",
      role: "Associate Support Analyst",
      company: "DXC Technology · India",
      detail: "Analysed workflows across 4 product areas, cut processing time by 24%, and started collaborating directly with PMs on user stories and backlog items.",
    },
    {
      year: "Jun 2025 – Present",
      label: "NOW",
      role: "Product Support Analyst",
      company: "Wipro Limited · Bangalore",
      detail: "Defining KPIs, designing product tools (RCA Agent, Performance Dashboard), and embedding with PMs during sprint planning and roadmap reviews.",
      active: true,
    },
  ],
};

export const skills = {
  label: "What I Bring",
  title: ["Six skills that", "make a good PM."],
  desc: "Each one backed by something I've actually done — not just something I've read about.",
  items: [
    {
      icon: "barChart",
      title: "Turning Data into Decisions",
      desc: "I don't just pull reports. I dig into why the numbers look the way they do and figure out what we should do about it.",
      evidence: "Found a 28% bottleneck at Wipro that became a feature change request, saving ~6 hrs/month",
    },
    {
      icon: "map",
      title: "Roadmap & Prioritisation",
      desc: "I've sat in sprint planning and roadmap reviews, helped evaluate trade-offs, and contributed to deciding what ships next.",
      evidence: "Embedded with PMs at Wipro — contributed to PRD drafts and evaluated release trade-offs",
    },
    {
      icon: "users",
      title: "Working Across Teams",
      desc: "I talk to engineers, PMs, designers, and business stakeholders regularly. I gather requirements, understand constraints, and keep people aligned.",
      evidence: "Collaborated with PMs at DXC to turn operational findings into user stories and backlog items",
    },
    {
      icon: "user",
      title: "Understanding Users",
      desc: "I've built UIs and watched how real people use them. I've mapped user journeys for both end users and internal engineers. I think about who's on the other side.",
      evidence: "18% engagement uplift from user-behaviour-driven feature decisions at Varcons",
    },
    {
      icon: "code",
      title: "Technical Understanding",
      desc: "CS degree. I've written production code in React, TypeScript, and Appwrite. Azure certified. I can have real conversations with engineers about what's feasible.",
      evidence: "AZ-900 certified · Built and shipped a full-stack app as the sole developer",
    },
    {
      icon: "fileText",
      title: "Writing Clear Specs",
      desc: "I've written user stories, requirement docs, and detailed workflow specs. At Wipro I authored feature change requests and owned product specs through launch.",
      evidence: "Owned end-to-end spec for the RCA AI Agent — user journeys, edge cases, acceptance criteria",
    },
  ],
};

export const experience = {
  label: "Experience",
  title: ["What I've done,", "and what it means."],
  desc: "I've been a support analyst on paper — but the work I've done looks a lot more like product management.",
  items: [
    {
      company: "Wipro Limited",
      role: "Product Support Analyst",
      period: "Jun 2025 – Present",
      badge: "Current Role",
      badgeStyle: "accent",
      metrics: [
        { value: "28%", label: "Bottleneck surfaced" },
        { value: "6 hrs", label: "Manual work saved / month" },
        { value: "4", label: "KPIs defined & tracked" },
        { value: "2", label: "Products designed" },
      ],
      bullets: [
        "Defined <strong>4 KPIs</strong> for a critical client workflow, surfaced a 28% process bottleneck, and authored the feature change request that cut manual effort by ~6 hrs/month — work that grew into the Performance Dashboard project.",
        "Spotted recurring first-contact failures in support data, <strong>pitched the RCA AI Agent concept</strong> to product leadership, and co-owned the spec through build and launch.",
        "Embedded with PMs during <strong>sprint planning, roadmap reviews, and stakeholder syncs</strong> — contributing to PRD drafts, writing user stories, and evaluating release trade-offs.",
      ],
      tags: ["Product Specs", "KPI Definition", "Sprint Planning", "PRD Writing", "User Stories", "Stakeholder Work"],
    },
    {
      company: "DXC Technology",
      role: "Associate Support Analyst",
      period: "Sep 2024 – Jun 2025",
      badge: null,
      metrics: [
        { value: "24%", label: "Processing time cut" },
        { value: "22%", label: "Fewer incidents" },
        { value: "4", label: "Product areas analysed" },
      ],
      bullets: [
        "Ran end-to-end workflow analysis across <strong>4 product areas</strong>, found the friction points, and proposed fixes that cut processing time by 24%.",
        "Built validation logic across datasets that caught <strong>3 classes of errors</strong> before production, reducing downstream incidents by ~22% and improving release confidence.",
        "Collaborated with PMs to <strong>translate operational findings into user stories and requirement docs</strong>, contributing directly to the next-quarter product backlog.",
      ],
      tags: ["Workflow Analysis", "User Stories", "Requirement Docs", "Data Quality", "PM Collaboration"],
    },
    {
      company: "Varcons Technologies",
      role: "Product & Engineering Intern",
      period: "Jan – Mar 2023",
      badge: "First Ship",
      badgeStyle: "accent2",
      metrics: [
        { value: "18%", label: "Engagement increase" },
        { value: "1", label: "Product shipped solo" },
      ],
      bullets: [
        "Owned <strong>end-to-end delivery</strong> of a consumer social app — from feature scoping and UX flows to shipping production code in React, TypeScript, and Appwrite, driving an 18% engagement uplift.",
        "Made <strong>product prioritisation calls</strong> (infinite scroll vs performance optimisation) by evaluating user behaviour patterns and balancing technical constraints with business goals.",
      ],
      tags: ["React", "TypeScript", "Feature Decisions", "UX Design", "Full Ownership"],
    },
  ],
};

export const projects = {
  label: "Projects",
  title: ["Things I've", "designed & built."],
  desc: "Both of these came directly from problems I saw in my analyst role at Wipro. I didn't wait for someone to assign them — I identified the gaps and made the case to build.",
  items: [
    {
      id: "rca-agent",
      tag: "0 to 1 Product Build",
      title: "RCA AI Support Agent",
      tagline: "An AI first-responder that troubleshoots, resolves, and escalates — so engineers don't have to.",
      problem: "I kept seeing the same pattern in our support data: engineers were spending too much time on repetitive first-contact issues and manually writing up tickets for problems that had known solutions.",
      solution: "I identified the recurring first-contact failures, defined the product vision for an AI-powered RCA assistant with guided troubleshooting and video-based resolution, and owned the spec end-to-end.",
      pmAngle: "I mapped the full user journey for both sides — the Microsoft customer hitting an issue and the engineer handling it. The escalation flow and auto-documentation were designed with both perspectives in mind.",
      features: [
        "Guided troubleshooting steps with video-based resolution support",
        "Smart escalation workflows routing unresolved cases to the right engineer tier",
        "Automatic ticket documentation — zero manual data entry for engineers",
        "Duplicate ticket detection and suppression",
      ],
      impact: "Engineers stopped spending time on routine first-contact cases. Duplicate tickets were eliminated. Common issues got resolved faster.",
      metrics: [
        { value: "1st", label: "Contact resolution" },
        { value: "0", label: "Manual ticket entry" },
        { value: "0", label: "Duplicate tickets" },
      ],
      tags: ["AI Product", "0 to 1", "User Journey Mapping", "Escalation Design", "Product Spec"],
      icon: "bot",
      accent: "accent2",
    },
    {
      id: "dashboard",
      tag: "Product Design & Strategy",
      title: "Support Engineer Performance Dashboard",
      tagline: "Giving managers a clear, data-backed picture of how 200+ engineers are actually performing.",
      problem: "I noticed managers had no single place to see engineer performance. Ticket resolution times, acceptance ratios, and monthly trends were scattered across different systems — so coaching decisions were based on gut feel.",
      solution: "I identified the gap in manager visibility, scoped the requirements, and designed a dashboard tracking ticket acceptance ratio, mean time to resolution, and review metrics for 200+ support engineers.",
      pmAngle: "I treated managers as the primary user. The information hierarchy was designed around their weekly coaching routine — what they need to see first, what actions they can take, and what they can export for reviews.",
      features: [
        "AI-driven insights to separate customer-side vs engineer-side issue impact",
        "Monthly rankings and coaching recommendations generated automatically",
        "Live tracking of acceptance ratio, MTTR, and volume trends",
        "Manager-facing review layer with exportable summaries",
      ],
      impact: "Managers could coach with data instead of guesswork. Monthly rankings and recommendations directly influenced team allocation and training decisions.",
      metrics: [
        { value: "200+", label: "Engineers tracked" },
        { value: "3", label: "Core KPIs" },
        { value: "AI", label: "Insights layer" },
      ],
      tags: ["Dashboard Design", "KPI Tracking", "AI Integration", "Stakeholder Tool", "Product Strategy"],
      icon: "dashboard",
      accent: "accent",
    },
  ],
};

export const pmThinking = {
  label: "How I Think",
  title: ["My approach", "to product work."],
  cards: [
    {
      header: "This Portfolio is a Product",
      sub: "Seriously — I treated it like one",
      content: [
        "<strong>User:</strong> A hiring manager or PM lead, probably short on time, scanning through dozens of profiles looking for someone who actually gets it.",
        "<strong>Problem:</strong> Most analyst portfolios just list tasks. They say what was done, but not what was built or why it mattered.",
        "<strong>Solution:</strong> A portfolio built around outcomes, decisions, and real product work — not just a list of responsibilities.",
      ],
      box: "Goal: get callbacks from PM-hiring companies\nSuccess signal: recruiter spends >90s on the site\nIteration: collect feedback, improve copy and structure",
    },
    {
      header: "How I Work Through a Problem",
      sub: "The process I come back to every time",
      content: [
        "<strong>Start with the problem:</strong> What's the business goal? Who are we building for? What does good look like in 6 months?",
        "<strong>Know the user:</strong> Who specifically? What's their pain point? What job are they trying to get done?",
        "<strong>Prioritise honestly:</strong> RICE, MoSCoW, effort-impact — use whatever fits, but be ready to explain why.",
        "<strong>Measure what matters:</strong> Every feature should have a way to tell if it worked. If you can't measure it, you're guessing.",
      ],
      box: "At Wipro: saw recurring support failures in the data, pitched the RCA Agent to leadership, owned the spec, shipped it. That's the loop.",
    },
  ],
};

export const whyMe = {
  label: "Why Me",
  title: ["Three things worth", "knowing about me."],
  items: [
    {
      num: "01",
      title: "I've done the work without the title",
      desc: "I didn't wait for someone to call me a PM. As a support analyst, I designed two product tools, wrote specs, sat in sprint planning, and pitched ideas to leadership. The work came before the title.",
    },
    {
      num: "02",
      title: "I know what support teams actually need",
      desc: "I've lived it. I've seen the tickets, tracked the metrics, and felt the pain points first-hand. That gives me a perspective on building internal tools that most PMs have to guess at.",
    },
    {
      num: "03",
      title: "I can talk to engineers — for real",
      desc: "CS degree. I've shipped React and TypeScript code in production. Azure certified. I don't need a translator between business and technical conversations.",
    },
  ],
};

export const contact = {
  openToWork: "Looking for PM & APM roles · Bengaluru & Remote",
  label: "Get in Touch",
  title: ["Interested in", "working together?"],
  desc: "I'm looking for teams that care about building things well — where clear thinking and real experience both matter. Happy to chat.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saigauravp/", icon: "linkedin" },
    { label: "Email Me", href: "mailto:Gowravp147@gmail.com", icon: "mail" },
    { label: "Preview Resume", href: "/Sai_Gowrav_PM_Resume.pdf", icon: "eye", action: "preview" },
    { label: "Download Resume", href: "/Sai_Gowrav_PM_Resume.pdf", icon: "download", action: "download" },
  ],
};

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jun 2025",
    expires: "Jan 2035",
    id: "C4BDA6B0ED78936C",
    icon: "cloud",
  },
];
