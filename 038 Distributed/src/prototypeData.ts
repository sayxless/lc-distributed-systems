export type PartnerId = "acme" | "voltera" | "gateway"

export type EquipmentStatus =
  | "operational"
  | "running"
  | "charging"
  | "available"
  | "discharging"

export type EquipmentAsset = {
  id: string
  status: EquipmentStatus
}

export type IntegratedUnit = EquipmentAsset & {
  kind: "integrated-unit"
  chargerCount: number
}

export type DistributedSystem = EquipmentAsset & {
  kind: "distributed-system"
  chargers: EquipmentAsset[]
  gensets: EquipmentAsset[]
  bess: EquipmentAsset[]
  parallelingPanel: EquipmentAsset
}

export type Site = {
  id: string
  name: string
  address: string
  partnerId: PartnerId
  integratedUnits: IntegratedUnit[]
  distributedSystems: DistributedSystem[]
}

export type Partner = {
  id: PartnerId
  name: string
  sites: Site[]
}

function createUnits(
  units: Array<{ id: string; chargerCount: number }>,
): IntegratedUnit[] {
  return units.map((unit) => ({
    id: unit.id,
    kind: "integrated-unit",
    chargerCount: unit.chargerCount,
    status: "operational",
  }))
}

function createAssets(
  prefix: string,
  count: number,
  status: EquipmentStatus,
): EquipmentAsset[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    status,
  }))
}

function createDistributedSystem({
  id,
  chargerCount,
  gensetCount,
  bessCount,
}: {
  id: string
  chargerCount: number
  gensetCount: number
  bessCount: 2 | 3
}): DistributedSystem {
  return {
    id,
    kind: "distributed-system",
    status: "operational",
    chargers: createAssets(`CH-${id}`, chargerCount, "available"),
    gensets: createAssets(`GS-${id}`, gensetCount, "running"),
    bess: createAssets(`BS-${id}`, bessCount, "discharging"),
    parallelingPanel: {
      id: `PP-${id}`,
      status: "operational",
    },
  }
}

const acmeSites: Site[] = [
  {
    id: "tower-mission-1",
    name: "Tower Mission 1",
    address: "10 West Beaver Ridge St, CA 95376, United States",
    partnerId: "acme",
    integratedUnits: createUnits([
      { id: "Booster A, UN-401", chargerCount: 4 },
      { id: "Booster B, UN-400", chargerCount: 2 },
      { id: "UN-399", chargerCount: 2 },
      { id: "UN-398", chargerCount: 2 },
    ]),
    distributedSystems: [],
  },
  {
    id: "tower-mission-2",
    name: "Tower Mission 2",
    address: "28 River Station Rd, CA 95377, United States",
    partnerId: "acme",
    integratedUnits: createUnits([
      { id: "UN-410", chargerCount: 2 },
      { id: "UN-411", chargerCount: 2 },
    ]),
    distributedSystems: [],
  },
  {
    id: "tower-mission-3",
    name: "Tower Mission 3",
    address: "1426 West Lathrop Rd, CA 95330, United States",
    partnerId: "acme",
    integratedUnits: createUnits([
      { id: "UN-420", chargerCount: 2 },
      { id: "UN-421", chargerCount: 4 },
      { id: "UN-422", chargerCount: 2 },
    ]),
    distributedSystems: [],
  },
  {
    id: "tower-mission-4",
    name: "Tower Mission 4",
    address: "755 East Louise Ave, CA 95336, United States",
    partnerId: "acme",
    integratedUnits: createUnits([
      { id: "UN-430", chargerCount: 2 },
      { id: "UN-431", chargerCount: 2 },
      { id: "UN-432", chargerCount: 4 },
      { id: "UN-433", chargerCount: 2 },
    ]),
    distributedSystems: [
      createDistributedSystem({
        id: "DS-401",
        chargerCount: 8,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
  {
    id: "tower-mission-5",
    name: "Tower Mission 5",
    address: "3100 McHenry Ave, CA 95350, United States",
    partnerId: "acme",
    integratedUnits: createUnits([
      { id: "UN-440", chargerCount: 4 },
      { id: "UN-441", chargerCount: 2 },
      { id: "UN-442", chargerCount: 2 },
    ]),
    distributedSystems: [
      createDistributedSystem({
        id: "DS-501",
        chargerCount: 8,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
]

const volteraSites: Site[] = [
  {
    id: "voltera-north",
    name: "Voltera North",
    address: "1200 North Harbor Dr, CA 92101, United States",
    partnerId: "voltera",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "VDS-101",
        chargerCount: 20,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
  {
    id: "voltera-central",
    name: "Voltera Central",
    address: "650 Market St, CA 94104, United States",
    partnerId: "voltera",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "VDS-102",
        chargerCount: 18,
        gensetCount: 4,
        bessCount: 3,
      }),
    ],
  },
  {
    id: "voltera-south",
    name: "Voltera South",
    address: "4550 Airport Way, CA 95822, United States",
    partnerId: "voltera",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "VDS-103",
        chargerCount: 20,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
]

const gatewaySites: Site[] = [
  {
    id: "gateway-east",
    name: "Gateway East",
    address: "8800 East Gateway Blvd, AZ 85212, United States",
    partnerId: "gateway",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "GDS-101",
        chargerCount: 0,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
  {
    id: "gateway-west",
    name: "Gateway West",
    address: "425 West Commerce Dr, AZ 85043, United States",
    partnerId: "gateway",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "GDS-102",
        chargerCount: 0,
        gensetCount: 4,
        bessCount: 3,
      }),
    ],
  },
  {
    id: "gateway-south",
    name: "Gateway South",
    address: "1450 South 51st Ave, AZ 85043, United States",
    partnerId: "gateway",
    integratedUnits: [],
    distributedSystems: [
      createDistributedSystem({
        id: "GDS-103",
        chargerCount: 0,
        gensetCount: 3,
        bessCount: 2,
      }),
    ],
  },
]

export const partners: Partner[] = [
  { id: "acme", name: "Acme Corp", sites: acmeSites },
  { id: "voltera", name: "Voltera", sites: volteraSites },
  { id: "gateway", name: "Gateway", sites: gatewaySites },
]

export const sites = partners.flatMap((partner) => partner.sites)

export const defaultSiteId = "tower-mission-1"

export function getPartner(partnerId: PartnerId): Partner {
  const partner = partners.find((item) => item.id === partnerId)
  if (!partner) throw new Error(`Unknown partner: ${partnerId}`)
  return partner
}

export function getSite(siteId: string): Site {
  const site = sites.find((item) => item.id === siteId)
  if (!site) throw new Error(`Unknown site: ${siteId}`)
  return site
}
