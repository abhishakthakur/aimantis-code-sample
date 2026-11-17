// Utility to merge Tailwind classes without conflicts.
// Use cn() instead of plain string to combine or conditionally apply classes.
// Example: cn('p-2', isActive && 'bg-blue-500', className)
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
