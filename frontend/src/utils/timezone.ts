// Excerpt: derive and parse a property's calendar date.

export const DEFAULT_TIMEZONE = "UTC";

/** Falls back to UTC for missing/blank structure timezones rather than the browser's. */
function resolveTimeZone(timeZone: string | null | undefined): string {
  return timeZone && timeZone.trim() ? timeZone : DEFAULT_TIMEZONE;
}

function toDate(timestamp: string | Date): Date {
  return typeof timestamp === "string" ? new Date(timestamp) : timestamp;
}

export function getBusinessDateInTimeZone(
  timeZone: string | null | undefined,
  referenceInstant: string | Date = new Date(),
): string {
  // en-CA formats as YYYY-MM-DD, giving us a timezone-neutral string directly
  // from Intl without any manual offset arithmetic.
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: resolveTimeZone(timeZone),
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(toDate(referenceInstant));

  const map: Record<string, string> = {};
  for (const part of parts) {
    map[part.type] = part.value;
  }
  return `${map.year}-${map.month}-${map.day}`;
}

export function parseBusinessDate(dateStr: string): {
  year: number;
  month: number;
  day: number;
} {
  const [year, month, day] = dateStr.split("-").map(Number);
  return { year, month, day };
}
