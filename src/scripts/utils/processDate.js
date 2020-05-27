export default function processDate(date) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  let processedDate = date.split('T')[0];
  processedDate = processedDate.split('-');

  return `${processedDate[2]} ${months[Number.parseInt(processedDate[1]) - 1]} ${processedDate[0]}`;
}
