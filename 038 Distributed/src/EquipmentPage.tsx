import { useMemo, useState } from "react"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"
import StatusIcon from "@/StatusIcon"
import {
  getPartner,
  partners,
  type EquipmentAsset,
  type EquipmentStatus,
  type PartnerId,
} from "@/prototypeData"

export type EquipmentSectionId = EquipmentKind
export type EquipmentSystemFilter = {
  id: string
  kind: "unit" | "distributed"
}
export type EquipmentDetailTarget = {
  section: EquipmentSectionId
  id: string
  partner: string
  partnerId: PartnerId
  site: string
  address: string
  system?: string
  parentKind?: "unit" | "distributed"
  status: EquipmentStatus
  chargerCount?: number
  index: number
}

type EquipmentPageProps = {
  activeSection: EquipmentSectionId
  onNavigate: (section: EquipmentSectionId) => void
  onOpenSites: () => void
  onOpenDetail: (target: EquipmentDetailTarget) => void
  systemFilter?: EquipmentSystemFilter | null
  onClearSystemFilter?: () => void
}
type TableRow = {
  id: string
  partner: string
  partnerId: PartnerId
  site: string
  address: string
  system?: string
  parentKind?: "unit" | "distributed"
  status: EquipmentStatus
  chargerCount?: number
  index: number
}
type NavigationItem = { id: EquipmentSectionId label: string }
type FilterId = "all" | "incidents"

const systemItems: NavigationItem[] = [
  { id: "units", label: "Integrated units" },
  { id: "distributed", label: "Distributed systems" },
]
const equipmentItems: NavigationItem[] = [
  { id: "chargers", label: "Chargers" },
  { id: "gensets", label: "Gensets" },
  { id: "bess", label: "BESS" },
  { id: "paralleling", label: "Paralleling panels" },
]
const labels: Record<EquipmentSectionId, string> = {
  units: "Integrated units",
  distributed: "Distributed systems",
  chargers: "Chargers",
  gensets: "Gensets",
  bess: "BESS",
  paralleling: "Paralleling panels",
}
const singularLabels: Record<Exclude<EquipmentSectionId, "units" | "distributed">, string> =
  {
    chargers: "Charger ID",
    gensets: "Genset ID",
    bess: "BESS ID",
    paralleling: "Panel ID",
  }

function titleCount(count: number, section: EquipmentSectionId) {
  if (section === "units") return `${count} units`
  if (section === "distributed") return `${count} distributed systems`
  if (section === "chargers") return `${count} Chargers`
  if (section === "gensets") return `${count} Gensets`
  if (section === "bess") return `${count} BESSes`
  return `${count} Paralleling panels`
}

function rowsForSection(section: EquipmentSectionId): TableRow[] {
  const records: Omit<TableRow, "index">[] = []
  if (section === "units") {
    const acme = getPartner("acme")
    acme.sites.forEach((site) =>
      site.integratedUnits.forEach((unit) =>
        records.push({
          id: unit.id,
          partner: acme.name,
          partnerId: acme.id,
          site: site.name,
          address: site.address,
          status: unit.status,
          chargerCount: unit.chargerCount,
        }),
      ),
    )
  } else if (section === "distributed") {
    partners
      .filter((partner) => partner.id !== "acme")
      .forEach((partner) =>
        partner.sites.forEach((site) =>
          site.distributedSystems.forEach((system) =>
            records.push({
              id: system.id,
              partner: partner.name,
              partnerId: partner.id,
              site: site.name,
              address: site.address,
              status: system.status,
            }),
          ),
        ),
      )
  } else {
    if (section === "chargers" || section === "gensets") {
      const acme = getPartner("acme")
      acme.sites.forEach((site) =>
        site.integratedUnits.forEach((unit, unitIndex) => {
          const assetCount = section === "chargers" ? unit.chargerCount : 1
          Array.from({ length: assetCount }, (_, assetIndex) =>
            records.push({
              id: `${
                section === "chargers" ? "CH" : "GS"
              }-${site.id.replace(/[^a-z0-9]+/gi, "-").toUpperCase()}-${String(unitIndex + 1).padStart(2, "0")}-${String(assetIndex + 1).padStart(2, "0")}`,
              partner: acme.name,
              partnerId: acme.id,
              site: site.name,
              address: site.address,
              system: unit.id,
              parentKind: "unit",
              status: section === "chargers" ? "available" : "running",
            }),
          )
        }),
      )
    }
    partners
      .filter((partner) => partner.id !== "acme")
      .forEach((partner) =>
        partner.sites.forEach((site) =>
          site.distributedSystems.forEach((system) => {
            const assets: EquipmentAsset[] =
              section === "chargers"
                ? system.chargers
                : section === "gensets"
                  ? system.gensets
                  : section === "bess"
                    ? system.bess
                    : [system.parallelingPanel]
            assets.forEach((asset) =>
              records.push({
                id: asset.id,
                partner: partner.name,
                partnerId: partner.id,
                site: site.name,
                address: site.address,
                system: system.id,
                parentKind: "distributed",
                status: asset.status,
              }),
            )
          }),
        ),
      )
  }
  return records.map((record, index) => ({ ...record, index }))
}

