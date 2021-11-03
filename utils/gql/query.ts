import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<DateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  not?: Maybe<IdFilter>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  ref?: Maybe<Scalars['String']>;
  upload?: Maybe<Scalars['Upload']>;
};

export type ImageFieldOutput = {
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  src: Scalars['String'];
  width: Scalars['Int'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  __typename?: 'LocalImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  src: Scalars['String'];
  width: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  published_at?: Maybe<Scalars['DateTime']>;
  readingtime?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type PostTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: Maybe<UserRelateToOneForCreateInput>;
  content?: Maybe<Scalars['JSON']>;
  image?: Maybe<ImageFieldInput>;
  published_at?: Maybe<Scalars['DateTime']>;
  readingtime?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelateToManyForCreateInput>;
  title?: Maybe<Scalars['String']>;
};

export type PostManyRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: Maybe<OrderDirection>;
  published_at?: Maybe<OrderDirection>;
  readingtime?: Maybe<OrderDirection>;
  slug?: Maybe<OrderDirection>;
  summary?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: Maybe<UserRelateToOneForUpdateInput>;
  content?: Maybe<Scalars['JSON']>;
  image?: Maybe<ImageFieldInput>;
  published_at?: Maybe<Scalars['DateTime']>;
  readingtime?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelateToManyForUpdateInput>;
  title?: Maybe<Scalars['String']>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
  id?: Maybe<IdFilter>;
  published_at?: Maybe<DateTimeFilter>;
  readingtime?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  summary?: Maybe<StringFilter>;
  tags?: Maybe<TagManyRelationFilter>;
  title?: Maybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type TagPostsCountArgs = {
  where?: PostWhereInput;
};

export type TagCreateInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyForCreateInput>;
  slug?: Maybe<Scalars['String']>;
};

export type TagManyRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  description?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  slug?: Maybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyForUpdateInput>;
  slug?: Maybe<Scalars['String']>;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostManyRelationFilter>;
  slug?: Maybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type UserPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyForCreateInput>;
  slug?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  bio?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  slug?: Maybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  posts?: Maybe<PostRelateToManyForUpdateInput>;
  slug?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  bio?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostManyRelationFilter>;
  slug?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title?: string | null | undefined, slug?: string | null | undefined, summary?: string | null | undefined, published_at?: any | null | undefined, readingtime?: string | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null | undefined, slug?: string | null | undefined }> | null | undefined }> | null | undefined };

export type AuthorQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type AuthorQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null | undefined, bio?: string | null | undefined, posts?: Array<{ __typename?: 'Post', id: string, title?: string | null | undefined, slug?: string | null | undefined, summary?: string | null | undefined, published_at?: any | null | undefined, readingtime?: string | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null | undefined, slug?: string | null | undefined }> | null | undefined }> | null | undefined } | null | undefined };

export type AuthorPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorPathsQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', slug?: string | null | undefined }> | null | undefined };

export type PostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', slug?: string | null | undefined, id: string, title?: string | null | undefined, summary?: string | null | undefined, published_at?: any | null | undefined, readingtime?: string | null | undefined, image?: { __typename?: 'LocalImageFieldOutput', src: string, width: number, height: number } | null | undefined, author?: { __typename?: 'User', name?: string | null | undefined, slug?: string | null | undefined } | null | undefined, tags?: Array<{ __typename?: 'Tag', name?: string | null | undefined, id: string }> | null | undefined, content?: { __typename?: 'Post_content_Document', document: any } | null | undefined } | null | undefined };

export type PostPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostPathsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', slug?: string | null | undefined }> | null | undefined };

export type TagQueryVariables = Exact<{
  where: TagWhereUniqueInput;
}>;


export type TagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', id: string, name?: string | null | undefined, description?: string | null | undefined, posts?: Array<{ __typename?: 'Post', id: string, title?: string | null | undefined, slug?: string | null | undefined, summary?: string | null | undefined, published_at?: any | null | undefined, readingtime?: string | null | undefined, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null | undefined, slug?: string | null | undefined }> | null | undefined }> | null | undefined } | null | undefined };

export type TagPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagPathsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'Tag', slug?: string | null | undefined }> | null | undefined };


export const AllPostsDocument = gql`
    query AllPosts {
  posts(orderBy: [{published_at: desc}]) {
    id
    title
    slug
    summary
    published_at
    readingtime
    tags {
      id
      name
      slug
    }
  }
}
    `;
export const AuthorDocument = gql`
    query Author($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    name
    bio
    posts(orderBy: [{published_at: desc}]) {
      id
      title
      slug
      summary
      published_at
      readingtime
      tags {
        id
        name
        slug
      }
    }
  }
}
    `;
export const AuthorPathsDocument = gql`
    query AuthorPaths {
  users {
    slug
  }
}
    `;
export const PostDocument = gql`
    query Post($where: PostWhereUniqueInput!) {
  post(where: $where) {
    slug
    id
    title
    summary
    image {
      src
      width
      height
    }
    published_at
    author {
      name
      slug
    }
    tags {
      name
      id
    }
    readingtime
    content {
      document
    }
  }
}
    `;
export const PostPathsDocument = gql`
    query PostPaths {
  posts {
    slug
  }
}
    `;
export const TagDocument = gql`
    query Tag($where: TagWhereUniqueInput!) {
  tag(where: $where) {
    id
    name
    description
    posts(orderBy: [{published_at: desc}]) {
      id
      title
      slug
      summary
      published_at
      readingtime
      tags {
        id
        name
        slug
      }
    }
  }
}
    `;
export const TagPathsDocument = gql`
    query TagPaths {
  tags {
    slug
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllPosts(variables?: AllPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPostsQuery>(AllPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPosts');
    },
    Author(variables: AuthorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthorQuery>(AuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Author');
    },
    AuthorPaths(variables?: AuthorPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthorPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthorPathsQuery>(AuthorPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthorPaths');
    },
    Post(variables: PostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostQuery>(PostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Post');
    },
    PostPaths(variables?: PostPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostPathsQuery>(PostPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostPaths');
    },
    Tag(variables: TagQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagQuery>(TagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Tag');
    },
    TagPaths(variables?: TagPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagPathsQuery>(TagPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagPaths');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;