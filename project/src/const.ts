export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}

export enum PHOTO_URL {
  Avatar = 'https://i.pravatar.cc/74?rnd=',
  Offer = 'http://picsum.photos/260/200?r='
}

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const DEFAULT_LOCATION = 'Paris';

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const DEFAULT_SORT = 'Popular';

export const GRADES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];
