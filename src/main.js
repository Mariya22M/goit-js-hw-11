import { ImageSearch } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js'

const form = document.querySelector('form');

const source = 'https://pixabay.com/api/?';
const options = new URLSearchParams({
	key: '46749030-b6cef6a6b69e043ecf4444c1b',
	image_type: 'photo',
	orientation: 'horizontal'
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
	ImageSearch(source, options);
});

document.addEventListener('imagesFetched', (event) => {
    renderGallery(event.detail);
});