import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string): string {
  return price.replace('$', 'AUD $');
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\s\(\d\)\s)(\d{3}\s\d{3}\s\d{3})/, '$1 $2$3');
}