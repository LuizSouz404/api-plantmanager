import { Request, Response } from 'express';
import { PlantService } from '../service/PlantService';

class PlantController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      about,
      water_tips,
      photo,
      environments,
      frequency,
    } = request.body;

    const plantService = new PlantService();

    const plant = await plantService.create({
      name,
      about,
      water_tips,
      photo,
      environments,
      frequency,
    });

    return response.status(200).json(plant);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const plantService = new PlantService();

    const plants = await plantService.show();

    return response.status(200).json(plants);
  }
}

export { PlantController };
