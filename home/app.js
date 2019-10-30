import images from './data/images.js';
import htmlToDOM from './util/html-to-DOM.js';
import renderGalleryCard from './home/render-gallery-card.js';

const card = document.querySelector('.gallery-cards');

images.forEach(image => {
    const htmlString = renderGalleryCard(image);

    const dom = htmlToDOM(htmlString);

    card.appendChild(dom);

});
