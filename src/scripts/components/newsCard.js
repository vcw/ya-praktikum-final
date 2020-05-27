import DateExtended from '../utils/dateExtended.js';

export default class NewsCard {
  constructor(props) {
    this.props = props; // { sourceName, title, description, publishedAt, urlToImage }
  }

  processDate(date) {
    const extDate = new DateExtended(date);

    const day = extDate.getDate();
    const month = extDate.getMonthInRussianGenetive();
    const year = extDate.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  makeNewsCard() {
    // импортируем шаблон
    let template = document.querySelector('.news-card-template');
    template = document.importNode(template.content, true);

    // Задаём атрибуты для изображения
    const imgContainer = template.querySelector('.card__image');
    imgContainer.setAttribute('src', this.props.urlToImage);
    imgContainer.setAttribute('alt', this.props.title);

    // Приводим дату к нужному формату и записываем её в элемент
    const date = this.processDate(this.props.publishedAt);
    template.querySelector('.card__date').textContent = date;

    // Заголовок
    template.querySelector('.card__title').textContent = this.props.title;

    // Описание
    template.querySelector('.card__description').textContent = this.props.description;

    // Источник
    template.querySelector('.card__source').textContent = this.props.sourceName;

    return template;
  }
}