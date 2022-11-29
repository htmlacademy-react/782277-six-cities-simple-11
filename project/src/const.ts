export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  NotFound = '*'
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}

export enum Reducer {
  AppProcess = 'APP_PROCESS',
  User = 'USER',
  Offers = 'OFFERS',
  OfferProperty = 'OFFER_PROPERTY'
}

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const LOGIN_FIELDS = [
  'email',
  'password'
];

export const GRADES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];

export const DEFAULT_LOCATION = 'Paris';
export const DEFAULT_SORT = 'Popular';
export const REVIEW_MIN_LENGTH = 50;
