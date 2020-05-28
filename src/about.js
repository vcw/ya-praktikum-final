import './styles/global.css';
import './blocks/fonts/fonts.css';
import './blocks/container/container.css';

import './styles/simple-header.js';

import './blocks/title/title.css';
import './blocks/container/__info/container__info.css';
import './blocks/info/__text/info__text.css';

import './styles/about.js';
import './styles/stack.js'
import './styles/footer.js';

import Glide from '@glidejs/glide';

import Github from './scripts/models/github.js';
import Commit from './scripts/components/commit.js';
import CommitList from './scripts/components/commitsList.js';

import '@/../node_modules/@glidejs/glide/dist/css/glide.core.min.css';

import '@/blocks/subtitle/subtitle.css'
import '@/blocks/title/title.css'
import '@/blocks/title/_size_m/title_size_m.css';

import './styles/commits.js';

import '@/blocks/glide/glide.css';
import '@/blocks/glide/__slide/glide__slide.css';
import '@/blocks/glide/__bullets/glide__bullets.css';
import '@/blocks/glide/__bullet/glide__bullet.css';
import '@/blocks/glide/__bullet/--active/glide__bullet--active.css';

const gh = new Github();
gh.getCommits('vcw', 'ya-praktikum-final')
  .then(commits => commits.map(commit => {
      const commitComponent = new Commit(commit);
      return commitComponent.makeCommitSlide();
    }))
    .then(slides => {
      const cl = new CommitList(slides, document.querySelector('.glide'));
      cl.placeSlidesWithBullets();

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
    });