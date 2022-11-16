export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const DEFAULT_LOCATION = {
  location: {
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: 5
  },
  name: 'Paris'
};

export const GRADES = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];

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
