const COMMENTS_PER_PORTION = 5;

const bigPictureElement = document.querySelector('.big-picture'); //модалка
const commentsListElement = bigPictureElement.querySelector('.social__comments'); //список комментов
const commentItemElement = bigPictureElement.querySelector('.social__comment'); //один комментарий
const commentsCountElement = bigPictureElement.querySelector('.social__comment-count'); //количество коментов "5 из"
const commentsAllElement = bigPictureElement.querySelector('.comments-count'); //всего комментариев "125"
const bodyElement = document.querySelector('body');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader'); //кнопка загрузить еще 5 комментариев
const closeButtonClick = bigPictureElement.querySelector('.big-picture__cancel');//кнопка закрыть

let comments = [];
let commentsShown = 0;

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
  comment.queerySelector('.social__text').textContent = message;

  return comment;
};

//функция заполнения массива комментариев
const renderComments = (comments) => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
   }
  else {
    commentsLoaderElement.classList.remove('hidden');
    }

  commentsCountElement.textContent = `${commentsShown} из ${commentsAllElement.textContent} комментариев`;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown.length; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }
  commentsListElement.append(fragment);
};

// функция для закрытия модального окна
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
};

// функция для  закрытия модального окна (Esc)
function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

//функция для закрытия фото при нажатии кнопки
const onCancelTargetClick = () => {
  closeBigPicture();
};

//функция на кнопку по добавлению комментариев
const onCommentsLoadClick = (comments) => {
  renderComments(comments);
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
  commentsListElement.innerHTML = '';
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(data);
  comments = data.comments;
  commentsAllElement.textContent = data.comments.length;
  onCommentsLoadClick(comments);
};

closeButtonClick.addEventListener('click', onCancelTargetClick);
commentsLoaderElement.addEventListener('click', onCommentsLoadClick);

export { openBigPicture };
