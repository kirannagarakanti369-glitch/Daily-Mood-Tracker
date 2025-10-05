document.addEventListener("DOMContentLoaded", () => {
  const moodForm = document.getElementById("moodForm");
  const moodEntries = document.getElementById("moodEntries");

const emojiMap = {
  happy: '😊',
  sad: '😢',
  excited: '🤩',
  angry: '😠',
  calm: '😌',
  tired: '😴',
  confused: '😕'
};


  // Fetches all moods from the backend and displays them.
  async function fetchMoodEntries() {
    try {
      const response = await fetch("/api/moods");
      if (!response.ok) {
        throw new Error("Failed to fetch moods");
      }
      const data = await response.json();
      renderMoodEntries(data);
    } catch (error) {
      console.error("Error fetching mood entries:", error);
      moodEntries.innerHTML = "<p>Error fetching mood entries</p>";
    }
  }

  // Renders the mood entries in the UI.
  function renderMoodEntries(data) {
    if (!data.length) {
      moodEntries.innerHTML = "<p>No mood entries found</p>";
      return;
    }
    
    moodEntries.innerHTML = data
      .map(
        (mood) =>
          `<div class="mood-entry">
            <p class="mood-date"><strong>${new Date(mood.date).toLocaleString()}</strong></p>
            <p class="mood-emoji">${mood.mood}  (${emojiMap[mood.mood]})</p>
            <p>${mood.note}</p>
            <button class="delete-btn" data-id="${mood._id}">Delete</button>
          </div>`
      )
      .join("");
    
    // Add event listeners to all delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', () => handleDeleteMood(button.dataset.id));
    });
  }

  // Handles form submission to add a new mood.
  moodForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const mood = document.getElementById("mood").value;
    const note = document.getElementById("note").value;

    try {
      const response = await fetch("/api/moods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood, note }),
      });

      if (!response.ok) {
        throw new Error("Failed to add mood entry");
      }
      fetchMoodEntries();
      moodForm.reset();
    } catch (error) {
      console.error("Error adding mood entry:", error);
      alert("Failed to add mood entry. Please try again.");
    }
  });

  // Handles mood deletion
  async function handleDeleteMood(id) {
    if (!confirm("Are you sure you want to delete this mood entry?")) {
      return;
    }
    
    try {
      const response = await fetch(`/api/moods/${id}`, { 
        method: 'DELETE' 
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete mood entry");
      }
      
      fetchMoodEntries(); // Refresh the list
    } catch (error) {
      console.error("Error deleting mood entry:", error);
      alert("Failed to delete mood entry. Please try again.");
    }
  }

  // Initial fetch
  fetchMoodEntries();
});