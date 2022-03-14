export function formatIndex(idx) {
  return (idx + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
