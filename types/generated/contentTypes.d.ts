import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAccountAccount extends Struct.CollectionTypeSchema {
  collectionName: 'accounts';
  info: {
    description: '';
    displayName: 'Account';
    pluralName: 'accounts';
    singularName: 'account';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Account_Name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Account_Type: Schema.Attribute.Enumeration<
      ['Personal', 'Creator', 'Business']
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Addresss: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    all_admins: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    bg_picture: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Bio: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Bio_1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    book_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-list.book-list'
    >;
    claimable_place_profile: Schema.Attribute.Relation<
      'oneToOne',
      'api::claimable-place-profile.claimable-place-profile'
    >;
    community_boards: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Feed_Data: Schema.Attribute.JSON;
    game_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::game-list.game-list'
    >;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    Is_Claimable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::account.account'
    >;
    localtunes_integrated: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'No'>;
    localtunes_public: Schema.Attribute.String;
    mobile_number: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mobile_number_visibility: Schema.Attribute.Boolean &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    movie_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::movie-list.movie-list'
    >;
    pinned_nav_tabs: Schema.Attribute.JSON;
    Primary_Address: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primary_admin: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    profile_picture: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    profile_place_details: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    profile_place_media_details: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    public_books: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    public_games: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    public_guides: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    public_movie: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    public_music: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    public_profile: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    Public_Profile_Address: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    public_recommendations: Schema.Attribute.Enumeration<['Yes', 'No']> &
      Schema.Attribute.DefaultTo<'Yes'>;
    publishedAt: Schema.Attribute.DateTime;
    recommendation_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommendation-list.recommendation-list'
    >;
    social_media: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    users_permissions_users: Schema.Attribute.Relation<
      'manyToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiBookCategoryBookCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'book_categories';
  info: {
    description: '';
    displayName: 'Book_Category';
    pluralName: 'book-categories';
    singularName: 'book-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-category.book-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_books: Schema.Attribute.Relation<
      'manyToMany',
      'api::recommended-book.recommended-book'
    >;
    subject_name: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBookListBookList extends Struct.CollectionTypeSchema {
  collectionName: 'book_lists';
  info: {
    description: '';
    displayName: 'BookList';
    pluralName: 'book-lists';
    singularName: 'book-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    cover_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    display_order: Schema.Attribute.Integer;
    list_description: Schema.Attribute.Text;
    List_Name: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-list.book-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_books: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-book.recommended-book'
    >;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    top_reads_heading: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    visibility: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiClaimablePlaceProfileClaimablePlaceProfile
  extends Struct.CollectionTypeSchema {
  collectionName: 'claimable_place_profiles';
  info: {
    description: '';
    displayName: 'Claimable_Place_Profile';
    pluralName: 'claimable-place-profiles';
    singularName: 'claimable-place-profile';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Added_By_User: Schema.Attribute.JSON;
    Address: Schema.Attribute.String;
    Claiming_Account: Schema.Attribute.Relation<
      'oneToOne',
      'api::account.account'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Is_Claimed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Lat: Schema.Attribute.Decimal;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::claimable-place-profile.claimable-place-profile'
    > &
      Schema.Attribute.Private;
    Long: Schema.Attribute.Decimal;
    Meta_Data: Schema.Attribute.JSON;
    Name: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Place_Id: Schema.Attribute.UID;
    publishedAt: Schema.Attribute.DateTime;
    Recommendation_Count: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Website: Schema.Attribute.String;
  };
}

export interface ApiCommunityCommunity extends Struct.CollectionTypeSchema {
  collectionName: 'communities';
  info: {
    description: '';
    displayName: 'Community';
    pluralName: 'communities';
    singularName: 'community';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_details: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    Title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    visibility: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ApiFaqFaq extends Struct.CollectionTypeSchema {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Answer: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    publishedAt: Schema.Attribute.DateTime;
    Question: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Sequence: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFollowerFollower extends Struct.CollectionTypeSchema {
  collectionName: 'followers';
  info: {
    displayName: 'Follower';
    pluralName: 'followers';
    singularName: 'follower';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    follower_account: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::follower.follower'
    > &
      Schema.Attribute.Private;
    main_account: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGameCategoryGameCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'game_categories';
  info: {
    displayName: 'Game_Category';
    pluralName: 'game-categories';
    singularName: 'game-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    genre_name: Schema.Attribute.String & Schema.Attribute.Required;
    igdb_genre_id: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::game-category.game-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_games: Schema.Attribute.Relation<
      'manyToMany',
      'api::recommended-game.recommended-game'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGameListGameList extends Struct.CollectionTypeSchema {
  collectionName: 'game_lists';
  info: {
    displayName: 'GameList';
    pluralName: 'game-lists';
    singularName: 'game-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    cover_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    display_order: Schema.Attribute.Integer;
    list_description: Schema.Attribute.Text;
    List_Name: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::game-list.game-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_games: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-game.recommended-game'
    >;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    top_picks_heading: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Visibility: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiGuideCategoryGuideCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'guide_categories';
  info: {
    displayName: 'Guide_Category';
    pluralName: 'guide-categories';
    singularName: 'guide-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Category_Name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::guide-category.guide-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGuideSectionGuideSection
  extends Struct.CollectionTypeSchema {
  collectionName: 'guide_sections';
  info: {
    description: '';
    displayName: 'Guide_Section';
    pluralName: 'guide-sections';
    singularName: 'guide-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Budget: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Blocks;
    guide: Schema.Attribute.Relation<'manyToOne', 'api::guide.guide'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::guide-section.guide-section'
    > &
      Schema.Attribute.Private;
    Map_Details: Schema.Attribute.JSON;
    Packing_List: Schema.Attribute.JSON;
    Pre_Tasks: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    Recomendation_Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Recommendation_Activity: Schema.Attribute.JSON;
    Section_tags: Schema.Attribute.JSON;
    Sequence: Schema.Attribute.Decimal;
    Stay: Schema.Attribute.JSON;
    Timeline: Schema.Attribute.JSON;
    Title: Schema.Attribute.String;
    Transport: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGuideGuide extends Struct.CollectionTypeSchema {
  collectionName: 'guides';
  info: {
    description: '';
    displayName: 'Guide';
    pluralName: 'guides';
    singularName: 'guide';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    Best_Time_To_Visit: Schema.Attribute.JSON;
    Budget_Type: Schema.Attribute.Enumeration<
      ['Budget', 'Mid-Range', 'Luxury', 'Backpacker', 'Ultra-Luxury']
    >;
    Category: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.Blocks;
    Estimated_Budget: Schema.Attribute.JSON;
    Guide_Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Guide_Section_Details: Schema.Attribute.JSON;
    guide_sections: Schema.Attribute.Relation<
      'oneToMany',
      'api::guide-section.guide-section'
    >;
    Guide_Tags: Schema.Attribute.JSON;
    Guide_Type: Schema.Attribute.Enumeration<['Itinerary', 'Theme']>;
    is_Multicity: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'> &
      Schema.Attribute.Private;
    Number_Of_Days: Schema.Attribute.Integer;
    Place_Details: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String;
    Tips_Notes: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
    Transportation: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Visibility: Schema.Attribute.Boolean;
  };
}

export interface ApiMovieCategoryMovieCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'movie_categories';
  info: {
    description: '';
    displayName: 'Movie_Category';
    pluralName: 'movie-categories';
    singularName: 'movie-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    genre_name: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::movie-category.movie-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_movie: Schema.Attribute.Relation<
      'manyToOne',
      'api::recommended-movie.recommended-movie'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMovieListMovieList extends Struct.CollectionTypeSchema {
  collectionName: 'movie_lists';
  info: {
    description: '';
    displayName: 'MovieList';
    pluralName: 'movie-lists';
    singularName: 'movie-list';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    cover_image: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    display_order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    list_description: Schema.Attribute.Text;
    List_Name: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::movie-list.movie-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_movies: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-movie.recommended-movie'
    >;
    slug: Schema.Attribute.UID<'List_Name'> & Schema.Attribute.Required;
    top_picks_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Top Picks'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Visibility: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiPeopleCategoryPeopleCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'people_categories';
  info: {
    displayName: 'People_Category';
    pluralName: 'people-categories';
    singularName: 'people-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category_name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::people-category.people-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPlatformTermPlatformTerm
  extends Struct.CollectionTypeSchema {
  collectionName: 'platform_terms';
  info: {
    description: '';
    displayName: 'Platform_Term';
    pluralName: 'platform-terms';
    singularName: 'platform-term';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Cookie_Policy: Schema.Attribute.Blocks &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::platform-term.platform-term'
    >;
    Privacy_and_Policy: Schema.Attribute.Blocks &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    Terms_and_Condition: Schema.Attribute.Blocks &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPublicPageAnalyticPublicPageAnalytic
  extends Struct.CollectionTypeSchema {
  collectionName: 'public_page_analytics';
  info: {
    displayName: 'Public_Page_Analytic';
    pluralName: 'public-page-analytics';
    singularName: 'public-page-analytic';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Account_Id: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::public-page-analytic.public-page-analytic'
    > &
      Schema.Attribute.Private;
    Location_Id: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    Recommendation_Id: Schema.Attribute.String;
    Stats: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReasonForLeavingReasonForLeaving
  extends Struct.CollectionTypeSchema {
  collectionName: 'reason_for_leavings';
  info: {
    displayName: 'Reason_For_Leaving';
    pluralName: 'reason-for-leavings';
    singularName: 'reason-for-leaving';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::reason-for-leaving.reason-for-leaving'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Reasons: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    User_Details: Schema.Attribute.JSON;
  };
}

export interface ApiRecommendationCategoryRecommendationCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommendation_categories';
  info: {
    description: '';
    displayName: 'Recommendation_Category';
    pluralName: 'recommendation-categories';
    singularName: 'recommendation-category';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Category_Name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommendation-category.recommendation-category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    recommendation_sub_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommendation-sub-category.recommendation-sub-category'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRecommendationListRecommendationList
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommendation_lists';
  info: {
    description: '';
    displayName: 'Recommendation_List';
    pluralName: 'recommendation-lists';
    singularName: 'recommendation-list';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    account: Schema.Attribute.Relation<'manyToOne', 'api::account.account'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Instagram_Media_URL: Schema.Attribute.String;
    List_Name: Schema.Attribute.String;
    List_Name_Details: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommendation-list.recommendation-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_places: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-place.recommended-place'
    >;
    Sequence: Schema.Attribute.Integer;
    slug: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Visibility: Schema.Attribute.Boolean;
  };
}

export interface ApiRecommendationSubCategoryRecommendationSubCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommendation_sub_categories';
  info: {
    displayName: 'Recommendation_Sub_Category';
    pluralName: 'recommendation-sub-categories';
    singularName: 'recommendation-sub-category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommendation-sub-category.recommendation-sub-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommendation_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::recommendation-category.recommendation-category'
    >;
    sub_category: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRecommendedBookRecommendedBook
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommended_books';
  info: {
    description: '';
    displayName: 'RecommendedBook';
    pluralName: 'recommended-books';
    singularName: 'recommended-book';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authors: Schema.Attribute.JSON;
    book_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::book-category.book-category'
    >;
    book_list: Schema.Attribute.Relation<
      'manyToOne',
      'api::book-list.book-list'
    >;
    buy_links: Schema.Attribute.JSON;
    cover_url: Schema.Attribute.String;
    cover_url_large: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    display_order: Schema.Attribute.Integer;
    google_rating: Schema.Attribute.Decimal;
    is_pinned: Schema.Attribute.Boolean;
    isbn_10: Schema.Attribute.String;
    isbn_13: Schema.Attribute.String;
    language: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-book.recommended-book'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_details: Schema.Attribute.JSON;
    page_count: Schema.Attribute.Integer;
    pin_order: Schema.Attribute.Integer;
    preview_link: Schema.Attribute.String;
    published_date: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    publisher: Schema.Attribute.String;
    ratings_count: Schema.Attribute.Integer;
    subjects: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_rating: Schema.Attribute.Integer;
    user_recommendation_note: Schema.Attribute.Blocks;
    volume_id: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String;
  };
}

export interface ApiRecommendedGameRecommendedGame
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommended_games';
  info: {
    description: '';
    displayName: 'RecommendedGame';
    pluralName: 'recommended-games';
    singularName: 'recommended-game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cover_url: Schema.Attribute.String;
    cover_url_large: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    developer: Schema.Attribute.String;
    display_order: Schema.Attribute.Integer;
    game_categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::game-category.game-category'
    >;
    game_list: Schema.Attribute.Relation<
      'manyToOne',
      'api::game-list.game-list'
    >;
    game_modes: Schema.Attribute.JSON;
    genres: Schema.Attribute.JSON;
    igdb_id: Schema.Attribute.Integer & Schema.Attribute.Required;
    igdb_image_id: Schema.Attribute.String;
    igdb_rating: Schema.Attribute.Decimal;
    igdb_rating_count: Schema.Attribute.Integer;
    igdb_slug: Schema.Attribute.String;
    igdb_url: Schema.Attribute.String;
    is_pinned: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-game.recommended-game'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_details: Schema.Attribute.JSON;
    pin_order: Schema.Attribute.Integer;
    platforms: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    publisher: Schema.Attribute.String;
    release_date: Schema.Attribute.String;
    release_year: Schema.Attribute.String;
    screenshot_ids: Schema.Attribute.JSON;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_rating: Schema.Attribute.Integer;
    user_recommendation_note: Schema.Attribute.Blocks;
  };
}

export interface ApiRecommendedMovieRecommendedMovie
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommended_movies';
  info: {
    description: '';
    displayName: 'RecommendedMovie';
    pluralName: 'recommended-movies';
    singularName: 'recommended-movie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backdrop_path: Schema.Attribute.String;
    cast_details: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    director: Schema.Attribute.String;
    display_order: Schema.Attribute.Integer;
    genres: Schema.Attribute.JSON;
    is_pinned: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-movie.recommended-movie'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_details: Schema.Attribute.JSON;
    media_type: Schema.Attribute.Enumeration<['Movie', 'Show', 'TV']> &
      Schema.Attribute.Required;
    movie_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::movie-category.movie-category'
    >;
    movie_list: Schema.Attribute.Relation<
      'manyToOne',
      'api::movie-list.movie-list'
    >;
    original_title: Schema.Attribute.String;
    overview: Schema.Attribute.Text;
    pin_order: Schema.Attribute.Integer;
    poster_path: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    runtime: Schema.Attribute.Integer;
    season_count: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tmdb_id: Schema.Attribute.String & Schema.Attribute.Required;
    tmdb_rating: Schema.Attribute.Decimal;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_rating: Schema.Attribute.Integer;
    user_recommendation_note: Schema.Attribute.Blocks;
    watch_providers: Schema.Attribute.JSON;
    year: Schema.Attribute.String;
  };
}

export interface ApiRecommendedPlaceRecommendedPlace
  extends Struct.CollectionTypeSchema {
  collectionName: 'recommended_places';
  info: {
    description: '';
    displayName: 'Recommended_place';
    pluralName: 'recommended-places';
    singularName: 'recommended-place';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Contact_Name: Schema.Attribute.String;
    Contact_Number: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recommended-place.recommended-place'
    > &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_details: Schema.Attribute.JSON;
    Person_Details: Schema.Attribute.JSON;
    Place_Details: Schema.Attribute.JSON;
    Places_Social_Link: Schema.Attribute.String;
    Places_Website: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    recommendation_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::recommendation-category.recommendation-category'
    >;
    recommendation_list: Schema.Attribute.Relation<
      'manyToOne',
      'api::recommendation-list.recommendation-list'
    >;
    recommendation_sub_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::recommendation-sub-category.recommendation-sub-category'
    >;
    Recommendation_Type: Schema.Attribute.Enumeration<['place', 'person']>;
    Source_Of_Recommendation: Schema.Attribute.Enumeration<
      ['self', 'suggestion']
    >;
    supporter: Schema.Attribute.Relation<
      'oneToOne',
      'api::supporter.supporter'
    >;
    supporters: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_recommendation_note: Schema.Attribute.RichText;
    Users_Place_Note: Schema.Attribute.Blocks;
    Users_Social_URL: Schema.Attribute.String;
  };
}

export interface ApiSongLimitSongLimit extends Struct.CollectionTypeSchema {
  collectionName: 'song_limits';
  info: {
    description: '';
    displayName: 'Song_limit';
    pluralName: 'song-limits';
    singularName: 'song-limit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_guide_requests: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::song-limit.song-limit'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    song_requests: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiSubscriptionPlanBaseSubscriptionPlanBase
  extends Struct.CollectionTypeSchema {
  collectionName: 'subscription_plan_bases';
  info: {
    description: '';
    displayName: 'Subscription_plan_base';
    pluralName: 'subscription-plan-bases';
    singularName: 'subscription-plan-base';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_guide_quota: Schema.Attribute.String;
    cost: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    duration: Schema.Attribute.Enumeration<['monthly', 'yearly']>;
    feature_control: Schema.Attribute.JSON;
    features: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subscription-plan-base.subscription-plan-base'
    > &
      Schema.Attribute.Private;
    max_devices: Schema.Attribute.Integer;
    plan_code: Schema.Attribute.String;
    plan_name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    songs_quota: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSupporterSupporter extends Struct.CollectionTypeSchema {
  collectionName: 'supporters';
  info: {
    displayName: 'Supporter';
    pluralName: 'supporters';
    singularName: 'supporter';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accounts: Schema.Attribute.Relation<'oneToMany', 'api::account.account'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::supporter.supporter'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    recommended_place: Schema.Attribute.Relation<
      'oneToOne',
      'api::recommended-place.recommended-place'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUnsubscribeUnsubscribe extends Struct.CollectionTypeSchema {
  collectionName: 'unsubscribes';
  info: {
    displayName: 'Unsubscribe';
    pluralName: 'unsubscribes';
    singularName: 'unsubscribe';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    feedback: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::unsubscribe.unsubscribe'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    unsubscribedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUserSubscriptionPlanUserSubscriptionPlan
  extends Struct.CollectionTypeSchema {
  collectionName: 'user_subscription_plans';
  info: {
    description: '';
    displayName: 'User_subscription_plan';
    pluralName: 'user-subscription-plans';
    singularName: 'user-subscription-plan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    end_date: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-subscription-plan.user-subscription-plan'
    > &
      Schema.Attribute.Private;
    plan_id: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    razorpay_customer_id: Schema.Attribute.String;
    razorpay_plan_id: Schema.Attribute.String;
    razorpay_sub_id: Schema.Attribute.String;
    start_date: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_id: Schema.Attribute.String;
  };
}

export interface ApiVerifyClaimVerifyClaim extends Struct.CollectionTypeSchema {
  collectionName: 'verify_claims';
  info: {
    description: '';
    displayName: 'Verify_Claim';
    pluralName: 'verify-claims';
    singularName: 'verify-claim';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Attachment: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Email: Schema.Attribute.Email;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::verify-claim.verify-claim'
    > &
      Schema.Attribute.Private;
    Message: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    accounts: Schema.Attribute.Relation<'manyToMany', 'api::account.account'>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    instagramAccessToken: Schema.Attribute.Text;
    instagramAccountType: Schema.Attribute.String;
    instagramUserId: Schema.Attribute.String;
    instagramUsername: Schema.Attribute.String;
    is_subscribed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Language_Choice: Schema.Attribute.String & Schema.Attribute.DefaultTo<'en'>;
    Language_preference: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    mobile_number: Schema.Attribute.String;
    mobile_number_visibility: Schema.Attribute.String;
    movie_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::movie-list.movie-list'
    >;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    razorpay_customer_id: Schema.Attribute.String;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::account.account': ApiAccountAccount;
      'api::book-category.book-category': ApiBookCategoryBookCategory;
      'api::book-list.book-list': ApiBookListBookList;
      'api::claimable-place-profile.claimable-place-profile': ApiClaimablePlaceProfileClaimablePlaceProfile;
      'api::community.community': ApiCommunityCommunity;
      'api::faq.faq': ApiFaqFaq;
      'api::follower.follower': ApiFollowerFollower;
      'api::game-category.game-category': ApiGameCategoryGameCategory;
      'api::game-list.game-list': ApiGameListGameList;
      'api::guide-category.guide-category': ApiGuideCategoryGuideCategory;
      'api::guide-section.guide-section': ApiGuideSectionGuideSection;
      'api::guide.guide': ApiGuideGuide;
      'api::movie-category.movie-category': ApiMovieCategoryMovieCategory;
      'api::movie-list.movie-list': ApiMovieListMovieList;
      'api::people-category.people-category': ApiPeopleCategoryPeopleCategory;
      'api::platform-term.platform-term': ApiPlatformTermPlatformTerm;
      'api::public-page-analytic.public-page-analytic': ApiPublicPageAnalyticPublicPageAnalytic;
      'api::reason-for-leaving.reason-for-leaving': ApiReasonForLeavingReasonForLeaving;
      'api::recommendation-category.recommendation-category': ApiRecommendationCategoryRecommendationCategory;
      'api::recommendation-list.recommendation-list': ApiRecommendationListRecommendationList;
      'api::recommendation-sub-category.recommendation-sub-category': ApiRecommendationSubCategoryRecommendationSubCategory;
      'api::recommended-book.recommended-book': ApiRecommendedBookRecommendedBook;
      'api::recommended-game.recommended-game': ApiRecommendedGameRecommendedGame;
      'api::recommended-movie.recommended-movie': ApiRecommendedMovieRecommendedMovie;
      'api::recommended-place.recommended-place': ApiRecommendedPlaceRecommendedPlace;
      'api::song-limit.song-limit': ApiSongLimitSongLimit;
      'api::subscription-plan-base.subscription-plan-base': ApiSubscriptionPlanBaseSubscriptionPlanBase;
      'api::supporter.supporter': ApiSupporterSupporter;
      'api::unsubscribe.unsubscribe': ApiUnsubscribeUnsubscribe;
      'api::user-subscription-plan.user-subscription-plan': ApiUserSubscriptionPlanUserSubscriptionPlan;
      'api::verify-claim.verify-claim': ApiVerifyClaimVerifyClaim;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
