/**
 * Функция для перевода времени на часах в минуты
 * @param {string} time - исходное время
 * @param {int} - возвращает значение в минутах
 */
const getTimeInMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Функция для проверки происходит ли встреча в рабочее время
 * @param {int} startWork - начало рабочего времени
 * @param {int} endWork - конец рабочего времени
 * @param {int} startMetting - начало встречи
 * @param {int} timeMeeting - время встречи
 * @param {boolean} - возвращает значение была ли встреча в рабочее время
 */
const getWorkTimeMeeting = (startWork, endWork, startMeeting, timeMeeting) => getTimeInMinutes(startWork) <= getTimeInMinutes(startMeeting) &&
  getTimeInMinutes(startMeeting) <= (getTimeInMinutes(endWork) - timeMeeting);

getWorkTimeMeeting('08:00', '17:30', '14:00', 90);
