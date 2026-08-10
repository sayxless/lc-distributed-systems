import svgPaths from "./svg-6uq9md4yd4";
import imgCircleProgress from "./30363b45a3245bd9bccf8a502bcddde497fd3a13.png";
type BaseMoreButtonProps = {
  className?: string;
  state?: "Default";
};

function BaseMoreButton({ className, state = "Default" }: BaseMoreButtonProps) {
  return (
    <div className={className || "relative rounded-[6px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                  <div className="absolute inset-[43.12%_18.13%_43.12%_18.12%]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="2.75065" preserveAspectRatio="none" viewBox="0 0 12.7507 2.75065" width="12.7507">
                      <g id="vector">
                        <path d={svgPaths.pcfd2900} fill="#757575" />
                        <path d={svgPaths.p1ef67300} fill="#757575" />
                        <path d={svgPaths.p1c87e800} fill="#757575" />
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
  );
}
type BadgeProps = {
  className?: string;
  type?: "Default" | "Icon #";
};

function Badge({ className, type = "Default" }: BadgeProps) {
  const isDefault = type === "Default";
  const isIcon = type === "Icon #";
  return (
    <div className={className || `relative ${isIcon ? "" : "rounded-[6px]"}`}>
      <div aria-hidden={isDefault ? true : undefined} className={isIcon ? "flex flex-row items-center justify-center size-full" : "absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]"}>
        {isIcon && (
          <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
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
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">#</p>
          </div>
        )}
      </div>
      {isDefault && (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
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
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Label</p>
          </div>
        </div>
      )}
    </div>
  );
}
type TableCellProps = {
  className?: string;
  content?: "Badge" | "Checkbox" | "More Button" | "Space [Empty Cell]" | "Text";
  iconLeft?: boolean;
  iconRight?: boolean;
  state?: "Default";
  text?: string;
  type?: "Not Selected";
};

function TableCell({ className, content = "Text", iconLeft = true, iconRight = true, state = "Default", text = "Text", type = "Not Selected" }: TableCellProps) {
  const isCheckboxAndNotSelectedAndDefault = content === "Checkbox" && type === "Not Selected" && state === "Default";
  const isMoreButtonAndNotSelectedAndDefault = content === "More Button" && type === "Not Selected" && state === "Default";
  const isSpaceEmptyCellAndNotSelectedAndDefault = content === "Space [Empty Cell]" && type === "Not Selected" && state === "Default";
  const isTextAndNotSelectedAndDefault = content === "Text" && type === "Not Selected" && state === "Default";
  return (
    <div className={className || `relative ${isSpaceEmptyCellAndNotSelectedAndDefault ? "size-[48px]" : ""}`}>
      <div className={`flex size-full ${isSpaceEmptyCellAndNotSelectedAndDefault ? "flex-row items-end" : "flex-col justify-center"}`}>
        <div className={`content-stretch flex relative size-full ${isSpaceEmptyCellAndNotSelectedAndDefault ? "items-end" : "flex-col items-start justify-center"}`}>
          {type === "Not Selected" && state === "Default" && ["Badge", "Text", "More Button", "Checkbox"].includes(content) && (
            <div className={`content-stretch flex relative shrink-0 ${isCheckboxAndNotSelectedAndDefault ? "items-start justify-center pb-[15px] pt-[16px]" : isMoreButtonAndNotSelectedAndDefault ? "items-center pb-[7px] pt-[8px]" : isTextAndNotSelectedAndDefault ? "gap-[8px] items-center pb-[13px] pt-[14px]" : "items-center pb-[11px] pt-[12px]"}`} data-name="container">
              {content === "Badge" && type === "Not Selected" && state === "Default" && <Badge className="relative rounded-[6px] shrink-0" />}
              {isTextAndNotSelectedAndDefault && iconLeft && (
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
              {isTextAndNotSelectedAndDefault && <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{text}</p>}
              {isTextAndNotSelectedAndDefault && iconRight && (
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
              {isMoreButtonAndNotSelectedAndDefault && <BaseMoreButton className="relative rounded-[6px] shrink-0" />}
              {isCheckboxAndNotSelectedAndDefault && (
                <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox input">
                  <div aria-hidden className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="relative size-full" />
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={`bg-[#e6e6e6] h-px relative ${isSpaceEmptyCellAndNotSelectedAndDefault ? "flex-[1_0_0] min-w-px" : "shrink-0 w-full"}`} data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type TableHeaderProps = {
  className?: string;
  content?: "Text" | "Checkbox" | "Spacing (Empty Cell)";
  headerText?: string;
  iconInfo?: boolean;
  iconLeft?: boolean;
  sort?: boolean;
  state?: "Default";
};

function TableHeader({ className, content = "Text", headerText = "Header", iconInfo = true, iconLeft = true, sort = true, state = "Default" }: TableHeaderProps) {
  const isCheckboxAndDefault = content === "Checkbox" && state === "Default";
  const isDefaultAndIsCheckboxOrText = state === "Default" && ["Checkbox", "Text"].includes(content);
  const isTextAndDefault = content === "Text" && state === "Default";
  return (
    <div className={className || `relative ${isTextAndDefault ? "rounded-[6px]" : isCheckboxAndDefault ? "" : "size-[48px]"}`}>
      <div className={`flex size-full ${isDefaultAndIsCheckboxOrText ? "flex-col justify-center" : "flex-row items-end"}`}>
        <div className={`content-stretch flex relative size-full ${isDefaultAndIsCheckboxOrText ? "flex-col items-start justify-center" : "items-end"}`}>
          {isDefaultAndIsCheckboxOrText && (
            <div className={`content-stretch flex relative shrink-0 ${isTextAndDefault ? "gap-[4px] items-center pb-[13px] pt-[14px]" : "items-start justify-center pb-[15px] pt-[16px]"}`} data-name="container">
              {isCheckboxAndDefault && (
                <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox input">
                  <div aria-hidden className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="relative size-full" />
                  </div>
                </div>
              )}
              {isTextAndDefault && (
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  {iconLeft && (
                    <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center relative size-full">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                            <div className="absolute inset-[17.08%]" data-name="vector">
                              <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                                <path clipRule="evenodd" d={svgPaths.pad73700} fill="#757575" fillRule="evenodd" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
                    <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">{headerText}</p>
                    {iconInfo && (
                      <div className="relative shrink-0 size-[16px]" data-name="icon [right]">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
                              <div className="absolute inset-[8.75%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="13.2" preserveAspectRatio="none" viewBox="0 0 13.2 13.2" width="13.2">
                                  <g id="vector">
                                    <path clipRule="evenodd" d={svgPaths.p2f6b7000} fill="#757575" fillRule="evenodd" />
                                    <path d={svgPaths.p3c67a000} fill="#757575" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {isTextAndDefault && sort && (
                <div className="relative shrink-0" data-name=".base/sort">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="relative shrink-0 size-[16px]" data-name="icon">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center relative size-full">
                          <div className="relative shrink-0 size-[16px]" data-name="change icon🔄">
                            <div className="absolute inset-[25.42%_31.67%_25.42%_12.92%]" data-name="vector (Stroke)">
                              <svg className="absolute block inset-0 size-full" fill="none" height="7.86719" preserveAspectRatio="none" viewBox="0 0 8.86719 7.86719" width="8.86719">
                                <path d={svgPaths.pb3df580} fill="#757575" id="vector (Stroke)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={`bg-[#e6e6e6] h-px relative ${isDefaultAndIsCheckboxOrText ? "shrink-0 w-full" : "flex-[1_0_0] min-w-px"}`} data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type TableCell1Props = {
  className?: string;
  content?: "More Button";
  state?: "Default";
  type?: "Not Selected";
};

function TableCell1({ className, content = "More Button", state = "Default", type = "Not Selected" }: TableCell1Props) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative size-full">
          <div className="content-stretch flex items-center pb-[7px] pt-[8px] relative shrink-0" data-name="container">
            <BaseMoreButton className="relative rounded-[6px] shrink-0" />
          </div>
          <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type TableCell2Props = {
  className?: string;
  content?: "Space [Empty Cell]";
  state?: "Default";
  type?: "Not Selected";
};

function TableCell2({ className, content = "Space [Empty Cell]", state = "Default", type = "Not Selected" }: TableCell2Props) {
  return (
    <div className={className || "relative size-[48px]"}>
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end relative size-full">
          <div className="bg-[#e6e6e6] flex-[1_0_0] h-px min-w-px relative" data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type TableHeader1Props = {
  className?: string;
  content?: "Text" | "Spacing (Empty Cell)";
  headerText?: string;
  iconInfo?: boolean;
  iconLeft?: boolean;
  sort?: boolean;
  state?: "Default";
};

function TableHeader1({ className, content = "Text", headerText = "Header", iconInfo = true, iconLeft = true, sort = true, state = "Default" }: TableHeader1Props) {
  const isTextAndDefault = content === "Text" && state === "Default";
  return (
    <div className={className || `relative ${isTextAndDefault ? "rounded-[6px]" : "size-[48px]"}`}>
      <div className={`flex size-full ${isTextAndDefault ? "flex-col justify-center" : "flex-row items-end"}`}>
        <div className={`content-stretch flex relative size-full ${isTextAndDefault ? "flex-col items-start justify-center" : "items-end"}`}>
          {content === "Spacing (Empty Cell)" && state === "Default" && <div className="bg-[#e6e6e6] flex-[1_0_0] h-px min-w-px relative" data-name="divider" />}
          {isTextAndDefault && (
            <>
              <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
                  {iconLeft && (
                    <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center relative size-full">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                            <div className="absolute inset-[17.08%]" data-name="vector">
                              <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 13.1685 13.1667" width="13.1685">
                                <path clipRule="evenodd" d={svgPaths.pad73700} fill="#757575" fillRule="evenodd" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
                    <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">{headerText}</p>
                    {iconInfo && (
                      <div className="relative shrink-0 size-[16px]" data-name="icon [right]">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
                              <div className="absolute inset-[8.75%]" data-name="vector">
                                <svg className="absolute block inset-0 size-full" fill="none" height="13.2" preserveAspectRatio="none" viewBox="0 0 13.2 13.2" width="13.2">
                                  <g id="vector">
                                    <path clipRule="evenodd" d={svgPaths.p2f6b7000} fill="#757575" fillRule="evenodd" />
                                    <path d={svgPaths.p3c67a000} fill="#757575" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {sort && (
                  <div className="relative shrink-0" data-name=".base/sort">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0 size-[20px]" data-name="icon">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="relative shrink-0 size-[20px]" data-name="change icon🔄">
                              <div className="absolute inset-[25.42%_31.67%_25.42%_12.92%]" data-name="vector (Stroke)">
                                <svg className="absolute block inset-0 size-full" fill="none" height="9.83398" preserveAspectRatio="none" viewBox="0 0 11.084 9.83398" width="11.084">
                                  <path d={svgPaths.p28670100} fill="#757575" id="vector (Stroke)" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
type LocalAlertTextProps = {
  className?: string;
  type?: "None" | "No data";
};

function LocalAlertText({ className, type = "None" }: LocalAlertTextProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{type === "No data" ? "No data available" : "None"}</p>
        </div>
      </div>
    </div>
  );
}
type BadgeChargerStateProps = {
  className?: string;
  size?: "Default";
  state?: "Available" | "Preparing";
};

function BadgeChargerState({ className, size = "Default", state = "Available" }: BadgeChargerStateProps) {
  const isPreparingAndDefault = state === "Preparing" && size === "Default";
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        <div className="relative rounded-[6px] shrink-0" data-name="badge">
          <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[8.75%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                          {state === "Available" && size === "Default" && <path clipRule="evenodd" d={svgPaths.p3aaced00} fill="#1DCC6E" fillRule="evenodd" id="vector" />}
                          {isPreparingAndDefault && (
                            <g id="vector">
                              <path clipRule="evenodd" d={svgPaths.p14e47e80} fill="#1DCC6E" fillRule="evenodd" />
                              <path d={svgPaths.p3b7f4d80} fill="#1DCC6E" />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">{isPreparingAndDefault ? "Preparing" : "Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BadgeChargerStateV3DepricatedProps = {
  className?: string;
  size?: "Default";
  state?: "Offline";
};

function BadgeChargerStateV3Depricated({ className, size = "Default", state = "Offline" }: BadgeChargerStateV3DepricatedProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        <div className="relative rounded-[6px] shrink-0" data-name="badge">
          <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                      <div className="absolute inset-[8.75%_8.75%_12.92%_8.75%]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" height="15.6669" preserveAspectRatio="none" viewBox="0 0 16.5001 15.6669" width="16.5001">
                          <g id="vector">
                            <path d={svgPaths.p22a01fc0} fill="#F55451" />
                            <path d={svgPaths.p29f95000} fill="#F55451" />
                            <path d={svgPaths.p10657f00} fill="#F55451" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#f55451] text-[14px] tracking-[-0.084px] whitespace-nowrap">Offline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseFilterBadge({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#1dcc6e] relative rounded-[4px]"} data-name=".base/filter badge">
      <div className="content-stretch flex items-start px-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.0325px] whitespace-nowrap">#</p>
      </div>
    </div>
  );
}
type BaseFilterButtonProps = {
  className?: string;
  badge?: boolean;
  state?: "Default";
  type?: "Show Filter";
};

function BaseFilterButton({ className, badge = true, state = "Default", type = "Show Filter" }: BaseFilterButtonProps) {
  return (
    <div className={className || "relative rounded-[6px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                  <div className="absolute inset-[17.08%_8.75%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" height="13.1667" preserveAspectRatio="none" viewBox="0 0 16.5 13.1667" width="16.5">
                      <path clipRule="evenodd" d={svgPaths.p224e7400} fill="#0A0A0A" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Filter</p>
          {badge && <BaseFilterBadge className="bg-[#1dcc6e] relative rounded-[4px] shrink-0" />}
        </div>
      </div>
    </div>
  );
}
type AvatarProps = {
  className?: string;
  size?: "md";
  type?: "Primary";
};

function Avatar({ className, size = "md", type = "Primary" }: AvatarProps) {
  return (
    <div className={className || "bg-[#1dcc6e] relative rounded-[999px] size-[40px]"}>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[14px] text-center text-white tracking-[-0.084px]">NS</p>
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
            <g clipPath="url(#clip0_0_957)" id="logotype">
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
              <clipPath id="clip0_0_957">
                <rect fill="white" height="24" width="150" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="nav">
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Home" />
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Charges" />
      <BaseNavItem arrow={false} className="relative rounded-[6px] shrink-0" label="Clients" />
      <div className="relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Sites</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0" data-name=".base/nav item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Equipment</p>
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

function Container() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="container">
      <Logotype className="relative shrink-0" />
      <Nav />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Nick Smith</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container3 />
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

function Container1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0" data-name="container">
      <div className="relative rounded-[6px] shrink-0" data-name=".base/profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
            <Avatar className="bg-[#1dcc6e] relative rounded-[999px] shrink-0 size-[40px]" />
            <Container2 />
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
          <Container />
          <Container1 />
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[12.92%_8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p1ed17300} fill="#525252" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p25e8d880} fill="#525252" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p21e54f00} fill="#525252" fillRule="evenodd" />
                    <path d={svgPaths.p98cee80} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Integrated units</p>
    </div>
  );
}

function SidebarNavigationItem() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".local -icon -micro">
        <div className="absolute inset-[13.54%_12.5%_17.71%_12.5%]" data-name="vector">
          <div className="absolute inset-[-5.45%_-5%]">
            <svg className="block size-full" fill="none" height="15.25" preserveAspectRatio="none" viewBox="0 0 16.5 15.25" width="16.5">
              <g id="vector">
                <path d={svgPaths.p536dd80} stroke="#525252" strokeWidth="1.5" />
                <path d={svgPaths.p306ecd00} stroke="#525252" strokeWidth="1.5" />
                <path d={svgPaths.p32bf2580} stroke="#525252" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.75px] left-1/2 top-[calc(50%+0.21px)] w-[4.33px]">
          <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
            <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
              <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#525252" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Distributed systems</p>
    </div>
  );
}

function SidebarNavigationItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="sidebar navigation item">
      <Content1 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="section">
      <SidebarNavigationItem />
      <SidebarNavigationItem1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Equipment</p>
    </div>
  );
}

function SidebarNavigationCaption() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation caption">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[12.92%_8.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 16.5 14.8333" width="16.5">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#0A0A0A" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.pee71200} fill="#0A0A0A" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Chargers</p>
    </div>
  );
}

function SidebarNavigationItem2() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".local -icon -genset">
        <div className="-translate-x-1/2 absolute bottom-[20.83%] left-1/2 top-[29.17%] w-[15px]" data-name="vector">
          <div className="absolute inset-[-7.5%_-5%]">
            <svg className="block size-full" fill="none" height="11.5" preserveAspectRatio="none" viewBox="0 0 16.5 11.5" width="16.5">
              <path d={svgPaths.p29df13f0} id="vector" stroke="#525252" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[31.25%] left-[calc(50%-3.33px)] top-[37.5%] w-[5px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.25" preserveAspectRatio="none" viewBox="0 0 5 6.25" width="5">
            <path d={svgPaths.pae1d180} fill="#525252" id="vector" />
          </svg>
        </div>
        <div className="absolute h-[1.667px] left-[4.17px] top-[15.83px] w-[2.5px]">
          <div className="absolute inset-[-45%_-30%]">
            <svg className="block size-full" fill="none" height="3.16667" preserveAspectRatio="none" viewBox="0 0 4 3.16667" width="4">
              <path d={svgPaths.p27204800} id="Rectangle 1" stroke="#525252" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[1.667px] left-[13.33px] top-[15.83px] w-[2.5px]">
          <div className="absolute inset-[-45%_-30%]">
            <svg className="block size-full" fill="none" height="3.16667" preserveAspectRatio="none" viewBox="0 0 4 3.16667" width="4">
              <path d={svgPaths.p27204800} id="Rectangle 1" stroke="#525252" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[11.67px] size-[3.333px] top-[2.5px]">
          <div className="absolute inset-[-22.5%]">
            <svg className="block size-full" fill="none" height="4.83333" preserveAspectRatio="none" viewBox="0 0 4.83333 4.83333" width="4.83333">
              <path d={svgPaths.p129b6d00} id="Rectangle 3" stroke="#525252" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[10px] top-[2.5px] w-[6.667px]">
          <div className="absolute inset-[-0.75px_-11.25%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 8.16667 1.5" width="8.16667">
              <path d="M0.75 0.75H7.41667" id="Vector 1" stroke="#525252" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[11.67px] top-[9.17px] w-[3.333px]">
          <div className="absolute inset-[-0.75px_-22.5%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 4.83333 1.5" width="4.83333">
              <path d="M0.75 0.75H4.08333" id="Vector 2" stroke="#525252" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[11.67px] top-[12.5px] w-[3.333px]">
          <div className="absolute inset-[-0.75px_-22.5%]">
            <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 4.83333 1.5" width="4.83333">
              <path d="M0.75 0.75H4.08333" id="Vector 3" stroke="#525252" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Gensets</p>
    </div>
  );
}

function SidebarNavigationItem3() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".local -icon -bess">
        <div className="absolute inset-[12.5%_20.85%_12.5%_20.82%]" data-name="vector">
          <div className="absolute inset-[-5%_-6.43%]">
            <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 13.1667 16.5" width="13.1667">
              <path d={svgPaths.p11327800} id="vector" stroke="#525252" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.35%_43.76%_37.48%_43.74%]" data-name="Vector">
          <div className="absolute inset-[-12.86%_-30%]">
            <svg className="block size-full" fill="none" height="7.33345" preserveAspectRatio="none" viewBox="0 0 4.00001 7.33345" width="4.00001">
              <path d={svgPaths.p120f2de0} id="Vector" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">BESS</p>
    </div>
  );
}

function SidebarNavigationItem4() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name=".local -icon -pp">
        <div className="absolute inset-[12.5%_20.83%]" data-name="vector">
          <div className="absolute inset-[-5%_-6.43%]">
            <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 13.1667 16.5" width="13.1667">
              <path d={svgPaths.p55f4400} id="vector" stroke="#525252" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[-0.084px] whitespace-nowrap">Paralleling panels</p>
    </div>
  );
}

function SidebarNavigationItem5() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="sidebar navigation item">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[6px] relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="sidebar navigation">
      <SidebarNavigationItem2 />
      <SidebarNavigationItem3 />
      <SidebarNavigationItem4 />
      <SidebarNavigationItem5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section">
      <SidebarNavigationCaption />
      <SidebarNavigation />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0" data-name="container">
      <Section />
      <Section1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[2px] relative shrink-0" data-name="container">
      <div className="relative rounded-[6px] shrink-0" data-name="page title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[12.92%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333" width="14.8333">
                        <path clipRule="evenodd" d={svgPaths.p1e21be80} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] tracking-[-0.34px] whitespace-nowrap">Chargers</p>
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0" data-name="info icon">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                    <div className="absolute inset-[8.75%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
                        <g id="vector">
                          <path clipRule="evenodd" d={svgPaths.p3ad3dc00} fill="#757575" fillRule="evenodd" />
                          <path d={svgPaths.p2b7fea00} fill="#757575" />
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
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[24px] relative shrink-0 w-full" data-name="container">
      <Container8 />
      <div className="bg-[#0a0a0a] cursor-pointer drop-shadow-[0px_1px_1px_rgba(0,0,0,0.08)] opacity-0 relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus, add small">
                    <div className="absolute inset-[25.42%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="9.83333" preserveAspectRatio="none" viewBox="0 0 9.83333 9.83333" width="9.83333">
                        <path clipRule="evenodd" d={svgPaths.p21fe5900} fill="white" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Add site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">30 chargers</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center pr-[4px] relative shrink-0" data-name="container">
      <div className="cursor-pointer relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search">
                    <div className="absolute inset-[12.92%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333" width="14.8333">
                        <path clipRule="evenodd" d={svgPaths.p32eb1a80} fill="#0A0A0A" fillRule="evenodd" id="vector" />
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

function Container13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[69px]" data-name="container">
      <div className="absolute cursor-pointer left-0 rounded-[6px] top-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="settings slider">
                    <div className="absolute inset-[12.92%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.8333" preserveAspectRatio="none" viewBox="0 0 14.8333 14.8333" width="14.8333">
                        <path clipRule="evenodd" d={svgPaths.p2bb18600} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <BaseFilterButton badge={false} className="relative rounded-[6px] shrink-0" />
      <div className="cursor-pointer relative rounded-[6px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="export">
                    <div className="absolute inset-[8.75%_17.08%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 13.1667 16.5" width="13.1667">
                        <path clipRule="evenodd" d={svgPaths.p36b2800} fill="#0A0A0A" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Export</p>
          </div>
        </div>
      </div>
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[12px]" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" headerText="Name / Unit" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A1" />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A2" />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A3" />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A4" />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A5" />
      <TableCell className="h-[48px] relative shrink-0 w-[16px]" content="Checkbox" iconLeft={false} iconRight={false} text="West Beaver Ridge A5" />
    </div>
  );
}

function Col2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-[20px]" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-[20px]" content="Space [Empty Cell]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charger ID</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charger A, CH-700</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charger B, CH-699</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charger C, CH-698</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">CH-697</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">CH-696</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">CH-695</p>
    </div>
  );
}

function Col3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[135px]" data-name="col">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container14 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container17 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container18 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container19 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container20 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container21 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container22 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Col4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Connector in use</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[0.42%_17.08%_4.58%_17.08%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 13.1667 19" width="13.1667">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p1aae2900} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1e395c00} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p9244000} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1bc04500} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1422e880} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p35f65280} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.pd3a1600} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p20648df0} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p8c27a80} fill="#757575" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">01, CCS1</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[0.42%_17.08%_4.58%_17.08%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 13.1667 19" width="13.1667">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p1aae2900} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1e395c00} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p9244000} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1bc04500} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1422e880} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p35f65280} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.pd3a1600} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p20648df0} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p8c27a80} fill="#757575" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">01, CCS1</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
              <div className="absolute inset-[4.58%_15%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="18.1667" preserveAspectRatio="none" viewBox="0 0 14 18.1667" width="14">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p2019fb80} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p28f0f300} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p32051700} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p17b9f700} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p3ca96b40} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p25676500} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1a848000} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p2353cd80} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p2f4afa00} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p2c4a5b80} fill="#757575" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p32c7ef00} fill="#757575" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">02, CCS2</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">—</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">—</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">—</p>
    </div>
  );
}

