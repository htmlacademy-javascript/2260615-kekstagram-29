import { getAllPhotoByUsers } from './data.js';
import { renderThumbnails } from './thumbnail.js';

renderThumbnails(getAllPhotoByUsers());
