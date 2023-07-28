//import { getAllPhotoByUsers } from './data.js';
import { renderGallery } from './gallery.js';
import { addHandlerToListener, addHandlerToForm, addValidatorToForm } from './form.js';
import { getData } from './load.js';
import { showAlert } from './message.js';

getData(renderGallery, showAlert);
addValidatorToForm();
addHandlerToForm();
addHandlerToListener();
