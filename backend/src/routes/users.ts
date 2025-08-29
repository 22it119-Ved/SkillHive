import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

// Get user by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}` });
});

// Update user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id}` });
});

// Delete user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

export default router; 