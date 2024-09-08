export const getChildrenSuffix = (children: number) => {
  const lastDigit = children % 10;
  const lastTwoDigits = children % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${children} детей`;
  }

  if (lastDigit === 1) {
    return `${children} ребёнок`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${children} ребёнка`;
  }

  return `${children} детей`;
};
