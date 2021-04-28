import { getCustomRepository } from 'typeorm';
import { PlantRepository } from '../repositories/PlantRepository';

type PlantRequest = {
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string;
  frequency: string;
};

class PlantService {
  async create({
    name,
    about,
    water_tips,
    photo,
    environments,
    frequency,
  }: PlantRequest) {
    const plantRepository = getCustomRepository(PlantRepository);

    const frequencyConvert = JSON.stringify(frequency);

    const plant = plantRepository.create({
      about,
      environment: environments,
      frequency: frequencyConvert,
      name,
      photo,
      water_tips,
    });

    await plantRepository.save(plant);

    plant.frequency = JSON.parse(plant.frequency);

    return plant;
  }

  async show() {
    const plantRepository = getCustomRepository(PlantRepository);

    const plants = await plantRepository.find();

    plants.forEach((plant) => {
      plant.frequency = JSON.parse(plant.frequency);
      plant.environment = Object(plant.environment.split(','));
    });

    return { plants };
  }
}

export { PlantService };
