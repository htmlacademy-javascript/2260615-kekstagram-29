import { renderGallery } from './gallery.js';
import { addHandlerToListener, addHandlerToForm } from './form.js';
import { getData } from './load.js';
import { showAlert } from './message.js';

getData(renderGallery, showAlert);

addHandlerToForm();

addHandlerToListener();
