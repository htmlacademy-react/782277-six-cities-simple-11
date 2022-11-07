import {Offers} from '../types/offer';
import {PHOTO_URL} from '../const';

export const offers: Offers = [
  {
    id: 1,
    isFavorite: true,
    isPremium: true,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    host: {
      id: 5,
      name: 'Angelina',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 2,
    isFavorite: false,
    isPremium: false,
    title: 'Wood and stone place',
    type: 'private room',
    price: 80,
    rating: 4,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 3}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 2,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'The building is green and from 18th century.',
    host: {
      id: 4,
      name: 'Ole',
      isPro: false,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: false,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 3,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Towels'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera.',
    host: {
      id: 3,
      name: 'Bill',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    }
  },
  {
    id: 4,
    isFavorite: false,
    isPremium: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 3}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Towels'],
    description: 'The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Max',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    }
  }
];

export const nearOffers = offers.slice(0, 3);
