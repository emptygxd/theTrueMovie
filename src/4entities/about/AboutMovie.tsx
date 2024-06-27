import { AboutBlock } from '../../5shared/about';
import { MovieType } from '../../5shared/types';

const AboutMovie = ({ movie }: { movie: MovieType[] }) => {
  return (
    <>
      {movie.map((movie: MovieType) => (
        <div className="about__container" key={movie.imdbID}>
          <AboutBlock title="Released" value={movie.Released} />
          <AboutBlock title="Country" value={movie.Country} />
          <AboutBlock title="Genre" value={movie.Genre} />
          <AboutBlock title="Language" value={movie.Language} />
          <AboutBlock title="Type" value={movie.Type} />
          <AboutBlock title="Runtime" value={movie.Runtime} />
          <AboutBlock title="BoxOffice" value={movie.BoxOffice} />
          <AboutBlock title="Actors" value={movie.Actors} />
          <AboutBlock title="Director" value={movie.Director} />
          <AboutBlock title="Writer" value={movie.Writer} />
          <AboutBlock title="Production" value={movie.Production} />
          <AboutBlock title="Awards" value={movie.Awards} />
          <AboutBlock title="DVD" value={movie.DVD} />
          <AboutBlock title="imdbID" value={movie.imdbID} />

          {movie.Website !== 'N/A' && (
            <AboutBlock title="Website" value={movie.Website} />
          )}
          <AboutBlock title="Rated" value={movie.Rated} />
        </div>
      ))}
    </>
  );
};

export default AboutMovie;
