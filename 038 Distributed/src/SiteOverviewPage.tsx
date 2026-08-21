import { useMemo, useState } from "react"
import EquipmentTypeIcon from "@/EquipmentTypeIcon"
import { chartValuesFor } from "@/chartVariants"
import StatusIcon from "@/StatusIcon"
import {
  getPartner,
  getSite,
  sites,
  type DistributedSystem,
  type IntegratedUnit,
} from "@/prototypeData"
import OperationalEquipmentList from "@/OperationalEquipmentList"
import type {
  OperationalEquipmentHealthFilter,
  OperationalEquipmentGrouping,
  OperationalEquipmentPresentation,
  OperationalEquipmentStatusSource,
} from "@/OperationalEquipmentList"
import { equipmentAttentionCount } from "@/OperationalEquipmentList"
import EquipmentAttentionIndicator, {
  type EquipmentAttentionIndicatorMode,
} from "@/EquipmentAttentionIndicator"
import type { EquipmentDetailTarget } from "@/EquipmentPage"
import SitePageHeader from "@/SitePageHeader"

type LiveEntity = { kind: "unit" unit: IntegratedUnit position: number } | {
  kind: "system"
  system: DistributedSystem
  position: number
}

type LiveFilter = "all" | "available" | "alerts"

function IconButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-8 place-items-center rounded-md border border-[#e6e6e6] bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-transform duration-150 active:scale-[0.96]"
    >
      {children}
    </button>
  )
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 text-[#757575] transition-transform duration-150 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m6 8 4 4 4-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function VerticalChevron({ direction }: { direction: "up" | "down" }) {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20">
      <path
        d={direction === "up" ? "m6 12 4-4 4 4" : "m6 8 4 4 4-4"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function SiteGlyph() {
  return <StatusIcon name="site" className="size-6" />
}

function PinGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 text-[#757575]"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 18s5-4.58 5-9a5 5 0 1 0-10 0c0 4.42 5 9 5 9Z" />
      <circle cx="10" cy="9" r="1.5" />
    </svg>
  )
}

function PartnerGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 text-[#757575]"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="1.45"
    >
      <path
        d="M2.5 5.5h11v7h-11zM5.25 5.5V4.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25V5.5M2.5 8.25h11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Radio({ offline = false }: { offline?: boolean }) {
  return <StatusIcon name={offline ? "offline" : "online"} />
}

function Connection({ offline = false }: { offline?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[13px] leading-5 ${
        offline ? "text-[#f05a55]" : "text-[#13bd66]"
      }`}
    >
      <Radio offline={offline} />
      {offline ? "Offline" : "Online"}
    </span>
  )
}

function AvailabilityIcon({
  state,
}: {
  state: "charging" | "available" | "preparing" | "unavailable"
}) {
  return <StatusIcon name={state} />
}

function Connector({
  index,
  variant,
}: {
  index: number
  variant: "charging" | "available" | "preparing" | "unavailable"
}) {
  return (
    <span className="inline-flex h-6 items-center overflow-hidden rounded-md border border-[#e6e6e6] bg-white">
      <span className="bg-[#f5f5f5] px-2 text-[13px] leading-5 text-[#757575]">
        {String(index).padStart(2, "0")}
      </span>
      <span className="grid size-6 place-items-center">
        <AvailabilityIcon state={variant} />
      </span>
    </span>
  )
}

function IncidentSummary({ incidents }: { incidents: number }) {
  if (!incidents)
    return (
      <span className="whitespace-nowrap text-[14px] text-[#0a0a0a]">None</span>
    )
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-[14px] text-[#0a0a0a]">
      <span aria-hidden="true" className="flex h-4 items-end gap-0.5">
        <span className="h-2 w-1 rounded-sm bg-[#ff5454]" />
        <span className="h-3 w-1 rounded-sm bg-[#ff5454]" />
        <span className="h-4 w-1 rounded-sm bg-[#ff5454]" />
      </span>
      {incidents}
    </span>
  )
}

function StateBadge({ label = "Available" }: { label?: string }) {
  return (
    <span className="inline-flex h-6 w-fit max-w-full justify-self-start items-center gap-1.5 whitespace-nowrap rounded-md border border-[#e6e6e6] bg-white px-2 text-[13px] leading-5 text-[#171717]">
      <span aria-hidden="true" className="size-2 rounded-full bg-[#1dcc6e]" />
      {label}
    </span>
  )
}

function ChargerBadge({
  variant,
}: {
  variant: "charging" | "available" | "preparing" | "unavailable"
}) {
  const label =
    variant === "charging"
      ? "Charging · 46%"
      : variant === "available"
        ? "Available"
        : variant === "preparing"
          ? "Preparing"
          : "Unavailable"
  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded-md border border-[#e6e6e6] bg-white px-2 text-[13px] leading-5 text-[#171717]">
      <AvailabilityIcon state={variant} />
      {label}
    </span>
  )
}

function ChargerCard({
  chargerId,
  variant,
}: {
  chargerId: string
  variant: "charging" | "available" | "preparing" | "unavailable"
}) {
  if (variant !== "charging")
    return (
      <article className="flex min-h-12 items-center justify-start gap-3 rounded-lg border border-[#e6e6e6] bg-white px-4 py-2">
        <span className="inline-flex min-w-0 items-center gap-2">
          <span className="text-[#757575]">
            <EquipmentTypeIcon kind="chargers" />
          </span>
          <span className="truncate text-[14px] font-medium text-[#171717]">
            {chargerId}
          </span>
        </span>
        <ChargerBadge variant={variant} />
      </article>
    )

  return (
    <article className="rounded-lg border border-[#e6e6e6] bg-white px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[#757575]">
            <EquipmentTypeIcon kind="chargers" />
          </span>
          <span className="text-[14px] font-medium text-[#171717]">
            {chargerId}
          </span>
          <ChargerBadge variant="charging" />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-7 items-center gap-1 rounded-md border border-[#e6e6e6] bg-white px-2 text-[12px] text-[#757575]"
            disabled
          >
            <span aria-hidden="true">▷</span> Start
          </button>
          <button
            type="button"
            className="inline-flex h-7 items-center gap-1 rounded-md border border-[#d8d8d8] bg-white px-2 text-[12px] text-[#171717] active:scale-[0.96] transition-transform"
          >
            <span aria-hidden="true">■</span> Stop
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-[13px]">
        <span className="font-medium text-[#171717]">46%</span>
        <span className="text-[#757575]">Est. end in ~43 min</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#dfe2e5]">
        <span className="block h-full w-[46%] rounded-full bg-[#1dcc6e]" />
      </div>
      <div className="mt-1 flex justify-between text-[11px] text-[#8a8a8a]">
        <span>18% started</span>
        <span>89% limit</span>
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-[#e6e6e6] pt-3 text-[12px]">
        <div>
          <dt className="text-[#8a8a8a]">Energy delivered</dt>
          <dd className="mt-1 text-[#30353d]">24.60 kWh</dd>
        </div>
        <div>
          <dt className="text-[#8a8a8a]">Current power</dt>
          <dd className="mt-1 text-[#30353d]">126.60 kW</dd>
        </div>
        <div>
          <dt className="text-[#8a8a8a]">Limit</dt>
          <dd className="mt-1 text-[#30353d]">123.00 kW</dd>
        </div>
      </dl>
    </article>
  )
}

function ChargerRows({ entity }: { entity: LiveEntity }) {
  const chargerCount =
    entity.kind === "unit"
      ? entity.unit.chargerCount
      : entity.system.chargers.length
  const variants: Array<"charging" | "available" | "preparing" | "unavailable"> =
    ["charging", "available", "preparing", "unavailable"]

  if (!chargerCount)
    return (
      <div className="border-t border-[#e6e6e6] bg-[#f7f8fa] px-5 py-4 text-[14px] text-[#757575]">
        No chargers are installed in this distributed system.
      </div>
    )

  return (
    <div className="border-t border-[#e6e6e6] bg-[#f2f4f6] p-3 sm:p-4">
      <div className="space-y-2">
        {Array.from({ length: chargerCount }, (_, index) => {
          const chargerId = `Charger ${String(index + 1).padStart(2, "0")}`
          const variant = variants[(index + entity.position) % variants.length]
          return (
            <ChargerCard
              key={chargerId}
              chargerId={chargerId}
              variant={variant}
            />
          )
        })}
      </div>
    </div>
  )
}

function Details({ siteId }: { siteId: string }) {
  const site = getSite(siteId)
  const partner = getPartner(site.partnerId)
  const index = sites.findIndex((item) => item.id === site.id)
  const unitCount = site.integratedUnits.length + site.distributedSystems.length
  const chargerCount =
    site.integratedUnits.reduce((total, unit) => total + unit.chargerCount, 0) +
    site.distributedSystems.reduce(
      (total, system) => total + system.chargers.length,
      0,
    )
  const primary = [
    ["Deployed units", String(unitCount)],
    [
      "Alerts",
      <IncidentSummary key="incidents" incidents={index % 3 === 0 ? 2 : 0} />,
    ],
    ["State", <StateBadge key="state" label="Active" />],
    ["Added", `Nov ${9 + index}, 2025, ${index % 2 ? "14:06" : "9:52"}`],
  ]
  const secondary = [
    [
      "Partner",
      <span key="partner" className="inline-flex items-center gap-2">
        <PartnerGlyph />
        {partner.name}
      </span>,
    ],
    ["Name", site.name],
    ["Location", site.address],
    [
      "Location coordinates",
      index % 2 ? "37° 46′ 6″ N 122° 25′ 10″ W" : "40° 45′ 57″ N 74° 0′ 8″ W",
    ],
    [
      "Site page",
      <span key="page" className="inline-flex items-center gap-2">
        View <span aria-hidden="true">↗</span>
      </span>,
    ],
  ]
  const usage = [
    ["Last charge", "Nov 9, 9:41"],
    ["Total charges", String(1000 + chargerCount * 48)],
    [
      "Total charged",
      `${(100200.2 + index * 1247.5).toLocaleString("en-US", { minimumFractionDigits: 2 })} kWh`,
    ],
  ]
  const render = (items: Array<[string, React.ReactNode]>) =>
    items.map(([label, value]) => (
      <div
        key={label}
        className="grid grid-cols-[122px_1fr] gap-4 py-2 text-[14px] leading-5"
      >
        <dt className="text-[#757575]">{label}</dt>
        <dd className="min-w-0 break-words text-[#171717]">{value}</dd>
      </div>
    ))
  return (
    <aside className="min-w-0">
      <h2 className="mb-3 text-[16px] font-medium leading-6 text-[#0a0a0a]">
        Details
      </h2>
      <dl>{render(primary)}</dl>
      <div className="my-6 border-t border-[#e6e6e6]" />
      <dl>{render(secondary)}</dl>
      <div className="my-6 border-t border-[#e6e6e6]" />
      <dl>{render(usage)}</dl>
      <section className="mt-9">
        <h2 className="mb-3 text-[16px] font-medium leading-6 text-[#0a0a0a]">
          Backoffice internal notes
        </h2>
        <textarea
          aria-label="Backoffice internal notes"
          className="min-h-28 w-full resize-y rounded-md border border-[#e6e6e6] p-3 text-[14px] outline-none placeholder:text-[#757575] focus:border-[#2357d9]"
          placeholder="Write a note for the site..."
        />
      </section>
    </aside>
  )
}

function toLiveEntities(siteId: string): LiveEntity[] {
  const site = getSite(siteId)
  return [
    ...site.distributedSystems.map((system, position) => ({
      kind: "system" as const,
      system,
      position,
    })),
    ...site.integratedUnits.map((unit, position) => ({
      kind: "unit" as const,
      unit,
      position: position + site.distributedSystems.length,
    })),
  ]
}

function EntityName({ entity }: { entity: LiveEntity }) {
  const id = entity.kind === "unit" ? entity.unit.id : entity.system.id
  return (
    <span className="flex min-w-0 items-center gap-2 font-medium">
      <span className="shrink-0 text-[#757575]">
        <EquipmentTypeIcon
          kind={entity.kind === "unit" ? "units" : "distributed"}
        />
      </span>
      <span className="truncate">{id}</span>
    </span>
  )
}

function StatisticCard({
  label,
  value,
  children,
  rightSlot,
  className = "",
}: {
  label: string
  value: string
  children: React.ReactNode
  rightSlot?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`min-w-0 px-4 py-3 ${className}`}>
      <p className="text-[14px] font-medium leading-5 text-[#171717]">
        {label}
      </p>
      <div className="mt-1 flex items-end justify-between gap-3">
        <p className="text-[20px] font-medium leading-7 tracking-[-0.2px] text-[#0a0a0a]">
          {value}
        </p>
        {rightSlot}
      </div>
      {children}
    </div>
  )
}

function SegmentedMeter({
  primary,
  secondary,
  muted = 0,
}: {
  primary: number
  secondary?: number
  muted?: number
}) {
  return (
    <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-[#dfe2e5]">
      <span className="bg-[#8be5b7]" style={{ width: `${primary}%` }} />
      {secondary !== undefined && (
        <span className="bg-[#12c96c]" style={{ width: `${secondary}%` }} />
      )}
      {muted > 0 && (
        <span className="bg-[#777777]" style={{ width: `${muted}%` }} />
      )}
    </div>
  )
}

function LiveUnitStatistics({ siteId }: { siteId: string }) {
  const site = getSite(siteId)
  const entities = toLiveEntities(siteId)
  const hasIntegratedUnits = site.integratedUnits.length > 0
  const totalChargers =
    site.integratedUnits.reduce((sum, unit) => sum + unit.chargerCount, 0) +
    site.distributedSystems.reduce(
      (sum, system) => sum + system.chargers.length,
      0,
    )
  const onlineEntities = entities.filter((_, index) => index % 5 !== 4).length
  const onlineChargers = totalChargers
    ? Math.max(0, totalChargers - (site.partnerId === "acme" ? 1 : 2))
    : 0
  const incidentCount = entities.reduce(
    (sum, _, index) => sum + (index % 3 === 2 ? 1 : 0),
    0,
  )
  const firstLabel = hasIntegratedUnits ? "Units online" : "Chargers online"
  const firstValue = hasIntegratedUnits
    ? `${onlineEntities}/${entities.length}`
    : `${onlineChargers}/${totalChargers}`
  const secondLabel = hasIntegratedUnits ? "Working chargers" : "Working units"
  const secondValue = hasIntegratedUnits
    ? `${onlineChargers}/${totalChargers}`
    : `${onlineEntities}/${entities.length}`
  const firstPercent = hasIntegratedUnits
    ? entities.length
      ? (onlineEntities / entities.length) * 100
      : 0
    : totalChargers
      ? (onlineChargers / totalChargers) * 100
      : 0
  const secondPercent = hasIntegratedUnits
    ? totalChargers
      ? (onlineChargers / totalChargers) * 100
      : 0
    : entities.length
      ? (onlineEntities / entities.length) * 100
      : 0

  return (
    <div className="mb-7 overflow-hidden rounded-xl border border-[#e6e6e6] bg-white sm:grid sm:grid-cols-3 sm:divide-x sm:divide-[#e6e6e6]">
      <StatisticCard
        label={firstLabel}
        value={firstValue}
        className="border-b border-[#e6e6e6] sm:border-b-0"
      >
        <SegmentedMeter primary={firstPercent} />
      </StatisticCard>
      <StatisticCard
        label={secondLabel}
        value={secondValue}
        className="border-b border-[#e6e6e6] sm:border-b-0"
      >
        <SegmentedMeter
          primary={Math.min(secondPercent, 58)}
          secondary={Math.max(0, secondPercent - 58)}
          muted={Math.max(0, 100 - secondPercent)}
        />
      </StatisticCard>
      <StatisticCard
        label="Incidents"
        value={String(incidentCount)}
        rightSlot={
          <span className="inline-flex items-center gap-2 text-[13px] text-[#171717]">
            <IncidentSummary incidents={incidentCount} />
            <span className="text-[#757575]">open</span>
          </span>
        }
      >
        <SegmentedMeter
          primary={incidentCount ? 20 : 0}
          secondary={incidentCount ? 45 : 0}
          muted={incidentCount ? 35 : 0}
        />
      </StatisticCard>
    </div>
  )
}

function LiveUnits({ siteId }: { siteId: string }) {
  const site = getSite(siteId)
  const entities = useMemo(() => toLiveEntities(siteId), [siteId])
  const [filter, setFilter] = useState<LiveFilter>("all")
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set())
  const entries = entities.map((entity) => ({
    entity,
    id: entity.kind === "unit" ? entity.unit.id : entity.system.id,
    incidents: entity.position % 3 === 2 ? 1 : 0,
    online: entity.position % 5 !== 4,
  }))
  const visible = entries.filter((entry) =>
    filter === "all" || filter === "available"
      ? entry.online
      : entry.incidents > 0,
  )
  const counts = {
    all: entries.length,
    available: entries.filter((entry) => entry.online).length,
    alerts: entries.filter((entry) => entry.incidents).length,
  }
  const toggle = (id: string) =>
    setExpanded((current) => {
      const next = new Set(current)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  const tab = (id: LiveFilter, label: string) => (
    <button
      key={id}
      type="button"
      onClick={() => setFilter(id)}
      className={`h-8 rounded-md px-3 text-[14px] leading-5 ${
        filter === id
          ? "bg-white font-medium text-[#0a0a0a] shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
          : "text-[#757575]"
      }`}
    >
      {label} <span className="ml-1 text-[#757575]">{counts[id]}</span>
    </button>
  )
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="inline-flex items-center gap-2 text-[16px] font-medium leading-6 text-[#0a0a0a]">
          {site.integratedUnits.length ? "Live units" : "Live chargers"}{" "}
          <Radio />
        </h2>
        <button
          type="button"
          className="text-[14px] text-[#525252] hover:text-[#0a0a0a]"
        >
          View details
        </button>
      </div>
      <LiveUnitStatistics siteId={siteId} />
      <div className="mb-4 inline-flex rounded-md bg-[#f5f5f5] p-0.5">
        {tab("all", "All")}
        {tab("available", "Available")}
        {tab("alerts", "Alerts")}
      </div>
      <div className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-white divide-y divide-[#e6e6e6]">
        {visible.map(({ entity, id, incidents, online }) => {
          const open = expanded.has(id)
          const chargerCount =
            entity.kind === "unit"
              ? entity.unit.chargerCount
              : entity.system.chargers.length
          const variants: Array<"charging" | "available" | "preparing" | "unavailable"> =
            ["charging", "available", "preparing", "unavailable"]
          return (
            <div key={id}>
              <button
                type="button"
                onClick={() => toggle(id)}
                aria-expanded={open}
                className="grid min-h-[72px] w-full grid-cols-[minmax(175px,1fr)_minmax(240px,1.5fr)_minmax(84px,.5fr)_minmax(105px,.65fr)_32px] items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#fafafa]"
              >
                <span className="min-w-0">
                  <EntityName entity={entity} />
                  <Connection offline={!online} />
                </span>
                <span className="flex flex-wrap gap-2">
                  {chargerCount ? (
                    Array.from({ length: chargerCount }, (_, i) => (
                      <Connector
                        key={i}
                        index={i + 1}
                        variant={
                          variants[(i + entity.position) % variants.length]
                        }
                      />
                    ))
                  ) : (
                    <span className="text-[14px] text-[#757575]">
                      No chargers
                    </span>
                  )}
                </span>
                <IncidentSummary incidents={incidents} />
                <StateBadge
                  label={
                    online
                      ? entity.kind === "system"
                        ? "Operational"
                        : "Available"
                      : "Unavailable"
                  }
                />
                <span className="grid size-8 place-items-center">
                  <Chevron open={open} />
                </span>
              </button>
              {open && <ChargerRows entity={entity} />}
            </div>
          )
        })}
      </div>
    </section>
  )
}

type ChartKind = "energy" | "utilization" | "charges" | "incidents"

function MiniChart({
  kind,
  entityKey,
  empty = false,
}: {
  kind: ChartKind
  entityKey: string
  empty?: boolean
}) {
  if (empty)
    return (
      <div className="relative mt-5 h-24 border-b border-dashed border-[#e6e6e6]">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[12px] text-[#8a8a8a]">
          No data to display
        </div>
        <div className="absolute bottom-[-19px] left-0 right-0 flex justify-between text-[11px] text-[#8a8a8a]">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
        </div>
      </div>
    )
  return (
    <div className="relative mt-5 h-24 border-b border-dashed border-[#e6e6e6]">
      <div className="flex h-20 items-end gap-1 px-1">
        {chartValuesFor(entityKey, kind).map((value, index) => {
          const chargeIssue =
            kind === "charges" && (index === 17 || index === 21)
          const incidentCritical =
            kind === "incidents" && (index === 8 || index === 22)
          const incidentMedium =
            kind === "incidents" &&
            (index === 9 || index === 16 || index === 23)
          const tone =
            kind === "incidents"
              ? incidentCritical
                ? "#d5302a"
                : incidentMedium
                  ? "#f6b233"
                  : "#777777"
              : chargeIssue
                ? "#f6b233"
                : "#43d58a"
          return (
            <span
              key={index}
              className="min-w-0 flex-1 rounded-t-sm"
              style={{
                height: `${Math.max(8, value)}%`,
                backgroundColor: tone,
              }}
            />
          )
        })}
      </div>
      <div className="absolute bottom-[-19px] left-0 right-0 flex justify-between text-[11px] text-[#8a8a8a]">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
      </div>
    </div>
  )
}

function ChartLegend({ kind }: { kind: ChartKind }) {
  if (kind === "charges")
    return (
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#757575]">
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#43d58a]" />
          200 As expected
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#f6b233]" />
          10 With issues
        </span>
      </div>
    )
  if (kind === "incidents")
    return (
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#757575]">
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#d5302a]" />
          12 Critical
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#f05a55]" />
          20 High
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#f6b233]" />
          41 Medium
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2 rounded-full bg-[#777777]" />
          102 Low
        </span>
      </div>
    )
  return null
}

function OverviewChartCard({
  kind,
  entityKey,
  empty = false,
}: {
  kind: ChartKind
  entityKey: string
  empty?: boolean
}) {
  const meta: Record<ChartKind, { title: string value: string }> = {
    energy: { title: "Energy delivered", value: empty ? "—" : "3,452.20 kWh" },
    utilization: {
      title: "Utilization by work time",
      value: empty ? "—" : "52.5%",
    },
    charges: { title: "Charges", value: empty ? "0" : "210" },
    incidents: { title: "Incidents", value: empty ? "0" : "175" },
  }
  const item = meta[kind]
  return (
    <article className="min-w-0 border-t border-[#e6e6e6] pt-4">
      <header className="flex items-center justify-between gap-3 text-[13px]">
        <h3 className="font-medium text-[#171717]">
          {item.title}{" "}
          <span className="font-normal text-[#757575]">{item.value}</span>
        </h3>
        <button
          type="button"
          className="shrink-0 text-[#757575] hover:text-[#171717]"
        >
          View report
        </button>
      </header>
      <MiniChart kind={kind} entityKey={entityKey} empty={empty} />
      <ChartLegend kind={kind} />
    </article>
  )
}

function Overview24Hours({ siteId }: { siteId: string }) {
  const site = getSite(siteId)
  const isGateway = site.partnerId === "gateway"
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-[16px] font-medium leading-6 text-[#0a0a0a]">
        Overview 24 hours
      </h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
        {isGateway ? (
          <>
            <OverviewChartCard kind="energy" entityKey={siteId} />
            <OverviewChartCard kind="incidents" entityKey={siteId} />
          </>
        ) : (
          <>
            <OverviewChartCard kind="energy" entityKey={siteId} />
            <OverviewChartCard kind="utilization" entityKey={siteId} />
            <OverviewChartCard kind="charges" entityKey={siteId} />
            <OverviewChartCard kind="incidents" entityKey={siteId} />
          </>
        )}
      </div>
    </section>
  )
}

function ChargesTimeline({ siteId }: { siteId: string }) {
  const entities = toLiveEntities(siteId).slice(0, 4)
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[16px] font-medium leading-6">
          Charges timeline last 30 days
        </h2>
        <span className="text-[14px] text-[#525252]">View all</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-white">
        <div className="grid grid-cols-[190px_1fr] border-b border-[#e6e6e6] text-[12px] text-[#757575]">
          <span className="px-4 py-3">Unit</span>
          <span className="grid grid-cols-6 px-4 py-3">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
          </span>
        </div>
        {entities.map((entity, index) => (
          <div
            key={index}
            className="grid min-h-11 grid-cols-[190px_1fr] border-b border-[#f0f0f0] last:border-0"
          >
            <span className="flex items-center gap-2 px-4 text-[13px] text-[#242424]">
              <span className="text-[#757575]">
                <EquipmentTypeIcon
                  kind={entity.kind === "unit" ? "units" : "distributed"}
                />
              </span>
              {entity.kind === "unit" ? entity.unit.id : entity.system.id}
            </span>
            <span className="relative m-2 overflow-hidden rounded bg-[#f5f5f5]">
              <span className="absolute left-[8%] top-1/2 h-2 w-[18%] -translate-y-1/2 rounded bg-[#1dcc6e]" />
              <span className="absolute left-[36%] top-1/2 h-2 w-[14%] -translate-y-1/2 rounded bg-[#1dcc6e]" />
              <span className="absolute left-[60%] top-1/2 h-2 w-[22%] -translate-y-1/2 rounded bg-[#1dcc6e]" />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function SiteOverviewPage({
  siteId,
  overviewEquipmentVisible,
  equipmentHealthFilter,
  onEquipmentHealthFilterChange,
  equipmentPresentation,
  groupEquipmentBySystem,
  groupEquipmentByType,
  equipmentGroupingOrder,
  equipmentStatusSource,
  showEquipmentAttentionCount,
  equipmentAttentionIndicator,
  onOpenEquipmentDetail,
  equipmentTabEnabled,
  onOpenSites,
  onOpenEquipment,
  onOpenEquipmentTab,
  onPreviousSite,
  onNextSite,
}: {
  siteId: string
  overviewEquipmentVisible: boolean
  equipmentHealthFilter: OperationalEquipmentHealthFilter
  onEquipmentHealthFilterChange: (
    filter: OperationalEquipmentHealthFilter,
  ) => void
  equipmentPresentation: OperationalEquipmentPresentation
  groupEquipmentBySystem: boolean
  groupEquipmentByType: boolean
  equipmentGroupingOrder: OperationalEquipmentGrouping[]
  equipmentStatusSource: OperationalEquipmentStatusSource
  showEquipmentAttentionCount: boolean
  equipmentAttentionIndicator: EquipmentAttentionIndicatorMode
  onOpenEquipmentDetail: (target: EquipmentDetailTarget) => void
  equipmentTabEnabled: boolean
  onOpenSites: () => void
  onOpenEquipment: () => void
  onOpenEquipmentTab: () => void
  onPreviousSite: () => void
  onNextSite: () => void
}) {
  const site = getSite(siteId)
  const partner = getPartner(site.partnerId)
  const siteIndex = sites.findIndex((item) => item.id === siteId)
  const attentionCount = equipmentAttentionCount({ siteId })
  return (
    <div className="min-h-full bg-white text-[#0a0a0a]">
      <header className="sticky top-0 z-10 flex h-14 items-center border-b border-[#e6e6e6] bg-white px-5">
        <button
          type="button"
          onClick={onOpenSites}
          className="flex items-center gap-2.5"
        >
          <span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-[13px] font-medium text-white">
            L
          </span>
          <span className="text-[14px] font-medium">L-CHARGE</span>
        </button>
        <nav className="ml-10 flex h-full items-center gap-1 text-[14px] text-[#525252]">
          {["Home", "Charges", "Clients"].map((label) => (
            <button
              type="button"
              key={label}
              className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]"
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={onOpenSites}
            className="rounded-md bg-[#f5f5f5] px-3 py-1.5 font-medium text-[#0a0a0a]"
          >
            Sites
          </button>
          <button
            type="button"
            onClick={onOpenEquipment}
            className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]"
          >
            Equipment
          </button>
          {["Reports", "Incidents", "Settings"].map((label) => (
            <button
              type="button"
              key={label}
              className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-[#1dcc6e] text-[13px] font-medium text-white">
            NS
          </span>
          <span className="text-[14px] font-medium">Nick Smith</span>
          <Chevron />
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-6">
        <SitePageHeader
          site={site}
          partner={partner}
          position={siteIndex + 1}
          total={sites.length}
          activeTab="overview"
          attentionCount={attentionCount}
          showEquipmentAttentionCount={showEquipmentAttentionCount}
          equipmentAttentionIndicator={equipmentAttentionIndicator}
          onOpenSites={onOpenSites}
          onOpenEquipment={onOpenEquipment}
          onPrevious={onPreviousSite}
          onNext={onNextSite}
          onTabChange={(tab) => {
            if (tab === "equipment") onOpenEquipmentTab()
            if (tab === "incidents") {
              onOpenEquipmentTab()
              window.setTimeout(
                () => window.dispatchEvent(new Event("prototype:open-site-incidents")),
                0,
              )
            }
          }}
        />
        <div className="hidden">
          <IconButton label="Back" onClick={onOpenSites}>
            ←
          </IconButton>
          <IconButton label="Previous site" onClick={onPreviousSite}>
            <VerticalChevron direction="up" />
          </IconButton>
          <IconButton label="Next site" onClick={onNextSite}>
            <VerticalChevron direction="down" />
          </IconButton>
          <span className="ml-1 text-[14px] text-[#757575]">
            {siteIndex + 1} of {sites.length} sites
          </span>
        </div>
        <div className="hidden">
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full border border-[#e6e6e6] bg-[#fafafa]">
              <SiteGlyph />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[24px] font-medium leading-8 tracking-[-0.3px]">
                  {site.name}
                </h1>
                <span className="inline-flex h-7 items-center gap-2 rounded-md border border-[#e6e6e6] px-2 text-[14px] text-[#757575]">
                  <PartnerGlyph />
                  {partner.name}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-[14px] text-[#757575]">
                <PinGlyph />
                {site.address}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-2 rounded-md border border-[#e6e6e6] bg-white px-3 text-[14px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
          >
            Actions <Chevron />
          </button>
        </div>
        <nav className="hidden">
          {["Overview", "Charges", "Incidents"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                if (label === "Incidents") {
                  onOpenEquipmentTab()
                  window.setTimeout(
                    () =>
                      window.dispatchEvent(
                        new Event("prototype:open-site-incidents"),
                      ),
                    0,
                  )
                }
              }}
              className={`h-11 border-b-2 px-3 text-[14px] ${
                label === "Overview"
                  ? "border-[#0a0a0a] font-medium text-[#0a0a0a]"
                  : "border-transparent text-[#525252] hover:text-[#0a0a0a]"
              }`}
            >
              {label}
            </button>
          ))}
          {equipmentTabEnabled && (
            <button
              type="button"
              onClick={onOpenEquipmentTab}
              className="inline-flex h-11 items-center gap-1.5 border-b-2 border-transparent px-3 text-[14px] text-[#525252] hover:text-[#0a0a0a]"
            >
              Equipment
              {showEquipmentAttentionCount && (
                <EquipmentAttentionIndicator
                  count={attentionCount}
                  mode={equipmentAttentionIndicator}
                />
              )}
            </button>
          )}
          <button
            type="button"
            className="h-11 border-b-2 border-transparent px-3 text-[14px] text-[#525252] hover:text-[#0a0a0a]"
          >
            Settings
          </button>
        </nav>
        <div className="mt-6 grid grid-cols-1 gap-10 xl:grid-cols-[minmax(280px,320px)_minmax(0,1fr)]">
          <Details siteId={siteId} />
          <div className="min-w-0">
            <LiveUnits siteId={siteId} />
            <Overview24Hours siteId={siteId} />
            {overviewEquipmentVisible && (
              <section className="mt-10">
                <h2 className="mb-4 text-[16px] font-medium leading-6">
                  {equipmentPresentation === "grouped"
                    ? "Equipment to check"
                    : "Equipment"}
                </h2>
                <OperationalEquipmentList
                  siteId={siteId}
                  onOpenDetail={onOpenEquipmentDetail}
                  healthFilter={equipmentHealthFilter}
                  onHealthFilterChange={onEquipmentHealthFilterChange}
                  view={equipmentPresentation}
                  groupBySystem={groupEquipmentBySystem}
                  groupByType={groupEquipmentByType}
              groupingOrder={equipmentGroupingOrder}
              statusSource={equipmentStatusSource}
                  hideNormalWhenGrouped
                />
              </section>
            )}
            <ChargesTimeline siteId={siteId} />
          </div>
        </div>
      </main>
    </div>
  )
}
