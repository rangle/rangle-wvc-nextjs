// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
export function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + 'k' // convert to k for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + 'M' // convert to m for number from > 1 million
  } else if (num < 900) {
    return num // if value < 1000, nothing to do
  }
}

export function convertPercentage(num) {
  const percentage = num * 100
  if (num.length === 4) {
    return `${percentage.toFixed(0)}%`
  } else if (num.length === 5) {
    return `${percentage.toFixed(1)}%}`
  }
  return `${(num * 100).toFixed(2)}%`
}
