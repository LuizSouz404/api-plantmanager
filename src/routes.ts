import { Request, Response, Router } from 'express';
import { PlantController } from './controller/PlantController';

const router = Router();

const plantController = new PlantController();

router.get('/', (request: Request, response: Response) => {
  return response.send(
    '"id": 10, "name": "Hortênsia", "about": "A hortênsia é uma planta rústica e se adapta a diferentes tipos de solos.",  "water_tips": "Mantenha a terra sempre húmida sem encharcar. Regue 1 vez no dia.",'
  );
});

router.post('/plant', plantController.create);
router.get('/plants', plantController.show);

export { router };
