export type ChartVariantKind = "energy" | "utilization" | "charges" | "incidents"

const baseValues = [24, 76, 35, 22, 42, 38, 30, 75, 55, 26, 38, 45, 44, 51, 65, 28, 20, 59, 26, 18, 37, 54, 66, 74]

function hash(value: string) {
  return [...value].reduce((result, character) => ((result * 31) + character.charCodeAt(0)) >>> 0, 2166136261)
}

/** Stable visual variation: an entity retains its chart, while neighbouring
 * entities do not look like copies of each other. */
export function chartValuesFor(entityKey: string, kind: ChartVariantKind) {
  const seed = hash(`${entityKey}:${kind}`)
  return baseValues.map((value, index) => {
    const offset = ((seed >>> ((index % 6) * 4)) & 0xf) - 7
    const wave = ((seed + index * 11) % 9) - 4
    return Math.max(10, Math.min(92, value + offset * 2 + wave))
  })
}
