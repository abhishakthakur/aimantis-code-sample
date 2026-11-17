// Excerpt: choose check-in and check-out defaults for a new booking.

import { addDays, startOfDay } from "date-fns";
import { getBusinessDateInTimeZone, parseBusinessDate } from "./timezone";

/** The property's current business date, as a local-midnight `Date` for use with date-fns helpers. */
export function businessDateAsLocalDate(timeZone: string | null | undefined): Date {
  const { year, month, day } = parseBusinessDate(
    getBusinessDateInTimeZone(timeZone),
  );
  return new Date(year, month - 1, day);
}

export function getDefaultBookingDates(
  contextDate?: Date | null,
  timeZone?: string | null,
): {
  checkIn: Date;
  checkOut: Date;
} {
  const checkIn = contextDate
    ? startOfDay(contextDate)
    : businessDateAsLocalDate(timeZone);
  const checkOut = addDays(checkIn, 1);

  return { checkIn, checkOut };
}
