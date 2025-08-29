const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skillhive';

// User Schema (same as backend)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["student", "faculty"], 
    default: "student" 
  },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

async function setupTestUsers() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing test users
    await User.deleteMany({ email: { $in: ['student@test.com', 'faculty@test.com'] } });
    console.log('Cleared existing test users');

    // Create test student
    const studentPassword = await bcrypt.hash('password123', 10);
    const student = new User({
      name: 'Test Student',
      email: 'student@test.com',
      password: studentPassword,
      role: 'student'
    });
    await student.save();
    console.log('Created test student: student@test.com / password123');

    // Create test faculty
    const facultyPassword = await bcrypt.hash('password123', 10);
    const faculty = new User({
      name: 'Test Faculty',
      email: 'faculty@test.com',
      password: facultyPassword,
      role: 'faculty'
    });
    await faculty.save();
    console.log('Created test faculty: faculty@test.com / password123');

    console.log('\nTest users created successfully!');
    console.log('You can now test the login with:');
    console.log('- Student: student@test.com / password123');
    console.log('- Faculty: faculty@test.com / password123');

  } catch (error) {
    console.error('Error setting up test users:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

setupTestUsers();
