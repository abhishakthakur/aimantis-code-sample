from __future__ import annotations


def resolve_property_type(*, booking=None, property_obj=None, property_type=None):
    if property_obj is not None:
        resolved_property_type = getattr(property_obj, "property_type", None)
        if resolved_property_type is not None:
            return resolved_property_type

    if property_type is not None:
        return property_type

    if booking is None:
        return None

    booking_property = getattr(booking, "property", None)
    if booking_property is not None:
        resolved_property_type = getattr(booking_property, "property_type", None)
        if resolved_property_type is not None:
            return resolved_property_type

    return getattr(booking, "property_type", None)


def get_max_guests_limit(property_type):
    if property_type is None:
        return None

    max_guests = getattr(property_type, "max_guests", 0) or 0
    if max_guests <= 0:
        return None

    return max_guests


def validate_guest_limit(*, property_type, total_guests):
    max_guests = get_max_guests_limit(property_type)
    if max_guests is None or total_guests is None:
        return

    if total_guests > max_guests:
        raise ValueError(
            (
                f"This room allows a maximum of {max_guests} guests, but received "
                f"{total_guests}."
            )
        )
