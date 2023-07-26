import { getAllPhotoByUsers } from './data.js';
import { renderGallery } from './gallery.js';
import { openModalFormScript, setUserFormSubmit, closeFormModal } from './form.js';

openModalFormScript();
renderGallery(getAllPhotoByUsers());

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos);
  });

setUserFormSubmit(closeFormModal);
