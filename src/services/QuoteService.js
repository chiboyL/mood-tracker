import quotes from '../data/quotes.json' assert { type: 'json' };

export default class QuoteService {
  static getQuoteForMood(mood) {
    const moodQuotes = quotes[mood.toLowerCase()];
    if (!moodQuotes || moodQuotes.length === 0) return "Stay positive and take it one day at a time.";
    const randomIndex = Math.floor(Math.random() * moodQuotes.length);
    return moodQuotes[randomIndex];
  }
}