//находим шаблон для изображения фотографии случайного пользователя
const allTemplate = document.querySelector('#picture').content;
const trumbnailTemplate = allTemplate.querySelector('.picture');

//находим контейнер для фотографий других пользователей
const container = document.querySelector('.pictures');

//функция для создания шаблона
const createTrumbnail = ({ url, description, likes, comments }) => {
  const trumbnail = trumbnailTemplate.cloneNode(true);
  const pictureImg = trumbnail.querySelector('.picture__img');

  pictureImg.src = url;
  pictureImg.alt = description;
  trumbnail.querySelector('.picture__likes').textContent = likes;
  trumbnail.querySelector('.picture__comments').textContent = comments.length;

  return trumbnail;
};

//функция для заполнения шаблона
const renderTrumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const trumbnail = createTrumbnail(picture);
    fragment.append(trumbnail);
  });
  container.append(fragment);
};

export {renderTrumbnails};


