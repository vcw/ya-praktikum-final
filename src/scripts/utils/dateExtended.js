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
}
