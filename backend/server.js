const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const moodRoutes = require('./routes/moods');

const app= express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../frontend'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moodTracker',)
//     {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true,
// }
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
//Routes
app.use('/api/moods', moodRoutes);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});