export function equipmentDetailTargets(
  section: EquipmentSectionId,
): EquipmentDetailTarget[] {
  return rowsForSection(section).map((row) => ({ ...row, section }))
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 text-[#8a8a8a]"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="8" cy="8" r="5.75" />
      <path strokeLinecap="round" d="M8 7.1v3.15M8 5.2h.01" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="8.75" cy="8.75" r="4.75" />
      <path strokeLinecap="round" d="m12.35 12.35 3.3 3.3" />
    </svg>
  )
}
function FilterIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" d="M4 5h12M6.7 10h6.6M9 15h2" />
    </svg>
  )
}
function ExportIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 3v8m0 0 3-3m-3 3L7 8M4.5 12.5v2.75A1.75 1.75 0 0 0 6.25 17h7.5a1.75 1.75 0 0 0 1.75-1.75V12.5"
      />
    </svg>
  )
}
function ViewIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path strokeLinecap="round" d="M4 5h12M4 10h12M4 15h12" />
      <circle cx="6" cy="5" r=".6" fill="currentColor" />
      <circle cx="6" cy="10" r=".6" fill="currentColor" />
      <circle cx="6" cy="15" r=".6" fill="currentColor" />
    </svg>
  )
}

function OnlineBadge() {
  return (
    <span className="inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] leading-5 text-[#13bd66]">
      <StatusIcon name="online" />
      Online
    </span>
  )
}
function SpinnerIcon({ size = "size-5" }: { size?: string }) {
  return <StatusIcon name="charging" className={size} />
}
function AvailabilityIcon({ size = "size-5" }: { size?: string }) {
  return <StatusIcon name="available" className={size} />
}

function PreparingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#1DCC6E"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10Z"
        fill="#1DCC6E"
      />
      <path
        d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
        fill="#1DCC6E"
      />
    </svg>
  )
}

function UnavailableIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0"
      fill="#757575"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          clipRule="evenodd"
          d="m21.6368 21.6348c-.3515.3515-.9214.3515-1.2728 0l-18.00003-17.99997c-.35147-.35147-.35147-.92132 0-1.27279.35148-.35147.92132-.35147 1.2728 0l18.00003 17.99996c.3514.3515.3514.9214 0 1.2728z"
          fillRule="evenodd"
        />
        <path d="m18.3356 19.6062c.3275-.273.6371-.5667.9267-.8791.3586-.3869.6867-.8025.9805-1.2431.2757-.4136.164-.9724-.2496-1.2481-.4135-.2758-.9723-.164-1.2481.2495-.2404.3607-.5091.7011-.8029 1.018-.2743.2959-.5704.5713-.8858.8236z" />
        <path d="m5.67175 6.94229c.20029-.25034.41514-.48857.64327-.7134.3206-.31596.66733-.60536 1.03661-.86466.40678-.28563.505-.84695.21936-1.25374s-.84696-.505-1.25375-.21936c-.45106.31672-.87439.67007-1.2657 1.05572-.23109.22775-.45105.46679-.65898.71625z" />
        <path d="m12.0004 21.8983c.5921 0 1.1727-.052 1.7374-.1521.4895-.0867.8159-.5537.7292-1.0432-.0867-.4894-.5537-.8159-1.0431-.7292-.4616.0818-.9372.1245-1.4235.1245-.4636 0-.9174-.0388-1.3586-.1132-.4901-.0827-.95446.2475-1.03716.7377-.0827.4901.24759.9545.73776 1.0372.5397.091 1.0936.1383 1.658.1383z" />
        <path d="m6.27058 20.0726c.40513.288.96701.193 1.25498-.2122.28798-.4051.193-.967-.21214-1.2549-.7425-.5278-1.39237-1.1777-1.92014-1.9202-.28798-.4051-.84986-.5001-1.25499-.2121-.40514.2879-.50012.8498-.21214 1.255.64447.9066 1.43775 1.6999 2.34443 2.3444z" />
        <path d="m2.23877 13.6564c.0827.4901.54707.8204 1.0372.7377s.82041-.5471.73771-1.0372c-.07443-.4412-.11329-.895-.11329-1.3586 0-.4679.03958-.9258.11538-1.3708.08345-.49-.24611-.95489-.73611-1.03835s-.95488.24611-1.03834.73615c-.09273.5444-.14093 1.1034-.14093 1.673 0 .5644.04732 1.1184.13838 1.6581z" />
        <path d="m19.9979 13.2914c-.0787.4908.2554.9524.7462 1.0311.4908.0786.9524-.2554 1.0311-.7462.0824-.5144.1252-1.0415.1252-1.578 0-.5643-.0473-1.1183-.1384-1.658-.0827-.49013-.5471-.82041-1.0372-.73771s-.8204.54711-.7377 1.03721c.0744.4411.1133.895.1133 1.3585 0 .4407-.0351.8726-.1025 1.2931z" />
        <path d="m18.6075 7.31137c.288.40514.8499.50012 1.255.21214.4051-.28797.5001-.84985.2121-1.25499-.6444-.90667-1.4377-1.69996-2.3444-2.34442-.4051-.28798-.967-.193-1.255.21214-.288.40513-.193.96701.2122 1.25498.7425.52778 1.3923 1.17765 1.9201 1.92015z" />
        <path d="m13.3589 4.01163c.4902.0827.9545-.24758 1.0372-.73771s-.2475-.9545-.7377-1.0372c-.5397-.09107-1.0937-.13838-1.658-.13838-.5589 0-1.1076.0464-1.6424.13575-.49025.08191-.82128.54575-.73937 1.03601s.54577.82129 1.03597.73938c.4372-.07303.8867-.11114 1.3458-.11114.4636 0 .9174.03885 1.3585.11329z" />
      </g>
    </svg>
  )
}

