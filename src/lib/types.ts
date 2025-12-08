import type { ImagePlaceholder } from './placeholder-images';

export type Author = {
  id: string;
  name: string;
  slug: string;
  title: string;
  avatarUrl: string;
};

export type Template = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  currency: 'XOF';
  category: 'Finance' | 'RH' | 'Gestion de projet' | 'Vente' | 'Personnel';
  images: ImagePlaceholder[];
  filePath: string;
  demoUrl: string;
  prerequisites: string[];
  tags: string[];
  author: Author;
  reviews: {
    rating: number;
    count: number;
  };
  createdAt: string; // ISO 8601 string
};
