import { ClassValue, clsx } from "clsx"
    import { twMerge } from "tailwind-merge"

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs))
    }

    export function formatCurrency(value: number) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value)
    }

    export function formatPercentage(value: number) {
      return new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2
      }).format(value)
    }

    export function formatDate(date: Date) {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(date)
    }

    export function truncateString(str: string, length: number) {
      return str.length > length ? `${str.slice(0, length)}...` : str
    }

    export function getRiskColor(risk: string) {
      switch (risk.toLowerCase()) {
        case "high":
          return "bg-red-500"
        case "medium":
          return "bg-yellow-500"
        case "low":
          return "bg-green-500"
        default:
          return "bg-gray-500"
      }
    }
