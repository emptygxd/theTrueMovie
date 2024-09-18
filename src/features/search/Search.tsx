import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSearchInput } from 'shared';

import { searchImg } from 'assets';

import './style.scss';

export const Search = () => {
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const search = useCallback(() => {
    if (query !== '') {
      navigate(`search/${query}`);
    }
  }, [query]);

  const { onBlurHandler, onFocusHandler, onImgClickHandler, onKeyDownHandler } =
    useSearchInput(search, ref);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search__container">
      <input
        ref={ref}
        type="text"
        name="search"
        id="search"
        className="search"
        value={query}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />

      <img onClick={onImgClickHandler} src={searchImg} alt="search" />
    </div>
  );
};
