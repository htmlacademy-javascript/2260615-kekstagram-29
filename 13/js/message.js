import { isEscapeKey } from './util.js';
const TIME_OF_SHOW_ALERT = 5000;

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

// функция для сообщения о неудачной загрузки
const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.top = '0';
  alert.style.left = '0';
  alert.style.right = '0';
  alert.style.padding = '20px 3px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = '#ff4e4e';
  alert.style.fontSize = '20px';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, TIME_OF_SHOW_ALERT);
};

//функция закрытия на кнопку esc
const onMessageEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

//функция закрытия на клик вне поля
const onBodyClick = (evt) => {
  if (evt.target === document.querySelector('.error, .success')) {
    evt.preventDefault();
    closeMessage();
  }
};

//функция закрытия формы
function closeMessage () {
  const messageElement = document.querySelector('.error, .success');
  messageElement.remove();
  document.addEventListener('keydown', onMessageEscape);
  document.removeEventListener('click', onBodyClick);
}

//функция отправки формы
const showMessage = (messageElement, closeButtonClass) => {
  document.body.append(messageElement);
  document.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onMessageEscape);
  messageElement.querySelector(closeButtonClass).addEventListener('click', closeMessage);
};

//сообщение об успешной отправки формы
const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

//сообщение об ошибки при отправки формы
const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};

export {showSuccessMessage, showErrorMessage, showAlert};
