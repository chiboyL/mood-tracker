import { calculateAverage } from "./calculateAverage";
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

