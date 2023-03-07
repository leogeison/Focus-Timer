import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'

const body = document.body

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

const volumeForest = cardForest.querySelector('input')
const volumeRain = cardRain.querySelector('input')
const volumeFirePlace = cardFirePlace.querySelector('input')
const volumeCoffeshop = cardCoffeShop.querySelector('input')

const theme = document.querySelector('#themes')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')

const buttons = document.querySelectorAll('#cards button')
let focusedButton = null

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

volumeForest.addEventListener('input', function () {
  sound.soundForest.volume = this.value
})

volumeRain.addEventListener('input', function () {
  sound.soundRain.volume = this.value
})

volumeFirePlace.addEventListener('input', function () {
  sound.soundFirePlace.volume = this.value
})

volumeCoffeshop.addEventListener('input', function () {
  sound.soundCoffeShop.volume = this.value
})

theme.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
  const isDarkMode = body.classList.contains('dark-mode')
  localStorage.setItem('isDarkMode', isDarkMode)

  lightMode.classList.toggle('hide')
  darkMode.classList.toggle('hide')
})

const isDarkMode = localStorage.getItem('isDarkMode') === 'true'
if (isDarkMode) {
  body.classList.add('dark-mode')
  lightMode.classList.add('hide')
  darkMode.classList.remove('hide')
}

buttons.forEach(button => {
  button.addEventListener('focus', () => {
    if (focusedButton) {
      focusedButton.classList.remove('focus')
    }
    focusedButton = button
    button.classList.add('focus')
  })
})
