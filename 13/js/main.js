import { renderGallery } from './gallery.js';
import { addHandlerToListener, addHandlerToForm } from './form.js';
import { getData } from './load.js';
import { showAlert } from './message.js';
import { debounce } from './util.js';
import { initFilter, getFilteredByPictires } from './filters.js';

const toDoGetData = getData(renderGallery, showAlert);
const debounceRenderGalery = debounce(renderGallery);

initFilter(toDoGetData, debounceRenderGalery);

addHandlerToForm();

addHandlerToListener();
