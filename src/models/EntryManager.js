import { moodToScore } from "../utils/moodToScore";
import { calculateAverage } from "../utils/calculateAverage";
export default class EntryManager {
    constructor(){
        this.entry = [];
    }
    addEntry(entry){
        this.entry.push(entry);
    }
    getLastestEntry(){
        return this.entry[this.entry.length - 1];
    }
    getRecentEntries(n = 11){
        return this.entry.slice(-n);
    }
    getAverageMood(n= 5){
        const moods = this.getRecentEntries(n).map(e =>moodToScore(e.mood))
        return calculateAverage(moods);
    }
    getAverageSleep(n =5){
        const sleeps = this.getRecentEntries(n).map(s => s.sleep);
        return calculateAverage(sleeps);
    }
    compareMoodTrend(){
        const recent = this.getRecentEntries(10);
        const last5 = recent.slice(-5).map(e => moodToScore(e.mood));
        const prev5 = recent.slice(5).map(e => moodToScore(e.mood));

        const currentAvg = calculateAverage(last5);
        const previousAvg = calculateAverage(prev5);
        const trend = currentAvg > previousAvg ? 'up' :
            currentAvg < previousAvg ? 'down' : 'same';
        return {currentAvg, previousAvg, trend}
    }

}   