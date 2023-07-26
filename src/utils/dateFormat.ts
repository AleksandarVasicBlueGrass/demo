import moment from 'moment';

const dateFormat = (date: Date): string => {
  if (moment(date).isSame(moment(), 'D')) {
    return `Today  ${moment(date).format('HH:mm')}`;
  }

  return moment(date).format('MMM D,YYYY   HH:mm');
};

export default dateFormat;
