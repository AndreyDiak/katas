
function debounce(callback, delay) {
  let timer;
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback.apply(this, args)
      }, delay)
    }
}

const printTextDebounce = debounce(console.log, 1000)

// setTimeout(() => printText(1), 100)
// функция (1) c задержкой в 100 кладется в callstack
// setTimeout(() => printText(2), 500)
// функция (2) с задержкой в 500 кладется в callstack -> (500 - 100) < 1000 ->
// тоесть между функциями прошло 400мс, а мы вызываем функцию тока через 1000мс, следовательно, мы перезаписываем callback
// setTimeout(() => printText(3), 1400)
// функция (3) с задержкой в 1400 кладется в callstack -> (1400 - 500) < 1000 ->
// тоесть между функциями прошло 900мс, а мы вызываем функцию тока через 1000мс, следовательно, мы перезаписываем callback
// setTimeout(() => printText(4), 2700)
// функция (4) с задержкой в 2700 кладется в callstack -> (2700 - 1400) > 1000 ->
// между функциями прошло больше чем 1000мс, следовательно у нас выполнется callback (3), а в callstack положется callback (4), который также ждет 1000мс
// setTimeout(() => printText(5), 3800)
// функция (5) с задержкой в 3800 кладется в callstack -> (3800 - 2700) > 1000 ->
// между функциями прошло больше чем 1000мс, следовательно у нас выполнется callback (4), а в callstack положется callback (5), который также ждет 1000мс
// т.к. функций более нет, мы ждем 1000мс и выполняем callback (5)
// итоговый вывод -> 3, 5, 6

// механизм работы...
// у нас в callstack кладется callback с задержкой в delay
// если за время меньшее delay у нас в callstack попала новая функция, то старая сотрется, и мы снова будем ждать delay...
// ecли за время равное delay у нас в callstack ничего не попало, то мы вы возвращаем результат работы callback-а...

//Если нужно: Запускать 1 раз после N сек простоя.
//
// Частые запуски/вызовы игнорируются, пока они не прекратятся на заданный период времени. После простоя N сек - вызывается функция/обработчик.
//
// Ф-ция debounce сбрасывает счетчик при каждой попытке вызова callback раньше указанной задержки (delay).
//
// Применяется для тяжелых обработчиков на событиях input, keyup/keydown, resize, click.

function throttle(callback, delay) {
  let isWaiting = false
  let savedThis = null
  let savedArgs = null
  return function wrapper(...args) {
    if (isWaiting) {
      savedArgs = args
      savedThis = this
      return
    }
    callback.apply(this, args)
    isWaiting = true

    setTimeout(() => {
      isWaiting = false
      if (savedThis) {
        wrapper.apply(savedThis, savedArgs)
        savedThis = null
      }
    }, delay)
  }
}

const printTextThrottle = throttle(console.log, 100)

for (let i = 0;i < 10; i++) {
  setTimeout(() => printTextThrottle(i), 10*i)
}

// Если нужно: Запускать не чаще, чем 1 раз каждые N сек.
//
// Придерживает частые вызовы до заданного периода/шага (предотвращает запуск функции, если она уже запускалась недавно).
//
// Применяется: для тяжелых обработчиков событий mousemove, scroll.