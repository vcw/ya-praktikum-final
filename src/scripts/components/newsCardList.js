export default class NewsCardList {
  constructor(cards, container) {
    this._cards = cards;
    this._container = container;
    this._nextIndex = 0;

    
    const newsTemplate = document.querySelector('.news-template');
    this._newsTemplate = document.importNode(newsTemplate.content, true);

    this._cardsContainer = this._newsTemplate.querySelector('.results__cards');

    this._button = this._newsTemplate.querySelector('.results__button');
    
    const notFoundTemplate = document.querySelector('.not-found-template');
    this._notFoundTemplate = document.importNode(notFoundTemplate.content, true);

    this.render = this.render.bind(this);
    // this.renderNext = this.renderNext.bind(this);

    this._button.addEventListener('click', this.renderNext.bind(this));
  }

  _clearContainer() {
    this._container.querySelector('.results').innerHTML = '';
  }

  _getNextCards() {
    const pendingCards = this._cards.slice(this._nextIndex, this._nextIndex + 3);
    this._nextIndex += 3;
    return pendingCards;
  }

  _thereAreCardsRemaining() {
    return this._cards.length - this._nextIndex > 0;
  }

  _append(cards) {
    cards.forEach(card => {
      this._cardsContainer.appendChild(card.makeNewsCard());
    })
  }

  _toggleButton(bool) {
    // true -- отобразить, false -- скрыть
    this._button.style.display = (bool) ? 'block' : 'none';
  }

  _toggleNotFound(bool) {
    this._container.querySelector('.results').appendChild(this._notFoundTemplate);
    this._container.style.display = 'block';
  }

  render() {
    this._clearContainer();
    const cards = this._getNextCards();
    if (cards.length > 0) {
      this._append(cards);
      this._toggleButton(this._thereAreCardsRemaining());
      this._container.style.display = 'block';
      this._container.querySelector('.results').appendChild(this._newsTemplate);
    } else {
      this._toggleNotFound(true);
    }
  }

  renderNext() {
    this._append(this._getNextCards());
    this._toggleButton(this._thereAreCardsRemaining());
  }
}