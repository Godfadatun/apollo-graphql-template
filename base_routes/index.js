import express from 'express';
const router = express.Router();

router.get('/', (_, res) => res.json({ success: true, message: 'Base gateway v1 up.' }));

export default router;