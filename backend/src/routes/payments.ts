import { Router } from 'express';

const router = Router();

// Create payment
router.post('/', (req, res) => {
  res.json({ message: 'Create payment' });
});

// Get payment status
router.get('/:id', (req, res) => {
  res.json({ message: `Get payment ${req.params.id}` });
});

export default router; 