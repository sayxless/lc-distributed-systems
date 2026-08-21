import { useEffect, useState } from "react"
import EquipmentTypeIcon from "@/EquipmentTypeIcon"
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
import IncidentSeverityBadge from "@/IncidentSeverityBadge"
import StatusIcon from "@/StatusIcon"
import { getPartner, getSite, sites } from "@/prototypeData"
import type { EquipmentDetailTarget } from "@/EquipmentPage"
import SitePageHeader from "@/SitePageHeader"

type SiteOperationalEquipmentPageProps = {
  siteId: string
  onOpenSites: () => void
  onOpenDetail: (target: EquipmentDetailTarget) => void
  onOpenOverview: () => void
  onPreviousSite: () => void
  onNextSite: () => void
  equipmentHealthFilter: OperationalEquipmentHealthFilter
  onEquipmentHealthFilterChange: (
    filter: OperationalEquipmentHealthFilter,
  ) => void
  equipmentPresentation: OperationalEquipmentPresentation
  groupEquipmentBySystem: boolean
  groupEquipmentByType: boolean
  equipmentGroupingOrder: OperationalEquipmentGrouping[]
  equipmentStatusSource: OperationalEquipmentStatusSource
  fullEquipmentDetails: boolean
  showEquipmentAttentionCount: boolean
  equipmentAttentionIndicator: EquipmentAttentionIndicatorMode
}

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-8 place-items-center rounded-md border border-[#e6e6e6] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#fafafa]"
    >
      {children}
    </button>
  )
}

function Arrow({ direction }: { direction: "back" | "up" | "down" }) {
  const path =
    direction === "back"
      ? "m11.5 5-5 5 5 5"
      : direction === "up"
        ? "m6 12 4-4 4 4"
        : "m6 8 4 4 4-4"
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d={path} />
    </svg>
  )
}