function Col5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-[113px]" data-name="col">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container23 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container26 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container27 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container28 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container29 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container30 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container31 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Col6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">State</p>
      <div className="relative shrink-0 size-[16px]" data-name="icon [right]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.2" preserveAspectRatio="none" viewBox="0 0 13.2 13.2" width="13.2">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p2f6b7000} fill="#757575" fillRule="evenodd" />
                    <path d={svgPaths.p3c67a000} fill="#757575" />
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

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container33 />
    </div>
  );
}

function Container36() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charging ⋅ 46%</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container36 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge1 />
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container35 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container38() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">Charging ⋅ 37%</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="badge">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container38 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge charger state">
        <div className="content-stretch flex items-start relative size-full">
          <Badge2 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container37 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <BadgeChargerState className="relative shrink-0" state="Preparing" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container39 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <BadgeChargerStateV3Depricated className="relative shrink-0" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container40 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <BadgeChargerState className="relative shrink-0" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container41 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <BadgeChargerState className="relative shrink-0" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container42 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Col7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container32 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function ColChargers() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col chargers">
      <Col7 />
    </div>
  );
}

function Col8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Incidents now</p>
      <div className="relative shrink-0 size-[16px]" data-name="icon [right]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.2" preserveAspectRatio="none" viewBox="0 0 13.2 13.2" width="13.2">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p2f6b7000} fill="#757575" fillRule="evenodd" />
                    <path d={svgPaths.p3c67a000} fill="#757575" />
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

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <LocalAlertText className="relative shrink-0" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container46 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <LocalAlertText className="relative shrink-0" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container47 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
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
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container48 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
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
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container49 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
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
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container50 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name=".local -alert-text">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">No data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="table cell">
      <Container51 />
      <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
    </div>
  );
}

