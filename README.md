# 🌤️ Daily Mood Tracker

A simple full-stack web application that allows users to log their daily moods with optional notes, view past entries, and delete them.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)
- **API:** RESTful APIs for CRUD operations

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed on your system
- MongoDB database (local or cloud)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/kirannagarakanti369-glitch/Daily-Mood-Tracker.git
   cd Daily-Mood-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Run the backend server**
   ```bash
   node backend/server.js
   ```

5. **Open the frontend**
   - Open `frontend/index.html` in your web browser

## 🚀 Usage Examples

### ➕ Add Mood Entry
- Select a mood from the dropdown (e.g., Happy, Sad, Excited)
- Optionally add a short note
- Click **Submit** → The mood is stored in MongoDB

### 📖 View Past Entries
- All previous entries appear in the list section
- Each entry shows mood, note, and date

### ❌ Delete an Entry
- Click **Delete** button next to an entry → It will be removed from MongoDB

## 🔄 Application Flow

1. **Frontend Form** → Collects mood & note
2. **Fetch API (POST)** → Sends data to Node.js backend
3. **Express Server** → Saves mood entry to MongoDB
4. **Fetch API (GET)** → Retrieves all entries and displays them
5. **Fetch API (DELETE)** → Removes selected mood entry

## 📁 Project Structure

```
Daily-Mood-Tracker/
├── backend/
│   ├── server.js
│   ├── models/
│   └── routes/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
└── README.md
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/moods` | Create a new mood entry |
| GET | `/api/moods` | Retrieve all mood entries |
| DELETE | `/api/moods/:id` | Delete a specific mood entry |
