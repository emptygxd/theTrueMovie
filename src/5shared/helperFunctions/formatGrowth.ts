export const formatGrowth = (heightInCm: number | null) => {
  if (!heightInCm) return ' ';

  const heightInMeters = (heightInCm / 100).toFixed(2);
  return `${heightInMeters} м`;
};
