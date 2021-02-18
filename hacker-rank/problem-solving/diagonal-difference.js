function diagonalDifference(arr) {
  let [i, j] = [0, arr.length - 1];
  let [main, secondary] = [arr[i][i], arr[i][j]];
  while (i < arr.length - 1) {
    main += arr[++i][i];
    secondary += arr[i][--j];
  }
  return Math.abs(main - secondary);
}
