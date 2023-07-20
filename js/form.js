const VALID_SYMBOLS = 2;
const MAX_HASHTEG_COUNT = 5;

const bodyElement = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlayForm = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel');
const uploadFile = form.querySelector('.img-upload__input');
const textHashtags = form.querySelector('.text__hashtags');
const textComments = form.querySelector('.text__description');

//функция пристин задает правила для form
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error', // to do css
});

/**
 * функция для создания массива
 * @param {string} tagString строка введенных данных
 * @param возвращает массив в правильной форме
 */
const normalizeTags = (tagString) => tagString
  .trin()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTEG_COUNT;

/**
 * функция для проверки находится ли фокус на текстовом поле
 * @param {string} field текстовое поле для проверки
 * @param {boolean} возвращает есть ли фокус на элементе
 */
const isFocusField = (field) => document.activeElement === field;

//функция для закрытия модального окна
const closeFormModal = () => {
  form.reset();
  pristine.reset();
  overlayForm.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

//функция открытия модального окна
const openFormModal = () => {
  overlayForm.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeForm.addEventListener('click', closeFormModal);
};

//непонятная функция
const onOpenFormModal = () => {
  openFormModal();
};

// функция для  закрытия модального окна (Esc) если нету фокуса на полях хэштега и комментариев
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isFocusField(textHashtags) && !isFocusField(textComments)) {
    evt.preventDefault();
    closeFormModal();
  }
}

//тоже не понятно зачем
const onCloseFormModal = () => {
  closeFormModal();
};

const openModalFormScript = () => {
  uploadFile.addEventListener('change', onOpenFormModal);
};

export { openModalFormScript };
