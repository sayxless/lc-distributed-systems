export type EquipmentKind =
  | "distributed"
  | "paralleling"
  | "bess"
  | "gensets"
  | "chargers"
  | "units"

const sources: Record<EquipmentKind, string> = {
  distributed: "/icons/distributed-system.svg",
  paralleling: "/icons/paralleling-panel.svg",
  bess: "/icons/bess.svg",
  gensets: "/icons/genset.svg",
  chargers: "/icons/charger.svg",
  units: "/icons/integrated-unit.svg",
}

export default function EquipmentTypeIcon({ kind }: { kind: EquipmentKind }) {
  return <img aria-hidden="true" alt="" src={sources[kind]} className="size-5 shrink-0" />
}
