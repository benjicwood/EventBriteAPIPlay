export default function date (formatdate) {
  var date = new Date(formatdate);
  return date.toString().slice(0, 24);
}
