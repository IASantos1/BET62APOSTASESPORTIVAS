export const formatDateTime = (date: Date | string | number, locale = "pt-PT", timezone = "Europe/Lisbon"): string =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: timezone,
  }).format(new Date(date));

export const formatDate = (date: Date | string | number, locale = "pt-PT", timezone = "Europe/Lisbon"): string =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeZone: timezone,
  }).format(new Date(date));

export const formatTime = (date: Date | string | number, locale = "pt-PT", timezone = "Europe/Lisbon"): string =>
  new Intl.DateTimeFormat(locale, {
    timeStyle: "short",
    timeZone: timezone,
  }).format(new Date(date));

export const formatRelativeTime = (
  date: Date | string | number,
  locale = "pt-PT",
): string => {
  const diff = new Date(date).getTime() - Date.now();
  const absSec = Math.abs(Math.round(diff / 1000));
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (absSec < 60) return rtf.format(Math.round(diff / 1000), "second");
  if (absSec < 3600) return rtf.format(Math.round(diff / 60000), "minute");
  if (absSec < 86400) return rtf.format(Math.round(diff / 3600000), "hour");
  if (absSec < 2592000) return rtf.format(Math.round(diff / 86400000), "day");
  if (absSec < 31536000) return rtf.format(Math.round(diff / 2592000000), "month");
  return rtf.format(Math.round(diff / 31536000000), "year");
};

export const formatCountdown = (endDate: Date | string | number): { days: number; hours: number; minutes: number; seconds: number; totalMs: number } => {
  const totalMs = Math.max(0, new Date(endDate).getTime() - Date.now());
  const days = Math.floor(totalMs / 86400000);
  const hours = Math.floor((totalMs % 86400000) / 3600000);
  const minutes = Math.floor((totalMs % 3600000) / 60000);
  const seconds = Math.floor((totalMs % 60000) / 1000);
  return { days, hours, minutes, seconds, totalMs };
};

export const addDays = (date: Date, days: number): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

export const addHours = (date: Date, hours: number): Date => {
  const d = new Date(date);
  d.setHours(d.getHours() + hours);
  return d;
};

export const addMinutes = (date: Date, minutes: number): Date => {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + minutes);
  return d;
};

export const isSameDay = (a: Date | string, b: Date | string = new Date()): boolean => {
  const da = new Date(a);
  const db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
};

export const startOfDay = (date: Date | string = new Date()): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export const endOfDay = (date: Date | string = new Date()): Date => {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
};
