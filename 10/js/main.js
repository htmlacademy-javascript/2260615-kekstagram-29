import { getAllPhotoByUsers } from './data.js';
import { renderGallery } from './gallery.js';
import { openModalFormScript } from './form.js';

openModalFormScript();
renderGallery(getAllPhotoByUsers());

