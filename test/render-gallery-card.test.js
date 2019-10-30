import renderGalleryCard from '../home/render-gallery-card.js';

const test = QUnit.test;

QUnit.module('Render Gallery Card');

test('renders html from data', assert => {
    
    const expected = /*html*/`

    <li class="monster-card">
        <h2 class="card-title">Monster Title Here</h2>
        <img class="card-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="Unicorn and Narwhal">
        <p class="horn-count">Number of horns here</p> 
    </li>

    `;

    const html = renderGalleryCard();

    assert.htmlEqual(html, expected);

    
}); 