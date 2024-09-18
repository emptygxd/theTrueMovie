import { useRef } from 'react';

import { topArrowImg } from 'assets';

import './style.scss';

export const ScrollToTop = () => {
  const btn = useRef<HTMLButtonElement>(null);

  function scrollHandler() {
    if (window.scrollY > 200) {
      btn.current?.classList.add('show');
    } else {
      btn.current?.classList.remove('show');
    }
  }

  window.addEventListener('scroll', scrollHandler);

  function scrollToTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button ref={btn} className="scroll-to-top" onClick={scrollToTopHandler}>
      <img src={topArrowImg} alt="top arrow" />
    </button>
  );
};
