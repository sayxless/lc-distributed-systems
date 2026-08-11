import { useState } from "react";
import svgPaths from "./svg-g8tgddqzze";
import imgCircleProgress from "./30363b45a3245bd9bccf8a502bcddde497fd3a13.png";
import SiteEquipmentOverview from "@/SiteEquipmentOverview";

type SiteOverviewProps = {
  equipmentTabEnabled?: boolean;
  equipmentOnOverview?: boolean;
  activeSiteTab?: "overview" | "equipment";
};
type GroupSeparatorMode = "with" | "without";
type AvatarProps = {
  className?: string;
  size?: "md" | "lg";
  type?: "Primary" | "Secondary";
};

function Avatar({ className, size = "md", type = "Primary" }: AvatarProps) {
  const isLgAndSecondary = size === "lg" && type === "Secondary";
  return (
    <div className={className || `relative ${isLgAndSecondary ? "bg-[#f5f5f5] rounded-[9999px] size-[48px]" : "bg-[#1dcc6e] rounded-[999px] size-[40px]"}`}>
      <div aria-hidden className={`absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none ${isLgAndSecondary ? "rounded-[9999px]" : "rounded-[999px]"}`} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          {size === "md" && type === "Primary" && <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[14px] text-center text-white tracking-[-0.084px]">NS</p>}
          {isLgAndSecondary && (
            <div className="relative shrink-0 size-[24px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="change icon🔄">
                    <div className="absolute inset-[17.08%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="15.8" preserveAspectRatio="none" viewBox="0 0 15.8022 15.8" width="15.8022">
                        <path clipRule="evenodd" d={svgPaths.pc82d370} fill="#525252" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type BaseNavItemProps = {
  className?: string;
  arrow?: boolean;
  label?: string;
  state?: "Default";
  type?: "Not Selected" | "Selected";
};

function BaseNavItem({ className, arrow = true, label = "Label", state = "Default", type = "Not Selected" }: BaseNavItemProps) {
  const isNotSelectedAndDefault = type === "Not Selected" && state === "Default";
  const isSelectedAndDefault = type === "Selected" && state === "Default";
  return (
    <div className={className || `relative rounded-[6px] ${isSelectedAndDefault ? "bg-[#f5f5f5]" : ""}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
          {isNotSelectedAndDefault && <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label}</p>}
          {isNotSelectedAndDefault && arrow && (
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevrone_down">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="Icon (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#525252" fillRule="evenodd" id="Icon (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isSelectedAndDefault && <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label}</p>}
          {isSelectedAndDefault && arrow && (
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevrone_down">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="Icon (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#0A0A0A" fillRule="evenodd" id="Icon (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type LogotypeProps = {
  className?: string;
  platform?: "Backoffice";
  style?: "Full Logotype";
  type?: "L-Charge";
  version?: "v2";
};

function Logotype({ className, platform = "Backoffice", style = "Full Logotype", type = "L-Charge", version = "v2" }: LogotypeProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="h-[24px] relative shrink-0 w-[150px]" data-name="logotype">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 150 24" width="150">
            <g clipPath="url(#clip0_0_4502)" id="logotype">
              <path d={svgPaths.p25166680} fill="#00D473" id="Vector" />
              <path d={svgPaths.p10316480} fill="#00D473" id="Vector_2" />
              <path d={svgPaths.p1d58ab80} fill="#3FD1CE" id="Vector_3" />
              <path d={svgPaths.p3624df00} fill="#3FD1CE" id="Vector_4" />
              <path clipRule="evenodd" d={svgPaths.p11335400} fill="#101820" fillRule="evenodd" id="Vector_5" />
              <path d={svgPaths.p7070b00} fill="#101820" id="Vector_6" />
              <g id="backoffice">
                <path d={svgPaths.p244c8500} fill="white" />
                <path d={svgPaths.p5c1a700} fill="white" />
                <path d={svgPaths.p6e8bdf0} fill="white" />
                <path d={svgPaths.p1e6fee00} fill="white" />
                <path d={svgPaths.p2449b00} fill="white" />
                <path d={svgPaths.p38c59f80} fill="white" />
                <path d={svgPaths.p257e6800} fill="white" />
                <path d={svgPaths.p8020e80} fill="white" />
                <path d={svgPaths.p21ccf000} fill="white" />
                <path d={svgPaths.pe926b00} fill="white" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_0_4502">
                <rect fill="white" height="24" width="150" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
type LocalSectionActivityProps = {
  className?: string;
  content?: "Default";
};

function LocalSectionActivity({ className, content = "Default" }: LocalSectionActivityProps) {
  return (
    <div className={className || "relative w-[928px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="container -title">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Activity</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="list -timeline">
          <div className="absolute h-[240px] left-[2px] top-[10px] w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" height="240" preserveAspectRatio="none" viewBox="0 0 1 240" width="1">
                <path d="M0.5 0V240" id="Vector 260" stroke="#E6E6E6" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="item">
            <div className="h-[20px] relative shrink-0 w-[4px]" data-name="dot">
              <div className="absolute inset-[0_-200%]">
                <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                  <g id="dot">
                    <g filter="url(#filter0_d_0_4417)" id="dot_2">
                      <circle cx="10" cy="10" fill="#757575" r="2" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_0_4417" width="20" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="effect1_dropShadow_0_4417" />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4417" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4417" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[20px] not-italic relative shrink-0 whitespace-nowrap" data-name="container">
              <p className="relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px]">1 connection updated</p>
              <p className="relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px]">25 mins ago</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="item">
            <div className="h-[20px] relative shrink-0 w-[4px]" data-name="dot">
              <div className="absolute inset-[0_-200%]">
                <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                  <g id="dot">
                    <g filter="url(#filter0_d_0_4417)" id="dot_2">
                      <circle cx="10" cy="10" fill="#757575" r="2" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_0_4417" width="20" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="effect1_dropShadow_0_4417" />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4417" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4417" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[20px] not-italic relative shrink-0 whitespace-nowrap" data-name="container">
              <p className="relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px]">1 connection removed</p>
              <p className="relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px]">26 mins ago</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="item">
            <div className="h-[20px] relative shrink-0 w-[4px]" data-name="dot">
              <div className="absolute inset-[0_-200%]">
                <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                  <g id="dot">
                    <g filter="url(#filter0_d_0_4417)" id="dot_2">
                      <circle cx="10" cy="10" fill="#757575" r="2" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_0_4417" width="20" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="effect1_dropShadow_0_4417" />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4417" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4417" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[20px] not-italic relative shrink-0 whitespace-nowrap" data-name="container">
              <p className="relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px]">3 units connected</p>
              <p className="relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px]">27 mins ago</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="item">
            <div className="h-[20px] relative shrink-0 w-[4px]" data-name="dot">
              <div className="absolute inset-[0_-200%]">
                <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                  <g id="dot">
                    <g filter="url(#filter0_d_0_4417)" id="dot_2">
                      <circle cx="10" cy="10" fill="#757575" r="2" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_0_4417" width="20" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="effect1_dropShadow_0_4417" />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4417" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4417" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[20px] not-italic relative shrink-0 whitespace-nowrap" data-name="container">
              <p className="relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Site details updated</p>
              <p className="relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px]">30 mins ago</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="item">
            <div className="h-[20px] relative shrink-0 w-[4px]" data-name="dot">
              <div className="absolute inset-[0_-200%]">
                <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                  <g id="dot">
                    <g filter="url(#filter0_d_0_4417)" id="dot_2">
                      <circle cx="10" cy="10" fill="#757575" r="2" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_0_4417" width="20" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="effect1_dropShadow_0_4417" />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4417" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4417" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[20px] not-italic relative shrink-0 whitespace-nowrap" data-name="container">
              <p className="relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Site created</p>
              <p className="relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px]">31 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type CursorsPointerProps = {
  className?: string;
  type?: "Arrow";
};

function CursorsPointer({ className, type = "Arrow" }: CursorsPointerProps) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.578px] left-[calc(50%+0.71px)] top-[calc(50%-0.21px)] w-[11.414px]" data-name="Arrow">
        <div className="absolute inset-[-4.55%_-15.77%_-15.93%_-15.77%]">
          <svg className="block size-full" fill="none" height="21.1784" preserveAspectRatio="none" viewBox="0 0 15.0142 21.1784" width="15.0142">
            <g filter="url(#filter0_d_0_4495)" id="Arrow">
              <path d={svgPaths.pb675080} fill="white" id="arrow border" />
              <path clipRule="evenodd" d={svgPaths.p27e3fc70} fill="#202125" fillRule="evenodd" id="arrow" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.1785" id="filter0_d_0_4495" width="15.0142" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.9" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_4495" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_4495" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
type BadgeChargerStateProps = {
  className?: string;
  size?: "Condensed" | "Icon";
  state?: "Available" | "Preparing" | "Charging";
};

function BadgeChargerState({ className, size = "Condensed", state = "Available" }: BadgeChargerStateProps) {
  const isChargingAndIcon = state === "Charging" && size === "Icon";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        {size === "Icon" && (
          <div className="relative shrink-0 size-[20px]" data-name="icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                  {size === "Icon" && ["Available", "Preparing"].includes(state) && (
                    <div className="absolute inset-[8.75%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                        {state === "Available" && size === "Icon" && <path clipRule="evenodd" d={svgPaths.p1d51bb80} fill="#1DCC6E" fillRule="evenodd" id="vector" />}
                        {state === "Preparing" && size === "Icon" && (
                          <g id="vector">
                            <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                            <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                          </g>
                        )}
                      </svg>
                    </div>
                  )}
                  {isChargingAndIcon && (
                    <>
                      <div className="absolute inset-[10%]" data-name="circle pad">
                        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                          <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                        </svg>
                      </div>
                      <div className="absolute inset-[10%]" data-name="circle progress">
                        <div className="absolute inset-[0_0.52%_0_0]">
                          <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {size === "Condensed" && ["Preparing", "Available"].includes(state) && (
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">00</p>
                </div>
                <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[8.75%]" data-name="vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                              {state === "Preparing" && size === "Condensed" && (
                                <g id="vector">
                                  <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                                  <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                                </g>
                              )}
                              {state === "Available" && size === "Condensed" && <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />}
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        )}
      </div>
    </div>
  );
}
type TimelineChargeBarProps = {
  className?: string;
  current?: boolean;
  selected?: "False";
  state?: "Default";
};

function TimelineChargeBar({ className, current = true, selected = "False", state = "Default" }: TimelineChargeBarProps) {
  const isDefaultAndFalseAndCurrent = state === "Default" && selected === "False" && current;
  return (
    <div className={className || "h-[20px] relative w-[80px]"}>
      <div className={`-translate-y-1/2 absolute bg-[#1dcc6e] h-[12px] left-0 right-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] top-1/2 ${isDefaultAndFalseAndCurrent ? "rounded-bl-[4px] rounded-tl-[4px]" : "rounded-[4px]"}`} data-name="rectangle" />
      {isDefaultAndFalseAndCurrent && <BadgeChargerState className="-translate-y-1/2 absolute right-[-24px] top-1/2" size="Icon" state="Charging" />}
    </div>
  );
}
type LocalTimelineRightsideBaseProps = {
  className?: string;
  content?: "Default";
  hover?: boolean;
};

function LocalTimelineRightsideBase({ className, content = "Default", hover = true }: LocalTimelineRightsideBaseProps) {
  return (
    <div className={className || "h-[420px] relative w-[688px]"}>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-name="container -timegrid">
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="container">
                      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px] whitespace-nowrap">May 27</p>
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">00:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">01:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">02:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">03:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">04:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">05:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">06:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">07:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">08:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">09:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative shrink-0 w-[120px]" data-name=".local -hour">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center relative size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-center py-[8px] relative shrink-0 w-full" data-name="container">
                    <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[42px]" data-name="container" />
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#757575] text-[13px] text-center tracking-[-0.0325px] w-[min-content]">10:00</p>
                  </div>
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                    <div className="absolute inset-[0_-0.5px]">
                      <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                        <path d="M0.5 0V360" id="line" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 size-[360px] top-[60px]" data-name=".local -timeline -charts">
            <div className="absolute h-[56px] left-0 top-0 w-[360px]" data-name="Output chart">
              <div className="absolute bottom-0 h-[40px] left-[-32px] w-[392px]" data-name="Output chart">
                <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 392 40" width="392">
                  <g clipPath="url(#clip0_0_4453)" id="Output chart">
                    <path d={svgPaths.p323dda00} fill="#00D473" fillOpacity="0.06" id="shape" />
                    <path d={svgPaths.p1c7e1fc0} id="line" stroke="#1DCC6E" strokeWidth="1.75" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_4453">
                      <rect fill="white" height="40" width="392" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[12px] items-end left-0 right-0 top-[100px]" data-name="unit">
              <div className="h-[20px] relative shrink-0 w-full" data-name="401-01">
                <TimelineChargeBar className="absolute h-[20px] right-[206px] top-0 w-[144px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[48px] top-0 w-[80px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[150px] top-0 w-[48px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-0 top-0 w-[32px]" />
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="401-02">
                <TimelineChargeBar className="absolute h-[20px] right-[163px] top-0 w-[64px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[247px] top-0 w-[80px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[9px] top-0 w-[144px]" current={false} />
                <div className="absolute h-[20px] right-0 top-0 w-[3px]" data-name="timeline charge bar">
                  <div className="-translate-y-1/2 absolute bg-[#1dcc6e] h-[12px] left-0 right-0 rounded-bl-[4px] rounded-tl-[4px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] top-1/2" data-name="rectangle" />
                  <div className="-translate-y-1/2 absolute right-[-24px] top-1/2" data-name="badge charger state">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                              <div className="absolute inset-[8.75%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                                  <g id="vector">
                                    <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                                    <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="401-03">
                <TimelineChargeBar className="absolute h-[20px] right-[196px] top-0 w-[144px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[110px] top-0 w-[64px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[18px] top-0 w-[80px]" current={false} />
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="401-04">
                <TimelineChargeBar className="absolute h-[20px] right-[229px] top-0 w-[64px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[133px] top-0 w-[80px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[28px] top-0 w-[96px]" current={false} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[12px] items-end left-0 right-0 top-[272px]" data-name="unit">
              <div className="h-[20px] relative shrink-0 w-full" data-name="400-01">
                <TimelineChargeBar className="absolute h-[20px] right-[186px] top-0 w-[144px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[78px] top-0 w-[80px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[30px] top-0 w-[32px]" current={false} />
              </div>
              <div className="h-[20px] relative shrink-0 w-full" data-name="400-02">
                <TimelineChargeBar className="absolute h-[20px] right-[259px] top-0 w-[48px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[109px] top-0 w-[144px]" current={false} />
                <TimelineChargeBar className="absolute h-[20px] right-[10px] top-0 w-[74px]" current={false} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-[359px] top-0 w-[4px]" data-name=".local -nowline">
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pt-[32px] top-0 w-px" data-name="container">
              <div className="bg-[#757575] content-stretch flex items-center justify-center min-w-[48px] px-[4px] relative rounded-[4px] shrink-0" data-name="container">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[13px] text-center text-white tracking-[-0.0325px]">02:25</p>
              </div>
              <div className="h-[8px] relative shrink-0 w-full" data-name="line">
                <div className="absolute inset-[0_-0.5px]">
                  <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 1 8" width="1">
                    <path d="M0.5 0V8" id="line" stroke="#757575" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-[60px] w-0" data-name="line">
              <div className="absolute inset-[0_-0.5px]">
                <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                  <path d="M0.5 0V360" id="line" stroke="#757575" />
                </svg>
              </div>
            </div>
          </div>
          {hover && (
            <div className="absolute h-[780px] left-[233px] top-0 w-[48px]" data-name="hover tooltips">
              <div className="absolute bottom-[360px] left-0 top-0" data-name=".local -hover -hour">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center relative size-full">
                    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="container">
                      <div className="content-stretch flex items-center justify-center pb-[4px] relative shrink-0">
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic opacity-0 relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[-0.0325px] whitespace-nowrap">Sep 16</p>
                      </div>
                      <div className="bg-[#0a0a0a] content-stretch flex items-center justify-center min-w-[48px] px-[4px] relative rounded-[4px] shrink-0" data-name="container">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[13px] text-center text-white tracking-[-0.0325px]">01:39</p>
                      </div>
                      <div className="h-[8px] relative shrink-0 w-full" data-name="line">
                        <div className="absolute inset-[0_-0.5px]">
                          <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 1 8" width="1">
                            <path d="M0.5 0V8" id="line" stroke="#0A0A0A" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="line">
                      <div className="absolute inset-[0_-0.5px]">
                        <svg className="block size-full" fill="none" height="360" preserveAspectRatio="none" viewBox="0 0 1 360" width="1">
                          <path d="M0.5 0V360" id="line" stroke="#0A0A0A" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%+0.5px)] top-[calc(50%-306px)] w-[13px]" data-name="Marker">
                <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13 12" width="13">
                  <g id="Marker">
                    <circle cx="6.07812" cy="6" fill="#47D789" id="Dot" r="5" stroke="white" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <div className="absolute bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.08)] left-[32px] rounded-[8px] top-[66px]" data-name=".local -tooltip">
                <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[8px] relative size-full">
                  <div className="relative shrink-0" data-name=".local -tooltip_item">
                    <div className="content-stretch flex gap-[24px] items-start relative size-full">
                      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] text-right tracking-[-0.0325px] whitespace-nowrap">560 kw</p>
                    </div>
                  </div>
                </div>
              </div>
              <CursorsPointer className="absolute left-[18px] size-[24px] top-[81px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type LocalTimelineRightpannelProps = {
  className?: string;
  content?: "Default";
};

function LocalTimelineRightpannel({ className, content = "Default" }: LocalTimelineRightpannelProps) {
  return (
    <div className={className || "h-[420px] relative w-[240px]"}>
      <div aria-hidden className="absolute border-[#e6e6e6] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-h-[360px] overflow-clip pl-[24px] pr-[16px] py-[24px] right-0 top-[60px]" data-name="container -units">
        <div className="h-[20px] relative shrink-0 w-full" data-name="container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[4.16%_12.63%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="18.3353" preserveAspectRatio="none" viewBox="0 0 14.9468 18.3353" width="14.9468">
                          <path clipRule="evenodd" d={svgPaths.p33891d80} fill="#757575" fillRule="evenodd" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Site power</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container -unit -tree">
          <div className="relative shrink-0 w-full" data-name=".local -unit -name">
            <div className="content-stretch flex gap-[8px] items-start relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                          <g id="vector">
                            <path clipRule="evenodd" d={svgPaths.p1ed17300} fill="#757575" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p25e8d880} fill="#757575" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p21e54f00} fill="#757575" fillRule="evenodd" />
                            <path d={svgPaths.p98cee80} fill="#757575" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Booster A, UN-401</p>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[16.5px] left-[10px] top-[28px] w-0" data-name="line">
            <div className="absolute inset-[-0.48%_-0.5px]">
              <svg className="block size-full" fill="none" height="104.5" preserveAspectRatio="none" viewBox="0 0 1 104.5" width="1">
                <path d="M0.5 0.5V104" id="line" stroke="#D6D6D6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container -unit -tree">
          <div className="h-[20px] relative shrink-0 w-full" data-name=".local -unit -name">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                            <g id="vector">
                              <path clipRule="evenodd" d={svgPaths.p1ed17300} fill="#757575" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p25e8d880} fill="#757575" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p21e54f00} fill="#757575" fillRule="evenodd" />
                              <path d={svgPaths.p98cee80} fill="#757575" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Booster B, UN-400</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[16.5px] left-[10px] top-[28px] w-0" data-name="line">
            <div className="absolute inset-[-1.27%_-0.5px]">
              <svg className="block size-full" fill="none" height="40.5" preserveAspectRatio="none" viewBox="0 0 1 40.5" width="1">
                <path d="M0.5 0.5V40" id="line" stroke="#D6D6D6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container -unit -tree">
          <div className="h-[20px] relative shrink-0 w-full" data-name=".local -unit -name">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                            <g id="vector">
                              <path clipRule="evenodd" d={svgPaths.p1ed17300} fill="#757575" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p25e8d880} fill="#757575" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p21e54f00} fill="#757575" fillRule="evenodd" />
                              <path d={svgPaths.p98cee80} fill="#757575" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">UN-399</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name=".local -timeline -charger">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[28px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  <div className="relative shrink-0 size-[20px]" data-name="icon">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                          <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                              <g id="Vector">
                                <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#757575" fillRule="evenodd" />
                                <path clipRule="evenodd" d={svgPaths.pee71200} fill="#757575" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
                </div>
                <div className="absolute left-[10px] size-[10px] top-[2px]" data-name="vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                      <path d={svgPaths.p1b508a80} id="vector" stroke="#D6D6D6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[16.5px] left-[10px] top-[28px] w-0" data-name="line">
            <div className="absolute inset-[-1.27%_-0.5px]">
              <svg className="block size-full" fill="none" height="40.5" preserveAspectRatio="none" viewBox="0 0 1 40.5" width="1">
                <path d="M0.5 0.5V40" id="line" stroke="#D6D6D6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-end left-0 pb-[8px] pt-[32px] px-[24px] right-0 top-0" data-name="th">
        <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Unit</p>
      </div>
    </div>
  );
}

