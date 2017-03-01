export default function date (formatdate) {
  var date = new Date(formatdate);
  var sliced = date.toString().slice(0, 24);
  return sliced.slice(0, 15) + ' @ ' + sliced.slice(16, 24);
}
