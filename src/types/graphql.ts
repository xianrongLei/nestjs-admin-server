
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

export enum OrganOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    updater = "updater",
    sort = "sort",
    state = "state",
    name = "name",
    description = "description",
    uniqueName = "uniqueName"
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

export interface CreateDepartmentInput {
    id?: Nullable<string>;
}

export interface UpdateDepartmentInput {
    id: number;
}

export interface CreateDictionaryInput {
    exampleField?: Nullable<number>;
}

export interface UpdateDictionaryInput {
    id: number;
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
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    uniqueName?: Nullable<string>;
    departmentIds?: Nullable<Nullable<string>[]>;
    postIds?: Nullable<Nullable<string>[]>;
    roleIds?: Nullable<Nullable<string>[]>;
    DictionaryIds?: Nullable<Nullable<string>[]>;
    userIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateOrganInput {
    id?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    uniqueName?: Nullable<string>;
    departmentIds?: Nullable<Nullable<string>[]>;
    postIds?: Nullable<Nullable<string>[]>;
    roleIds?: Nullable<Nullable<string>[]>;
    DictionaryIds?: Nullable<Nullable<string>[]>;
    userIds?: Nullable<Nullable<string>[]>;
}

export interface OrganOrderby {
    field?: Nullable<OrganOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface QueryOrgansInput {
    orderBy?: Nullable<OrganOrderby>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    query?: Nullable<UserQuery>;
    skip?: Nullable<number>;
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

export interface UserQueryUsersInput {
    orderBy?: Nullable<UserOrderBy>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    query?: Nullable<UserQuery>;
    skip?: Nullable<number>;
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
    createDepartment(createDepartmentInput: CreateDepartmentInput): Department | Promise<Department>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Department | Promise<Department>;
    removeDepartment(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    createDictionary(createDictionaryInput: CreateDictionaryInput): Dictionary | Promise<Dictionary>;
    updateDictionary(updateDictionaryInput: UpdateDictionaryInput): Dictionary | Promise<Dictionary>;
    removeDictionary(id: number): Nullable<Dictionary> | Promise<Nullable<Dictionary>>;
    createMenu(createMenuInput: CreateMenuInput): Menu | Promise<Menu>;
    updateMenu(updateMenuInput: UpdateMenuInput): Menu | Promise<Menu>;
    removeMenu(id: string): Nullable<Menu> | Promise<Nullable<Menu>>;
    createOrgan(createOrganInput: CreateOrganInput): Organ | Promise<Organ>;
    updateOrgan(updateOrganInput: UpdateOrganInput): Organ | Promise<Organ>;
    removeOrgan(id: string): Nullable<Organ> | Promise<Nullable<Organ>>;
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

export interface Department {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    departments(): Nullable<Department[]> | Promise<Nullable<Department[]>>;
    departmentsById(ids?: Nullable<Nullable<string>[]>): Nullable<Nullable<Department>[]> | Promise<Nullable<Nullable<Department>[]>>;
    department(id: number): Nullable<Department> | Promise<Nullable<Department>>;
    dictionarys(): Nullable<Dictionary>[] | Promise<Nullable<Dictionary>[]>;
    dictionary(id: number): Nullable<Dictionary> | Promise<Nullable<Dictionary>>;
    menus(orderBy?: Nullable<UserOrderBy>, after?: Nullable<string>, before?: Nullable<string>, first?: Nullable<number>, last?: Nullable<number>, query?: Nullable<UserQuery>, skip?: Nullable<number>): MenuConnection | Promise<MenuConnection>;
    menu(id: string): Nullable<Menu> | Promise<Nullable<Menu>>;
    organs(queryOrgansInput?: Nullable<QueryOrgansInput>): OrganConnection | Promise<OrganConnection>;
    organsById(ids?: Nullable<Nullable<string>[]>): Nullable<Nullable<Organ>[]> | Promise<Nullable<Nullable<Organ>[]>>;
    organ(id: string): Nullable<Organ> | Promise<Nullable<Organ>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>;
    role(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    users(userQueryUsersInput?: Nullable<UserQueryUsersInput>): UserConnection | Promise<UserConnection>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Dictionary {
    exampleField?: Nullable<number>;
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

export interface Organ {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    uniqueName?: Nullable<string>;
    departments?: Nullable<Nullable<Department>[]>;
    posts?: Nullable<Nullable<Post>[]>;
    roles?: Nullable<Nullable<Role>[]>;
    Dictionary?: Nullable<Nullable<Dictionary>[]>;
    users?: Nullable<Nullable<User>[]>;
}

export interface OrganConnection {
    edges?: Nullable<OrganEdge[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface OrganEdge {
    cursor: string;
    node: Organ;
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
    state?: Nullable<number>;
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
