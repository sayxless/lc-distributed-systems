export type EquipmentAttentionIndicatorMode = "counter" | "highlight"

export default function EquipmentAttentionIndicator({
  count,
  mode,
}: {
  count: number
  mode: EquipmentAttentionIndicatorMode
}) {
  if (!count) return null

  if (mode === "highlight") {
    return (
      <span
        role="img"
        aria-label="Equipment needs attention"
        title="Equipment needs attention"
        className="inline-block size-2 rounded-full bg-[#d5302a]"
      />
    )
  }

  return (
    <span className="inline-flex min-w-5 items-center justify-center rounded-md bg-[#f2f2f2] px-1.5 text-[12px] leading-5 text-[#525252]">
      {count}
    </span>
  )
}
