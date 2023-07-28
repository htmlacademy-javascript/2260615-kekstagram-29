import { renderGallery } from './gallery.js';
import { addOverlayListener, blockSubmitButton, unBlockSubmitButton, closeFormModal, pristine } from './form.js';
import { getData, sendData } from './load.js';
import { showSuccessMessage, showErrorMessage, showAlert } from './message.js';

const setOnFormSubmit = async (evt) => {
  evt.preventDefault();

  if (!pristine.validate()) {
    blockSubmitButton();
    try {
      await sendData(new FormData(evt.target));
      showSuccessMessage();
      closeFormModal();
    } catch {
      showErrorMessage();
    }
    unBlockSubmitButton();
  }
};

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

addOverlayListener();
setOnFormSubmit();
