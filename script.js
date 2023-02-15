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

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  coutdown()
})

buttonPause.addEventListener('click', function () {
  resetControls()
  hold()
})

buttonStop.addEventListener('click', function () {
  hold()
  updateTimerDisplay(minutes, 0)
  resetControls()
})

buttonIncrease.addEventListener('click', function () {
  increaseTime()
})

buttonDecrease.addEventListener('click', function () {
  decreaseTime()
})

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
