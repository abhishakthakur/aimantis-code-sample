from __future__ import annotations

import zoneinfo

from .exceptions import InvalidTimezoneError

DEFAULT_STRUCTURE_TIMEZONE = "UTC"

_VALID_TIMEZONES = zoneinfo.available_timezones()


def is_valid_iana_timezone(name: object) -> bool:
    """Return True iff `name` is a non-empty string naming a real IANA zone."""
    if not isinstance(name, str) or not name:
        return False
    return name in _VALID_TIMEZONES


def validate_iana_timezone(name: str) -> str:
    """Return the IANA name unchanged or raise InvalidTimezoneError."""
    if not is_valid_iana_timezone(name):
        raise InvalidTimezoneError(name)
    return name