function StateBadge({
  status,
  section,
  index,
}: {
  status: EquipmentStatus
  section: EquipmentSectionId
  index: number
}) {
  const chargerState = [
    "Preparing",
    "Unavailable",
    `Charging · ${46 + (index % 3) * 9}%`,
    "Available",
  ][index % 4]
  const isCharging =
    section === "chargers" && chargerState.startsWith("Charging")
  const isPreparing = section === "chargers" && chargerState === "Preparing"
  const isUnavailable = section === "chargers" && chargerState === "Unavailable"
  const label =
    section === "chargers"
      ? chargerState
      : section === "units"
        ? "Available"
        : section === "distributed" || section === "paralleling"
          ? "Operational"
          : status === "running"
            ? "Running"
            : status === "discharging"
              ? "Discharging"
              : "Available"
  return (
    <span
      className={`inline-flex h-7 max-w-full items-center gap-2 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] leading-5 ${
        isUnavailable ? "text-[#757575]" : "text-[#171717]"
      }`}
    >
      {isPreparing ? (
        <StatusIcon name="preparing" />
      ) : isUnavailable ? (
        <StatusIcon name="unavailable" />
      ) : isCharging ? (
        <SpinnerIcon />
      ) : label === "Available" ? (
        <AvailabilityIcon />
      ) : (
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-[#1dcc6e]"
        />
      )}
      {label}
    </span>
  )
}

function incidentType(row: TableRow) {
  return row.index % 7 === 3
    ? "critical"
    : row.index % 5 === 2
      ? "medium"
      : "none"
}
function IncidentBars({ tone }: { tone: "red" | "amber" }) {
  const color = tone === "red" ? "#ff5454" : "#f4a51c"
  return (
    <span aria-hidden="true" className="flex h-4 items-end gap-0.5">
      {[7, 12, 16].map((height) => (
        <span
          key={height}
          className="w-1 rounded-sm"
          style={{ height, background: color }}
        />
      ))}
    </span>
  )
}
function IncidentCell({ row }: { row: TableRow }) {
  const type = incidentType(row)
  if (type === "none")
    return <span className="whitespace-nowrap text-[#242424]">None</span>
  return (
    <span className="flex items-center gap-3 whitespace-nowrap text-[#1c1c1c]">
      {type === "critical" && (
        <>
          <span className="inline-grid size-4 place-items-center rounded-[3px] bg-[#cf342d] text-[10px] font-bold text-white">
            !
          </span>
          <span>1</span>
        </>
      )}
      <IncidentBars tone={type === "critical" ? "amber" : "red"} />
      <span>{type === "critical" ? "2" : "1"}</span>
    </span>
  )
}

function ConnectorPills({
  count,
  rowIndex,
}: {
  count: number
  rowIndex: number
}) {
  return (
    <div className="flex min-w-[188px] items-center gap-2">
      {Array.from({ length: Math.min(count, 4) }, (_, connectorIndex) => {
        const charging = connectorIndex === 0 && rowIndex % 3 === 0
        return (
          <span
            key={connectorIndex}
            className="inline-flex h-6 items-center overflow-hidden rounded-md border border-[#e3e3e3] bg-white text-[13px] text-[#696969]"
          >
            <span className="bg-[#f5f5f5] px-1.5 leading-6">
              {String(connectorIndex + 1).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-1 px-1.5">
              {charging ? <SpinnerIcon /> : <AvailabilityIcon />}
              {charging && (
                <span className="text-[#191919]">{46 + rowIndex * 3}%</span>
              )}
            </span>
          </span>
        )
      })}
    </div>
  )
}
function Progress({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-[#e5e7e7]">
        <span
          className="block h-full rounded-full bg-[#42d58d]"
          style={{ width: `${value}%` }}
        />
      </span>
      <span>{value}%</span>
    </span>
  )
}
function DetailMetric({
  row,
  section,
}: {
  row: TableRow
  section: Exclude<EquipmentSectionId, "units" | "distributed">
}) {
  if (section === "chargers")
    return (
      <span className="whitespace-nowrap text-[#30353d]">
        {row.index % 3 === 0 ? "120 kW" : "—"}
      </span>
    )
  if (section === "gensets")
    return (
      <span className="whitespace-nowrap text-[#30353d]">
        {row.index % 4 === 0 ? "—" : `${100 + (row.index % 3) * 40} kW`}
      </span>
    )
  if (section === "bess")
    return (
      <span className="whitespace-nowrap text-[#30353d]">
        {row.index % 3 === 2
          ? "−80 kW ↓"
          : `+${120 + (row.index % 2) * 20} kW ↑`}
      </span>
    )
  return (
    <span className="whitespace-nowrap text-[#30353d]">
      {row.index % 2 === 0 ? "Auto" : "Manual"}
    </span>
  )
}
function CompactStatus({
  label,
  tone = "green",
}: {
  label: string
  tone?: "green" | "red" | "amber" | "gray"
}) {
  const colors = {
    green: "bg-[#1dcc6e]",
    red: "bg-[#ff5a56]",
    amber: "bg-[#f4a51c]",
    gray: "bg-[#a8a8a8]",
  }
  return (
    <span className="inline-flex h-6 items-center gap-2 whitespace-nowrap rounded-md border border-[#e5e5e5] bg-white px-2 text-[13px] leading-5 text-[#242424]">
      <span className={`size-2 rounded-full ${colors[tone]}`} />
      {label}
    </span>
  )
}
function GensetMode({ index }: { index: number }) {
  const values: Array<[string, "green" | "amber" | "gray"]> = [
    ["Ready to start", "green"],
    ["Running", "green"],
    ["Not ready", "amber"],
    ["Running", "green"],
    ["Running", "green"],
    ["Unknown", "gray"],
  ]
  const [label, tone] = values[index % values.length]
  return <CompactStatus label={label} tone={tone} />
}
function BessMode({ index }: { index: number }) {
  const values: Array<[string, "green" | "red" | "gray"]> = [
    ["Discharging", "green"],
    ["Discharging", "green"],
    ["Charging", "green"],
    ["Faulted", "red"],
    ["Idle", "gray"],
    ["Unknown", "gray"],
  ]
  const [label, tone] = values[index % values.length]
  return <CompactStatus label={label} tone={tone} />
}
function PanelStatus({ index }: { index: number }) {
  const values: Array<[string, "green" | "red" | "gray"]> = [
    ["Operational", "green"],
    ["Operational", "green"],
    ["Operational", "green"],
    ["Faulted", "red"],
    ["Operational", "green"],
    ["Unknown", "gray"],
  ]
  const [label, tone] = values[index % values.length]
  return <CompactStatus label={label} tone={tone} />
}
function LoadMetric({ value, marker }: { value: number marker?: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="h-1.5 w-12 overflow-hidden rounded-full bg-[#e5e7e7]">
        <span
          className="block h-full rounded-full bg-[#42d58d]"
          style={{ width: `${value}%` }}
        />
      </span>
      <span>{value}%</span>
      {marker && <span className="text-[#8a8a8a]">{marker}</span>}
    </span>
  )
}
function EnergyReserve({
  value,
  percentage,
}: {
  value: number
  percentage: number
}) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span>{value} kWh</span>
      <span className="text-[#8a8a8a]">{percentage}%</span>
    </span>
  )
}
function BessRuntime({ index }: { index: number }) {
  const values = ["1h 50m", "—", "4h 30m", "—", "—", "—"]
  return (
    <span className="whitespace-nowrap text-[#30353d]">
      {values[index % values.length]}
    </span>
  )
}
function BessSoC({ index }: { index: number }) {
  const values = [62, 8, 28, 0, 100, 0]
  const value = values[index % values.length]
  if (index % 6 === 5)
    return <span className="whitespace-nowrap text-[#30353d]">No data</span>
  if (value === 0) return <span className="text-[#30353d]">—</span>
  return (
    <LoadMetric
      value={value}
      marker={index % 6 === 0 ? "reserve" : undefined}
    />
  )
}
function GensetReadiness({ index }: { index: number }) {
  if (index % 6 === 0)
    return <span className="whitespace-nowrap text-[#30353d]">—</span>
  if (index % 6 === 2)
    return <span className="whitespace-nowrap text-[#30353d]">—</span>
  if (index % 6 === 5)
    return <span className="whitespace-nowrap text-[#30353d]">—</span>
  return <LoadMetric value={[35, 87, 25][index % 3]} />
}
function SystemLink({
  id,
  parentKind = "distributed",
}: {
  id?: string
  parentKind?: "unit" | "distributed"
}) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-[#30353d]">
      <EquipmentTypeIcon
        kind={parentKind === "unit" ? "units" : "distributed"}
      />
      {id}
    </span>
  )
}

