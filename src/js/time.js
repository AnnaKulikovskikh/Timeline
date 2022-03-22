export default function getDate() {
  const date = new Date();
  let month = String(date.getMonth());
  if (month.length === 1) {
    month = `0${month}`;
  }
  const dateF = `${date.getDate()}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return dateF;
}
