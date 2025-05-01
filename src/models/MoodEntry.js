export default class MoodEntry {
    constructor(date, mood, reflection, feelings){
        this.date = date,
        this.mood = mood,
        this.reflection = reflection,
        this.feelings = feelings
    }
    displayEntry(){
        return `On ${this.date}, Mood: ${this.mood}, Sleep: ${this.sleep} hrs. Reflection: ${this.reflection}, Feelings: ${this.feelings}`;
    }
}