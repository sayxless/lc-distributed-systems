import SitesPage from "@/SitesPage"

export default function SiteScreenWrapper({
  onOpenSite,
  onOpenEquipment,
}: {
  onOpenSite: (siteId: string) => void
  onOpenEquipment: () => void
}) {
  return (
    <div className="site-screen absolute inset-0">
      <SitesPage onOpenSite={onOpenSite} onOpenEquipment={onOpenEquipment} />
    </div>
  )
}
