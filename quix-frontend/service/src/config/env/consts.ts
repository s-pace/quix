import {BaseConnectionOptions} from 'typeorm/connection/BaseConnectionOptions';

import {StaticSettings, ComputedSettings} from './types';

export const envSettingsMap: {[K in keyof StaticSettings]: string} = {
  DbName: 'DB_NAME',
  DbUser: 'DB_USER',
  DbPass: 'DB_PASS',
  DbHost: 'DB_HOST',
  DbPort: 'DB_PORT',
  QuixBackendInternalUrl: 'BACKEND_INTERNAL_URL',
  QuixBackendPublicUrl: 'BACKEND_PUBLIC_URL',
  GoogleClientId: 'GOOGLE_SSO_CLIENT_ID',
  GoogleAuthSecret: 'GOOGLE_SSO_SECRET',
  AuthCookieName: 'AUTH_COOKIE',
  AuthEncKey: 'AUTH_SECRET',
  CookieAge: 'COOKIE_MAX_AGE',
  DbType: 'DB_TYPE',
  AuthType: 'AUTH_TYPE',
  AutoMigrateDb: 'DB_AUTO_MIGRATE',
  UseMinifiedStatics: 'MINIFIED_STATICS',
  DemoMode: 'DEMO_MODE',
  DbDebug: 'DB_DEBUG',
  Modules: 'MODULES',
  HttpPort: 'HTTP_PORT',
  MountPath: 'MOUNT_PATH',
  RupertApiUrl: 'RUPERT_API_URL',
  RupertApiKey: 'RUPERT_API_KEY',
  OpenIdDiscoveryDoc: 'OPEN_ID_DISCOVERY_DOC',
  OpenIdClientId: 'OPEN_ID_CLIENT_ID',
  OpenIdClientSecret: 'OPEN_ID_CLIENT_SECRET',
  OpenIdRedirectUrl: 'OPEN_ID_RDIRECT_URL',
};

export const envSettingsDefaults = {
  OpenIdDiscoveryDoc: 'https://accounts.google.com',
  OpenIdClientSecret: '15dLRAxrQFI5CvLBDXWtv04F',
  OpenIdClientId: '170992126842-j06a80mttd6l0s8g9cmlm60nr98og48k.apps.googleusercontent.com',
  OpenIdRedirectUrl: 'http://local.quix.com:3000/openid-code',
  DbType: 'mysql' as 'mysql' | 'sqlite',
  AuthType: 'openid' as 'fake' | 'google' | 'openid',
  DbName: 'quix',
  DbUser: 'root',
  DbPass: '',
  DbHost: 'db',
  DbPort: 3306,
  QuixBackendInternalUrl: 'backend:8081',
  QuixBackendPublicUrl: 'localhost:8081',
  GoogleClientId: '',
  GoogleAuthSecret: '',
  AuthCookieName: '__quix',
  AuthEncKey: '123456',
  CookieAge: 30 * 24 * 60 * 60 * 1000 /* 30 days */,
  AutoMigrateDb: false,
  UseMinifiedStatics: true,
  DemoMode: false,
  DbDebug: ['error', 'schema', 'warn'] as BaseConnectionOptions['logging'],
  Modules: ['presto'],
  HttpPort: 3000,
  MountPath: '',
  RupertApiUrl: '',
  RupertApiKey: '',
};

export const testingDefaults: StaticSettings = {
  ...envSettingsDefaults,
  DbName: 'quixtest',
  DbHost: 'localhost',
  QuixBackendInternalUrl: 'localhost:8081',
  QuixBackendPublicUrl: 'localhost:8081',
  AuthEncKey: '',
  DbType: 'sqlite',
  AuthType: 'fake',
  AutoMigrateDb: true,
  UseMinifiedStatics: false,
  DbDebug: false,
  Modules: ['presto'],
  HttpPort: 3000,
  MountPath: '',
};

export const computedSettingsDefaults: ComputedSettings = {
  moduleSettings: {
    presto: {
      syntax: 'ansi_sql',
      engine: 'presto',
    },
  },
};
