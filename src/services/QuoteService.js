export default class QuoteService {
  static async getQuoteForMood(mood) {
    try {
      const res = await fetch("/quotes.json");
      const quotes = await res.json();

      const moodQuotes = quotes[mood.toLowerCase()];
      if (!moodQuotes || moodQuotes.length === 0) {
        return "Stay positive and take it one day at a time.";
      }

      const randomIndex = Math.floor(Math.random() * moodQuotes.length);
      return moodQuotes[randomIndex];
    } catch (err) {
      console.error("Failed to load quotes:", err);
      return "Stay positive and take it one day at a time.";
    }
  }
}