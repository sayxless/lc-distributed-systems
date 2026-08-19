export type EquipmentKind =
  | "distributed"
  | "paralleling"
  | "bess"
  | "gensets"
  | "chargers"
  | "units"

const iconBase = `${import.meta.env.BASE_URL}icons/`

const sources: Record<EquipmentKind, string> = {
  distributed: `${iconBase}distributed-system.svg`,
  paralleling: `${iconBase}paralleling-panel.svg`,
  bess: `${iconBase}bess.svg`,
  gensets: `${iconBase}genset.svg`,
  chargers: `${iconBase}charger.svg`,
  units: `${iconBase}integrated-unit.svg`,
}

export default function EquipmentTypeIcon({ kind }: { kind: EquipmentKind }) {
  return <img aria-hidden="true" alt="" src={sources[kind]} className="size-5 shrink-0" />
}