function SiteIncidents() {
  const rows = [
    [
      "2151147",
      "High",
      "Too many unsuccessful attempts to charge",
      "Aug 19, 15:37",
    ],
    ["2151161", "Low", "AC-DC outage", "Aug 19, 15:37"],
    ["2151160", "Medium", "DC-DC low input voltage", "Aug 19, 15:35"],
    ["2151158", "Stopper", "Battery discharged", "Aug 19, 15:33"],
  ]
  return (
    <section className="mt-7">
      <h2 className="mb-4 text-[16px] font-medium">Incidents</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e6e6e6]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="h-11 border-b border-[#e6e6e6] text-[13px] text-[#757575]">
            <tr>
              <th className="px-4 font-normal">Incident ID</th>
              <th className="px-4 font-normal">Severity</th>
              <th className="px-4 font-normal">Incident</th>
              <th className="px-4 font-normal">Period</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e6e6e6]">
            {rows.map(([id, severity, incident, period]) => (
              <tr key={id} className="h-14">
                <td className="px-4 font-medium">{id}</td>
                <td className="px-4">
                  <IncidentSeverityBadge
                    severity={severity as "High" | "Medium" | "Low" | "Stopper"}
                  />
                </td>
                <td className="px-4">{incident}</td>
                <td className="px-4 text-[#525252]">{period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function SiteOperationalEquipmentPage({
  siteId,
  onOpenSites,
  onOpenDetail,
  onOpenOverview,
  onPreviousSite,
  onNextSite,
  equipmentHealthFilter,
  onEquipmentHealthFilterChange,
  equipmentPresentation,
  groupEquipmentBySystem,
  groupEquipmentByType,
  equipmentGroupingOrder,
  equipmentStatusSource,
  fullEquipmentDetails,
  showEquipmentAttentionCount,
  equipmentAttentionIndicator,
}: SiteOperationalEquipmentPageProps) {
  const [activeTab, setActiveTab] = useState<"equipment" | "incidents">(
    "equipment",
  )
  useEffect(() => {
    const openIncidents = () => setActiveTab("incidents")
    window.addEventListener("prototype:open-site-incidents", openIncidents)
    return () =>
      window.removeEventListener("prototype:open-site-incidents", openIncidents)
  }, [])
  const site = getSite(siteId)
  const partner = getPartner(site.partnerId)
  const index = sites.findIndex((item) => item.id === site.id)
  const attentionCount = equipmentAttentionCount({ siteId })
  return (
    <div className="min-h-full bg-white font-['Inter:Regular',sans-serif] text-[14px] leading-5 text-[#0a0a0a]">
      <header className="sticky top-0 z-10 border-b border-[#e6e6e6] bg-white">
        <div className="flex h-[60px] min-w-max items-center gap-9 px-5">
          <div className="flex items-center gap-2 font-semibold tracking-[-0.03em] text-[#111827]">
            <span className="grid size-6 place-items-center rounded-full bg-[#1dcc6e] text-xs text-white">
              L
            </span>
            <span>L-CHARGE</span>
          </div>
          <nav
            className="flex h-full items-center gap-1 text-[#4d4d4d]"
            aria-label="Main navigation"
          >
            {[
              "Home",
              "Charges",
              "Clients",
              "Sites",
              "Equipment",
              "Reports",
              "Incidents",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={item === "Sites" ? onOpenSites : undefined}
                className={`rounded-md px-3 py-2 text-sm ${
                  item === "Sites"
                    ? "bg-[#f2f2f2] font-medium text-[#0a0a0a]"
                    : "hover:bg-[#fafafa]"
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
      <main className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-6">
        <SitePageHeader
          site={site}
          partner={partner}
          position={index + 1}
          total={sites.length}
          activeTab={activeTab}
          attentionCount={attentionCount}
          showEquipmentAttentionCount={showEquipmentAttentionCount}
          equipmentAttentionIndicator={equipmentAttentionIndicator}
          onOpenSites={onOpenSites}
          onPrevious={onPreviousSite}
          onNext={onNextSite}
          onTabChange={(tab) => {
            if (tab === "overview") onOpenOverview()
            if (tab === "incidents") setActiveTab("incidents")
            if (tab === "equipment") setActiveTab("equipment")
          }}
        />
        <div className="hidden">
          <IconButton label="Back to sites" onClick={onOpenSites}>
            <Arrow direction="back" />
          </IconButton>
          <IconButton label="Previous site" onClick={onPreviousSite}>
            <Arrow direction="up" />
          </IconButton>
          <IconButton label="Next site" onClick={onNextSite}>
            <Arrow direction="down" />
          </IconButton>
          <span className="ml-1">
            {index + 1} of {sites.length} sites
          </span>
        </div>
        <header className="hidden">
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full border border-[#e6e6e6] bg-[#fafafa]">
              <StatusIcon name="site" className="size-6" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[24px] font-medium leading-8 tracking-[-0.3px]">
                  {site.name}
                </h1>
                <span className="inline-flex h-7 items-center gap-2 rounded-md border border-[#e6e6e6] px-2 text-[14px] text-[#757575]">
                  ▣ {partner.name}
                </span>
              </div>
              <p className="mt-1 text-[14px] text-[#757575]">
                ⌖&nbsp; {site.address}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-md border border-[#e4e4e4] bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
          >
            Actions⌄
          </button>
        </header>
        <nav className="hidden">
          <button
            type="button"
            onClick={onOpenOverview}
            className="py-3 text-[#5c5c5c]"
          >
            Overview
          </button>
          <button className="py-3 text-[#5c5c5c]">Charges</button>
          <button
            type="button"
            onClick={() => setActiveTab("incidents")}
            className={`border-b-2 py-3 font-medium ${
              activeTab === "incidents"
                ? "border-[#171717]"
                : "border-transparent text-[#5c5c5c]"
            }`}
          >
            Incidents
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("equipment")}
            className={`inline-flex items-center gap-1.5 border-b-2 py-3 font-medium ${
              activeTab === "equipment"
                ? "border-[#171717]"
                : "border-transparent text-[#5c5c5c]"
            }`}
          >
            Equipment
            {showEquipmentAttentionCount && (
              <EquipmentAttentionIndicator
                count={attentionCount}
                mode={equipmentAttentionIndicator}
              />
            )}
          </button>
          <button className="py-3 text-[#5c5c5c]">Settings</button>
        </nav>
        {activeTab === "incidents" ? (
          <SiteIncidents />
        ) : (
          <div className="mt-7 w-full">
            <OperationalEquipmentList
              siteId={site.id}
              onOpenDetail={onOpenDetail}
              healthFilter={equipmentHealthFilter}
              onHealthFilterChange={onEquipmentHealthFilterChange}
              view={equipmentPresentation}
              groupBySystem={groupEquipmentBySystem}
              groupByType={groupEquipmentByType}
              groupingOrder={equipmentGroupingOrder}
              statusSource={equipmentStatusSource}
              fullEquipmentDetails={fullEquipmentDetails}
            />
          </div>
        )}
      </main>
    </div>
  )
}
