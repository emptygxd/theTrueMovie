type Still = {
  url: string;
  previewUrl: string;
};

type Episode = {
  number: number;
  name: string;
  enName: string;
  airDate: string;
  description: string;
  enDescription: string;
  still: Still;
};

export type Series = {
  movieId: number;
  number: number;
  airDate: string;
  createdAt: string;
  enName: string;
  episodes: Episode[];
  episodesCount: number;
  name: string;
  source: string;
  updatedAt: string;
  id: string;
};
