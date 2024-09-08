import { rawCountries } from './countries';
import { rawGenres } from './genres';

export type Filter = {
  value: string;
  label: string;
};

export const GENRES = rawGenres.map((genre) => ({
  value: genre.slug,
  label: genre.name,
}));

export const COUNTRIES = rawCountries.map((country) => ({
  value: country.slug,
  label: country.name,
}));
