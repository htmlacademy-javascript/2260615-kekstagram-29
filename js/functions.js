```js
/**
 * Функция для проверки длины строки
 * @param {string} string - исходная строка
 * @param {int} maxLength - длина для проверки
 * @param {boolean} - возвращает истину в случае если длина string меньше значения maxLength
 */
```
const isCheckingLength = (string, maxLength) => string.length <= maxLength;

isCheckingLength('строка', 10);

```js
/**
 * Функция для проверки, является ли строка палиндромом
 * @param {string} example - исходная строка
 * @param {boolean} - возвращает истину в случае если строка является полиндромом
 */
```
function isPolindrom(example) {
  const string = example.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length / 2; i++) {
    return string[i] === string[string.length - 1 - i];
  }
}

isPolindrom('121     121');

```js
/**
 * Функция для извлечения цифр из строки
 * @param {string} arg - исходная строка
 * @param {int}  parseInt - возвращает цифры из заданной строки arg
 */
```
function getNumberOfString(arg) {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

getNumberOfString('-1.2345');
