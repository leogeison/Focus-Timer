const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase-time')
const buttonDecrease = document.querySelector('.decrease-time')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardFirePlace = document.querySelector('.fireplace')
const cardCoffeShop = document.querySelector('.coffe-shop')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

const buttonPressAudio = new Audio('./sound/button-press.wav')
const kichenTimer = new Audio('./sound/kichen-timer.mp3')
const soundForest = new Audio('./sound/Floresta.wav')
const soundRain = new Audio('./sound/Chuva.wav')
const soundCoffeShop = new Audio('./sound/cafeteria.wav')
const soundFirePlace = new Audio('./sound/Lareira.wav')

buttonPlay.addEventListener('click', function () {
  pressButton()
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  coutdown()
})

buttonPause.addEventListener('click', function () {
  pressButton()
  resetControls()
  hold()
})

buttonStop.addEventListener('click', function () {
  pressButton()
  hold()
  updateTimerDisplay(minutes, 0)
  resetControls()
})

buttonIncrease.addEventListener('click', function () {
  increaseTime()
  pressButton()
})

buttonDecrease.addEventListener('click', function () {
  pressButton()
  decreaseTime()
})

cardForest.addEventListener('click', function () {
  soundCardForest()
  forest()
})

cardRain.addEventListener('click', function () {
  soundCardRain()
  rain()
})

cardFirePlace.addEventListener('click', function () {
  soundCardFirePlace()
})

cardCoffeShop.addEventListener('click', function () {
  soundCardCoffeShop()
})

function forest() {
  cardForest.classList.add('focus')
  cardRain.classList.remove('focus')
  cardFirePlace.classList.remove('focus')
  cardCoffeShop.classList.remove('focus')
}

function rain() {
  cardForest.classList.remove('focus')
  cardRain.classList.add('focus')
  cardFirePlace.classList.remove('focus')
  cardCoffeShop.classList.remove('focus')
}

function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kichenTimer.play()
}

function soundCardForest() {
  soundForest.play()
  soundRain.pause()
  soundCoffeShop.pause()
  soundFirePlace.pause()
}

function soundCardRain() {
  soundForest.pause()
  soundRain.play()
  soundCoffeShop.pause()
  soundFirePlace.pause()
}

function soundCardCoffeShop() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeShop.play()
  soundFirePlace.pause()
}

function soundCardFirePlace() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeShop.pause()
  soundFirePlace.play()
}

function hold() {
  clearTimeout(timerTimeOut)
}

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function increaseTime() {
  minutesDisplay.textContent = String(
    Number(minutesDisplay.textContent) + 1
  ).padStart(2, '0')
}

function decreaseTime() {
  let newMinutes
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)

  if (minutes < 1) {
    return
  }

  newMinutes = minutes - 1
  updateTimerDisplay(newMinutes, seconds)
}

function coutdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      timeEnd()
      resetControls()
      return
    }
    if (seconds <= 0) {
      seconds = 05
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    coutdown()
  }, 1000)
}
