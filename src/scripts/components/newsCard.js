import DateExtended from '../utils/dateExtended.js';

export default class NewsCard {
  constructor(props) {
    this.props = props; // { source, title, description, publishedAt, urlToImage }
  }

  makeNewsCard() {
    // импортируем шаблон
    let template = document.querySelector('.news-card-template');
    template = document.importNode(template.content, true);

    // Задаём атрибуты для изображения, если оно есть
    if (this.props.urlToImage) {
      const imgContainer = template.querySelector('.card__image');
      imgContainer.setAttribute('src', this.props.urlToImage);
      imgContainer.setAttribute('alt', this.props.title);
    }

    // Приводим дату к нужному формату и записываем её в элемент
    const date = new DateExtended(this.props.publishedAt);
    template.querySelector('.card__date').textContent = date.getFormattedDate();

    // Заголовок
    template.querySelector('.card__title').textContent = this.props.title;

    // Описание
    template.querySelector('.card__description').textContent = this.props.description;

    // Источник
    template.querySelector('.card__source').textContent = this.props.source;
    return template;
  }
}