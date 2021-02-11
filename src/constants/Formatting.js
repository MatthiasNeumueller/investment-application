export function formatDate(epoch) {
  const newDate = new Date(epoch * 1000);

  return (`${newDate.getDate()}.${newDate.getMonth() + 1}`);
}
