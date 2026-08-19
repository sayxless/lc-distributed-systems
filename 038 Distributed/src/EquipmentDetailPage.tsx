import { useState } from "react"
import EquipmentTypeIcon, { type EquipmentKind } from "@/EquipmentTypeIcon"
import StatusIcon from "@/StatusIcon"
import type { EquipmentDetailTarget, EquipmentSectionId } from "@/EquipmentPage"
import { chartValuesFor } from "@/chartVariants"
import OperationalEquipmentList from "@/OperationalEquipmentList"
import type { OperationalEquipmentView } from "@/OperationalEquipmentList"

type EquipmentDetailPageProps = {
  target: EquipmentDetailTarget
  onBack: () => void
  onOpenSites: () => void
  position: number
  total: number
  onPrevious: () => void
  onNext: () => void
  onOpenDetail: (target: EquipmentDetailTarget) => void
  onOpenEquipmentSection?: (section: EquipmentSectionId, system: { id: string; kind: "unit" | "distributed" }) => void
  operationalEquipmentView: OperationalEquipmentView
  onOperationalEquipmentViewChange: (mode: OperationalEquipmentView) => void
}

const pageNames: Record<EquipmentSectionId, string> = {
  units: "Integrated unit",
  distributed: "Distributed system",
  chargers: "Charger",
  gensets: "Genset",
  bess: "BESS",
  paralleling: "Paralleling panel",
}

function statusFor(target: EquipmentDetailTarget) {
  if (target.section === "chargers") {
    const states = [
      { label: "Preparing", icon: "preparing" as const },
      { label: "Unavailable", icon: "unavailable" as const },
      { label: "Charging · 46%", icon: "charging" as const },
      { label: "Available", icon: "available" as const },
    ]
    return states[target.index % states.length]
  }
  if (target.section === "gensets") return { label: "Running", icon: undefined }
  if (target.section === "bess") return { label: "Discharging", icon: undefined }
  return { label: "Operational", icon: undefined }
}

