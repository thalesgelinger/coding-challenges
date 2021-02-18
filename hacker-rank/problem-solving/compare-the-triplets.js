function compareTriplets(a, b) {
  let aP = a.filter((v, i) => v > b[i]).length;
  let bP = b.filter((v, i) => v > a[i]).length;
  return [aP, bP];
}
