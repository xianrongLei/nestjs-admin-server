/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateMenuInput {
  exampleField?: Nullable<number>
}

export interface UpdateMenuInput {
  id?: Nullable<number>
}

export interface CreateOrganInput {
  exampleField?: Nullable<number>
}

export interface UpdateOrganInput {
  id?: Nullable<number>
}

export interface CreatePostInput {
  exampleField?: Nullable<number>
}

export interface UpdatePostInput {
  id?: Nullable<number>
}

export interface CreateRoleInput {
  exampleField?: Nullable<number>
}

export interface UpdateRoleInput {
  id?: Nullable<number>
}

export interface CreateUserInput {
  username?: Nullable<string>
  password?: Nullable<string>
}

export interface UpdateUserInput {
  id?: Nullable<number>
  username?: Nullable<string>
  password?: Nullable<string>
}

export interface Menu {
  exampleField?: Nullable<number>
}

export interface IQuery {
  menus(): Nullable<Menu>[] | Promise<Nullable<Menu>[]>
  menu(id: number): Nullable<Menu> | Promise<Nullable<Menu>>
  organs(): Nullable<Organ>[] | Promise<Nullable<Organ>[]>
  organ(id: number): Nullable<Organ> | Promise<Nullable<Organ>>
  posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>
  post(id: number): Nullable<Post> | Promise<Nullable<Post>>
  roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>
  role(id: number): Nullable<Role> | Promise<Nullable<Role>>
  users(): Nullable<User>[] | Promise<Nullable<User>[]>
  user(id: number): Nullable<User> | Promise<Nullable<User>>
}

export interface IMutation {
  createMenu(createMenuInput: CreateMenuInput): Menu | Promise<Menu>
  updateMenu(updateMenuInput: UpdateMenuInput): Menu | Promise<Menu>
  removeMenu(id: number): Nullable<Menu> | Promise<Nullable<Menu>>
  createOrgan(createOrganInput: CreateOrganInput): Organ | Promise<Organ>
  updateOrgan(updateOrganInput: UpdateOrganInput): Organ | Promise<Organ>
  removeOrgan(id: number): Nullable<Organ> | Promise<Nullable<Organ>>
  createPost(createPostInput: CreatePostInput): Post | Promise<Post>
  updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>
  removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>
  createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>
  updateRole(updateRoleInput: UpdateRoleInput): Role | Promise<Role>
  removeRole(id: number): Nullable<Role> | Promise<Nullable<Role>>
  createUser(createUserInput: CreateUserInput): User | Promise<User>
  updateUser(updateUserInput: UpdateUserInput): User | Promise<User>
  removeUser(id: number): Nullable<User> | Promise<Nullable<User>>
}

export interface Organ {
  exampleField?: Nullable<number>
}

export interface Post {
  exampleField?: Nullable<number>
}

export interface Role {
  exampleField?: Nullable<number>
}

export interface User {
  id?: Nullable<number>
  username?: Nullable<string>
  password?: Nullable<string>
}

type Nullable<T> = T | null
