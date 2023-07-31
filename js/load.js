const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const TextOfError = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз',
};

/**
 * функция для загрузки данных
 * @param {object} route путь
 * @param {object} textOfError сообщение об ошибке
 * @param {object} method способ отправки
 * @param {object} body заголовок
 * @param возвращает результат извлечения данных
 */
const load = (onSuccess, onError) => (route, textOfError, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})

    .then((response) => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then ((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError(textOfError);
    });


//функция получения данных
const getData = (onSuccess, onError) => load(onSuccess, onError)(Route.GET_DATA, TextOfError.GET_DATA);

//функция отправки данных
const sendData = (body, onSuccess, onError) =>
  load(onSuccess, onError)(Route.SEND_DATA, TextOfError.SEND_DATA, Method.POST, body);

export { getData, sendData };
