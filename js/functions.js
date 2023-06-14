//Функция для проверки длины строки.

const isCheckLength = (string, maxLength) => string.length <= maxLength;

isCheckLength('строка', 10);

//Функция для проверки, является ли строка палиндромом.

function isPolindrom(example) {
  const string = example.replaceAll(' ', '').toUpperCase();

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

isPolindrom('121     121');

//Функция для извлечения цифр из строки

function getNumberOfString(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

getNumberOfString('-1.2345');

