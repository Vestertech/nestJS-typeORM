import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Profile } from './Profile';
import { Post } from './Post';

// Entity decorator marks this class as a database entity and specifies the table name as 'users'.
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  // specifies that each user has one profile
  profile: Profile;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
  // Post argument specifies the property in the Post entity that refers to the user entity.
}
