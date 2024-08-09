import { useCallback, useRef, useState } from 'react';

import { useSearchInput } from 'shared';

import searchImg from 'public/assets/search.png';

import './style.scss';

export const Search = () => {
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);

  const search = useCallback(() => {
    if (query !== '') {
      console.log(query);
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
