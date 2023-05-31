
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrganOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    creatorName = "creatorName",
    updater = "updater",
    updaterName = "updaterName",
    sort = "sort",
    state = "state",
    name = "name",
    description = "description",
    uniqueName = "uniqueName",
    organId = "organId",
    parentId = "parentId"
}

export enum DictEntryOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    creatorName = "creatorName",
    updater = "updater",
    updaterName = "updaterName",
    sort = "sort",
    state = "state",
    name = "name",
    value = "value",
    dictionaryId = "dictionaryId",
    description = "description"
}

export enum DictionaryOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    creatorName = "creatorName",
    updater = "updater",
    updaterName = "updaterName",
    sort = "sort",
    state = "state",
    dictName = "dictName",
    name = "name",
    description = "description"
}

export enum OrderDirection {
    asc = "asc",
    desc = "desc"
}

export enum MenuOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    creatorName = "creatorName",
    updater = "updater",
    updaterName = "updaterName",
    sort = "sort",
    state = "state",
    name = "name",
    description = "description",
    route = "route",
    icon = "icon",
    title = "title",
    type = "type",
    componentUrl = "componentUrl",
    outside = "outside",
    parentId = "parentId"
}

export enum UserOrderFelid {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    creator = "creator",
    creatorName = "creatorName",
    updater = "updater",
    updaterName = "updaterName",
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

export interface CreateDepartmentInput {
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    parentId?: Nullable<string>;
    childrenIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateDepartmentInput {
    id: number;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    parentId?: Nullable<string>;
    Organ?: Nullable<string>;
    parent?: Nullable<string>;
    childrenIds?: Nullable<Nullable<string>[]>;
}

export interface DepartmentOrderBy {
    field?: Nullable<OrganOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface DepartmentQuery {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    parentId?: Nullable<string>;
}

export interface QueryDepartmentInput {
    orderBy?: Nullable<DepartmentOrderBy>;
    query?: Nullable<DepartmentQuery>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    skip?: Nullable<number>;
}

export interface CreateDictEntryInput {
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    description?: Nullable<string>;
    dictionaryId?: Nullable<string>;
}

export interface UpdateDictEntryInput {
    id: number;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    description?: Nullable<string>;
    dictionaryId?: Nullable<string>;
}

export interface DictEntryOrderBy {
    field?: Nullable<DictEntryOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface DictEntryQuery {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    description?: Nullable<string>;
    dictionaryId?: Nullable<string>;
}

export interface QueryDictEntryInput {
    orderBy?: Nullable<DictEntryOrderBy>;
    query?: Nullable<DictEntryQuery>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    skip?: Nullable<number>;
}

export interface CreateDictionaryInput {
    sort?: Nullable<number>;
    state?: Nullable<number>;
    dictName?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    dictEntries?: Nullable<Nullable<string>[]>;
    Organ?: Nullable<Nullable<string>[]>;
}

export interface UpdateDictionaryInput {
    id?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    dictName?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    dictEntries?: Nullable<Nullable<string>[]>;
    Organ?: Nullable<Nullable<string>[]>;
}

export interface DictionaryOrderBy {
    field?: Nullable<DictionaryOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface DictionaryQuery {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    dictName?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export interface QueryDictionaryInput {
    orderBy?: Nullable<DictionaryOrderBy>;
    query?: Nullable<DictionaryQuery>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    skip?: Nullable<number>;
}

export interface CreateMenuInput {
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    route?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    type?: Nullable<number>;
    componentUrl?: Nullable<string>;
    outside?: Nullable<boolean>;
    parentId?: Nullable<string>;
    childrenIds?: Nullable<Nullable<string>[]>;
    rolesIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateMenuInput {
    id?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    route?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    type?: Nullable<number>;
    componentUrl?: Nullable<string>;
    outside?: Nullable<boolean>;
    parentId?: Nullable<string>;
    childrenIds?: Nullable<Nullable<string>[]>;
    rolesIds?: Nullable<Nullable<string>[]>;
}

export interface MenuOrderBy {
    field?: Nullable<MenuOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface MenuQuery {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    updater?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    route?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    type?: Nullable<number>;
    componentUrl?: Nullable<string>;
    outside?: Nullable<boolean>;
    parentId?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    nickname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    sex?: Nullable<number>;
    age?: Nullable<number>;
    admin?: Nullable<number>;
    organId?: Nullable<string>;
}

export interface QueryMenuInput {
    orderBy?: Nullable<MenuOrderBy>;
    query?: Nullable<MenuQuery>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    skip?: Nullable<number>;
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

export interface OrganOrderBy {
    field?: Nullable<OrganOrderFelid>;
    direction?: Nullable<OrderDirection>;
}

export interface OrganQuery {
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

export interface QueryOrganInput {
    orderBy?: Nullable<OrganOrderBy>;
    after?: Nullable<string>;
    before?: Nullable<string>;
    first?: Nullable<number>;
    last?: Nullable<number>;
    query?: Nullable<OrganQuery>;
    skip?: Nullable<number>;
}

export interface CreatePostInput {
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    Organ?: Nullable<string>;
    users?: Nullable<Nullable<string>[]>;
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
    field?: Nullable<UserOrderFelid>;
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

export interface QueryUsersInput {
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
    removeDepartment(id: string): Nullable<Department> | Promise<Nullable<Department>>;
    createDictEntry(createDictEntryInput: CreateDictEntryInput): DictEntry | Promise<DictEntry>;
    updateDictEntry(updateDictEntryInput: UpdateDictEntryInput): DictEntry | Promise<DictEntry>;
    removeDictEntry(id: number): Nullable<DictEntry> | Promise<Nullable<DictEntry>>;
    createDictionary(createDictionaryInput: CreateDictionaryInput): Dictionary | Promise<Dictionary>;
    updateDictionary(updateDictionaryInput: UpdateDictionaryInput): Dictionary | Promise<Dictionary>;
    removeDictionary(id: string): Nullable<Dictionary> | Promise<Nullable<Dictionary>>;
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
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    parentId?: Nullable<string>;
    Organ?: Nullable<Organ>;
    parent?: Nullable<Department>;
    children?: Nullable<Nullable<Department>[]>;
}

export interface DepartmentEdge {
    cursor: string;
    node: Department;
}

export interface DepartmentConnection {
    edges?: Nullable<Nullable<DepartmentEdge>[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface IQuery {
    departments(queryDepartmentInput: QueryDepartmentInput): Nullable<UserConnection[]> | Promise<Nullable<UserConnection[]>>;
    departmentsById(ids?: Nullable<Nullable<string>[]>): Nullable<Nullable<Department>[]> | Promise<Nullable<Nullable<Department>[]>>;
    department(id: string): Nullable<Department> | Promise<Nullable<Department>>;
    dictEntries(queryDictEntryInput?: Nullable<QueryDictEntryInput>): Nullable<DictEntry>[] | Promise<Nullable<DictEntry>[]>;
    dictEntry(id: number): Nullable<DictEntry> | Promise<Nullable<DictEntry>>;
    dictionaries(queryDictionaryInput?: Nullable<QueryDictionaryInput>): Nullable<Nullable<Dictionary>[]> | Promise<Nullable<Nullable<Dictionary>[]>>;
    dictionary(id: string): Nullable<Dictionary> | Promise<Nullable<Dictionary>>;
    menus(queryMenuInput?: Nullable<QueryMenuInput>): MenuConnection | Promise<MenuConnection>;
    menu(id: string): Nullable<Menu> | Promise<Nullable<Menu>>;
    organs(queryOrganInput?: Nullable<QueryOrganInput>): OrganConnection | Promise<OrganConnection>;
    organsById(ids?: Nullable<Nullable<string>[]>): Nullable<Nullable<Organ>[]> | Promise<Nullable<Nullable<Organ>[]>>;
    organ(id: string): Nullable<Organ> | Promise<Nullable<Organ>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>;
    role(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    users(QueryUsersInput?: Nullable<QueryUsersInput>): UserConnection | Promise<UserConnection>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface DictEntry {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    dictionaryId?: Nullable<string>;
    description?: Nullable<string>;
    Dictionary?: Nullable<Dictionary>;
}

export interface DictEntryEdge {
    cursor: string;
    node: DictEntry;
}

export interface DictEntryConnection {
    edges?: Nullable<Nullable<DictEntryEdge>[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface Dictionary {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    dictName?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    dictEntries?: Nullable<Nullable<DictEntry>[]>;
    Organ?: Nullable<Nullable<Organ>[]>;
}

export interface DictionaryEdge {
    cursor: string;
    node: Dictionary;
}

export interface DictionaryConnection {
    edges?: Nullable<Nullable<DictionaryEdge>[]>;
    pageInfo: PageInfo;
    totalCount: number;
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
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    route?: Nullable<string>;
    icon?: Nullable<string>;
    title?: Nullable<string>;
    type?: Nullable<number>;
    componentUrl?: Nullable<string>;
    outside?: Nullable<boolean>;
    parentId?: Nullable<string>;
    parent?: Nullable<Menu>;
    children?: Nullable<Nullable<Menu>[]>;
    roles?: Nullable<Nullable<Role>[]>;
}

export interface MenuEdge {
    cursor: string;
    node: Menu;
}

export interface MenuConnection {
    edges?: Nullable<Nullable<MenuEdge>[]>;
    pageInfo: PageInfo;
    totalCount: number;
}

export interface Organ {
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
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
    id?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    creator?: Nullable<string>;
    creatorName?: Nullable<string>;
    updater?: Nullable<string>;
    updaterName?: Nullable<string>;
    sort?: Nullable<number>;
    state?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    organId?: Nullable<string>;
    Organ?: Nullable<Organ>;
    users?: Nullable<Nullable<User>[]>;
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
