import {getRandomInteger, getRandomElements, getIdGenerator} from './util.js';

//текст комментария
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//имя пользователя
const USERS_NAME = ['Илья', 'Вениамин', 'Епилфодор', 'Фридрих', 'Генадий', 'Иларион', 'Федор', 'Дитрих', 'Роберт',
  'Донателло', 'Микеланджело','Рафаэль', 'Володька',
];

//описание фотографий
const DESCRIPTIONS_PHOTO = ['Море', 'Мечты сбываются!', 'А вам слабо?', 'Больше не пью', 'Ничего не помню', 'Как же плохо...',
  'что то пошло не так', 'Вот это прыжок', 'Я снова в травме',
];

//количество загруженных фотографий
const NUMBER_OF_ALL_PHOTO = 25;

//количество лайков
const NumberOfLikes = {
  MIN: 15,
  MAX: 200,
};

//количество комментариев
const NumberOfAllComments = {
  MIN: 0,
  MAX: 30,
};

//Количество аватарок
const NumberOfAllAvatar = {
  MIN: 1,
  MAX: 6,
};

const generatePhotoId = getIdGenerator();
const generatePhotoUrl = getIdGenerator();
const generateCommentsId = getIdGenerator();

/**
  * Функция для создания комментария к фото
  * @param {int} id - идентификатор комментария
  * @param {string} avatar - это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
  * @param {string} message - сам комментарий
  * @param {string} name - имя пользователя оставившего комментарий
  * @param {Array} return arrayComments[] - возвращает массив комментариев
*/
// const generateCommentsToPhoto = () => {
//   const arrayComments = [];
//   for (let i = 0; i < getRandomInteger(NumberOfAllComments.MIN, NumberOfAllComments.MAX); i++) {
//     arrayComments.push ({
//       id: generateCommentsId(),
//       avatar: `img/avatar-${getRandomInteger(NumberOfAllAvatar.MIN, NumberOfAllAvatar.MAX)}.svg`,
//       message: getRandomElements(MESSAGES),
//       name: getRandomElements(USERS_NAME),
//     });
//   }
//   return arrayComments;
// };

/**
  * Функция для создания объекта с описанием фотографии
  * @param {int} id - идентификатор фотографии
  * @param {string} url - ссылка на фотографию
  * @param {string} description - описание фотографии
  * @param {int} likes - количество лайков
  * @param {Array} generateCommentsToPhoto() - массив комментариев
*/
// const getPhotoByUsers = () => ({
//   id: generatePhotoId(),
//   url: `photos/${generatePhotoUrl()}.jpg`,
//   description: getRandomElements(DESCRIPTIONS_PHOTO),
//   likes: getRandomInteger(NumberOfLikes.MIN, NumberOfLikes.MAX),
//   comments: generateCommentsToPhoto(),
// });

/**
  * Функция для создания массива объектов размером NUMBER_OF_ALL_PHOTO с описанием фотографий
*/
const getAllPhotoByUsers = () => Array.from({length: NUMBER_OF_ALL_PHOTO}, getPhotoByUsers);

export {getAllPhotoByUsers};
