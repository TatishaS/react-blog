export const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export const formatDate = (date) => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString('ru-RU', options);
}

