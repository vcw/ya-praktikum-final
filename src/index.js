import './styles/global.css';
import './blocks/fonts/fonts.css';
import './blocks/container/container.css';

import './styles/main-header.js'
// import './blocks/container/__header/container__header.css';
// import './blocks/header/header.css';
// import './blocks/header/__container/header__container.css';
// import './blocks/header/__logo/header__logo.css';
// import './blocks/header/__navlist/header__navlist.css';
// import './blocks/header/__navlist-item/header__navlist-item.css';
// import './blocks/header/__navlist-item/_active/header__navlist-item_active.css';
// import './blocks/header/__navlist-link/header__navlist-link.css';

import './blocks/container/__search/container__search.css';
import './blocks/search/__title/search__title.css';
import './blocks/search/__description/search__description.css';
import './blocks/search/__form/search__form.css';
import './blocks/search/__field/search__field.css';
import './blocks/search/__button/search__button.css';
import './blocks/button/button.css';
import './blocks/button/_theme_simple/button_theme_simple.css';

import './blocks/title/title.css';
import './blocks/title/_size_m/title_size_m.css';
import './blocks/container/__results/container__results.css';
import './blocks/results/results.css';
import './blocks/results/__header/results__header.css';
import './blocks/results/__link/results__link.css';
import './blocks/results/__cards/results__cards.css';
import './blocks/card/card.css';
import './blocks/card/__image/card__image.css';
import './blocks/card/__title/card__title.css';
import './blocks/card/__description/card__description.css';
import './blocks/card/__source/card__source.css';
import './blocks/card/__content/card__content.css';
import './blocks/results/__button/results__button.css';
import './blocks/results/__not-found-img/results__not-found-img.css';
import './blocks/results/__not-found-title/results__not-found-title.css';
import './blocks/results/__not-found-subtitle/results__not-found-subtitle.css';
import './blocks/subtitle/subtitle.css';
import './blocks/circle-preloader/circle-preloader.css';
import './blocks/results/__preloader-text/results__preloader-text.css';

import './blocks/container/__about/container__about.css';
import './blocks/about/about.css';
import './blocks/about/__photo/about__photo.css';
import './blocks/about/__info/about__info.css';
import './blocks/about/__title/about__title.css';

import './blocks/container/__footer/container__footer.css';
import './blocks/footer/footer.css';
import './blocks/footer/__navlist/footer__navlist.css';
import './blocks/footer/__navlist-link/footer__navlist-link.css';
import './blocks/footer/__contacts/footer__contacts.css';
import './blocks/footer/__contacts-item/footer__contacts-item.css';
import './blocks/footer/__copyright/footer__copyright.css';
import './blocks/footer/__navigation/footer__navigation.css';



import News from './scripts/models/news.js';
import NewsCard from './scripts/components/newsCard.js';
import NewsCardList from './scripts/components/newsCardList.js';
import DateExtended from './scripts/utils/dateExtended.js';

const API_KEY = '3b4a1ba7f9c947e6a829644748b3bd90';

const news = new News(API_KEY);
const date = new DateExtended().substractDays(6).toISOString().split('T')[0];
const container = document.querySelector('.container__results');

function render() {
  const cardList = new NewsCardList(container);
  let articles = window.localStorage.getItem('articles');
  if (articles) {
    articles = JSON.parse(articles);
    const cards = articles.map(article => new NewsCard(article));
    cardList.addCards(cards);
    cardList.render();
  }
}

function doSearch(keyword) {
  const cardList = new NewsCardList(container);
  cardList.showPreloader()

  news.getNews(keyword, date)
  .then(articles => {
    
    window.localStorage.setItem('articles', JSON.stringify(articles));
    window.localStorage.setItem('keyword', keyword);
    render()
  })
  .catch(error => {
    cardList.showError();
  });
}


const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', event => {
  event.preventDefault();

  const inputField = document.querySelector('.search__field');
  const keyword = inputField.value;

  doSearch(keyword);
})

render();