export type StatusIconName =
  | "available"
  | "charging"
  | "charged"
  | "preparing"
  | "unavailable"
  | "faulted"
  | "aborted"
  | "not-started"
  | "online"
  | "offline"
  | "site"

const sources: Record<StatusIconName, string> = {
  available: "/icons/ic_available.svg",
  charging: "/icons/ic_charging.svg",
  charged: "/icons/ic_charged.svg",
  preparing: "/icons/ic_preparing.svg",
  unavailable: "/icons/ic_unavailable.svg",
  faulted: "/icons/ic_faulted.svg",
  aborted: "/icons/ic_aborted.svg",
  "not-started": "/icons/ic_not_started.svg",
  online: "/icons/ic_online.svg",
  offline: "/icons/ic_ofline.svg",
  site: "/icons/ic_site.svg",
}

export default function StatusIcon({ name, className = "size-5" }: { name: StatusIconName; className?: string }) {
  return <img aria-hidden="true" alt="" src={sources[name]} className={`${className} shrink-0`} />
}
