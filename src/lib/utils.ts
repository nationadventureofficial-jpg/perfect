import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

export function formatPhoneUK(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");
  
  // Format UK phone numbers
  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.replace(/(\d{5})(\d{3})(\d{3})/, "$1 $2 $3");
  }
  if (digits.length === 11 && digits.startsWith("44")) {
    return digits.replace(/(\d{2})(\d{5})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
  }
  return phone;
}
