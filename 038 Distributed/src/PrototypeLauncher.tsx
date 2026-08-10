type Screen = "units" | "distributed" | "gensets" | "bess" | "paralleling" | "site" | "chargers" | "siteOverview" | "siteOverview2" | "siteOverviewCards"

type PrototypeLauncherProps = {
  onOpen: (screen: Screen) => void
}

type ScreenCard = {
  screen: Screen
  title: string
  description: string
  group: "Equipment" | "Operations"
  accent: string
}

const screens: ScreenCard[] = [
  {
    screen: "units",
    title: "Integrated units",
    description: "Monitor integrated power units and their status.",
    group: "Equipment",
    accent: "bg-violet-500",
  },
  {
    screen: "distributed",
    title: "Distributed systems",
    description: "Review distributed system performance and availability.",
    group: "Equipment",
    accent: "bg-sky-500",
  },
  {
    screen: "chargers",
    title: "Chargers",
    description: "Inspect charging equipment and active charging sessions.",
    group: "Equipment",
    accent: "bg-amber-500",
  },
  {
    screen: "gensets",
    title: "Gensets",
    description: "View generator sets, output, and operating state.",
    group: "Equipment",
    accent: "bg-emerald-500",
  },
  {
    screen: "bess",
    title: "BESS",
    description: "Explore battery energy storage system status.",
    group: "Equipment",
    accent: "bg-teal-500",
  },
  {
    screen: "paralleling",
    title: "Paralleling panels",
    description: "Check controls and synchronization panels.",
    group: "Equipment",
    accent: "bg-indigo-500",
  },
  {
    screen: "site",
    title: "Sites",
    description:
      "Browse the operational site list and open a site detail page.",
    group: "Operations",
    accent: "bg-rose-500",
  },
  {
    screen: "siteOverview",
    title: "Site overview",
    description: "Open the first version of the detailed site overview.",
    group: "Operations",
    accent: "bg-cyan-500",
  },
  {
    screen: "siteOverview2",
    title: "Site overview — v2",
    description: "Compare the alternate detailed site overview.",
    group: "Operations",
    accent: "bg-blue-500",
  },
  {
    screen: "siteOverviewCards",
    title: "Site overview — Cards",
    description: "Browse live chargers in a visual card layout.",
    group: "Operations",
    accent: "bg-emerald-500",
  },
]

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M8 7h9v9"
      />
    </svg>
  )
}

export default function PrototypeLauncher({ onOpen }: PrototypeLauncherProps) {
  const groups: ScreenCard["group"][] = ["Equipment", "Operations"]

  return (
    <main
      id="prototype-content"
      className="min-h-screen overflow-y-auto bg-[#f7f8fa] px-4 py-6 text-[#191c20] antialiased sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-[#5b616e]">
            L-CHARGE · PRODUCT PROTOTYPE
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[#13161a] sm:text-5xl">
            Choose a screen to explore
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[#5b616e] sm:text-lg">
            This interactive prototype contains equipment monitoring and site
            operations flows. Select a screen below; use “All screens” at any
            time to return here.
          </p>
        </header>

        <div className="mt-10 space-y-10 sm:mt-14">
          {groups.map((group) => (
            <section
              key={group}
              aria-labelledby={`${group.toLowerCase()}-heading`}
            >
              <h2
                id={`${group.toLowerCase()}-heading`}
                className="text-sm font-semibold text-[#353a43]"
              >
                {group}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {screens
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <button
                      key={item.screen}
                      type="button"
                      onClick={() => onOpen(item.screen)}
                      className="group relative min-h-44 rounded-2xl bg-white p-5 text-start shadow-[0_1px_2px_rgba(16,24,40,0.05),0_1px_3px_rgba(16,24,40,0.08)] outline-offset-4 transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,24,40,0.12)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-[#2357d9]"
                    >
                      <span
                        aria-hidden="true"
                        className={`mb-7 block size-2.5 rounded-full ${item.accent}`}
                      />
                      <span className="block pr-8 text-lg font-semibold tracking-[-0.02em] text-[#191c20]">
                        {item.title}
                      </span>
                      <span className="mt-2 block max-w-[34ch] text-sm leading-6 text-[#636975]">
                        {item.description}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute right-5 top-5 text-[#747b88] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <ArrowUpRight />
                      </span>
                    </button>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
