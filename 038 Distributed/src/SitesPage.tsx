import { useState } from "react"
import { partners, sites, type Site } from "@/prototypeData"

type SitesPageProps = {
  onOpenSite: (siteId: string) => void
  onOpenEquipment: () => void
}

type ViewMode = "all" | "active"

function FilterIcon() {
  return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" d="M4 5h12M6.7 10h6.6M9 15h2" /></svg>
}

function ViewIcon() {
  return <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" d="M4 5h12M4 10h12M4 15h12" /><circle cx="6" cy="5" r=".6" fill="currentColor" /><circle cx="6" cy="10" r=".6" fill="currentColor" /><circle cx="6" cy="15" r=".6" fill="currentColor" /></svg>
}

function MoreIcon() {
  return <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.8"><circle cx="5" cy="10" r=".9" fill="currentColor" /><circle cx="10" cy="10" r=".9" fill="currentColor" /><circle cx="15" cy="10" r=".9" fill="currentColor" /></svg>
}

function StateBadge() {
  return <span className="inline-flex h-6 items-center gap-1.5 whitespace-nowrap rounded-md border border-[#e6e6e6] bg-white px-2 text-[13px] leading-5 text-[#171717]"><span aria-hidden="true" className="size-2 rounded-full bg-[#42d58d]" />Active</span>
}

function deployedUnits(site: Site) {
  return site.integratedUnits.length > 0 ? site.integratedUnits.length : site.distributedSystems.length
}

function chargesNow(site: Site) {
  if (site.integratedUnits.length > 0) return site.integratedUnits.reduce((sum, unit) => sum + unit.chargerCount, 0)
  const count = site.distributedSystems.reduce((sum, system) => sum + system.chargers.length, 0)
  return count > 0 ? count : "None"
}

function formatAdded(index: number) {
  const month = index < 5 ? "Nov" : index < 8 ? "Oct" : "Sep"
  return `${month} ${String(9 + index).padStart(2, "0")}, 2025 ${index % 2 === 0 ? "9:52" : "14:06"}`
}

function SiteRow({ site, index, onOpenSite }: { site: Site; index: number; onOpenSite: (siteId: string) => void }) {
  const partner = partners.find((item) => item.id === site.partnerId)
  const openSite = () => onOpenSite(site.id)
  return (
    <tr key={site.id} tabIndex={0} onClick={openSite} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openSite() } }} aria-label={`Open ${site.name}`} className="h-[49px] cursor-pointer border-b border-[#e6e6e6] transition-colors last:border-b-0 hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2357d9]">
      <td className="min-w-[170px] px-3"><span className="block max-w-full truncate font-medium text-[#0a0a0a]">{site.name}</span></td>
      <td className="min-w-[140px] px-3 text-[#0a0a0a]">{partner?.name}</td>
      <td className="min-w-[120px] px-3 text-[#0a0a0a]">{deployedUnits(site)}</td>
      <td className="min-w-[120px] px-3 text-[#0a0a0a]">{chargesNow(site)}</td>
      <td className="min-w-[120px] px-3 text-[#0a0a0a]">None</td>
      <td className="min-w-[114px] px-3"><StateBadge /></td>
      <td className="min-w-[330px] max-w-[430px] px-3 text-[#0a0a0a]"><span className="block truncate">{site.address}</span></td>
      <td className="min-w-[164px] px-3 whitespace-nowrap text-[#0a0a0a]">{formatAdded(index)}</td>
      <td className="w-10 px-2 text-[#5d6269]"><span aria-hidden="true" className="grid size-8 place-items-center rounded-md"><MoreIcon /></span></td>
    </tr>
  )
}

export default function SitesPage({ onOpenSite, onOpenEquipment }: SitesPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("active")
  const visibleSites = viewMode === "all" ? sites : sites

  return (
    <div className="min-h-full overflow-y-auto bg-white font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
      <header className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white">
        <div className="flex h-[60px] min-w-max items-center gap-9 px-5">
          <div className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-[#111827]"><span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">L</span><span>L-CHARGE</span></div>
          <nav aria-label="Main navigation" className="flex h-full items-center gap-1 text-[#4d4d4d]">{["Home", "Charges", "Clients", "Sites", "Equipment", "Reports", "Incidents", "Settings"].map((item) => <button key={item} type="button" onClick={item === "Equipment" ? onOpenEquipment : undefined} className={`rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:bg-[#fafafa] ${item === "Sites" ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]" : ""}`}>{item}</button>)}</nav>
          <div className="ml-auto flex items-center gap-2 font-medium"><span className="grid size-9 place-items-center rounded-full bg-[#42d58d] text-xs text-white">NS</span><span>Nick Smith</span><span aria-hidden="true" className="text-[#5d6269]">⌄</span></div>
        </div>
      </header>

      <main className="w-full px-7 py-8">
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-xl font-medium leading-7 tracking-[-0.02em]">Sites</h1>
          <button type="button" className="inline-flex h-8 items-center rounded-md bg-[#0a0a0a] px-3 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-transform duration-150 active:scale-[0.96]">+ Add site</button>
        </div>

        <div className="mt-6 flex h-[34px] w-fit items-center rounded-md bg-[#f5f5f5] p-0.5">
          <button type="button" onClick={() => setViewMode("all")} className={`h-8 rounded-[5px] px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ${viewMode === "all" ? "bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.12)]" : "text-[#757575]"}`}>All</button>
          <button type="button" onClick={() => setViewMode("active")} className={`inline-flex h-8 items-center gap-2 rounded-[5px] px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ${viewMode === "active" ? "bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.12)]" : "text-[#757575]"}`}>Active <span className="rounded bg-[#e6e6e6] px-1 text-[13px] leading-5 text-[#0a0a0a]">{sites.length}</span></button>
        </div>

        <div className="mt-7 flex items-center justify-between gap-6">
          <p className="font-medium">{visibleSites.length} active sites</p>
          <div className="flex items-center gap-4 text-sm font-medium"><button type="button" className="inline-flex h-8 items-center gap-2 rounded-md px-2 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"><FilterIcon />Filter</button><button type="button" className="inline-flex h-8 items-center gap-2 rounded-md px-2 transition-colors duration-150 hover:bg-[#f5f5f5] active:scale-[0.96]"><ViewIcon />View</button></div>
        </div>

        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[1240px] border-collapse text-left">
            <thead className="h-[37px] border-b border-[#e6e6e6] text-sm font-medium text-[#757575]"><tr><th className="px-3 font-medium">Name</th><th className="px-3 font-medium">Partner</th><th className="px-3 font-medium">Deployed units</th><th className="px-3 font-medium">Charges now</th><th className="px-3 font-medium">Incidents</th><th className="px-3 font-medium">State</th><th className="px-3 font-medium">Location</th><th className="px-3 font-medium">Added</th><th className="w-10 px-2" /></tr></thead>
            <tbody>{visibleSites.map((site, index) => <SiteRow key={site.id} site={site} index={index} onOpenSite={onOpenSite} />)}</tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
