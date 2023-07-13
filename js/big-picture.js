const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('')
// const bodyElement = bigPictureElement.querySelector('body');

/**
 * функция для создания коментария
 * @param {object} берет объект со свойствами {avatar, name, message} - (деструктуризация)
 * @param {object} comment - возвращает объект комментарий
 */
const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneCode(true);
  const avatarPicture = comment.querySelector('.social__picture');
  avatarPicture.src = avatar;
  avatarPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

//функция заполнения массива комментариев
const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });
};

// функция для открытия большой фотографии
const closeBigPicture = () => {
  bigPictureElement.classList.add('.hidden');
  bigPictureElement.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

// функция для обозначения кнопки закрытия (Esc)
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

//функция для закрытия фото при нажатии кнопки
const onCancelButtonClick = () => {
  closeBigPicture();
};

//функция заполнения деталей рисунка
const renderPictureDetails = ({ url, likes, deskription }) => {
  const bigPictureImg = bigPictureElement.querySelector('big-picture__img img');
  bigPictureImg.src = url;
  bigPictureImg.alt = deskription;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = deskription;
};

//функция для открытия большой фотографии
const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bigPictureElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('click', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

export {openBigPicture};
