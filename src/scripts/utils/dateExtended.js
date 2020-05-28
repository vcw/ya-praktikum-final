export default class DateExtended extends Date {
  substractDays(quantity) {
    const newDate = this.getDate() - quantity;
    this.setDate(newDate);
    return this;
  }

  getMonthInRussianGenetive() {
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

    return months[this.getMonth()];
  }

  getFormattedDate() {
    const day = this.getDate();
    const month = this.getMonthInRussianGenetive();
    const year = this.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  getStringDate() {
    return this.toISOString().split('T')[0];
  }

  getTwoLetterDayInRussian() {
    const days = [
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
      'вс'
    ]

    return days[this.getDay()];
  }
}
