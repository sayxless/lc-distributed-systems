import { useState, useEffect, useRef } from "react"
import DistributedSystems from "@/imports/DistributedSystems/index"
import Units from "@/imports/Units-1/index"
import Gensets from "@/imports/Gensets/index"
import Bess from "@/imports/Bess/index"
import ParallelingPanels from "@/imports/ParallelingPanels/index"
import Chargers from "@/imports/Chargers-2/index"
import SiteOperationalEquipmentPage from "@/SiteOperationalEquipmentPage"
import ChargersSidebarItem from "@/ChargersSidebarItem"
import SiteScreenWrapper from "@/SiteScreenWrapper"
import PrototypeLauncher from "@/PrototypeLauncher"
import { defaultSiteId, sites } from "@/prototypeData"
import EquipmentPage, {
  equipmentDetailTargets,
  type EquipmentDetailTarget,
  type EquipmentSectionId,
  type EquipmentSystemFilter,
} from "@/EquipmentPage"
import EquipmentDetailPage from "@/EquipmentDetailPage"
import SiteOverviewPage from "@/SiteOverviewPage"
import type {
  OperationalEquipmentHealthFilter,
  OperationalEquipmentGrouping,
  OperationalEquipmentPresentation,
  OperationalEquipmentStatusSource,
} from "@/OperationalEquipmentList"
import type { EquipmentAttentionIndicatorMode } from "@/EquipmentAttentionIndicator"

type Screen = "home" | "units" | "distributed" | "gensets" | "bess" | "paralleling" | "site" | "chargers" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment" | "equipmentDetail"

type EquipmentDetailOrigin = {
  screen: Exclude<Screen, "equipmentDetail">
  siteId: string
  systemFilter: EquipmentSystemFilter | null
}

// ─── Sidebar click-target Y coordinates ────────────────────────────────────
//
// All Equipment screens except Units: absolute top-[61px] layout.
//   Section (gap-[10px], items 32px):
//     Integrated units     y = 93
//     Distributed systems  y = 135
//   Section1 gap-[32px] after Section → starts at 199:
//     Caption "Equipment"  y = 199 (h = 20)
//     SidebarNavigation gap-[12px] starts at 231:
//
// OLD screens (DistributedSystems/Gensets/Bess/ParallelingPanels):
//   Originally: Gensets=231, BESS=275, Paralleling=319.
//   After CSS padding-top:44px on [data-name="sidebar navigation"]:
//     Chargers  y = 231  ← injected visual item
//     Gensets   y = 275  (shifted +44)
//     BESS      y = 319  (shifted +44)
//     Paralleling y = 363 (shifted +44)
//
// Chargers screen: already correct (Chargers active at 231, others at 275/319/363).
//
// Units (flex-col, header ~53px):
//   Originally: Gensets=223, BESS=267, Paralleling=311.
//   After padding-top:44px:
//     Chargers  y = 223  ← injected
//     Gensets   y = 267  (shifted +44)
//     BESS      y = 311  (shifted +44)
//     Paralleling y = 355 (shifted +44)

const SIDEBAR_LEFT = 24
const SIDEBAR_WIDTH = 184
const ITEM_H = 32

type SidebarTargets = {
  integratedUnits: number
  distributedSystems: number
  chargers: number // -1 = not present (Chargers screen itself)
  gensets: number
  bess: number
  paralleling: number
}

// All Equipment screens now share the same Equipment-section positions
// after the CSS padding-top shift on old screens.
const ABS_COORDS: SidebarTargets = {
  integratedUnits: 93,
  distributedSystems: 135,
  chargers: 231,
  gensets: 275,
  bess: 319,
  paralleling: 363,
}

const UNITS_COORDS: SidebarTargets = {
  integratedUnits: 85,
  distributedSystems: 127,
  chargers: 231,
  gensets: 267,
  bess: 311,
  paralleling: 355,
}

