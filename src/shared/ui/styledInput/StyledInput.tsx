import './style.scss';

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

export const StyledInput = ({ type, name, placeholder }: Props) => {
  return (
    <>
      <input
        className="styledInput"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <label>{placeholder}</label>
    </>
  );
};