function StatusBadge({ target }: { target: EquipmentDetailTarget }) {
  const state = statusFor(target)
  return (
    <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[#e5e5e5] bg-white px-2 text-sm text-[#242424]">
      {state.icon ? <StatusIcon name={state.icon} className="size-4" /> : <span className="size-2 rounded-full bg-[#1dcc6e]" />}
      {state.label}
    </span>
  )
}

function OnlineBadge() {
  return <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[#e5e5e5] bg-white px-2 text-sm text-[#13bd66]"><StatusIcon name="online" className="size-4" />Online</span>
}

function IncidentBadge({ index }: { index: number }) {
  const incidents = index % 3 === 0 ? 2 : index % 3 === 1 ? 1 : 0
  if (!incidents) return <span className="text-[#30353d]">No incidents</span>
  return <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="flex h-5 items-end gap-0.5">{[9, 14, 19].map((height) => <i key={height} className="w-1 rounded-sm bg-[#ff5454]" style={{ height }} />)}</span>{incidents}</span>
}

function BackIcon() { return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="m11.8 4.5-5.5 5.5 5.5 5.5" /></svg> }
function VerticalChevron({ direction }: { direction: "up" | "down" }) { return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.9"><path strokeLinecap="round" strokeLinejoin="round" d={direction === "up" ? "m5.5 12.5 4.5-4.5 4.5 4.5" : "m5.5 7.5 4.5 4.5 4.5-4.5"} /></svg> }
function ExternalIcon() { return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8v8M16 4 8 12" /></svg> }

function PageHeader({ onOpenSites }: { onOpenSites: () => void }) {
  const items = ["Home", "Charges", "Clients", "Sites", "Equipment", "Reports", "Incidents", "Settings"]
  return <header className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white"><div className="flex h-[60px] min-w-max items-center gap-9 px-5"><div className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-[#111827]"><span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">L</span><span>L-CHARGE</span></div><nav className="flex h-full items-center gap-1 text-[#4d4d4d]" aria-label="Main navigation">{items.map((item) => <button key={item} onClick={item === "Sites" ? onOpenSites : undefined} className={`rounded-md px-3 py-2 text-sm ${item === "Equipment" ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]" : "hover:bg-[#fafafa]"}`}>{item}</button>)}</nav><div className="ml-auto flex items-center gap-2 font-medium"><span className="grid size-8 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">NS</span>Nick Smith</div></div></header>
}

function BarChart({ title, entityKey, value, incident = false }: { title: string; entityKey: string; value?: string; incident?: boolean }) {
  const values = chartValuesFor(entityKey, incident ? "incidents" : "energy")
  return <article className="min-w-0 border-t border-[#e6e6e6] pt-4"><header className="flex items-center justify-between gap-3 text-[13px]"><h3 className="font-medium text-[#171717]">{title} <span className="font-normal text-[#757575]">{value ?? "3,452.20 kWh"}</span></h3><button type="button" className="shrink-0 text-[#757575] hover:text-[#171717]">View report</button></header><div className="relative mt-5 h-24 border-b border-dashed border-[#e6e6e6]"><div className="flex h-20 items-end gap-1 px-1">{values.map((height, index) => { const critical = incident && (index === 8 || index === 22); const medium = incident && (index === 9 || index === 16 || index === 23); const tone = incident ? (critical ? "#d5302a" : medium ? "#f6b233" : "#777777") : "#43d58a"; return <span key={index} className="min-w-0 flex-1 rounded-t-sm" style={{ height: `${Math.max(8, height)}%`, backgroundColor: tone }} /> })}</div><div className="absolute bottom-[-19px] left-0 right-0 flex justify-between text-[11px] text-[#8a8a8a]"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span></div></div>{incident && <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#757575]"><span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#d5302a]" />12 Critical</span><span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#f05a55]" />20 High</span><span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#f6b233]" />41 Medium</span><span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-full bg-[#777777]" />102 Low</span></div>}</article>
}

function DetailLine({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="grid grid-cols-[9.25rem_minmax(0,1fr)] gap-3 py-2 text-sm"><dt className="text-[#757575]">{label}</dt><dd className="min-w-0 text-[#252525]">{children}</dd></div>
}

function Metrics({ target }: { target: EquipmentDetailTarget }) {
  const type = target.section
  const metrics = type === "distributed"
    ? [["480 V · 60.0 Hz", "Bus"], ["640 kW", "Current power"], ["38%", "Power load"], ["620 kWh", "Energy reserve"]]
    : type === "gensets"
      ? [["280 kW", "Current power"], ["64%", "Current load"], ["2", "Incidents"]]
      : type === "bess"
        ? [["140.00 kW ↑", "Current power"], ["78%", "State of charge"], ["28 °C", "Max cell temp"], ["2", "Incidents"]]
        : type === "paralleling"
          ? [["280.00 kW", "Current power"], ["58 °C", "Max contact temp"], ["2", "Incidents"]]
          : type === "chargers"
            ? [["120 kW", "Current power"], ["46%", "State of charge"], ["123 kW", "Limit"]]
            : [[`${target.chargerCount ?? 2}`, "Chargers"], ["300 kW", "Max power"], ["Available", "State"]]
  return <div className={`grid gap-0 rounded-xl bg-white p-4 ${metrics.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>{metrics.map(([value, label], index) => <div key={label} className={`min-w-0 px-3 ${index > 0 ? "border-l border-[#ededed]" : ""}`}><p className="font-medium text-[#242424]">{value}</p><p className="mt-1 text-sm text-[#757575]">{label}</p></div>)}</div>
}

function Activity() {
  return <section className="mt-12 max-w-3xl"><h2 className="font-medium">Activity</h2><ol className="mt-4 border-l border-[#e5e5e5] pl-5 text-sm"><li className="relative pb-5 before:absolute before:-left-[21px] before:top-1.5 before:size-1.5 before:rounded-full before:bg-[#8a8a8a]"><p>Software update finished v1.1.0</p><p className="mt-1 text-[#8a8a8a]">25 mins ago</p></li><li className="relative pb-5 before:absolute before:-left-[21px] before:top-1.5 before:size-1.5 before:rounded-full before:bg-[#8a8a8a]"><p>Connection updated</p><p className="mt-1 text-[#8a8a8a]">26 mins ago</p></li><li className="relative before:absolute before:-left-[21px] before:top-1.5 before:size-1.5 before:rounded-full before:bg-[#8a8a8a]"><p>Equipment details updated</p><p className="mt-1 text-[#8a8a8a]">30 mins ago</p></li></ol></section>
}

export default function EquipmentDetailPage({ target, onBack, onOpenSites, position, total, onPrevious, onNext, onOpenDetail, operationalEquipmentView, onOperationalEquipmentViewChange }: EquipmentDetailPageProps) {
  const kind = target.section as EquipmentKind
  const pageName = pageNames[target.section]
  const isCharger = target.section === "chargers"
  const isUnit = target.section === "units"
  const metrics = target.section === "bess" || target.section === "paralleling" ? "Energy throughput" : "Energy delivered"
  const counterLabel = target.section === "distributed" ? "distributed systems" : target.section === "units" ? "integrated units" : `${pageName.toLowerCase()}s`
  const [activeTab, setActiveTab] = useState<"overview" | "equipment">("overview")
  const isOperationalParent = isUnit || target.section === "distributed"

return <div className="h-full overflow-y-auto bg-white font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]"><PageHeader onOpenSites={onOpenSites} /><main className="mx-auto w-full max-w-[1440px] px-6 py-7 lg:px-8"><div className="mb-7 flex items-center gap-2 text-sm text-[#757575]"><button onClick={onBack} aria-label="Back to equipment" className="grid size-8 place-items-center rounded-md border border-[#e4e4e4] bg-white text-[#272727] shadow-sm hover:bg-[#fafafa]"><BackIcon /></button><button onClick={onPrevious} aria-label={`Previous ${pageName.toLowerCase()}`} className="grid size-8 place-items-center rounded-md border border-[#e4e4e4] bg-white text-[#272727] shadow-sm hover:bg-[#fafafa]"><VerticalChevron direction="up" /></button><button onClick={onNext} aria-label={`Next ${pageName.toLowerCase()}`} className="grid size-8 place-items-center rounded-md border border-[#e4e4e4] bg-white text-[#272727] shadow-sm hover:bg-[#fafafa]"><VerticalChevron direction="down" /></button><span className="ml-1">{position} of {total} {counterLabel}</span></div><header className="mb-5 flex flex-wrap items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="grid size-14 place-items-center rounded-full border border-[#e6e6e6] bg-[#fafafa]"><EquipmentTypeIcon kind={kind} /></span><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-[24px] font-medium leading-8 tracking-[-0.3px]">{target.id}</h1><span className="inline-flex h-7 items-center gap-2 rounded-md border border-[#e6e6e6] px-2 text-[14px] text-[#757575]">▣ {target.partner}</span></div><div className="mt-1 flex flex-wrap items-center gap-x-2 text-[14px] text-[#757575]"><span>{target.system && <>{target.system} · </>}{target.site}</span><span>·</span><span className="max-w-[42rem]">{target.address}</span></div></div></div><div className="flex items-center gap-2"><button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#e4e4e4] bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">Monitoring <ExternalIcon /></button><button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#e4e4e4] bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">Actions⌄</button></div></header><nav className="flex items-center gap-6 border-b border-[#e6e6e6] text-sm" aria-label="Equipment detail tabs"><button type="button" onClick={() => setActiveTab("overview")} className={`${activeTab === "overview" ? "border-b-2 border-[#171717] font-medium" : "text-[#5c5c5c]"} py-3`}>Overview</button><button className="py-3 text-[#5c5c5c]">Incidents</button>{isOperationalParent && <button type="button" onClick={() => setActiveTab("equipment")} className={`${activeTab === "equipment" ? "border-b-2 border-[#171717] font-medium" : "text-[#5c5c5c]"} py-3`}>Equipment</button>}<button className="py-3 text-[#5c5c5c]">Settings</button></nav>{!isOperationalParent || activeTab === "overview" ? <div className="mt-7 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.75fr)]"><aside><h2 className="font-medium">Details</h2><dl className="mt-3 divide-y divide-transparent"><DetailLine label="ID">{target.id}</DetailLine><DetailLine label="Status"><StatusBadge target={target} /></DetailLine><DetailLine label="Incidents now"><IncidentBadge index={target.index} /></DetailLine><DetailLine label="Connection"><OnlineBadge /></DetailLine>{isUnit && <><DetailLine label="Chargers">{target.chargerCount ?? 2}</DetailLine><DetailLine label="Max power">300 kW</DetailLine></>}{target.section === "distributed" && <><DetailLine label="Power load">38% <span className="ml-1 inline-block h-1.5 w-12 rounded-full bg-[#e7e7e7]"><span className="block h-full w-[38%] rounded-full bg-[#1dcc6e]" /></span></DetailLine><DetailLine label="Sources working">4 of 6</DetailLine><DetailLine label="Energy reserve">620 kWh · 62%</DetailLine></>}{target.section === "gensets" && <><DetailLine label="Current power">280 kW</DetailLine><DetailLine label="Current load">64%</DetailLine><DetailLine label="Fuel type">Natural gas</DetailLine></>}{target.section === "bess" && <><DetailLine label="Current power">140.00 kW ↑</DetailLine><DetailLine label="State of charge">78%</DetailLine><DetailLine label="Battery health">96%</DetailLine><DetailLine label="Runtime left">2 h 30 m</DetailLine></>}{target.section === "paralleling" && <><DetailLine label="Max contact temp">58 °C</DetailLine><DetailLine label="Breaker wear">48%</DetailLine><DetailLine label="Rated current">630 A</DetailLine></>}{isCharger && <><DetailLine label="Current power">120 kW</DetailLine><DetailLine label="Connector">CCS</DetailLine><DetailLine label="OCPP status">Active</DetailLine></>}<hr className="my-4 border-[#e6e6e6]" /><DetailLine label="Partner">{target.partner}</DetailLine><DetailLine label="Site">{target.site}</DetailLine><DetailLine label="Location">{target.address}</DetailLine></dl><h2 className="mt-8 font-medium">Backoffice internal notes</h2><textarea className="mt-3 min-h-24 w-full resize-y rounded-md border border-[#e0e0e0] p-3 text-sm outline-none placeholder:text-[#8a8a8a] focus:border-[#a9a9a9]" placeholder="Write a note for the equipment…" /></aside><section className="min-w-0"><h2 className="font-medium">Live {isUnit ? "charging" : pageName.toLowerCase()}</h2><div className="mt-3 rounded-xl bg-[#f5f5f5] p-3"><div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-3"><div className="flex items-center gap-2 font-medium"><EquipmentTypeIcon kind={kind} />{target.id}<StatusBadge target={target} /></div><span className="text-[#757575]">{target.site} ›</span></div><Metrics target={target} /></div>{isCharger && <div className="mt-4 rounded-xl border border-[#e6e6e6] bg-white p-4"><div className="flex items-center justify-between"><span className="font-medium">Charging session</span><span className="text-[#757575]">Est. end in ~43 min</span></div><div className="mt-3 h-1.5 rounded-full bg-[#e5e5e5]"><div className="h-full w-[46%] rounded-full bg-[#1dcc6e]" /></div><div className="mt-2 flex justify-between text-xs text-[#757575]"><span>Energy delivered <b className="ml-1 text-[#242424]">24.60 kWh</b></span><span>Current power <b className="ml-1 text-[#242424]">120.60 kW</b></span><span>Limit <b className="ml-1 text-[#242424]">123.00 kW</b></span></div></div>}<section className="mt-10"><h2 className="font-medium">Overview 24 hours</h2><div className="mt-4 grid gap-x-8 gap-y-8 md:grid-cols-2"><BarChart title={metrics} entityKey={target.id} /><BarChart title="Incidents" entityKey={target.id} value="175" incident /></div></section><section className="mt-10"><div className="flex items-center justify-between"><h2 className="font-medium">Incidents now</h2><button className="text-sm text-[#757575]">View all</button></div><div className="mt-4 divide-y divide-[#e6e6e6]"><article className="flex items-start gap-3 py-4"><IncidentBadge index={0} /><div><p className="font-medium">Power contacts max temperature is high</p><p className="mt-1 text-[#757575]">There was an internal warning.</p></div><span className="ml-auto text-[#757575]">9:38 – Now</span></article><article className="flex items-start gap-3 py-4"><IncidentBadge index={1} /><div><p className="font-medium">Equipment monitoring requires attention</p><p className="mt-1 text-[#757575]">Review operational parameters.</p></div><span className="ml-auto text-[#757575]">9:38 – Now</span></article></div></section><Activity /></section></div> : <div className="mt-7"><OperationalEquipmentList parent={target} onOpenDetail={onOpenDetail} displayMode={operationalEquipmentView} onDisplayModeChange={onOperationalEquipmentViewChange} /></div>}</main></div>
}
