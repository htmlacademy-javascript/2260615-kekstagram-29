//находим шаблон для изображения фотографии случайного пользователя
const allTemplate = document.querySelector('#picture').content;
const thumbnailTemplate = allTemplate.querySelector('.picture');

//находим контейнер для фотографий других пользователей
const container = document.querySelector('.pictures');

//
/**
 * функция для создания шаблона
 * @param {object} берет объект со свойствами {url, description, likes, comments, id} - (деструктуризация)
 * @param {object} thumbnail - возвращает объект заполненный свойствами
 */
const createThumbnail = ({ url, description, likes, comments, id }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const pictureImg = thumbnail.querySelector('.picture__img');

  pictureImg.src = url;
  pictureImg.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

//функция для заполнения шаблона
const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails};
