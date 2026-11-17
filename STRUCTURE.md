# Repository structure

The checkout has two sibling repositories under one project root. `backend/` contains Django REST Framework applications grouped by domain. `frontend/src/` contains the React and TypeScript application, organized into pages, components, hooks, API services, form schemas, and shared utilities.

```text
├── backend/
│   ├── availability/
│   │   └── README.md
│   ├── bookings/
│   │   ├── migrations/
│   │   │   └── README.md
│   │   └── guest_limits.py
│   ├── checkin/
│   │   ├── migrations/
│   │   │   └── README.md
│   │   ├── requirement_engine/
│   │   │   └── README.md
│   │   └── README.md
│   ├── common/
│   │   ├── timezone/
│   │   │   ├── exceptions.py
│   │   │   └── validation.py
│   │   └── pagination.py
│   ├── core/
│   │   └── README.md
│   ├── dashboard/
│   │   ├── services/
│   │   │   └── utils.py
│   │   └── README.md
│   ├── guests/
│   │   ├── services/
│   │   │   └── README.md
│   │   └── README.md
│   ├── health/
│   │   └── README.md
│   ├── integrations/
│   │   └── README.md
│   ├── invoicing/
│   │   └── README.md
│   ├── messaging/
│   │   └── README.md
│   ├── properties/
│   │   └── README.md
│   ├── rates/
│   │   └── README.md
│   ├── services/
│   │   └── README.md
│   ├── structures/
│   │   ├── migrations/
│   │   │   └── README.md
│   │   └── README.md
│   ├── templates/
│   │   ├── emails/
│   │   │   └── README.md
│   │   └── README.md
│   ├── users/
│   │   └── README.md
│   └── README.md
├── frontend/
│   ├── public/
│   │   └── README.md
│   ├── src/
│   │   ├── assets/
│   │   │   └── README.md
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── README.md
│   │   │   ├── DatePicker/
│   │   │   │   └── CalendarFooter.tsx
│   │   │   ├── invoicing/
│   │   │   │   └── README.md
│   │   │   ├── Modals/
│   │   │   │   └── README.md
│   │   │   ├── MonthAndDates/
│   │   │   │   └── README.md
│   │   │   ├── ui/
│   │   │   │   └── Button.tsx
│   │   │   └── AppErrorBoundary.tsx
│   │   ├── constants/
│   │   │   └── README.md
│   │   ├── globals/
│   │   │   └── README.md
│   │   ├── hooks/
│   │   │   ├── createBooking/
│   │   │   │   └── README.md
│   │   │   └── useMobile.ts
│   │   ├── icons/
│   │   │   └── README.md
│   │   ├── layouts/
│   │   │   └── README.md
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   │   └── README.md
│   │   │   ├── FrontDesk/
│   │   │   │   └── README.md
│   │   │   ├── Guests/
│   │   │   │   └── README.md
│   │   │   ├── Invoicing/
│   │   │   │   └── README.md
│   │   │   ├── Properties/
│   │   │   │   └── README.md
│   │   │   ├── Rate/
│   │   │   │   └── README.md
│   │   │   ├── Structures/
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   ├── schemas/
│   │   │   └── README.md
│   │   ├── services/
│   │   │   ├── dashboard/
│   │   │   │   └── dashboard.types.ts
│   │   │   └── README.md
│   │   ├── styles/
│   │   │   └── README.md
│   │   ├── utils/
│   │   │   ├── bookingDates.ts
│   │   │   └── timezone.ts
│   │   └── README.md
│   └── README.md
├── README.md
└── STRUCTURE.md
```

## Other files in the original checkout

These paths show how the project starts up and where the booking workflow lives. The tree shows the source and folder notes included in the archive.

| Area | Original files |
| --- | --- |
| Project wiring | `docker-compose.yml` |
| Django entry points | `backend/manage.py`, `backend/core/settings.py`, `backend/core/urls.py`, `backend/core/celery.py` |
| Bookings API | `backend/bookings/urls.py`, `backend/bookings/views.py`, `backend/bookings/serializers.py`, `backend/bookings/models.py` |
| React entry points | `frontend/src/main.tsx`, `frontend/src/App.tsx`, `frontend/src/routes.tsx` |
| Bookings UI | `frontend/src/components/BookingsTable.tsx`, `frontend/src/hooks/useBookingFilters.ts`, `frontend/src/services/bookings.ts` |

The archive excludes vendor-specific modules, environment files, deployment settings, datasets, and Git metadata.
