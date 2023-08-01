const PICTURES_COUNT = 10;
const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilterElement = Filters.DEFAULT;
let pictures = [];

//функция для определения наиболее популярных фотографий
const sortByMoreDiscissed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

//функция для получения случайного значения
const sortByRandomly = () => Math.random() - 0.5;

//функция для получения характеристик для фильтра
const getFilteredByPictires = () => {
  switch (currentFilterElement) {
    case Filters.RANDOM:
      return [...pictures].sort(sortByRandomly).slice(0, PICTURES_COUNT);
    case Filters.DISCUSSED:
      return [...pictures].sort(sortByMoreDiscissed);
    case Filters.DEFAULT:
      return [...pictures];
  }
};

//функция для изменения фильтра при клике
const setOnFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {

    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilterElement) {
      return;
    }

    const filterElementActive = filterElement.querySelector('.img-filters__button--active');
    filterElementActive.classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilterElement = clickedButton.id;
    callback(getFilteredByPictires());
  });
};

//функция инициализации фильтров
const initFilter = (loadedPictures, callback) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(callback);
};

export { initFilter, getFilteredByPictires, setOnFilterClick };
