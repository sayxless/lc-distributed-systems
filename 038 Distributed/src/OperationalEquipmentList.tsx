import { useEffect, useMemo, useState } from "react"
import EquipmentTypeIcon from "@/EquipmentTypeIcon"
import {
  equipmentDetailTargets,
  type EquipmentDetailTarget,
  type EquipmentSectionId,
} from "@/EquipmentPage"
import StatusIcon from "@/StatusIcon"
import { getSite } from "@/prototypeData"

type OperationalEquipmentListProps = {
  siteId?: string
  parent?: EquipmentDetailTarget
  onOpenDetail: (target: EquipmentDetailTarget) => void
  healthFilter: OperationalEquipmentHealthFilter
  onHealthFilterChange: (filter: OperationalEquipmentHealthFilter) => void
  view: OperationalEquipmentPresentation
  groupBySystem?: boolean
  groupByType?: boolean
  groupingOrder?: OperationalEquipmentGrouping[]
  hideNormalWhenGrouped?: boolean
}

export type OperationalEquipmentView = "table" | "groups" | "cards" | "explorer" | "fullTable"
export type OperationalEquipmentHealthFilter = "critical" | "warning" | "normal" | "all"
export type OperationalEquipmentPresentation = "segment" | "grouped"
export type OperationalEquipmentGrouping = "system" | "type"

type Health = Exclude<OperationalEquipmentHealthFilter, "all"> | "offline"
type OperationalRow = EquipmentDetailTarget & {
  health: Health
  incidents: number
  connection: "online" | "offline"
}
type SortColumn =
  | "id"
  | "type"
  | "system"
  | "health"
  | "incidents"
  | "connection"
type SortDirection = "ascending" | "descending"
type EquipmentSort = { column: SortColumn; direction: SortDirection } | null

const leafSections: EquipmentSectionId[] = [
  "chargers",
  "gensets",
  "bess",
  "paralleling",
]
const distributedSystemIds = new Set(
  equipmentDetailTargets("distributed").map((target) => target.id),
)

function hash(value: string) {
  return [...value].reduce(
    (total, character) => (total * 31 + character.charCodeAt(0)) % 997,
    7,
  )
}

function operationalState(
  target: EquipmentDetailTarget,
): Pick<OperationalRow, "health" | "incidents" | "connection"> {
  const value = hash(target.id)
  if (value % 13 === 0)
    return { health: "normal", incidents: 0, connection: "offline" }
  if (value % 7 === 0)
    return { health: "critical", incidents: 2, connection: "online" }
  if (value % 4 === 0)
    return { health: "warning", incidents: 1, connection: "online" }
  return { health: "normal", incidents: 0, connection: "online" }
}

function healthMeta(health: Health) {
  return {
    offline: { label: "Offline", className: "bg-[#8a8a8a]", priority: 0 },
    critical: { label: "Not ready", className: "bg-[#d5302a]", priority: 1 },
    warning: { label: "Attention", className: "bg-[#f4a51c]", priority: 2 },
    normal: { label: "Normal", className: "bg-[#1dcc6e]", priority: 3 },
  }[health]
}

function sortByHealth(rows: OperationalRow[]) {
  return [...rows].sort(
    (left, right) =>
      healthMeta(left.health).priority - healthMeta(right.health).priority ||
      left.id.localeCompare(right.id),
  )
}

function sortOperationalRows(rows: OperationalRow[], sort: EquipmentSort) {
  if (!sort) return rows

  const direction = sort.direction === "ascending" ? 1 : -1
  return [...rows].sort((left, right) => {
    const comparison = {
      id: left.id.localeCompare(right.id),
      type: typeLabel(left.section).localeCompare(typeLabel(right.section)),
      system: (left.system ?? "").localeCompare(right.system ?? ""),
      health:
        healthMeta(left.health).priority - healthMeta(right.health).priority,
      incidents: left.incidents - right.incidents,
      connection:
        (left.connection === "offline" ? 0 : 1) -
        (right.connection === "offline" ? 0 : 1),
    }[sort.column]

    return direction * (comparison || left.id.localeCompare(right.id))
  })
}

export function equipmentAttentionCount({ siteId, parent }: {
  siteId?: string
  parent?: EquipmentDetailTarget
} = {}) {
  const site = siteId ? getSite(siteId) : undefined
  return leafSections
    .flatMap((section) => equipmentDetailTargets(section))
    .filter((target) => !site || target.site === site.name)
    .filter((target) => !parent || target.system === parent.id)
    .filter((target) => {
      const health = operationalState(target).health
      return health === "critical" || health === "warning"
    }).length
}

function IncidentValue({ row }: { row: OperationalRow }) {
  if (!row.incidents) return <span className="text-[#757575]">—</span>
  const critical = row.health === "critical"
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span
        aria-hidden="true"
        className={`flex h-4 items-end gap-0.5 ${
          critical ? "text-[#d5302a]" : "text-[#f4a51c]"
        }`}
      >
        {[7, 12, 16].map((height) => (
          <i
            key={height}
            className="w-1 rounded-sm bg-current"
            style={{ height }}
          />
        ))}
      </span>
      <span>{row.incidents}</span>
    </span>
  )
}

function ConnectionBadge({
  connection,
}: {
  connection: OperationalRow["connection"]
}) {
  const offline = connection === "offline"
  return (
    <span
      className={`inline-flex h-7 justify-self-start items-center gap-1.5 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] leading-5 ${
        offline ? "text-[#f05a55]" : "text-[#13bd66]"
      }`}
    >
      <StatusIcon name={offline ? "offline" : "online"} className="size-4" />
      {offline ? "Offline" : "Online"}
    </span>
  )
}

