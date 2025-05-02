export function moodToScore(mood) {
    const moodMap = {
        'sad' : 1,
        'meh' : 2,
        'neutral' : 3,
        'happy' : 4,
        'excited' : 5,
    };
    return moodMap[mood.toLowerCase()] || 0;

}
export function calculateAverage(numbers) {
   const sum = number.reduce((a, b) => a + b, 0)
   return numbers.length ? (sum / numbers.length).toFixed(2) : null;
}