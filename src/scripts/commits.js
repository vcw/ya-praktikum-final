import Glide from '@glidejs/glide';
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

import '@/blocks/subtitle/subtitle.css'
import '@/blocks/title/title.css'
import '@/blocks/title/_size_m/title_size_m.css';

import '../blocks/container/__commits/container__commits.css';
import '../blocks/commits/commits.css';
import '../blocks/commits/__committer/commit__committer.css';
import '../blocks/commits/__img/commits__img.css';
import '../blocks/commits/__email/commits__email.css';
import '../blocks/commits/__message/commits__message.css';
import '../blocks/commits/__link/commits__link.css';

import '../blocks/glide/glide.css';
import '../blocks/glide/__slide/glide__slide.css';
import '../blocks/glide/__bullets/glide__bullets.css';
import '../blocks/glide/__bullet/glide__bullet.css';
import '../blocks/glide/__bullet/--active/glide__bullet--active.css';


function getCommits() {
  return fetch('https://api.github.com/repos/vcw/ya-praktikum-final/commits')
  .then(response => response.json())
  .then(response => {
    const commits = response.reduce((accumulator, current, index) => {
      if (accumulator.length <= 20) {
        const {name, email, date} = current.commit.committer;
        const message = current.commit.message;
        const avatar = current.author.avatar_url;
        accumulator.push({
          index,
          name,
          email,
          date,
          message,
          avatar
        })
        return accumulator;
      } else {
        return accumulator;
      }
      
    }, [])
    return commits;
  }) 
}

function processDate(date) {
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

  let processedDate = date.split('T')[0];
  processedDate = processedDate.split('-');
  

  return `${processedDate[2]} ${months[Number.parseInt(processedDate[1]) - 1]} ${processedDate[0]}`;
}

function appendCommit(commit) {
  let commitTemplate = document.querySelector('.commit-template');
  commitTemplate = document.importNode(commitTemplate.content, true);

  let bulletTemplate = document.querySelector('.bullet-template');
  bulletTemplate = document.importNode(bulletTemplate.content, true);

  commitTemplate.querySelector('.commits__img').src = commit.avatar;
  commitTemplate.querySelector('.commits__name').textContent = commit.name;
  commitTemplate.querySelector('.commits__email').textContent = commit.email;
  commitTemplate.querySelector('.commits__date').textContent = processDate(commit.date);
  commitTemplate.querySelector('.commits__message').textContent = commit.message;

  bulletTemplate.querySelector('.glide__bullet').setAttribute('data-glide-dir', '=' + commit.index);

  const slides = document.querySelector('.glide__slides');
  const bullets = document.querySelector('.glide__bullets')

  slides.appendChild(commitTemplate);
  bullets.appendChild(bulletTemplate);
}

getCommits()
  .then(commits => {
    for (let commit of commits) {
      appendCommit(commit);
    }

    new Glide('.glide', {
      perView: 3,
      breakpoints: {
        600: {
          perView: 1
        },
        800: {
          perView: 2
        }
      }
    }).mount()
  })