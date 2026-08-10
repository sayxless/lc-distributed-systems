import { createPortal } from "react-dom"
import { useLayoutEffect, useRef, useState } from "react"
import SiteOverviewV2 from "@/imports/SiteOverview/index"
import svgPaths from "@/imports/SiteOverview/svg-hvtmtwveqq"

type Severity = "critical" | "medium" | "low"

type ChargerCard = {
  name: string
  position: string
  progress?: number
  incidents?: Array<{ severity: Severity count: number }>
  border?: "success" | "warning"
}

const chargers: ChargerCard[] = [
  { name: "Booster A, UN-401", position: "01", progress: 46 },
  { name: "Booster A, UN-401", position: "02" },
  {
    name: "Booster A, UN-401",
    position: "03",
    incidents: [
      { severity: "medium", count: 2 },
      { severity: "low", count: 1 },
    ],
  },
  {
    name: "Booster A, UN-401",
    position: "04",
    progress: 46,
    border: "success",
  },
  {
    name: "Booster B, UN-400",
    position: "01",
    border: "warning",
  },
  { name: "Booster B, UN-400", position: "02", progress: 46 },
  {
    name: "UN-399",
    position: "01",
    progress: 57,
    border: "success",
  },
  {
    name: "UN-399",
    position: "02",
    border: "warning",
    incidents: [
      { severity: "medium", count: 2 },
      { severity: "low", count: 1 },
    ],
  },
  { name: "UN-399", position: "03" },
  { name: "UN-398", position: "01" },
  { name: "DS-100", position: "01", progress: 57, border: "success" },
  { name: "DS-100", position: "02" },
  { name: "DS-100", position: "03" },
  { name: "DS-100", position: "04" },
]

function UnitTypeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 13.2 11.87"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p2e7abe00}
        fill="#757575"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.p3652ae00}
        fill="#757575"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.p13c7fba0}
        fill="#757575"
        fillRule="evenodd"
      />
      <path d={svgPaths.p370d1580} fill="#757575" />
    </svg>
  )
}

function DistributedSystemTypeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 13.2 12.2"
    >
      <path d={svgPaths.p1b5b6a80} stroke="#757575" strokeWidth="1.2" />
      <path d={svgPaths.p28aca450} stroke="#757575" strokeWidth="1.2" />
      <path d={svgPaths.p346e6e80} stroke="#757575" strokeWidth="1.2" />
      <path d={svgPaths.pe55a560} stroke="#757575" strokeWidth="1.2" />
    </svg>
  )
}

function AvailableIcon() {
  return (
    <svg
      aria-label="Available"
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 16.5 16.5"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p1d51bb80}
        fill="#1DCC6E"
        fillRule="evenodd"
      />
    </svg>
  )
}

function ChargingIcon({ percentage }: { percentage: number }) {
  return (
    <span
      aria-label={`Charging in progress, ${percentage}% charged`}
      className="size-5 shrink-0"
      data-name="circle progress"
    />
  )
}

function SeverityCount({
  severity,
  count,
}: {
  severity: Severity
  count: number
}) {
  const color = {
    critical: "text-[#cf3027]",
    medium: "text-[#f2ad22]",
    low: "text-[#a3a3a3]",
  }[severity]

  return (
    <span
      className={`inline-flex items-center gap-1 text-[14px] text-[#0a0a0a] ${color}`}
    >
      <svg
        aria-hidden="true"
        className="size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <rect x="1" y="9" width="3" height="6" rx="1" />
        <rect x="6.5" y="5" width="3" height="10" rx="1" />
        <rect x="12" y="1" width="3" height="14" rx="1" />
      </svg>
      <span className="text-[#0a0a0a]">{count}</span>
    </span>
  )
}