// Chargers screen: Chargers is active → chargers: -1 so btn() skips it.
// Gensets/BESS/Paralleling are already at the right positions in the import.
const CHARGERS_COORDS: SidebarTargets = {
  integratedUnits: 93,
  distributedSystems: 135,
  chargers: -1,
  gensets: 275,
  bess: 319,
  paralleling: 363,
}

const coords: Record<Exclude<Screen, "site" | "home" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment" | "equipmentDetail">, SidebarTargets> =
  {
    distributed: ABS_COORDS,
    gensets: ABS_COORDS,
    bess: ABS_COORDS,
    paralleling: ABS_COORDS,
    units: ABS_COORDS, // Units-1 has same header height as other new screens
    chargers: CHARGERS_COORDS,
  }

// Old screens need a visual Chargers item injected at the top of the Equipment list.
// Units-1 already has Chargers in its native sidebar, so it is excluded.
const OLD_SCREENS = new Set<Screen>([
  "distributed",
  "gensets",
  "bess",
  "paralleling",
])

function NavOverlay({
  targets,
  current,
  navigate,
}: {
  targets: SidebarTargets
  current: Screen
  navigate: (s: Screen) => void
}) {
  const btn = (screen: Screen, top: number) =>
    top < 0 || current === screen ? null : (
      <button
        key={screen}
        onClick={() => navigate(screen)}
        style={{
          position: "absolute",
          top,
          left: SIDEBAR_LEFT,
          width: SIDEBAR_WIDTH,
          height: ITEM_H,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          pointerEvents: "auto",
        }}
        aria-label={`Go to ${screen}`}
      />
    )

  return (
    <div className="absolute inset-0 pointer-events-none">
      {btn("units", targets.integratedUnits)}
      {btn("distributed", targets.distributedSystems)}
      {btn("gensets", targets.gensets)}
      {btn("bess", targets.bess)}
      {btn("paralleling", targets.paralleling)}

      {/* Inject visual Chargers item on old screens that lack it in their import */}
      {OLD_SCREENS.has(current) && (
        <ChargersSidebarItem
          top={targets.chargers}
          onClick={() => navigate("chargers")}
        />
      )}
    </div>
  )
}

