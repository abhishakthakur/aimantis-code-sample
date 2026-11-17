# Hospitality property management system

[Browse the repository structure](STRUCTURE.md). The folders in the ZIP follow the same paths used in the Django backend and React/TypeScript frontend. Every folder contains original source or a short README describing its role.

## Code samples

| Original path | What the code shows |
| --- | --- |
| [`backend/common/timezone/validation.py`](backend/common/timezone/validation.py) | Validates IANA timezone names against Python’s timezone database and raises a [specific exception](backend/common/timezone/exceptions.py) for invalid values. |
| [`frontend/src/utils/timezone.ts`](frontend/src/utils/timezone.ts) | Uses `Intl.DateTimeFormat` to derive a property’s calendar date from an instant, then parses the date into calendar fields. |
| [`frontend/src/utils/bookingDates.ts`](frontend/src/utils/bookingDates.ts) | Uses the selected calendar day or the property’s current business date as check-in and defaults check-out to the following day. |
| [`frontend/src/components/AppErrorBoundary.tsx`](frontend/src/components/AppErrorBoundary.tsx) | Catches rendering errors and gives the user a way to reload the application. |

Additional samples cover [guest capacity validation](backend/bookings/guest_limits.py), [dashboard occupancy calculations](backend/dashboard/services/utils.py), [calendar controls](frontend/src/components/DatePicker/CalendarFooter.tsx), and [responsive layout](frontend/src/hooks/useMobile.ts).

The code is drawn from the project. Some files are shortened to the functions or types relevant to the sample. This archive is intended for browsing and code review.

[Commit history](CommitHistory.md)
