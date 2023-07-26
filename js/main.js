import { getAllPhotoByUsers } from './data.js';
import { renderGallery } from './gallery.js';
import { openModalFormScript, setUserFormSubmit, closeFormModal } from './form.js';
import { getData, sendData } from './load.js';

const showAllert = (err) => {
  console.log(err);
};

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    openModalFormScript();
    showSuccessMessage();
    }  catch {
      showErrorMessage();
  }
});


try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAllert(err.message);
}

openModalFormScript();

setUserFormSubmit(closeFormModal);
