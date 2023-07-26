const SCALE_STEP = 25; //to do (remove)
const MIN_SCALE = 25; //to do (remove)
const MAX_SCALE = 100; //to do (remove)
const DEFAUL_SCALE = 100; //to do (remove)

const modalElement = document.querySelector('.img-upload');
const scaleValueField = modalElement.querySelector('.scale__control--value');
const smallerButton = modalElement.querySelector('.scale__control--smaller');
const biggerButton = modalElement.querySelector('.scale__control--bigger');
const imageElement = modalElement.querySelector('.img-upload__preview img'); //to do (remove)

//функция для изменения масштаба изображения
const scaleValue = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleValueField.value = `${value}%`;
};

//функция для кнопки уменьшения массштаба изображения
const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValueField.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    scaleValue(MIN_SCALE);
  } else {
    scaleValue(newValue);
  }
};

//функция для кнопки увеличения массштаба изображения
const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValueField.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    scaleValue(MAX_SCALE);
  } else {
    scaleValue(newValue);
  }
};

//функция для сброса значения масштаб
const resetScale = () => scaleValue(DEFAUL_SCALE); //to do

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };
