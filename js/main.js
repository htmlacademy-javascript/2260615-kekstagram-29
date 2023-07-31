import { renderGallery } from './gallery.js';
import { addHandlerToListener, addHandlerToForm } from './form.js';
import { getData } from './load.js';
import { showAlert } from './message.js';
import { debounce } from './util.js';
import { initFilter } from './filters.js';

const cb1 = (dataPictures) => {
  renderGallery(dataPictures);
  initFilter(dataPictures, debounce(renderGallery));
};

getData(cb1, showAlert);

addHandlerToForm();

addHandlerToListener();
