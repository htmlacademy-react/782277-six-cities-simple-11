export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}
