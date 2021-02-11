export const isDateFuture = (date) => {
  return date.getTime() >= new Date().getTime();
};
