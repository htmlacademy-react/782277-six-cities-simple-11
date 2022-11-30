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
  User = 'USER',
  Offers = 'OFFERS',
  OfferProperty = 'OFFER_PROPERTY'
}

export enum Location {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum SortType {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  RatingToLow = 'Top rated first'
}

export const LOCATIONS: Location[] = Object.values(Location);
export const SORTS: SortType[] = Object.values(SortType);

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

export const REVIEW_MIN_LENGTH = 50;
