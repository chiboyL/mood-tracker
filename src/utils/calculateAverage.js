export function calculateAverage(numbers) {
    const sum = number.reduce((a, b) => a + b, 0)
    return numbers.length ? (sum / numbers.length).toFixed(2) : null;
 }
 