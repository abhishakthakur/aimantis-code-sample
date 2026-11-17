"""Excerpt used to count occupied nights in a reporting window."""

from datetime import date


def calculate_overlapping_nights(
    check_in: date,
    check_out: date,
    window_start: date,
    window_end: date,
) -> int:
    """
    Calculate number of nights a booking overlaps with a given date window.

    This is the core occupancy calculation function used across all
    occupancy metrics.

    Args:
        check_in: Booking check-in date
        check_out: Booking check-out date
        window_start: Start of the analysis window (inclusive)
        window_end: End of the analysis window (exclusive)

    Returns:
        Number of overlapping nights (0 if no overlap)
    """
    # Calculate effective overlap
    effective_start = max(check_in, window_start)
    effective_end = min(check_out, window_end)

    overlap_days = (effective_end - effective_start).days

    return max(0, overlap_days)
