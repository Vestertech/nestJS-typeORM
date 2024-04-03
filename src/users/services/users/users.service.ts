import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { Post } from 'src/typeorm/entities/Post';
import { Profile } from 'src/typeorm/entities/Profile';
import {
  CreateUserParams,
  CreateUserPostParams,
  CreateUserProfileParams,
  UpdateUserParams,
} from 'src/utils/types';

@Injectable()
export class UsersService {
  constructor(
    // @injectRepository used for injecting TypeORM repositories for User, Profile & Post into the service.
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  findUsers() {
    // Retrieves all users from the database along with their associated profiles and posts.
    // Uses userRepository.find() with relations option to include associated entities (profile and posts).
    return this.userRepository.find({
      relations: ['profile', 'posts'],
    });
  }
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      // Sets createdAt to current date
      createdAt: new Date(),
    });
    // Saves the new user to the database using userRepository.save().
    return this.userRepository.save(newUser);
  }
  // Updates the user with the provided ID with new details.
  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    // Uses userRepository.update() to update the user entity with matching ID.
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
  deleteUser(id: number) {
    // Uses userRepository.delete() to delete the user entity with matching ID.
    return this.userRepository.delete({ id });
  }

  async createUserProfile(
    // Creates a new profile for the user with the provided ID.
    id: number,
    createUserProfileDetails: CreateUserProfileParams,
  ) {
    // Retrieves the user entity by ID using userRepository.findOne().
    const user = await this.userRepository.findOneBy({ id });
    // If the user is not found, throws an HTTP exception.
    if (!user)
      throw new HttpException(
        'User not found, Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    // Creating new profile
    const newProfile = this.profileRepository.create(createUserProfileDetails);
    // Saving profile to DB
    const savedProfile = await this.profileRepository.save(newProfile);
    // Associating profile with user and saves user entity
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  async createUserPost(
    id: number,
    createUserPostDetails: CreateUserPostParams,
  ) {
    // Create post, save it and attach to a user.
    // retrieving user entity by .findOne
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found, Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newPost = this.postRepository.create({
      // associating new post with user
      ...createUserPostDetails,
      user,
    });
    return this.postRepository.save(newPost);
  }
}
