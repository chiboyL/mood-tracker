// Modal open/close logic and step navigation for mood modal
function updateProgressBar(step) {
  for (let i = 1; i <= 4; i++) {
    const bar = document.getElementById(`bar-${i}`);
    if (bar) {
      bar.className = `h-1 w-1/4 rounded transition-all duration-300 ${i === step ? 'bg-blue-500' : 'bg-blue-200'}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openMoodModal');
  const closeBtn = document.getElementById('closeMoodModal');
  const moodModal = document.getElementById('moodModal');
  const moodForm = document.getElementById('moodForm');
  const submissionMessage = document.getElementById('submissionMessage');

  // Step containers
  const steps = [
    document.getElementById('stepMood'),
    document.getElementById('stepSleep'),
    document.getElementById('stepReflection'),
    document.getElementById('stepTags')
  ];

  function showStep(idx) {
    steps.forEach((step, i) => {
      if (step) {
        if (i === idx) {
          step.classList.remove('hidden', 'opacity-0');
          step.classList.add('opacity-100');
        } else {
          step.classList.add('hidden', 'opacity-0');
          step.classList.remove('opacity-100');
        }
      }
    });
    updateProgressBar(idx + 1);
  }

  // Open modal and reset state
  openBtn.onclick = function () {
    moodModal.classList.remove('hidden');
    moodForm.reset();
    showStep(0);
    submissionMessage.classList.add('hidden', 'opacity-0');
    submissionMessage.classList.remove('opacity-100');
    updateProgressBar(1);
  };

  // Close modal
  closeBtn.onclick = function () {
    moodModal.classList.add('hidden');
  };

  // Optional: Close modal when clicking outside the form
  moodModal.onclick = function(e) {
    if (e.target === moodModal) moodModal.classList.add('hidden');
  };

  // Step navigation with validation
  document.getElementById('continueToSleep').onclick = function () {
    const moodChecked = document.querySelector('input[name="mood"]:checked');
    if (!moodChecked) {
      alert('Please select your mood.');
      return;
    }
    showStep(1);
  };
  document.getElementById('continueToReflection').onclick = function () {
    const sleepRange = document.getElementById('sleepRange');
    if (!sleepRange.value || isNaN(sleepRange.value)) {
      alert('Please select how many hours you slept.');
      return;
    }
    showStep(2);
  };
  document.getElementById('continueToTags').onclick = function () {
    const reflection = document.getElementById('reflectionInput');
    if (!reflection.value.trim()) {
      alert('Please enter your reflection for today.');
      return;
    }
    showStep(3);
  };

  // Form submission
  document.getElementById('finishBtn').onclick = function(e) {
    e.preventDefault();
    // All required fields already checked in previous steps
    steps.forEach(step => step.classList.add('hidden', 'opacity-0'));
    submissionMessage.classList.remove('hidden');
    setTimeout(() => {
      submissionMessage.classList.add('opacity-100');
      submissionMessage.classList.remove('opacity-0');
    }, 10);
    setTimeout(() => {
      submissionMessage.classList.remove('opacity-100');
      submissionMessage.classList.add('opacity-0');
      setTimeout(() => {
        submissionMessage.classList.add('hidden');
        moodModal.classList.add('hidden');
      }, 500);
    }, 3000);
  };
});