import { format } from "date-fns";

export function parseDate(date: string | null | undefined): string {
    if (!date) {
        return "N/A";
      }
      return format(new Date(date), "dd/MM/yyyy");
}