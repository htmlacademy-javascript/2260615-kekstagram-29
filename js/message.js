const TIME_OF_SHOW_ALERT = 5000;
const TypeOfMessage = {
  SUCCESS: '#008000',
  ERROR: '#ff4e4e',
};

// showAllert функция
const showAlert = (message, type = TypeOfMessage.ERROR) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.top = '0';
  alert.style.left = '0';
  alert.style.right = '0';
  alert.style.padding = '20px 3px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = type;
  alert.style.fontSize = '20px';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, TIME_OF_SHOW_ALERT);
};


//сообщение об успешной или неудачной отправки формы
const showSuccessMessage = () => {
  showAlert('Успешно отправлено', TypeOfMessage.SUCCESS);
};

const showErrorMessage = () =>{
  showAlert('Произошла ошибка');
};

export {showSuccessMessage, showErrorMessage, showAlert};
