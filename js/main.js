import { getAllPhotoByUsers } from './data.js';
import { renderGallery } from './gallery.js';
import { openModalFormScript } from './form.js';

renderGallery(getAllPhotoByUsers());
openModalFormScript();
