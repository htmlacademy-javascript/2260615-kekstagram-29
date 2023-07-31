import { initEffects, resetEffects } from './effects.js';
import { resetScale } from './scale.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { sendData } from './load.js';

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTEG_COUNT = 5;

const textOfError = {
  NOT_VALID_TAGS: 'Неправильная форма ввода',
  NOT_VALID_COUNT: `Максимум ${MAX_HASHTEG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Повторяющиеся хэштеги',
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...',
};

const bodyElement = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlayForm = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel');
const uploadFile = form.querySelector('.img-upload__input');
const textHashtags = form.querySelector('.text__hashtags');
const textComments = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

//функция пристин задает правила для form
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

/**
 * функция для перевода строки в правильную форму
 * @param {string} tagString строка введенных данных
 * @param возвращает строку в правильной форме
 */
const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

//проверка на валидность строки с хэштегом
const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

//проверка на количество хэштегов не более 5
const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTEG_COUNT;

//проверка уникальность хэштегов
const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

//добавление проверки в pristin на валидность
pristine.addValidator(
  textHashtags,
  hasValidTags,
  textOfError.NOT_VALID_TAGS,
  2,
  true
);

////добавление проверки в pristin на количество
pristine.addValidator(
  textHashtags,
  hasValidCount,
  textOfError.NOT_VALID_COUNT,
  3,
  true
);

//добавление проверки в pristine на уникальность
pristine.addValidator(
  textHashtags,
  hasUniqueTags,
  textOfError.NOT_UNIQUE,
  1,
  true
);

//добавления валидатора для форм
//const addValidatorToForm = () => pristine();
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
  resetScale();
  resetEffects();
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
  initEffects();
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

//функция для блокировки кнопки отправки формы при не валидности
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

//функция для разблокировки кнопки отправки формы при валидности
const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

//хэндлер
const addHandlerToForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();

    if (!pristine.validate()) {
      blockSubmitButton();
      showErrorMessage();
    } else {
      unBlockSubmitButton();
      sendData(new FormData(form),
        () => {
          showSuccessMessage();
        },
      );
    }
    closeFormModal();
  });
};

//открытие модального окна формы
const addHandlerToListener = () => {
  uploadFile.addEventListener('change', onOpenFormModal);
};

export { addHandlerToListener, addHandlerToForm, closeFormModal };
