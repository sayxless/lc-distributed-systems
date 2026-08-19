import EquipmentTypeIcon from "@/EquipmentTypeIcon"
import OperationalEquipmentList from "@/OperationalEquipmentList"
import type { OperationalEquipmentView } from "@/OperationalEquipmentList"
import StatusIcon from "@/StatusIcon"
import { getPartner, getSite, sites } from "@/prototypeData"
import type { EquipmentDetailTarget, EquipmentSectionId } from "@/EquipmentPage"

type SiteOperationalEquipmentPageProps = {
  siteId: string
  onOpenSites: () => void
  onOpenDetail: (target: EquipmentDetailTarget) => void
  onOpenOverview: () => void
  onPreviousSite: () => void
  onNextSite: () => void
  onOpenEquipmentSection?: (section: EquipmentSectionId, system: { id: string; kind: "unit" | "distributed" }) => void
  operationalEquipmentView: OperationalEquipmentView
  onOperationalEquipmentViewChange: (mode: OperationalEquipmentView) => void
}

function IconButton({ label, children, onClick }: { label: string; children: React.ReactNode; onClick: () => void }) {
  return <button type="button" aria-label={label} onClick={onClick} className="grid size-8 place-items-center rounded-md border border-[#e6e6e6] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#fafafa]">{children}</button>
}

function Arrow({ direction }: { direction: "back" | "up" | "down" }) {
  const path = direction === "back" ? "m11.5 5-5 5 5 5" : direction === "up" ? "m6 12 4-4 4 4" : "m6 8 4 4 4-4"
  return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9"><path d={path} /></svg>
}

export default function SiteOperationalEquipmentPage({ siteId, onOpenSites, onOpenDetail, onOpenOverview, onPreviousSite, onNextSite, operationalEquipmentView, onOperationalEquipmentViewChange }: SiteOperationalEquipmentPageProps) {
  const site = getSite(siteId)
  const partner = getPartner(site.partnerId)
  const index = sites.findIndex((item) => item.id === site.id)
  return <div className="min-h-full bg-white font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
    <header className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white"><div className="flex h-[60px] min-w-max items-center gap-9 px-5"><div className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-[#111827]"><span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">L</span><span>L-CHARGE</span></div><nav className="flex h-full items-center gap-1 text-[#4d4d4d]" aria-label="Main navigation">{["Home", "Charges", "Clients", "Sites", "Equipment", "Reports", "Incidents", "Settings"].map((item) => <button key={item} type="button" onClick={item === "Sites" ? onOpenSites : undefined} className={`rounded-md px-3 py-2 text-sm ${item === "Sites" ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]" : "hover:bg-[#fafafa]"}`}>{item}</button>)}</nav><div className="ml-auto flex items-center gap-2 font-medium"><span className="grid size-8 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">NS</span>Nick Smith</div></div></header>
    <main className="mx-auto w-full max-w-[1440px] px-6 py-7 lg:px-8"><div className="mb-7 flex items-center gap-2 text-sm text-[#757575]"><IconButton label="Back to sites" onClick={onOpenSites}><Arrow direction="back" /></IconButton><IconButton label="Previous site" onClick={onPreviousSite}><Arrow direction="up" /></IconButton><IconButton label="Next site" onClick={onNextSite}><Arrow direction="down" /></IconButton><span className="ml-1">{index + 1} of {sites.length} sites</span></div><header className="mb-5 flex flex-wrap items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="grid size-14 place-items-center rounded-full border border-[#e6e6e6] bg-[#fafafa]"><StatusIcon name="site" className="size-6" /></span><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-[24px] font-medium leading-8 tracking-[-0.3px]">{site.name}</h1><span className="inline-flex h-7 items-center gap-2 rounded-md border border-[#e6e6e6] px-2 text-[14px] text-[#757575]">▣ {partner.name}</span></div><p className="mt-1 text-[14px] text-[#757575]">⌖&nbsp; {site.address}</p></div></div><button type="button" className="inline-flex h-8 items-center rounded-md border border-[#e4e4e4] bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">Actions⌄</button></header><nav className="flex items-center gap-6 border-b border-[#e6e6e6] text-sm" aria-label="Site tabs"><button type="button" onClick={onOpenOverview} className="py-3 text-[#5c5c5c]">Overview</button><button className="py-3 text-[#5c5c5c]">Charges</button><button className="py-3 text-[#5c5c5c]">Incidents</button><button className="border-b-2 border-[#171717] py-3 font-medium">Equipment</button><button className="py-3 text-[#5c5c5c]">Settings</button></nav><div className="mt-7 w-full"><OperationalEquipmentList siteId={site.id} onOpenDetail={onOpenDetail} displayMode={operationalEquipmentView} onDisplayModeChange={onOperationalEquipmentViewChange} /></div></main>
  </div>
}
