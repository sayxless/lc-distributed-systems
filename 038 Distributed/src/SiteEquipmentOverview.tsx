import { useState } from "react"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"
import svgPaths from "@/imports/SiteOverviewV1/svg-g8tgddqzze"

type Incident = "critical" | "medium"

type EquipmentRow = {
  id: string
  kind: EquipmentKind
  value: "load" | "sources" | "power" | "zero" | "available" | "empty"
  power?: string
  incidents?: Incident[]
  emptyState?: "No incidents" | "No data"
}

const rows: EquipmentRow[] = [
  { id: "DS-100", kind: "distributed", value: "load" },
  { id: "PP-300", kind: "paralleling", value: "sources", incidents: ["critical"] },
  { id: "BS-399", kind: "bess", value: "power", power: "140" },
  { id: "BS-400", kind: "bess", value: "power", power: "140" },
  { id: "GS-800", kind: "gensets", value: "zero" },
  { id: "GS-799", kind: "gensets", value: "power", power: "140" },
  { id: "GS-798", kind: "gensets", value: "power", power: "140", incidents: ["critical", "medium"] },
  { id: "CH-701", kind: "chargers", value: "available" },
  { id: "CH-700", kind: "chargers", value: "available", emptyState: "No data" },
  { id: "CH-699", kind: "chargers", value: "available" },
  { id: "CH-698", kind: "chargers", value: "available" },
  { id: "Booster A, UN-401", kind: "units", value: "power", power: "200" },
  { id: "Booster B, UN-400", kind: "units", value: "empty" },
]

function RadioIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 16 16">
      <path d="M2.4 6.7a8 8 0 0 1 11.2 0M4.8 9.2a4.6 4.6 0 0 1 6.4 0M7.1 11.7a1.3 1.3 0 0 1 1.8 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25" />
    </svg>
  )
}

function OnlineStatus({ className = "" }: { className?: string }) {
  return (
    <span className={`mt-0.5 inline-flex items-center gap-1 font-['Inter:Regular',sans-serif] text-[13px] font-normal leading-5 tracking-[-0.0325px] text-[#1dcc6e] ${className}`}>
      <span aria-hidden="true" className="relative size-4">
        <span className="absolute inset-[17.08%_8.75%_16.67%_8.75%]">
          <svg className="block size-full" fill="none" viewBox="0 0 13.2001 10.5999">
            <path clipRule="evenodd" d={svgPaths.p2f173600} fill="currentColor" fillRule="evenodd" />
          </svg>
        </span>
      </span>
      Online
    </span>
  )
}

function AvailableBadge() {
  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-[6px] border border-[#e6e6e6] px-2 text-[13px] leading-5 text-[#0a0a0a]">
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16.5 16.5">
        <path clipRule="evenodd" d={svgPaths.p1d51bb80} fill="#1DCC6E" fillRule="evenodd" />
      </svg>
      Available
    </span>
  )
}

function IncidentBadge({ type }: { type: Incident }) {
  if (type === "critical") {
    return (
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 15 15">
        <path clipRule="evenodd" d={svgPaths.p2e83fac0} fill="#C53027" fillRule="evenodd" />
      </svg>
    )
  }

  return (
    <span aria-hidden="true" className="relative size-5">
      <span className="absolute inset-[12.5%_12.46%_12.5%_68.08%]">
        <svg className="block size-full" fill="none" viewBox="0 0 3.89167 15">
          <path d={svgPaths.p3b4d7f00} fill="#F7A916" opacity="0.3" />
        </svg>
      </span>
      <span className="absolute inset-[35.42%_40.25%_12.5%_12.5%]">
        <svg className="block size-full" fill="none" viewBox="0 0 9.45002 10.4167">
          <path d={svgPaths.p14d51100} fill="#F7A916" />
          <path d={svgPaths.pb94400} fill="#F7A916" />
        </svg>
      </span>
    </span>
  )
}

function Incidents({
  incidents,
  emptyState = "No incidents",
  emptyClassName = "text-[#0a0a0a]",
}: Pick<EquipmentRow, "incidents" | "emptyState"> & { emptyClassName?: string }) {
  if (!incidents?.length) return <span className={emptyClassName}>{emptyState}</span>

  return (
    <span className="flex items-center gap-3">
      {incidents.map((type) => (
        <span key={type} className="inline-flex items-center gap-1 font-['Inter:Regular',sans-serif] text-[14px] font-normal leading-5 tracking-[-0.084px]">
          <IncidentBadge type={type} />
          <span>{type === "critical" ? 2 : 1}</span>
        </span>
      ))}
    </span>
  )
}

function RowValue({ value, power }: Pick<EquipmentRow, "value" | "power">) {
  if (value === "load") {
    return (
      <span className="inline-flex items-center gap-3">
        <span className="h-1 w-10 overflow-hidden rounded-full bg-[#e6e6e6]"><span className="block h-full w-[38%] rounded-full bg-[#47d789]" /></span>
        38%
      </span>
    )
  }

  if (value === "sources") return <span>2 / 2 sources working</span>
  if (value === "power") return <span className="inline-flex items-center gap-2">Power {power} kW <span className="text-[#757575]">↑</span></span>
  if (value === "zero") return <span>Power 0 kW</span>
  if (value === "available") return <AvailableBadge />
  return <span>—</span>
}