function LocalColAlerts() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name=".local -col - alerts">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container43 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function Col9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[40px]" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">Connection</p>
      <div className="relative shrink-0 size-[16px]" data-name="icon [right]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="change icon🔄">
              <div className="absolute inset-[8.75%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.2" preserveAspectRatio="none" viewBox="0 0 13.2 13.2" width="13.2">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p2f6b7000} fill="#757575" fillRule="evenodd" />
                    <path d={svgPaths.p3c67a000} fill="#757575" />
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container54 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.2499" preserveAspectRatio="none" viewBox="0 0 16.5001 13.2499" width="16.5001">
                            <path clipRule="evenodd" d={svgPaths.p135b7100} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.2499" preserveAspectRatio="none" viewBox="0 0 16.5001 13.2499" width="16.5001">
                            <path clipRule="evenodd" d={svgPaths.p135b7100} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.2499" preserveAspectRatio="none" viewBox="0 0 16.5001 13.2499" width="16.5001">
                            <path clipRule="evenodd" d={svgPaths.p135b7100} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[8.75%_8.75%_12.92%_8.75%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15.6669" preserveAspectRatio="none" viewBox="0 0 16.5001 15.6669" width="16.5001">
                            <g id="vector">
                              <path d={svgPaths.p22a01fc0} fill="#F55451" />
                              <path d={svgPaths.p29f95000} fill="#F55451" />
                              <path d={svgPaths.p10657f00} fill="#F55451" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#f55451] text-[14px] tracking-[-0.084px] whitespace-nowrap">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.2499" preserveAspectRatio="none" viewBox="0 0 16.5001 13.2499" width="16.5001">
                            <path clipRule="evenodd" d={svgPaths.p135b7100} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-center pb-[11px] pt-[12px] relative shrink-0" data-name="container">
      <div className="relative shrink-0" data-name="badge connection">
        <div className="content-stretch flex items-start relative size-full">
          <div className="relative rounded-[6px] shrink-0" data-name="badge">
            <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="icon">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
                        <div className="absolute inset-[17.08%_8.75%_16.67%_8.75%]" data-name="Vector">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.2499" preserveAspectRatio="none" viewBox="0 0 16.5001 13.2499" width="16.5001">
                            <path clipRule="evenodd" d={svgPaths.p135b7100} fill="#1DCC6E" fillRule="evenodd" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1dcc6e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Col10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container52 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container55 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container56 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container57 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container58 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container59 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container60 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Col11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="col">
      <TableHeader1 className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Col12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <TableHeader className="h-[48px] relative rounded-[6px] shrink-0 w-full" headerText="Partner" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
      <TableCell className="h-[48px] relative shrink-0 w-full" iconLeft={false} iconRight={false} text="Acme Corp" />
    </div>
  );
}