function ViewSwitcher() {
  const button =
    "h-6 rounded-[4px] px-2 font-['Inter:Medium',sans-serif] text-[12px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"

  return (
    <div
      aria-label="Live chargers view"
      className="flex h-7 items-center gap-0.5 rounded-[6px] bg-[#f5f5f5] p-0.5"
      role="group"
    >
      <button
        aria-pressed="false"
        className={`${button} text-[#757575]`}
        data-prototype-view="group"
        type="button"
      >
        Group
      </button>
      <button
        aria-pressed="false"
        className={`${button} text-[#757575]`}
        data-prototype-view="table"
        type="button"
      >
        Table
      </button>
      <button
        aria-pressed="true"
        className={`${button} bg-white text-[#0a0a0a] shadow-[0_1px_3px_rgba(0,0,0,0.1)]`}
        data-prototype-view="cards"
        type="button"
      >
        Cards
      </button>
    </div>
  )
}

function ChargerCardItem({ charger }: { charger: ChargerCard }) {
  const isCharging = charger.progress !== undefined
  const border =
    isCharging || charger.border === "success"
      ? "border-[#1dcc6e]"
      : charger.border === "warning"
        ? "border-[#f2ad22]"
        : "border-[#e6e6e6]"

  return (
    <article
      className={`flex flex-col rounded-[12px] border bg-white p-4 ${border}`}
    >
      <div className="flex items-center gap-1.5 text-[#757575]">
        {charger.name.startsWith("DS-") ? (
          <DistributedSystemTypeIcon />
        ) : (
          <UnitTypeIcon />
        )}
        <h3 className="min-w-0 flex-1 truncate font-['Inter:Regular',sans-serif] text-[13px] font-normal leading-5 tracking-[-0.0325px]">
          {charger.name}
        </h3>
        <span className="font-['Inter:Regular',sans-serif] text-[13px] font-normal leading-5 tracking-[-0.0325px]">
          {charger.position}
        </span>
      </div>
      <div className="mt-4 flex min-h-7 items-center gap-2 pt-0">
        {isCharging ? (
          <ChargingIcon percentage={charger.progress} />
        ) : (
          <AvailableIcon />
        )}
        {isCharging && (
          <span className="font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-6 text-[#0a0a0a] tabular-nums">
            {charger.progress}%
          </span>
        )}
        {charger.incidents && (
          <div
            className="ml-auto flex items-center gap-3"
            aria-label="Open incidents"
          >
            {charger.incidents.map((incident) => (
              <SeverityCount key={incident.severity} {...incident} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function CardsCollection() {
  return (
    <section className="w-full" aria-label="Live chargers cards">
      <div className="flex items-start justify-between px-0 pb-3 pt-2">
        <div className="mr-2 flex items-center gap-2 pr-2 font-['Inter:Medium',sans-serif] text-[14px] leading-5">
          <span className="px-2 py-1 text-[#525252]">
            All <span className="ml-1 text-[#757575]">20</span>
          </span>
          <span className="rounded-[6px] bg-[#f5f5f5] px-2 py-1 text-[#0a0a0a]">
            Working chargers <span className="ml-1">18</span>
          </span>
          <span className="px-2 py-1 text-[#525252]">
            Incidents <span className="ml-1 text-[#757575]">8</span>
          </span>
        </div>
        <ViewSwitcher />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {chargers.map((charger) => (
          <ChargerCardItem
            key={`${charger.name}-${charger.position}`}
            charger={charger}
          />
        ))}
      </div>
    </section>
  )
}

export default function SiteOverviewCards({
  equipmentOnOverview = false,
  equipmentTabEnabled = false,
}: {
  equipmentOnOverview?: boolean
  equipmentTabEnabled?: boolean
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const originalCollection = rootRef.current?.querySelector<HTMLElement>(
      '[data-name=".local-units-chargers"]',
    )
    if (!originalCollection?.parentElement) return

    originalCollection.style.display = "none"
    setPortalHost(originalCollection.parentElement)

    return () => {
      originalCollection.style.removeProperty("display")
    }
  }, [])

  return (
    <div ref={rootRef} className="contents">
      <SiteOverviewV2
        equipmentOnOverview={equipmentOnOverview}
        equipmentTabEnabled={equipmentTabEnabled}
      />
      {portalHost && createPortal(<CardsCollection />, portalHost)}
    </div>
  )
}
