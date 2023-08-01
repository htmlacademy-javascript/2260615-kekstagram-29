import { renderThumbnails } from './thumbnail.js';
import { openBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');
let pictures = [];

const addToRenderGallery = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (pictureItem) => pictureItem.id === +thumbnail.dataset.thumbnailId
  );
  openBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures);
  container.addEventListener('click', addToRenderGallery);
};

export { renderGallery };
