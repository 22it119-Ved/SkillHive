import { Router } from 'express';

const router = Router();

// Admin dashboard
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard' });
});

// Get all users (admin only)
router.get('/users', (req, res) => {
  res.json({ message: 'Get all users (admin)' });
});

export default router; 