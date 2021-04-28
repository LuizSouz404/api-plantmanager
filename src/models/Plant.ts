import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('plants')
class Plant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  about: string;

  @Column()
  water_tips: string;

  @Column()
  photo: string;

  @Column()
  environment: string;

  @Column()
  frequency: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Plant };
