import { EntityRepository, Repository } from 'typeorm';
import { Plant } from '../models/Plant';

@EntityRepository(Plant)
class PlantRepository extends Repository<Plant> {}

export { PlantRepository };
