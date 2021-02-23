import moment from 'moment';

export default function getFormattedDate(unixTimestamp: number) {
  return moment.unix(unixTimestamp).format('DD/MM/yyyy');
}
