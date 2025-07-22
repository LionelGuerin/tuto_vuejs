export function shuffleArray(arr) {
  return arr
    .map((v) => ({ value: v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((v) => v.value);
}
