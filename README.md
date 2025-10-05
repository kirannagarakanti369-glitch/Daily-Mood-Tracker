# 🌤️ Daily-Mood-Tracker
A simple full-stack web application that allows users to log their daily moods with optional notes, view past entries, and delete them.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

API: RESTful APIs for CRUD operations

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/mood-tracker.git
cd mood-tracker


Install dependencies

npm install


Set up environment variables
Create a .env file in the root directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run the backend server

node backend/server.js


Open frontend
Open frontend/index.html in your browser.

🚀 Usage Examples
➕ Add Mood Entry

Select a mood from the dropdown (e.g., Happy, Sad, Excited).

Optionally add a short note.

Click Submit → The mood is stored in MongoDB.

📖 View Past Entries

All previous entries appear in the list section.

Each entry shows mood, note, and date.

❌ Delete an Entry

Click Delete button next to an entry → It will be removed from MongoDB.

🔄 Basic Flow

Frontend Form → Collects mood & note

Fetch API (POST) → Sends data to Node.js backend

Express Server → Saves mood entry to MongoDB

Fetch API (GET) → Retrieves all entries and displays them

Fetch API (DELETE) → Removes selected mood entry
