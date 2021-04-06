import moment from 'moment-timezone';

export function ToLocalDateTime(timezone: string, date: Date) {
  return new Date(
    moment(date).add(3, 'h').tz(timezone).format('YYYY/MM/DD HH:mm:ss'),
  );
}
