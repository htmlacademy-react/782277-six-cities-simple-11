import {Reviews} from '../types/review';
import {PHOTO_URL} from '../const';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Ole',
      isPro: false,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sun Oct 30 2022 17:00:55 GMT+0300 (Москва, стандартное время)'
  },
  {
    id: 2,
    user: {
      id: 3,
      name: 'Bill',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    rating: 3,
    comment: 'A quiet cozy.',
    date: 'Sun Oct 15 2022 15:15:55 GMT+0300 (Москва, стандартное время)'
  },
  {
    id: 3,
    user: {
      id: 2,
      name: 'Max',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    rating: 5,
    comment: 'The building is green and from 18th century.',
    date: 'Sun Oct 17 2022 16:05:55 GMT+0300 (Москва, стандартное время)'
  },
];
