const months = [
  "янв",
  "фев",
  "март",
  "апр",
  "май",
  "июнь",
  "июль",
  "авг",
  "сен",
  "окт",
  "нояб",
  "дек",
];

export const convertDate = (date) => {
  const day = date.getDate();
  const month = months[date.getMonth()];
  let hour = date.getHours();
  hour = hour.toString().length === 1 ? `0${hour}` : hour;
  let minutes = date.getMinutes();
  minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;

  return `${day} ${month} в ${hour}:${minutes}`;
};
