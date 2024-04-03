import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  // const initializes controller with injected usersService
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  // Extracts data from the request body using @Body() decorator.
  // Calls createUser() method of the UsersService to create a new user in the database.
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Put(':id')
  async updateUserById(
    // Extracts userID & userData from req. using param and Body
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // Calls updateUser() method of the UsersService to update the user in the database.
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async DeleteUserById(@Param('id', ParseIntPipe) id: number) {
    // Calls deleteUser() method of the UsersService to delete the user from the database.
    await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    // Extracts profile data from the request body using @Body() decorator.
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userService.createUserPost(id, createUserPostDto);
  }

  // createUserPost

  // Handles HTTP POST requests to create a new post for a user.
  // Extracts user ID from the request parameters using @Param() decorator.
  // Extracts post data from the request body using @Body() decorator.
  // Calls createUserPost() method of the UsersService to create a new post for the user in the database.
}
