export const disableScroll = () => {
  const bodyWithScrollbar = document.body.offsetWidth;
  document.body.style.overflowY = 'hidden';

  const bodyWithoutScrollbar = document.body.offsetWidth;
  const scrollbarWidth = bodyWithoutScrollbar - bodyWithScrollbar;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

export const enableScroll = () => {
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '';
};
