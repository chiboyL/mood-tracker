export default class MoodEntry {
    constructor(date, mood, reflection, feelings, sleep){
        this.date = date,
        this.mood = mood,
        this.reflection = reflection,
        this.feelings = feelings,
        this.sleep = sleep
    }
    displayEntry(){
        return `On ${this.date}, Mood: ${this.mood}, Sleep: ${this.sleep} hrs. Reflection: ${this.reflection}, Feelings: ${this.feelings}`;
    }
}