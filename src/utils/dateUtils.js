import { format, compareAsc, isSameDay, parseISO } from 'date-fns';

export function formatDate(dateStr, pattern = 'yyyy-MM-dd') {
  return format(parseISO(dateStr), pattern);
}

export function sortByDate(entries) {
  return entries.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
}

export function isToday(dateStr) {
  return isSameDay(parseISO(dateStr), new Date());
}

export function todayISO() {
  return format(new Date(), 'yyyy-MM-dd');
}