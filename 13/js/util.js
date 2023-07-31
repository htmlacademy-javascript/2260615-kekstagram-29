/**
  * Функция для создания случайного числа в диапозоне от а до b
  * @param {int} a - нижняя граница диапозона
  * @param {int} b - верхняя граница диапозона
  * @param {int} result - возвращает случайное число в диапозоне от а до b
 */
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeOutID;
  return (...rest) => {
    clearTimeout(timeOutID);
    timeOutID = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, debounce};
