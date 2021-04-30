import { getCustomRepository } from 'typeorm';
import { PlantEnvironmentRepository } from '../repositories/plantEnvironmentRepository';

class PlantEnvironmentService {
  async create(key: string) {
    const plantEnvironmentRepository = getCustomRepository(
      PlantEnvironmentRepository
    );
  }
}

export { PlantEnvironmentService };
