import {User} from './user';

type Location = {
  zoom: number;
  latitude: number;
  longitude: number;
};

type City = {
  name: string;
  location: Location;
};

type Offer = {
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: User;
  city: City;
  location: Location;
};

export type Offers = Offer[];