function LocalTimelineChartCurrent({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white relative rounded-[12px] w-[928px]"} data-name=".local -timeline -chart -current">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start relative size-full">
          <LocalTimelineRightpannel className="h-[420px] relative shrink-0 w-[240px]" />
          <LocalTimelineRightsideBase className="h-[420px] relative shrink-0 w-[688px]" hover={false} />
          <div className="absolute bottom-0 h-[16px] left-[240px] right-0" data-name="scroll">
            <div className="-translate-y-1/2 absolute bg-[rgba(30,42,51,0.3)] h-[6px] right-[20px] rounded-[3px] top-1/2 w-[222px]" data-name="scroll" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LocalSectionTimeline({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[928px]"} data-name=".local  -section -timeline">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex items-center pb-[16px] relative shrink-0 w-full" data-name=".local -unitdetails -timeline -title">
          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="container">
            <div className="-translate-y-1/2 absolute h-[28px] right-[-8px] rounded-[6px] top-1/2" data-name=".local -button -view">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">View all</p>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Charges timeline last 30 days</p>
          </div>
        </div>
        <LocalTimelineChartCurrent className="bg-white relative rounded-[12px] shrink-0 w-full" />
      </div>
    </div>
  );
}

function LocalXSpacer({ className }: { className?: string }) {
  return <div className={className || "h-[20px] relative w-[26.581px]"} data-name=".local -x_spacer" />;
}

function LocalChartAxisX({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[440px]"} data-name=".local -chart -axis_X">
      <div className="content-stretch flex gap-[8px] items-start px-[8px] relative size-full">
        <div className="flex-[1_0_0] min-w-px relative" data-name=".local -notch_X">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center relative size-full">
              <div className="h-[4px] relative shrink-0 w-0" data-name="notchline">
                <div className="absolute inset-[0_-0.5px]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1 4" width="1">
                    <path d="M0.5 0V4" id="notchline" stroke="#E6E6E6" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="step">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.055px] whitespace-nowrap">00:00</p>
              </div>
            </div>
          </div>
        </div>
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <div className="flex-[1_0_0] min-w-px relative" data-name=".local -notch_X">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center relative size-full">
              <div className="h-[4px] relative shrink-0 w-0" data-name="notchline">
                <div className="absolute inset-[0_-0.5px]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1 4" width="1">
                    <path d="M0.5 0V4" id="notchline" stroke="#E6E6E6" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="step">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.055px] whitespace-nowrap">06:00</p>
              </div>
            </div>
          </div>
        </div>
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <div className="flex-[1_0_0] min-w-px relative" data-name=".local -notch_X">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center relative size-full">
              <div className="h-[4px] relative shrink-0 w-0" data-name="notchline">
                <div className="absolute inset-[0_-0.5px]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1 4" width="1">
                    <path d="M0.5 0V4" id="notchline" stroke="#E6E6E6" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="step">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.055px] whitespace-nowrap">12:00</p>
              </div>
            </div>
          </div>
        </div>
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <div className="flex-[1_0_0] min-w-px relative" data-name=".local -notch_X">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center relative size-full">
              <div className="h-[4px] relative shrink-0 w-0" data-name="notchline">
                <div className="absolute inset-[0_-0.5px]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1 4" width="1">
                    <path d="M0.5 0V4" id="notchline" stroke="#E6E6E6" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="step">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.055px] whitespace-nowrap">18:00</p>
              </div>
            </div>
          </div>
        </div>
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
        <LocalXSpacer className="flex-[1_0_0] h-[20px] min-w-px relative" />
      </div>
    </div>
  );
}

