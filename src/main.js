// main.js

import { fetchImages } from './pixabay-api.js';
import { renderGallery, clearGallery } from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  clearGallery();
  loader.classList.add('visible');

  try {
    const images = await fetchImages(query, page);
    renderGallery(images);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ message: "Sorry, no images were found. Try another search." });
  } finally {
    loader.classList.remove('visible');
  }
});
