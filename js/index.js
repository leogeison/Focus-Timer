import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'

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

const controls = Controls({ buttonPlay, buttonPause })
const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls: controls.reset
})
const sound = Sound()

buttonPlay.addEventListener('click', function () {
  sound.pressButton()
  controls.play()
  timer.coutdown()
})

buttonPause.addEventListener('click', function () {
  sound.pressButton()
  controls.reset()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  sound.pressButton()
  timer.reset()
  controls.reset()
})

buttonIncrease.addEventListener('click', function () {
  sound.pressButton()
  timer.increase()
})

buttonDecrease.addEventListener('click', function () {
  sound.pressButton()
  timer.decrease()
})

cardForest.addEventListener('click', function () {
  sound.soundCardForest()
})

cardRain.addEventListener('click', function () {
  sound.soundCardRain()
})

cardFirePlace.addEventListener('click', function () {
  sound.soundCardFirePlace()
})

cardCoffeShop.addEventListener('click', function () {
  sound.soundCardCoffeShop()
})
