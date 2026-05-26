/* ============================================================
   content.js
   --------------------------------------------------------------
   This file holds ALL the text and links on the portfolio site.
   Edit this — not the markup. Save, reload.

   Fields ending in `_html` allow inline HTML (mostly for links).
   Everything else is plain text. Keep quotes balanced.
   ============================================================ */

window.PORTFOLIO = {
  /* ---------- Page meta ---------- */
  title: "Stephen Collins — Software Engineer",
  brand: "stephen-collins",

  /* ---------- Top nav (in-page anchors) ---------- */
  nav: [
    { label: "about", href: "#about" },
    { label: "stack", href: "#stack" },
    { label: "projects", href: "#projects" },
    { label: "clients", href: "#clients" },
    { label: "writing", href: "#writing" },
    { label: "contact", href: "#contact" },
  ],

  /* ---------- Hero ---------- */
  hero: {
    kicker: "Software engineer · 30 years coding · 12 years professional",
    headline_html:
      'I build software that <span class="accent">lasts.</span> <span class="dim">Not just software that ships.</span>',
    lede_html:
      'I\'m Stephen Collins. Currently Technical Lead at <a href="https://getostrich.com" target="_blank" rel="noopener">Ostrich</a> on a part-time basis — full time at <a href="https://tryonsoft.com/">Tryon Creek Software</a> and always looking for the next ambitious collaboration where the work matters.',
    meta: [
      { label: "Status", value: "Open to new work", pulse: true },
      { label: "Based", value: "Remote · US" },
      { label: "Focus", value: "Platform · long-lived systems" },
    ],
    name: "Stephen Collins",
    email: "sgcollins@outlook.com",
  },

  /* ---------- About ---------- */
  about: {
    eyebrow: "01 / about",
    headline_html: 'Not a coder. <span class="accent">A builder.</span>',
    paragraphs_html: [
      "I've spent thirty years writing code and the last twelve doing it for a living — leading projects, mentoring developers, building platforms from the ground up. I don't ship and forget. I shape systems that grow, evolve, and last.",
      "What sets me apart isn't raw talent — it's <strong>dedication to craft</strong>. I think about the developer who'll touch this code five years from now. I question the human and ethical impact of every architectural decision. Quality matters as much as velocity.",
    ],
    pull_html:
      '"What\'s the right way to do this — for the system, the people, and the future?" Even if it\'s harder. <span style="color:var(--accent)">Especially</span> if it\'s harder.',
    closing_html:
      "I'm not a cog. Not a code monkey. I'm the kind of teammate who pushes back, asks the second question, and commits documentation with every PR. If you're building something lasting and you're not afraid of honest architecture discussions — we'll get along.",
  },

  /* ---------- Stack ---------- */
  stack: {
    eyebrow: "02 / stack",
    headline: "The toolbelt.",
    /* `core: true` highlights a chip in the accent color.
       `years` is optional. */
    chips: [
      { label: "C#", years: "25y", core: true },
      { label: ".NET 6+", years: "25y", core: true },
      { label: "SQL Server", years: "18y" },
      { label: "React", years: "9y" },
      { label: "MongoDB", years: "7y" },
      { label: "TypeScript", years: "7y" },
      { label: "Node.js", years: "6y" },
      { label: "GraphQL", years: "5y" },
      { label: "Relay", years: "4y" },
      { label: "Redux Saga" },
      { label: "jQuery" },
      { label: "XSLT" },
      { label: "Docker" },
      { label: "Linux" },
      { label: "Cloud-native APIs" },
      { label: "Microservices" },
      { label: "Architecture review" },
      { label: "Mentorship" },
      { label: "Technical writing" },
    ],
    note: "C# has been my native tongue since 2001. Fluent on both Windows and Linux. GraphQL across Node and .NET. Documentation as a first-class citizen.",
    exploring: ["human-centered design", "ethical AI", "narrative systems"],
  },

  /* ---------- Projects ---------- */
  projects: {
    eyebrow: "03 / projects",
    headline_html: 'Built &amp; <span class="accent">shipped.</span>',

    /* The big "magnum opus" card at the top */
    featured: {
      ribbon: "Featured · in progress",
      title: "Nudges",
      subtitle: "— a paid SMS relay platform",
      tagline:
        "A modern, event-driven microservices system end-to-end: businesses send SMS announcements to their subscribers, with subscription & payments via Stripe. .NET 10, GraphQL, Kafka, React, Postgres, Terraform on AWS.",
      stack: [
        ".NET 10",
        "HotChocolate GraphQL",
        "React + Relay",
        "Kafka",
        "PostgreSQL",
        "Redis",
        "Keycloak",
        "Stripe",
        "Twilio",
        "AWS · ECS · RDS",
        "Terraform",
      ],
      arch: ["React UI", "GraphQL Gateway", "APIs · Kafka · Stripe"],
      primaryLink: {
        label: "↗ Read the docs",
        href: "https://docs.nudges.dev",
      },
      secondaryLink: {
        label: "↗ View on GitHub",
        href: "https://github.com/getnudges/monov4",
      },
    },

    openSourceLabel: "// Open source & older work",

    items: [
      {
        meta: ".NET · library",
        title: "AnyQ",
        desc: "A backend-agnostic message queueing library for .NET. Plug in any transport — same API.",
        href: "https://github.com/DoublePrecisionSoftware/AnyQ",
        go: "github",
      },
      {
        meta: "jQuery · plugin",
        title: "JsPivot",
        desc: "Pivot tables for jQuery. A small utility that just keeps working, year after year.",
        href: "https://github.com/DoublePrecisionSoftware/jsPivot",
        go: "github",
      },
      {
        meta: "JSON · transform",
        title: "jtontl",
        desc: "An XSLT-alike for JSON. Declarative transforms; predictable output.",
        href: "http://doubleprecisionsoftware.github.io/jsontl/",
        go: "demo",
      },
      {
        meta: "React · starter",
        title: "Slingshot Sagas",
        desc: "A (very) old but extensive starter for React + Redux + Redux Saga. Holds up surprisingly well.",
        href: "https://github.com/nibblesnbits/slingshot-sagas",
        go: "github",
      },
      /* Add new projects here. Set `placeholder: true` for "coming soon" rows. */
      {
        placeholder: true,
        meta: "— · soon",
        title: "+ Next project",
        desc: "Reserved slot — drop something new in here.",
        go: "tbd",
      },
    ],
  },

  /* ---------- Clients ---------- */
  clients: {
    eyebrow: "04 / clients",
    headline_html: 'People I\'ve built <span class="accent">alongside.</span>',
    /* `logoClass` matches a CSS class (.logo.craimark / .gomigo / .ostrich / .ecp)
       To add a new client, either add a new logoClass + CSS, or use `logoText`. */
    items: [
      {
        logoClass: "craimark",
        role: "long-time partner",
        name: "Craimark",
        desc_html:
          'Media-rich marketing &amp; production. <a href="https://craimark.com" target="_blank" rel="noopener">craimark.com</a>',
      },
      {
        logoClass: "gomigo",
        role: "consumer · social",
        name: "Gomigo",
        desc_html:
          'Rethinking how people meet up. <a href="https://gomigo.app" target="_blank" rel="noopener">gomigo.app</a>',
      },
      {
        logoClass: "ostrich",
        role: "technical lead · current",
        name: "Ostrich",
        desc_html:
          'Financial wellness through community accountability. <a href="https://getostrich.com" target="_blank" rel="noopener">getostrich.com</a>',
      },
      {
        logoClass: "ecp",
        role: "enterprise",
        name: "ECP, Inc.",
        desc_html:
          'Automotive protection backed by decades of reliability. <a href="https://www.ecpinc.net" target="_blank" rel="noopener">ecpinc.net</a>',
      },
    ],
  },

  /* ---------- Writing & podcast ---------- */
  writing: {
    eyebrow: "05 / writing & talks",
    headline_html: 'When inspiration <span class="accent">strikes.</span>',
    body_html:
      'Essays on software, ethical AI, and systems thinking live at <a href="https://thrd.me/dev" target="_blank" rel="noopener">dev.to</a>. Fiction lives next door at <a href="https://thrd.me/else" target="_blank" rel="noopener">thrd.me/else</a>.',
    podcast: {
      label: "Podcast · Silicon Alley",
      title: "The Human Side of Software",
      sub: "With Stephen Collins, founder of Double Precision Software.",
      buttonLabel: "▶ Listen",
      href: "https://anchor.fm/silicon-alley/embed/episodes/The-Human-Side-of-Software--Stephen-Collins--Founder-of-Double-Precision-Software-enmbh3",
    },
  },

  /* ---------- Contact ---------- */
  contact: {
    eyebrow: "06 / contact",
    headline_html: 'Let\'s <span class="accent">talk.</span>',
    title: "Building something lasting?",
    body: "I'm open to full-time roles, contract work, and ambitious collaborations. Honest architecture discussions especially welcome.",
    actions: [
      {
        label: "✉ sgcollins@outlook.com",
        href: "mailto:sgcollins@outlook.com",
        primary: true,
      },
      { label: "↓ Download résumé", href: "static/resume.pdf" },
      { label: "↗ GitHub", href: "https://github.com/nibblesnbits" },
    ],
  },

  /* ---------- Footer ---------- */
  footer: {
    copyright: "© 2026 Stephen Collins · built by hand",
    links: [
      { label: "email", href: "mailto:sgcollins@outlook.com" },
      { label: "github", href: "https://github.com/nibblesnbits" },
      { label: "essays", href: "https://thrd.me/dev" },
    ],
  },
};