function HealthBadge({ health }: { health: Health }) {
  const meta = healthMeta(health)
  return (
    <span className="inline-flex h-6 justify-self-start items-center gap-2 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] leading-5 text-[#242424]">
      <i
        aria-hidden="true"
        className={`size-2 rounded-full ${meta.className}`}
      />
      {meta.label}
    </span>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.5 7.5 4.5 4.5 4.5-4.5"
      />
    </svg>
  )
}

function typeLabel(section: EquipmentSectionId) {
  return {
    chargers: "Charger",
    gensets: "Genset",
    bess: "BESS",
    paralleling: "Paralleling panel",
    units: "Integrated unit",
    distributed: "Distributed system",
  }[section]
}

function pluralLabel(section: EquipmentSectionId) {
  return {
    chargers: "Chargers",
    gensets: "Gensets",
    bess: "BESS",
    paralleling: "Paralleling panels",
    units: "Integrated units",
    distributed: "Distributed systems",
  }[section]
}

function OperationalTable({
  rows,
  onOpenDetail,
  showSystem,
  showType,
  sort = null,
  onSort = () => {},
  frameClassName = "rounded-xl border border-[#e6e6e6] bg-white",
}: {
  rows: OperationalRow[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
  showSystem: boolean
  showType: boolean
  sort?: EquipmentSort
  onSort?: (column: SortColumn) => void
  frameClassName?: string
}) {
  const open = (target: EquipmentDetailTarget) => onOpenDetail(target)

  return (
    <div className={`overflow-x-auto ${frameClassName}`}>
      <table
        style={{ minWidth: 520 + (showType ? 150 : 0) + (showSystem ? 150 : 0) }}
        className="w-full border-collapse text-left text-sm"
      >
        <thead className="h-11 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
          <tr>
            <SortableColumnHeader column="id" label="ID" sort={sort} onSort={onSort} />
            {showType && (
              <SortableColumnHeader
                column="type"
                label="Type"
                sort={sort}
                onSort={onSort}
              />
            )}
            {showSystem && (
              <SortableColumnHeader
                column="system"
                label="System"
                sort={sort}
                onSort={onSort}
              />
            )}
            <SortableColumnHeader
              column="health"
              label="Health"
              sort={sort}
              onSort={onSort}
            />
            <SortableColumnHeader
              column="incidents"
              label="Incidents"
              sort={sort}
              onSort={onSort}
            />
            <SortableColumnHeader
              column="connection"
              label="Connection"
              sort={sort}
              onSort={onSort}
            />
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e6e6e6]">
          {rows.map((row) => (
            <tr
              key={row.id}
              tabIndex={0}
              onClick={() => open(row)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  open(row)
                }
              }}
              className="h-12 cursor-pointer transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
            >
              <td className="px-4">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    open(row)
                  }}
                  className="font-medium text-[#171717] hover:underline"
                >
                  {row.id}
                </button>
              </td>
              {showType && (
                <td className="px-4">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-[#454545]">
                    <EquipmentTypeIcon kind={row.section} />
                    {typeLabel(row.section)}
                  </span>
                </td>
              )}
              {showSystem && (
                <td className="px-4 text-[#454545]">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    <EquipmentTypeIcon
                      kind={
                        distributedSystemIds.has(row.system ?? "")
                          ? "distributed"
                          : "units"
                      }
                    />
                    {row.system ?? "—"}
                  </span>
                </td>
              )}
              <td className="px-4">
                <HealthBadge health={row.health} />
              </td>
              <td className="px-4">
                <IncidentValue row={row} />
              </td>
              <td className="px-4">
                <ConnectionBadge connection={row.connection} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SortableColumnHeader({
  column,
  label,
  sort,
  onSort,
}: {
  column: SortColumn
  label: string
  sort: EquipmentSort
  onSort: (column: SortColumn) => void
}) {
  const direction = sort?.column === column ? sort.direction : undefined

  return (
    <th
      aria-sort={direction ?? "none"}
      className="px-4 font-normal"
    >
      <button
        type="button"
        onClick={() => onSort(column)}
        className="inline-flex items-center gap-1 rounded-sm text-left hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
      >
        {label}
        {direction && (
          <span aria-hidden="true" className="text-[12px] leading-none">
            {direction === "ascending" ? "↑" : "↓"}
          </span>
        )}
      </button>
    </th>
  )
}

function EquipmentGroupingHeader({
  grouping,
  value,
  rows,
  isLeafGroup,
}: {
  grouping: OperationalEquipmentGrouping
  value: string
  rows: OperationalRow[]
  isLeafGroup: boolean
}) {
  const systemId = value
  const kind = distributedSystemIds.has(systemId) ? "distributed" : "unit"

  function openSystem() {
    window.dispatchEvent(
      new CustomEvent("prototype:open-equipment-section", {
        detail: {
          section: kind === "distributed" ? "distributed" : "units",
          system: { id: systemId, kind },
        },
      }),
    )
  }

  return (
    <div
      className={`flex min-h-12 items-center gap-2 px-4 ${
        isLeafGroup ? "bg-gray-50" : ""
      }`}
    >
      {grouping === "system" ? (
        <>
        <EquipmentTypeIcon
          kind={kind === "distributed" ? "distributed" : "units"}
        />
        <button
          type="button"
          onClick={openSystem}
          className={`rounded-sm font-medium text-[#171717] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
            isLeafGroup ? "" : "text-base leading-6"
          }`}
        >
          {systemId}
        </button>
        </>
      ) : (
        <>
          <EquipmentTypeIcon kind={rows[0].section} />
          <h3
            className={`font-medium text-[#171717] ${
              isLeafGroup ? "" : "text-base leading-6"
            }`}
          >
            {value}
          </h3>
        </>
      )}
        <span className="text-[#757575]">{rows.length}</span>
    </div>
  )
}

function groupRows(rows: OperationalRow[], grouping: OperationalEquipmentGrouping) {
  const groups = rows.reduce((groups, row) => {
    const key =
      grouping === "system"
        ? (row.system ?? "Unassigned")
        : typeLabel(row.section)
    const group = groups.get(key) ?? []
    group.push(row)
    groups.set(key, group)
    return groups
  }, new Map<string, OperationalRow[]>())

  return Array.from(groups).sort(([left], [right]) => left.localeCompare(right))
}

function GroupedEquipmentTables({
  rows,
  groupingOrder,
  hiddenGroupings = groupingOrder,
  onOpenDetail,
  sort,
  onSort,
}: {
  rows: OperationalRow[]
  groupingOrder: OperationalEquipmentGrouping[]
  hiddenGroupings?: OperationalEquipmentGrouping[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
  sort: EquipmentSort
  onSort: (column: SortColumn) => void
}) {
  const [grouping, ...nestedGrouping] = groupingOrder
  const hiddenColumns = new Set(hiddenGroupings)

  if (!grouping) {
    return (
      <OperationalTable
        rows={sortOperationalRows(rows, sort)}
        showSystem
        showType
        onOpenDetail={onOpenDetail}
        sort={sort}
        onSort={onSort}
      />
    )
  }

  return (
    <div className="space-y-5">
      {groupRows(rows, grouping).map(([value, group]) => (
        <section
          key={`${grouping}-${value}`}
          className={
            nestedGrouping.length
              ? "space-y-0"
              : "overflow-hidden rounded-xl border border-[#e6e6e6] bg-white"
          }
        >
          <EquipmentGroupingHeader
            grouping={grouping}
            value={value}
            rows={group}
            isLeafGroup={nestedGrouping.length === 0}
          />
          {nestedGrouping.length ? (
            <GroupedEquipmentTables
              rows={group}
              groupingOrder={nestedGrouping}
              hiddenGroupings={hiddenGroupings}
              onOpenDetail={onOpenDetail}
              sort={sort}
              onSort={onSort}
            />
          ) : (
            <OperationalTable
              rows={sortOperationalRows(group, sort)}
              showSystem={!hiddenColumns.has("system")}
              showType={!hiddenColumns.has("type")}
              onOpenDetail={onOpenDetail}
              sort={sort}
              onSort={onSort}
              frameClassName="border-0 bg-white"
            />
          )}
        </section>
      ))}
    </div>
  )
}

function SystemLabel({ id }: { id: string }) {
  const kind = distributedSystemIds.has(id) ? "distributed" : "units"
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#525252]">
      <EquipmentTypeIcon kind={kind} />
      {id}
    </span>
  )
}

function EquipmentGroup({
  rows,
  section,
  showSystem,
  onOpenDetail,
}: {
  rows: OperationalRow[]
  section: EquipmentSectionId
  showSystem: boolean
  onOpenDetail: (target: EquipmentDetailTarget) => void
}) {
  const [open, setOpen] = useState(false)
  const attentionCount = rows.filter((row) => row.health !== "normal").length
  const headingId = `equipment-group-${section}-${rows[0]?.system ?? "all"}`

  return (
    <section className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-white">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={headingId}
        onClick={() => setOpen((value) => !value)}
        className="grid min-h-12 w-full grid-cols-[minmax(14rem,1fr)_minmax(10rem,0.75fr)_auto] items-center gap-4 px-4 text-left transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
      >
        <span className="inline-flex items-center gap-2 font-medium text-[#242424]">
          <EquipmentTypeIcon kind={section} />
          {pluralLabel(section)}{" "}
          <span className="text-[#757575]">{rows.length}</span>
        </span>
        <span
          className={`text-sm ${
            attentionCount ? "font-medium text-[#a24f00]" : "text-[#757575]"
          }`}
        >
          {attentionCount
            ? `${attentionCount} need attention`
            : "Operating normally"}
        </span>
        <Chevron open={open} />
      </button>
      {open && (
        <div id={headingId} className="border-t border-[#e6e6e6] p-3">
          <OperationalTable
            rows={sortByHealth(rows)}
            showSystem={false}
            showType
            onOpenDetail={onOpenDetail}
          />
        </div>
      )}
    </section>
  )
}

function GroupedEquipment({
  rows,
  showSystem,
  onOpenDetail,
}: {
  rows: OperationalRow[]
  showSystem: boolean
  onOpenDetail: (target: EquipmentDetailTarget) => void
}) {
  const systems = rows.reduce<Record<string, OperationalRow[]>>(
    (groups, row) => {
      const key = row.system ?? "Unassigned system"
      groups[key] = [...(groups[key] ?? []), row]
      return groups
    },
    {},
  )

  return (
    <div className="space-y-6">
      {Object.entries(systems).map(([system, systemRows]) => (
        <section key={system} className="space-y-2">
          {showSystem && <SystemLabel id={system} />}
          <div className="space-y-2">
            {leafSections.map((section) => {
              const sectionRows = systemRows.filter(
                (row) => row.section === section,
              )
              return sectionRows.length ? (
                <EquipmentGroup
                  key={section}
                  rows={sectionRows}
                  section={section}
                  showSystem={showSystem}
                  onOpenDetail={onOpenDetail}
                />
              ) : null
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

function RootTableStatus({
  row,
  section,
}: {
  row: OperationalRow
  section: EquipmentSectionId
}) {
  if (section === "chargers") {
    const charging =
      row.health === "warning" ||
      (row.health === "normal" && hash(row.id) % 3 === 0)
    const label =
      row.health === "offline"
        ? "Unavailable"
        : row.health === "critical"
          ? "Preparing"
          : charging
            ? `Charging · ${42 + (hash(row.id) % 39)}%`
            : "Available"
    const icon =
      row.health === "offline"
        ? "unavailable"
        : row.health === "critical"
          ? "preparing"
          : charging
            ? "charging"
            : "available"
    return (
      <span className="inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] text-[#242424]">
        <StatusIcon name={icon} className="size-4" />
        {label}
      </span>
    )
  }

  const label =
    row.health === "offline"
      ? "Unknown"
      : row.health === "critical"
        ? "Not ready"
        : row.health === "warning"
          ? section === "bess"
            ? "Charging"
            : "Ready to start"
          : section === "paralleling"
            ? "Operational"
            : section === "bess"
              ? "Discharging"
              : "Running"
  const dot =
    row.health === "offline"
      ? "bg-[#a7a7a7]"
      : row.health === "critical"
        ? "bg-[#f05a55]"
        : row.health === "warning"
          ? "bg-[#f4a51c]"
          : "bg-[#1dcc6e]"
  return (
    <span className="inline-flex h-7 items-center gap-2 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] text-[#242424]">
      <i className={`size-2 rounded-full ${dot}`} />
      {label}
    </span>
  )
}

function MiniProgress({
  value,
  tone = "green",
}: {
  value: number
  tone?: "green" | "amber"
}) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="h-1.5 w-12 overflow-hidden rounded-full bg-[#e6e6e6]">
        <i
          className={`block h-full rounded-full ${
            tone === "amber" ? "bg-[#f4a51c]" : "bg-[#1dcc6e]"
          }`}
          style={{ width: `${value}%` }}
        />
      </span>
      {value}%
    </span>
  )
}

function RootTableHeading({
  section,
  count,
}: {
  section: EquipmentSectionId
  count: number
}) {
  return (
    <div className="flex items-center gap-2">
      <EquipmentTypeIcon kind={section} />
      <h2 className="text-base font-medium text-[#171717]">
        {pluralLabel(section)}
      </h2>
      <span className="text-sm text-[#757575]">{count}</span>
    </div>
  )
}

function FullTable({
  rows,
  onOpenDetail,
}: {
  rows: OperationalRow[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
}) {
  const open = (row: OperationalRow) => onOpenDetail(row)
  const sectionRows = (section: EquipmentSectionId) =>
    rows
      .filter((row) => row.section === section)
      .sort(
        (left, right) =>
          healthMeta(left.health).priority -
            healthMeta(right.health).priority ||
          left.id.localeCompare(right.id),
      )
  const rowClass =
    "h-12 cursor-pointer transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
  const idCell = (row: OperationalRow) => (
    <td className="px-4">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          open(row)
        }}
        className="font-medium text-[#171717] hover:underline"
      >
        {row.id}
      </button>
    </td>
  )

  const chargers = sectionRows("chargers")
  const gensets = sectionRows("gensets")
  const bess = sectionRows("bess")
  const panels = sectionRows("paralleling")

  return (
    <div className="space-y-8">
      {chargers.length > 0 && (
        <section className="space-y-3">
          <RootTableHeading section="chargers" count={chargers.length} />
          <div className="overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="h-11 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
                <tr>
                  <th className="px-4 font-normal">Charger ID</th>
                  <th className="px-4 font-normal">Status</th>
                  <th className="px-4 font-normal">Current power</th>
                  <th className="px-4 font-normal">Incidents now</th>
                  <th className="px-4 font-normal">Connection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e6e6]">
                {chargers.map((row) => (
                  <tr
                    key={row.id}
                    tabIndex={0}
                    onClick={() => open(row)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        open(row)
                      }
                    }}
                    className={rowClass}
                  >
                    {idCell(row)}
                    <td className="px-4">
                      <RootTableStatus row={row} section="chargers" />
                    </td>
                    <td className="px-4 text-[#454545]">
                      {row.health === "offline"
                        ? "—"
                        : `${80 + (hash(row.id) % 81)} kW`}
                    </td>
                    <td className="px-4">
                      <IncidentValue row={row} />
                    </td>
                    <td className="px-4">
                      <ConnectionBadge connection={row.connection} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {gensets.length > 0 && (
        <section className="space-y-3">
          <RootTableHeading section="gensets" count={gensets.length} />
          <div className="overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white">
            <table className="w-full min-w-[940px] border-collapse text-left text-sm">
              <thead className="h-11 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
                <tr>
                  <th className="px-4 font-normal">Genset ID</th>
                  <th className="px-4 font-normal">Mode</th>
                  <th className="px-4 font-normal">Power</th>
                  <th className="px-4 font-normal">Load</th>
                  <th className="px-4 font-normal">Service in</th>
                  <th className="px-4 font-normal">Incidents</th>
                  <th className="px-4 font-normal">Connection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e6e6]">
                {gensets.map((row) => {
                  const value = 24 + (hash(row.id) % 64)
                  return (
                    <tr
                      key={row.id}
                      tabIndex={0}
                      onClick={() => open(row)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          open(row)
                        }
                      }}
                      className={rowClass}
                    >
                      {idCell(row)}
                      <td className="px-4">
                        <RootTableStatus row={row} section="gensets" />
                      </td>
                      <td className="px-4 text-[#454545]">
                        {row.health === "offline"
                          ? "—"
                          : `${100 + (hash(row.id) % 181)} kW`}
                      </td>
                      <td className="px-4">
                        <MiniProgress value={value} />
                      </td>
                      <td className="px-4 text-[#454545]">
                        {36 + (hash(row.id) % 320)} h
                      </td>
                      <td className="px-4">
                        <IncidentValue row={row} />
                      </td>
                      <td className="px-4">
                        <ConnectionBadge connection={row.connection} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {bess.length > 0 && (
        <section className="space-y-3">
          <RootTableHeading section="bess" count={bess.length} />
          <div className="overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white">
            <table className="w-full min-w-[1060px] border-collapse text-left text-sm">
              <thead className="h-11 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
                <tr>
                  <th className="px-4 font-normal">BESS ID</th>
                  <th className="px-4 font-normal">Mode</th>
                  <th className="px-4 font-normal">State of charge</th>
                  <th className="px-4 font-normal">Runtime left</th>
                  <th className="px-4 font-normal">Power</th>
                  <th className="px-4 font-normal">Battery health</th>
                  <th className="px-4 font-normal">Incidents</th>
                  <th className="px-4 font-normal">Connection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e6e6]">
                {bess.map((row) => {
                  const soc = 18 + (hash(row.id) % 78)
                  return (
                    <tr
                      key={row.id}
                      tabIndex={0}
                      onClick={() => open(row)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          open(row)
                        }
                      }}
                      className={rowClass}
                    >
                      {idCell(row)}
                      <td className="px-4">
                        <RootTableStatus row={row} section="bess" />
                      </td>
                      <td className="px-4">
                        <MiniProgress
                          value={soc}
                          tone={soc > 82 ? "amber" : "green"}
                        />
                      </td>
                      <td className="px-4 text-[#454545]">
                        {row.health === "offline"
                          ? "—"
                          : `${1 + (hash(row.id) % 5)} h ${10 + (hash(row.id) % 50)} m`}
                      </td>
                      <td className="px-4 text-[#454545]">
                        {row.health === "offline"
                          ? "—"
                          : `${
                              row.health === "warning" ? "−" : "+"
                            }${80 + (hash(row.id) % 121)} kW`}
                      </td>
                      <td className="px-4 text-[#454545]">
                        {79 + (hash(row.id) % 20)}%
                      </td>
                      <td className="px-4">
                        <IncidentValue row={row} />
                      </td>
                      <td className="px-4">
                        <ConnectionBadge connection={row.connection} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {panels.length > 0 && (
        <section className="space-y-3">
          <RootTableHeading section="paralleling" count={panels.length} />
          <div className="overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white">
            <table className="w-full min-w-[1040px] border-collapse text-left text-sm">
              <thead className="h-11 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
                <tr>
                  <th className="px-4 font-normal">Panel ID</th>
                  <th className="px-4 font-normal">Status</th>
                  <th className="px-4 font-normal">Control</th>
                  <th className="px-4 font-normal">Breaker wear</th>
                  <th className="px-4 font-normal">Max temp</th>
                  <th className="px-4 font-normal">Service in</th>
                  <th className="px-4 font-normal">Incidents</th>
                  <th className="px-4 font-normal">Connection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e6e6]">
                {panels.map((row) => {
                  const wear = 24 + (hash(row.id) % 70)
                  return (
                    <tr
                      key={row.id}
                      tabIndex={0}
                      onClick={() => open(row)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          open(row)
                        }
                      }}
                      className={rowClass}
                    >
                      {idCell(row)}
                      <td className="px-4">
                        <RootTableStatus row={row} section="paralleling" />
                      </td>
                      <td className="px-4 text-[#454545]">
                        {hash(row.id) % 2 ? "Auto" : "Manual"}
                      </td>
                      <td className="px-4">
                        <MiniProgress
                          value={wear}
                          tone={wear > 80 ? "amber" : "green"}
                        />
                      </td>
                      <td className="px-4 text-[#454545]">
                        {58 + (hash(row.id) % 28)} °C
                      </td>
                      <td className="px-4 text-[#454545]">
                        {12 + (hash(row.id) % 210)} d
                      </td>
                      <td className="px-4">
                        <IncidentValue row={row} />
                      </td>
                      <td className="px-4">
                        <ConnectionBadge connection={row.connection} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}

function CardTone({ health }: { health: Health }) {
  return health === "offline" || health === "critical"
    ? "border-[#efcecb] bg-[#fff4f3]"
    : health === "warning"
      ? "border-[#eadcb9] bg-[#fffbed]"
      : "border-[#e6e6e6] bg-white"
}

function SystemOverviewCard({
  id,
  kind,
  rows,
  onOpenDetail,
  onOpenSection,
}: {
  id: string
  kind: "distributed" | "units"
  rows: OperationalRow[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
  onOpenSection: (
    section: EquipmentSectionId,
    system: { id: string kind: "unit" | "distributed" },
  ) => void
}) {
  const worst = [...rows].sort(
    (left, right) =>
      healthMeta(left.health).priority - healthMeta(right.health).priority,
  )[0]
  const attentionCount = rows.filter((row) => row.health !== "normal").length
  const detailTarget = equipmentDetailTargets(kind).find(
    (target) => target.id === id && target.site === rows[0]?.site,
  )
  const load = 28 + (hash(id) % 65)
  const reserve = 100 - load
  const summary =
    kind === "distributed"
      ? `480 V bus · ${load}% load · ${
          attentionCount ? "N-1 exceeded" : "N-1 ready"
        } · reserve ${reserve}%`
      : `${rows.filter((row) => row.section === "chargers").length} chargers · ${
          attentionCount ? `${attentionCount} need attention` : "N-1 ready"
        }`

  return (
    <article className="rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => detailTarget && onOpenDetail(detailTarget)}
            className="inline-flex items-center gap-2 text-left text-[18px] font-medium tracking-[-0.015em] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
          >
            <EquipmentTypeIcon kind={kind} />
            {id}
          </button>
          <span
            className={`inline-flex items-center gap-1.5 text-[14px] ${
              attentionCount ? "text-[#a52b28]" : "text-[#138646]"
            }`}
          >
            <i
              className={`size-2 rounded-full ${healthMeta(worst.health).className}`}
            />
            {attentionCount
              ? `${attentionCount} need attention`
              : "Operational"}
          </span>
        </div>
        <p className="text-right text-[13px] leading-5 text-[#757575]">
          {summary}
        </p>
      </header>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {leafSections.map((section) => {
          const sectionRows = rows.filter((row) => row.section === section)
          if (!sectionRows.length) return null
          const sectionWorst = [...sectionRows].sort(
            (left, right) =>
              healthMeta(left.health).priority -
              healthMeta(right.health).priority,
          )[0]
          const sectionAttention = sectionRows.filter(
            (row) => row.health !== "normal",
          ).length
          const statusLabel = sectionAttention
            ? `${sectionAttention} ${healthMeta(sectionWorst.health).label.toLowerCase()}`
            : "All healthy"
          return (
            <button
              key={section}
              type="button"
              onClick={() =>
                onOpenSection(section, {
                  id,
                  kind: kind === "distributed" ? "distributed" : "unit",
                })
              }
              className={`min-h-28 rounded-xl border p-3 text-left transition-colors hover:brightness-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${CardTone({ health: sectionWorst.health })}`}
            >
              <span className="inline-flex items-center gap-2 text-[15px] font-medium text-[#505050]">
                <EquipmentTypeIcon kind={section} />
                {section === "paralleling" ? "Panel" : pluralLabel(section)}
              </span>
              <span className="mt-2 block text-[24px] font-medium leading-7 text-[#171717]">
                {sectionRows.length}
              </span>
              <span
                className={`mt-1 block text-[13px] ${
                  sectionAttention
                    ? healthMeta(sectionWorst.health).label === "Attention"
                      ? "text-[#945c00]"
                      : "text-[#a52b28]"
                    : "text-[#757575]"
                }`}
              >
                {statusLabel}
              </span>
            </button>
          )
        })}
      </div>
    </article>
  )
}

function SystemCards({
  rows,
  parent,
  onOpenDetail,
  onOpenSection,
}: {
  rows: OperationalRow[]
  parent?: EquipmentDetailTarget
  onOpenDetail: (target: EquipmentDetailTarget) => void
  onOpenSection: (
    section: EquipmentSectionId,
    system: { id: string kind: "unit" | "distributed" },
  ) => void
}) {
  const systems = rows.reduce<Record<string, OperationalRow[]>>(
    (groups, row) => {
      const key = row.system ?? parent?.id ?? "Unassigned system"
      groups[key] = [...(groups[key] ?? []), row]
      return groups
    },
    {},
  )
  return (
    <div className="space-y-6">
      {Object.entries(systems).map(([id, systemRows]) => (
        <SystemOverviewCard
          key={id}
          id={id}
          kind={distributedSystemIds.has(id) ? "distributed" : "units"}
          rows={systemRows}
          onOpenDetail={onOpenDetail}
          onOpenSection={onOpenSection}
        />
      ))}
    </div>
  )
}

type ExplorerSelection = { system: string section?: EquipmentSectionId }

const sectionOrder = new Map<EquipmentSectionId, number>(
  leafSections.map((section, index) => [section, index]),
)

function ProblemCounter({ rows }: { rows: OperationalRow[] }) {
  const problems = rows.filter((row) => row.health !== "normal")
  if (!problems.length) return null
  const worst = [...problems].sort(
    (left, right) =>
      healthMeta(left.health).priority - healthMeta(right.health).priority,
  )[0]
  const danger = worst.health === "offline" || worst.health === "critical"
  return (
    <span
      className={`inline-flex min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-medium leading-5 ${
        danger ? "bg-[#fff0ef] text-[#bb2d28]" : "bg-[#fff8e7] text-[#9a6200]"
      }`}
    >
      {problems.length}
    </span>
  )
}

function TreeChevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-3.5 shrink-0 transition-transform ${
        open ? "rotate-90" : ""
      }`}
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 5.5 5 4.5-5 4.5"
      />
    </svg>
  )
}

function ExplorerAssetList({
  rows,
  onOpenDetail,
  grouped,
}: {
  rows: OperationalRow[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
  grouped: boolean
}) {
  const sorted = (items: OperationalRow[]) =>
    [...items].sort(
      (left, right) =>
        healthMeta(left.health).priority - healthMeta(right.health).priority ||
        left.id.localeCompare(right.id),
    )
  const problemRows = sorted(rows.filter((row) => row.health !== "normal"))
  const normalRows = rows.filter((row) => row.health === "normal")
  const renderRow = (row: OperationalRow) => (
    <button
      key={row.id}
      type="button"
      onClick={() => onOpenDetail(row)}
      className="grid min-h-12 w-full grid-cols-[minmax(13rem,1.35fr)_minmax(8rem,0.7fr)_minmax(8rem,0.7fr)_minmax(7rem,0.55fr)_minmax(8rem,0.7fr)] items-center gap-4 px-4 text-left text-sm transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
    >
      <span className="font-medium text-[#171717] hover:underline">
        {row.id}
      </span>
      <span className="inline-flex items-center gap-2 whitespace-nowrap text-[#454545]">
        <EquipmentTypeIcon kind={row.section} />
        {typeLabel(row.section)}
      </span>
      <HealthBadge health={row.health} />
      <IncidentValue row={row} />
      <ConnectionBadge connection={row.connection} />
    </button>
  )
  const groupLabel = (label: string) => (
    <div className="border-y border-[#e6e6e6] bg-[#fafafa] px-4 py-2 text-[13px] font-medium text-[#525252]">
      {label}
    </div>
  )

  return (
    <div className="overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white">
      <div className="min-w-[760px]">
        <div className="grid h-11 grid-cols-[minmax(13rem,1.35fr)_minmax(8rem,0.7fr)_minmax(8rem,0.7fr)_minmax(7rem,0.55fr)_minmax(8rem,0.7fr)] items-center gap-4 border-b border-[#e6e6e6] px-4 text-[13px] text-[#757575]">
          <span>ID</span>
          <span>Type</span>
          <span>Health</span>
          <span>Incidents</span>
          <span>Connection</span>
        </div>
        {grouped && problemRows.length > 0 && groupLabel("Needs attention")}
        {problemRows.map(renderRow)}
        {grouped
          ? leafSections.map((section) => {
              const items = normalRows
                .filter((row) => row.section === section)
                .sort((left, right) => left.id.localeCompare(right.id))
              return items.length ? (
                <div key={section}>
                  {groupLabel(pluralLabel(section))}
                  {items.map(renderRow)}
                </div>
              ) : null
            })
          : normalRows
              .sort((left, right) => left.id.localeCompare(right.id))
              .map(renderRow)}
      </div>
    </div>
  )
}

function ExplorerView({
  rows,
  parent,
  onOpenDetail,
}: {
  rows: OperationalRow[]
  parent?: EquipmentDetailTarget
  onOpenDetail: (target: EquipmentDetailTarget) => void
}) {
  const systems = useMemo(
    () =>
      Object.entries(
        rows.reduce<Record<string, OperationalRow[]>>((groups, row) => {
          const key = row.system ?? parent?.id ?? "Unassigned system"
          groups[key] = [...(groups[key] ?? []), row]
          return groups
        }, {}),
      ).sort(([leftId, leftRows], [rightId, rightRows]) => {
        const leftProblems = leftRows.filter(
          (row) => row.health !== "normal",
        ).length
        const rightProblems = rightRows.filter(
          (row) => row.health !== "normal",
        ).length
        return rightProblems - leftProblems || leftId.localeCompare(rightId)
      }),
    [parent?.id, rows],
  )
  const [selected, setSelected] = useState<ExplorerSelection>(() => ({
    system: systems[0]?.[0] ?? "",
  }))
  const [openSystems, setOpenSystems] = useState<Record<string, boolean>>({})
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const selectedSystem =
    systems.find(([id]) => id === selected.system) ?? systems[0]
  const selectedRows = selectedSystem
    ? selectedSystem[1].filter(
        (row) => !selected.section || row.section === selected.section,
      )
    : []
  const selectionTitle = selected.section
    ? `${selectedSystem?.[0] ?? "Equipment"} · ${pluralLabel(selected.section)}`
    : (selectedSystem?.[0] ?? "Equipment")

  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)] [&>section>div:first-child]:mb-6 [&>section>div:first-child>h2]:font-['Inter_Variable',Arial,sans-serif] [&>section>div:first-child>h2]:text-base [&>section>div:first-child>h2]:leading-6">
      <aside className="py-1">
        <div
          role="tree"
          aria-label="Equipment diagnostic tree"
          className="space-y-1"
        >
          {systems.map(([system, systemRows], systemIndex) => {
            const systemOpen = openSystems[system] ?? systemIndex === 0
            const systemKind = distributedSystemIds.has(system)
              ? "distributed"
              : "units"
            return (
              <div key={system}>
                <div
                  className={`flex min-h-9 items-center gap-1 rounded-md pr-2 ${
                    selected.system === system && !selected.section
                      ? "bg-[#f2f2f2]"
                      : "hover:bg-[#fafafa]"
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`${
                      systemOpen ? "Collapse" : "Expand"
                    } ${system}`}
                    aria-expanded={systemOpen}
                    onClick={() =>
                      setOpenSystems((value) => ({
                        ...value,
                        [system]: !systemOpen,
                      }))
                    }
                    className="grid size-8 place-items-center rounded-md text-[#666] hover:bg-[#ececec]"
                  >
                    <TreeChevron open={systemOpen} />
                  </button>
                  <button
                    type="button"
                    role="treeitem"
                    aria-selected={
                      selected.system === system && !selected.section
                    }
                    onClick={() => setSelected({ system })}
                    className="flex min-w-0 flex-1 items-center gap-2 text-left text-sm font-medium"
                  >
                    <EquipmentTypeIcon kind={systemKind} />
                    <span className="truncate">{system}</span>
                    <span className="ml-auto">
                      <ProblemCounter rows={systemRows} />
                    </span>
                  </button>
                </div>
                {systemOpen && (
                  <div className="ml-5 border-l border-[#e6e6e6] pl-2">
                    {leafSections.map((section) => {
                      const sectionRows = systemRows.filter(
                        (row) => row.section === section,
                      )
                      if (!sectionRows.length) return null
                      const key = `${system}-${section}`
                      const sectionOpen = openSections[key] ?? false
                      return (
                        <div key={section}>
                          <div
                            className={`flex min-h-8 items-center gap-1 rounded-md pr-2 ${
                              selected.system === system &&
                              selected.section === section
                                ? "bg-[#f2f2f2]"
                                : "hover:bg-[#fafafa]"
                            }`}
                          >
                            <button
                              type="button"
                              aria-label={`${
                                sectionOpen ? "Collapse" : "Expand"
                              } ${pluralLabel(section)}`}
                              aria-expanded={sectionOpen}
                              onClick={() =>
                                setOpenSections((value) => ({
                                  ...value,
                                  [key]: !sectionOpen,
                                }))
                              }
                              className="grid size-7 place-items-center rounded-md text-[#666] hover:bg-[#ececec]"
                            >
                              <TreeChevron open={sectionOpen} />
                            </button>
                            <button
                              type="button"
                              role="treeitem"
                              aria-selected={
                                selected.system === system &&
                                selected.section === section
                              }
                              onClick={() => setSelected({ system, section })}
                              className="flex min-w-0 flex-1 items-center gap-2 text-left text-[13px] text-[#454545]"
                            >
                              <EquipmentTypeIcon kind={section} />
                              <span className="truncate">
                                {pluralLabel(section)}
                              </span>
                              <span className="ml-auto">
                                <ProblemCounter rows={sectionRows} />
                              </span>
                            </button>
                          </div>
                          {sectionOpen && (
                            <div className="ml-4 border-l border-[#efefef] py-0.5 pl-2">
                              {[...sectionRows]
                                .sort(
                                  (left, right) =>
                                    healthMeta(left.health).priority -
                                      healthMeta(right.health).priority ||
                                    left.id.localeCompare(right.id),
                                )
                                .map((row) => (
                                  <button
                                    key={row.id}
                                    type="button"
                                    role="treeitem"
                                    onClick={() => onOpenDetail(row)}
                                    className="flex min-h-7 w-full items-center gap-2 rounded-md px-2 text-left text-[12px] text-[#454545] hover:bg-[#fafafa]"
                                  >
                                    <i
                                      className={`size-1.5 rounded-full ${healthMeta(row.health).className}`}
                                    />
                                    <span className="truncate">{row.id}</span>
                                  </button>
                                ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </aside>
      <section className="min-w-0">
        <div className="mb-3">
          <h2 className="font-medium text-[#171717]">{selectionTitle}</h2>
          <p className="mt-1 text-[13px] text-[#757575]">
            {selected.section
              ? `${selectedRows.length} ${pluralLabel(selected.section).toLowerCase()}`
              : "Problems first, then equipment grouped by type"}
          </p>
        </div>
        <ExplorerAssetList
          rows={selectedRows}
          onOpenDetail={onOpenDetail}
          grouped={!selected.section}
        />
      </section>
    </div>
  )
}

export default function OperationalEquipmentList({
  siteId,
  parent,
  onOpenDetail,
  healthFilter,
  onHealthFilterChange,
  view,
  groupBySystem = true,
  groupByType = false,
  groupingOrder = ["system", "type"],
  hideNormalWhenGrouped = false,
}: OperationalEquipmentListProps) {
  const [sort, setSort] = useState<EquipmentSort>(null)
  const rows = useMemo(() => {
    const site = siteId ? getSite(siteId) : undefined
    return leafSections
      .flatMap((section) => equipmentDetailTargets(section))
      .filter((target) => !site || target.site === site.name)
      .filter((target) => !parent || target.system === parent.id)
      .map((target) => ({ ...target, ...operationalState(target) }))
  }, [siteId, parent?.id])
  const showSystem = !parent
  const availableFilters = ([
    "critical",
    "warning",
    "normal",
  ] as const).filter((health) => rows.some((row) => row.health === health))
  const defaultFilter = availableFilters.includes("critical")
    ? "critical"
    : availableFilters.includes("warning")
      ? "warning"
      : "all"
  const activeFilter =
    healthFilter === "all" || availableFilters.includes(healthFilter)
      ? healthFilter
      : defaultFilter
  const visibleRows =
    activeFilter === "all"
      ? sortByHealth(rows)
      : rows
          .filter((row) => row.health === activeFilter)
          .sort((left, right) => left.id.localeCompare(right.id))
  const healthGroups = (["critical", "warning", "normal"] as const)
    .map((health) => ({
      health,
      rows: rows
        .filter((row) => row.health === health)
        .sort((left, right) => left.id.localeCompare(right.id)),
    }))
    .filter((group) => group.rows.length > 0)
  const activeGroupingOrder = groupingOrder.filter(
    (grouping) =>
      (grouping === "system" && groupBySystem) ||
      (grouping === "type" && groupByType),
  )
  const toggleSort = (column: SortColumn) => {
    setSort((current) =>
      current?.column === column
        ? {
            column,
            direction:
              current.direction === "ascending" ? "descending" : "ascending",
          }
        : { column, direction: "ascending" },
    )
  }

  useEffect(() => {
    if (activeFilter !== healthFilter) onHealthFilterChange(activeFilter)
  }, [activeFilter, healthFilter, onHealthFilterChange])
  return (
    <section className="w-full">
      {view === "segment" ? (
        <>
          <div
            role="group"
            aria-label="Equipment health filter"
            className="mb-4 inline-flex max-w-full flex-wrap rounded-md bg-[#f5f5f5] p-0.5"
          >
            <button
              type="button"
              aria-pressed={activeFilter === "all"}
              onClick={() => onHealthFilterChange("all")}
              className={`h-8 rounded-md px-3 text-[14px] leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                activeFilter === "all"
                  ? "bg-white font-medium text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                  : "text-[#525252] hover:text-[#0a0a0a]"
              }`}
            >
              <span>All</span>
              <span className="ml-1 text-[#757575]">{rows.length}</span>
            </button>
            {availableFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => onHealthFilterChange(filter)}
                className={`h-8 rounded-md px-3 text-[14px] leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  activeFilter === filter
                    ? "bg-white font-medium text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                    : "text-[#525252] hover:text-[#0a0a0a]"
                }`}
              >
                <span>{healthMeta(filter).label}</span>
                <span className="ml-1 text-[#757575]">
                  {rows.filter((row) => row.health === filter).length}
                </span>
              </button>
            ))}
          </div>
          {activeGroupingOrder.length ? (
            <GroupedEquipmentTables
              rows={visibleRows}
              groupingOrder={activeGroupingOrder}
              onOpenDetail={onOpenDetail}
              sort={sort}
              onSort={toggleSort}
            />
          ) : (
            <OperationalTable
              rows={sortOperationalRows(visibleRows, sort)}
              showSystem={showSystem}
              showType
              onOpenDetail={onOpenDetail}
              sort={sort}
              onSort={toggleSort}
            />
          )}
        </>
      ) : (
        <div className="space-y-5">
          {healthGroups
            .filter(
              (group) => !hideNormalWhenGrouped || group.health !== "normal",
            )
            .map((group) => (
              <section key={group.health}>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[14px] font-medium leading-5 text-[#171717]">
                    {healthMeta(group.health).label}
                  </h2>
                  <span className="inline-flex h-5 items-center rounded-md bg-[#f2f2f2] px-1.5 text-[12px] font-medium leading-4 text-[#525252]">
                    {group.rows.length}
                  </span>
                </div>
                <div className="mt-3">
                  <OperationalTable
                    rows={sortOperationalRows(group.rows, sort)}
                    showSystem={showSystem}
                    showType
                    onOpenDetail={onOpenDetail}
                    sort={sort}
                    onSort={toggleSort}
                  />
                </div>
              </section>
            ))}
        </div>
      )}
    </section>
  )
}
