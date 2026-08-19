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

const iconBase = `${import.meta.env.BASE_URL}icons/`

const sources: Record<StatusIconName, string> = {
  available: `${iconBase}ic_available.svg`,
  charging: `${iconBase}ic_charging.svg`,
  charged: `${iconBase}ic_charged.svg`,
  preparing: `${iconBase}ic_preparing.svg`,
  unavailable: `${iconBase}ic_unavailable.svg`,
  faulted: `${iconBase}ic_faulted.svg`,
  aborted: `${iconBase}ic_aborted.svg`,
  "not-started": `${iconBase}ic_not_started.svg`,
  online: `${iconBase}ic_online.svg`,
  offline: `${iconBase}ic_ofline.svg`,
  site: `${iconBase}ic_site.svg`,
}

export default function StatusIcon({ name, className = "size-5" }: { name: StatusIconName; className?: string }) {
  return <img aria-hidden="true" alt="" src={sources[name]} className={`${className} shrink-0`} />
}
