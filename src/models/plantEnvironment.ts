import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('plants_environments')
class plantEnvironment {
  @PrimaryColumn()
  key: string;

  @Column()
  title: string;
}

export { plantEnvironment };
