import { createPortal } from "react-dom"
import { useLayoutEffect, useRef, useState } from "react"
import SiteOverviewV2 from "@/imports/SiteOverview/index"
import svgPaths from "@/imports/SiteOverview/svg-hvtmtwveqq"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"

type Incident = {
  severity: "critical" | "high" | "medium" | "low"
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

type SiteEquipmentVersion = "sections" | "table"
type InventoryState = "available" | "unavailable"
type ChargerReading = {
  connector: string
  status: "charging" | "available" | "offline"
  charge?: string
}

type InventoryRow = {
  id: string
  value?: string
  chargers?: ChargerReading[]
  incidents?: Incident[]
  state: InventoryState
  connection?: "online" | "offline"
}

type InventorySection = {
  id: EquipmentKind
  label: string
  count: number
  metricLabel: string
  rows: InventoryRow[]
}

const inventorySections: InventorySection[] = [
  {
    id: "units",
    label: "Integrated units",
    count: 6,
    metricLabel: "Chargers",
    rows: [
      {
        id: "UN-401",
        chargers: [
          { connector: "01", status: "charging", charge: "46%" },
          { connector: "02", status: "charging", charge: "54%" },
        ],
        state: "available",
      },
      {
        id: "UN-400",
        chargers: [
          { connector: "01", status: "charging", charge: "37%" },
          { connector: "02", status: "available" },
        ],
        state: "available",
      },
      {
        id: "UN-399",
        chargers: [
          { connector: "01", status: "available" },
          { connector: "02", status: "available" },
        ],
        incidents: [{ severity: "high", count: 1 }],
        state: "available",
      },
      {
        id: "UN-398",
        chargers: [
          { connector: "01", status: "offline" },
          { connector: "02", status: "offline" },
        ],
        incidents: [
          { severity: "critical", count: 1 },
          { severity: "medium", count: 2 },
        ],
        connection: "offline",
        state: "unavailable",
      },
      {
        id: "UN-397",
        chargers: [
          { connector: "01", status: "available" },
          { connector: "02", status: "available" },
        ],
        incidents: [{ severity: "critical", count: 2 }],
        state: "available",
      },
      {
        id: "UN-396",
        chargers: [
          { connector: "01", status: "available" },
          { connector: "02", status: "available" },
        ],
        state: "available",
      },
    ],
  },
  {
    id: "distributed",
    label: "Distributed systems",
    count: 2,
    metricLabel: "Power load",
    rows: [
      { id: "DS-100", value: "38%", state: "available" },
      {
        id: "DS-98",
        value: "28%",
        incidents: [{ severity: "medium", count: 1 }],
        state: "available",
      },
    ],
  },
  {
    id: "chargers",
    label: "Chargers",
    count: 5,
    metricLabel: "Status",
    rows: [
      { id: "CH-700", chargers: [{ connector: "01", status: "charging", charge: "46%" }], state: "available" },
      { id: "CH-699", chargers: [{ connector: "02", status: "available" }], state: "available" },
      {
        id: "CH-698",
        chargers: [{ connector: "03", status: "charging", charge: "37%" }],
        incidents: [{ severity: "high", count: 1 }],
        state: "available",
      },
      { id: "CH-697", chargers: [{ connector: "04", status: "available" }], state: "available" },
      { id: "CH-696", chargers: [{ connector: "05", status: "available" }], state: "available" },
    ],
  },
  {
    id: "gensets",
    label: "Gensets",
    count: 3,
    metricLabel: "Current power",
    rows: [
      { id: "GS-800", value: "—", state: "available" },
      { id: "GS-799", value: "140 kW", state: "available" },
      {
        id: "GS-798",
        value: "140 kW",
        incidents: [
          { severity: "high", count: 1 },
          { severity: "medium", count: 1 },
        ],
        state: "available",
      },
    ],
  },
  {
    id: "bess",
    label: "BESS",
    count: 2,
    metricLabel: "Current power",
    rows: [
      { id: "BS-400", value: "140 kW", state: "available" },
      {
        id: "BS-399",
        value: "140 kW",
        incidents: [{ severity: "medium", count: 2 }],
        state: "available",
      },
    ],
  },
  {
    id: "paralleling",
    label: "Paralleling panels",
    count: 1,
    metricLabel: "Sources working",
    rows: [{ id: "PP-300", value: "2 / 2", state: "available" }],
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

  const color = severity === "high" ? "#ff5454" : severity === "medium" ? "#f2ad22" : "#a3a3a3"
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

function ChargingIcon() {
  return (
    <span aria-hidden="true" className="size-4 rounded-full border-2 border-[#1dcc6e] border-r-transparent" />
  )
}

function OfflineIcon() {
  return (
    <svg aria-hidden="true" className="size-4 text-[#ff5454]" fill="none" viewBox="0 0 16 16">
      <path d="M2.4 6.7a8 8 0 0 1 11.2 0M4.8 9.2a4.6 4.6 0 0 1 6.4 0M7.1 11.7a1.3 1.3 0 0 1 1.8 0M2.5 2.5l11 11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

function ChargerReadingBadge({ reading }: { reading: ChargerReading }) {
  return (
    <span className="inline-flex h-7 overflow-hidden rounded-[6px] border border-[#e6e6e6] bg-white text-[14px] leading-5">
      <span className="flex items-center bg-[#f5f5f5] px-2 text-[#757575]">{reading.connector}</span>
      <span className="flex items-center gap-1.5 px-2 text-[#0a0a0a]">
        {reading.status === "charging" ? <ChargingIcon /> : reading.status === "available" ? <AvailableIcon /> : <OfflineIcon />}
        {reading.charge}
      </span>
    </span>
  )
}

function ChargerReadings({ readings }: { readings: ChargerReading[] }) {
  return (
    <span className="flex flex-wrap items-center gap-2">
      {readings.map((reading) => <ChargerReadingBadge key={reading.connector} reading={reading} />)}
    </span>
  )
}

function EquipmentStateBadge({ state }: { state: InventoryState }) {
  const available = state === "available"

  return (
    <span className={`inline-flex h-7 items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] px-2 text-[14px] leading-5 ${available ? "text-[#0a0a0a]" : "text-[#757575]"}`}>
      <span aria-hidden="true" className={`size-2 rounded-full ${available ? "bg-[#1dcc6e]" : "bg-[#a3a3a3]"}`} />
      {available ? "Available" : "Unavailable"}
    </span>
  )
}

function InventoryConnectionBadge({ connection = "online" }: { connection?: InventoryRow["connection"] }) {
  if (connection === "online") return <ConnectionBadge />

  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] px-2 text-[13px] leading-5 text-[#ff5454]">
      <OfflineIcon />
      Offline
    </span>
  )
}

function InventoryIncidents({ incidents }: { incidents?: Incident[] }) {
  if (!incidents?.length) return <span>No incidents</span>

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

function EquipmentVersionSwitcher({
  version,
  onVersionChange,
}: {
  version: SiteEquipmentVersion
  onVersionChange: (version: SiteEquipmentVersion) => void
}) {
  return (
    <div aria-label="Equipment version" className="flex h-8 items-center gap-0.5 rounded-[6px] bg-[#f5f5f5] p-0.5" role="group">
      <button
        aria-pressed={version === "sections"}
        className={`min-h-7 rounded-[5px] px-2.5 text-[13px] font-medium leading-5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${version === "sections" ? "bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(16,24,40,0.12)]" : "text-[#666] hover:text-[#30353d]"}`}
        onClick={() => onVersionChange("sections")}
        type="button"
      >
        Sections
      </button>
      <button
        aria-pressed={version === "table"}
        className={`min-h-7 rounded-[5px] px-2.5 text-[13px] font-medium leading-5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${version === "table" ? "bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(16,24,40,0.12)]" : "text-[#666] hover:text-[#30353d]"}`}
        onClick={() => onVersionChange("table")}
        type="button"
      >
        Table
      </button>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13 13 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M3 4h14M5.5 10h9M8 16h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  )
}

function ExportIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M11.5 3.5H5.75a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5V8.25L11.5 3.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
      <path d="M11.5 3.5v4.75h4.25M10 8.5v5m0 0L7.8 11.3M10 13.5l2.2-2.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  )
}

function ViewIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M4 5.5h12M4 14.5h12M7.5 2.75v5.5M12.5 11.75v5.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

function EquipmentInventoryToolbar() {
  return (
    <div aria-label="Table tools" className="flex shrink-0 items-center gap-1 text-[#0a0a0a]">
      <button aria-label="Search equipment" className="grid size-8 place-items-center rounded-[6px] transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]" type="button"><SearchIcon /></button>
      <button className="inline-flex min-h-8 items-center gap-2 rounded-[6px] px-2 text-[14px] font-medium leading-5 transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]" type="button"><FilterIcon />Filter</button>
      <button className="inline-flex min-h-8 items-center gap-2 rounded-[6px] px-2 text-[14px] font-medium leading-5 transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]" type="button"><ExportIcon />Export</button>
      <button className="inline-flex min-h-8 items-center gap-2 rounded-[6px] px-2 text-[14px] font-medium leading-5 transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]" type="button"><ViewIcon />View</button>
    </div>
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

type InventoryFilter = "all" | "available" | "incidents"

function InventoryMetric({ section, row }: { section: InventorySection; row: InventoryRow }) {
  if (row.chargers) return <ChargerReadings readings={row.chargers} />
  if (section.id === "distributed" && row.value) return <PowerLoad value={row.value} />
  if ((section.id === "bess" || section.id === "gensets") && row.value && row.value !== "—") {
    return <PowerOutput value={row.value} />
  }
  return row.value ?? "—"
}

function SiteEquipmentTableContent({
  version,
  onVersionChange,
}: {
  version: SiteEquipmentVersion
  onVersionChange: (version: SiteEquipmentVersion) => void
}) {
  const [active, setActive] = useState<EquipmentKind>("units")
  const [filter, setFilter] = useState<InventoryFilter>("all")
  const activeSection = inventorySections.find((section) => section.id === active) ?? inventorySections[0]
  const visibleRows = activeSection.rows.filter((row) => (
    filter === "all" ||
    (filter === "available" && row.state === "available") ||
    (filter === "incidents" && Boolean(row.incidents?.length))
  ))
  const primarySections = inventorySections.filter((section) => section.id === "units" || section.id === "distributed")
  const equipmentSectionsOnly = inventorySections.filter((section) => !primarySections.includes(section))
  const filterCounts = {
    all: activeSection.rows.length,
    available: activeSection.rows.filter((row) => row.state === "available").length,
    incidents: activeSection.rows.filter((row) => Boolean(row.incidents?.length)).length,
  }

  return (
    <div className="flex w-full items-start gap-12 pb-24" data-name="site equipment table content">
      <nav aria-label="Equipment sections" className="w-[185px] shrink-0">
        <div className="space-y-2.5">
          {primarySections.map((section) => (
            <button
              key={section.id}
              aria-pressed={active === section.id}
              className={`flex min-h-8 w-full items-center rounded-[6px] px-3 text-left font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.084px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${active === section.id ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#f5f5f5]"}`}
              onClick={() => setActive(section.id)}
              type="button"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#525252]"><EquipmentTypeIcon kind={section.id} /></span>
                {section.label}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-7 px-3 text-[14px] font-medium leading-5 text-[#757575]">Equipment</p>
        <div className="mt-3 space-y-2.5">
          {equipmentSectionsOnly.map((section) => (
            <button
              key={section.id}
              aria-pressed={active === section.id}
              className={`flex min-h-8 w-full items-center rounded-[6px] px-3 text-left font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.084px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${active === section.id ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#f5f5f5]"}`}
              onClick={() => setActive(section.id)}
              type="button"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#525252]"><EquipmentTypeIcon kind={section.id} /></span>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <main id="site-equipment-content" className="min-w-0 flex-1">
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 text-[#0a0a0a]"><EquipmentTypeIcon kind={activeSection.id} /></span>
            <h1 className="truncate font-['Inter:Medium',sans-serif] text-[20px] font-medium leading-7 tracking-[-0.34px] text-[#0a0a0a]">
              {activeSection.label}
            </h1>
          </div>
          <EquipmentVersionSwitcher version={version} onVersionChange={onVersionChange} />
        </header>

        <div className="mb-7 flex items-center justify-between gap-4">
          <div aria-label="Equipment filters" className="flex min-w-0 items-center rounded-[6px] bg-[#f5f5f5] p-0.5" role="group">
            {([
              ["all", "All"],
              ["available", "Available"],
              ["incidents", "Incidents"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                aria-pressed={filter === value}
                className={`inline-flex min-h-8 items-center gap-2 rounded-[5px] px-3 text-[14px] font-medium leading-5 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${filter === value ? "bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(16,24,40,0.12)]" : "text-[#757575] hover:text-[#30353d]"}`}
                onClick={() => setFilter(value)}
                type="button"
              >
                {label}
                <span className="rounded-[4px] bg-[#e6e6e6] px-1.5 py-0.5 text-[#525252]">{filterCounts[value]}</span>
              </button>
            ))}
          </div>
          <EquipmentInventoryToolbar />
        </div>

        <p className="mb-3 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#0a0a0a]">
          {filter === "all" ? activeSection.count : visibleRows.length} {activeSection.id === "units" ? "units" : activeSection.label.toLowerCase()}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[840px] w-full border-collapse text-left text-[14px] leading-5">
            <colgroup>
              <col className="w-12" />
              <col className="w-[20%]" />
              <col className="w-[33%]" />
              <col className="w-[17%]" />
              <col className="w-[16%]" />
              <col className="w-[15%]" />
              <col className="w-10" />
            </colgroup>
            <thead className="border-b border-[#e6e6e6] text-[#757575]">
              <tr className="h-12">
                <th className="px-3">
                  <input aria-label="Select all equipment" className="size-4 rounded-[4px] border-[#d6d6d6] accent-[#0a0a0a]" type="checkbox" />
                </th>
                <th className="px-3 font-normal">{activeSection.id === "units" ? "Unit" : activeSection.id === "distributed" ? "Distributed system" : "ID"}</th>
                <th className="px-3 font-normal">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    {activeSection.metricLabel}
                    <InfoIcon />
                  </span>
                </th>
                <th className="px-3 font-normal">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">Incidents now <InfoIcon /></span>
                </th>
                <th className="px-3 font-normal">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">Connection <InfoIcon /></span>
                </th>
                <th className="px-3 font-normal">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">State <InfoIcon /></span>
                </th>
                <th aria-label="Actions" className="px-2" />
              </tr>
            </thead>
            <tbody className="text-[#0a0a0a]">
              {visibleRows.map((row) => (
                <tr key={row.id} className="h-[52px] border-b border-[#e6e6e6] last:border-b-0">
                  <td className="px-3"><input aria-label={`Select ${row.id}`} className="size-4 rounded-[4px] border-[#d6d6d6] accent-[#0a0a0a]" type="checkbox" /></td>
                  <td className="px-3 font-medium">{row.id}</td>
                  <td className="px-3"><InventoryMetric row={row} section={activeSection} /></td>
                  <td className="px-3"><InventoryIncidents incidents={row.incidents} /></td>
                  <td className="px-3"><InventoryConnectionBadge connection={row.connection} /></td>
                  <td className="px-3"><EquipmentStateBadge state={row.state} /></td>
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
      </main>
    </div>
  )
}

type SectionedStatus = "operational" | "running" | "charging" | "discharging" | "available"

type SectionedEquipmentItem = {
  id: string
  kind: Exclude<EquipmentKind, "distributed" | "units">
  status: SectionedStatus
  metric?: string
  charge?: string
  incidents?: Incident[]
}

type SectionedEquipmentGroup = {
  kind: SectionedEquipmentItem["kind"]
  label: string
  items: SectionedEquipmentItem[]
}

const sectionedGroupOrder: Record<SectionedEquipmentGroup["kind"], number> = {
  chargers: 0,
  gensets: 1,
  bess: 2,
  paralleling: 3,
}

type SectionedEquipmentEntity = {
  id: string
  kind: Extract<EquipmentKind, "distributed" | "units">
  load?: string
  incidents?: Incident[]
  groups: SectionedEquipmentGroup[]
}

const sectionedEntities: SectionedEquipmentEntity[] = [
  {
    id: "DS-100",
    kind: "distributed",
    load: "62%",
    incidents: [
      { severity: "high", count: 1 },
      { severity: "medium", count: 4 },
      { severity: "low", count: 1 },
    ],
    groups: [
      {
        kind: "paralleling",
        label: "Paralleling panels",
        items: [{ id: "PP-300", kind: "paralleling", status: "operational", metric: "Current power: 280 kWh" }],
      },
      {
        kind: "bess",
        label: "BESS",
        items: [
          { id: "BS-399", kind: "bess", status: "discharging", metric: "Current power: 140 kW ↑" },
          {
            id: "BS-398",
            kind: "bess",
            status: "charging",
            metric: "Current power: 80 kW ↓",
            incidents: [
              { severity: "high", count: 1 },
              { severity: "medium", count: 2 },
            ],
          },
        ],
      },
      {
        kind: "gensets",
        label: "Gensets",
        items: [
          { id: "GS-800", kind: "gensets", status: "running", metric: "Current power: 140 kW" },
          {
            id: "GS-798",
            kind: "gensets",
            status: "running",
            metric: "Current power: 140 kW",
            incidents: [
              { severity: "medium", count: 2 },
              { severity: "low", count: 1 },
            ],
          },
        ],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [
          { id: "Charger 01", kind: "chargers", status: "charging", charge: "46%", metric: "Current power: 120 kW" },
          { id: "Charger 02", kind: "chargers", status: "available", metric: "Current power: —" },
        ],
      },
    ],
  },
  {
    id: "DS-200",
    kind: "distributed",
    load: "28%",
    incidents: [
      { severity: "high", count: 1 },
      { severity: "medium", count: 1 },
    ],
    groups: [
      {
        kind: "paralleling",
        label: "Paralleling panels",
        items: [{ id: "PP-301", kind: "paralleling", status: "operational", metric: "Current power: 220 kWh" }],
      },
      {
        kind: "bess",
        label: "BESS",
        items: [{ id: "BS-401", kind: "bess", status: "charging", metric: "Current power: 96 kW ↓" }],
      },
      {
        kind: "gensets",
        label: "Gensets",
        items: [{ id: "GS-801", kind: "gensets", status: "running", metric: "Current power: 120 kW" }],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [
          { id: "Charger 01", kind: "chargers", status: "charging", charge: "52%", metric: "Current power: 110 kW" },
          { id: "Charger 02", kind: "chargers", status: "available", metric: "Current power: —" },
        ],
      },
    ],
  },
  {
    id: "Booster A, UN-401",
    kind: "units",
    groups: [
      {
        kind: "gensets",
        label: "Gensets",
        items: [{ id: "GS-810", kind: "gensets", status: "running", metric: "Current power: 120 kW" }],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [
          { id: "Charger 01", kind: "chargers", status: "charging", charge: "46%", metric: "Current power: 120 kW" },
          { id: "Charger 02", kind: "chargers", status: "available", metric: "Current power: —" },
        ],
      },
    ],
  },
  {
    id: "Booster B, UN-400",
    kind: "units",
    groups: [
      {
        kind: "gensets",
        label: "Gensets",
        items: [
          { id: "GS-800", kind: "gensets", status: "running", metric: "Current power: 140 kW" },
          {
            id: "GS-798",
            kind: "gensets",
            status: "running",
            metric: "Current power: 140 kW",
            incidents: [
              { severity: "medium", count: 2 },
              { severity: "low", count: 1 },
            ],
          },
        ],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [
          { id: "Charger 01", kind: "chargers", status: "charging", charge: "46%", metric: "Current power: 120 kW" },
          { id: "Charger 02", kind: "chargers", status: "available", metric: "Current power: —" },
        ],
      },
    ],
  },
]

function InlineOnlineStatus() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[14px] leading-5 text-[#00c86b]">
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
        <path d="M2.4 6.7a8 8 0 0 1 11.2 0M4.8 9.2a4.6 4.6 0 0 1 6.4 0M7.1 11.7a1.3 1.3 0 0 1 1.8 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25" />
      </svg>
      Online
    </span>
  )
}

function SectionedStatusBadge({
  status,
  charge,
  nested = false,
}: {
  status: SectionedStatus
  charge?: string
  nested?: boolean
}) {
  const label = status === "operational" ? "Operational" : status === "running" ? "Running" : status === "discharging" ? "Discharging" : status === "charging" ? `Charging${charge ? ` · ${charge}` : ""}` : "Available"

  return (
    <span className={`inline-flex h-7 w-fit shrink-0 justify-self-start items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] bg-white px-2 text-[14px] leading-5 text-[#0a0a0a] ${nested ? "ml-4" : ""}`}>
      {status === "charging" ? <ChargingIcon /> : status === "available" ? <AvailableIcon /> : <span aria-hidden="true" className="size-2 rounded-full bg-[#1dcc6e]" />}
      {label}
    </span>
  )
}

function CollapseIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg aria-hidden="true" className="size-5 text-[#757575]" fill="none" viewBox="0 0 20 20">
      <path d={expanded ? "m6 12 4-4 4 4" : "m6 8 4 4 4-4"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function LoadMetric({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-[14px] leading-5">
      <span className="text-[#757575]">Power load: <span className="text-[#0a0a0a]">{value}</span></span>
      <span aria-hidden="true" className="h-1 w-12 overflow-hidden rounded-full bg-[#e6e6e6]">
        <span className="block h-full w-[62%] rounded-full bg-[#1dcc6e]" />
      </span>
    </span>
  )
}

function SectionedEquipmentItemRow({ item }: { item: SectionedEquipmentItem }) {
  return (
    <div className="grid min-h-[62px] grid-cols-[minmax(190px,1.05fr)_minmax(160px,0.8fr)_minmax(220px,1.15fr)_minmax(148px,0.75fr)] items-center gap-3 px-5 py-3 text-[14px] leading-5 text-[#0a0a0a]">
      <div className="min-w-0">
        <p className="truncate font-['Inter:Medium',sans-serif] font-medium">{item.id}</p>
        <InlineOnlineStatus />
      </div>
      <SectionedStatusBadge charge={item.charge} nested status={item.status} />
      <span>{item.metric}</span>
      <InventoryIncidents incidents={item.incidents} />
    </div>
  )
}

function SectionedEquipmentGroup({ group }: { group: SectionedEquipmentGroup }) {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white">
      <h3 className="flex min-h-11 items-center gap-2 border-b border-[#e6e6e6] bg-[#fafafa] px-4 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#525252]">
        <span className="text-[#757575]"><EquipmentTypeIcon kind={group.kind} /></span>
        {group.label}
        <span>{group.items.length}</span>
      </h3>
      <div className="divide-y divide-[#e6e6e6]">
        {group.items.map((item) => <SectionedEquipmentItemRow key={`${group.kind}-${item.id}`} item={item} />)}
      </div>
    </section>
  )
}

function SectionedEntityRow({
  entity,
  expanded,
  onToggle,
}: {
  entity: SectionedEquipmentEntity
  expanded: boolean
  onToggle: () => void
}) {
  const contentId = `site-equipment-sections-${entity.id.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`

  return (
    <article className="bg-white">
      <button
        aria-controls={expanded ? contentId : undefined}
        aria-expanded={expanded}
        className="grid min-h-[62px] w-full grid-cols-[minmax(190px,1.05fr)_minmax(160px,0.8fr)_minmax(220px,1.15fr)_minmax(148px,0.75fr)_32px] items-center gap-3 px-4 py-3 text-left text-[14px] leading-5 text-[#0a0a0a] transition-colors duration-150 hover:bg-[#fafafa] focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
        onClick={onToggle}
        type="button"
      >
        <span className="min-w-0">
          <span className="flex min-w-0 items-center gap-2 font-['Inter:Medium',sans-serif] font-medium">
            <span className="shrink-0 text-[#757575]"><EquipmentTypeIcon kind={entity.kind} /></span>
            <span className="truncate">{entity.id}</span>
          </span>
          <InlineOnlineStatus />
        </span>
        <SectionedStatusBadge status="operational" />
        <span>{entity.load ? <LoadMetric value={entity.load} /> : ""}</span>
        <InventoryIncidents incidents={entity.incidents} />
        <span className="grid size-8 place-items-center"><CollapseIcon expanded={expanded} /></span>
      </button>
      {expanded && entity.groups.length > 0 && (
        <div id={contentId} className="border-t border-[#e6e6e6] bg-white p-4">
          <div className="space-y-3">
            {[...entity.groups]
              .sort((left, right) => sectionedGroupOrder[left.kind] - sectionedGroupOrder[right.kind])
              .map((group) => <SectionedEquipmentGroup key={group.kind} group={group} />)}
          </div>
        </div>
      )}
    </article>
  )
}

function SectionedItemList({ items }: { items: SectionedEquipmentItem[] }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white divide-y divide-[#e6e6e6]">
      {items.map((item) => <SectionedEquipmentItemRow key={`${item.kind}-${item.id}`} item={item} />)}
    </div>
  )
}

function EquipmentSectionsNavigation({
  active,
  onChange,
}: {
  active: "all" | EquipmentKind
  onChange: (item: "all" | EquipmentKind) => void
}) {
  const primarySections = inventorySections.filter((section) => section.id === "units" || section.id === "distributed")
  const equipmentSectionsOnly = inventorySections.filter((section) => !primarySections.includes(section))

  const itemClassName = (selected: boolean) => `flex min-h-8 w-full items-center rounded-[6px] px-3 text-left font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 tracking-[-0.084px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${selected ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#f5f5f5]"}`

  return (
    <nav aria-label="Equipment sections" className="w-[185px] shrink-0">
      <button aria-pressed={active === "all"} className={itemClassName(active === "all")} onClick={() => onChange("all")} type="button">All equipment</button>
      <p className="mt-7 px-3 text-[14px] font-medium leading-5 text-[#757575]">Systems</p>
      <div className="mt-3 space-y-2.5">
        {primarySections.map((section) => (
          <button key={section.id} aria-pressed={active === section.id} className={itemClassName(active === section.id)} onClick={() => onChange(section.id)} type="button">
            <span className="flex items-center gap-2"><span className="text-[#525252]"><EquipmentTypeIcon kind={section.id} /></span>{section.label}</span>
          </button>
        ))}
      </div>
      <p className="mt-7 px-3 text-[14px] font-medium leading-5 text-[#757575]">Equipment</p>
      <div className="mt-3 space-y-2.5">
        {equipmentSectionsOnly.map((section) => (
          <button key={section.id} aria-pressed={active === section.id} className={itemClassName(active === section.id)} onClick={() => onChange(section.id)} type="button">
            <span className="flex items-center gap-2"><span className="text-[#525252]"><EquipmentTypeIcon kind={section.id} /></span>{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

function EquipmentContent() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set())

  function toggleEntity(id: string) {
    setExpandedIds((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="w-full pb-24" data-name="site equipment content">
      <main id="site-equipment-content" className="mx-auto w-full max-w-[1080px]">
        <header className="mb-7">
          <div>
            <h1 className="font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-7 tracking-[-0.252px] text-[#0a0a0a]">
              Site equipment
            </h1>
            <p className="mt-0.5 text-[13px] leading-5 tracking-[-0.0325px] text-[#757575]">
              Manage unit availability over time.
            </p>
          </div>
        </header>
        <div className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white divide-y divide-[#e6e6e6]">
          {sectionedEntities.map((entity) => (
            <SectionedEntityRow
              key={entity.id}
              entity={entity}
              expanded={expandedIds.has(entity.id)}
              onToggle={() => toggleEntity(entity.id)}
            />
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
