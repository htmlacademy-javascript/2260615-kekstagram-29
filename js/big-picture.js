const bigPictureElement = document.querySelector('.big-picture'); //модалка
const commentsListElement = bigPictureElement.querySelector('.social__comments'); //список комментов
const commentItemElement = bigPictureElement.querySelector('.social__comment'); //один комментарий
const commentsCountElement = bigPictureElement.querySelector('.social__comment-count'); //количество коментов "5 из"
const commentsAllElement = bigPictureElement.querySelector('.comments-count'); //всего комментариев "125"
const bodyElement = document.querySelector('body');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader'); //кнопка загрузить еще 5 комментариев
const closeButtonClick = bigPictureElement.querySelector('.big-picture__cancel');//кнопка закрыть

/**
 * функция для создания коментария
 * @param {object} берет объект со свойствами {avatar, name, message} - (деструктуризация)
 * @param {object} comment - возвращает объект комментарий
 */
const createComment = ({ avatar, name, message }) => {
  const comment = commentItemElement.cloneNode(true);
  const avatarPicture = comment.querySelector('.social__picture');
  avatarPicture.src = avatar;
  avatarPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

//функция заполнения массива комментариев
const renderComments = (comments) => {
  commentsListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
};

// функция для закрытия модального окна
const closeBigPicture = () => {
  bigPictureElement.classList.add('.hidden');
  bodyElement.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

// функция для  закрытия модального окна (Esc)
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

//функция для закрытия фото при нажатии кнопки
const onDocumentTargetClick = () => {

  closeBigPicture();
};

//функция заполнения деталей рисунка
const renderPictureDetails = ({ url, likes, deskription }) => {
  const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
  bigPictureImg.src = url;
  bigPictureImg.alt = deskription;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = deskription;
};

//функция для открытия большой фотографии
const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  //commentsCountElement.classList.add('.hidden');
  //commentsLoaderElement.classList.add('.hidden');
  document.addEventListener('click', onDocumentKeydown);
  document.addEventListener('click', onDocumentTargetClick);

  renderPictureDetails(data);
  renderComments(data.comments);
};

closeButtonClick.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
