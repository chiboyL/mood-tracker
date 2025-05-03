// ... existing code ...
// import saveEntries from './utils/storage.js';
// import  loadEntries  from './utils/storage.js';
import './modalUI.js';
import './formData/formData.js';
import QuoteService from './services/QuoteService.js';
import './style.css';
import MoodEntry from './models/MoodEntry';
import User from './models/User';
import EntryManager from './models/EntryManager';

const userOne = new User("Chinonso Ekezie", "https://exmaple.com");
console.log(userOne.getUserDetails());

const mood = new MoodEntry('2025-04-20', 'happy', 8, "This is really fun", "Energetic, focused");
console.log(mood.displayEntry());

const todayMood = 'happy'; // Ideally, you'd get this from the latest mood entry
const quote = QuoteService.getQuoteForMood(todayMood);
console.log(`Quote for ${todayMood}:`, quote);

const entryManager = new EntryManager();
// fetch("./src/data/quotes.json")

//   .then(res => res.json())
//   .then(data => {
//     data.forEach(entry => {
//       entryManager.addEntry(entry); // This will also save to localStorage
//     });
//     console.log("Preloaded entries:", entryManager.getRecentEntries());
//   })
//   .catch(err => console.error("Failed to load JSON data:", err));

async function preloadEntries() {
    try {
      const data = await fetch("/quotes.json").then(res => res.json());
      
      // Save the whole quotes object for later use
      window.moodQuotes = data;
  
      console.log("Quotes loaded successfully:", data);
    } catch (error) {
      console.error("Failed to load JSON data:", error);
    }
}
preloadEntries();