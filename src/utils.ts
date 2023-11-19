import { format } from "date-fns";

export function parseDate(date: Date): string{
    return format(new Date(date), "dd/MM/yyyy");
}