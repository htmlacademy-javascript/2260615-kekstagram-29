const sliderEffects = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img'); //to do (remove)
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const effectValueElement = modalElement.querySelector('.effect-level__value');
const sliderEffectsList = modalElement.querySelector('.effects__list');
//const effectsElement = modalElement.querySelector('.img-upload__effects');
/**
 * Функция по изменению фильтров слайдера
 * @param {object} effect - имя выбраного фильтра
 * @param {object} value - значение ползунка выбраного фильтра
 * @param {object} unit - единица измерения выбраного фильтра, по умолчанию отсутствует
 */
function changeSliderFilters(effect, value, unit = '') {
  effectValueElement.value = value;
  imageElement.style.filter = `${effect}(${value}${unit})`;
}

/**
 * Функция по отображению слайдера
 * @param {object} effects - имя выбраного фильтра
 */
function showSlider(effects) {
  sliderContainerElement.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    start: effects.max,
    step: effects.step,
    connect: 'lower',
    range: {
      min: effects.min,
      max: effects.max
    },
  });
  sliderElement.noUiSlider.on('update', () => {
    const sliderValue = sliderElement.noUiSlider.get();
    changeSliderFilters(effects.name, sliderValue, effects.unit);
  });
}

/**
 * Функция для сброса эффектов фильтра
 */
function resetSliderEffects() {
  sliderContainerElement.classList.add('hidden');
  imageElement.style.filter = '';
  effectValueElement.value = '';
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
}

/**
 * Функция по изменению эффектов при использовании бегунка
 * @param {click} evt - объект события
 */
function onChangeEffect (evt) {
  resetSliderEffects();
  const effects = sliderEffects[evt.target.value];
  if (effects.name !== 'none') {
    showSlider(effects);
  }
}

/**
 * Функция для запуска работы кнопок масштабирования и слайдера
 */
function initSlider() {
  sliderEffectsList.addEventListener('change', onChangeEffect);
}

/**
 * Функция возвращающая размер фото и значение фильтра по умолчанию
 */
function resetUserPhotoEffects() {
  resetSliderEffects();
  sliderEffectsList.removeEventListener('change', onChangeEffect);
}

export { initSlider, resetUserPhotoEffects };
