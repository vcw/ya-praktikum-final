import './styles/global.css';
import './blocks/fonts/fonts.css';
import './blocks/container/container.css';
import './blocks/header/header.css';
import './blocks/header/_theme_simple/header_theme_simple.css';
import './blocks/header/__container/header__container.css';
import './blocks/header/__logo/header__logo.css';
import './blocks/header/__logo/_theme_simple/header__logo_theme_simple.css';
import './blocks/header/__navlist/header__navlist.css';
import './blocks/header/__navlist-item/header__navlist-item.css';
import './blocks/header/__navlist-item/_active_simple/header__navlist-item_active_simple.css';
import './blocks/header/__navlist-link/header__navlist-link.css';
import './blocks/header/__navlist-link/_theme_simple/header__navlist-link_theme_simple.css';

import './blocks/container/__about/container__about.css';
import './blocks/title/title.css';
import './blocks/title/_size_m/title_size_m.css';
import './blocks/subtitle/subtitle.css';

import './blocks/container/__analytics/container__analytics.css';
import './blocks/text/text.css';
import './blocks/analytics/analytics.css';
import './blocks/analytics/__nav/analytics__nav.css';
import './blocks/analytics/__numbers/analytics__numbers.css';
import './blocks/analytics/__row/analytics__row.css';
import './blocks/analytics/__heading/analytics__heading.css';
import './blocks/analytics/__date/analytics__date.css';
import './blocks/analytics/__bar/analytics__bar.css';
import './blocks/analytics/__scale/analytics__scale.css';
import './blocks/analytics/__scale-bar/analytics__scale-bar.css';

import './blocks/container/__footer/container__footer.css';
import './blocks/footer/footer.css';
import './blocks/footer/__navlist/footer__navlist.css';
import './blocks/footer/__navlist-link/footer__navlist-link.css';
import './blocks/footer/__contacts/footer__contacts.css';
import './blocks/footer/__contacts-item/footer__contacts-item.css';
import './blocks/footer/__copyright/footer__copyright.css';
import './blocks/footer/__navigation/footer__navigation.css';

import Stats from './scripts/utils/stats.js';

const keyword = window.sessionStorage.getItem('keyword');
const cards = JSON.parse(window.sessionStorage.getItem('articles'));

if (keyword && cards) {
  const stats = new Stats(cards, keyword);

  const numbers = document.querySelector('.container__about');
  
  numbers.querySelector('.title').textContent = `Вы спросили: «${keyword}»`;
  numbers.querySelector('.analytics__all').textContent = stats.getAllMentions();
  numbers.querySelector('.analytics__titles').textContent = stats.getTitleMentions();
  
  const mentionsStats = stats.getLastWeekStats();

  [0, 1, 2, 3, 4, 5, 6].forEach(index => {
    const currentDay = mentionsStats[index];
    const row = document.querySelector(`.row__${index}`);
    row.querySelector('.analytics__date').textContent = currentDay.date;
    const bar = row.querySelector('.analytics__bar');
    bar.style.width = `${currentDay.mentions}%`;
    bar.textContent = currentDay.mentions;
  });
}
