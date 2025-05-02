import QuoteService from './services/QuoteService.js';
import './style.css';
import MoodEntry from './models/MoodEntry';
import User from './models/User';

const userOne = new User("Chinonso Ekezie", "https://exmaple.com");
console.log(userOne.getUserDetails());

const mood = new MoodEntry('2025-04-20', 'happy', 8, "This is really fun", "Energetic, focused");
console.log(mood.displayEntry());

const todayMood = 'happy'; // Ideally, you'd get this from the latest mood entry
const quote = QuoteService.getQuoteForMood(todayMood);
console.log(`Quote for ${todayMood}:`, quote);