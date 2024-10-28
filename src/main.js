

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabay-api';
import { renderGallery, clearGallery } from './render-functions';

let lightbox = new SimpleLightbox('.gallery a');

document.querySelector('#search-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(query);
    renderGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Failed to load images.',
    });
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(isLoading) {
  const loader = document.querySelector('.loader');
  loader.style.display = isLoading ? 'block' : 'none';
}
