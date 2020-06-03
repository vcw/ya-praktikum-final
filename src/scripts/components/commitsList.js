export default class CommitsList {
  constructor(slides, element) {
    this.slides = slides; // Cписок коммитов
    this.element = element // Элемент, к которому прикрепляем карточки и кнопки
    this.bullets = this._createBullets();
    this.placeSlidesWithBullets = this.placeSlidesWithBullets.bind(this);
  }

  _createBullets() {
    const template = document.querySelector('.bullet-template');

    const bullets = this.slides.map((slide, index) => {
      const bullet = document.importNode(template.content, true);
      bullet.querySelector('.glide__bullet').setAttribute('data-glide-dir', '=' + index);

      return bullet;
    });

    return bullets;
  }

  _append(selector, array) {
    const container = this.element.querySelector(selector);
    array.forEach(element => {
      container.appendChild(element);
    })
  }

  placeSlidesWithBullets() {
    this._append('.glide__slides', this.slides);
    this._append('.glide__bullets', this.bullets);
  }
}