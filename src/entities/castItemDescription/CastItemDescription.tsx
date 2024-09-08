import { CastType, getAgeSuffix } from 'shared';

type Props = {
  actor: CastType;
};

export const CastItemDescription = ({ actor }: Props) => {
  const russianName = actor.name ?? actor.enName ?? '';
  const altName = actor.name ? actor.enName : null;
  const altNameString = `${altName ?? ''}${altName && actor.age ? ', ' : ''}${actor.age ? getAgeSuffix(actor.age || 0) : ''}`;

  return (
    <div className="movies__description">
      <h3 title={russianName}>{russianName}</h3>

      {altNameString && <p title={altNameString}>{altNameString}</p>}
    </div>
  );
};
