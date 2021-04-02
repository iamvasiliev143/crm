import moment from 'moment-timezone';

export function ToLocalDateTime(timezone: string, date: Date) {
  return moment(date).tz(timezone);
}
