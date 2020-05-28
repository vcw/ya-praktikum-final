import DateExtended from './dateExtended.js';

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

  getLastSevenDates() {
    return [6, 5, 4, 3, 2, 1, 0].map(offset => {
      const date = new DateExtended();
      return date.substractDays(offset);
    });
  }

  getDatesWithMentions() {
    return this._articles.reduce((accumulator, current) => {
      const date = new DateExtended(current.publishedAt).getStringDate();
      if (accumulator[date]) {
        accumulator[date] += 1;
        return accumulator;
      } else {
        accumulator[date] = 1;
        return accumulator;
      }
    }, {});
  }

  getLastWeekStats() {
    const dates = this.getLastSevenDates();
    const datesWithMentions = this.getDatesWithMentions();

    return dates.map(date => {
      const stringDate = date.getStringDate();
      const mentionsAtCurrentDay = datesWithMentions[stringDate];
      
      const formattedDate = `${date.getDate()}, ${date.getTwoLetterDayInRussian()}`;
      const mentionsNumber = (mentionsAtCurrentDay) ? mentionsAtCurrentDay : 0;
      const mentionsPerCent = mentionsNumber / this.getAllMentions() * 100;
      const mentionsPerCentRoundedUp = Number.parseInt(mentionsPerCent);
      
      return {
        date: formattedDate,
        mentions: mentionsPerCentRoundedUp
      }
    });
  }
}
