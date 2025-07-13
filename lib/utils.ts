import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDashedBorderSvg(theme: string | undefined) {
  // Sets the fill color of the SVG pattern based on the current theme
  const fillColor = theme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 0%)" // White for dark, black for light
  const fillOpacity = "1" // Set to 1, as Tailwind's opacity-20 will control the overall transparency

  return `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${encodeURIComponent(fillColor)}' fillOpacity='${fillOpacity}' fillRule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
}
