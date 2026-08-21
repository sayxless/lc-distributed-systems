import EquipmentAttentionIndicator, {
  type EquipmentAttentionIndicatorMode,
} from "@/EquipmentAttentionIndicator"
import StatusIcon from "@/StatusIcon"
import type { Partner, Site } from "@/prototypeData"

export type SitePageTab =
  | "overview"
  | "charges"
  | "incidents"
  | "equipment"
  | "settings"

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-8 place-items-center rounded-md border border-[#e6e6e6] bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
    >
      {children}
    </button>
  )
}

function Chevron({ direction = "down" }: { direction?: "up" | "down" }) {
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

function PartnerGlyph() {
  return (
    <svg aria-hidden="true" className="size-4 text-[#757575]" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.45">
      <path d="M2.5 5.5h11v7h-11zM5.25 5.5V4.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25V5.5M2.5 8.25h11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinGlyph() {
  return (
    <svg aria-hidden="true" className="size-5 text-[#757575]" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 18s5-4.58 5-9a5 5 0 1 0-10 0c0 4.42 5 9 5 9Z" />
      <circle cx="10" cy="9" r="1.5" />
    </svg>
  )
}

export default function SitePageHeader({
  site,
  partner,
  position,
  total,
  activeTab,
  attentionCount,
  showEquipmentAttentionCount,
  equipmentAttentionIndicator,
  onOpenSites,
  onOpenEquipment,
  onPrevious,
  onNext,
  onTabChange,
  showGlobalHeader = false,
}: {
  site: Site
  partner: Partner
  position: number
  total: number
  activeTab: SitePageTab
  attentionCount: number
  showEquipmentAttentionCount: boolean
  equipmentAttentionIndicator: EquipmentAttentionIndicatorMode
  onOpenSites: () => void
  onOpenEquipment?: () => void
  onPrevious: () => void
  onNext: () => void
  onTabChange: (tab: SitePageTab) => void
  showGlobalHeader?: boolean
}) {
  return (
    <>
      {showGlobalHeader && (
      <header className="sticky top-0 z-10 flex h-14 items-center border-b border-[#e6e6e6] bg-white px-5">
        <button type="button" onClick={onOpenSites} className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-[13px] font-medium text-white">L</span>
          <span className="text-[14px] font-medium">L-CHARGE</span>
        </button>
        <nav className="ml-10 flex h-full items-center gap-1 text-[14px] text-[#525252]" aria-label="Main navigation">
          {["Home", "Charges", "Clients"].map((label) => <button type="button" key={label} className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]">{label}</button>)}
          <button type="button" onClick={onOpenSites} className="rounded-md bg-[#f5f5f5] px-3 py-1.5 font-medium text-[#0a0a0a]">Sites</button>
          <button type="button" onClick={onOpenEquipment} className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]">Equipment</button>
          {["Reports", "Incidents", "Settings"].map((label) => <button type="button" key={label} className="rounded-md px-3 py-1.5 hover:bg-[#f5f5f5]">{label}</button>)}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-[#1dcc6e] text-[13px] font-medium text-white">NS</span>
          <span className="text-[14px] font-medium">Nick Smith</span>
          <Chevron />
        </div>
      </header>
      )}
      <div className="mb-7 flex items-center gap-2">
        <IconButton label="Back" onClick={onOpenSites}>←</IconButton>
        <IconButton label="Previous site" onClick={onPrevious}><Chevron direction="up" /></IconButton>
        <IconButton label="Next site" onClick={onNext}><Chevron /></IconButton>
        <span className="ml-1 text-[14px] text-[#757575]">{position} of {total} sites</span>
      </div>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-14 place-items-center rounded-full border border-[#e6e6e6] bg-[#fafafa]"><StatusIcon name="site" className="size-6" /></span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-[24px] font-medium leading-8 tracking-[-0.3px]">{site.name}</h1>
              <span className="inline-flex h-7 items-center gap-2 rounded-md border border-[#e6e6e6] px-2 text-[14px] text-[#757575]"><PartnerGlyph />{partner.name}</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[14px] text-[#757575]"><PinGlyph />{site.address}</div>
          </div>
        </div>
        <button type="button" className="inline-flex h-8 items-center gap-2 rounded-md border border-[#e6e6e6] bg-white px-3 text-[14px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.08)]">Actions <Chevron /></button>
      </div>
      <nav className="flex h-11 items-end gap-1 border-b border-[#e6e6e6]" aria-label="Site tabs">
        {(["overview", "charges", "incidents", "equipment", "settings"] as const).map((tab) => (
          <button key={tab} type="button" onClick={() => onTabChange(tab)} className={`inline-flex h-11 items-center gap-1.5 border-b-2 px-3 text-[14px] capitalize ${
            activeTab === tab ? "border-[#0a0a0a] font-medium text-[#0a0a0a]" : "border-transparent text-[#525252] hover:text-[#0a0a0a]"
          }`}>
            {tab}
            {tab === "equipment" && showEquipmentAttentionCount && <EquipmentAttentionIndicator count={attentionCount} mode={equipmentAttentionIndicator} />}
          </button>
        ))}
      </nav>
    </>
  )
}