function LocalLinesY({ className }: { className?: string }) {
  return (
    <div className={className || "h-[192px] relative w-[1077px]"} data-name=".local lines_Y">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="rectangle -max">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-dashed inset-0 pointer-events-none" />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="rectangle -middle">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1077 1" width="1077">
                <path d="M0 0.5H1077" id="rectangle -middle" stroke="#E6E6E6" strokeDasharray="3 2" />
              </svg>
            </div>
          </div>
          <div className="h-px relative shrink-0 w-full" data-name="base">
            <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1077 1" width="1077">
              <path clipRule="evenodd" d="M1077 1H0V0H1077V1Z" fill="#E6E6E6" fillRule="evenodd" id="base" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type LocalChartGraphProps = {
  className?: string;
  content?: "Charges" | "Incidents default" | "Default";
};

function LocalChartGraph({ className, content = "Default" }: LocalChartGraphProps) {
  const isCharges = content === "Charges";
  const isDefaultOrCharges = ["Default", "Charges"].includes(content);
  const isDefaultOrIncidentsDefault = ["Default", "Incidents default"].includes(content);
  const isIncidentsDefault = content === "Incidents default";
  return (
    <div className={className || "h-[80px] relative w-[440px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <LocalLinesY className="flex-[1_0_0] min-h-px relative w-full" />
        <div className="absolute content-stretch flex gap-[8px] inset-[0.04px_-0.42px_-0.04px_0.42px] items-end pt-[8px] px-[8px]" data-name="graph">
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[52px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full">
                {isDefaultOrIncidentsDefault && <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />}
                {isCharges && (
                  <>
                    <div className="content-stretch flex h-[20px] items-end justify-center relative shrink-0 w-full" data-name="part top">
                      <div className="bg-[#47d789] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#47d789] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[40px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[52px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[40px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[40px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[52px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full">
                {["Charges", "Incidents default"].includes(content) && (
                  <div className="content-stretch flex h-[20px] items-end justify-center relative shrink-0 w-full" data-name="part top">
                    <div className={`flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px] ${isIncidentsDefault ? "bg-[#c53027]" : "bg-[#47d789]"}`} data-name="rectangle" />
                  </div>
                )}
                {content === "Default" && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isCharges && (
                  <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                    <div className="bg-[#47d789] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                  </div>
                )}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full ${isIncidentsDefault ? "" : "pt-[24px]"}`}>
                {isDefaultOrCharges && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full ${isIncidentsDefault ? "" : "pt-[48px]"}`}>
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[32px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full min-w-px relative ${isIncidentsDefault ? "max-w-[16px] rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end size-full ${isIncidentsDefault ? "max-w-[inherit] overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end relative size-full ${isIncidentsDefault ? "max-w-[inherit] pt-[62px]" : "pt-[36px]"}`}>
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[36px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full ${isIncidentsDefault ? "" : "pt-[28px]"}`}>
                {isDefaultOrCharges && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full ${isIncidentsDefault ? "" : "pt-[12px]"}`}>
                {isDefaultOrCharges && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[52px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[48px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[52px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full min-w-px relative ${isIncidentsDefault ? "max-w-[16px] rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end size-full ${isIncidentsDefault ? "max-w-[inherit] overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end relative size-full ${isIncidentsDefault ? "max-w-[inherit] pt-[58px]" : "pt-[12px]"}`}>
                {isDefaultOrIncidentsDefault && <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />}
                {isCharges && (
                  <>
                    <div className="content-stretch flex h-[20px] items-end justify-center relative shrink-0 w-full" data-name="part top">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#47d789] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#47d789] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full min-w-px relative ${isIncidentsDefault ? "max-w-[16px] rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end size-full ${isIncidentsDefault ? "max-w-[inherit] overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end relative size-full ${isIncidentsDefault ? "max-w-[inherit] pt-[62px]" : "pt-[64px]"}`}>
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full min-w-px relative ${isIncidentsDefault ? "max-w-[16px] rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end size-full ${isIncidentsDefault ? "max-w-[inherit] overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end relative size-full ${isIncidentsDefault ? "max-w-[inherit] pt-[68px]" : "pt-[52px]"}`}>
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] pt-[24px] relative size-full">
                <div className={`flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full ${isIncidentsDefault ? "bg-[#757575]" : "bg-[#47d789]"}`} data-name="rectangle" />
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className={`content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full ${isIncidentsDefault ? "" : "pt-[8px]"}`}>
                {isDefaultOrCharges && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`flex-[1_0_0] h-full max-w-[16px] min-w-px relative ${isIncidentsDefault ? "rounded-tl-[2px] rounded-tr-[2px]" : ""}`} data-name=".local -column">
            <div className={`flex flex-col items-center justify-end max-w-[inherit] size-full ${isIncidentsDefault ? "overflow-clip rounded-[inherit]" : ""}`}>
              <div className="content-stretch flex flex-col items-center justify-end max-w-[inherit] relative size-full">
                {isDefaultOrCharges && <div className="bg-[#47d789] flex-[1_0_0] min-h-px relative rounded-tl-[2px] rounded-tr-[2px] w-full" data-name="rectangle" />}
                {isIncidentsDefault && (
                  <>
                    <div className="content-stretch flex h-[20px] items-end justify-center relative shrink-0 w-full" data-name="part top">
                      <div className="bg-[#c53027] flex-[1_0_0] h-full min-w-px relative rounded-tl-[2px] rounded-tr-[2px]" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="part middle">
                      <div className="bg-[#f1b23b] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px relative w-full" data-name="bottom">
                      <div className="bg-[#757575] flex-[1_0_0] h-full min-w-px relative" data-name="rectangle" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalChartIncidents({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[440px]"} data-name=".local -chart -incidents">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[32px] relative shrink-0 w-full" data-name="container">
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] whitespace-nowrap" data-name="container -title">
            <p className="relative shrink-0 text-[#0a0a0a]">Incidents</p>
            <p className="relative shrink-0 text-[#757575]">175</p>
          </div>
          <div className="absolute h-[28px] right-[-8px] rounded-[6px] top-[-4px]" data-name=".local -button -view">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">View report</p>
              </div>
            </div>
          </div>
        </div>
        <LocalChartGraph className="h-[80px] relative shrink-0 w-full" content="Incidents default" />
        <LocalChartAxisX className="relative shrink-0 w-[440px]" />
        <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="legend">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
            <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
              <div className="absolute bg-[#c53027] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">12</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">Critical</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
            <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
              <div className="absolute bg-[#f55451] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">20</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">High</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
            <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
              <div className="absolute bg-[#f1b23b] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">41</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">Medium</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
            <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
              <div className="absolute bg-[#757575] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">102</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">Low</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type LocalSelectButtonProps = {
  className?: string;
  dropdown?: boolean;
  label?: string;
  property1?: "Base";
};

function LocalSelectButton({ className, dropdown = true, label = "Label", property1 = "Base" }: LocalSelectButtonProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label}</p>
          <div className="relative shrink-0 size-[20px]" data-name="arrow">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down-small">
                  <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                      <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {dropdown && (
            <div className="absolute bg-white left-0 rounded-[6px] top-[24px] w-[168px]" data-name="dropdown">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="container">
                  <div className="bg-[#f5f5f5] content-stretch flex items-start max-w-[480px] min-w-[160px] relative shrink-0 w-full" data-name=".base/filter dropdown item">
                    <div className="flex-[1_0_0] min-w-px relative" data-name=".base/filter dropdown item/option">
                      <div className="content-stretch flex items-start px-[16px] py-[6px] relative size-full">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Work time</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start max-w-[480px] min-w-[160px] relative shrink-0 w-full" data-name=".base/filter dropdown item">
                    <div className="flex-[1_0_0] min-w-px relative" data-name=".base/filter dropdown item/option">
                      <div className="content-stretch flex gap-[8px] items-start px-[16px] py-[6px] relative size-full">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Energy capacity</p>
                        <div className="opacity-0 relative shrink-0 size-[20px]" data-name="icon [right]">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center relative size-full">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                                <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="14.8334" preserveAspectRatio="none" viewBox="0 0 16.5001 14.8334" width="16.5001">
                                    <path clipRule="evenodd" d={svgPaths.p23886100} fill="#757575" fillRule="evenodd" id="vector" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LocalChartUtilization({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[439.5px]"} data-name=".local -chart -utilization">
      <div className="content-stretch flex flex-col isolate items-start relative size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[32px] relative shrink-0 w-full z-[3]" data-name="container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container -title">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{`Utilization by `}</p>
              <LocalSelectButton className="relative shrink-0" dropdown={false} label="work time" />
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">52.5%</p>
          </div>
          <div className="absolute h-[28px] right-[-8.5px] rounded-[6px] top-[-4px]" data-name=".local -button -view">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">View report</p>
              </div>
            </div>
          </div>
        </div>
        <LocalChartGraph className="h-[80px] relative shrink-0 w-full z-[2]" />
        <LocalChartAxisX className="relative shrink-0 w-[440px] z-[1]" />
      </div>
    </div>
  );
}
type LocalSectionChartsProps = {
  className?: string;
  layout?: "2x2";
};

function LocalSectionCharts({ className, layout = "2x2" }: LocalSectionChartsProps) {
  return (
    <div className={className || "max-w-[1080px] relative w-[928px]"}>
      <div className="content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <div className="content-stretch flex items-center pb-[16px] relative shrink-0 w-full" data-name="container -title">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Overview 24 hours</p>
        </div>
        <div className="content-stretch flex flex-col items-center relative rounded-[12px] shrink-0 w-full" data-name=".local-units-charts">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row">
            <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[24px] pt-[16px] relative" data-name="container">
              <div className="relative shrink-0 w-full" data-name=".local -chart -energy">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[32px] relative shrink-0 w-full" data-name="container">
                    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] whitespace-nowrap" data-name="container -title">
                      <p className="relative shrink-0 text-[#0a0a0a]">Energy delivered</p>
                      <p className="relative shrink-0 text-[#757575]">3,452.20 kWh</p>
                    </div>
                    <div className="absolute h-[28px] right-[-8px] rounded-[6px] top-[-4px]" data-name=".local -button -view">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">View report</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LocalChartGraph className="h-[80px] relative shrink-0 w-full" />
                  <LocalChartAxisX className="relative shrink-0 w-[440px]" />
                </div>
              </div>
            </div>
            <div className="bg-[#e6e6e6] relative self-stretch shrink-0 w-px" data-name="divider" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[24px] pt-[16px] relative" data-name="container">
              <LocalChartUtilization className="relative shrink-0 w-full" />
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="row">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[16px] pt-[24px] relative" data-name="container">
              <div className="relative shrink-0 w-full" data-name=".local -chart -charges">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[32px] relative shrink-0 w-full" data-name="container">
                    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] whitespace-nowrap" data-name="container -title">
                      <p className="relative shrink-0 text-[#0a0a0a]">Charges</p>
                      <p className="relative shrink-0 text-[#757575]">210</p>
                    </div>
                    <div className="absolute h-[28px] right-[-8px] rounded-[6px] top-[-4px]" data-name=".local -button -view">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">View report</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <LocalChartGraph className="h-[80px] relative shrink-0 w-full" content="Charges" />
                  <LocalChartAxisX className="relative shrink-0 w-[440px]" />
                  <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="legend">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
                      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
                        <div className="absolute bg-[#47d789] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
                        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">200</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">As expected</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Marker+Label">
                      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="marker">
                        <div className="absolute bg-[#f1b23b] border border-[rgba(0,0,0,0.04)] border-solid h-[6px] left-0 right-0 rounded-[99px] top-[8px]" data-name="marker" />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[13px] tracking-[-0.0325px] whitespace-nowrap" data-name="coontainer">
                        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">10</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#757575]">With issues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e6e6e6] relative self-stretch shrink-0 w-px" data-name="divider" />
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[16px] pt-[24px] relative" data-name="container">
              <LocalChartIncidents className="relative shrink-0 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type LocalOnlineProps = {
  className?: string;
  online?: "True";
};

function LocalOnline({ className, online = "True" }: LocalOnlineProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
                  <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10.5999" preserveAspectRatio="none" viewBox="0 0 13.2001 10.5999" width="13.2001">
                      <path clipRule="evenodd" d={svgPaths.p2f173600} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[13px] tracking-[-0.0325px] whitespace-nowrap">Online</p>
        </div>
      </div>
    </div>
  );
}

function LocalSectionBackofficeNotes({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[400px]"} data-name=".local -section -backoffice-notes">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Backoffice internal notes</p>
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="card">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pb-[32px] pt-[8px] px-[12px] relative size-full">
              <div className="content-stretch flex items-start min-h-[40px] relative shrink-0" data-name="container -text">
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] w-[376px]">Write a note for the site...</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
    </div>
  );
}
type LocalSectionDetailsProps = {
  className?: string;
  content?: "Default";
};

function LocalSectionDetails({ className, content = "Default" }: LocalSectionDetailsProps) {
  return (
    <div className={className || "relative w-[400px]"}>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Details</p>
        <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px]" data-name="container">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Deployed units</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">5</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name=".local -unitdetails - alerts">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] w-[144px]">Incidents now</p>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="container">
            <div className="relative shrink-0" data-name="badge incident severity">
              <div className="content-stretch flex items-start relative size-full">
                <div className="relative shrink-0" data-name="badge">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                              <div className="absolute inset-[12.5%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                  <path clipRule="evenodd" d={svgPaths.p2e83fac0} fill="#C53027" fillRule="evenodd" id="vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="badge incident severity">
              <div className="content-stretch flex items-start relative size-full">
                <div className="relative shrink-0" data-name="badge">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                              <div className="absolute inset-[12.5%_12.46%_12.5%_68.08%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 3.89167 15" width="3.89167">
                                  <path d={svgPaths.p3b4d7f00} fill="#F7A916" id="vector" opacity="0.3" />
                                </svg>
                              </div>
                              <div className="absolute inset-[35.42%_40.25%_12.5%_12.5%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="10.4167" preserveAspectRatio="none" viewBox="0 0 9.45002 10.4167" width="9.45002">
                                  <g id="Vector">
                                    <path d={svgPaths.p14d51100} fill="#F7A916" />
                                    <path d={svgPaths.pb94400} fill="#F7A916" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="badge incident severity">
              <div className="content-stretch flex items-start relative size-full">
                <div className="relative shrink-0" data-name="badge">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                              <div className="absolute inset-[58.33%_68.04%_12.5%_12.5%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="5.83333" preserveAspectRatio="none" viewBox="0 0 3.89167 5.83333" width="3.89167">
                                  <path d={svgPaths.p11976700} fill="#757575" id="vector" />
                                </svg>
                              </div>
                              <div className="absolute inset-[12.5%_12.48%_12.5%_40.27%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 9.44993 15" width="9.44993">
                                  <g id="vector">
                                    <path d={svgPaths.p1768c90} fill="#D6D6D6" />
                                    <path d={svgPaths.p1c1dd2c0} fill="#D6D6D6" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0" data-name="container">
          <div className="h-[20px] relative shrink-0 w-[144px]" data-name=".local -incidents details label">
            <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium inset-0 leading-[20px] not-italic text-[#757575] text-[14px] tracking-[-0.084px]">State</p>
          </div>
          <div className="relative rounded-[6px] shrink-0" data-name=".local -badge -state">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative size-full">
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex h-full items-center justify-center relative rounded-bl-[6px] rounded-tl-[6px] shrink-0 w-[8px]" data-name=".base/status">
                    <div className="relative shrink-0 size-[8px]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
                        <circle cx="4" cy="4" fill="#1DCC6E" id="Ellipse 15" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Active</p>
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px]" data-name="container">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Added</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">Jan 25, 9:52</p>
        </div>
        <div className="h-[32px] relative shrink-0 w-full" data-name="base/list item">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 400 32" width="400">
            <g id="base/list item">
              <path d="M0 16H400" id="divider" stroke="#E6E6E6" />
            </g>
          </svg>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="list">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="container">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] w-[144px]">Partner</p>
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="container">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="case">
                <div className="absolute inset-[12.92%_8.74%_12.92%_8.75%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5018 14.8333" width="16.5018">
                    <path clipRule="evenodd" d={svgPaths.p16009880} fill="#757575" fillRule="evenodd" id="vector" />
                  </svg>
                </div>
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#0a0a0a] text-[14px] tracking-[-0.084px]">Acme Corp</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
            <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px]" data-name="container">
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Name</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">Tower Mission 1</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] w-full" data-name="container">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Location</p>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative text-[#0a0a0a]">10 West Beaver Ridge St, CA 95376, United States</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] w-full" data-name="container">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Location coordinates</p>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative text-[#0a0a0a]">40° 45’ 57” N 74° 0’ 8” W</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="container">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] w-[144px]">{`Site page `}</p>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="container">
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow up right">
                <div className="absolute inset-[20.83%_20.83%_21.88%_21.88%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="11.4583" preserveAspectRatio="none" viewBox="0 0 11.4583 11.4583" width="11.4583">
                    <path clipRule="evenodd" d={svgPaths.p329f5b00} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-full" data-name="base/list item">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 400 32" width="400">
            <g id="base/list item">
              <path d="M0 16H400" id="divider" stroke="#E6E6E6" />
            </g>
          </svg>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] w-full" data-name="container -details charge">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="container">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Last charge</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">Nov 9, 9:41</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="container">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Total charges</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">1,000</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="container">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#757575] w-[144px]">Total charged</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0a0a0a] whitespace-nowrap">100,200.20 kWh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalContentLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[400px]"} data-name=".local -content -left">
      <div className="content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <LocalSectionDetails className="relative shrink-0 w-[400px]" />
        <LocalSectionBackofficeNotes className="relative shrink-0 w-[400px]" />
      </div>
    </div>
  );
}
type TabProps = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  label?: boolean;
  label1?: string;
  state?: "Default" | "Hover" | "Pressed" | "Focused";
  type?: "Not Selected" | "Selected";
};

function Tab({ className, iconLeft = true, iconRight = true, label = true, label1 = "Tab", state = "Default", type = "Not Selected" }: TabProps) {
  const isHover = state === "Hover";
  const isNotSelectedAndFocused = type === "Not Selected" && state === "Focused";
  const isNotSelectedAndIsDefaultOrFocused = type === "Not Selected" && ["Default", "Focused"].includes(state);
  const isPressed = state === "Pressed";
  const isSelectedAndDefault = type === "Selected" && state === "Default";
  const isSelectedAndFocused = type === "Selected" && state === "Focused";
  return (
    <div className={className || `relative rounded-[6px] ${type === "Not Selected" && ["Hover", "Pressed", "Focused"].includes(state) ? "" : type === "Not Selected" && state === "Default" ? "cursor-pointer" : type === "Selected" && ["Hover", "Pressed", "Focused"].includes(state) ? "w-[81px]" : "cursor-pointer w-[81px]"}`}>
      <div aria-hidden={isSelectedAndFocused ? true : undefined} className={isNotSelectedAndFocused ? "flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full" : isSelectedAndFocused ? "absolute border-4 border-[#e6e6e6] border-solid inset-[-4px] pointer-events-none rounded-[10px]" : "flex flex-row items-center justify-center size-full"}>
        {(["Default", "Hover", "Pressed"].includes(state) || isNotSelectedAndFocused) && (
          <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
            {type === "Selected" && ["Default", "Hover", "Pressed"].includes(state) && <div className="absolute bg-[#0a0a0a] bottom-0 h-[2px] left-0 right-0" data-name="line" />}
            {(isSelectedAndDefault || isHover || isPressed) && iconLeft && (
              <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[17.08%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                          <path clipRule="evenodd" d={svgPaths.pad73700} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {(isSelectedAndDefault || isHover || isPressed) && label && <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label1}</p>}
            {(isSelectedAndDefault || isHover || isPressed) && iconRight && (
              <div className="relative shrink-0 size-[20px]" data-name="icon [right]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[17.08%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                          <path clipRule="evenodd" d={svgPaths.pad73700} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isNotSelectedAndIsDefaultOrFocused && iconLeft && (
              <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[17.08%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                          <path clipRule="evenodd" d={svgPaths.pad73700} fill="#525252" fillRule="evenodd" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isNotSelectedAndIsDefaultOrFocused && label && <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label1}</p>}
            {isNotSelectedAndIsDefaultOrFocused && iconRight && (
              <div className="relative shrink-0 size-[20px]" data-name="icon [right]">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[17.08%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                          <path clipRule="evenodd" d={svgPaths.pad73700} fill="#525252" fillRule="evenodd" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {state === "Focused" && (
        <div aria-hidden={isNotSelectedAndFocused ? true : undefined} className={isNotSelectedAndFocused ? "absolute border-4 border-[#e6e6e6] border-solid inset-[-4px] pointer-events-none rounded-[10px]" : "flex flex-row items-center justify-center size-full"}>
          {isSelectedAndFocused && (
            <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
              <div className="absolute bg-[#0a0a0a] bottom-0 h-[2px] left-0 right-0" data-name="line" />
              {iconLeft && (
                <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                            <path clipRule="evenodd" d={svgPaths.pad73700} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {label && <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{label1}</p>}
              {iconRight && (
                <div className="relative shrink-0 size-[20px]" data-name="icon [right]">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                            <path clipRule="evenodd" d={svgPaths.pad73700} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
type BasePartnerBadgeProps = {
  className?: string;
  assigned?: "True";
  partner?: string;
};

function BasePartnerBadge({ className, assigned = "True", partner = "Acme Corp" }: BasePartnerBadgeProps) {
  return (
    <div className={className || "relative rounded-[6px]"}>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="case">
            <div className="absolute inset-[12.92%_8.74%_12.92%_8.75%]" data-name="vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5018 14.8333" width="16.5018">
                <path clipRule="evenodd" d={svgPaths.p16009880} fill="#757575" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">{partner}</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevrone_up">
                    <div className="absolute inset-[39.64%_29.58%_37.92%_29.58%]" data-name="Icon (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pfd45280} fill="#0A0A0A" fillRule="evenodd" id="Icon (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevrone_down">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="Icon (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#0A0A0A" fillRule="evenodd" id="Icon (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="container">
      <Container1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px] whitespace-nowrap">1 of 8 sites</p>
    </div>
  );
}

function ContainerNav() {
  return (
    <div className="content-stretch flex gap-[24px] h-[28px] items-start relative shrink-0 w-full" data-name="container -nav">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow left-small">
                    <div className="absolute flex inset-[33.75%_29.58%_33.75%_31.31%] items-center justify-center" style={{ containerType: "size" }}>
                      <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                        <div className="relative size-full" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="7.82149" preserveAspectRatio="none" viewBox="0 0 6.5 7.82149" width="6.5">
                            <path clipRule="evenodd" d={svgPaths.pc9dac00} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
      </div>
      <Container />
    </div>
  );
}

function ContainerTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.34px] whitespace-nowrap">Site Tower Mission 1</p>
      <BasePartnerBadge className="relative rounded-[6px] shrink-0" />
    </div>
  );
}

function ContainerLocation() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container -location">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5004" preserveAspectRatio="none" viewBox="0 0 16.5 16.5004" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p302c8700} fill="#757575" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px] whitespace-nowrap">10 West Beaver Ridge St, CA 95376, United States</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="container">
      <ContainerTitle />
      <ContainerLocation />
    </div>
  );
}

function ContainerMain() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="container -main">
      <div className="bg-[#f5f5f5] relative rounded-[9999px] shrink-0 size-[48px]" data-name="avatar">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="unit static">
                    <div className="absolute inset-[17.08%_0.83%_17.08%_0]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="15.8008" preserveAspectRatio="none" viewBox="0 0 23.8008 15.8008" width="23.8008">
                        <g id="vector">
                          <path d={svgPaths.p2112f680} fill="#525252" />
                          <path d={svgPaths.p3d399f00} fill="#525252" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function ContainerButtons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="container -buttons">
      <div className="bg-[rgba(255,255,255,0)] cursor-pointer relative rounded-[6px] shrink-0" data-name="select button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Actions</p>
            <div className="relative shrink-0 size-[20px]" data-name="arrow">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="Icon (Stroke)">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#0A0A0A" fillRule="evenodd" id="Icon (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function Container2({ equipmentTabEnabled = false, activeSiteTab = "overview" }: SiteOverviewProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[156px] items-start py-[24px] relative shrink-0 w-full" data-name="container">
      <div className="relative shrink-0 w-full" data-name="site page title">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between relative size-full">
            <ContainerMain />
            <ContainerButtons />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="site page tabs group">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex gap-[32px] items-end relative size-full">
            <div className="absolute bg-[#e3e3e3] bottom-0 h-px left-0 right-0 rounded-[1px]" data-name="line" />
            <div className="cursor-pointer relative rounded-[6px] shrink-0 w-[63px]" data-name="tab" data-prototype-site-tab="overview">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
                  {activeSiteTab === "overview" && <div className="absolute bg-[#0a0a0a] bottom-0 h-[2px] left-0 right-0" data-name="line" />}
                  <p className={`[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] whitespace-nowrap ${activeSiteTab === "overview" ? "text-[#0a0a0a]" : "text-[#525252]"}`}>Overview</p>
                </div>
              </div>
            </div>
            <Tab className="relative rounded-[6px] shrink-0" iconLeft={false} iconRight={false} label1="Charges" />
            <div className="cursor-pointer relative rounded-[6px] shrink-0" data-name="tab">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Incidents</p>
                </div>
              </div>
            </div>
            {equipmentTabEnabled && (
              <div className="cursor-pointer relative rounded-[6px] shrink-0" data-name="tab" data-prototype-site-tab="equipment">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
                    {activeSiteTab === "equipment" && <div className="absolute bg-[#0a0a0a] bottom-0 h-[2px] left-0 right-0" data-name="line" />}
                    <p className={`[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.084px] whitespace-nowrap ${activeSiteTab === "equipment" ? "text-[#0a0a0a]" : "text-[#525252]"}`}>Equipment</p>
                  </div>
                </div>
              </div>
            )}
            <div className="cursor-pointer relative rounded-[6px] shrink-0" data-name="tab">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerTotal() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[2px] relative shrink-0" data-name="container -total">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">/20</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.252px] whitespace-nowrap">18</p>
      <ContainerTotal />
    </div>
  );
}

function LocalSummaryChargersGraphs() {
  return (
    <div className="content-stretch flex gap-[2px] h-[6px] items-center relative shrink-0 w-full" data-name=".local -summary -chargers -graphs">
      <div className="bg-[#92e7b8] h-[6px] relative rounded-[2px] shrink-0 w-[136px]" data-name="graph" />
      <div className="bg-[#00d473] flex-[1_0_0] h-[6px] min-w-px relative rounded-[2px]" data-name="graph" />
      <div className="bg-[#757575] h-[6px] relative rounded-[2px] shrink-0 w-[45px]" data-name="graph" />
      <div className="bg-[#d6d6d6] h-[6px] relative rounded-[2px] shrink-0 w-[45px]" data-name="graph" />
    </div>
  );
}

function LocalSummaryChargers() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name=".local -summary -chargers">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Working chargers</p>
        <Container5 />
        <LocalSummaryChargersGraphs />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                            <path clipRule="evenodd" d={svgPaths.p2e83fac0} fill="#C53027" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%_12.46%_12.5%_68.08%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 3.89167 15" width="3.89167">
                            <path d={svgPaths.p3b4d7f00} fill="#F7A916" id="vector" opacity="0.3" />
                          </svg>
                        </div>
                        <div className="absolute inset-[35.42%_40.25%_12.5%_12.5%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="10.4167" preserveAspectRatio="none" viewBox="0 0 9.45002 10.4167" width="9.45002">
                            <g id="Vector">
                              <path d={svgPaths.p14d51100} fill="#F7A916" />
                              <path d={svgPaths.pb94400} fill="#F7A916" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[58.33%_68.04%_12.5%_12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="5.83333" preserveAspectRatio="none" viewBox="0 0 3.89167 5.83333" width="3.89167">
                            <path d={svgPaths.p11976700} fill="#757575" id="vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[12.5%_12.48%_12.5%_40.27%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 9.44993 15" width="9.44993">
                            <g id="vector">
                              <path d={svgPaths.p1768c90} fill="#D6D6D6" />
                              <path d={svgPaths.p1c1dd2c0} fill="#D6D6D6" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.252px] whitespace-nowrap">8</p>
      <Container7 />
    </div>
  );
}

function LocalSummaryIncidentsGraphs() {
  return (
    <div className="content-stretch flex gap-[2px] h-[6px] items-center relative shrink-0 w-full" data-name=".local -summary -incidents -graphs">
      <div className="bg-[#c53027] h-[6px] relative rounded-[2px] shrink-0 w-[106px]" data-name="stopper" />
      <div className="bg-[#f1b23b] flex-[1_0_0] h-[6px] min-w-px relative rounded-[2px]" data-name="medium" />
      <div className="bg-[#757575] h-[6px] relative rounded-[2px] shrink-0 w-[53px]" data-name="low" />
    </div>
  );
}

function LocalSummaryIncidents() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name=".local -summary -incidents">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Incidents</p>
        <Container6 />
        <LocalSummaryIncidentsGraphs />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative rounded-[12px]" data-name="container">
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#e6e6e6] h-full relative shrink-0 w-px" data-name="divider" />
      </div>
      <LocalSummaryChargers />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#e6e6e6] h-full relative shrink-0 w-px" data-name="divider" />
      </div>
      <LocalSummaryIncidents />
    </div>
  );
}

function LocalUnitsStatistics() {
  return (
    <div className="content-stretch flex items-start pb-[24px] relative shrink-0 w-full" data-name=".local -units -statistics">
      <Container4 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">All</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Working chargers</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Incidents</p>
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 16 16">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="size-4 shrink-0 text-[#0a0a0a]" fill="none" viewBox="0 0 16 16">
      <path d="m3.5 8 2.75 2.75 6.25-6.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function GroupViewSwitcher({
  separatorMode,
  onSeparatorModeChange,
}: {
  separatorMode: GroupSeparatorMode;
  onSeparatorModeChange: (mode: GroupSeparatorMode) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectSeparatorMode = (mode: GroupSeparatorMode) => {
    onSeparatorModeChange(mode);
    setIsOpen(false);
  };

  const optionClassName = (isSelected: boolean) => [
    "flex min-h-8 w-full items-center justify-between rounded-[6px] px-3 py-1.5 text-left font-['Inter:Regular',sans-serif] text-[12px] leading-5 transition-colors",
    isSelected ? "bg-[#f5f5f5] text-[#0a0a0a]" : "text-[#525252] hover:bg-[#fafafa]",
  ].join(" ");

  return (
    <div className="absolute right-0 top-[8px] z-20 h-[28px] w-[158px] rounded-[6px]" data-name=".local -button -view">
      <div className="grid size-full grid-cols-[62px_minmax(0,1fr)_minmax(0,1fr)] gap-[2px] rounded-[6px] bg-[#f5f5f5] p-[2px]">
          <div className="relative min-w-0">
            <button
              aria-controls="group-display-settings"
              aria-expanded={isOpen}
              aria-label="Group display settings"
              className="flex h-full w-full cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-[4px] bg-white px-0 font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#0a0a0a] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2357d9]"
              onClick={() => setIsOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsOpen(false);
                }
              }}
              type="button"
            >
              Group
              <ChevronDownIcon className="size-3 shrink-0" />
            </button>
            {isOpen ? (
              <div id="group-display-settings" aria-label="Group separator options" className="absolute right-0 top-[calc(100%+8px)] z-30 w-[196px] rounded-[8px] border border-[#e6e6e6] bg-white p-1 shadow-[0_8px_16px_rgba(16,24,40,0.12)]">
                <button aria-pressed={separatorMode === "with"} className={optionClassName(separatorMode === "with")} onClick={() => selectSeparatorMode("with")} type="button">
                  With separators
                  {separatorMode === "with" ? <CheckIcon /> : null}
                </button>
                <button aria-pressed={separatorMode === "without"} className={optionClassName(separatorMode === "without")} onClick={() => selectSeparatorMode("without")} type="button">
                  Without separators
                  {separatorMode === "without" ? <CheckIcon /> : null}
                </button>
              </div>
            ) : null}
          </div>
          <button aria-pressed="false" className="relative h-full min-w-0 cursor-pointer rounded-[4px] px-0 font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#757575]" data-prototype-view="table" type="button">Table</button>
          <button aria-pressed="false" className="relative h-full min-w-0 cursor-pointer rounded-[4px] px-0 font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#757575]" data-prototype-view="cards" type="button">Cards</button>
      </div>
    </div>
  );
}

function Container8({
  separatorMode,
  onSeparatorModeChange,
}: {
  separatorMode: GroupSeparatorMode;
  onSeparatorModeChange: (mode: GroupSeparatorMode) => void;
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex items-start pb-[12px] pt-[8px] px-[8px] relative size-full">
        <div className="relative shrink-0" data-name=".local -tabs group -units">
          <div className="content-stretch cursor-pointer flex gap-[8px] items-start relative size-full">
            <div className="relative rounded-[6px] shrink-0" data-name="tab">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
                  <Content />
                  <div className="relative shrink-0" data-name=".base/badge">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px] whitespace-nowrap">20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0" data-name="tab">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
                  <Content1 />
                  <div className="relative shrink-0" data-name=".base/badge">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[-0.0325px] whitespace-nowrap">18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-[6px] shrink-0" data-name="tab">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
                  <Content2 />
                  <div className="relative shrink-0" data-name=".base/badge">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[13px] tracking-[-0.0325px] whitespace-nowrap">8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GroupViewSwitcher separatorMode={separatorMode} onSeparatorModeChange={onSeparatorModeChange} />
      </div>
    </div>
  );
}

function Container9({ visible }: { visible: boolean }) {
  return (
    <div className={`${visible ? "block" : "hidden"} bg-[#fafafa] relative shrink-0 w-full`} data-name="container">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="icon">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                    <g id="vector">
                      <path clipRule="evenodd" d={svgPaths.p1ed17300} fill="#757575" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p25e8d880} fill="#757575" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p21e54f00} fill="#757575" fillRule="evenodd" />
                      <path d={svgPaths.p98cee80} fill="#757575" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Integrated units</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function ContainerTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[150px] relative shrink-0" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">Booster A, UN-401</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[10%]" data-name="circle pad">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                </svg>
              </div>
              <div className="absolute inset-[10%]" data-name="circle progress">
                <div className="absolute inset-[0_0.52%_0_0]">
                  <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">46%</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container11 />
        <Container12 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[10%]" data-name="circle pad">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                </svg>
              </div>
              <div className="absolute inset-[10%]" data-name="circle progress">
                <div className="absolute inset-[0_0.52%_0_0]">
                  <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">37%</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
        <Container14 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                    <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="container">
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge />
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge1 />
        </div>
      </div>
      <div className="relative shrink-0 w-[103px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container15 />
                <Container16 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container17 />
                <Container18 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerLeft() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center min-w-0 self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle1 />
        <Container10 />
        <div className="relative shrink-0 w-[164px]" data-name=".local -live-unit -incidents">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">No incidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 size-[32px]" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalLiveUnitItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".local -live-unit -item">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft />
          <ContainerRight />
        </div>
      </div>
    </div>
  );
}

function ContainerTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[150px] relative shrink-0" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">Booster B, UN-400</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="container">
      <div className="relative shrink-0 w-[101px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container20 />
                <Container21 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container22 />
                <Container23 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container24 />
                <Container25 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container26 />
                <Container27 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerLeft1() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle2 />
        <Container19 />
        <div className="relative shrink-0 w-[164px]" data-name=".local -live-unit -incidents">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">No incidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalLiveUnitItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".local -live-unit -item">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft1 />
          <ContainerRight1 />
        </div>
      </div>
    </div>
  );
}

function ContainerTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[150px] relative shrink-0" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">UN-399</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="container">
      <div className="relative shrink-0 w-[101px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container29 />
                <Container30 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[103px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container31 />
                <Container32 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container33 />
                <Container34 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container35 />
                <Container36 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                            <path clipRule="evenodd" d={svgPaths.p2e83fac0} fill="#C53027" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%_12.46%_12.5%_68.08%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 3.89167 15" width="3.89167">
                            <path d={svgPaths.p3b4d7f00} fill="#F7A916" id="vector" opacity="0.3" />
                          </svg>
                        </div>
                        <div className="absolute inset-[35.42%_40.25%_12.5%_12.5%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="10.4167" preserveAspectRatio="none" viewBox="0 0 9.45002 10.4167" width="9.45002">
                            <g id="Vector">
                              <path d={svgPaths.p14d51100} fill="#F7A916" />
                              <path d={svgPaths.pb94400} fill="#F7A916" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[58.33%_68.04%_12.5%_12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="5.83333" preserveAspectRatio="none" viewBox="0 0 3.89167 5.83333" width="3.89167">
                            <path d={svgPaths.p11976700} fill="#757575" id="vector" />
                          </svg>
                        </div>
                        <div className="absolute inset-[12.5%_12.48%_12.5%_40.27%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 9.44993 15" width="9.44993">
                            <g id="vector">
                              <path d={svgPaths.p1768c90} fill="#D6D6D6" />
                              <path d={svgPaths.p1c1dd2c0} fill="#D6D6D6" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerLeft2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle3 />
        <Container28 />
        <div className="relative shrink-0" data-name=".local -live-unit -incidents">
          <div className="content-stretch flex items-start relative size-full">
            <Container37 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalLiveUnitItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".local -live-unit -item">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft2 />
          <ContainerRight2 />
        </div>
      </div>
    </div>
  );
}

function ContainerTitle4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[150px] relative shrink-0" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">UN-398</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="container">
      <div className="relative shrink-0 w-[101px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container39 />
                <Container40 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container41 />
                <Container42 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container43 />
                <Container44 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container45 />
                <Container46 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerLeft3() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle4 />
        <Container38 />
        <div className="relative shrink-0 w-[164px]" data-name=".local -live-unit -incidents">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">No incidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 size-[32px]" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalLiveUnitItem3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".local -live-unit -item">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft3 />
          <ContainerRight3 />
        </div>
      </div>
    </div>
  );
}

function Container47({ visible }: { visible: boolean }) {
  return (
    <div className={`${visible ? "block" : "hidden"} bg-[#fafafa] relative shrink-0 w-full`} data-name="container">
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".local -icon -micro">
          <div className="absolute inset-[13.54%_12.5%_17.71%_12.5%]" data-name="vector">
            <div className="absolute inset-[-5.45%_-5%]">
              <svg className="block size-full" fill="none" height="15.25" preserveAspectRatio="none" viewBox="0 0 16.5 15.25" width="16.5">
                <g id="vector">
                  <path d={svgPaths.p536dd80} stroke="#757575" strokeWidth="1.5" />
                  <path d={svgPaths.p306ecd00} stroke="#757575" strokeWidth="1.5" />
                  <path d={svgPaths.p32bf2580} stroke="#757575" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.75px] left-1/2 top-[calc(50%+0.21px)] w-[4.33px]">
            <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
              <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Distributed systems</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function ContainerTitle5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">DS-100</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-[24px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[10%]" data-name="circle pad">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                </svg>
              </div>
              <div className="absolute inset-[10%]" data-name="circle progress">
                <div className="absolute inset-[0_0.52%_0_0]">
                  <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">57%</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container49 />
        <Container50 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                    <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="container">
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge2 />
        </div>
      </div>
      <div className="relative shrink-0 w-[103px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container51 />
                <Container52 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[103px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container53 />
                <Container54 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container55 />
                <Container56 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="hidden h-[24px] relative shrink-0 w-[70px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full" />
      </div>
    </div>
  );
}

function ContainerLeft4() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center min-w-0 self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle5 />
        <Container48 />
        <div className="relative shrink-0 w-[164px]" data-name=".local -live-unit -incidents">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end relative size-full">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">No incidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft4 />
          <ContainerRight4 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ContainerTitle6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150px]" data-name="container -title">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#0a0a0a] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content] whitespace-nowrap">DS-98</p>
      <LocalOnline className="relative shrink-0" />
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0 w-[34px]" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[10%]" data-name="circle pad">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                </svg>
              </div>
              <div className="absolute inset-[10%]" data-name="circle progress">
                <div className="absolute inset-[0_0.52%_0_0]">
                  <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">64%</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container58 />
        <Container59 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">02</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[10%]" data-name="circle pad">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p346fa400} fill="#F6FDFA" id="circle pad" />
                </svg>
              </div>
              <div className="absolute inset-[10%]" data-name="circle progress">
                <div className="absolute inset-[0_0.52%_0_0]">
                  <img alt="" className="block max-w-none size-full" height="16" src={imgCircleProgress} width="15.917" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">53%</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container60 />
        <Container61 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">03</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                    <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">04</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[2px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                    <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge3 />
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge4 />
        </div>
      </div>
      <div className="relative shrink-0 w-[103px]" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container62 />
                <Container63 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative size-full">
                <Container64 />
                <Container65 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <Frame />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="container">
      <div className="h-[20px] relative shrink-0 w-[31px]" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full" />
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%_12.46%_12.5%_12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15.0082 15" width="15.0082">
                            <g id="vector">
                              <path d={svgPaths.p2e30e900} fill="#F55451" />
                              <path d={svgPaths.p190e0100} fill="#F55451" />
                              <path d={svgPaths.p19ff8800} fill="#F55451" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="badge incident severity">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative shrink-0" data-name="badge">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[12.5%_12.46%_12.5%_68.08%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 3.89167 15" width="3.89167">
                            <path d={svgPaths.p3b4d7f00} fill="#F7A916" id="vector" opacity="0.3" />
                          </svg>
                        </div>
                        <div className="absolute inset-[35.42%_40.25%_12.5%_12.5%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="10.4167" preserveAspectRatio="none" viewBox="0 0 9.45002 10.4167" width="9.45002">
                            <g id="Vector">
                              <path d={svgPaths.p14d51100} fill="#F7A916" />
                              <path d={svgPaths.pb94400} fill="#F7A916" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerLeft5() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-full items-center min-w-px relative" data-name="container - left">
        <ContainerTitle6 />
        <Container57 />
        <div className="flex-[1_0_0] min-w-px relative" data-name=".local -live-unit -incidents">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end relative size-full">
              <Container66 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerRight5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="container - right">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/more button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="4.48816" preserveAspectRatio="none" viewBox="0 0 8.16667 4.48816" width="8.16667">
                        <path clipRule="evenodd" d={svgPaths.pbfa2180} fill="#757575" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] py-[12px] relative size-full">
          <ContainerLeft5 />
          <ContainerRight5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e6e6e6] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function List({ showSectionHeaders }: { showSectionHeaders: boolean }) {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container9 visible={showSectionHeaders} />
        <LocalLiveUnitItem />
        <LocalLiveUnitItem1 />
        <LocalLiveUnitItem2 />
        <LocalLiveUnitItem3 />
        <Container47 visible={showSectionHeaders} />
        <Row />
        <Row1 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LocalUnitsChargers() {
  const [separatorMode, setSeparatorMode] = useState<GroupSeparatorMode>("without");
  const showSectionHeaders = separatorMode === "with";

  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name=".local-units-chargers">
      <Container8 separatorMode={separatorMode} onSeparatorModeChange={setSeparatorMode} />
      <List showSectionHeaders={showSectionHeaders} />
    </div>
  );
}

function SectionLiveUnits() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1080px] relative shrink-0 w-full" data-name="section -live units">
      <div className="relative shrink-0 w-full" data-name=".local -live-units-title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] tracking-[-0.176px] whitespace-nowrap">Live chargers</p>
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[19.73%_8.75%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="12.1066" preserveAspectRatio="none" viewBox="0 0 16.5007 12.1066" width="16.5007">
                        <path d={svgPaths.p273a3400} fill="#0A0A0A" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocalUnitsStatistics />
      <LocalUnitsChargers />
    </div>
  );
}

