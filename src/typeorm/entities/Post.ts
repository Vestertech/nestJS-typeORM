import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_posts' })
// marks class as DB entity with name user_posts
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // establishing a Many-to-One relationship with the User
  @ManyToOne(() => User, (user) => user.posts)
  // Specifies that each post belongs to one user.
  user: User;
}