// Document-level click delegation for:
//   • Top nav: "Sites" → site, "Equipment" → units
//   • Sites table first data row → siteOverview (only when site screen is active)
function useNavigation(screen: Screen, navigate: (s: Screen) => void) {
  // Keep a ref so the stable handler always reads the latest screen value.
  const screenRef = useRef(screen)
  screenRef.current = screen

  useEffect(() => {
    function handler(e: MouseEvent) {
      const el = e.target as HTMLElement

      const viewSwitcher = el.closest<HTMLButtonElement>(
        "[data-prototype-view]",
      )
      if (viewSwitcher) {
        const mode = viewSwitcher.dataset.prototypeView
        navigate(
          mode === "table"
            ? "siteOverview2"
            : mode === "cards"
              ? "siteOverviewCards"
              : "siteOverview",
        )
        return
      }

      const siteTab = el.closest<HTMLElement>("[data-prototype-site-tab]")
      if (siteTab) {
        navigate(
          siteTab.dataset.prototypeSiteTab === "equipment"
            ? "siteEquipment"
            : "siteOverview",
        )
        return
      }

      // Top-nav items
      const navItem = el.closest('[data-name=".base/nav item"]')
      if (navItem) {
        const text = navItem.textContent?.trim()
        if (text === "Sites") {
          navigate("site")
          return
        }
        if (text === "Equipment") {
          navigate("units")
          return
        }
      }

      // Sites table first data row — navigate to site overview.
      // Works for all column types (with or without data-name="table cell"):
      // find the column ancestor, then find which direct child of it contains
      // the click — child index 1 (0-based, i.e. 2nd child) is always the
      // first data row across every column variant in Site-2.
      if (screenRef.current === "site") {
        const col = el.closest(
          '[data-name="col"], [data-name=".local -col - alerts"]',
        )
        if (col) {
          let child: Element = el
          while (child.parentElement && child.parentElement !== col) {
            child = child.parentElement
          }
          if (Array.from(col.children).indexOf(child) === 1) {
            navigate("siteOverview")
          }
        }
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [navigate])
}

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[22px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.67 4.18c.23-.94 1.06-1.6 2.03-1.6h.6c.97 0 1.8.66 2.03 1.6l.14.58c.1.39.38.71.75.86.36.15.78.12 1.12-.08l.5-.29a2.1 2.1 0 0 1 2.56.32l.42.42a2.1 2.1 0 0 1 .32 2.56l-.29.5c-.2.34-.23.76-.08 1.12.15.37.47.65.86.75l.58.14c.94.23 1.6 1.06 1.6 2.03v.6c0 .97-.66 1.8-1.6 2.03l-.58.14c-.39.1-.71.38-.86.75-.15.36-.12.78.08 1.12l.29.5a2.1 2.1 0 0 1-.32 2.56l-.42.42a2.1 2.1 0 0 1-2.56.32l-.5-.29c-.34-.2-.76-.23-1.12-.08-.37.15-.65.47-.75.86l-.14.58c-.23.94-1.06 1.6-2.03 1.6h-.6c-.97 0-1.8-.66-2.03-1.6l-.14-.58a1.5 1.5 0 0 0-.75-.86c-.36-.15-.78-.12-1.12.08l-.5.29a2.1 2.1 0 0 1-2.56-.32l-.42-.42a2.1 2.1 0 0 1-.32-2.56l.29-.5c.2-.34.23-.76.08-1.12a1.5 1.5 0 0 0-.86-.75l-.58-.14a2.1 2.1 0 0 1-1.6-2.03v-.6c0-.97.66-1.8 1.6-2.03l.58-.14c.39-.1.71-.38.86-.75.15-.36.12-.78-.08-1.12l-.29-.5a2.1 2.1 0 0 1 .32-2.56l.42-.42a2.1 2.1 0 0 1 2.56-.32l.5.29c.34.2.76.23 1.12.08.37-.15.65-.47.75-.86l.14-.58Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  )
}

function PrototypeSettings({
  onOpenAllScreens,
  equipmentPresentation,
  onEquipmentPresentationChange,
  groupEquipmentBySystem,
  onGroupEquipmentBySystemChange,
  groupEquipmentByType,
  onGroupEquipmentByTypeChange,
  equipmentStatusSource,
  onEquipmentStatusSourceChange,
  fullEquipmentDetails,
  onFullEquipmentDetailsChange,
  showEquipmentAttentionCount,
  onShowEquipmentAttentionCountChange,
  equipmentAttentionIndicator,
  onEquipmentAttentionIndicatorChange,
  overviewEquipmentVisible,
  onOverviewEquipmentVisibleChange,
}: {
  onOpenAllScreens: () => void
  equipmentPresentation: OperationalEquipmentPresentation
  onEquipmentPresentationChange: (
    presentation: OperationalEquipmentPresentation,
  ) => void
  groupEquipmentBySystem: boolean
  onGroupEquipmentBySystemChange: (groupBySystem: boolean) => void
  groupEquipmentByType: boolean
  onGroupEquipmentByTypeChange: (groupByType: boolean) => void
  equipmentStatusSource: OperationalEquipmentStatusSource
  onEquipmentStatusSourceChange: (
    source: OperationalEquipmentStatusSource,
  ) => void
  fullEquipmentDetails: boolean
  onFullEquipmentDetailsChange: (enabled: boolean) => void
  showEquipmentAttentionCount: boolean
  onShowEquipmentAttentionCountChange: (visible: boolean) => void
  equipmentAttentionIndicator: EquipmentAttentionIndicatorMode
  onEquipmentAttentionIndicatorChange: (
    indicator: EquipmentAttentionIndicatorMode,
  ) => void
  overviewEquipmentVisible: boolean
  onOverviewEquipmentVisibleChange: (visible: boolean) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-[10000] flex flex-col items-end gap-3"
    >
      {isOpen && (
        <section
          id="prototype-settings-menu"
          aria-label="Prototype settings"
          className="w-64 rounded-xl bg-white p-1.5 shadow-[0_12px_28px_rgba(16,24,40,0.18),0_2px_6px_rgba(16,24,40,0.08)] ring-1 ring-black/10"
        >
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              onOpenAllScreens()
            }}
            className="min-h-10 w-full rounded-lg px-3 text-left text-sm font-medium text-[#30353d] transition-colors duration-150 hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
          >
            All screens
          </button>
          <div className="mt-1 border-t border-[#eeeeee] px-3 pb-2 pt-3">
            <p className="text-sm font-medium text-[#30353d]">Equipment view</p>
            <div
              role="group"
              aria-label="Equipment presentation settings"
              className="mt-2 grid grid-cols-2 rounded-lg bg-[#f2f2f2] p-1"
            >
              {([
                ["segment", "Segment"],
                ["grouped", "Grouped view"],
              ] as const).map(([presentation, label]) => (
                <button
                  key={presentation}
                  type="button"
                  aria-pressed={equipmentPresentation === presentation}
                  onClick={() => onEquipmentPresentationChange(presentation)}
                  className={`h-8 rounded-md px-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                    equipmentPresentation === presentation
                      ? "bg-white font-medium text-[#171717] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                      : "text-[#666] hover:text-[#171717]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#30353d]">
                  Full equipment details
                </p>
                <p className="mt-0.5 text-xs text-[#757575]">
                  Equipment tabs only · grouped by type
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={fullEquipmentDetails}
                aria-label="Show full equipment details"
                onClick={() =>
                  onFullEquipmentDetailsChange(!fullEquipmentDetails)
                }
                className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  fullEquipmentDetails ? "bg-[#1dcc6e]" : "bg-[#c9c9c9]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-transform duration-150 ${
                    fullEquipmentDetails ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 py-3">
            <p className="text-sm font-medium text-[#30353d]">
              Equipment status
            </p>
            <div
              role="group"
              aria-label="Equipment status source"
              className="mt-2 grid grid-cols-2 rounded-lg bg-[#f2f2f2] p-1"
            >
              {([
                ["health", "Health"],
                ["status", "Status"],
              ] as const).map(([source, label]) => (
                <button
                  key={source}
                  type="button"
                  aria-pressed={equipmentStatusSource === source}
                  onClick={() => onEquipmentStatusSourceChange(source)}
                  className={`h-8 rounded-md px-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                    equipmentStatusSource === source
                      ? "bg-white font-medium text-[#171717] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                      : "text-[#666] hover:text-[#171717]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#30353d]">
                  Group by system
                </p>
                <p className="mt-0.5 text-xs text-[#757575]">
                  Segment view only
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={groupEquipmentBySystem}
                aria-label="Group equipment by system"
                onClick={() =>
                  onGroupEquipmentBySystemChange(!groupEquipmentBySystem)
                }
                className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  groupEquipmentBySystem ? "bg-[#1dcc6e]" : "bg-[#c9c9c9]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-transform duration-150 ${
                    groupEquipmentBySystem ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#30353d]">
                  Group by type
                </p>
                <p className="mt-0.5 text-xs text-[#757575]">
                  Segment view only
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={groupEquipmentByType}
                aria-label="Group equipment by type"
                onClick={() => onGroupEquipmentByTypeChange(!groupEquipmentByType)}
                className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  groupEquipmentByType ? "bg-[#1dcc6e]" : "bg-[#c9c9c9]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-transform duration-150 ${
                    groupEquipmentByType ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#30353d]">
                Equipment attention count
              </p>
              <button
                type="button"
                role="switch"
                aria-checked={showEquipmentAttentionCount}
                aria-label="Show equipment attention count"
                onClick={() =>
                  onShowEquipmentAttentionCountChange(
                    !showEquipmentAttentionCount,
                  )
                }
                className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  showEquipmentAttentionCount ? "bg-[#1dcc6e]" : "bg-[#c9c9c9]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-transform duration-150 ${
                    showEquipmentAttentionCount
                      ? "translate-x-4"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div
              role="group"
              aria-label="Equipment attention indicator"
              className="mt-2 grid grid-cols-2 rounded-lg bg-[#f2f2f2] p-1"
            >
              {([
                ["counter", "Counter"],
                ["highlight", "Highlight"],
              ] as const).map(([indicator, label]) => (
                <button
                  key={indicator}
                  type="button"
                  aria-pressed={equipmentAttentionIndicator === indicator}
                  onClick={() => onEquipmentAttentionIndicatorChange(indicator)}
                  className={`h-8 rounded-md px-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                    equipmentAttentionIndicator === indicator
                      ? "bg-white font-medium text-[#171717] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                      : "text-[#666] hover:text-[#171717]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-1 border-t border-[#eeeeee] px-3 pb-2 pt-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-[#30353d]">
                Overview equipment
              </p>
              <button
                type="button"
                role="switch"
                aria-checked={overviewEquipmentVisible}
                aria-label="Show equipment on overview"
                onClick={() =>
                  onOverviewEquipmentVisibleChange(!overviewEquipmentVisible)
                }
                className={`relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${
                  overviewEquipmentVisible ? "bg-[#1dcc6e]" : "bg-[#c9c9c9]"
                }`}
              >
                <span
                  className={`pointer-events-none absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.16)] transition-transform duration-150 ${
                    overviewEquipmentVisible
                      ? "translate-x-4"
                      : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-label="Prototype settings"
        aria-expanded={isOpen}
        aria-controls="prototype-settings-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="grid size-11 place-items-center rounded-full bg-white text-[#5d6269] shadow-[0_1px_3px_rgba(16,24,40,0.14),0_1px_2px_rgba(16,24,40,0.1)] ring-2 ring-[#eaa000] outline-offset-4 transition-transform duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-[#2357d9]"
      >
        <GearIcon />
      </button>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("site")
  const [selectedSiteId, setSelectedSiteId] = useState(defaultSiteId)
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentDetailTarget | null>(null)
  const [equipmentDetailOrigin, setEquipmentDetailOrigin] =
    useState<EquipmentDetailOrigin | null>(null)
  const [overviewEquipmentVisible, setOverviewEquipmentVisible] = useState(true)
  const [equipmentHealthFilter, setEquipmentHealthFilter] =
    useState<OperationalEquipmentHealthFilter>("critical")
  const [equipmentPresentation, setEquipmentPresentation] =
    useState<OperationalEquipmentPresentation>("segment")
  const [groupEquipmentBySystem, setGroupEquipmentBySystem] = useState(true)
  const [groupEquipmentByType, setGroupEquipmentByType] = useState(false)
  const [equipmentGroupingOrder, setEquipmentGroupingOrder] = useState<
    OperationalEquipmentGrouping[]
  >(["system", "type"])
  const [showEquipmentAttentionCount, setShowEquipmentAttentionCount] =
    useState(true)
  const [equipmentAttentionIndicator, setEquipmentAttentionIndicator] =
    useState<EquipmentAttentionIndicatorMode>("counter")
  const [equipmentStatusSource, setEquipmentStatusSource] =
    useState<OperationalEquipmentStatusSource>("health")
  const [fullEquipmentDetails, setFullEquipmentDetails] = useState(false)
  const [equipmentSystemFilter, setEquipmentSystemFilter] =
    useState<EquipmentSystemFilter | null>(null)

  useNavigation(screen, setScreen)

  const equipmentTabEnabled = true

  function changeEquipmentGrouping(
    grouping: OperationalEquipmentGrouping,
    enabled: boolean,
  ) {
    if (grouping === "system") setGroupEquipmentBySystem(enabled)
    else setGroupEquipmentByType(enabled)
    setEquipmentGroupingOrder((current) =>
      enabled
        ? [...current.filter((item) => item !== grouping), grouping]
        : current.filter((item) => item !== grouping),
    )
  }

  function changeSite(offset: -1 | 1) {
    const currentIndex = sites.findIndex((site) => site.id === selectedSiteId)
    const nextIndex = (currentIndex + offset + sites.length) % sites.length
    setSelectedSiteId(sites[nextIndex].id)
  }

  const isSiteOverview =
    screen === "siteOverview" ||
    screen === "siteOverview2" ||
    screen === "siteOverviewCards" ||
    screen === "siteEquipment"
  const hasSidebar = false
  const equipmentSectionByScreen: Partial<Record<Screen, EquipmentSectionId>> =
    {
      units: "units",
      distributed: "distributed",
      chargers: "chargers",
      gensets: "gensets",
      bess: "bess",
      paralleling: "paralleling",
    }
  const equipmentSection = equipmentSectionByScreen[screen]
  const detailTargets = selectedEquipment
    ? equipmentDetailTargets(selectedEquipment.section)
    : []
  const selectedEquipmentIndex = selectedEquipment
    ? Math.max(
        0,
        detailTargets.findIndex(
          (target) =>
            target.id === selectedEquipment.id &&
            target.partnerId === selectedEquipment.partnerId &&
            target.site === selectedEquipment.site &&
            target.system === selectedEquipment.system,
        ),
      )
    : 0

  function changeEquipment(offset: -1 | 1) {
    if (!detailTargets.length) return
    const nextIndex =
      (selectedEquipmentIndex + offset + detailTargets.length) %
      detailTargets.length
    setSelectedEquipment(detailTargets[nextIndex])
  }

  function openEquipmentDetail(target: EquipmentDetailTarget) {
    if (screen !== "equipmentDetail") {
      setEquipmentDetailOrigin({
        screen,
        siteId: selectedSiteId,
        systemFilter: equipmentSystemFilter,
      })
    }
    setSelectedEquipment(target)
    setScreen("equipmentDetail")
  }

  function openEquipmentSection(
    section: EquipmentSectionId,
    system: EquipmentSystemFilter,
  ) {
    setEquipmentSystemFilter(system)
    setScreen(
      section === "units"
        ? "units"
        : section === "distributed"
          ? "distributed"
          : section === "chargers"
            ? "chargers"
            : section === "gensets"
              ? "gensets"
              : section === "bess"
                ? "bess"
                : "paralleling",
    )
  }

  useEffect(() => {
    const handleOpenEquipmentSection = (event: Event) => {
      const detail = (event as CustomEvent<{
        section: EquipmentSectionId
        system: EquipmentSystemFilter
      }>).detail
      if (detail) openEquipmentSection(detail.section, detail.system)
    }
    window.addEventListener(
      "prototype:open-equipment-section",
      handleOpenEquipmentSection,
    )
    return () =>
      window.removeEventListener(
        "prototype:open-equipment-section",
        handleOpenEquipmentSection,
      )
  }, [])

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      data-selected-site-id={selectedSiteId}
    >
      <div className="absolute inset-0">
        {screen === "home" && <PrototypeLauncher onOpen={setScreen} />}
        {equipmentSection && (
          <EquipmentPage
            activeSection={equipmentSection}
            onNavigate={(section) => {
              setEquipmentSystemFilter(null)
              setScreen(
                section === "units"
                  ? "units"
                  : section === "distributed"
                    ? "distributed"
                    : section === "chargers"
                      ? "chargers"
                      : section === "gensets"
                        ? "gensets"
                        : section === "bess"
                          ? "bess"
                          : "paralleling",
              )
            }}
            systemFilter={equipmentSystemFilter}
            onClearSystemFilter={() => setEquipmentSystemFilter(null)}
            onOpenSites={() => setScreen("site")}
            onOpenDetail={openEquipmentDetail}
          />
        )}
        {screen === "equipmentDetail" && selectedEquipment && (
          <EquipmentDetailPage
            target={selectedEquipment}
            onOpenSites={() => setScreen("site")}
            onOpenDetail={(target) => setSelectedEquipment(target)}
            position={selectedEquipmentIndex + 1}
            total={detailTargets.length}
            onPrevious={() => changeEquipment(-1)}
            onNext={() => changeEquipment(1)}
            overviewEquipmentVisible={overviewEquipmentVisible}
            equipmentHealthFilter={equipmentHealthFilter}
            onEquipmentHealthFilterChange={setEquipmentHealthFilter}
            equipmentPresentation={equipmentPresentation}
            groupEquipmentBySystem={groupEquipmentBySystem}
            groupEquipmentByType={groupEquipmentByType}
            equipmentGroupingOrder={equipmentGroupingOrder}
            equipmentStatusSource={equipmentStatusSource}
            fullEquipmentDetails={fullEquipmentDetails}
            showEquipmentAttentionCount={showEquipmentAttentionCount}
            equipmentAttentionIndicator={equipmentAttentionIndicator}
            onBack={() => {
              if (equipmentDetailOrigin) {
                setSelectedSiteId(equipmentDetailOrigin.siteId)
                setEquipmentSystemFilter(equipmentDetailOrigin.systemFilter)
                setScreen(equipmentDetailOrigin.screen)
                setEquipmentDetailOrigin(null)
                return
              }
              setScreen(
                selectedEquipment.section === "units"
                  ? "units"
                  : selectedEquipment.section === "distributed"
                    ? "distributed"
                    : selectedEquipment.section === "chargers"
                      ? "chargers"
                      : selectedEquipment.section === "gensets"
                        ? "gensets"
                        : selectedEquipment.section === "bess"
                          ? "bess"
                          : "paralleling",
              )
            }}
          />
        )}
        {screen === "site" && (
          <SiteScreenWrapper
            onOpenSite={(siteId) => {
              setSelectedSiteId(siteId)
              setScreen("siteOverview")
            }}
            onOpenEquipment={() => setScreen("units")}
          />
        )}
        {screen === "siteOverview" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewPage
              siteId={selectedSiteId}
              overviewEquipmentVisible={overviewEquipmentVisible}
              equipmentHealthFilter={equipmentHealthFilter}
              onEquipmentHealthFilterChange={setEquipmentHealthFilter}
              equipmentPresentation={equipmentPresentation}
              groupEquipmentBySystem={groupEquipmentBySystem}
              groupEquipmentByType={groupEquipmentByType}
              equipmentGroupingOrder={equipmentGroupingOrder}
              equipmentStatusSource={equipmentStatusSource}
              showEquipmentAttentionCount={showEquipmentAttentionCount}
              equipmentAttentionIndicator={equipmentAttentionIndicator}
              onOpenEquipmentDetail={openEquipmentDetail}
              equipmentTabEnabled={equipmentTabEnabled}
              onOpenSites={() => setScreen("site")}
              onOpenEquipment={() => setScreen("units")}
              onOpenEquipmentTab={() => setScreen("siteEquipment")}
              onPreviousSite={() => changeSite(-1)}
              onNextSite={() => changeSite(1)}
            />
          </div>
        )}
        {screen === "siteOverview2" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewPage
              siteId={selectedSiteId}
              overviewEquipmentVisible={overviewEquipmentVisible}
              equipmentHealthFilter={equipmentHealthFilter}
              onEquipmentHealthFilterChange={setEquipmentHealthFilter}
              equipmentPresentation={equipmentPresentation}
              groupEquipmentBySystem={groupEquipmentBySystem}
              groupEquipmentByType={groupEquipmentByType}
              equipmentGroupingOrder={equipmentGroupingOrder}
              equipmentStatusSource={equipmentStatusSource}
              showEquipmentAttentionCount={showEquipmentAttentionCount}
              equipmentAttentionIndicator={equipmentAttentionIndicator}
              onOpenEquipmentDetail={openEquipmentDetail}
              equipmentTabEnabled={equipmentTabEnabled}
              onOpenSites={() => setScreen("site")}
              onOpenEquipment={() => setScreen("units")}
              onOpenEquipmentTab={() => setScreen("siteEquipment")}
              onPreviousSite={() => changeSite(-1)}
              onNextSite={() => changeSite(1)}
            />
          </div>
        )}
        {screen === "siteOverviewCards" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewPage
              siteId={selectedSiteId}
              overviewEquipmentVisible={overviewEquipmentVisible}
              equipmentHealthFilter={equipmentHealthFilter}
              onEquipmentHealthFilterChange={setEquipmentHealthFilter}
              equipmentPresentation={equipmentPresentation}
              groupEquipmentBySystem={groupEquipmentBySystem}
              groupEquipmentByType={groupEquipmentByType}
              equipmentGroupingOrder={equipmentGroupingOrder}
              equipmentStatusSource={equipmentStatusSource}
              showEquipmentAttentionCount={showEquipmentAttentionCount}
              equipmentAttentionIndicator={equipmentAttentionIndicator}
              onOpenEquipmentDetail={openEquipmentDetail}
              equipmentTabEnabled={equipmentTabEnabled}
              onOpenSites={() => setScreen("site")}
              onOpenEquipment={() => setScreen("units")}
              onOpenEquipmentTab={() => setScreen("siteEquipment")}
              onPreviousSite={() => changeSite(-1)}
              onNextSite={() => changeSite(1)}
            />
          </div>
        )}
        {screen === "siteEquipment" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOperationalEquipmentPage
              siteId={selectedSiteId}
              onOpenSites={() => setScreen("site")}
              onOpenOverview={() => setScreen("siteOverview")}
              onPreviousSite={() => changeSite(-1)}
              onNextSite={() => changeSite(1)}
              onOpenDetail={openEquipmentDetail}
              equipmentHealthFilter={equipmentHealthFilter}
              onEquipmentHealthFilterChange={setEquipmentHealthFilter}
              equipmentPresentation={equipmentPresentation}
              groupEquipmentBySystem={groupEquipmentBySystem}
              groupEquipmentByType={groupEquipmentByType}
              equipmentGroupingOrder={equipmentGroupingOrder}
              equipmentStatusSource={equipmentStatusSource}
              fullEquipmentDetails={fullEquipmentDetails}
              showEquipmentAttentionCount={showEquipmentAttentionCount}
              equipmentAttentionIndicator={equipmentAttentionIndicator}
            />
          </div>
        )}
      </div>

      {hasSidebar && (
        <NavOverlay
          targets={
            coords[
              (screen as Exclude<Screen, "site" | "home" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment" | "equipmentDetail">)
            ]
          }
          current={screen}
          navigate={setScreen}
        />
      )}

      <PrototypeSettings
        onOpenAllScreens={() => setScreen("home")}
        equipmentPresentation={equipmentPresentation}
        onEquipmentPresentationChange={setEquipmentPresentation}
        groupEquipmentBySystem={groupEquipmentBySystem}
        onGroupEquipmentBySystemChange={(enabled) =>
          changeEquipmentGrouping("system", enabled)
        }
        groupEquipmentByType={groupEquipmentByType}
        onGroupEquipmentByTypeChange={(enabled) =>
          changeEquipmentGrouping("type", enabled)
        }
        equipmentStatusSource={equipmentStatusSource}
        onEquipmentStatusSourceChange={setEquipmentStatusSource}
        fullEquipmentDetails={fullEquipmentDetails}
        onFullEquipmentDetailsChange={setFullEquipmentDetails}
        showEquipmentAttentionCount={showEquipmentAttentionCount}
        onShowEquipmentAttentionCountChange={setShowEquipmentAttentionCount}
        equipmentAttentionIndicator={equipmentAttentionIndicator}
        onEquipmentAttentionIndicatorChange={setEquipmentAttentionIndicator}
        overviewEquipmentVisible={overviewEquipmentVisible}
        onOverviewEquipmentVisibleChange={setOverviewEquipmentVisible}
      />
    </div>
  )
}
