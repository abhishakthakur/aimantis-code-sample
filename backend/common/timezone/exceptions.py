"""Excerpt containing the exceptions used by validation.py."""


class TimezoneDomainError(Exception):
    """Base class for all errors raised by common.timezone."""


class InvalidTimezoneError(TimezoneDomainError):
    """Raised when a string is not a valid IANA timezone name."""

    def __init__(self, value):
        self.value = value
        super().__init__(f"{value!r} is not a valid IANA timezone name.")
