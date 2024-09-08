export const formatDate = (date: Date) => {
  const month = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  });
  const year = date.getFullYear();

  return `${month}, ${year}`;
};
