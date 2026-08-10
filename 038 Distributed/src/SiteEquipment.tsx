import { createPortal } from "react-dom"
import { useLayoutEffect, useRef, useState } from "react"
import SiteOverviewV2 from "@/imports/SiteOverview/index"
import svgPaths from "@/imports/SiteOverview/svg-hvtmtwveqq"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"

type Incident = {
  severity: "critical" | "high" | "medium"
  count: number
}

type EquipmentRow = {
  id: string
  value: React.ReactNode
  status?: "charging" | "preparing" | "available"
  incidents?: Incident[]
}

type EquipmentSection = {
  id: EquipmentKind
  label: string
  count: number
  valueLabel: string
  rows: EquipmentRow[]
}

const equipmentSections: EquipmentSection[] = [
  {
    id: "distributed",
    label: "Distributed systems",
    count: 1,
    valueLabel: "Power load",
    rows: [
      {
        id: "DS-100",
        value: <PowerLoad value="38%" />,
      },
    ],
  },
  {
    id: "paralleling",
    label: "Paralleling panel",
    count: 1,
    valueLabel: "Sources working",
    rows: [{ id: "PP-300", value: "2 / 2" }],
  },
  {
    id: "bess",
    label: "BESS",
    count: 2,
    valueLabel: "Current power",
    rows: [
      { id: "BS-400", value: <PowerOutput value="140 kW" /> },
      { id: "BS-399", value: <PowerOutput value="140 kW" /> },
    ],
  },
  {
    id: "gensets",
    label: "Gensets",
    count: 2,
    valueLabel: "Current power",
    rows: [
      { id: "GS-800", value: "—" },
      { id: "GS-799", value: <PowerOutput value="140 kW" /> },
      {
        id: "GS-798",
        value: <PowerOutput value="140 kW" />,
        incidents: [
          { severity: "high", count: 1 },
          { severity: "medium", count: 1 },
        ],
      },
    ],
  },
  {
    id: "chargers",
    label: "Chargers",
    count: 2,
    valueLabel: "Status",
    rows: [
      { id: "CH-700", value: "", status: "charging" },
      { id: "CH-699", value: "", status: "charging" },
      {
        id: "CH-698",
        value: "",
        status: "preparing",
        incidents: [
          { severity: "high", count: 1 },
          { severity: "medium", count: 1 },
        ],
      },
      {
        id: "CH-697",
        value: "",
        status: "available",
        incidents: [{ severity: "critical", count: 2 }],
      },
      { id: "CH-696", value: "", status: "available" },
    ],
  },
  {
    id: "units",
    label: "Integrated units",
    count: 5,
    valueLabel: "Current power",
    rows: [
      { id: "Booster A, UN-401", value: "—" },
      { id: "Booster B, UN-400", value: <PowerOutput value="140 kW" /> },
      {
        id: "UN-399",
        value: <PowerOutput value="140 kW" />,
        incidents: [
          { severity: "high", count: 1 },
          { severity: "medium", count: 1 },
        ],
      },
      {
        id: "UN-398",
        value: "—",
        incidents: [{ severity: "critical", count: 2 }],
      },
      { id: "UN-397", value: <PowerOutput value="140 kW" /> },
    ],
  },
]

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" />
      <path d="M8 7.1v3.5M8 5.2v.15" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <circle cx="4" cy="10" r="1.25" />
      <circle cx="10" cy="10" r="1.25" />
      <circle cx="16" cy="10" r="1.25" />
    </svg>
  )
}

function ConnectionBadge() {
  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] px-2 text-[13px] leading-5 text-[#00c86b]">
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
        <path d="M2.4 6.7a8 8 0 0 1 11.2 0M4.8 9.2a4.6 4.6 0 0 1 6.4 0M7.1 11.7a1.3 1.3 0 0 1 1.8 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25" />
      </svg>
      Online
    </span>
  )
}

function AvailableIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16.5 16.5">
      <path clipRule="evenodd" d={svgPaths.p1d51bb80} fill="#1DCC6E" fillRule="evenodd" />
    </svg>
  )
}

function PreparingIcon() {
  return (
    <span aria-hidden="true" className="relative size-4 rounded-full border-2 border-[#1dcc6e]">
      <span className="absolute inset-[3px] rounded-full border border-[#1dcc6e]" />
    </span>
  )
}

function ChargerStatus({ status }: { status: NonNullable<EquipmentRow["status"]> }) {
  const label = {
    charging: "Charging",
    preparing: "Preparing",
    available: "Available",
  }[status]

  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] px-2 text-[13px] leading-5 text-[#0a0a0a]">
      {status === "charging" ? <span aria-hidden="true" className="size-4" data-name="circle progress" /> : status === "preparing" ? <PreparingIcon /> : <AvailableIcon />}
      {label}
    </span>
  )
}

function CriticalIcon() {
  return (
    <span className="grid size-4 place-items-center rounded-[3px] bg-[#cf3027] text-[11px] font-semibold leading-none text-white">
      !
    </span>
  )
}

function IncidentIcon({ severity }: { severity: Incident["severity"] }) {
  if (severity === "critical") return <CriticalIcon />

  const color = severity === "high" ? "#ff5454" : "#f2ad22"
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <rect x="1" y="9" width="3" height="6" rx="1" fill={color} />
      <rect x="6.5" y="5" width="3" height="10" rx="1" fill={color} />
      <rect x="12" y="1" width="3" height="14" rx="1" fill={color} />
    </svg>
  )
}

