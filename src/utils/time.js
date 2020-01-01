import moment from 'moment';

export const getTime = (unixTime, format) => {
  return moment.unix(unixTime).format(format);
};
