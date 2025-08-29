import { Router } from 'express';

const router = Router();

// Get enrollments
router.get('/', (req, res) => {
  res.json({ message: 'Get enrollments' });
});

// Enroll in course
router.post('/', (req, res) => {
  res.json({ message: 'Enroll in course' });
});

export default router; 