function SidebarItem({
  item,
  active,
  onClick,
}: {
  item: NavigationItem
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
        active
          ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]"
          : "text-[#525252] hover:bg-[#fafafa]"
      }`}
    >
      <span className="text-[#5d6269]">
        <EquipmentTypeIcon kind={item.id} />
      </span>
      <span className="truncate">{item.label}</span>
    </button>
  )
}

function TopNavigation({ onOpenSites }: { onOpenSites: () => void }) {
  const items = [
    "Home",
    "Charges",
    "Clients",
    "Sites",
    "Equipment",
    "Reports",
    "Incidents",
    "Settings",
  ]
  return (
    <header className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white">
      <div className="flex h-[60px] min-w-max items-center gap-9 px-5">
        <div className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-[#111827]">
          <span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">
            L
          </span>
          <span>L-CHARGE</span>
        </div>
        <nav
          aria-label="Main navigation"
          className="flex h-full items-center gap-1 text-[#4d4d4d]"
        >
          {items.map((item) => (
            <button
              key={item}
              type="button"
              onClick={item === "Sites" ? onOpenSites : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:bg-[#fafafa] ${
                item === "Equipment"
                  ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 font-medium">
          <span className="grid size-8 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">
            NS
          </span>
          Nick Smith
        </div>
      </div>
    </header>
  )
}

function ColumnLabel({
  children,
  info = false,
}: {
  children: React.ReactNode
  info?: boolean
}) {
  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap">
      {children}
      {info && <InfoIcon />}
    </span>
  )
}

function TableHeader({ activeSection }: { activeSection: EquipmentSectionId }) {
  if (activeSection === "units")
    return (
      <tr>
        <th className="px-3">
          <ColumnLabel>Unit</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Partner</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Chargers</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Incidents now</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Connection</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>State</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Site</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Location</ColumnLabel>
        </th>
        <th className="w-10 px-3" />
      </tr>
    )
  if (activeSection === "distributed")
    return (
      <tr>
        <th className="px-3">
          <ColumnLabel>Distributed system ID</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Partner</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Status</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Bus</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Current power</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Power load</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Sources working</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Energy reserve</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Incidents now</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Connection</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Site</ColumnLabel>
        </th>
        <th className="w-10 px-3" />
      </tr>
    )
  if (activeSection === "gensets")
    return (
      <tr>
        <th className="px-3">
          <ColumnLabel>{singularLabels.gensets}</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Partner</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Mode</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Power</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Load</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Service in</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Incidents</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Connection</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Unit / system</ColumnLabel>
        </th>
        <th className="w-10 px-3" />
      </tr>
    )
  if (activeSection === "bess")
    return (
      <tr>
        <th className="px-3">
          <ColumnLabel>{singularLabels.bess}</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Partner</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Mode</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>State of charge</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Runtime left</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Power</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Battery health</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Incidents</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Connection</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>System</ColumnLabel>
        </th>
        <th className="w-10 px-3" />
      </tr>
    )
  if (activeSection === "paralleling")
    return (
      <tr>
        <th className="px-3">
          <ColumnLabel>{singularLabels.paralleling}</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Partner</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Status</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Control</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Breaker wear</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Max temp</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>Service in</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Incidents</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel info>Connection</ColumnLabel>
        </th>
        <th className="px-3">
          <ColumnLabel>System</ColumnLabel>
        </th>
        <th className="w-10 px-3" />
      </tr>
    )
  return (
    <tr>
      <th className="px-3">
        <ColumnLabel>{singularLabels.chargers}</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Partner</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Status</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Current power</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Incidents now</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Connection</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Unit / system</ColumnLabel>
      </th>
      <th className="px-3">
        <ColumnLabel>Site</ColumnLabel>
      </th>
      <th className="w-10 px-3" />
    </tr>
  )
}

function TableRows({
  activeSection,
  rows,
  onOpenDetail,
}: {
  activeSection: EquipmentSectionId
  rows: TableRow[]
  onOpenDetail: (target: EquipmentDetailTarget) => void
}) {
  return (
    <tbody className="divide-y divide-[#e6e6e6]">
      {rows.map((row) => {
        const key = `${row.partnerId}-${row.site}-${row.system ?? "unit"}-${row.id}`
        const openDetail = () =>
          onOpenDetail({ ...row, section: activeSection })
        const rowInteraction = {
          tabIndex: 0,
          onClick: openDetail,
          onKeyDown: (event: React.KeyboardEvent<HTMLTableRowElement>) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              openDetail()
            }
          },
          "aria-label": `Open ${row.id}`,
        }
        const rowClass =
          "h-12 cursor-pointer transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]"
        const action = (
          <td className="px-3 text-center text-lg leading-none text-[#757575]">
            …
          </td>
        )
        const identity = (
          <td className="max-w-[13rem] px-3 font-medium text-[#151515]">
            <span className="block max-w-full truncate">{row.id}</span>
          </td>
        )
        const partner = (
          <td className="whitespace-nowrap px-3 text-[#30353d]">
            {row.partner}
          </td>
        )
        const system = (
          <td className="whitespace-nowrap px-3 text-[#30353d]">
            <SystemLink id={row.system} parentKind={row.parentKind} />
          </td>
        )
        const incident = (
          <td className="px-3">
            <IncidentCell row={row} />
          </td>
        )
        const connection = (
          <td className="px-3">
            <OnlineBadge />
          </td>
        )
        const site = (
          <td className="max-w-[12rem] px-3 text-[#30353d]">
            <span className="block truncate">{row.site}</span>
          </td>
        )
        const location = (
          <td className="max-w-[15rem] px-3 text-[#30353d]">
            <span className="block truncate">{row.address}</span>
          </td>
        )
        if (activeSection === "units")
          return (
            <tr key={key} {...rowInteraction} className={rowClass}>
              {identity}
              {partner}
              <td className="px-3">
                <ConnectorPills
                  count={row.chargerCount ?? 0}
                  rowIndex={row.index}
                />
              </td>
              {incident}
              {connection}
              <td className="px-3">
                <StateBadge
                  status={row.status}
                  section={activeSection}
                  index={row.index}
                />
              </td>
              {site}
              {location}
              {action}
            </tr>
          )
        if (activeSection === "distributed") {
          const power = [38, 92, 72, 100, 28, 64][row.index % 6]
          const currentPower = [
            "640 kW",
            "1,480 kW",
            "1,120 kW",
            "—",
            "780 kW",
            "960 kW",
          ][row.index % 6]
          const reserve = [
            [620, 62],
            [180, 18],
            [95, 9],
            [40, 4],
            [510, 51],
            [320, 32],
          ][row.index % 6] as [number, number]
          return (
            <tr key={key} {...rowInteraction} className={rowClass}>
              {identity}
              {partner}
              <td className="px-3">
                <CompactStatus
                  label={
                    row.index === 3
                      ? "Faulted"
                      : row.index === 5
                        ? "Open"
                        : "Operational"
                  }
                  tone={
                    row.index === 3 ? "red" : row.index === 5 ? "gray" : "green"
                  }
                />
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {row.index === 3 || row.index === 5
                  ? "—"
                  : `${480 - (row.index % 2) * 2} V · ${60 - (row.index % 3) * 0.3} Hz`}
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {currentPower}
              </td>
              <td className="px-3">
                {row.index === 3 || row.index === 5 ? (
                  "—"
                ) : (
                  <LoadMetric
                    value={power}
                    marker={row.index === 0 ? "N-1" : undefined}
                  />
                )}
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {row.index === 3
                  ? "0 of 5"
                  : row.index === 5
                    ? "—"
                    : `${2 + (row.index % 3)} of ${4 + (row.index % 3)}`}
              </td>
              <td className="px-3">
                {row.index === 5 ? (
                  "—"
                ) : (
                  <EnergyReserve value={reserve[0]} percentage={reserve[1]} />
                )}
              </td>
              {incident}
              {connection}
              {site}
              {action}
            </tr>
          )
        }
        if (activeSection === "gensets")
          return (
            <tr key={key} {...rowInteraction} className={rowClass}>
              {identity}
              {partner}
              <td className="px-3">
                <GensetMode index={row.index} />
              </td>
              <td className="px-3">
                <DetailMetric row={row} section={activeSection} />
              </td>
              <td className="px-3">
                <GensetReadiness index={row.index} />
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {
                  ["210 h", "38 h", "175 h", "145 h", "402 h", "320 h"][
                    row.index % 6
                  ]
                }
              </td>
              {incident}
              {connection}
              {system}
              {action}
            </tr>
          )
        if (activeSection === "bess")
          return (
            <tr key={key} {...rowInteraction} className={rowClass}>
              {identity}
              {partner}
              <td className="px-3">
                <BessMode index={row.index} />
              </td>
              <td className="px-3">
                <BessSoC index={row.index} />
              </td>
              <td className="px-3">
                <BessRuntime index={row.index} />
              </td>
              <td className="px-3">
                <DetailMetric row={row} section={activeSection} />
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {["97%", "91%", "96%", "79%", "93%", "94%"][row.index % 6]}
              </td>
              {incident}
              {connection}
              {system}
              {action}
            </tr>
          )
        if (activeSection === "paralleling")
          return (
            <tr key={key} {...rowInteraction} className={rowClass}>
              {identity}
              {partner}
              <td className="px-3">
                <PanelStatus index={row.index} />
              </td>
              <td className="px-3">
                <DetailMetric row={row} section={activeSection} />
              </td>
              <td className="px-3">
                <LoadMetric value={[48, 61, 93, 71, 29, 56][row.index % 6]} />
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {[58, 61, 84, 0, 0, 0][row.index % 6]
                  ? `${[58, 61, 84, 0, 0, 0][row.index % 6]} °C`
                  : "—"}
              </td>
              <td className="whitespace-nowrap px-3 text-[#30353d]">
                {
                  ["142 d", "88 d", "12 d", "45 d", "210 d", "175 d"][
                    row.index % 6
                  ]
                }
              </td>
              {incident}
              {connection}
              {system}
              {action}
            </tr>
          )
        return (
          <tr key={key} {...rowInteraction} className={rowClass}>
            {identity}
            {partner}
            <td className="px-3">
              <StateBadge
                status={row.status}
                section={activeSection}
                index={row.index}
              />
            </td>
            <td className="px-3">
              <DetailMetric row={row} section={activeSection} />
            </td>
            {incident}
            {connection}
            {system}
            {site}
            {action}
          </tr>
        )
      })}
    </tbody>
  )
}

export default function EquipmentPage({
  activeSection,
  onNavigate,
  onOpenSites,
  onOpenDetail,
  systemFilter,
  onClearSystemFilter,
}: EquipmentPageProps) {
  const rows = useMemo(() => rowsForSection(activeSection), [activeSection])
  const [filter, setFilter] = useState<FilterId>("all")
  const scopedRows = systemFilter
    ? rows.filter((row) =>
        activeSection === "units" || activeSection === "distributed"
          ? row.id === systemFilter.id
          : row.system === systemFilter.id,
      )
    : rows
  const incidentRows = scopedRows.filter((row) => incidentType(row) !== "none")
  const visibleRows = filter === "incidents" ? incidentRows : scopedRows
  return (
    <div className="h-full overflow-y-auto bg-white font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
      <TopNavigation onOpenSites={onOpenSites} />
      <div className="flex min-h-[calc(100%-56px)]">
        <aside className="w-52 shrink-0 border-r border-[#e6e6e6] px-4 py-5">
          <div className="space-y-1">
            {systemItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                active={item.id === activeSection}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </div>
          <p className="mb-2 mt-8 px-2 text-sm text-[#757575]">Equipment</p>
          <div className="space-y-1">
            {equipmentItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                active={item.id === activeSection}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </div>
        </aside>
        <main className="min-w-0 flex-1 px-8 py-7">
          <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#0a0a0a]">
                <EquipmentTypeIcon kind={activeSection} />
              </span>
              <h1 className="text-xl font-medium tracking-[-0.02em]">
                {labels[activeSection]}
              </h1>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-[#1f1f1f]">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"
              >
                <SearchIcon />
                Search
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"
              >
                <FilterIcon />
                Filter
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"
              >
                <ExportIcon />
                Export
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"
              >
                <ViewIcon />
                View
              </button>
            </div>
          </header>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <div className="flex w-fit flex-wrap items-center gap-1 rounded-lg bg-[#f4f4f4] p-1">
              {([
                ["all", "All", scopedRows.length],
                ["incidents", "Incidents", incidentRows.length],
              ] as const).map(([id, label, count]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className={`inline-flex h-8 items-center gap-2 rounded-md px-3 text-sm transition-[background-color,box-shadow,color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                    filter === id
                      ? "bg-white font-medium text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                      : "text-[#6b6b6b] hover:text-[#303030]"
                  }`}
                >
                  {label}
                  <span className="text-[#777]">{count}</span>
                </button>
              ))}
            </div>
            {systemFilter && (
              <button
                type="button"
                onClick={onClearSystemFilter}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#e1e1e1] bg-white px-2.5 text-sm text-[#454545] hover:bg-[#fafafa]"
              >
                <EquipmentTypeIcon
                  kind={
                    systemFilter.kind === "distributed"
                      ? "distributed"
                      : "units"
                  }
                />
                Unit / system: {systemFilter.id}
                <span aria-hidden="true">×</span>
              </button>
            )}
          </div>
          <p className="mt-7 font-medium">
            {titleCount(visibleRows.length, activeSection)}
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border border-[#e6e6e6]">
            <table className="w-full min-w-[1260px] border-collapse text-left">
              <thead className="h-12 border-b border-[#e6e6e6] text-[13px] font-normal text-[#757575]">
                <TableHeader activeSection={activeSection} />
              </thead>
              <TableRows
                activeSection={activeSection}
                rows={visibleRows}
                onOpenDetail={onOpenDetail}
              />
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
