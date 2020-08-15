export const getDateFormat = (dateString) =>
  dateString.replace(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/gm, '');
