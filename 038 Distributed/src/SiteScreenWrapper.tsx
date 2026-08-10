import { useEffect, useRef } from "react";
import SiteV2 from "@/imports/Site-2/index";

// Counts how many [data-name="table cell"] siblings precede this cell
// in its column → gives the 0-based row index.
function getRowIndex(cell: Element): number {
  let idx = 0;
  let prev = cell.previousElementSibling;
  while (prev) {
    if (prev.getAttribute("data-name") === "table cell") idx++;
    prev = prev.previousElementSibling;
  }
  return idx;
}

export default function SiteScreenWrapper() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const table = root.querySelector<HTMLElement>('[data-name="container -table"]');
    if (!table) return;

    // Tag the Location column for CSS truncation targeting
    for (const col of Array.from(root.querySelectorAll('[data-name="col"]'))) {
      const headerP = col.querySelector(":scope > [data-name='table header'] p, :scope > * p");
      if (headerP?.textContent?.trim() === "Location") {
        (col as HTMLElement).setAttribute("data-location-col", "true");
        break;
      }
    }

    // mouseover inside the table: update which row is highlighted
    function onOver(e: MouseEvent) {
      const cell = (e.target as HTMLElement).closest('[data-name="table cell"]');
      if (!cell) {
        // Mouse over header or non-cell area — clear highlight
        table!.removeAttribute("data-hover-row");
        return;
      }
      const row = getRowIndex(cell);
      table!.setAttribute("data-hover-row", String(row));
    }

    // mouseleave on table: clear highlight
    function onLeave() {
      table!.removeAttribute("data-hover-row");
    }

    table.addEventListener("mouseover", onOver);
    table.addEventListener("mouseleave", onLeave);
    return () => {
      table.removeEventListener("mouseover", onOver);
      table.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="site-screen absolute inset-0">
      <SiteV2 />
    </div>
  );
}
