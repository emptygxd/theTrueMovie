import AboutComponent from '../components/AboutComponent';
import { MovieType } from '../shared/types';

const AboutContainer = ({ movie }: { movie: MovieType }) => {
  return (
    <>
      <AboutComponent title="Released" value={movie.Released} />
      <AboutComponent title="Country" value={movie.Country} />
      <AboutComponent title="Genre" value={movie.Genre} />
      <AboutComponent title="Language" value={movie.Language} />
      <AboutComponent title="Type" value={movie.Type} />
      <AboutComponent title="Runtime" value={movie.Runtime} />
      <AboutComponent title="BoxOffice" value={movie.BoxOffice} />
      <AboutComponent title="Actors" value={movie.Actors} />
      <AboutComponent title="Director" value={movie.Director} />
      <AboutComponent title="Writer" value={movie.Writer} />
      <AboutComponent title="Production" value={movie.Production} />
      <AboutComponent title="Awards" value={movie.Awards} />
      <AboutComponent title="DVD" value={movie.DVD} />
      <AboutComponent title="imdbID" value={movie.imdbID} />

      {movie.Website !== 'N/A' && (
        <AboutComponent title="Website" value={movie.Website} />
      )}

      <AboutComponent title="Rated" value={movie.Rated} />
    </>
  );
};

export default AboutContainer;
