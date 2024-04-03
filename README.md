# NestJS User Management System

This repository contains a user management system implemented using NestJS framework with TypeORM for MYSQL database interaction.

## Entities

### Post Entity (`typeorm/entities/Post.ts`)

Represents a post made by a user.
It has columns for `id`, `title`, `description`, and a Many-to-One relationship with `User` entity.

### Profile Entity (`typeorm/entities/Profile.ts`)

Represents user profile information.
It has columns for `id`, `firstName`, `lastName`, `age`, and `dob`.

### User Entity (`typeorm/entities/User.ts`)

Represents a user.
It has columns for `id`, `username`, `password`, `createdAt`, and `authStrategy`.
It has a One-to-One relationship with `Profile` entity and a One-to-Many relationship with `Post` entity.

## Data Transfer Objects (DTOs)

### CreateUserDto (`user/dtos/CreateUser.dto.ts`)

DTO used for creating a new user. Contains `username` and `password`.

### CreateUserPostDto (`user/dtos/CreateUserPost.dto.ts`)

DTO used for creating a new post. Contains `title` and `description`.

### CreateUserProfileDto (`user/dtos/CreateUserProfile.dto.ts`)

DTO used for creating a new user profile. Contains `firstName`, `lastName`, `age`, and `dob`.

### UpdateUserDto (`user/dtos/UpdateUser.dto.ts`)

DTO used for updating user information. Contains `username` and `password`.

## Services and Modules

### Users Service (`users/services/users/users.service.ts`)

Contains methods to interact with the database for user-related operations.
Methods include finding users, creating users, updating users, deleting users, creating user profiles, and creating user posts.

### Users Module (`users/users.module.ts`)

NestJS module that imports all necessary components related to user management (controllers, services, entities).
Configures TypeOrmModule to use specified entities.

### App Service (`users/app.service.ts`)

A simple service providing a `getHello()` method returning a greeting string.

## Controllers

### Users Controller (`users/controllers/users/users.controller.ts`)

Handles HTTP requests related to users.
Contains methods for retrieving users, creating users, updating users, deleting users, creating user profiles, and creating user posts.
Uses DTOs to validate incoming data.

### App Controller (`users/app.controller.ts`)

Provides a single endpoint to get a greeting message.
Uses the `AppService` to retrieve the message.

## Main

### Main File (`users/main.ts`)

The entry point of the application.
Creates a NestJS application instance, loads the `AppModule`, and starts the server.

## App Module

### App Module (`users/app.module.ts`)

Main module of the application.
Imports all other modules (`TypeOrmModule`, `UsersModule`).
Configures the database connection and synchronizes entities.
Entities
Post Entity (typeorm/entities/Post.ts):

Represents a post made by a user.
It has columns for id, title, description, and a Many-to-One relationship with User entity.
Profile Entity (typeorm/entities/Profile.ts):

Represents user profile information.
It has columns for id, firstName, lastName, age, and dob.
User Entity (typeorm/entities/User.ts):

Represents a user.
It has columns for id, username, password, createdAt, and authStrategy.
It has a One-to-One relationship with Profile entity and a One-to-Many relationship with Post entity.
Data Transfer Objects (DTOs)
CreateUserDto (user/dtos/CreateUser.dto.ts):

DTO used for creating a new user. Contains username and password.
CreateUserPostDto (user/dtos/CreateUserPost.dto.ts):

DTO used for creating a new post. Contains title and description.
CreateUserProfileDto (user/dtos/CreateUserProfile.dto.ts):

DTO used for creating a new user profile. Contains firstName, lastName, age, and dob.
UpdateUserDto (user/dtos/UpdateUser.dto.ts):

DTO used for updating user information. Contains username and password.
Services and Modules
Users Service (users/services/users/users.service.ts):

Contains methods to interact with the database for user-related operations.
Methods include finding users, creating users, updating users, deleting users, creating user profiles, and creating user posts.
Users Module (users/users.module.ts):

NestJS module that imports all necessary components related to user management (controllers, services, entities).
Configures TypeOrmModule to use specified entities.
App Service (users/app.service.ts):

A simple service providing a getHello() method returning a greeting string.
Controllers
Users Controller (users/controllers/users/users.controller.ts):

Handles HTTP requests related to users.
Contains methods for retrieving users, creating users, updating users, deleting users, creating user profiles, and creating user posts.
Uses DTOs to validate incoming data.
App Controller (users/app.controller.ts):

Provides a single endpoint to get a greeting message.
Uses the AppService to retrieve the message.
Main
Main File (users/main.ts):
The entry point of the application.
Creates a NestJS application instance, loads the AppModule, and starts the server.
App Module
App Module (users/app.module.ts):
Main module of the application.
Imports all other modules (TypeOrmModule, UsersModule).
Configures the database connection and synchronizes entities.