function Col13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[-0.084px] whitespace-nowrap">{`Distributed system `}</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="container">
      <Container63 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-100</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-100</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-99</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-99</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-100</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[13px] pt-[14px] relative shrink-0" data-name="container">
      <div className="relative shrink-0 size-[20px]" data-name="icon [left]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="change icon🔄">
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
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.125px] left-1/2 top-[calc(50%+0.17px)] w-[3.608px]">
                <div className="absolute inset-[0_-8.67%_-17.33%_-8.65%]">
                  <svg className="block size-full" fill="none" height="4.40061" preserveAspectRatio="none" viewBox="0 0 5.08013 4.40061" width="5.08013">
                    <path d={svgPaths.p9365fc0} id="Polygon 1" stroke="#757575" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.084px] whitespace-nowrap">DS-99</p>
    </div>
  );
}

function Col14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[126px]" data-name="col">
      <div className="h-[48px] relative rounded-[6px] shrink-0 w-[132px]" data-name="table header">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container61 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container64 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container65 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container66 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container67 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container68 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="table cell">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <Container69 />
            <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Col15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[40px]" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell2 className="h-[48px] relative shrink-0 w-full" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function Col16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Address (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="More Button" iconLeft={false} iconRight={false} text="PD Utrecht, LCSS0001" />
      <TableCell1 className="h-[48px] relative shrink-0 w-full" />
      <TableCell1 className="h-[48px] relative shrink-0 w-full" />
      <TableCell1 className="h-[48px] relative shrink-0 w-full" />
      <TableCell1 className="h-[48px] relative shrink-0 w-full" />
      <TableCell1 className="h-[48px] relative shrink-0 w-full" />
    </div>
  );
}

