import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CalendarFooterProps {
  onToday: () => void;
  onClear: () => void;
  /**
   * Controls the "Today" button visibility.
   * Pass `false` for DOB fields where "Today" is not a useful shortcut.
   */
  showToday?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Footer bar rendered at the bottom of every calendar popover.
 *
 * Layout:
 *   [Today]          [Clear]   ← when showToday=true
 *                   [Clear]   ← when showToday=false (DOB mode)
 *
 * "Apply" is intentionally omitted for single-date pickers — selecting a day
 * already closes the popover.  The footer exists for keyboard users who want
 * quick access to Today / Clear without navigating the grid.
 */
export function CalendarFooter({
  onToday,
  onClear,
  showToday = true,
  className,
}: CalendarFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center border-t border-border/60 px-3 py-2",
        showToday ? "justify-between" : "justify-end",
        className,
      )}
    >
      {showToday && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-7 px-3 text-xs font-medium"
          onClick={onToday}
        >
          Today
        </Button>
      )}

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-7 px-3 text-xs font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/5"
        onClick={onClear}
      >
        Clear
      </Button>
    </div>
  );
}