function ContainerRightCol({ equipmentOnOverview = false }: Pick<SiteOverviewProps, "equipmentOnOverview">) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center min-w-px relative" data-name="container -right col">
      <SectionLiveUnits />
      <LocalSectionCharts className="max-w-[1080px] relative shrink-0 w-full" />
      <LocalSectionTimeline className="max-w-[1080px] relative shrink-0 w-full" />
      {equipmentOnOverview && <SiteEquipmentOverview />}
      <LocalSectionActivity className="max-w-[1080px] relative shrink-0 w-full" />
    </div>
  );
}

function ContainerContent({ equipmentOnOverview }: Pick<SiteOverviewProps, "equipmentOnOverview">) {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="container -content">
      <LocalContentLeft className="relative shrink-0 w-[400px]" />
      <ContainerRightCol equipmentOnOverview={equipmentOnOverview} />
    </div>
  );
}

function ContainerBody({ equipmentTabEnabled, equipmentOnOverview, activeSiteTab }: SiteOverviewProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[96px] pt-[24px] px-[24px] right-0 top-[61px]" data-name="container -body">
      <ContainerNav />
      <Container2 equipmentTabEnabled={equipmentTabEnabled} activeSiteTab={activeSiteTab} />
      <ContainerContent equipmentOnOverview={equipmentOnOverview} />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="nav">
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Home" />
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Charges" />
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Clients" />
      <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Sites</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Equipment</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Reports</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Incidents</p>
          </div>
        </div>
      </div>
      <BaseNavItem className="relative rounded-[6px] shrink-0" label="Settings" />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="container">
      <Logotype className="relative shrink-0" />
      <Nav />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Nick Smith</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container70 />
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevrone_down">
              <div className="absolute inset-[37.92%_29.58%_39.64%_29.58%]" data-name="Icon (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" height="3.59052" preserveAspectRatio="none" viewBox="0 0 6.53333 3.59052" width="6.53333">
                  <path clipRule="evenodd" d={svgPaths.p3e703100} fill="#525252" fillRule="evenodd" id="Icon (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0" data-name="container">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
            <Avatar className="bg-[#1dcc6e] relative rounded-[999px] shrink-0 size-[40px]" />
            <Container69 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[7px] pl-[24px] pr-[16px] pt-[6px] relative size-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="header">
      <div className="absolute bg-[#e6e6e6] bottom-0 h-px left-0 right-0" data-name="divider" />
      <Header1 />
    </div>
  );
}

export default function SiteOverviewV({ equipmentTabEnabled = false, equipmentOnOverview = false, activeSiteTab = "overview" }: SiteOverviewProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="Site overview v1">
      <ContainerBody equipmentTabEnabled={equipmentTabEnabled} equipmentOnOverview={equipmentOnOverview} activeSiteTab={activeSiteTab} />
      <Header />
    </div>
  );
}
