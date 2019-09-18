export function getRandom(s: any) {
  return Math.ceil(Math.random() * s);
}
export function randomColor() {
  return 'rgba(' + getRandom(255) + ',' + getRandom(255) + ',' + getRandom(255) + ',' + Math.random() + ')';
}