function Col17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[12px]" data-name="col">
      <TableHeader className="h-[48px] relative shrink-0 w-full" content="Spacing (Empty Cell)" headerText="Charge ID (?)" iconInfo={false} iconLeft={false} sort={false} />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
      <TableCell className="h-[48px] relative shrink-0 w-full" content="Space [Empty Cell]" />
    </div>
  );
}

function ContainerUnitBackoffice() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="container -unit -backoffice">
      <Col />
      <Col1 />
      <Col2 />
      <Col3 />
      <Col4 />
      <Col5 />
      <Col6 />
      <ColChargers />
      <Col8 />
      <LocalColAlerts />
      <Col9 />
      <Col10 />
      <Col11 />
      <Col12 />
      <Col13 />
      <Col14 />
      <Col15 />
      <Col16 />
      <Col17 />
    </div>
  );
}

function ContainerTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container -table">
      <ContainerUnitBackoffice />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="container">
      <div className="content-stretch flex flex-col items-start pt-[30px] relative size-full">
        <Container7 />
        <div className="relative shrink-0 w-full" data-name="table controls">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[24px] items-center pb-[8px] relative size-full">
              <Container9 />
              <Container10 />
            </div>
          </div>
        </div>
        <ContainerTable />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[458px] items-start left-0 px-[24px] right-0 top-[61px]" data-name="container">
      <Container5 />
      <Container6 />
    </div>
  );
}

export default function Chargers() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="Chargers">
      <Header />
      <Container4 />
    </div>
  );
}