function Incidents({ incidents }: { incidents?: Incident[] }) {
  if (!incidents?.length) return <span>None</span>

  return (
    <span className="flex items-center gap-3" aria-label="Open incidents">
      {incidents.map((incident) => (
        <span key={incident.severity} className="inline-flex items-center gap-1">
          <IncidentIcon severity={incident.severity} />
          <span>{incident.count}</span>
        </span>
      ))}
    </span>
  )
}

function PowerLoad({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span aria-hidden="true" className="h-1 w-10 overflow-hidden rounded-full bg-[#e6e6e6]">
        <span className="block h-full w-[38%] rounded-full bg-[#47d789]" />
      </span>
      {value}
    </span>
  )
}

function PowerOutput({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      {value}
      <svg aria-hidden="true" className="size-4 text-[#757575]" fill="none" viewBox="0 0 16 16">
        <path d="M8 13V3m0 0L4.5 6.5M8 3l3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    </span>
  )
}

function EquipmentTable({ section }: { section: EquipmentSection }) {
  return (
    <div className="overflow-x-auto rounded-[12px] border border-[#e6e6e6] bg-white">
      <table className="min-w-[760px] w-full table-fixed border-collapse text-left text-[14px] leading-5">
        <colgroup>
          <col className="w-[30%]" />
          <col className="w-[28%]" />
          <col className="w-[17%]" />
          <col className="w-[18%]" />
          <col className="w-10" />
        </colgroup>
        <thead className="text-[#757575]">
          <tr className="h-12 border-b border-[#e6e6e6]">
            <th className="px-3 font-normal">
              {section.id === "distributed" ? "Distributed system ID" : "ID"}
            </th>
            <th className="px-3 font-normal">
              <span className="inline-flex items-center gap-1 whitespace-nowrap text-[#757575]">
                {section.valueLabel}
                <InfoIcon />
              </span>
            </th>
            <th className="px-3 font-normal">
              <span className="inline-flex items-center gap-1 whitespace-nowrap text-[#757575]">
                Connection
                <InfoIcon />
              </span>
            </th>
            <th className="px-3 font-normal">
              <span className="inline-flex items-center gap-1 whitespace-nowrap text-[#757575]">
                Incidents now
                <InfoIcon />
              </span>
            </th>
            <th aria-label="Actions" className="px-2" />
          </tr>
        </thead>
        <tbody className="text-[#0a0a0a]">
          {section.rows.map((row) => (
            <tr key={row.id} className="h-12 border-b border-[#e6e6e6] last:border-b-0">
              <td className="px-3">{row.id}</td>
              <td className="px-3">{row.status ? <ChargerStatus status={row.status} /> : row.value}</td>
              <td className="px-3"><ConnectionBadge /></td>
              <td className="px-3"><Incidents incidents={row.incidents} /></td>
              <td className="px-2 text-center text-[#757575]">
                <button
                  aria-label={`More actions for ${row.id}`}
                  className="grid size-8 place-items-center rounded-[6px] transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
                  type="button"
                >
                  <MoreIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function EquipmentSectionView({ section }: { section: EquipmentSection }) {
  return (
    <section aria-labelledby={`equipment-${section.id}`} className="scroll-mt-6">
      <h2 id={`equipment-${section.id}`} className="mb-4 flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-6 tracking-[-0.176px] text-[#0a0a0a]">
        <span className="text-[#757575]"><EquipmentTypeIcon kind={section.id} /></span>
        {section.label}
        <span className="text-[#757575]">{section.count}</span>
      </h2>
      <EquipmentTable section={section} />
    </section>
  )
}

function EquipmentContent() {
  const [active, setActive] = useState<"all" | EquipmentKind>("all")
  const visibleSections = active === "all" ? equipmentSections : equipmentSections.filter((section) => section.id === active)

  return (
    <div className="flex w-full items-start gap-12 pb-24" data-name="site equipment content">
      <nav aria-label="Equipment filters" className="w-[157px] shrink-0 space-y-2.5">
        <button
          aria-pressed={active === "all"}
          className={`flex min-h-8 w-full items-center rounded-[6px] px-3 text-left font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.084px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${active === "all" ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#f5f5f5]"}`}
          onClick={() => setActive("all")}
          type="button"
        >
          All
        </button>
        {equipmentSections.map((section) => (
          <button
            key={section.id}
            aria-pressed={active === section.id}
            className={`flex min-h-8 w-full items-center rounded-[6px] px-3 text-left font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.084px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${active === section.id ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#f5f5f5]"}`}
            onClick={() => setActive(section.id)}
            type="button"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#757575]">
                <EquipmentTypeIcon kind={section.id} />
              </span>
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      <main id="site-equipment-content" className="min-w-0 flex-1">
        <header className="mb-7">
          <h1 className="font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-7 tracking-[-0.252px] text-[#0a0a0a]">
            Site equipment
          </h1>
          <p className="mt-0.5 text-[13px] leading-5 tracking-[-0.0325px] text-[#757575]">
            Manage unit availability over time.
          </p>
        </header>
        <div className="space-y-9">
          {visibleSections.map((section) => (
            <EquipmentSectionView key={section.id} section={section} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default function SiteEquipment({ equipmentTabEnabled = false }: { equipmentTabEnabled?: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const originalContent = rootRef.current?.querySelector<HTMLElement>(
      '[data-name="container -content"]',
    )
    if (!originalContent?.parentElement) return

    originalContent.style.display = "none"
    setPortalHost(originalContent.parentElement)

    return () => {
      originalContent.style.removeProperty("display")
    }
  }, [])

  return (
    <div ref={rootRef} className="contents">
      <SiteOverviewV2 equipmentTabEnabled={equipmentTabEnabled} activeSiteTab="equipment" />
      {portalHost && createPortal(<EquipmentContent />, portalHost)}
    </div>
  )
}
