// showAllert функция
const TIME_OF_SHOW_ALERT = 3000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.top = '0';
  alert.style.left = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = '#ff4e4e';
  alert.style.fontSize = '20px';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, TIME_OF_SHOW_ALERT);
};

//сообщение об успешной или неудачной отправки формы
function showSuccessMessage() {
  console.log('Успешно отправлено');
}

const showErrorMessage = () =>{
  console.log('Произошла ошибка');
};

export {showSuccessMessage, showErrorMessage, showAlert};
