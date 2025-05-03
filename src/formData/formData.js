// console.log(ChinonsoEkezie);
import EntryManager from "../models/EntryManager.js";
import { format } from "date-fns";
import MoodEntry from "../models/MoodEntry.js";
// import MoodEntry from "../models/MoodEntry.js"; // Uncomment if you want to use the class

const form = document.getElementById('moodForm');
// console.log(form)
const sleepInput = document.getElementById('sleepRange');
// console.log(sleepInput)
const feelingsInput = document.getElementById('tagsInput');
const reflectionInput = document.getElementById('reflectionInput');
const finsihBtn = document.getElementById('finishBtn');
finsihBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the checked mood at submit time
  const moodInput = document.querySelector('input[name="mood"]:checked');
  // console.log(moodInput);
  const mood = moodInput ? moodInput.value : "";
  // console.log(mood);
  const sleep = parseFloat(sleepInput.value);
  // console.log(sleep);
  const feelings = feelingsInput.value.split(',').map(f => f.trim()).filter(Boolean);
  const reflection = reflectionInput.value;
// console.log(reflection);
  // Get the current date using date-fns or any other date library you prefer
  // For example, using date-fns:
  // const date = format(new Date(), 'yyyy-MM-dd');
  const date = format(new Date(), 'yyyy-MM-dd');

  // If you want to use MoodEntry class:
  // const newEntry = new MoodEntry(date, mood, sleep, reflection, feelings);
  // Otherwise, use a plain object:
  // const newEntry = new MoodEntry( date, mood, reflection, sleep, feelings,)
  // newEntry.displayEntry();
  // const newEntryManager = new EntryManager();
  // newEntryManager.addEntry(newEntry);
  // console.log(newEntryManager.getLastestEntry())
  form.reset();
});