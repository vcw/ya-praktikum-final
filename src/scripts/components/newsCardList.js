export default class NewsCardList {
  constructor(cards, element) {
    this.cards = cards;
    this.element = element;

    this.placeCards = this.placeCards.bind(this);
  }

  _append(container, array) {
    array.forEach(element => {
      container.appendChild(element);
    })
  }

  placeCards() {
    this._append(this.element, this.cards);
  }
}