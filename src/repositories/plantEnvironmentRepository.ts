import { EntityRepository, Repository } from 'typeorm';
import { plantEnvironment } from '../models/plantEnvironment';

@EntityRepository(plantEnvironment)
class PlantEnvironmentRepository extends Repository<plantEnvironment> {}

export { PlantEnvironmentRepository };
