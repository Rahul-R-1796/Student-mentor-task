const express = require('express');
const mongoose = require('mongoose');
const mentorRouter = require('./routers/mentorRouter');
const studentRouter = require('./routers/studentRouter');

const app = express();
const PORT = 3000;

// Connect to MongoDB
 mongoose.connect('mongodb+srv://student-mentor:student-mentor@student-mentor-task.lxjajla.mongodb.net/?retryWrites=true&w=majority', {
// mongoose.connect('mongodb://0.0.0.0:27017/mentor-student-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
