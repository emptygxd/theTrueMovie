import { Link } from 'react-router-dom';

import { CastItemDescription, ZeroResults } from 'entities';

import { CastType, ROUTES, SmallLoader } from 'shared';

import { noImageImg } from 'assets';

import './style.scss';

type Props = {
  actors: CastType[];
  pages: number;
  isFetching: boolean;
};

export const CastList = ({ actors, pages, isFetching }: Props) => {
  return (
    <>
      <div className="cast__container">
        {actors?.map((actor: CastType) => {
          return (
            <Link to={`${ROUTES.PERSONS}/${actor.id}`} key={actor.id}>
              <div className="cast__item">
                <img
                  src={actor.photo ?? noImageImg}
                  loading="lazy"
                  alt="poster"
                />

                <CastItemDescription actor={actor} />
              </div>
            </Link>
          );
        })}
        {pages === 0 && <ZeroResults />}
      </div>
      {isFetching && <SmallLoader />}
    </>
  );
};