function ChevronDown() {
  return (
    <span aria-hidden="true" className="relative size-5 text-[#757575]">
      <span className="absolute inset-[37.92%_29.58%_39.64%_29.58%]">
        <svg className="block size-full" fill="none" viewBox="0 0 8.16667 4.48816">
          <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="currentColor" fillRule="evenodd" />
        </svg>
      </span>
    </span>
  )
}

function CardValue({ row }: { row: EquipmentRow }) {
  if (row.value === "load") {
    return (
      <>
        <p className="text-[14px] leading-5 text-[#757575]">Power load</p>
        <div className="flex items-center gap-3 text-[16px] font-medium leading-6 tabular-nums text-[#0a0a0a]">
          <span className="h-1 w-12 overflow-hidden rounded-full bg-[#e6e6e6]"><span className="block h-full w-[38%] rounded-full bg-[#47d789]" /></span>
          38%
        </div>
      </>
    )
  }

  if (row.value === "sources") {
    return (
      <>
        <p className="text-[14px] leading-5 text-[#757575]">Sources working</p>
        <p className="text-[16px] font-medium leading-6 text-[#0a0a0a]">2 / 2</p>
      </>
    )
  }

  if (row.value === "power") {
    return (
      <>
        <p className="text-[14px] leading-5 text-[#757575]">Current power</p>
        <p className="text-[16px] font-medium leading-6 text-[#0a0a0a]">{row.power} kW <span className="text-[#757575]">↑</span></p>
      </>
    )
  }

  if (row.value === "zero" || row.value === "empty") {
    return (
      <>
        <p className="text-[14px] leading-5 text-[#757575]">Current power</p>
        <p className="text-[16px] font-medium leading-6 text-[#0a0a0a]">{row.value === "zero" ? "0 kW" : "—"}</p>
      </>
    )
  }

  return (
    <>
      <p className="text-[14px] leading-5 text-[#757575]">Status</p>
      <AvailableBadge />
    </>
  )
}

function EquipmentCard({ row }: { row: EquipmentRow }) {
  return (
    <article className="flex min-h-36 flex-col rounded-[12px] border border-[#e6e6e6] bg-white p-3">
      <div className="flex items-center justify-between gap-3 text-[#757575]">
        <div className="flex min-w-0 items-center gap-2">
          <EquipmentTypeIcon kind={row.kind} />
          <h3 className="truncate font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#0a0a0a]">{row.id}</h3>
        </div>
        <OnlineStatus className="mt-0 shrink-0" />
      </div>

      <div className="mt-4 space-y-1">
        <CardValue row={row} />
      </div>

      <div className="mt-auto pt-3 text-[14px] leading-5 text-[#0a0a0a]">
        <Incidents incidents={row.incidents} emptyState={row.emptyState} emptyClassName="text-[#757575]" />
      </div>
    </article>
  )
}

function ViewSwitcher({ view, onChange }: { view: "table" | "cards"; onChange: (view: "table" | "cards") => void }) {
  const button = "h-6 rounded-[4px] px-2 font-['Inter:Medium',sans-serif] text-[12px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"

  return (
    <div aria-label="Equipment view" className="flex h-7 items-center gap-0.5 rounded-[6px] bg-[#f5f5f5] p-0.5" role="group">
      {(["table", "cards"] as const).map((option) => {
        const selected = view === option
        return (
          <button
            key={option}
            aria-pressed={selected}
            className={`${button} ${selected ? "bg-white text-[#0a0a0a] shadow-[0_1px_3px_rgba(0,0,0,0.1)]" : "text-[#757575]"}`}
            onClick={() => onChange(option)}
            type="button"
          >
            {option === "table" ? "Table" : "Cards"}
          </button>
        )
      })}
    </div>
  )
}

export default function SiteEquipmentOverview() {
  const [view, setView] = useState<"table" | "cards">("table")

  return (
    <section className="max-w-[1080px] shrink-0 w-full" data-name="section -overview equipment">
      <div className="flex items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-['Inter:Medium',sans-serif] text-[16px] font-medium leading-6 tracking-[-0.176px] text-[#0a0a0a]">Equipment</h2>
          <RadioIcon className="size-5 text-[#0a0a0a]" />
        </div>
        <ViewSwitcher view={view} onChange={setView} />
      </div>

      {view === "table" ? (
        <div className="overflow-x-auto rounded-[12px] border border-[#e6e6e6] bg-white">
          <div className="min-w-[680px] divide-y divide-[#e6e6e6]">
            {rows.map((row) => (
              <div key={row.id} className="grid min-h-16 grid-cols-[minmax(190px,1.2fr)_minmax(220px,1.35fr)_minmax(112px,0.7fr)_32px] items-center gap-6 px-4 py-3 text-[14px] leading-5 text-[#0a0a0a]">
                <div className="min-w-0">
                  <p className="truncate font-['Inter:Medium',sans-serif] font-medium">{row.id}</p>
                  <OnlineStatus />
                </div>
                <div className="min-w-0"><RowValue value={row.value} power={row.power} /></div>
                <div className="justify-self-end"><Incidents incidents={row.incidents} emptyState={row.emptyState} /></div>
                <span className="grid size-8 place-items-center"><ChevronDown /></span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {rows.map((row) => <EquipmentCard key={row.id} row={row} />)}
        </div>
      )}
    </section>
  )
}
