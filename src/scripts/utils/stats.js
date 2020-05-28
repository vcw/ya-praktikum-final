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

  _getLastSevenDates() {
    return [6, 5, 4, 3, 2, 1, 0].map(offset => {
      const date = new DateExtended();
      return date.substractDays(offset);
    });
  }

  _getDatesWithMentions() {
    return this._articles.reduce((accumulator, current) => {
      const date = new DateExtended(current.publishedAt).getStringDate();
      if (accumulator[date]) {
        accumulator[date] += 1;
      } else {
        accumulator[date] = 1;
      }
      return accumulator;
    }, {});
  }

  getLastWeekMonth() {
    const dates = this._getLastSevenDates();
    const months = dates.reduce((accumulator, current) => {
      const month = current.getMonth();
      if (accumulator[month]) {
        accumulator[month] += 1;
      } else {
        accumulator[month] = 1; 
      }
      return accumulator;
    }, {});
    const monthNumber = Object.keys(months).reduce((accumulator, current) => {
      const stored = months[accumulator];
      const pending = months[current];

      const eventA = stored < pending;
      const eventB = stored > pending;

      // A | B | return
      // --------------
      // 1 | 0 | accumulator
      // 0 | 1 | current
      // 0 | 0 | current

      return ((eventA && !eventB) || (!eventA && eventB)) ? accumulator : current;
    }, 0)
    
    return new DateExtended().getMonthInRussianNominative(monthNumber);
  }

  getLastWeekStats() {
    const dates = this._getLastSevenDates();
    const datesWithMentions = this._getDatesWithMentions();

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
