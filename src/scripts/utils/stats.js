export default class Stats {
  constructor(cards, keyword) {
    this._articles = cards.map(card => card.props);
    this._keyword = keyword;
  }

  getAllMentions() {
    return this._articles.length;
  }

  getTitleMentions() {
    return this._articles.reduce((accumulator, current) => {
      const regex = new RegExp(this._keyword, 'i');
      return (regex.test(current.title)) ? ++accumulator : accumulator;
    }, 0);
  }
}
