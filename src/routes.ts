import { Request, Response, Router } from 'express';
import { PlantController } from './controller/PlantController';

const router = Router();

const plantController = new PlantController();

router.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'ok true' });
});

router.post('/plant', plantController.create);
router.get('/plants', plantController.show);

export { router };
