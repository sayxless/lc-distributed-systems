import { useState } from "react"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"
import svgPaths from "@/imports/SiteOverviewV1/svg-g8tgddqzze"

type IncidentSeverity = "high" | "medium" | "low"
type EquipmentStatus = "operational" | "charging" | "available" | "discharging" | "running"

type Incident = {
  severity: IncidentSeverity
  count: number
}

type EquipmentItem = {
  id: string
  status: EquipmentStatus
  power: string
  charge?: string
  incidents?: Incident[]
}

type EquipmentTypeGroup = {
  kind: Exclude<EquipmentKind, "distributed" | "units">
  label: string
  items: EquipmentItem[]
}

type EquipmentEntity = {
  id: string
  kind: Extract<EquipmentKind, "distributed" | "units">
  load?: number
  incidents?: Incident[]
  groups: EquipmentTypeGroup[]
}

const distributedSystems: EquipmentEntity[] = [
  {
    id: "DS-100",
    kind: "distributed",
    load: 62,
    incidents: [
      { severity: "high", count: 1 },
      { severity: "medium", count: 4 },
      { severity: "low", count: 1 },
    ],
    groups: [
      {
        kind: "paralleling",
        label: "Paralleling panels",
        items: [{ id: "PP-300", status: "operational", power: "Current power: 280 kWh" }],
      },
      {
        kind: "bess",
        label: "BESS",
        items: [
          { id: "BS-399", status: "discharging", power: "Current power: 140 kW ↑" },
          {
            id: "BS-398",
            status: "charging",
            power: "Current power: 80 kW ↓",
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
          { id: "GS-800", status: "running", power: "Current power: 140 kW" },
          {
            id: "GS-798",
            status: "running",
            power: "Current power: 140 kW",
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
          { id: "Charger 01", status: "charging", charge: "46%", power: "Current power: 120 kW" },
          { id: "Charger 02", status: "available", power: "Current power: —" },
          { id: "Charger 03", status: "charging", charge: "37%", power: "Current power: 100 kW" },
          { id: "Charger 04", status: "available", power: "Current power: —" },
        ],
      },
    ],
  },
  {
    id: "DS-200",
    kind: "distributed",
    load: 28,
    incidents: [
      { severity: "high", count: 1 },
      { severity: "medium", count: 1 },
    ],
    groups: [
      {
        kind: "paralleling",
        label: "Paralleling panels",
        items: [{ id: "PP-301", status: "operational", power: "Current power: 220 kWh" }],
      },
      {
        kind: "bess",
        label: "BESS",
        items: [{ id: "BS-401", status: "discharging", power: "Current power: 120 kW ↑" }],
      },
      {
        kind: "gensets",
        label: "Gensets",
        items: [{ id: "GS-801", status: "running", power: "Current power: 120 kW" }],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [
          { id: "Charger 01", status: "charging", charge: "52%", power: "Current power: 110 kW" },
          { id: "Charger 02", status: "available", power: "Current power: —" },
          { id: "Charger 03", status: "available", power: "Current power: —" },
          { id: "Charger 04", status: "charging", charge: "41%", power: "Current power: 90 kW" },
        ],
      },
    ],
  },
]

const integratedUnits: EquipmentEntity[] = [
  {
    id: "Booster A, UN-401",
    kind: "units",
    groups: [
      {
        kind: "gensets",
        label: "Gensets",
        items: [{ id: "GS-810", status: "running", power: "Current power: 140 kW" }],
      },
      {
        kind: "chargers",
        label: "Chargers",
        items: [{ id: "Charger 01", status: "available", power: "Current power: —" }],
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
          { id: "GS-800", status: "running", power: "Current power: 140 kW" },
          {
            id: "GS-798",
            status: "running",
            power: "Current power: 140 kW",
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
          { id: "Charger 01", status: "charging", charge: "46%", power: "Current power: 120 kW" },
          { id: "Charger 02", status: "available", power: "Current power: —" },
          { id: "Charger 03", status: "charging", charge: "37%", power: "Current power: 100 kW" },
          { id: "Charger 04", status: "available", power: "Current power: —" },
        ],
      },
    ],
  },
]

const entityGroups = [
  { id: "distributed-systems", kind: "distributed" as const, label: "Distributed systems", entities: distributedSystems },
  { id: "integrated-units", kind: "units" as const, label: "Integrated units", entities: integratedUnits },
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
    <span className={`inline-flex items-center gap-1 font-['Inter:Regular',sans-serif] text-[13px] leading-5 tracking-[-0.0325px] text-[#1dcc6e] ${className}`}>
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

function CircleProgressIcon() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0 text-[#1dcc6e]" fill="none" viewBox="0 0 16 16">
      <path d="M8 1.25a6.75 6.75 0 1 0 6.54 8.43" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function AvailableIcon() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 16.5 16.5">
      <path clipRule="evenodd" d={svgPaths.p1d51bb80} fill="#1DCC6E" fillRule="evenodd" />
    </svg>
  )
}

function StatusBadge({ status, charge }: Pick<EquipmentItem, "status" | "charge">) {
  const label = {
    operational: "Operational",
    charging: charge ? `Charging · ${charge}` : "Charging",
    available: "Available",
    discharging: "Discharging",
    running: "Running",
  }[status]

  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-[6px] border border-[#e6e6e6] bg-white px-2.5 font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
      {status === "charging" ? <CircleProgressIcon /> : status === "available" ? <AvailableIcon /> : <span aria-hidden="true" className="size-2.5 rounded-full bg-[#1dcc6e]" />}
      {label}
    </span>
  )
}

function IncidentIcon({ severity }: { severity: IncidentSeverity }) {
  const color = severity === "high" ? "#ff5454" : severity === "medium" ? "#f7a916" : "#bdbdbd"

  return (
    <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 16 16">
      <rect x="1" y="9" width="3" height="6" rx="1" fill={color} />
      <rect x="6.5" y="5" width="3" height="10" rx="1" fill={color} opacity={severity === "low" ? 0.7 : 1} />
      <rect x="12" y="1" width="3" height="14" rx="1" fill={color} opacity={severity === "low" ? 0.45 : severity === "medium" ? 0.3 : 1} />
    </svg>
  )
}

function Incidents({
  incidents,
  className = "",
  emptyClassName = "text-[#0a0a0a]",
}: {
  incidents?: Incident[]
  className?: string
  emptyClassName?: string
}) {
  if (!incidents?.length) return <span className={`whitespace-nowrap ${emptyClassName} ${className}`}>No incidents</span>

  return (
    <span aria-label={`${incidents.reduce((total, incident) => total + incident.count, 0)} open incidents`} className={`flex items-center justify-end gap-3 ${className}`}>
      {incidents.map((incident) => (
        <span key={incident.severity} className="inline-flex items-center gap-1 font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
          <IncidentIcon severity={incident.severity} />
          {incident.count}
        </span>
      ))}
    </span>
  )
}

function PowerLoad({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap">
      <span><span className="text-[#757575]">Power load:</span> {value}%</span>
      <span aria-hidden="true" className="h-1 w-10 overflow-hidden rounded-full bg-[#e6e6e6]">
        <span className="block h-full rounded-full bg-[#1dcc6e]" style={{ width: `${value}%` }} />
      </span>
    </span>
  )
}

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg aria-hidden="true" className={`size-5 text-[#757575] transition-transform duration-150 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 20 20">
      <path d="m6 8 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

const rowColumns = "grid-cols-[minmax(178px,1.05fr)_minmax(146px,0.84fr)_minmax(190px,1.2fr)_minmax(122px,0.65fr)_32px]"

function EquipmentItemRow({ item }: { item: EquipmentItem }) {
  return (
    <div className={`grid min-h-16 ${rowColumns} items-center gap-3 px-4 py-3 text-[14px] leading-5 text-[#0a0a0a]`}>
      <div className="min-w-0 pl-10">
        <p className="truncate font-['Inter:Medium',sans-serif] font-medium">{item.id}</p>
        <OnlineStatus />
      </div>
      <StatusBadge charge={item.charge} status={item.status} />
      <span className="min-w-0 text-[#0a0a0a]">{item.power}</span>
      <Incidents incidents={item.incidents} />
      <span aria-hidden="true" />
    </div>
  )
}

function EquipmentTypeSection({ group, parentId }: { group: EquipmentTypeGroup; parentId: string }) {
  const headingId = `equipment-type-${parentId.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${group.kind}`

  return (
    <section className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white" aria-labelledby={headingId}>
      <h4 id={headingId} className="flex min-h-14 items-center gap-2 bg-[#fafafa] px-5 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#525252]">
        <span className="text-[#757575]"><EquipmentTypeIcon kind={group.kind} /></span>
        {group.label}
        <span>{group.items.length}</span>
      </h4>
      <div className="divide-y divide-[#e6e6e6]">
        {group.items.map((item) => <EquipmentItemRow key={`${group.kind}-${item.id}`} item={item} />)}
      </div>
    </section>
  )
}

function EquipmentEntityRow({ entity, expanded, onToggle }: { entity: EquipmentEntity; expanded: boolean; onToggle: () => void }) {
  const contentId = `equipment-entity-${entity.id.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`

  return (
    <article className="bg-white">
      <button
        aria-controls={expanded ? contentId : undefined}
        aria-expanded={expanded}
        className={`grid min-h-[72px] w-full ${rowColumns} items-center gap-3 px-4 py-3 text-left text-[14px] leading-5 text-[#0a0a0a] transition-colors duration-150 hover:bg-[#fafafa] focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]`}
        onClick={onToggle}
        type="button"
      >
        <span className="min-w-0">
          <span className="flex min-w-0 items-center gap-2 font-['Inter:Medium',sans-serif] font-medium">
            <span className="shrink-0 text-[#757575]"><EquipmentTypeIcon kind={entity.kind} /></span>
            <span className="truncate">{entity.id}</span>
          </span>
          <OnlineStatus className="mt-0.5" />
        </span>
        <StatusBadge status="operational" />
        <span>{entity.load === undefined ? "" : <PowerLoad value={entity.load} />}</span>
        <Incidents incidents={entity.incidents} />
        <span className="grid size-8 place-items-center"><Chevron expanded={expanded} /></span>
      </button>
      {expanded && (
        <div id={contentId} className="border-t border-[#e6e6e6] bg-[#fafafa] p-5">
          <div className="space-y-3">
            {entity.groups.map((group) => <EquipmentTypeSection key={group.kind} group={group} parentId={entity.id} />)}
          </div>
        </div>
      )}
    </article>
  )
}

function EquipmentEntityGroup({
  id,
  kind,
  label,
  entities,
  expandedIds,
  onToggle,
}: {
  id: string
  kind: EquipmentEntity["kind"]
  label: string
  entities: EquipmentEntity[]
  expandedIds: Set<string>
  onToggle: (id: string) => void
}) {
  return (
    <section aria-labelledby={id}>
      <h3 id={id} className="mb-3 flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#525252]">
        <span className="text-[#757575]"><EquipmentTypeIcon kind={kind} /></span>
        {label}
        <span>{entities.length}</span>
      </h3>
      <div className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white divide-y divide-[#e6e6e6]">
        {entities.map((entity) => (
          <EquipmentEntityRow
            key={entity.id}
            entity={entity}
            expanded={expandedIds.has(entity.id)}
            onToggle={() => onToggle(entity.id)}
          />
        ))}
      </div>
    </section>
  )
}

type EquipmentCardItem = EquipmentItem & {
  kind: EquipmentTypeGroup["kind"]
}

function EquipmentItemCard({ item }: { item: EquipmentCardItem }) {
  const label = item.kind === "paralleling" ? "Sources working" : item.kind === "chargers" ? "Status" : "Current power"
  const value = item.kind === "paralleling" ? "2 / 2" : item.power.replace("Current power: ", "")

  return (
    <article className="flex min-h-40 flex-col rounded-[12px] border border-[#e6e6e6] bg-white p-4">
      <div className="flex min-w-0 items-center gap-2 text-[#757575]">
        <EquipmentTypeIcon kind={item.kind} />
        <h4 className="truncate font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-5 text-[#0a0a0a]">{item.id}</h4>
        <OnlineStatus className="ml-auto shrink-0" />
      </div>
      <div className="mt-5">
        <p className="text-[14px] leading-5 text-[#757575]">{label}</p>
        <div className="mt-2 font-['Inter:Regular',sans-serif] text-[16px] leading-6 text-[#0a0a0a]">
          {item.kind === "chargers" ? <StatusBadge charge={item.charge} status={item.status} /> : value}
        </div>
      </div>
      <div className="mt-auto pt-4 text-[14px] leading-5"><Incidents emptyClassName="text-[#757575]" incidents={item.incidents} /></div>
    </article>
  )
}

function EquipmentCardsEntityRow({
  entity,
  expanded,
  onToggle,
}: {
  entity: EquipmentEntity
  expanded: boolean
  onToggle: () => void
}) {
  const contentId = `equipment-card-${entity.id.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`

  return (
    <article className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white">
      <button
        aria-controls={expanded ? contentId : undefined}
        aria-expanded={expanded}
        className={`grid min-h-[72px] w-full ${rowColumns} items-center gap-3 px-4 py-3 text-left text-[14px] leading-5 text-[#0a0a0a] transition-colors duration-150 hover:bg-[#fafafa] focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]`}
        onClick={onToggle}
        type="button"
      >
        <span className="min-w-0">
          <span className="flex min-w-0 items-center gap-2 font-['Inter:Medium',sans-serif] font-medium">
            <span className="shrink-0 text-[#757575]"><EquipmentTypeIcon kind={entity.kind} /></span>
            <span className="truncate">{entity.id}</span>
          </span>
          <OnlineStatus className="mt-0.5" />
        </span>
        <StatusBadge status="operational" />
        <span>{entity.load === undefined ? "" : <PowerLoad value={entity.load} />}</span>
        <Incidents incidents={entity.incidents} />
        <span className="grid size-8 place-items-center"><Chevron expanded={expanded} /></span>
      </button>
      {expanded && (
        <div id={contentId} className="border-t border-[#e6e6e6] bg-[#fafafa] p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {entity.groups.flatMap((group) => group.items.map((item) => ({ ...item, kind: group.kind }))).map((item) => (
              <EquipmentItemCard key={`${item.kind}-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      )}
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
  const [expandedTableIds, setExpandedTableIds] = useState<Set<string>>(() => new Set())
  const [expandedCardIds, setExpandedCardIds] = useState<Set<string>>(() => new Set(["DS-100", "Booster B, UN-400"]))

  const toggleTableEntity = (id: string) => {
    setExpandedTableIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleCardEntity = (id: string) => {
    setExpandedCardIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

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
        <div className="overflow-x-auto">
          <div className="min-w-[748px] space-y-6">
            {entityGroups.map((group) => (
              <EquipmentEntityGroup
                key={group.id}
                {...group}
                expandedIds={expandedTableIds}
                onToggle={toggleTableEntity}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-[12px] border border-[#e6e6e6] bg-white divide-y divide-[#e6e6e6]">
          {entityGroups.flatMap((group) => group.entities).map((entity) => (
            <EquipmentCardsEntityRow
              key={entity.id}
              entity={entity}
              expanded={expandedCardIds.has(entity.id)}
              onToggle={() => toggleCardEntity(entity.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
