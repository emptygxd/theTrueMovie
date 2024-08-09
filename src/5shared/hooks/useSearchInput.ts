import { useState } from 'react';

type Ref = React.MutableRefObject<HTMLInputElement | null>;

export const useSearchInput = (callback: () => void, ref: Ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const onImgClickHandler = () => {
    if (isFocused) {
      callback();
      ref?.current?.blur();
      setIsFocused(false);
    } else {
      ref.current?.focus();
      setIsFocused(true);
    }
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      ref.current?.blur();
      setIsFocused(false);
    }, 1000);
  };

  const onFocusHandler = () => {
    ref.current?.focus();
    setIsFocused(true);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      callback();
      setIsFocused(false);
      ref.current?.blur();
    }
  };
  return {
    onImgClickHandler,
    onBlurHandler,
    onFocusHandler,
    onKeyDownHandler,
  };
};
