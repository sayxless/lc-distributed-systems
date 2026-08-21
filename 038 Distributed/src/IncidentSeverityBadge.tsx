type IncidentSeverity = "High" | "Medium" | "Low" | "Stopper"

export default function IncidentSeverityBadge({
  severity,
}: {
  severity: IncidentSeverity
}) {
  const tone =
    severity === "Low"
      ? "text-[#8a8a8a]"
      : severity === "Medium"
        ? "text-[#f4a51c]"
        : "text-[#d5302a]"

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#e5e5e5] px-2 py-1">
      <span aria-hidden="true" className={`flex h-4 items-end gap-0.5 ${tone}`}>
        {[7, 12, 16].map((height) => (
          <i
            key={height}
            className="w-1 rounded-sm bg-current"
            style={{ height }}
          />
        ))}
      </span>
      {severity}
    </span>
  )
}
