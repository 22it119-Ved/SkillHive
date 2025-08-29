import { Router } from 'express';

const router = Router();

// Upload file
router.post('/', (req, res) => {
  res.json({ message: 'Upload file' });
});

export default router; 