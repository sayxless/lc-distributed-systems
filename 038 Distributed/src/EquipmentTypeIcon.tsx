import equipmentSidebarSvgPaths from "@/imports/Units-1/svg-pkpcvn9v58"

export type EquipmentKind =
  | "distributed"
  | "paralleling"
  | "bess"
  | "gensets"
  | "chargers"
  | "units"

export default function EquipmentTypeIcon({ kind }: { kind: EquipmentKind }) {
  if (kind === "units") {
    return (
      <span aria-hidden="true" className="relative shrink-0 size-[20px]">
        <span className="absolute inset-[12.92%_8.75%]">
          <svg className="block size-full" fill="none" viewBox="0 0 16.5 14.8333">
            <path clipRule="evenodd" d={equipmentSidebarSvgPaths.p1ed17300} fill="currentColor" fillRule="evenodd" />
            <path clipRule="evenodd" d={equipmentSidebarSvgPaths.p25e8d880} fill="currentColor" fillRule="evenodd" />
            <path clipRule="evenodd" d={equipmentSidebarSvgPaths.p21e54f00} fill="currentColor" fillRule="evenodd" />
          </svg>
        </span>
      </span>
    )
  }

  if (kind === "distributed") {
    return (
      <span aria-hidden="true" className="relative shrink-0 size-[20px]">
        <span className="absolute inset-[13.54%_12.5%_17.71%]">
          <svg className="block size-full" fill="none" viewBox="0 0 16.5 15.25">
            <path d={equipmentSidebarSvgPaths.p536dd80} fill="currentColor" />
            <path d={equipmentSidebarSvgPaths.p306ecd00} fill="currentColor" />
            <path d={equipmentSidebarSvgPaths.p32bf2580} fill="currentColor" />
          </svg>
        </span>
        <svg className="absolute left-[37.5%] top-[50%] h-[4.4px] w-[5.08px] -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 5.08013 4.40061">
          <path d={equipmentSidebarSvgPaths.p9365fc0} stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    )
  }

  if (kind === "chargers") {
    return (
      <span aria-hidden="true" className="relative shrink-0 size-[20px]">
        <span className="absolute inset-[12.92%_8.75%]">
          <svg className="block size-full" fill="none" viewBox="0 0 16.5 14.8333">
            <path clipRule="evenodd" d={equipmentSidebarSvgPaths.p28312e90} fill="currentColor" fillRule="evenodd" />
            <path d={equipmentSidebarSvgPaths.pee71200} fill="currentColor" />
          </svg>
        </span>
      </span>
    )
  }

  if (kind === "bess") {
    return (
      <span aria-hidden="true" className="relative shrink-0 size-[20px]">
        <span className="absolute inset-[12.5%_20.83%]">
          <svg className="block size-full" fill="none" viewBox="0 0 13.1667 16.5">
            <path d={equipmentSidebarSvgPaths.p11327800} stroke="currentColor" strokeWidth="1.5" />
            <path d={equipmentSidebarSvgPaths.p120f2de0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </span>
      </span>
    )
  }

  if (kind === "paralleling") {
    return (
      <span aria-hidden="true" className="relative shrink-0 size-[20px]">
        <span className="absolute inset-[12.5%_20.83%]">
          <svg className="block size-full" fill="none" viewBox="0 0 13.1667 16.5">
            <path d={equipmentSidebarSvgPaths.p55f4400} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </span>
      </span>
    )
  }

  return (
    <span aria-hidden="true" className="relative shrink-0 size-[20px]">
      <span className="absolute left-[12.5%] right-[12.5%] top-[29.17%] h-[57.5%]">
        <svg className="block size-full" fill="none" viewBox="0 0 16.5 11.5">
          <path d={equipmentSidebarSvgPaths.p29df13f0} stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
      <svg className="absolute left-[36.36%] top-[37.5%] h-[6.25px] w-[5px]" fill="none" viewBox="0 0 5 6.25">
        <path d={equipmentSidebarSvgPaths.pae1d180} fill="currentColor" />
      </svg>
      <svg className="absolute left-[20.85%] top-[79.15%] h-[3.17px] w-[4px]" fill="none" viewBox="0 0 4 3.16667">
        <path d={equipmentSidebarSvgPaths.p27204800} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
      <svg className="absolute left-[66.65%] top-[79.15%] h-[3.17px] w-[4px]" fill="none" viewBox="0 0 4 3.16667">
        <path d={equipmentSidebarSvgPaths.p27204800} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
      <svg className="absolute left-[58.35%] top-[12.5%] h-[4.84px] w-[4.84px]" fill="none" viewBox="0 0 4.83333 4.83333">
        <path d={equipmentSidebarSvgPaths.p129b6d00} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
        <path d="M10.75 2.55h5.92M11.7 9.2h3.35M11.7 12.5h3.35" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    </span>
  )
}
