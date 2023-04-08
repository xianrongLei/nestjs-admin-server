
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrderDirection {
    asc = "asc",
    desc = "desc"
}

export enum OrderFild {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    updater = "updater",
    username = "username",
    nickname = "nickname",
    email = "email",
    phone = "phone",
    sex = "sex",
    age = "age",
    admin = "admin",
    avatar = "avatar",
    organId = "organId",
    state = "state"
}

export interface CreateCaptchaInput {
    background?: Nullable<string>;
    ignoreChars?: Nullable<string>;
    type?: Nullable<number>;
    size?: Nullable<number>;
    color?: Nullable<boolean>;
}

export interface CreateAuthInput {
    user?: Nullable<CreateUserInput>;
    uniCode?: Nullable<string>;
    answer?: Nullable<string>;
}

export interface CreateMenuInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    name?: Nullable<string>;
    route?: Nullable<string>;
    description?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    type?: Nullable<number>;
    outside?: Nullable<boolean>;
    authNames?: Nullable<Nullable<string>[]>;
    parentId?: Nullable<string>;
}

export interface UpdateMenuInput {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    name?: Nullable<string>;
    route?: Nullable<string>;
    description?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    type?: Nullable<number>;
    outside?: Nullable<boolean>;
    authNames?: Nullable<Nullable<string>[]>;
    parentId?: Nullable<string>;
}

export interface MenuOrderBy {
    field?: Nullable<OrderFild>;
    direction?: Nullable<OrderDirection>;
}

export interface MenuQuery {
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    organId?: Nullable<string>;
    state?: Nullable<number>;
}

export interface CreateOrganInput {
    exampleField?: Nullable<number>;
}

export interface UpdateOrganInput {
    id?: Nullable<number>;
}

export interface CreatePostInput {
    exampleField?: Nullable<number>;
}

export interface UpdatePostInput {
    id?: Nullable<number>;
}

export interface CreateRoleInput {
    exampleField?: Nullable<number>;
}

export interface UpdateRoleInput {
    id?: Nullable<number>;
}

export interface CreateUserInput {
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    avatar?: Nullable<string>;
    organId?: Nullable<string>;
    posts?: Nullable<Nullable<number>[]>;
    roles?: Nullable<Nullable<number>[]>;
    state?: Nullable<number>;
}

export interface UpdateUserInput {
    id?: Nullable<string>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    avatar?: Nullable<string>;
    organId?: Nullable<string>;
    posts?: Nullable<Nullable<number>[]>;
    roles?: Nullable<Nullable<number>[]>;
    state?: Nullable<number>;
}

export interface UserOrderBy {
    field?: Nullable<OrderFild>;
    direction?: Nullable<OrderDirection>;
}

export interface UserQuery {
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    organId?: Nullable<string>;
    state?: Nullable<number>;
}

export interface Auth {
    user?: Nullable<User>;
    access_token?: Nullable<JWT>;
    refresh_token?: Nullable<JWT>;
}

export interface Captcha {
    time?: Nullable<number>;
    uniCode?: Nullable<string>;
    svg?: Nullable<string>;
}

export interface IMutation {
    captcha(createCaptchaInput: CreateCaptchaInput): Captcha | Promise<Captcha>;
    signup(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    signin(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    createMenu(createMenuInput: CreateMenuInput): Menu | Promise<Menu>;
    updateMenu(updateMenuInput: UpdateMenuInput): Menu | Promise<Menu>;
    removeMenu(id: string): Nullable<Menu> | Promise<Nullable<Menu>>;
    createOrgan(createOrganInput: CreateOrganInput): Organ | Promise<Organ>;
    updateOrgan(updateOrganInput: UpdateOrganInput): Organ | Promise<Organ>;
    removeOrgan(id: number): Nullable<Organ> | Promise<Nullable<Organ>>;
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;
    updateRole(updateRoleInput: UpdateRoleInput): Role | Promise<Role>;
    removeRole(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface PageInfo {
    endCursor?: Nullable<string>;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: Nullable<string>;
}

export interface Menu {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    name?: Nullable<string>;
    route?: Nullable<string>;
    description?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    type?: Nullable<number>;
    outside?: Nullable<boolean>;
    authNames?: Nullable<Nullable<string>[]>;
    parentId?: Nullable<string>;
}

export interface MenuConnection {
    edges?: Nullable<MenuEdge[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface MenuEdge {
    cursor: string;
    node: Menu;
}

export interface IQuery {
    menus(orderBy?: Nullable<UserOrderBy>, after?: Nullable<string>, before?: Nullable<string>, first?: Nullable<number>, last?: Nullable<number>, query?: Nullable<UserQuery>, skip?: Nullable<number>): MenuConnection | Promise<MenuConnection>;
    menu(id: string): Nullable<Menu> | Promise<Nullable<Menu>>;
    organs(): Nullable<Organ>[] | Promise<Nullable<Organ>[]>;
    organ(id: number): Nullable<Organ> | Promise<Nullable<Organ>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>;
    role(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    users(orderBy?: Nullable<UserOrderBy>, after?: Nullable<string>, before?: Nullable<string>, first?: Nullable<number>, last?: Nullable<number>, query?: Nullable<UserQuery>, skip?: Nullable<number>): UserConnection | Promise<UserConnection>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Organ {
    exampleField?: Nullable<number>;
}

export interface Post {
    exampleField?: Nullable<number>;
}

export interface Role {
    exampleField?: Nullable<number>;
}

export interface User {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    avatar?: Nullable<string>;
    organId?: Nullable<string>;
    posts?: Nullable<Nullable<number>[]>;
    roles?: Nullable<Nullable<number>[]>;
    state?: Nullable<number>;
}

export interface UserConnection {
    edges?: Nullable<UserEdge[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface UserEdge {
    cursor: string;
    node: User;
}

export type DateTime = any;
export type JWT = any;
type Nullable<T> = T | null;
