import DateExtended from '../utils/dateExtended.js';

export default class Commit {
  constructor(props) {
    this.props = props; // { name, email, date, message, avatar }
  }

  makeCommitSlide() {
    // импортируем шаблон
    let template = document.querySelector('.commit-template');
    template = document.importNode(template.content, true);

    // заполняем шаблон
    template.querySelector('.commits__img').src = this.props.avatar;
    template.querySelector('.commits__name').textContent = this.props.name;
    template.querySelector('.commits__email').textContent = this.props.email;
    template.querySelector('.commits__message').textContent = this.props.message;

    // преобразуем дату и заполняем её в шаблон
    const date = new DateExtended(this.props.date);
    template.querySelector('.commits__date').textContent = date.getFormattedDate();

    return template;
  }
}