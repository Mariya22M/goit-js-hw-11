
export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}" class="gallery__item">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery__image"/>
          <div class="gallery__info">
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </a>`
    )
    .join('');
  gallery.innerHTML = markup;
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
