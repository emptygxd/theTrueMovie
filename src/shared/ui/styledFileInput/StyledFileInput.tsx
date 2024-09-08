import './style.scss';

type Props = {
  name: string;
  placeholder: string;
};

export const StyledFileInput = ({ name, placeholder }: Props) => {
  return (
    <div className="file__container">
      <p>Фотография</p>
      <input
        className="file__input"
        type="file"
        name={name}
        accept="image/jpeg, image/png"
        id="file"
      />
      <label htmlFor="file"></label>
      <label className="file__text" htmlFor="file">
        {placeholder}
      </label>
    </div>
  );
};
