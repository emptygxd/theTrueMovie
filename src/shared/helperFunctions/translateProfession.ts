const translations: { [key: string]: string } = {
  actor: 'Актёр',
  producer: 'Продюсер',
  director: 'Режиссёр',
  writer: 'Сценарист',
  cameo: 'Камео',
  uncredited: 'Не указан в титрах',
};

export const translateProfession = (profession: string) => {
  return translations[profession] || profession;
};
