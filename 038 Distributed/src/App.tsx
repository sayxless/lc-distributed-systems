import { useState, useEffect, useRef } from "react"
import DistributedSystems from "@/imports/DistributedSystems/index"
import Units from "@/imports/Units-1/index"
import Gensets from "@/imports/Gensets/index"
import Bess from "@/imports/Bess/index"
import ParallelingPanels from "@/imports/ParallelingPanels/index"
import Chargers from "@/imports/Chargers-2/index"
import SiteOverviewV from "@/imports/SiteOverviewV1/index"
import SiteOverviewV2 from "@/imports/SiteOverview/index"
import SiteOverviewCards from "@/SiteOverviewCards"
import SiteEquipment from "@/SiteEquipment"
import ChargersSidebarItem from "@/ChargersSidebarItem"
import SiteScreenWrapper from "@/SiteScreenWrapper"
import PrototypeLauncher from "@/PrototypeLauncher"

type Screen = "home" | "units" | "distributed" | "gensets" | "bess" | "paralleling" | "site" | "chargers" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment"

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

const coords: Record<Exclude<Screen, "site" | "home" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment">, SidebarTargets> =
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
  equipmentEnabled,
  onEquipmentEnabledChange,
}: {
  onOpenAllScreens: () => void
  equipmentEnabled: boolean
  onEquipmentEnabledChange: (enabled: boolean) => void
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
          className="w-56 rounded-xl bg-white p-1.5 shadow-[0_12px_28px_rgba(16,24,40,0.18),0_2px_6px_rgba(16,24,40,0.08)] ring-1 ring-black/10"
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
          <div className="mt-1 flex min-h-10 items-center justify-between gap-3 rounded-lg px-3 py-1.5">
            <span className="text-sm font-medium text-[#30353d]">
              Site equipment
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={equipmentEnabled}
              aria-label="Show site equipment on the site page"
              onClick={() => onEquipmentEnabledChange(!equipmentEnabled)}
              className={`relative h-6 w-10 shrink-0 rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9] ${equipmentEnabled ? "bg-[#00c86b]" : "bg-[#bdbdbd]"}`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform duration-150 ${equipmentEnabled ? "translate-x-4" : "translate-x-0"}`}
              />
            </button>
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
  const [equipmentEnabled, setEquipmentEnabled] = useState(true)

  useNavigation(screen, setScreen)

  const equipmentOnOverview = equipmentEnabled
  const equipmentTabEnabled = equipmentEnabled

  function handleEquipmentEnabledChange(enabled: boolean) {
    setEquipmentEnabled(enabled)
    if (!enabled && screen === "siteEquipment") {
      setScreen("siteOverview")
    }
  }

  const isSiteOverview =
    screen === "siteOverview" ||
    screen === "siteOverview2" ||
    screen === "siteOverviewCards" ||
    screen === "siteEquipment"
  const hasSidebar = screen !== "home" && screen !== "site" && !isSiteOverview

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {screen === "home" && <PrototypeLauncher onOpen={setScreen} />}
        {screen === "distributed" && (
          <div className="distributed-screen absolute inset-0">
            <DistributedSystems />
          </div>
        )}
        {screen === "units" && (
          <div className="units-screen absolute inset-0">
            <Units />
          </div>
        )}
        {screen === "gensets" && (
          <div className="gensets-screen absolute inset-0">
            <Gensets />
          </div>
        )}
        {screen === "bess" && (
          <div className="bess-screen absolute inset-0">
            <Bess />
          </div>
        )}
        {screen === "paralleling" && (
          <div className="paralleling-screen absolute inset-0">
            <ParallelingPanels />
          </div>
        )}
        {screen === "chargers" && <Chargers />}
        {screen === "site" && <SiteScreenWrapper />}
        {screen === "siteOverview" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewV
              equipmentOnOverview={equipmentOnOverview}
              equipmentTabEnabled={equipmentTabEnabled}
            />
          </div>
        )}
        {screen === "siteOverview2" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewV2
              equipmentOnOverview={equipmentOnOverview}
              equipmentTabEnabled={equipmentTabEnabled}
            />
          </div>
        )}
        {screen === "siteOverviewCards" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteOverviewCards
              equipmentOnOverview={equipmentOnOverview}
              equipmentTabEnabled={equipmentTabEnabled}
            />
          </div>
        )}
        {screen === "siteEquipment" && (
          <div className="site-overview-screen absolute inset-0">
            <SiteEquipment equipmentTabEnabled={equipmentTabEnabled} />
          </div>
        )}
      </div>

      {hasSidebar && (
        <NavOverlay
          targets={
            coords[
              (screen as Exclude<Screen, "site" | "home" | "siteOverview" | "siteOverview2" | "siteOverviewCards" | "siteEquipment">)
            ]
          }
          current={screen}
          navigate={setScreen}
        />
      )}

      <PrototypeSettings
        equipmentEnabled={equipmentEnabled}
        onEquipmentEnabledChange={handleEquipmentEnabledChange}
        onOpenAllScreens={() => setScreen("home")}
      />
    </div>
  )
}
