const bodyElement = document.querySelector('body');
const form = document.querySelector('img-upload__form');
const overlayForm = document.querySelector('img-upload__overlay');
const closeForm = document.querySelector('img-upload__cancel');
const uploadFile= document.querySelector('img-upload__input');

//const pristine = new Pristine(form, {
//  classTo: 'img-upload__overlay',
//  errorTextParent: 'img-upload__overlay',
//});

const closeFormModal = () => {
  overlayForm.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const openFormModal = () => {
  overlayForm.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeForm.addEventListener('click', closeFormModal)
}



function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
}

const openModalFormScript = () => uploadFile.addEventListener('change', openFormModal);

export { openModalFormScript };
