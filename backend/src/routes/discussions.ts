import { Router } from 'express';

const router = Router();

// Get discussions
router.get('/', (req, res) => {
  res.json({ message: 'Get discussions' });
});

// Create discussion
router.post('/', (req, res) => {
  res.json({ message: 'Create discussion' });
});

export default router; 