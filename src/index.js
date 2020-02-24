
exports.min = function min (array) {
  return (array === undefined || array.length === 0) ? 0 : array.sort(sortMinToMax)[0];
}

exports.max = function max (array) {
  return (array === undefined || array.length === 0) ? 0 : array.sort(sortMaxToMin)[0];
}

exports.avg = function avg (array) {
  return (array === undefined || array.length === 0) ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}

function sortMinToMax(x,y) {
  if (Number(x) > Number(y)) return 1;
  if (Number(x) < Number(y)) return -1;
  if (Number(x) > Number(y)) return 0;
}

function sortMaxToMin(x,y) {
  if (Number(x) > Number(y)) return -1;
  if (Number(x) < Number(y)) return 1;
  if (Number(x) > Number(y)) return 0;
}
