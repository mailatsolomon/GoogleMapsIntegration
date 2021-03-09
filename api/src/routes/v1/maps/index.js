import { Router } from 'express'
import mapsController from '../../../controllers/mapsController';
import authMiddleware from '../../../middleware/authMiddleware';

const router = Router();

router.get('/nearby', authMiddleware, (req, res) => (new mapsController).nearby(req, res));

export default router;
